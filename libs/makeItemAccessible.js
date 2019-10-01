
export default item => {
  const {element, attachedMenu} = item
  
  // disable link if it's on the current page and label it as such
  const link = element.tagName === 'A' ? element : element.querySelector('a')
  element.setAttribute('role', 'menuitem')
  if (window.location.href === link.href) {
    link.setAttribute('href', '#')
    link.setAttribute('aria-current', 'page')
  }

  // if the item has a submenu, label it as such
  if (attachedMenu) {
    element.setAttribute('aria-haspopup', 'true')
    element.setAttribute('aria-expanded', 'false')
    attachedMenu.element.setAttribute('aria-hidden', 'true')
  }
}