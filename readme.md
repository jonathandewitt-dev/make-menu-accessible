QUICK START
===
In its simplest form, this package can be used by just importing the function and running any element through it.  This process automatically converts the element into an accessible aria menu with keyboard navigation.  **Remember**: this does *not* toggle the visibility of expanded menus, [skip to the end](#what-it-does-not-do) to see why.  The default settings expect your menu items to have a class of `menuItem` and your submenus to have a class of `submenu`, but these settings may be adjusted to fit your project.  After running `npm i make-menu-accessible` ...

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

**Note:** the main function is both a *named* and *default* export, so you have the option of importing it as any name that fits your project's namespace.  Both `import yourFnName from 'make-menu-accessible'` and `import {makeMenuAccessible} from 'make-menu-accessible'` are valid.

USING WITHOUT MODULES
===
Maybe you have a project that doesn't play nice with ES6 module imports or Node's `require`, or you just want to play around with this in a sandbox like [jsfiddle](https://jsfiddle.net) or [codepen](https://codepen.io/pen/).  In that case, just add a script tag instead, but beware, this will add the module as a named object on the global scope.  You can use [unpkg](https://unpkg.com) to grab a CDN of this package, like so.

```html
<script src="https://unpkg.com/umd/makeMenuAccessible.min.js"></script>
<script>
  // The default export is attached as a method to the global MakeMenuAccessible object
  const makeMenuAccessible = MakeMenuAccessible.default
  const menuElement = document.querySelector('.menu')

  makeMenuAccessible(menuElement)
</script>
```

CUSTOM SELECTORS
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

Using these, the function is generally pretty good at figuring out how your menu is laid out, regardless of nesting depth.  But, it does assume your submenus are at least nested *somewhere* inside your menu, and *somewhere* in roughly the same scope as the associated item that expands it.  In some cases, though, your structure may not be so straightforward.  There *is* still an option for an unconventional layout, it just takes just a bit more customization.  On a menu item element, add a `data-submenu` attribute and assign it the `id` of the submenu element to which the item should be attached.

```html
<nav class="menu">
  <ul>
    <li class="menuItem"><a href="">Home</a></li>
    <li class="menuItem" data-submenu="MySubmenu">
      <a href="/about">About</a>
    </li>
  </ul>
</nav>

<ul id="MySubmenu">
  <li class="menuItem"><a href="/more">More</a></li>
</ul>
```

CUSTOM LAYOUT
===
As much effort as I put in to avoid requiring much extra work from the developer, there are certain cases that would change the behavior of the menu.  What if this was a sidebar?  And what if one project has a left sidebar, and the other has a right sidebar?  Well, fortunately, you still don't have to add very much to your markup.

If your menu contains items that are visually stacked on the left side, you can just add `data-layout` and `data-alignment` to help the function better handle your menu.

```html
<nav class="menu"
     data-layout="vertical"
     data-alignment="left"
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

* Possible values of `data-layout` are `vertical` and `horizontal`.
* Possible values of `data-alignment` are `left`, `right`, `top`, and `bottom`.
* You may also use the shorthand syntax, `data-menu`, where you provide two values separated by a space representing `layout` and `alignment` respectively.  e.g. `data-menu="vertical left"`.

All the data attributes mentioned above may also be used on any submenu, in addition to the main one.  By default, the main menu is set to `data-alignment="top"` and `data-layout="horizontal"`, and all submenus default to `data-alignment="left"` and `data-layout="vertical"`.  These settings are the most common on the web, so most times you will not have to add these attributes at all, but in the event that you require it, they can all be changed independently of each other.

Even so, this works for one particular layout at a time, but what if you want your layout to dynamically change, like in the case of mobile-responsive menus?  Once again, there are options provided for this too.  `data-mobile-layout`, `data-mobile-alignment`, and `data-mobile-width`.  The first two function exactly like `data-alignment` and `data-layout`, but these ones only apply when the screen width is smaller than the threshold given in `data-mobile-width`.

```html
<nav class="menu"
     data-mobile-layout="vertical"
     data-mobile-alignment="left"
     data-mobile-width="500"
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

* `data-mobile-width` takes any plain number value, representing the viewport width in pixels.
* You may also use the shorthand syntax, `data-mobile`, where you provide three values separated by a space representing `layout`, `alignment`, and `width` respectively.  e.g. `data-mobile="vertical left 500"`.

MENU TOGGLER
===
Okay, so your menu is hidden by a toggle button, what now?  Well, good news, this package can handle that too.  Just give your toggler a unique ID and assign the value of your menu's `data-menu-toggler` to that same ID.

```html
<a id="MenuToggler">Menu</a>
<nav class="menu"
     data-menu-toggler="MenuToggler"
>
  <!-- ... -->
</nav>
```

But wait, one of the most common formats on the web is to use a toggle button *specifically* for a mobile screen size.  Referring to the mobile responsive options outlined above, lets add one more attribute to your arsenal.  `data-mobile-toggler="true"` will enable your toggle button only when your screen width is less than the width provided in `data-mobile-width`.  Additionally, if your button is aligned differently than the default `top`, you can always add `data-alignment` to the toggler element itself.

```html
<a id="MenuToggler"
   data-alignment="right"
>Menu</a>
<nav class="menu"
     data-menu-toggler="MenuToggler"
     data-mobile-toggler="true"
     data-mobile-width="500"
>
  <!-- ... -->
</nav>
```

* Just like the menus, possible values of `data-alignment` are `left`, `right`, `top`, and `bottom`.
* You may also use a fourth argument in the shorthand syntax `data-mobile`, instead of `data-mobile-toggler`.  e.g. `data-mobile="vertical left 500 true"`.

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

LABELS
===
So you know you need `aria-label` on your menu, but what are the rules?  Well, this function again tries to go the extra mile and do it for you.  When labelling each menu or submenu, it searches for a heading tag nested inside.  If it finds one, it will ensure your title has a unique ID if it doesn't already have one, and then automatically set the `aria-labelledby` attribute on your menu.  But not all menus contain a heading tag, as they probably shouldn't.  You can also assign a name manually with `data-name`, and if that isn't populated then it just defaults to `'Site Menu'`.  No matter the case, even if it's omitted, your menu will not be without a label.  Adding this attribute may become more important if you have multiple menus on the page simultaneously.

```html
<nav class="menu"
     data-name="My Menu Name"
>
  <!-- ... -->
</nav>
```

FEATURES
===
So all of that is great for setting up, but what does it actually do?  Well, a lot of things, actually.

**ATTRIBUTES**
  1. Sets roles for `menubar`, `menu`, and `menuitem`, and sets the role of the menu toggler to `button` if it's present.  Anything that isn't one of those is set to `none`.
  2. Sets `tabindex="0"` on only the first item in the menu, and `tabindex="-1"` on all others.
  3. Sets `aria-haspopup` on links that appear to be associated with a submenu, and the menu toggler if one is present.
  4. Sets `aria-expanded="false"` by default on all links associated with a submenu, and toggles that value to `"true"` if the user expands it with the keyboard.  Same for the menu toggler if one is present.
  5. Sets `aria-hidden="true"` by default on all submenus, and toggles that value to `"false"` if the user expands it with the keyboard.  Same for the entire menu if a menu toggler is present and active.
  6. Sets a unique ID on the menu element, only if it doesn't already have one.
  7. Sets `aria-controls` on the menu toggler, as the ID of the menu element.
  8. Sets `aria-label` or `aria-labelledby` as outlined in the [labels](#labels) section of this document.

**KEYBOARD NAVIGATION**
  1. After focus is brought to the menu, the user may browse through each item in the current menu by using the arrow keys in the logical direction.  When the end or beginning of the list is reached, the focus will wrap around to the other side.  Pressing tab will collapse all menus and move to the next focusable item on the page.
  2. Submenus can be expanded by hitting enter/return or the space bar.  Submenus can also be expanded by hitting the arrow key in the logical direction.  If an arrow key opposite of the logical direction is pressed, the menu is expanded and focus is brought to the last item.
  3. If a menu item is or has a link with a valid href, hitting enter or space will trigger a link click.
  4. If a menu is expanded and the user hits an arrow key in a direction where no navigation is possible and no items can be expanded, it will collapse the current menu and bring the focus to the next *parent* item.  When an item is collapsed in this way, all parent items will expand automatically as the user navigates, until the escape key is pressed.
  5. Submenus can be collapsed by hitting the escape key.
  6. Go to the first item in a menu by hitting the home or page up keys.  Conversely, go to the last item in a menu by hitting end or page down.
  7. Focus directly on an item by hitting any alphanumeric key.  Continue typing to narrow the result further.  The filter resets a half-second after the user stops typing, so a new filter can be typed.

**FLEXIBILITY**

Ideally, this function should work with any menu structure you prefer.  That means it's pretty good at figuring out whether or not you're using [listless navigation](https://css-tricks.com/navigation-in-lists-to-be-or-not-to-be/), where your navigation links are actually nested, and in most cases it should just work out of the box.  Even if your menu items are nested several layers deep inside your submenu, the code is built to ignore any parents that are not a submenu and make any associations from there.

WHAT IT DOES *NOT* DO
===
The appearance of your menu is not a concern of JavaScript, but of CSS.  You can easily apply styles to work in conjunction with this menu, by selecting the added aria attributes.  For example, here are a couple of the most common uses.

```css
.submenu[aria-hidden="true"] {
  display: none;
}

.menuItem[aria-expanded="true"]::after {
  content: ' \25BE'; /* downward-facing trangle */
}
```

This package assumes you already have a style sheet established for your project.  **This function will not visually show or hide your elements**, it will only show or hide them from screen readers for accessibility's sake.  The visual part is up to you.

Also worth noting, these attributes will not (and should not) be toggled when hovering or clicking with a mouse.  This would be overwhelming for users with screen readers, so I've opted out of doing so here.  In other words, your styles may need to depend on `:hover` and class toggles in addition to (but independently from) the aria attributes.
