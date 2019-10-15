import makeItemInteractive from './makeItemInteractive.js'
import {addEvent} from './utilities.js'

export default (menu, customCallback) => {
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
  makeItemInteractive(toggler, options, menu, customCallback)
  
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

  // reapply the menu toggle when the window is resized
  addEvent(menu, {
    element: window,
    event: 'resize',
    callback: toggleMenu
  })
  
}