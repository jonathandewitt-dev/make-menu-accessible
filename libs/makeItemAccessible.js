
export default (item, firstLink) => {
  const {element, attachedMenu} = item
  
  // disable link if it's on the current page and label it as such
  if (window.location.href === element.href) {
    element.setAttribute('href', '#')
    element.setAttribute('aria-current', 'page')
  }

  // if the item has a submenu, label it as such
  element.setAttribute('role', 'menuitem')
  if (attachedMenu) {
    element.setAttribute('aria-haspopup', 'true')
    element.setAttribute('aria-expanded', 'false')
    attachedMenu.element.setAttribute('aria-hidden', 'true')
  }
  
  // enable only the first item link's tabindex
  const tabindex = element === firstLink ? '0' : '-1'
  element.setAttribute('tabindex', tabindex)
}