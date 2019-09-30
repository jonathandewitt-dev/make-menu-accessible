import {getMenuOptions, getItemsInScope} from './utilities.js'
import makeMenuItemAccessible from './makeMenuItemAccessible.js'
import makeSubmenuAccessible from './makeSubmenuAccessible.js'

export default (menuElement, menuOptions) => {
  const options = menuOptions || getMenuOptions(menuElement)
  const {name, parentItem} = options
  
  // Make sure the menu is labelled and has a role
  const title = menuElement.querySelector('h1, h2, h3, h4, h5, h6')
  const menuName = name || (title ? title.textContent : 'Site Menu')
  menuElement.setAttribute('aria-label', menuName)
  menuElement.setAttribute('role', 'menubar')
  
  // make the items accessible
  const itemsInScope = getItemsInScope(menuElement, options)
  itemsInScope.forEach(item => {
    const itemContext = {itemsInScope, item, parentItem}
    makeMenuItemAccessible(itemContext, options)
  })
  
  // make submenus accessible too
  const directSubmenus = getItemsInScope(menuElement, options, 'submenus')
  directSubmenus.forEach(submenu => makeSubmenuAccessible(menuElement, submenu, options))
  
}
