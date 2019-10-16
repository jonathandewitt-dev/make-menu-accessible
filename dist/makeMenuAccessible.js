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

/***/ "./libs/makeItemInteractive.js":
/*!*************************************!*\
  !*** ./libs/makeItemInteractive.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _keyMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyMaps.js */ \"./libs/keyMaps.js\");\n/* harmony import */ var _menuObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuObject.js */ \"./libs/menuObject.js\");\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities.js */ \"./libs/utilities.js\");\n\r\n\r\n\r\n\r\n// function for enabling keyboard navigation on a single item\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ((item, options, overallMenu, customCallback = () => {}) => {\r\n  const {element, attachedMenu} = item\r\n  const itemParentMenu = item.parentMenu\r\n  const menuParentMenu = itemParentMenu.parentMenu\r\n  const {toggler, parentItem} = itemParentMenu\r\n  const {menu, mobile} = options\r\n\r\n  // menu options\r\n  const layout = menu && menu.split(' ')[0] || options.layout\r\n  const alignment =  menu && menu.split(' ')[1] || options.alignment\r\n  const parentMenuOptions = menuParentMenu && menuParentMenu.options\r\n  const parentMenuLayout = parentMenuOptions &&\r\n    (parentMenuOptions.menu &&\r\n    parentMenuOptions.menu.split(' ')[0] ||\r\n    parentMenuOptions.layout)\r\n\r\n  // mobile options\r\n  const mobileOptions = mobile ? mobile.split(' ') : [false, false, false, false, false]\r\n  const mobileLayout = mobileOptions[0] || options.mobileLayout\r\n  const mobileAlignment = mobileOptions[1] || options.mobileAlignment\r\n  const mobileWidth = mobileOptions[2] || options.mobileWidth\r\n  const mobileClick = mobileOptions[4] || options.mobileClick\r\n  const parentMobileLayout = parentMenuOptions &&\r\n    (parentMenuOptions.mobile &&\r\n    parentMenuOptions.mobile.split(' ')[0] ||\r\n    parentMenuOptions.mobileLayout)\r\n\r\n  // function to collapse all collapsible menu items\r\n  const collapseAll = (withFocus = true) => {\r\n    const allItems = _menuObject_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getAllItems(menuParentMenu)\r\n    const expandedItems = allItems.filter(\r\n      i => i.element.getAttribute('aria-expanded') === 'true')\r\n    if (menuParentMenu) menuParentMenu.anySubmenuIsExpanded = false\r\n    if (itemParentMenu) itemParentMenu.anySubmenuIsExpanded = false\r\n    expandedItems.forEach(currentItem =>\r\n      currentItem.collapse && currentItem.collapse('current', withFocus))\r\n    \r\n    // collapse the toggler if applicable\r\n    const {toggler} = itemParentMenu\r\n    if (toggler) toggler.collapse('current', withFocus)\r\n  }\r\n\r\n  // determine the action to take based on the key pressed\r\n  const keydownNavigation = event => {\r\n\r\n    // run the user defined event callback\r\n    const callbackReturnVal = customCallback(event)\r\n    const continueKeydown = callbackReturnVal === undefined ? true : callbackReturnVal\r\n    if (!continueKeydown) return\r\n\r\n    // find current layout\r\n    const isToggler = element === (toggler && toggler.element)\r\n    const isMobile = !!mobileWidth && window.innerWidth < mobileWidth\r\n    const togglerAlignment = toggler && toggler.alignment\r\n    const togglerLayout = togglerAlignment === 'top' || togglerAlignment === 'bottom' ?\r\n      'horizontal' : 'vertical'\r\n    const menuLayout = isMobile ? mobileLayout : layout\r\n    const menuAlignment = isMobile ? mobileAlignment : alignment\r\n    const currentLayout = isToggler ? togglerLayout : menuLayout\r\n    const currentAlignment = isToggler ? togglerAlignment : menuAlignment\r\n    const currentParentLayout = isMobile ? parentMobileLayout : parentMenuLayout\r\n\r\n    // get the key maps for the current layout\r\n    const {nextKeys, prevKeys} = _keyMaps_js__WEBPACK_IMPORTED_MODULE_0__[\"focusKeyMap\"][currentLayout]\r\n    const expandKeys = _keyMaps_js__WEBPACK_IMPORTED_MODULE_0__[\"expandKeyMap\"][currentAlignment]\r\n    const collapseKeyMap = parentMenuOptions ?\r\n      _keyMaps_js__WEBPACK_IMPORTED_MODULE_0__[\"focusKeyMap\"][currentParentLayout] :\r\n      {nextKeys: [], prevKeys: []}\r\n\r\n    // check if the key pressed should use default behavior\r\n    const shouldUseDefault = element.href && _keyMaps_js__WEBPACK_IMPORTED_MODULE_0__[\"defaultKeys\"].includes(event.key)\r\n    if (shouldUseDefault) return event.key === 'Tab' && collapseAll(false)\r\n    event.preventDefault()\r\n    event.stopPropagation()\r\n\r\n    // check if the key pressed should change the focus\r\n    const focusNext = nextKeys.includes(event.key)\r\n    const focusPrev = prevKeys.includes(event.key)\r\n    const focusFirst = _keyMaps_js__WEBPACK_IMPORTED_MODULE_0__[\"firstKeys\"].includes(event.key)\r\n    const focusLast = _keyMaps_js__WEBPACK_IMPORTED_MODULE_0__[\"lastKeys\"].includes(event.key)\r\n    const focusPref =\r\n      focusNext ? 'next' : focusPrev ? 'prev' :\r\n      focusFirst ? 'first' : focusLast ? 'last' : null\r\n    const focusMethod = item.collapse ? 'collapse' : 'focus'\r\n    if (focusPref) return item[focusMethod](focusPref)\r\n\r\n    // check if the key pressed should jump to a particular item\r\n    if (event.key.length === 1) {\r\n      _menuObject_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].filterText += event.key\r\n      const filteredItem = itemParentMenu.items.find(i => {\r\n        const elementText = i.element.textContent.toLowerCase()\r\n        return elementText.startsWith(_menuObject_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].filterText)\r\n      })\r\n      if (filteredItem) filteredItem.focus('current')\r\n\r\n      // clear the text one second after the user stops typing\r\n      clearTimeout(_menuObject_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].filterTimeout)\r\n      _menuObject_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].filterTimeout = setTimeout(\r\n        () => _menuObject_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].filterText = '', 500)\r\n    }\r\n    \r\n    // check if the key pressed should expand a menu (or else collapse)\r\n    const expandFirst = expandKeys.firstKeys.includes(event.key)\r\n    const expandLast = expandKeys.lastKeys.includes(event.key)\r\n    const expandPref = expandFirst ? 'first' : expandLast ? 'last' : null\r\n    const collapseNext = collapseKeyMap.nextKeys.includes(event.key)\r\n    const collapsePrev = collapseKeyMap.prevKeys.includes(event.key)\r\n    const collapsePref = collapseNext ? 'next' : collapsePrev ? 'prev' : 'current'\r\n    \r\n    // expand or collapse as dictated above\r\n    if (expandPref) {\r\n      if (menuParentMenu) menuParentMenu.anySubmenuIsExpanded = true\r\n      return item.expand ?\r\n        item.expand(expandPref) :\r\n        parentItem && parentItem.collapse(collapsePref)\r\n    }\r\n\r\n    // check if the key pressed should collapse all menus\r\n    const shouldCollapse = _keyMaps_js__WEBPACK_IMPORTED_MODULE_0__[\"collapseKeys\"].includes(event.key)\r\n    if (shouldCollapse) collapseAll()\r\n  }\r\n\r\n  // expand/collapse submenus when item is being hovered\r\n  const clickEnabled = itemParentMenu.options.click\r\n  const mouseNavigation = event => {\r\n\r\n    // run the user defined callback first\r\n    const callbackReturnVal = customCallback(event)\r\n    const continueClick = callbackReturnVal === undefined ? true : callbackReturnVal\r\n    if (!continueClick) return\r\n    \r\n    // determine whether to collapse or expand based on the event\r\n    const isMobile = !!mobileWidth && window.innerWidth < mobileWidth\r\n    const clickActive = isMobile ? mobileClick === 'true' : clickEnabled === 'true'\r\n    const isHovering = event.type === 'mouseenter'\r\n    const isClicking = event.type === 'click'\r\n    const isExpanded = item.element.getAttribute('aria-expanded') === 'true'\r\n    const shouldExpand = isHovering && !clickActive || isClicking && !isExpanded\r\n    const shouldCollapse = !isHovering && !clickActive || isClicking && isExpanded\r\n    const expandOrCollapse = shouldExpand ? 'expand' : 'collapse'\r\n    const method = () => item[expandOrCollapse]('none')\r\n\r\n    // only run if necessary\r\n    const shouldExpandOrCollapse = shouldExpand || shouldCollapse\r\n    if (!shouldExpandOrCollapse) return\r\n    \r\n    // collapse all submenus on the current level before expanding the new one\r\n    itemParentMenu.items.forEach(i => i.collapse && i.collapse('none'))\r\n    \r\n    // expand or wait 50 milliseconds to collapse\r\n    clearTimeout(item.hoverTimeout)\r\n    if (shouldExpand) method()\r\n    else item.hoverTimeout = setTimeout(method, 50)\r\n\r\n    // only allow default click if the menu was already expanded\r\n    if (!isExpanded && isClicking) event.preventDefault()\r\n    event.stopPropagation()\r\n  }\r\n\r\n  // register the keyboard events\r\n  Object(_utilities_js__WEBPACK_IMPORTED_MODULE_2__[\"addEvent\"])(overallMenu, {\r\n    element,\r\n    event: 'keydown',\r\n    callback: keydownNavigation\r\n  })\r\n\r\n  // register the mouse events\r\n  if (!attachedMenu) return\r\n  const isToggler = element === (toggler && toggler.element)\r\n  const mouseEvents = isToggler ? ['click'] : ['click', 'mouseenter', 'mouseleave']\r\n  const elements = isToggler ? [element] : [element, attachedMenu.element]\r\n  mouseEvents.forEach(event => elements.forEach(el => {\r\n      Object(_utilities_js__WEBPACK_IMPORTED_MODULE_2__[\"addEvent\"])(overallMenu, {\r\n        element: el,\r\n        event,\r\n        callback: mouseNavigation\r\n      })\r\n  }))\r\n\r\n});\r\n\n\n//# sourceURL=webpack://makeMenuAccessible/./libs/makeItemInteractive.js?");

/***/ }),

/***/ "./libs/makeMenuAccessible.js":
/*!************************************!*\
  !*** ./libs/makeMenuAccessible.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menuObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuObject.js */ \"./libs/menuObject.js\");\n/* harmony import */ var _makeItemAccessible_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeItemAccessible.js */ \"./libs/makeItemAccessible.js\");\n/* harmony import */ var _makeItemInteractive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeItemInteractive.js */ \"./libs/makeItemInteractive.js\");\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities.js */ \"./libs/utilities.js\");\n/* harmony import */ var _makeMenuTogglerAccessible_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./makeMenuTogglerAccessible.js */ \"./libs/makeMenuTogglerAccessible.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst addLabelTo = menu => {\r\n  const {element, name, parentItem} = menu\r\n  const title = element.querySelector('h1, h2, h3, h4, h5, h6')\r\n  const parentText = parentItem && parentItem.element.textContent.trim()\r\n\r\n  // prioritize the label as follows:\r\n  // 1. user defined name\r\n  // 2. any nested heading\r\n  // 3. parent item's text\r\n  // 4. default fallback\r\n  const label = {\r\n    label: name || parentText || 'Site Menu',\r\n    labelledBy: title ? Object(_utilities_js__WEBPACK_IMPORTED_MODULE_3__[\"setUniqueId\"])(title) : '',\r\n  }\r\n  const key = name ? 'label' : title ? 'labelledby' : 'label'\r\n  element.setAttribute(`aria-${key}`, label[key])\r\n}\r\n\r\nconst makeEachMenuAccessible = (menu, customCallback, firstLink) => {\r\n  const {element, items, options, overallMenu} = menu\r\n\r\n  // Make sure the menu is labelled\r\n  addLabelTo(menu)\r\n\r\n  // give the current menu a role\r\n  const role = menu === overallMenu ? 'menubar' : 'menu'\r\n  element.setAttribute('role', role)\r\n  \r\n  // make the items accessible\r\n  items.forEach(item => {\r\n    Object(_makeItemAccessible_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(item, firstLink)\r\n    Object(_makeItemInteractive_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(item, options, overallMenu, customCallback)\r\n  })\r\n}\r\n\r\nconst makeMenuAccessible = (element, customCallback) => {\r\n\r\n  // error handling for a bad element parameter\r\n  if (!element || !(element instanceof HTMLElement))\r\n    throw new Error(`Expected \\`HTMLElement\\`, instead got \\`${element}\\`.`)\r\n\r\n  const menu = _menuObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addMenu(element)\r\n  const {itemSelector} = menu.options\r\n  const {menus} = _menuObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n\r\n  // error handling for empy menus\r\n  const allChildren = [...element.querySelectorAll('*')]\r\n  const firstItem = element.querySelector(itemSelector)\r\n  if (!firstItem)\r\n    throw new Error(`Expected the menu to contain at least one item.  Please nest at least one element that matches the selector '${itemSelector}'`)\r\n\r\n  // blanket all contained elements with defaults\r\n  const firstLink = firstItem.querySelector('a') || firstItem\r\n  allChildren.forEach(el => {\r\n\r\n    // before adding roles, set all to none by default\r\n    const role = el.getAttribute('role') || 'none'\r\n    el.setAttribute('role', role)\r\n  })\r\n\r\n  // give this menu a unique id\r\n  Object(_utilities_js__WEBPACK_IMPORTED_MODULE_3__[\"setUniqueId\"])(element)\r\n\r\n  // make the overall menu toggler accessible\r\n  Object(_makeMenuTogglerAccessible_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(menu, customCallback)\r\n  \r\n  // add attributes and keyboard functionality to this menu and all its submenus\r\n  const currentMenus = menus.filter(m => m.overallMenu === menu)\r\n  currentMenus.forEach(currentMenu =>\r\n    makeEachMenuAccessible(currentMenu, customCallback, firstLink))\r\n\r\n  // make any window click collapse all menus\r\n  const collapseAllMenus = event => {\r\n    if (event.target.matches(itemSelector)) return\r\n    const allItems = _menuObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].menus.reduce((items, currentMenu) => {\r\n      items.push(...currentMenu.items)\r\n      return items\r\n    }, [])\r\n    _menuObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].activeMenuItem = {\r\n      item: allItems[0],\r\n      index: 0,\r\n    }\r\n    allItems.forEach(item => item.collapse && item.collapse('none'))\r\n  }\r\n  Object(_utilities_js__WEBPACK_IMPORTED_MODULE_3__[\"addEvent\"])(menu, {\r\n    element: window,\r\n    event: 'click',\r\n    callback: collapseAllMenus\r\n  })\r\n\r\n  // handle changes to the DOM after running this function\r\n  const observerConfig = {childList: true, subtree: true}\r\n  const menuObserver = new MutationObserver((mutations, observer) => {\r\n    console.warn('The menu has changed, updating the accessibility...')\r\n    Object(_utilities_js__WEBPACK_IMPORTED_MODULE_3__[\"removeAllEvents\"])(menu)\r\n    _menuObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].menus = _menuObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].menus.filter(m => m.overallMenu !== menu)\r\n    makeMenuAccessible(element, customCallback)\r\n  })\r\n  menuObserver.observe(element, observerConfig)\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeMenuAccessible);\n\n//# sourceURL=webpack://makeMenuAccessible/./libs/makeMenuAccessible.js?");

/***/ }),

/***/ "./libs/makeMenuTogglerAccessible.js":
/*!*******************************************!*\
  !*** ./libs/makeMenuTogglerAccessible.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _makeItemInteractive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeItemInteractive.js */ \"./libs/makeItemInteractive.js\");\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities.js */ \"./libs/utilities.js\");\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ((menu, customCallback) => {\r\n  const {element, toggler, options} = menu\r\n  const {mobile} = options\r\n  if (!toggler) return\r\n  const togglerElement = toggler.element\r\n\r\n  togglerElement.setAttribute('role', 'button')\r\n  togglerElement.setAttribute('aria-haspopup', 'true')\r\n  togglerElement.setAttribute('aria-expanded', 'false')\r\n  togglerElement.setAttribute('aria-controls', element.id)\r\n  togglerElement.setAttribute('tabindex', '0')\r\n  element.setAttribute('aria-hidden', 'true')\r\n  Object(_makeItemInteractive_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(toggler, options, menu, customCallback)\r\n  \r\n  // if the toggler is mobile-only, hide and show dynamically\r\n  if (!toggler.isMobile) return\r\n\r\n  const mobileWidth =\r\n    mobile && mobile.split(' ')[2] || options.mobileWidth || 0\r\n  const toggleMenu = () => {\r\n    const showToggler = !!mobileWidth ? window.innerWidth < mobileWidth : true\r\n    const tabindex = showToggler ? '0' : '-1'\r\n    togglerElement.setAttribute('tabindex', tabindex)\r\n    togglerElement.setAttribute('aria-hidden', String(!showToggler))\r\n    togglerElement.setAttribute('aria-expanded', String(!showToggler))\r\n    element.setAttribute('aria-hidden', String(showToggler))\r\n  }\r\n  \r\n  toggleMenu() // initialize\r\n\r\n  // reapply the menu toggle when the window is resized\r\n  Object(_utilities_js__WEBPACK_IMPORTED_MODULE_1__[\"addEvent\"])(menu, {\r\n    element: window,\r\n    event: 'resize',\r\n    callback: toggleMenu\r\n  })\r\n  \r\n});\n\n//# sourceURL=webpack://makeMenuAccessible/./libs/makeMenuTogglerAccessible.js?");

/***/ }),

/***/ "./libs/menuObject.js":
/*!****************************!*\
  !*** ./libs/menuObject.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ \"./libs/utilities.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  menus: [],\r\n  activeMenuItem: {\r\n    item: null,\r\n    index: 0,\r\n  },\r\n  eventMap: new Map(),\r\n  filterText: '',\r\n  filterTimeout: null,\r\n  addMenu(element, parentItem, parentMenu, overallMenu) {\r\n    const options = parentItem ?\r\n      Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__[\"getMenuOptions\"])(element, parentMenu, {\r\n        layout: 'vertical',\r\n        alignment: 'left',\r\n      }) :\r\n      Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__[\"getMenuOptions\"])(element, parentMenu, {\r\n        mobileClick: 'true',\r\n      })\r\n\r\n    const {mobile} = options\r\n    const mobileWidth =\r\n      mobile && mobile.split(' ')[2] || options.mobileWidth || 0\r\n\r\n    const menu = {\r\n      element,\r\n      options,\r\n      parentItem,\r\n      parentMenu,\r\n      mobileWidth,\r\n      overallMenu,\r\n      items: [],\r\n      anySubmenuIsExpanded: false,\r\n    }\r\n\r\n    const togglerElement = document.getElementById(options.menuToggler)\r\n    if (togglerElement && !parentItem) {\r\n      const isMobile =\r\n        mobile && mobile.split(' ')[3] === 'true' ||\r\n        options.mobileToggler === 'true'\r\n\r\n      menu.toggler = {\r\n        element: togglerElement,\r\n        parentMenu: menu,\r\n        attachedMenu: menu,\r\n        isMobile,\r\n        alignment: togglerElement.dataset.alignment || 'top',\r\n        expand(pref, withFocus = true) { Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleExpanded\"])(this, pref, true, withFocus) },\r\n        collapse(pref, withFocus = true) {\r\n          const screenIsMobile = window.innerWidth < mobileWidth\r\n          if (!isMobile || isMobile && screenIsMobile)\r\n            Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleExpanded\"])(this, pref, false, withFocus)\r\n        },\r\n      }\r\n      menu.parentItem = menu.toggler\r\n    }\r\n\r\n    this.menus.push(menu)\r\n\r\n    // add items to this menu\r\n    if (!overallMenu) menu.overallMenu = menu\r\n    const {itemSelector} = options\r\n    Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__[\"getItemsInScope\"])(element, itemSelector, options).forEach(\r\n      item => this.addItem(item, menu))\r\n\r\n    return menu\r\n  },\r\n  addItem(itemElement, parentMenu) {\r\n    const {options, overallMenu} = parentMenu\r\n    const {submenu} = itemElement.dataset\r\n    const {submenuSelector} = options\r\n\r\n    // find the submenu that belongs to this item, if any\r\n    const siblings = Array.from(itemElement.parentElement.children)\r\n    const nextSibling = itemElement.nextElementSibling\r\n    const nextSiblingIsSubmenu = nextSibling && nextSibling.matches(submenuSelector)\r\n    const submenuElement =\r\n      submenu ?\r\n      document.getElementById(submenu) :\r\n      itemElement.querySelector(submenuSelector) ||\r\n      nextSiblingIsSubmenu && nextSibling ||\r\n      siblings.find(el => el.matches(submenuSelector))\r\n      \r\n    const simpleItem = {\r\n      element: itemElement.querySelector('a') || itemElement,\r\n      parentMenu,\r\n      focus(pref) { Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__[\"focus\"])(this, pref) },\r\n    }\r\n\r\n    if (!submenuElement) return parentMenu.items.push(simpleItem)\r\n    const itemWithMenu = Object.assign(simpleItem, {\r\n      expand(pref, withFocus = true) { Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleExpanded\"])(this, pref, true, withFocus) },\r\n      collapse(pref, withFocus = true) { Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleExpanded\"])(this, pref, false, withFocus) },\r\n    })\r\n    itemWithMenu.attachedMenu = this.addMenu(submenuElement, itemWithMenu, parentMenu, overallMenu)\r\n  \r\n    parentMenu.items.push(itemWithMenu)\r\n  },\r\n  getAllItems(relativeMenu) {\r\n    const parentMenu = relativeMenu || this.menus[0]\r\n    const {itemSelector} = parentMenu.options\r\n    const childElements =\r\n      [...parentMenu.element.querySelectorAll(itemSelector)]\r\n\r\n    return this.menus.reduce((allItems, menu) => {\r\n\r\n      const firstItemOfCurrentMenu =\r\n        menu.items.length && menu.items[0].element\r\n      const isChildOfParentMenu = childElements.find(\r\n        el => (el.querySelector('a') || el) === firstItemOfCurrentMenu)\r\n\r\n      if (isChildOfParentMenu) allItems.push(...menu.items)\r\n      return allItems\r\n    }, [])\r\n  },\r\n});\r\n\n\n//# sourceURL=webpack://makeMenuAccessible/./libs/menuObject.js?");

/***/ }),

/***/ "./libs/utilities.js":
/*!***************************!*\
  !*** ./libs/utilities.js ***!
  \***************************/
/*! exports provided: getMenuOptions, getItemsInScope, focus, toggleExpanded, setUniqueId, addEvent, removeAllEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMenuOptions\", function() { return getMenuOptions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getItemsInScope\", function() { return getItemsInScope; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"focus\", function() { return focus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleExpanded\", function() { return toggleExpanded; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUniqueId\", function() { return setUniqueId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addEvent\", function() { return addEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeAllEvents\", function() { return removeAllEvents; });\n/* harmony import */ var _menuObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuObject.js */ \"./libs/menuObject.js\");\n\r\n\r\n// get these options from the data attributes or fall back on defaults\r\nconst getMenuOptions = (menuElement, parentMenu = {}, defaults = {}) => {\r\n  const parentMenuOptions = parentMenu.options || {}\r\n\r\n  return Object.assign({\r\n    submenuSelector: '.submenu',\r\n    itemSelector: '.menuItem',\r\n    layout: 'horizontal',\r\n    alignment: 'top',\r\n  }, parentMenuOptions, defaults, menuElement.dataset)\r\n}\r\n\r\n// get only the items that are not nested in submenus, relative to the current scope\r\nconst getItemsInScope = (scopedElement, selector, options) => {\r\n  const {submenuSelector} = options\r\n  const allItems = [...scopedElement.querySelectorAll(selector)]\r\n  const allSubmenus = [...scopedElement.querySelectorAll(submenuSelector)]\r\n  const itemsToFilterOut = allSubmenus.reduce((items, submenu) => {\r\n    const itemsBeyondScope = [...submenu.querySelectorAll(selector)]\r\n    items.push(...itemsBeyondScope)\r\n    return items\r\n  }, [])\r\n  return allItems.filter(item => !itemsToFilterOut.includes(item))\r\n}\r\n\r\n// focus on the next element\r\nconst focus = (item, pref, useItemIndex) => {\r\n  const {items, anySubmenuIsExpanded, toggler} = item.parentMenu\r\n  const itemIsToggler = toggler === item\r\n  const itemIndex = items.findIndex(i => i === item)\r\n  const activeIndex = useItemIndex ?\r\n    itemIndex :\r\n    _menuObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].activeMenuItem.index\r\n  const lastIndex = items.length - 1\r\n  const prevIndex = activeIndex > 0 ? activeIndex - 1 : lastIndex\r\n  const nextIndex = activeIndex < lastIndex ? activeIndex + 1 : 0\r\n  const focusIndex =\r\n    pref === 'prev' ? prevIndex : \r\n    pref === 'last' ? lastIndex :\r\n    pref === 'first' ? 0 :\r\n    pref === 'current' ? itemIndex :\r\n    nextIndex // next by default\r\n  const itemToFocus = itemIsToggler ? toggler : items[focusIndex]\r\n  itemToFocus.element.focus()\r\n  _menuObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].activeMenuItem = {\r\n    item: itemToFocus,\r\n    index: focusIndex,\r\n  }\r\n\r\n  // expand if it has a submenu and a submenu was already expanded\r\n  if (anySubmenuIsExpanded && itemToFocus.expand) itemToFocus.expand('none')\r\n}\r\n\r\n// expand or collapse a menu given its parent item\r\nconst toggleExpanded = (item, pref, shouldExpand, withFocus) => {\r\n  const {element, attachedMenu} = item\r\n  \r\n  const itemsInSubmenu = attachedMenu.items\r\n  element.setAttribute('aria-expanded', String(shouldExpand))\r\n  attachedMenu.element.setAttribute('aria-hidden', String(!shouldExpand))\r\n\r\n  // determine which item to focus, if any\r\n  if (pref === 'none' || !withFocus) return\r\n  if (shouldExpand) return focus(itemsInSubmenu[0], pref)\r\n  focus(item, pref, true)\r\n}\r\n\r\n// set unique id on a given element\r\nlet idIndex = 0\r\nconst setUniqueId = el => {\r\n  if (!el || el.id) return el ? el.id : null\r\n  const text = el.textContent.replace(/[\\s]/g, '').slice(0, 10)\r\n  const idName = text.length ? text : 'id'\r\n  const id = !idIndex ? idName : `${idName}_${idIndex}`\r\n  const elExists = !!document.querySelector(`#${id}`)\r\n  idIndex++\r\n  return el.id = elExists ? setUniqueId(el) : id\r\n}\r\n\r\nconst addEvent = (menu, eventObj) => {\r\n  const {element, event, callback} = eventObj\r\n  element.addEventListener(event, callback)\r\n\r\n  // add event to this specific menu via the eventMap\r\n  const events = _menuObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].eventMap.get(menu) ||\r\n    _menuObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].eventMap.set(menu, []) && []\r\n  events.push({element, event, callback})\r\n  _menuObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].eventMap.set(menu, events)\r\n}\r\n\r\nconst removeAllEvents = menu => {\r\n  const events = _menuObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].eventMap.get(menu) || []\r\n  events.forEach(({element, event, callback}) =>\r\n      element.removeEventListener(event, callback))\r\n}\r\n\n\n//# sourceURL=webpack://makeMenuAccessible/./libs/utilities.js?");

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