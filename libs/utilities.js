import menuObject from './menuObject.js'

// get these options from the data attributes or fall back on defaults
export const getMenuOptions = (menuElement, parentMenu = {}, defaults = {}) => {
  const parentMenuOptions = parentMenu.options || {}

  return Object.assign({
    submenuSelector: '.submenu',
    itemSelector: '.menuItem',
    layout: 'horizontal',
    alignment: 'top',
  }, parentMenuOptions, defaults, menuElement.dataset)
}

// get only the items that are not nested in submenus, relative to the current scope
export const getItemsInScope = (scopedElement, selector, options) => {
  const {submenuSelector} = options
  const allItems = [...scopedElement.querySelectorAll(selector)]
  const allSubmenus = [...scopedElement.querySelectorAll(submenuSelector)]
  const itemsToFilterOut = allSubmenus.reduce((items, submenu) => {
    const itemsBeyondScope = [...submenu.querySelectorAll(selector)]
    items.push(...itemsBeyondScope)
    return items
  }, [])
  return allItems.filter(item => !itemsToFilterOut.includes(item))
}

// focus on the next element
export const focus = (item, pref, useItemIndex) => {
  const {items, anySubmenuIsExpanded, toggler} = item.parentMenu
  const itemIsToggler = toggler === item
  const itemIndex = items.findIndex(i => i === item)
  const activeIndex = useItemIndex ?
    itemIndex :
    menuObject.activeMenuItem.index
  const lastIndex = items.length - 1
  const prevIndex = activeIndex > 0 ? activeIndex - 1 : lastIndex
  const nextIndex = activeIndex < lastIndex ? activeIndex + 1 : 0
  const focusIndex =
    pref === 'prev' ? prevIndex : 
    pref === 'last' ? lastIndex :
    pref === 'first' ? 0 :
    pref === 'current' ? itemIndex :
    nextIndex // next by default
  const itemToFocus = itemIsToggler ? toggler : items[focusIndex]
  itemToFocus.element.focus()
  menuObject.activeMenuItem = {
    item: itemToFocus,
    index: focusIndex,
  }

  // expand if it has a submenu and a submenu was already expanded
  if (anySubmenuIsExpanded && itemToFocus.expand) itemToFocus.expand('none')
}

// expand or collapse a menu given its parent item
export const toggleExpanded = (item, pref, shouldExpand, withFocus) => {
  const {element, attachedMenu} = item
  
  const itemsInSubmenu = attachedMenu.items
  element.setAttribute('aria-expanded', String(shouldExpand))
  attachedMenu.element.setAttribute('aria-hidden', String(!shouldExpand))

  // determine which item to focus, if any
  if (pref === 'none' || !withFocus) return
  if (shouldExpand) return focus(itemsInSubmenu[0], pref)
  focus(item, pref, true)
}

// set unique id on a given element
let idIndex = 0
export const setUniqueId = el => {
  if (!el || el.id) return el ? el.id : null
  const text = el.textContent.replace(/[\s]/g, '').slice(0, 10)
  const idName = text.length ? text : 'id'
  const id = !idIndex ? idName : `${idName}_${idIndex}`
  const elExists = !!document.querySelector(`#${id}`)
  idIndex++
  return el.id = elExists ? setUniqueId(el) : id
}