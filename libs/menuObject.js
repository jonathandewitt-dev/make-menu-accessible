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
      getMenuOptions(element, parentMenu, {
        layout: 'vertical',
        alignment: 'left',
      }) :
      getMenuOptions(element, parentMenu)

    const {mobile} = options
    const mobileWidth =
      mobile && mobile.split(' ')[2] || options.mobileWidth || 0

    const menu = {
      element,
      options,
      parentItem,
      parentMenu,
      mobileWidth,
      items: [],
      anySubmenuIsExpanded: false,
    }

    const togglerElement = document.getElementById(options.menuToggler)
    if (togglerElement && !parentItem) {
      const isMobile =
        mobile && mobile.split(' ')[3] === 'true' ||
        options.mobileToggler === 'true'

      menu.toggler = {
        element: togglerElement,
        parentMenu: menu,
        attachedMenu: menu,
        isMobile,
        alignment: togglerElement.dataset.alignment || 'top',
        expand(pref, withFocus = true) { toggleExpanded(this, pref, true, withFocus) },
        collapse(pref, withFocus = true) {
          const screenIsMobile = window.innerWidth < mobileWidth
          if (!isMobile || isMobile && screenIsMobile)
            toggleExpanded(this, pref, false, withFocus)
        },
      }
      menu.parentItem = menu.toggler
    }

    this.menus.push(menu)

    // add items to this menu
    const {itemSelector} = options
    getItemsInScope(element, itemSelector, options).forEach(
      item => this.addItem(item, menu))

    return menu
  },
  addItem(itemElement, parentMenu) {
    const options = parentMenu.options
    const {submenu} = itemElement.dataset
    const {submenuSelector} = options

    // find the link that belongs to this item, if any
    const element = itemElement.querySelector('a') || itemElement

    // find the submenu that belongs to this item, if any
    const siblings = [...element.parentElement.children]
    const nextSibling = element.nextElementSibling
    const nextSiblingIsSubmenu = nextSibling && nextSibling.matches(submenuSelector)
    const submenuElement =
      submenu ?
      document.getElementById(submenu) :
      element.querySelector(submenuSelector) ||
      nextSiblingIsSubmenu && nextSibling ||
      siblings.find(el => el.matches(submenuSelector))
      
    const simpleItem = {
      element,
      parentMenu,
      focus(pref) { focus(this, pref) },
    }

    if (!submenuElement) return parentMenu.items.push(simpleItem)
    const itemWithMenu = Object.assign(simpleItem, {
      expand(pref, withFocus = true) { toggleExpanded(this, pref, true, withFocus) },
      collapse(pref, withFocus = true) { toggleExpanded(this, pref, false, withFocus) },
    })
    itemWithMenu.attachedMenu = this.addMenu(submenuElement, itemWithMenu, parentMenu)
  
    parentMenu.items.push(itemWithMenu)
  },
  getAllItems(relativeMenu) {
    const parentMenu = relativeMenu || this.menus[0]
    const {itemSelector} = parentMenu.options
    const childElements =
      [...parentMenu.element.querySelectorAll(itemSelector)]

    return this.menus.reduce((allItems, menu) => {

      const firstItemOfCurrentMenu =
        menu.items.length && menu.items[0].element
      const isChildOfParentMenu = childElements.find(
        el => (el.querySelector('a') || el) === firstItemOfCurrentMenu)

      if (isChildOfParentMenu) allItems.push(...menu.items)
      return allItems
    }, [])
  },
}
