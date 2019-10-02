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
