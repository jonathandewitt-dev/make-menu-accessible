import menuObject from './menuObject.js'
import makeItemAccessible from './makeItemAccessible.js'
import makeItemKeyboardInteractive from './makeItemKeyboardInteractive.js'
import {setUniqueId} from './utilities.js'
import makeMenuTogglerAcessible from './makeMenuTogglerAccessible.js'

const addLabelTo = menu => {
  const {element, name} = menu
  const title = element.querySelector('h1, h2, h3, h4, h5, h6')

  // prioritize the label as follows:
  // 1. user defined name, 2. any nested heading, 3. default fallback
  setUniqueId(title)
  const label = {
    label: name || 'Site Menu',
    labelledBy: title ? title.id : '',
  }
  const key = name ? 'label' : title ? 'labelledby' : 'label'
  element.setAttribute(`aria-${key}`, label[key])
}

const makeEachMenuAccessible = (menu, keydownCallback, firstLink) => {
  const {element, items, parentItem, options} = menu

  // Make sure the menu is labelled
  addLabelTo(menu)

  // give the current menu a role
  const role = parentItem ? 'menu' : 'menubar'
  element.setAttribute('role', role)
  
  // make the items accessible
  items.forEach(item => {
    makeItemAccessible(item, firstLink)
    makeItemKeyboardInteractive(item, options, keydownCallback)
  })
}

export default (element, keydownCallback = () => {}) => {

  // error handling for a bad element parameter
  if (!element || !(element instanceof HTMLElement))
    throw new Error(`Expected \`HTMLElement\`, instead got \`${element}\`.`)

  const menu = menuObject.addMenu(element)
  const {itemSelector} = menu.options
  const {menus} = menuObject

  // error handling for empy menus
  const allChildren = [...element.querySelectorAll('*')]
  const firstItem = element.querySelector(itemSelector)
  if (!firstItem)
    throw new Error(`Expected the menu to contain at least one item.  Please nest at least one element that matches the selector '${itemSelector}'`)

  // blanket all contained elements with defaults
  const firstLink = firstItem.querySelector('a') || firstItem
  allChildren.forEach(el => {

    // before adding roles, set all to none by default
    const role = el.getAttribute('role') || 'none'
    el.setAttribute('role', role)
  })

  // give this menu a unique id
  setUniqueId(element)

  // make the overall menu toggler accessible
  makeMenuTogglerAcessible(menu, keydownCallback)
  
  // add attributes and keyboard functionality to this menu and all its submenus
  menus.forEach(currentMenu =>
    makeEachMenuAccessible(currentMenu, keydownCallback, firstLink))

  // make any window click collapse all menus
  window.addEventListener('click', event => {
    if (event.target.matches(itemSelector)) return
    const allItems = menuObject.menus.reduce((items, currentMenu) => {
      items.push(...currentMenu.items)
      return items
    }, [])
    menuObject.activeMenuItem = {
      item: allItems[0],
      index: 0,
    }
    allItems.forEach(item => item.collapse && item.collapse('none'))
  })
}
