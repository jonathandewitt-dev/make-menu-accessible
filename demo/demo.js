import makeMenuAccessible from '../src/index.js'

const menu = document.querySelector('.mainMenu')
makeMenuAccessible(menu, event => {
  console.log('testing')
})
