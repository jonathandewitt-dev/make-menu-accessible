import menuObject from './menuObject.js'
import makeItemAccessible from './makeItemAccessible.js'
import makeItemInteractive from './makeItemInteractive.js'
import {setUniqueId, addEvent, removeAllEvents} from './utilities.js'
import makeMenuTogglerAcessible from './makeMenuTogglerAccessible.js'

const addLabelTo = menu => {
  const {element, name, parentItem} = menu
  const title = element.querySelector('h1, h2, h3, h4, h5, h6')
  const parentText = parentItem && parentItem.element.textContent.trim()

  // prioritize the label as follows:
  // 1. user defined name
  // 2. any nested heading
  // 3. parent item's text
  // 4. default fallback
  const label = {
    label: name || parentText || 'Site Menu',
    labelledBy: title ? setUniqueId(title) : '',
  }
  const key = name ? 'label' : title ? 'labelledby' : 'label'
  element.setAttribute(`aria-${key}`, label[key])
}

const makeEachMenuAccessible = (menu, customCallback, firstLink) => {
  const {element, items, options, overallMenu} = menu

  // Make sure the menu is labelled
  addLabelTo(menu)

  // give the current menu a role
  const role = menu === overallMenu ? 'menubar' : 'menu'
  element.setAttribute('role', role)
  
  // make the items accessible
  items.forEach(item => {
    makeItemAccessible(item, firstLink)
    makeItemInteractive(item, options, overallMenu, customCallback)
  })
}

const makeMenuAccessible = (element, customCallback) => {

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
  makeMenuTogglerAcessible(menu, customCallback)
  
  // add attributes and keyboard functionality to this menu and all its submenus
  const currentMenus = menus.filter(m => m.overallMenu === menu)
  currentMenus.forEach(currentMenu =>
    makeEachMenuAccessible(currentMenu, customCallback, firstLink))

  // make any window click collapse all menus
  const collapseAllMenus = event => {
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
  }
  addEvent(menu, {
    element: window,
    event: 'click',
    callback: collapseAllMenus
  })

  // handle changes to the DOM after running this function
  const observerConfig = {childList: true, subtree: true}
  const menuObserver = new MutationObserver((mutations, observer) => {
    console.warn('The menu has changed, updating the accessibility...')
    removeAllEvents(menu)
    menuObject.menus = menuObject.menus.filter(m => m.overallMenu !== menu)
    makeMenuAccessible(element, customCallback)
    menuObserver.disconnect()
  })
  menuObserver.observe(element, observerConfig)
}

export default makeMenuAccessible