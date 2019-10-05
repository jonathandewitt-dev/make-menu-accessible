import makeItemKeyboardInteractive from "./makeItemKeyboardInteractive.js"

export default menu => {
  const {element, toggler, options} = menu
  const {mobile} = options
  if (!toggler) return
  const togglerElement = toggler.element

  togglerElement.setAttribute('role', 'button')
  togglerElement.setAttribute('aria-haspopup', 'true')
  togglerElement.setAttribute('aria-expanded', 'false')
  togglerElement.setAttribute('aria-controls', element.id)
  element.setAttribute('aria-hidden', 'true')
  makeItemKeyboardInteractive(toggler, options)
  
  // if the toggler is mobile-only, hide and show dynamically
  if (!toggler.isMobile) return

  const mobileWidth =
    mobile && mobile.split(' ')[2] || options.mobileWidth || 0
  const getShowToggler = () => !!mobileWidth ? window.innerWidth < mobileWidth : true
  const toggleMenu = () => {
    togglerElement.setAttribute('aria-hidden', String(!getShowToggler()))
    element.setAttribute('aria-hidden', String(getShowToggler()))
  }
  
  toggleMenu() // initialize
  window.addEventListener('resize', toggleMenu)
}