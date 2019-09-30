import makeItemKeyboardInteractive from './makeItemKeyboardInteractive.js'

export default (itemContext, options) => {
  const {item} = itemContext
  
  // disable link if it's on the current page and label it as such
  const link = item.tagName === 'A' ? item : item.querySelector('a')
  item.setAttribute('role', 'menuitem')
  if (window.location.href === link.href) {
    link.setAttribute('href', '#')
    link.setAttribute('aria-current', 'page')
  }
  
  // make this item keyboard interactive
  item.setAttribute('tabindex', '0')
  makeItemKeyboardInteractive(itemContext, options)
}