import {focusKeyMap, expandKeyMap, defaultKeys, collapseKeys, firstKeys, lastKeys} from './keyMaps.js'
import menuObject from './menuObject.js'

// function for enabling keyboard navigation on a single item
export default (item, options, keydownCallback) => {
  const {element} = item
  const itemParentMenu = item.parentMenu
  const menuParentMenu = itemParentMenu.parentMenu
  const {parentItem} = itemParentMenu
  const {menu, mobile} = options

  // menu options
  const layout = options.layout || menu && menu.split(' ')[0]
  const alignment = options.alignment || menu && menu.split(' ')[1]
  const parentMenuOptions = menuParentMenu && menuParentMenu.options
  const parentMenuLayout = parentMenuOptions &&
    (parentMenuOptions.layout ||
    parentMenuOptions.menu &&
    parentMenuOptions.menu.split(' ')[0])

  // mobile options
  const mobileLayout = options.mobileLayout || mobile && mobile.split(' ')[0]
  const mobileAlignment = options.mobileAlignment || mobile && mobile.split(' ')[1]
  const mobileWidth = options.mobileWidth || mobile && mobile.split(' ')[2]
  const parentMobileLayout = parentMenuOptions &&
    (parentMenuOptions.mobileLayout ||
    parentMenuOptions.mobile &&
    parentMenuOptions.mobile.split(' ')[0])

  // function to collapse all collapsible menu items
  const collapseAll = (withFocus = true) => {
    const allItems = menuObject.getAllItems(menuParentMenu)
    const expandedItems = allItems.filter(
      i => i.element.getAttribute('aria-expanded') === 'true')
    if (menuParentMenu) menuParentMenu.anySubmenuIsExpanded = false
    if (itemParentMenu) itemParentMenu.anySubmenuIsExpanded = false
    expandedItems.forEach(currentItem =>
      currentItem.collapse && currentItem.collapse('current', withFocus))
  }

  // determine the action to take based on the key pressed
  element.addEventListener('keydown', event => {

    // get the key maps for the current layout
    const hasMobileOptions = !!(mobileLayout || mobileAlignment || mobileWidth)
    const isMobile = hasMobileOptions && window.innerWidth < mobileWidth
    const {nextKeys, prevKeys} = focusKeyMap[isMobile ? mobileLayout : layout]
    const expandKeys = expandKeyMap[isMobile ? mobileAlignment : alignment]
    const collapseKeyMap = parentMenuOptions ?
      focusKeyMap[isMobile ? parentMobileLayout : parentMenuLayout] :
      {nextKeys: [], prevKeys: []}

    // run the user defined event callback
    const callbackReturnVal = keydownCallback(event)
    const continueKeydown = callbackReturnVal === undefined ? true : callbackReturnVal
    if (!continueKeydown) return

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
  })
}
