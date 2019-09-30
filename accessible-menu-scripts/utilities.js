// get these options from the data attributes or fall back on defaults
export const getMenuOptions = (menuElement, defaults = {}) =>
  Object.assign({
    submenuSelector: '.submenu',
    itemSelector: '.menuItem',
    layout: 'horizontal',
    alignment: 'top',
  }, defaults, menuElement.dataset)

// get only the items that are not nested in submenus, relative to the current scope
export const getItemsInScope = (scopedElement, menuOptions, type) => {
  const {itemSelector, submenuSelector} = menuOptions
  const allItems = [...scopedElement.querySelectorAll(itemSelector)]
  const allSubmenus = [...scopedElement.querySelectorAll(submenuSelector)]
  
  const filterSelector = type === 'submenus' ? submenuSelector : itemSelector
  const itemsToFilter = type === 'submenus' ? allSubmenus : allItems
  const filteredItems = allSubmenus.reduce((items, submenu) => {
      const currentItems = [...submenu.querySelectorAll(filterSelector)]
      items.push(...currentItems)
      return items
    }, [])
  
  return itemsToFilter.filter(item => !filteredItems.includes(item))
}

// focus on the next element
export const focus = (itemsInScope, pref, focusPref = {}) => {
  const {onIndex, fromIndex} = focusPref
  const currentIndex = fromIndex || itemsInScope
    .findIndex(i => i === document.activeElement)

  // determine the index of the next item to focus on
  if (onIndex) return itemsInScope[onIndex].focus()
  const lastIndex = itemsInScope.length - 1
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : lastIndex
  const nextIndex = currentIndex < lastIndex ? currentIndex + 1 : 0
  const focusIndex =
    pref === 'prev' ? prevIndex : 
    pref === 'last' ? lastIndex :
    pref === 'first' ? 0 :
    nextIndex // next by default
  itemsInScope[focusIndex].focus()
}

