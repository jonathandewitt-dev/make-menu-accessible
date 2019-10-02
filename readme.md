QUICK START
===
In its simplest form, this package can be used by just importing the function and running any element through it.  This process automatically converts the element into an accessible aria menu with keyboard navigation.  The default settings expect your menu items to have a class of `menuItem` and your submenus to have a class of `submenu`, but these settings may be adjusted to fit your project.

```html
<nav class="menu">
  <ul>
    <li class="menuItem"><a href="">Home</a></li>
    <li class="menuItem">
      <a href="/about">About</a>
      <ul class="submenu">
        <li class="menuItem"><a href="/more">More</a></li>
      </ul>
    </li>
  </ul>
</nav>
```

```js
import makeMenuAccessible from 'make-menu-accessible'

const menuElement = document.querySelector('.menu')

makeMenuAccessible(menuElement)
```

**Note:** the main function is a default export, so you won't need those curly braces and you can name it whatever works best in your project's namespace.

CUSTOMIZED USAGE
===
A common case is that your menu probably does not use the default classes.  You could adjust your markup and add the classes, but who wants to do that?  Your menu has a structure already, it's likely that there's already a class in place for all your items and submenus.  That's where a set of custom attributes come in.  `data-item-selector` and `data-submenu-selector` should be given any valid query selector, and the main function will use it as a hook for all functionality provided by this package.

```html
<nav class="menu"
     data-item-selector=".myMenuItem"
     data-submenu-selector=".mySubmenu"
>
  <ul>
    <li class="myMenuItem"><a href="">Home</a></li>
    <li class="myMenuItem">
      <a href="/about">About</a>
      <ul class="mySubmenu">
        <li class="myMenuItem"><a href="/more">More</a></li>
      </ul>
    </li>
  </ul>
</nav>
```

As much effort as I put in to avoid requiring much extra work from the developer, there are certain cases that would change the behavior of the menu.  What if this was a sidebar?  And what if one project has a left sidebar, and the other has a right sidebar?  Well, fortunately, you still don't have to add very much to your markup.

If your menu contains items that are visually stacked on the left side, you can just add `data-alignment` and `data-layout` to help the function better handle your menu.

```html
<nav class="menu"
     data-alignment="left"
     data-layout="vertical"
>
  <ul>
    <li class="menuItem"><a href="">Home</a></li>
    <li class="menuItem">
      <a href="/about">About</a>
      <ul class="submenu">
        <li class="menuItem"><a href="/more">More</a></li>
      </ul>
    </li>
  </ul>
</nav>
```

Possible values of `data-alignment` are `left`, `right`, `top`, and `bottom`.
Possible values of `data-layout` are `vertical` and `horizontal`.

All the data attributes mentioned above may also be used on any submenu, in addition to the main one.  By default, the main menu is set to `data-alignment="top"` and `data-layout="horizontal"`, and all submenus default to `data-alignment="left"` and `data-layout="vertical"`.  These settings are the most common on the web, so most times you will not have to add these attributes at all, but in the event that you require it, they can all be changed independently of each other.

LABELS
===
So you know everything needs a aria-label, right?  Well, this function again tries to go the extra mile and do it for you.  When labelling each menu or submenu, it searches for a heading tag nested inside.  If it finds one, it will ensure your title has a unique ID if it doesn't already have one, and then automatically set the `aria-labelledby` attribute on your menu.  But not all menus contain a heading tag, as they probably shouldn't.  You can also assign a name manually with `data-name`, and if that isn't populated then it just defaults to `'Site Menu'`.  No matter the case, your menu will not be without a label.

```html
<nav class="menu"
     data-name="My Menu Name"
>
  <!-- ... -->
</nav>
```

THE KEYDOWN EVENT
===
This function uses `event.stopPropagation()` on the `'keydown'` event in order to run properly, avoiding multiple triggers on all the element's parents.  If you need to add another callback to the `'keydown'` event on any menu item, you can use the second argument of the main function to feed it your custom callback.  If you give your callback a return value of false, it will not run the rest of the callback set by this package.  If you don't provide any return value, it defaults to true.

```js
import makeMenuAccessible from 'make-menu-accessible'

const menuElement = document.querySelector('.menu')

/* ... */

makeMenuAccessible(menuElement, event => {
  event.preventDefault()
  if (someCondition) {
    alert('My custom "keydown" callback')
    return false
  }
})
```

USING WITHOUT MODULES
===
Maybe you have a project that doesn't play nice with ES6 module imports or Node's `require`.  In that case, just add a script tag instead, but beware, this will add the module as a named object on the global scope.  You must target the file `index.var.js` for this method to work.

```html
<script src="node_modules/make-menu-accessible/dist/index.var.js"></script>
<script>
  const makeMenuAccessible = MakeMenuAccessible.default
  const menuElement = document.querySelector('.menu')

  makeMenuAccessible(menuElement)
</script>
```

FEATURES
===
So all of that is great for setting up, but what does it actually do?  Well, a lot of things, actually.

**ATTRIBUTES**
  1. Sets roles for `menubar`, `menu`, and `menuitem`, and anything that isn't one of those is set to `none`.
  2. Sets `tabindex="0"` on only the items in the currently visible menus, and `tabindex="-1"` on all items inside hidden menus.
  3. Sets `aria-haspopup` on links that appear to be associated with a submenu.
  4. Sets `aria-expanded="false"` by default on all links associated with a submenu, and toggles that value to `"true"` if the user expands it with the keyboard.
  5. Sets `aria-hidden="true"` by default on all submenus, and toggles that value to `"false"` if the user expands it with the keyboard.
  6. Sets `aria-label` or `aria-labelledby` as outlined in the [labels](#labels) section of this document.

**KEYBOARD NAVIGATION**
  1. When focus is brought to the first item in the menu, the user may browse through each item in the current menu with the tab key, or by using the arrow keys in the logical direction.  When the end or beginning of the list is reached, the focus will wrap around to the other side.
  2. Submenus can be expanded by hitting enter/return or the space bar.  Submenus can also be expanded by hitting the arrow key in the logical direction.  If an arrow key opposite of the logical direction is pressed, the menu is expanded and focus is brought to the last item.
  3. If a menu item is or has a link with a valid href, hitting enter or space will trigger a link click.
  4. If a menu is expanded and the user hits an arrow key in a direction where no navigation is possible and no items can be expanded, it will collapse the current menu and bring the focus to the next *parent* item.  When an item is collapsed in this way, all parent items will expand automatically as the user navigates, until the escape key is pressed.
  5. Submenus can be collapsed by hitting the escape key.
  6. Go to the first item in a menu by hitting the home or page up keys.  Conversely, go to the last item in a menu by hitting end or page down.
