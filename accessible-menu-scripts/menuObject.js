import {getItemsInScope, getMenuOptions, toggleExpanded, focus} from './utilities.js'

export default {
  menus: [],
  activeMenuItem: {
    item: null,
    index: 0,
  },
  filterText: '',
  filterTimeout: null,
  addMenu(element, parentItem, parentMenu) {
    const options = parentItem ?
      getMenuOptions(element, {
        layout: 'vertical',
        alignment: 'left',
      }) :
      getMenuOptions(element)

    const menu = {
      element,
      options,
      parentItem,
      parentMenu,
      items: [],
      anySubmenuIsExpanded: false,
    }

    this.menus.push(menu)

    // add items to this menu
    const {itemSelector} = options
    getItemsInScope(element, itemSelector, options).forEach(
      item => this.addItem(item, menu))

    return menu
  },
  addItem(element, parentMenu) {
    const options = parentMenu.options
    const {submenuSelector} = options

    // find the submenu that belongs to this item, if any
    const siblings = [...element.parentElement.children]
    const submenu = element.querySelector(submenuSelector)
      || siblings.find(el => el.matches(submenuSelector))
      
    const simpleItem = {
      element,
      parentMenu,
      focus(pref) { focus(this, pref) },
    }

    if (!submenu) return parentMenu.items.push(simpleItem)
    const itemWithMenu = Object.assign(simpleItem, {
      expand(pref) { toggleExpanded(this, pref, true) },
      collapse(pref) { toggleExpanded(this, pref, false) },
    })
    itemWithMenu.attachedMenu = this.addMenu(submenu, itemWithMenu, parentMenu)
  
    parentMenu.items.push(itemWithMenu)
  },
  getAllItems(relativeMenu) {
    return this.menus.reduce((allItems, menu) => {
      const {itemSelector} = menu.options
      const childItems = relativeMenu &&
        [...relativeMenu.element.querySelectorAll(itemSelector)]
      const isChildOfMenu = relativeMenu ?
        childItems.find(i => i === menu.items[0].element) :
        true
      if (isChildOfMenu) allItems.push(...menu.items)
      return allItems
    }, [])
  }
}
