import {getMenuOptions, getItemsInScope, focus} from './utilities.js'
import makeMenuAccessible from './makeMenuAccessible.js'

export default (parentMenu, submenuElement, menuOptions) => {
  
  // get the options we need
  const {itemSelector} = menuOptions
  
  // associate submenu with its parent item
  const parent = submenuElement.parentElement
  const parentIsItem = parent.matches(itemSelector)
  const parentItem = parentIsItem ? parent :
    parent.querySelector(itemSelector) || submenuElement.closest(itemSelector)
  parentItem.setAttribute('aria-haspopup', 'true')
  parentItem.setAttribute('aria-expanded', 'false')
  
  // submenus have extra steps, but should be run through the main function too
  const submenuOptions = getMenuOptions(submenuElement, {
    layout: 'vertical',
    alignment: 'left',
    parentMenuOptions: menuOptions,
    parentItem,
  })
  makeMenuAccessible(submenuElement, submenuOptions)
  
  // attach submenu toggle functions to the parent item
  parentItem.expand = pref => {
    submenuElement.setAttribute('aria-hidden', 'false')
    submenuElement.querySelectorAll(itemSelector)
      .forEach(item => item.setAttribute('tabindex', '0'))
    parentItem.setAttribute('aria-expanded', 'true')
    
    // focus on an item inside the submenu
    if (pref === 'none') return
    const itemsInSubmenu = getItemsInScope(submenuElement, menuOptions)
    focus(itemsInSubmenu, pref)
  }
  parentItem.collapse = pref => {
    submenuElement.setAttribute('aria-hidden', 'true')
    submenuElement.querySelectorAll(itemSelector)
      .forEach(item => item.setAttribute('tabindex', '-1'))
    parentItem.setAttribute('aria-expanded', 'false')
    
    // focus on an item outside the submenu
    if (pref === 'none') return
    const itemsInParentMenu = getItemsInScope(parentMenu, menuOptions)
    const parentIndex = itemsInParentMenu.findIndex(i => i === parentItem)
    const focusPref = {}
    focusPref[pref ? 'fromIndex' : 'onIndex'] = parentIndex
    focus(itemsInParentMenu, pref, focusPref)

    // expand if it has a submenu and a submenu was already expanded
    const focusedItem = document.activeElement
    if (pref && focusedItem.expand) focusedItem.expand('none')
  }
  
  // submenus are collapsed by default
  parentItem.collapse('none')
}
