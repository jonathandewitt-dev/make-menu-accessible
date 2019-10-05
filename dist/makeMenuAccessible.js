exports["makeMenuAccessible"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs/keyMaps.js":
/*!*************************!*\
  !*** ./libs/keyMaps.js ***!
  \*************************/
/*! exports provided: defaultKeys, collapseKeys, firstKeys, lastKeys, focusKeyMap, expandKeyMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultKeys\", function() { return defaultKeys; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collapseKeys\", function() { return collapseKeys; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"firstKeys\", function() { return firstKeys; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lastKeys\", function() { return lastKeys; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"focusKeyMap\", function() { return focusKeyMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"expandKeyMap\", function() { return expandKeyMap; });\n// array of keys to use default behavior under certain conditions\r\nconst defaultKeys = ['Enter', 'Spacebar', ' ', 'Tab']\r\n\r\n// array of keys for collapsing\r\nconst collapseKeys = ['Esc', 'Escape']\r\n\r\n// arrays of keys for focusing on the first or last item\r\nconst firstKeys = ['Home', 'PageUp']\r\nconst lastKeys = ['End', 'PageDown']\r\n\r\n// object for mapping keys to focus actions\r\nconst focusKeyMap = {\r\n  horizontal: {\r\n    nextKeys: ['Right', 'ArrowRight'],\r\n    prevKeys: ['Left', 'ArrowLeft'],\r\n  },\r\n  vertical: {\r\n    nextKeys: ['Down', 'ArrowDown'],\r\n    prevKeys: ['Up', 'ArrowUp'],\r\n  },\r\n}\r\n\r\n// object for mapping keys to expand actions\r\nconst expandKeyMap = {\r\n  top: {\r\n    firstKeys: ['Down', 'ArrowDown', 'Enter', 'Spacebar', ' '],\r\n    lastKeys: ['Up', 'ArrowUp'],\r\n  },\r\n  bottom: {\r\n    firstKeys: ['Down', 'ArrowDown'],\r\n    lastKeys: ['Up', 'ArrowUp', 'Enter', 'Spacebar', ' '],\r\n  },\r\n  left: {\r\n    firstKeys: ['Right', 'ArrowRight', 'Enter', 'Spacebar', ' '],\r\n    lastKeys: ['Left', 'ArrowLeft'],\r\n  },\r\n  right: {\r\n    firstKeys: ['Left', 'ArrowLeft', 'Enter', 'Spacebar', ' '],\r\n    lastKeys: ['Right', 'ArrowRight'],\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://makeMenuAccessible/./libs/keyMaps.js?");

/***/ }),

/***/ "./libs/makeItemAccessible.js":
/*!************************************!*\
  !*** ./libs/makeItemAccessible.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ((item, firstLink) => {\r\n  const {element, attachedMenu} = item\r\n  \r\n  // disable link if it's on the current page and label it as such\r\n  if (window.location.href === element.href) {\r\n    element.setAttribute('href', '#')\r\n    element.setAttribute('aria-current', 'page')\r\n  }\r\n\r\n  // if the item has a submenu, label it as such\r\n  element.setAttribute('role', 'menuitem')\r\n  if (attachedMenu) {\r\n    element.setAttribute('aria-haspopup', 'true')\r\n    element.setAttribute('aria-expanded', 'false')\r\n    attachedMenu.element.setAttribute('aria-hidden', 'true')\r\n  }\r\n  \r\n  // enable only the first item link's tabindex\r\n  const tabindex = element === firstLink ? '0' : '-1'\r\n  element.setAttribute('tabindex', tabindex)\r\n});\n\n//# sourceURL=webpack://makeMenuAccessible/./libs/makeItemAccessible.js?");

/***/ }),

/***/ "./libs/makeItemKeyboardInteractive.js":
/*!*********************************************!*\
  !*** ./libs/makeItemKeyboardInteractive.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _keyMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyMaps.js */ \"./libs/keyMaps.js\");\n/* harmony import */ var _menuObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuObject.js */ \"./libs/menuObject.js\");\n\r\n\r\n\r\n// function for enabling keyboard navigation on a single item\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ((item, options, keydownCallback) => {\r\n  const {element} = item\r\n  const itemParentMenu = item.parentMenu\r\n  const menuParentMenu = itemParentMenu.parentMenu\r\n  const {layout, alignment} = options\r\n  const parentMenuOptions = menuParentMenu && menuParentMenu.options\r\n  const {parentItem} = itemParentMenu\r\n  const {nextKeys, prevKeys} = _keyMaps_js__WEBPACK_IMPORTED_MODULE_0__[\"focusKeyMap\"][layout]\r\n  const expandKeys = _keyMaps_js__WEBPACK_IMPORTED_MODULE_0__[\"expandKeyMap\"][alignment]\r\n  const collapseKeyMap = parentMenuOptions ?\r\n    _keyMaps_js__WEBPACK_IMPORTED_MODULE_0__[\"focusKeyMap\"][parentMenuOptions.layout] :\r\n    {nextKeys: [], prevKeys: []}\r\n\r\n  const collapseAll = (withFocus = true) => {\r\n    const allItems = _menuObject_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getAllItems(menuParentMenu)\r\n    const expandedItems = allItems.filter(\r\n      i => i.element.getAttribute('aria-expanded') === 'true')\r\n    if (menuParentMenu) menuParentMenu.anySubmenuIsExpanded = false\r\n    if (itemParentMenu) itemParentMenu.anySubmenuIsExpanded = false\r\n    expandedItems.forEach(currentItem =>\r\n      currentItem.collapse && currentItem.collapse('current', withFocus))\r\n  }\r\n\r\n  // determine the action to take based on the key pressed\r\n  element.addEventListener('keydown', event => {\r\n\r\n    // run the user defined event callback\r\n    const callbackReturnVal = keydownCallback(event)\r\n    const continueKeydown = callbackReturnVal === undefined ? true : callbackReturnVal\r\n    if (!continueKeydown) return\r\n\r\n    // check if the key pressed should use default behavior\r\n    const shouldUseDefault = element.href && _keyMaps_js__WEBPACK_IMPORTED_MODULE_0__[\"defaultKeys\"].includes(event.key)\r\n    if (shouldUseDefault) return event.key === 'Tab' && collapseAll(false)\r\n    event.preventDefault()\r\n    event.stopPropagation()\r\n\r\n    // check if the key pressed should change the focus\r\n    const focusNext = nextKeys.includes(event.key)\r\n    const focusPrev = prevKeys.includes(event.key)\r\n    const focusFirst = _keyMaps_js__WEBPACK_IMPORTED_MODULE_0__[\"firstKeys\"].includes(event.key)\r\n    const focusLast = _keyMaps_js__WEBPACK_IMPORTED_MODULE_0__[\"lastKeys\"].includes(event.key)\r\n    const focusPref =\r\n      focusNext ? 'next' : focusPrev ? 'prev' :\r\n      focusFirst ? 'first' : focusLast ? 'last' : null\r\n    const focusMethod = item.collapse ? 'collapse' : 'focus'\r\n    if (focusPref) return item[focusMethod](focusPref)\r\n\r\n    // check if the key pressed should jump to a particular item\r\n    if (event.key.length === 1) {\r\n      _menuObject_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].filterText += event.key\r\n      const filteredItem = itemParentMenu.items.find(i => {\r\n        const elementText = i.element.textContent.toLowerCase()\r\n        return elementText.startsWith(_menuObject_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].filterText)\r\n      })\r\n      if (filteredItem) filteredItem.focus('current')\r\n\r\n      // clear the text one second after the user stops typing\r\n      clearTimeout(_menuObject_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].filterTimeout)\r\n      _menuObject_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].filterTimeout = setTimeout(\r\n        () => _menuObject_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].filterText = '', 500)\r\n    }\r\n    \r\n    // check if the key pressed should expand a menu (or else collapse)\r\n    const expandFirst = expandKeys.firstKeys.includes(event.key)\r\n    const expandLast = expandKeys.lastKeys.includes(event.key)\r\n    const expandPref = expandFirst ? 'first' : expandLast ? 'last' : null\r\n    const collapseNext = collapseKeyMap.nextKeys.includes(event.key)\r\n    const collapsePrev = collapseKeyMap.prevKeys.includes(event.key)\r\n    const collapsePref = collapseNext ? 'next' : collapsePrev ? 'prev' : 'current'\r\n    \r\n    // expand or collapse as dictated above\r\n    if (expandPref) {\r\n      if (menuParentMenu) menuParentMenu.anySubmenuIsExpanded = true\r\n      return item.expand ?\r\n        item.expand(expandPref) :\r\n        parentItem && parentItem.collapse(collapsePref)\r\n    }\r\n\r\n    // check if the key pressed should collapse all menus\r\n    const shouldCollapse = _keyMaps_js__WEBPACK_IMPORTED_MODULE_0__[\"collapseKeys\"].includes(event.key)\r\n    if (shouldCollapse) collapseAll()\r\n  })\r\n});\r\n\n\n//# sourceURL=webpack://makeMenuAccessible/./libs/makeItemKeyboardInteractive.js?");

/***/ }),

/***/ "./libs/makeMenuAccessible.js":
/*!************************************!*\
  !*** ./libs/makeMenuAccessible.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menuObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuObject.js */ \"./libs/menuObject.js\");\n/* harmony import */ var _makeItemAccessible_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeItemAccessible.js */ \"./libs/makeItemAccessible.js\");\n/* harmony import */ var _makeItemKeyboardInteractive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeItemKeyboardInteractive.js */ \"./libs/makeItemKeyboardInteractive.js\");\n\r\n\r\n\r\n\r\nconst addLabelTo = menu => {\r\n  const {element, name} = menu\r\n  const title = element.querySelector('h1, h2, h3, h4, h5, h6')\r\n\r\n  // make sure the id assigned to this element is unique\r\n  let idIndex = 0\r\n  const setUniqueId = el => {\r\n    if (!el || el.id) return el && el.id\r\n    const idName = el.textContent.replace(' ', '')\r\n    const id = !idIndex ? idName : `${idName}_${idIndex}`\r\n    const elExists = !!document.querySelector(`#${id}`)\r\n    return el.id = elExists ? setUniqueId(idName) : id\r\n  }\r\n\r\n  // prioritize the label as follows:\r\n  // 1. user defined name, 2. any nested heading, 3. default fallback\r\n  const label = {\r\n    label: name || 'Site Menu',\r\n    labelledBy: setUniqueId(title),\r\n  }\r\n  const key = name ? 'label' : title ? 'labelledby' : 'label'\r\n  element.setAttribute(`aria-${key}`, label[key])\r\n}\r\n\r\nconst makeEachMenuAccessible = (menu, keydownCallback, firstLink) => {\r\n  const {element, items, parentItem} = menu\r\n  const {options} = menu\r\n\r\n  // Make sure the menu is labelled\r\n  addLabelTo(menu)\r\n\r\n  // give the current menu a role\r\n  const role = parentItem ? 'menu' : 'menubar'\r\n  element.setAttribute('role', role)\r\n  \r\n  // make the items accessible\r\n  items.forEach(item => {\r\n    Object(_makeItemAccessible_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(item, firstLink)\r\n    Object(_makeItemKeyboardInteractive_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(item, options, keydownCallback)\r\n  })\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ((element, keydownCallback = () => {}) => {\r\n  const menu = _menuObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addMenu(element)\r\n  const {itemSelector} = menu.options\r\n  const {menus} = _menuObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n\r\n  // blanket all contained elements with defaults\r\n  const allChildren = [...element.querySelectorAll('*')]\r\n  const firstItem = allChildren.find(el => el.matches(itemSelector))\r\n  const firstLink = firstItem.querySelector('a') || firstItem\r\n  allChildren.forEach(el => {\r\n\r\n    // before adding roles, set all to none by default\r\n    const role = el.getAttribute('role') || 'none'\r\n    el.setAttribute('role', role)\r\n  })\r\n  \r\n  // add attributes and keyboard functionality to this menu and all its submenus\r\n  menus.forEach(currentMenu =>\r\n    makeEachMenuAccessible(currentMenu, keydownCallback, firstLink))\r\n\r\n  // make any window click collapse all menus\r\n  window.addEventListener('click', event => {\r\n    if (event.target.matches(itemSelector)) return\r\n    const allItems = _menuObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].menus.reduce((items, currentMenu) => {\r\n      items.push(...currentMenu.items)\r\n      return items\r\n    }, [])\r\n    _menuObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].activeMenuItem = {\r\n      item: allItems[0],\r\n      index: 0,\r\n    }\r\n    allItems.forEach(item => item.collapse && item.collapse('none'))\r\n  })\r\n});\r\n\n\n//# sourceURL=webpack://makeMenuAccessible/./libs/makeMenuAccessible.js?");

/***/ }),

/***/ "./libs/menuObject.js":
/*!****************************!*\
  !*** ./libs/menuObject.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ \"./libs/utilities.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  menus: [],\r\n  activeMenuItem: {\r\n    item: null,\r\n    index: 0,\r\n  },\r\n  filterText: '',\r\n  filterTimeout: null,\r\n  addMenu(element, parentItem, parentMenu) {\r\n    const options = parentItem ?\r\n      Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__[\"getMenuOptions\"])(element, {\r\n        layout: 'vertical',\r\n        alignment: 'left',\r\n      }) :\r\n      Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__[\"getMenuOptions\"])(element)\r\n\r\n    const menu = {\r\n      element,\r\n      options,\r\n      parentItem,\r\n      parentMenu,\r\n      items: [],\r\n      anySubmenuIsExpanded: false,\r\n    }\r\n\r\n    this.menus.push(menu)\r\n\r\n    // add items to this menu\r\n    const {itemSelector} = options\r\n    Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__[\"getItemsInScope\"])(element, itemSelector, options).forEach(\r\n      item => this.addItem(item, menu))\r\n\r\n    return menu\r\n  },\r\n  addItem(itemElement, parentMenu) {\r\n    const options = parentMenu.options\r\n    const {submenu} = itemElement.dataset\r\n    const {submenuSelector} = options\r\n\r\n    // find the link that belongs to this item, if any\r\n    const element = itemElement.querySelector('a') || itemElement\r\n\r\n    // find the submenu that belongs to this item, if any\r\n    const siblings = [...element.parentElement.children]\r\n    const submenuElement =\r\n      submenu ?\r\n      document.getElementById(submenu) :\r\n      element.querySelector(submenuSelector)\r\n      || siblings.find(el => el.matches(submenuSelector))\r\n      \r\n    const simpleItem = {\r\n      element,\r\n      parentMenu,\r\n      focus(pref) { Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__[\"focus\"])(this, pref) },\r\n    }\r\n\r\n    if (!submenuElement) return parentMenu.items.push(simpleItem)\r\n    const itemWithMenu = Object.assign(simpleItem, {\r\n      expand(pref, withFocus = true) { Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleExpanded\"])(this, pref, true, withFocus) },\r\n      collapse(pref, withFocus = true) { Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleExpanded\"])(this, pref, false, withFocus) },\r\n    })\r\n    itemWithMenu.attachedMenu = this.addMenu(submenuElement, itemWithMenu, parentMenu)\r\n  \r\n    parentMenu.items.push(itemWithMenu)\r\n  },\r\n  getAllItems(relativeMenu) {\r\n    const parentMenu = relativeMenu || this.menus[0]\r\n    const {itemSelector} = parentMenu.options\r\n    const childElements =\r\n      [...parentMenu.element.querySelectorAll(itemSelector)]\r\n\r\n    return this.menus.reduce((allItems, menu) => {\r\n\r\n      const firstItemOfCurrentMenu =\r\n        menu.items.length && menu.items[0].element\r\n      const isChildOfParentMenu = childElements.find(\r\n        el => (el.querySelector('a') || el) === firstItemOfCurrentMenu)\r\n\r\n      if (isChildOfParentMenu) allItems.push(...menu.items)\r\n      return allItems\r\n    }, [])\r\n  },\r\n});\r\n\n\n//# sourceURL=webpack://makeMenuAccessible/./libs/menuObject.js?");

/***/ }),

/***/ "./libs/utilities.js":
/*!***************************!*\
  !*** ./libs/utilities.js ***!
  \***************************/
/*! exports provided: getMenuOptions, getItemsInScope, focus, toggleExpanded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMenuOptions\", function() { return getMenuOptions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getItemsInScope\", function() { return getItemsInScope; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"focus\", function() { return focus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleExpanded\", function() { return toggleExpanded; });\n/* harmony import */ var _menuObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuObject.js */ \"./libs/menuObject.js\");\n\r\n\r\n// get these options from the data attributes or fall back on defaults\r\nconst getMenuOptions = (menuElement, defaults = {}) => {\r\n\r\n  const parentMenuOptions = []\r\n  _menuObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].menus.forEach(menu => \r\n    parentMenuOptions.push(menu.options))\r\n\r\n  return Object.assign({\r\n    submenuSelector: '.submenu',\r\n    itemSelector: '.menuItem',\r\n    layout: 'horizontal',\r\n    alignment: 'top',\r\n  }, ...parentMenuOptions, defaults, menuElement.dataset)\r\n}\r\n\r\n// get only the items that are not nested in submenus, relative to the current scope\r\nconst getItemsInScope = (scopedElement, selector, options) => {\r\n  const {submenuSelector} = options\r\n  const allItems = [...scopedElement.querySelectorAll(selector)]\r\n  const allSubmenus = [...scopedElement.querySelectorAll(submenuSelector)]\r\n  const itemsToFilterOut = allSubmenus.reduce((items, submenu) => {\r\n    const itemsBeyondScope = [...submenu.querySelectorAll(selector)]\r\n    items.push(...itemsBeyondScope)\r\n    return items\r\n  }, [])\r\n  return allItems.filter(item => !itemsToFilterOut.includes(item))\r\n}\r\n\r\n// focus on the next element\r\nconst focus = (item, pref, useItemIndex) => {\r\n  const {items, anySubmenuIsExpanded} = item.parentMenu\r\n  const itemIndex = items.findIndex(i => i === item)\r\n  const activeIndex = useItemIndex ?\r\n    itemIndex :\r\n    _menuObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].activeMenuItem.index\r\n  const lastIndex = items.length - 1\r\n  const prevIndex = activeIndex > 0 ? activeIndex - 1 : lastIndex\r\n  const nextIndex = activeIndex < lastIndex ? activeIndex + 1 : 0\r\n  const focusIndex =\r\n    pref === 'prev' ? prevIndex : \r\n    pref === 'last' ? lastIndex :\r\n    pref === 'first' ? 0 :\r\n    pref === 'current' ? itemIndex :\r\n    nextIndex // next by default\r\n  const itemToFocus = items[focusIndex]\r\n  itemToFocus.element.focus()\r\n  _menuObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].activeMenuItem = {\r\n    item: itemToFocus,\r\n    index: focusIndex,\r\n  }\r\n\r\n  // expand if it has a submenu and a submenu was already expanded\r\n  if (anySubmenuIsExpanded && itemToFocus.expand) itemToFocus.expand('none')\r\n}\r\n\r\n// expand or collapse a menu given its parent item\r\nconst toggleExpanded = (item, pref, shouldExpand, withFocus) => {\r\n  const {element, attachedMenu} = item\r\n  \r\n  const itemsInSubmenu = attachedMenu.items\r\n  element.setAttribute('aria-expanded', String(shouldExpand))\r\n  attachedMenu.element.setAttribute('aria-hidden', String(!shouldExpand))\r\n\r\n  // determine which item to focus, if any\r\n  if (pref === 'none' || !withFocus) return\r\n  if (shouldExpand) return focus(itemsInSubmenu[0], pref)\r\n  focus(item, pref, true)\r\n}\n\n//# sourceURL=webpack://makeMenuAccessible/./libs/utilities.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: makeMenuAccessible, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _libs_makeMenuAccessible_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/makeMenuAccessible.js */ \"./libs/makeMenuAccessible.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"makeMenuAccessible\", function() { return _libs_makeMenuAccessible_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_libs_makeMenuAccessible_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://makeMenuAccessible/./src/index.js?");

/***/ })

/******/ });