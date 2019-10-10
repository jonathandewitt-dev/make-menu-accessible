import makeItemKeyboardInteractive from './makeItemKeyboardInteractive.js'
import {addEvent} from './utilities.js'

export default (menu, keydownCallback) => {
  const {element, toggler, options} = menu
  const {mobile} = options
  if (!toggler) return
  const togglerElement = toggler.element

  togglerElement.setAttribute('role', 'button')
  togglerElement.setAttribute('aria-haspopup', 'true')
  togglerElement.setAttribute('aria-expanded', 'false')
  togglerElement.setAttribute('aria-controls', element.id)
  togglerElement.setAttribute('tabindex', '0')
  element.setAttribute('aria-hidden', 'true')
  makeItemKeyboardInteractive(toggler, options, menu, keydownCallback)
  
  // if the toggler is mobile-only, hide and show dynamically
  if (!toggler.isMobile) return

  const mobileWidth =
    mobile && mobile.split(' ')[2] || options.mobileWidth || 0
  const toggleMenu = () => {
    const showToggler = !!mobileWidth ? window.innerWidth < mobileWidth : true
    const tabindex = showToggler ? '0' : '-1'
    togglerElement.setAttribute('tabindex', tabindex)
    togglerElement.setAttribute('aria-hidden', String(!showToggler))
    element.setAttribute('aria-hidden', String(showToggler))
  }
  
  toggleMenu() // initialize
  addEvent(menu, {
    element: window,
    event: 'resize',
    callback: toggleMenu
  })
}