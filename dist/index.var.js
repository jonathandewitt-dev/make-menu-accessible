var MakeMenuAccessible =
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultKeys\", function() { return defaultKeys; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collapseKeys\", function() { return collapseKeys; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"firstKeys\", function() { return firstKeys; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lastKeys\", function() { return lastKeys; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"focusKeyMap\", function() { return focusKeyMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"expandKeyMap\", function() { return expandKeyMap; });\n// array of keys to use default behavior under certain conditions\nconst defaultKeys = ['Enter', 'Spacebar', ' ', 'Tab']\n\n// array of keys for collapsing\nconst collapseKeys = ['Esc', 'Escape']\n\n// arrays of keys for focusing on the first or last item\nconst firstKeys = ['Home', 'PageUp']\nconst lastKeys = ['End', 'PageDown']\n\n// object for mapping keys to focus actions\nconst focusKeyMap = {\n  horizontal: {\n    nextKeys: ['Right', 'ArrowRight'],\n    prevKeys: ['Left', 'ArrowLeft'],\n  },\n  vertical: {\n    nextKeys: ['Down', 'ArrowDown'],\n    prevKeys: ['Up', 'ArrowUp'],\n  },\n}\n\n// object for mapping keys to expand actions\nconst expandKeyMap = {\n  top: {\n    firstKeys: ['Down', 'ArrowDown', 'Enter', 'Spacebar', ' '],\n    lastKeys: ['Up', 'ArrowUp'],\n  },\n  bottom: {\n    firstKeys: ['Down', 'ArrowDown'],\n    lastKeys: ['Up', 'ArrowUp', 'Enter', 'Spacebar', ' '],\n  },\n  left: {\n    firstKeys: ['Right', 'ArrowRight', 'Enter', 'Spacebar', ' '],\n    lastKeys: ['Left', 'ArrowLeft'],\n  },\n  right: {\n    firstKeys: ['Left', 'ArrowLeft', 'Enter', 'Spacebar', ' '],\n    lastKeys: ['Right', 'ArrowRight'],\n  }\n}\n\n\n//# sourceURL=webpack://MakeMenuAccessible/./libs/keyMaps.js?");

/***/ }),

/***/ "./libs/makeItemAccessible.js":
/*!************************************!*\
  !*** ./libs/makeItemAccessible.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((item, firstLink) => {\n  const {element, attachedMenu} = item\n  \n  // disable link if it's on the current page and label it as such\n  if (window.location.href === element.href) {\n    element.setAttribute('href', '#')\n    element.setAttribute('aria-current', 'page')\n  }\n\n  // if the item has a submenu, label it as such\n  element.setAttribute('role', 'menuitem')\n  if (attachedMenu) {\n    element.setAttribute('aria-haspopup', 'true')\n    element.setAttribute('aria-expanded', 'false')\n    attachedMenu.element.setAttribute('aria-hidden', 'true')\n  }\n  \n  // enable only the first item link's tabindex\n  const tabindex = element === firstLink ? '0' : '-1'\n  element.setAttribute('tabindex', tabindex)\n});\n\n//# sourceURL=webpack://MakeMenuAccessible/./libs/makeItemAccessible.js?");

/***/ }),

/***/ "./libs/makeItemKeyboardInteractive.js":
/*!*********************************************!*\
  !*** ./libs/makeItemKeyboardInteractive.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _keyMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyMaps.js */ \"./libs/keyMaps.js\");\n/* harmony import */ var _menuObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuObject.js */ \"./libs/menuObject.js\");\n\n\n\n// function for enabling keyboard navigation on a single item\n/* harmony default export */ __webpack_exports__[\"default\"] = ((item, options, keydownCallback) => {\n  const {element} = item\n  const itemParentMenu = item.parentMenu\n  const menuParentMenu = itemParentMenu.parentMenu\n  const {layout, alignment} = options\n  const parentMenuOptions = menuParentMenu && menuParentMenu.options\n  const {parentItem} = itemParentMenu\n  const {nextKeys, prevKeys} = _keyMaps_js__WEBPACK_IMPORTED_MODULE_0__[\"focusKeyMap\"][layout]\n  const expandKeys = _keyMaps_js__WEBPACK_IMPORTED_MODULE_0__[\"expandKeyMap\"][alignment]\n  const collapseKeyMap = parentMenuOptions ?\n    _keyMaps_js__WEBPACK_IMPORTED_MODULE_0__[\"focusKeyMap\"][parentMenuOptions.layout] :\n    {nextKeys: [], prevKeys: []}\n\n  const collapseAll = (withFocus = true) => {\n    const allItems = _menuObject_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getAllItems(menuParentMenu)\n    const expandedItems = allItems.filter(\n      i => i.element.getAttribute('aria-expanded') === 'true')\n    if (menuParentMenu) menuParentMenu.anySubmenuIsExpanded = false\n    if (itemParentMenu) itemParentMenu.anySubmenuIsExpanded = false\n    expandedItems.forEach(currentItem =>\n      currentItem.collapse && currentItem.collapse('current', withFocus))\n  }\n\n  // determine the action to take based on the key pressed\n  element.addEventListener('keydown', event => {\n\n    // run the user defined event callback\n    const callbackReturnVal = keydownCallback(event)\n    const continueKeydown = callbackReturnVal === undefined ? true : callbackReturnVal\n    if (!continueKeydown) return\n\n    // check if the key pressed should use default behavior\n    const shouldUseDefault = element.href && _keyMaps_js__WEBPACK_IMPORTED_MODULE_0__[\"defaultKeys\"].includes(event.key)\n    if (shouldUseDefault) return event.key === 'Tab' && collapseAll(false)\n    event.preventDefault()\n    event.stopPropagation()\n\n    // check if the key pressed should change the focus\n    const focusNext = nextKeys.includes(event.key)\n    const focusPrev = prevKeys.includes(event.key)\n    const focusFirst = _keyMaps_js__WEBPACK_IMPORTED_MODULE_0__[\"firstKeys\"].includes(event.key)\n    const focusLast = _keyMaps_js__WEBPACK_IMPORTED_MODULE_0__[\"lastKeys\"].includes(event.key)\n    const focusPref =\n      focusNext ? 'next' : focusPrev ? 'prev' :\n      focusFirst ? 'first' : focusLast ? 'last' : null\n    const focusMethod = item.collapse ? 'collapse' : 'focus'\n    if (focusPref) return item[focusMethod](focusPref)\n\n    // check if the key pressed should jump to a particular item\n    if (event.key.length === 1) {\n      _menuObject_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].filterText += event.key\n      const filteredItem = itemParentMenu.items.find(i => {\n        const elementText = i.element.textContent.toLowerCase()\n        return elementText.startsWith(_menuObject_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].filterText)\n      })\n      if (filteredItem) filteredItem.focus('current')\n\n      // clear the text one second after the user stops typing\n      clearTimeout(_menuObject_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].filterTimeout)\n      _menuObject_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].filterTimeout = setTimeout(\n        () => _menuObject_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].filterText = '', 500)\n    }\n    \n    // check if the key pressed should expand a menu (or else collapse)\n    const expandFirst = expandKeys.firstKeys.includes(event.key)\n    const expandLast = expandKeys.lastKeys.includes(event.key)\n    const expandPref = expandFirst ? 'first' : expandLast ? 'last' : null\n    const collapseNext = collapseKeyMap.nextKeys.includes(event.key)\n    const collapsePrev = collapseKeyMap.prevKeys.includes(event.key)\n    const collapsePref = collapseNext ? 'next' : collapsePrev ? 'prev' : 'current'\n    \n    // expand or collapse as dictated above\n    if (expandPref) {\n      if (menuParentMenu) menuParentMenu.anySubmenuIsExpanded = true\n      return item.expand ?\n        item.expand(expandPref) :\n        parentItem && parentItem.collapse(collapsePref)\n    }\n\n    // check if the key pressed should collapse all menus\n    const shouldCollapse = _keyMaps_js__WEBPACK_IMPORTED_MODULE_0__[\"collapseKeys\"].includes(event.key)\n    if (shouldCollapse) collapseAll()\n  })\n});\n\n\n//# sourceURL=webpack://MakeMenuAccessible/./libs/makeItemKeyboardInteractive.js?");

/***/ }),

/***/ "./libs/menuObject.js":
/*!****************************!*\
  !*** ./libs/menuObject.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ \"./libs/utilities.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  menus: [],\n  activeMenuItem: {\n    item: null,\n    index: 0,\n  },\n  filterText: '',\n  filterTimeout: null,\n  addMenu(element, parentItem, parentMenu) {\n    const options = parentItem ?\n      Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__[\"getMenuOptions\"])(element, {\n        layout: 'vertical',\n        alignment: 'left',\n      }) :\n      Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__[\"getMenuOptions\"])(element)\n\n    const menu = {\n      element,\n      options,\n      parentItem,\n      parentMenu,\n      items: [],\n      anySubmenuIsExpanded: false,\n    }\n\n    this.menus.push(menu)\n\n    // add items to this menu\n    const {itemSelector} = options\n    Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__[\"getItemsInScope\"])(element, itemSelector, options).forEach(\n      item => this.addItem(item, menu))\n\n    return menu\n  },\n  addItem(itemElement, parentMenu) {\n    const options = parentMenu.options\n    const {submenuSelector} = options\n\n    // find the link that belongs to this item, if any\n    const element = itemElement.querySelector('a') || itemElement\n\n    // find the submenu that belongs to this item, if any\n    const siblings = [...element.parentElement.children]\n    const submenu = element.querySelector(submenuSelector)\n      || siblings.find(el => el.matches(submenuSelector))\n      \n    const simpleItem = {\n      element,\n      parentMenu,\n      focus(pref) { Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__[\"focus\"])(this, pref) },\n    }\n\n    if (!submenu) return parentMenu.items.push(simpleItem)\n    const itemWithMenu = Object.assign(simpleItem, {\n      expand(pref, withFocus = true) { Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleExpanded\"])(this, pref, true, withFocus) },\n      collapse(pref, withFocus = true) { Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleExpanded\"])(this, pref, false, withFocus) },\n    })\n    itemWithMenu.attachedMenu = this.addMenu(submenu, itemWithMenu, parentMenu)\n  \n    parentMenu.items.push(itemWithMenu)\n  },\n  getAllItems(relativeMenu) {\n    return this.menus.reduce((allItems, menu) => {\n      const {itemSelector} = menu.options\n      const childItems = relativeMenu ?\n        [...relativeMenu.element.querySelectorAll(itemSelector)] :\n        []\n      const matchingElement = childItems.find(item => {\n        const element = item.querySelector('a') || i\n        return element === menu.items[0].element\n      })\n      const isChildOfMenu = relativeMenu ? !!matchingElement : true\n      if (isChildOfMenu) allItems.push(...menu.items)\n      return allItems\n    }, [])\n  },\n});\n\n\n//# sourceURL=webpack://MakeMenuAccessible/./libs/menuObject.js?");

/***/ }),

/***/ "./libs/utilities.js":
/*!***************************!*\
  !*** ./libs/utilities.js ***!
  \***************************/
/*! exports provided: getMenuOptions, getItemsInScope, focus, toggleExpanded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMenuOptions\", function() { return getMenuOptions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getItemsInScope\", function() { return getItemsInScope; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"focus\", function() { return focus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleExpanded\", function() { return toggleExpanded; });\n/* harmony import */ var _menuObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuObject.js */ \"./libs/menuObject.js\");\n\n\n// get these options from the data attributes or fall back on defaults\nconst getMenuOptions = (menuElement, defaults = {}) => {\n\n  const parentMenuOptions = []\n  _menuObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].menus.forEach(menu => \n    parentMenuOptions.push(menu.options))\n\n  return Object.assign({\n    submenuSelector: '.submenu',\n    itemSelector: '.menuItem',\n    layout: 'horizontal',\n    alignment: 'top',\n  }, ...parentMenuOptions, defaults, menuElement.dataset)\n}\n\n// get only the items that are not nested in submenus, relative to the current scope\nconst getItemsInScope = (scopedElement, selector, options) => {\n  const {submenuSelector} = options\n  const allItems = [...scopedElement.querySelectorAll(selector)]\n  const allSubmenus = [...scopedElement.querySelectorAll(submenuSelector)]\n  const itemsToFilterOut = allSubmenus.reduce((items, submenu) => {\n    const itemsBeyondScope = [...submenu.querySelectorAll(selector)]\n    items.push(...itemsBeyondScope)\n    return items\n  }, [])\n  return allItems.filter(item => !itemsToFilterOut.includes(item))\n}\n\n// focus on the next element\nconst focus = (item, pref, useItemIndex) => {\n  const {items, anySubmenuIsExpanded} = item.parentMenu\n  const itemIndex = items.findIndex(i => i === item)\n  const activeIndex = useItemIndex ?\n    itemIndex :\n    _menuObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].activeMenuItem.index\n  const lastIndex = items.length - 1\n  const prevIndex = activeIndex > 0 ? activeIndex - 1 : lastIndex\n  const nextIndex = activeIndex < lastIndex ? activeIndex + 1 : 0\n  const focusIndex =\n    pref === 'prev' ? prevIndex : \n    pref === 'last' ? lastIndex :\n    pref === 'first' ? 0 :\n    pref === 'current' ? itemIndex :\n    nextIndex // next by default\n  const itemToFocus = items[focusIndex]\n  itemToFocus.element.focus()\n  _menuObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].activeMenuItem = {\n    item: itemToFocus,\n    index: focusIndex,\n  }\n\n  // expand if it has a submenu and a submenu was already expanded\n  if (anySubmenuIsExpanded && itemToFocus.expand) itemToFocus.expand('none')\n}\n\n// expand or collapse a menu given its parent item\nconst toggleExpanded = (item, pref, shouldExpand, withFocus) => {\n  const {element, attachedMenu} = item\n  \n  const itemsInSubmenu = attachedMenu.items\n  element.setAttribute('aria-expanded', String(shouldExpand))\n  attachedMenu.element.setAttribute('aria-hidden', String(!shouldExpand))\n\n  // determine which item to focus, if any\n  if (pref === 'none' || !withFocus) return\n  if (shouldExpand) return focus(itemsInSubmenu[0], pref)\n  focus(item, pref, true)\n}\n\n//# sourceURL=webpack://MakeMenuAccessible/./libs/utilities.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _libs_menuObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/menuObject.js */ \"./libs/menuObject.js\");\n/* harmony import */ var _libs_makeItemAccessible_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/makeItemAccessible.js */ \"./libs/makeItemAccessible.js\");\n/* harmony import */ var _libs_makeItemKeyboardInteractive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/makeItemKeyboardInteractive.js */ \"./libs/makeItemKeyboardInteractive.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n\n\n\nvar addLabelTo = function addLabelTo(menu) {\n  var element = menu.element,\n      name = menu.name;\n  var title = element.querySelector('h1, h2, h3, h4, h5, h6'); // make sure the id assigned to this element is unique\n\n  var idIndex = 0;\n\n  var setUniqueId = function setUniqueId(el) {\n    if (!el || el.id) return el && el.id;\n    var idName = el.textContent.replace(' ', '');\n    var id = !idIndex ? idName : \"\".concat(idName, \"_\").concat(idIndex);\n    var elExists = !!document.querySelector(\"#\".concat(id));\n    return el.id = elExists ? setUniqueId(idName) : id;\n  }; // prioritize the label as follows:\n  // 1. user defined name, 2. any nested heading, 3. default fallback\n\n\n  var label = {\n    label: name || 'Site Menu',\n    labelledBy: setUniqueId(title)\n  };\n  var key = name ? 'label' : title ? 'labelledby' : 'label';\n  element.setAttribute(\"aria-\".concat(key), label[key]);\n};\n\nvar makeEachMenuAccessible = function makeEachMenuAccessible(menu, keydownCallback, firstLink) {\n  var element = menu.element,\n      items = menu.items,\n      parentItem = menu.parentItem;\n  var options = menu.options; // Make sure the menu is labelled\n\n  addLabelTo(menu); // give the current menu a role\n\n  var role = parentItem ? 'menu' : 'menubar';\n  element.setAttribute('role', role); // make the items accessible\n\n  items.forEach(function (item) {\n    Object(_libs_makeItemAccessible_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(item, firstLink);\n    Object(_libs_makeItemKeyboardInteractive_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(item, options, keydownCallback);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (element) {\n  var keydownCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};\n  var menu = _libs_menuObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addMenu(element);\n  var itemSelector = menu.options.itemSelector;\n  var menus = _libs_menuObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].menus; // blanket all contained elements with defaults\n\n  var allChildren = _toConsumableArray(element.querySelectorAll('*'));\n\n  var firstLink = allChildren.find(function (el) {\n    return el.matches('a') && (el.matches(itemSelector) || el.closest(itemSelector));\n  });\n  allChildren.forEach(function (el) {\n    // before adding roles, set all to none by default\n    var role = el.getAttribute('role') || 'none';\n    el.setAttribute('role', role);\n  }); // add attributes and keyboard functionality to this menu and all its submenus\n\n  menus.forEach(function (currentMenu) {\n    return makeEachMenuAccessible(currentMenu, keydownCallback, firstLink);\n  }); // make any window click collapse all menus\n\n  window.addEventListener('click', function (event) {\n    if (event.target.matches(itemSelector)) return;\n    var allItems = _libs_menuObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].menus.reduce(function (items, currentMenu) {\n      items.push.apply(items, _toConsumableArray(currentMenu.items));\n      return items;\n    }, []);\n    _libs_menuObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].activeMenuItem = {\n      item: allItems[0],\n      index: 0\n    };\n    allItems.forEach(function (item) {\n      return item.collapse && item.collapse('none');\n    });\n  });\n});\n\n//# sourceURL=webpack://MakeMenuAccessible/./src/index.js?");

/***/ })

/******/ });