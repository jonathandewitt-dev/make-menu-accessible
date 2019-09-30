import {focusKeyMap, expandKeyMap, defaultKeys, collapseKeys} from './keyMaps.js'
import {focus} from './utilities.js'

let anySubmenuIsExpanded = false

// function for enabling keyboard navigation on a single item
export default (itemContext, options) => {
  const {itemsInScope, item, parentItem} = itemContext
  const {layout, alignment, itemSelector, parentMenuOptions} = options
  const {nextKeys, prevKeys} = focusKeyMap[layout]
  const {firstKeys, lastKeys} = expandKeyMap[alignment]
  const collapseKeyMap = parentMenuOptions ?
    focusKeyMap[parentMenuOptions.layout] :
    {nextKeys: [], prevKeys: []}

  // determine the action to take based on the key pressed
  item.addEventListener('keydown', event => {

    // check if the key pressed should use default behavior
    const link = item.href ? item : item.querySelector('a')
    const shouldUseDefault = link && link.href && defaultKeys.includes(event.key)
    if (shouldUseDefault) return
    event.preventDefault()

    // check if the key pressed should change the focus
    const focusNext = nextKeys.includes(event.key)
    const focusPrev = prevKeys.includes(event.key)
    const focusPref = focusNext ? 'next' : focusPrev ? 'prev' : null
    if (focusPref) {
      if (item.collapse) item.collapse()
      focus(itemsInScope, focusPref)
      const activeEl = document.activeElement
      const isExpandable = activeEl && activeEl.expand
      return anySubmenuIsExpanded && isExpandable && activeEl.expand('none')
    }
    
    // check if the key pressed should expand a menu (or else collapse)
    const expandFirst = firstKeys.includes(event.key)
    const expandLast = lastKeys.includes(event.key)
    const expandPref = expandFirst ? 'first' : expandLast ? 'last' : null
    const collapseNext = collapseKeyMap.nextKeys.includes(event.key)
    const collapsePrev = collapseKeyMap.prevKeys.includes(event.key)
    const collapsePref = collapseNext ? 'next' : collapsePrev ? 'prev' : null
    anySubmenuIsExpanded = anySubmenuIsExpanded || !!expandPref
    
    // expand or collapse as dictated above
    if (expandPref) return item.expand ?
      item.expand(expandPref) :
      parentItem && parentItem.collapse(collapsePref)

    // check if the key pressed should collapse a menu
    const collapse = collapseKeys.includes(event.key)
    const itemToCollapse = parentItem || item
    anySubmenuIsExpanded = !collapse
    if (collapse) return itemToCollapse && itemToCollapse.collapse()
  })
  
  // make any window click collapse all menus
  window.addEventListener('click', event => {
    if (event.target.matches(itemSelector)) return
    const allItems = document.querySelectorAll(itemSelector)
    allItems.forEach(item => item.collapse && item.collapse('none'))
  })
}
