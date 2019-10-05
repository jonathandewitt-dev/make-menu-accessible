import makeMenuAccessible from '../src/index.js'

const toggler = document.querySelector('.mobileToggler')
toggler.addEventListener('click', () => {
  const toggledClass = 'toggled'
  const addOrRemove = toggler.classList.contains(toggledClass)
    ? 'remove' : 'add'
  toggler.classList[addOrRemove](toggledClass)
})

const menu = document.querySelector('.menu')
makeMenuAccessible(menu)
