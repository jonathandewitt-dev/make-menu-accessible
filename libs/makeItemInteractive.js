import {focusKeyMap, expandKeyMap, defaultKeys, collapseKeys, firstKeys, lastKeys} from './keyMaps.js'
import menuObject from './menuObject.js'
import {addEvent} from './utilities.js'

// function for enabling keyboard navigation on a single item
export default (item, options, overallMenu, customCallback = () => {}) => {
  const {element, attachedMenu} = item
  const itemParentMenu = item.parentMenu
  const menuParentMenu = itemParentMenu.parentMenu
  const {toggler, parentItem} = itemParentMenu
  const {menu, mobile} = options

  // menu options
  const layout = menu && menu.split(' ')[0] || options.layout
  const alignment =  menu && menu.split(' ')[1] || options.alignment
  const parentMenuOptions = menuParentMenu && menuParentMenu.options
  const parentMenuLayout = parentMenuOptions &&
    (parentMenuOptions.menu &&
    parentMenuOptions.menu.split(' ')[0] ||
    parentMenuOptions.layout)

  // mobile options
  const mobileOptions = mobile ? mobile.split(' ') : [false, false, false, false, false]
  const mobileLayout = mobileOptions[0] || options.mobileLayout
  const mobileAlignment = mobileOptions[1] || options.mobileAlignment
  const mobileWidth = mobileOptions[2] || options.mobileWidth
  const mobileClick = mobileOptions[4] || options.mobileClick
  const parentMobileLayout = parentMenuOptions &&
    (parentMenuOptions.mobile &&
    parentMenuOptions.mobile.split(' ')[0] ||
    parentMenuOptions.mobileLayout)

  // function to collapse all collapsible menu items
  const collapseAll = (withFocus = true) => {
    const allItems = menuObject.getAllItems(menuParentMenu)
    const expandedItems = allItems.filter(
      i => i.element.getAttribute('aria-expanded') === 'true')
    if (menuParentMenu) menuParentMenu.anySubmenuIsExpanded = false
    if (itemParentMenu) itemParentMenu.anySubmenuIsExpanded = false
    expandedItems.forEach(currentItem =>
      currentItem.collapse && currentItem.collapse('current', withFocus))
    
    // collapse the toggler if applicable
    const {toggler} = itemParentMenu
    if (toggler) toggler.collapse('current', withFocus)
  }

  // determine the action to take based on the key pressed
  const keydownNavigation = event => {

    // run the user defined event callback
    const callbackReturnVal = customCallback(event)
    const continueKeydown = callbackReturnVal === undefined ? true : callbackReturnVal
    if (!continueKeydown) return

    // find current layout
    const isToggler = element === (toggler && toggler.element)
    const isMobile = !!mobileWidth && window.innerWidth < mobileWidth
    const togglerAlignment = toggler && toggler.alignment
    const togglerLayout = togglerAlignment === 'top' || togglerAlignment === 'bottom' ?
      'horizontal' : 'vertical'
    const menuLayout = isMobile ? mobileLayout : layout
    const menuAlignment = isMobile ? mobileAlignment : alignment
    const currentLayout = isToggler ? togglerLayout : menuLayout
    const currentAlignment = isToggler ? togglerAlignment : menuAlignment
    const currentParentLayout = isMobile ? parentMobileLayout : parentMenuLayout

    // get the key maps for the current layout
    const {nextKeys, prevKeys} = focusKeyMap[currentLayout]
    const expandKeys = expandKeyMap[currentAlignment]
    const collapseKeyMap = parentMenuOptions ?
      focusKeyMap[currentParentLayout] :
      {nextKeys: [], prevKeys: []}

    // check if the key pressed should use default behavior
    const haspopup = element.getAttribute('aria-haspopup') === 'true'
    const isExpanded = element.getAttribute('aria-expanded') === 'true'
    const checkPopup = haspopup ? isExpanded : true
    const shouldUseDefault = element.href && checkPopup && defaultKeys.includes(event.key)
    if (shouldUseDefault) return event.key === 'Tab' && collapseAll(false)
    event.preventDefault()
    event.stopPropagation()

    // check if the key pressed should change the focus
    const focusNext = nextKeys.includes(event.key)
    const focusPrev = prevKeys.includes(event.key)
    const focusFirst = firstKeys.includes(event.key)
    const focusLast = lastKeys.includes(event.key)
    const focusPref =
      focusNext ? 'next' : focusPrev ? 'prev' :
      focusFirst ? 'first' : focusLast ? 'last' : null
    const focusMethod = item.collapse ? 'collapse' : 'focus'
    if (focusPref) return item[focusMethod](focusPref)

    // check if the key pressed should jump to a particular item
    if (event.key.length === 1) {
      menuObject.filterText += event.key
      const filteredItem = itemParentMenu.items.find(i => {
        const elementText = i.element.textContent.toLowerCase()
        return elementText.startsWith(menuObject.filterText)
      })
      if (filteredItem) filteredItem.focus('current')

      // clear the text one second after the user stops typing
      clearTimeout(menuObject.filterTimeout)
      menuObject.filterTimeout = setTimeout(
        () => menuObject.filterText = '', 500)
    }
    
    // check if the key pressed should expand a menu (or else collapse)
    const expandFirst = expandKeys.firstKeys.includes(event.key)
    const expandLast = expandKeys.lastKeys.includes(event.key)
    const expandPref = expandFirst ? 'first' : expandLast ? 'last' : null
    const collapseNext = collapseKeyMap.nextKeys.includes(event.key)
    const collapsePrev = collapseKeyMap.prevKeys.includes(event.key)
    const collapsePref = collapseNext ? 'next' : collapsePrev ? 'prev' : 'current'

    // focus within the submenu when a default key is pressed--
    // ONLY if the menu has previously been expanded
    const expandDefault = expandKeys.defaultKeys.includes(event.key)
    const checkExpanded = haspopup && !isExpanded
    const expandDefaultArg = checkExpanded ? 'none' : 'first'
    const expandArg = expandDefault ? expandDefaultArg : expandPref
    
    // expand or collapse as dictated above
    if (expandPref) {
      if (menuParentMenu) menuParentMenu.anySubmenuIsExpanded = true
      return item.expand ?
        item.expand(expandArg) :
        parentItem && parentItem.collapse(collapsePref)
    }

    // check if the key pressed should collapse all menus
    const shouldCollapse = collapseKeys.includes(event.key)
    if (shouldCollapse) collapseAll()
  }

  // expand/collapse submenus when item is being hovered
  const clickEnabled = itemParentMenu.options.click
  const mouseNavigation = event => {

    // run the user defined callback first
    const callbackReturnVal = customCallback(event)
    const continueClick = callbackReturnVal === undefined ? true : callbackReturnVal
    if (!continueClick) return
    
    // determine whether to collapse or expand based on the event
    const isMobile = !!mobileWidth && window.innerWidth < mobileWidth
    const clickActive = isMobile ? mobileClick === 'true' : clickEnabled === 'true'
    const isHovering = event.type === 'mouseenter'
    const isClicking = event.type === 'click'
    const isExpanded = item.element.getAttribute('aria-expanded') === 'true'
    const shouldExpand = isHovering && !clickActive || isClicking && !isExpanded
    const shouldCollapse = !isHovering && !clickActive || isClicking && isExpanded
    const expandOrCollapse = shouldExpand ? 'expand' : 'collapse'
    const method = () => item[expandOrCollapse]('none')

    // only run if necessary
    const shouldExpandOrCollapse = shouldExpand || shouldCollapse
    if (!shouldExpandOrCollapse) return
    
    // collapse all submenus on the current level before expanding the new one
    itemParentMenu.items.forEach(i => i.collapse && i.collapse('none'))
    
    // expand or wait 50 milliseconds to collapse
    clearTimeout(item.hoverTimeout)
    if (shouldExpand) method()
    else item.hoverTimeout = setTimeout(method, 50)

    // only allow default click if the menu was already expanded
    if (!isExpanded && isClicking) event.preventDefault()
    event.stopPropagation()
  }

  // register the keyboard events
  addEvent(overallMenu, {
    element,
    event: 'keydown',
    callback: keydownNavigation
  })

  // register the mouse events
  if (!attachedMenu) return
  const isToggler = element === (toggler && toggler.element)
  const mouseEvents = isToggler ? ['click'] : ['click', 'mouseenter', 'mouseleave']
  const elements = isToggler ? [element] : [element, attachedMenu.element]
  mouseEvents.forEach(event => elements.forEach(el => {
      addEvent(overallMenu, {
        element: el,
        event,
        callback: mouseNavigation
      })
  }))

}
