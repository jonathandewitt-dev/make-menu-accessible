import menuObject from '../libs/menuObject.js'
import makeItemAccessible from '../libs/makeItemAccessible.js'
import makeItemKeyboardInteractive from '../libs/makeItemKeyboardInteractive.js'

const addLabelTo = menu => {
  const {element, name} = menu
  const title = element.querySelector('h1, h2, h3, h4, h5, h6')

  // make sure the id assigned to this element is unique
  let idIndex = 0
  const setUniqueId = el => {
    if (!el || el.id) return el && el.id
    const idName = el.textContent.replace(' ', '')
    const id = !idIndex ? idName : `${idName}_${idIndex}`
    const elExists = !!document.querySelector(`#${id}`)
    return el.id = elExists ? setUniqueId(idName) : id
  }

  // prioritize the label as follows:
  // 1. user defined name, 2. any nested heading, 3. default fallback
  const label = {
    label: name || 'Site Menu',
    labelledBy: setUniqueId(title),
  }
  const key = name ? 'label' : title ? 'labelledby' : 'label'
  element.setAttribute(`aria-${key}`, label[key])
}

const makeEachMenuAccessible = (menu, keydownCallback) => {
  const {element, items, parentItem} = menu
  const {options} = menu

  // Make sure the menu is labelled
  addLabelTo(menu)

  // give the current menu a role
  const role = parentItem ? 'menu' : 'menubar'
  element.setAttribute('role', role)
  
  // make the items accessible
  items.forEach(item => {
    makeItemAccessible(item)
    makeItemKeyboardInteractive(item, options, keydownCallback)
  })
}

export default (element, keydownCallback = () => {}) => {
  const menu = menuObject.addMenu(element)
  const {itemSelector} = menu.options
  const {menus} = menuObject
  
  // add attributes and keyboard functionality to this menu and all its submenus
  menus.forEach(currentMenu => makeEachMenuAccessible(currentMenu, keydownCallback))

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
