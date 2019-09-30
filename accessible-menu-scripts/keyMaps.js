// array of keys to use default behavior under certain conditions
export const defaultKeys = ['Enter', 'Spacebar', ' ']

// array of keys for collapsing
export const collapseKeys = ['Esc', 'Escape']

// object for mapping keys to focus actions
export const focusKeyMap = {
  horizontal: {
    nextKeys: ['Right', 'ArrowRight', 'Tab'],
    prevKeys: ['Left', 'ArrowLeft'],
  },
  vertical: {
    nextKeys: ['Down', 'ArrowDown', 'Tab'],
    prevKeys: ['Up', 'ArrowUp'],
  },
}

// object for mapping keys to expand actions
export const expandKeyMap = {
  top: {
    firstKeys: ['Down', 'ArrowDown', 'Enter', 'Spacebar', ' '],
    lastKeys: ['Up', 'ArrowUp'],
  },
  bottom: {
    firstKeys: ['Down', 'ArrowDown'],
    lastKeys: ['Up', 'ArrowUp', 'Enter', 'Spacebar', ' '],
  },
  left: {
    firstKeys: ['Right', 'ArrowRight', 'Enter', 'Spacebar', ' '],
    lastKeys: ['Left', 'ArrowLeft'],
  },
  right: {
    firstKeys: ['Left', 'ArrowLeft', 'Enter', 'Spacebar', ' '],
    lastKeys: ['Right', 'ArrowRight'],
  }
}
