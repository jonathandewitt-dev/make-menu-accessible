import makeMenuAccessible from '../src/index.js'
// const makeMenuAccessible = MakeMenuAccessible.default

const menu = document.querySelector('.mainMenu')
const menu2 = document.querySelector('.mainMenu2')

const item = document.querySelectorAll('.menuItem')[2]
const parent = item.parentElement
const clone = item.cloneNode(true)

makeMenuAccessible(menu)
makeMenuAccessible(menu2)

setTimeout(() => {
  clone.firstChild.textContent = 'test'
  clone.firstChild.href = '/test'
  parent.replaceChild(clone, item)
}, 1000)