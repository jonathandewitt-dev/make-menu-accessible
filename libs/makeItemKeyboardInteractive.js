import {focusKeyMap, expandKeyMap, defaultKeys, collapseKeys, firstKeys, lastKeys} from './keyMaps.js'
import menuObject from './menuObject.js'
import {addEvent} from './utilities.js'

// function for enabling keyboard navigation on a single item
export default (item, options, overallMenu, keydownCallback = () => {}) => {
  const {element} = item
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
  const mobileLayout = mobile && mobile.split(' ')[0] || options.mobileLayout
  const mobileAlignment = mobile && mobile.split(' ')[1] || options.mobileAlignment
  const mobileWidth = mobile && mobile.split(' ')[2] || options.mobileWidth
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
    const callbackReturnVal = keydownCallback(event)
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
    const shouldUseDefault = element.href && defaultKeys.includes(event.key)
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
    
    // expand or collapse as dictated above
    if (expandPref) {
      if (menuParentMenu) menuParentMenu.anySubmenuIsExpanded = true
      return item.expand ?
        item.expand(expandPref) :
        parentItem && parentItem.collapse(collapsePref)
    }

    // check if the key pressed should collapse all menus
    const shouldCollapse = collapseKeys.includes(event.key)
    if (shouldCollapse) collapseAll()
  }

  addEvent(overallMenu, {
    element,
    event: 'keydown',
    callback: keydownNavigation
  })

}
