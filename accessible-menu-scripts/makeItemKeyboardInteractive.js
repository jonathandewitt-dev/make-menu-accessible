import {focusKeyMap, expandKeyMap, defaultKeys, collapseKeys} from './keyMaps.js'
import menuObject from './menuObject.js'

// function for enabling keyboard navigation on a single item
export default (item, options) => {
  const {element} = item
  const itemParentMenu = item.parentMenu
  const menuParentMenu = itemParentMenu.parentMenu
  const {layout, alignment} = options
  const parentMenuOptions = menuParentMenu && menuParentMenu.options
  const {parentItem} = itemParentMenu
  const {nextKeys, prevKeys} = focusKeyMap[layout]
  const {firstKeys, lastKeys} = expandKeyMap[alignment]
  const collapseKeyMap = parentMenuOptions ?
    focusKeyMap[parentMenuOptions.layout] :
    {nextKeys: [], prevKeys: []}

  // set the default tabindex
  element.setAttribute('tabindex', '0')

  // determine the action to take based on the key pressed
  element.addEventListener('keydown', event => {

    // check if the key pressed should use default behavior
    const link = element.href ? element : element.querySelector('a')
    const shouldUseDefault = link && link.href && defaultKeys.includes(event.key)
    if (shouldUseDefault) return
    event.preventDefault()

    // check if the key pressed should change the focus
    const focusNext = nextKeys.includes(event.key)
    const focusPrev = prevKeys.includes(event.key)
    const focusPref = focusNext ? 'next' : focusPrev ? 'prev' : null
    const focusMethod = item.collapse ? 'collapse' : 'focus'
    if (focusPref) return item[focusMethod](focusPref)
    
    // check if the key pressed should expand a menu (or else collapse)
    const expandFirst = firstKeys.includes(event.key)
    const expandLast = lastKeys.includes(event.key)
    const expandPref = expandFirst ? 'first' : expandLast ? 'last' : null
    const collapseNext = collapseKeyMap.nextKeys.includes(event.key)
    const collapsePrev = collapseKeyMap.prevKeys.includes(event.key)
    const collapsePref = collapseNext ? 'next' : collapsePrev ? 'prev' : 'current'
    
    // expand or collapse as dictated above
    if (expandPref) {
      menuObject.anySubmenuIsExpanded = true
      return item.expand ?
        item.expand(expandPref) :
        parentItem && parentItem.collapse(collapsePref)
    }

    // check if the key pressed should collapse a menu
    const shouldCollapse = collapseKeys.includes(event.key)
    const itemToCollapse = parentItem || item
    if (shouldCollapse) {
      menuObject.anySubmenuIsExpanded = false
      return itemToCollapse && itemToCollapse.collapse('current')
    }
  })
}
