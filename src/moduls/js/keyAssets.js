const enLow = [
  ['`', 'Backquote'], ['1', 'Digit1'], ['2', 'Digit2'], ['3', 'Digit3'], ['4', 'Digit4'], ['5', 'Digit5'], ['6', 'Digit6'], ['7', 'Digit7'], ['8', 'Digit8'], ['9', 'Digit9'], ['0', 'Digit0'], ['-', 'Minus'], ['=', 'Equal'], ['Backspace', 'Backspace'],
  ['Tab', 'Tab'], ['q', 'KeyQ'], ['w', 'KeyW'], ['e', 'KeyE'], ['r', 'KeyR'], ['t', 'KeyR'], ['y', 'KeyY'], ['u', 'KeyU'], ['i', 'KeyI'], ['o', 'KeyO'], ['p', 'KeyP'], ['[', 'BracketLeft'], [']', 'BracketRight'], ['\\', 'Backslash'], ['Delete', 'Delete'],
  ['CapsLock', 'CapsLock'], ['a', 'KeyA'], ['s', 'KeyS'], ['d', 'KeyD'], ['f', 'KeyF'], ['g', 'KeyG'], ['h', 'KeyH'], ['j', 'KeyJ'], ['k', 'KeyK'], ['l', 'KeyL'], [';', 'Semicolon'], ["'", 'Quote'], ['Enter', 'Enter'],
  ['Shift', 'ShiftLeft'], ['z', 'KeyZ'], ['x', 'KeyX'], ['c', 'KeyC'], ['v', 'KeyV'], ['b', 'KeyB'], ['n', 'KeyN'], ['m', 'KeyM'], [',', ''], ['.', ''], ['/', ''], ['🡹', 'ArrowUp'], ['Shift', 'ShiftRight'],
  ['Ctrl', 'ControlLeft'], ['Win', 'MetaLeft'], ['Alt', 'AltLeft'], ['', 'Space'], ['Alt', 'AltRight'], ['🡸', 'ArrowLeft'], ['🡻', 'ArrowDown'], ['🡺', 'ArrowRight'], ['Ctrl', 'ControlRight'],
];

const enUp = [
  ['~', 'Backquote'], ['!', 'Digit1'], ['@', 'Digit2'], ['#', 'Digit3'], ['$', 'Digit4'], ['%', 'Digit5'], ['^', 'Digit6'], ['&', 'Digit7'], ['*', 'Digit8'], ['(', 'Digit9'], [')', 'Digit0'], ['_', 'Minus'], ['+', 'Equal'], ['Backspace', 'Backspace'],
  ['Tab', 'Tab'], ['Q', 'KeyQ'], ['W', 'KeyW'], ['E', 'KeyE'], ['R', 'KeyR'], ['T', 'KeyR'], ['Y', 'KeyY'], ['U', 'KeyU'], ['I', 'KeyI'], ['O', 'KeyO'], ['P', 'KeyP'], ['{', 'BracketLeft'], ['}', 'BracketRight'], ['|', 'Backslash'], ['Delete', 'Delete'],
  ['CapsLock', 'CapsLock'], ['A', 'KeyA'], ['S', 'KeyS'], ['D', 'KeyD'], ['F', 'KeyF'], ['G', 'KeyG'], ['H', 'KeyH'], ['J', 'KeyJ'], ['K', 'KeyK'], ['L', 'KeyL'], [':', 'Semicolon'], ['"', 'Quote'], ['Enter', 'Enter'],
  ['Shift', 'ShiftLeft'], ['Z', 'KeyZ'], ['X', 'KeyX'], ['C', 'KeyC'], ['V', 'KeyV'], ['B', 'KeyB'], ['N', 'KeyN'], ['M', 'KeyM'], ['<', ''], ['>', ''], ['?', ''], ['🡹', 'ArrowUp'], ['Shift', 'ShiftRight'],
  ['Ctrl', 'ControlLeft'], ['Win', 'MetaLeft'], ['Alt', 'AltLeft'], ['', 'Space'], ['Alt', 'AltRight'], ['🡸', 'ArrowLeft'], ['🡻', 'ArrowDown'], ['🡺', 'ArrowRight'], ['Ctrl', 'ControlRight'],
];

const enCaps = [
  ['`', 'Backquote'], ['1', 'Digit1'], ['2', 'Digit2'], ['3', 'Digit3'], ['4', 'Digit4'], ['5', 'Digit5'], ['6', 'Digit6'], ['7', 'Digit7'], ['8', 'Digit8'], ['9', 'Digit9'], ['0', 'Digit0'], ['-', 'Minus'], ['=', 'Equal'], ['Backspace', 'Backspace'],
  ['Tab', 'Tab'], ['Q', 'KeyQ'], ['W', 'KeyW'], ['E', 'KeyE'], ['R', 'KeyR'], ['T', 'KeyR'], ['Y', 'KeyY'], ['U', 'KeyU'], ['I', 'KeyI'], ['O', 'KeyO'], ['P', 'KeyP'], ['[', 'BracketLeft'], [']', 'BracketRight'], ['\\', 'Backslash'], ['Delete', 'Delete'],
  ['CapsLock', 'CapsLock'], ['A', 'KeyA'], ['S', 'KeyS'], ['D', 'KeyD'], ['F', 'KeyF'], ['G', 'KeyG'], ['H', 'KeyH'], ['J', 'KeyJ'], ['K', 'KeyK'], ['L', 'KeyL'], [';', 'Semicolon'], ["'", 'Quote'], ['Enter', 'Enter'],
  ['Shift', 'ShiftLeft'], ['Z', 'KeyZ'], ['X', 'KeyX'], ['C', 'KeyC'], ['V', 'KeyV'], ['B', 'KeyB'], ['N', 'KeyN'], ['M', 'KeyM'], [',', ''], ['.', ''], ['/', ''], ['🡹', 'ArrowUp'], ['Shift', 'ShiftRight'],
  ['Ctrl', 'ControlLeft'], ['Win', 'MetaLeft'], ['Alt', 'AltLeft'], ['', 'Space'], ['Alt', 'AltRight'], ['🡸', 'ArrowLeft'], ['🡻', 'ArrowDown'], ['🡺', 'ArrowRight'], ['Ctrl', 'ControlRight'],
];

const ruLow = [
  ['ё', 'Backquote'], ['1', 'Digit1'], ['2', 'Digit2'], ['3', 'Digit3'], ['4', 'Digit4'], ['5', 'Digit5'], ['6', 'Digit6'], ['7', 'Digit7'], ['8', 'Digit8'], ['9', 'Digit9'], ['0', 'Digit0'], ['-', 'Minus'], ['=', 'Equal'], ['Backspace', 'Backspace'],
  ['Tab', 'Tab'], ['й', 'KeyQ'], ['ц', 'KeyW'], ['у', 'KeyE'], ['к', 'KeyR'], ['е', 'KeyR'], ['н', 'KeyY'], ['г', 'KeyU'], ['ш', 'KeyI'], ['щ', 'KeyO'], ['з', 'KeyP'], ['х', 'BracketLeft'], ['ъ', 'BracketRight'], ['\\', 'Backslash'], ['Delete', 'Delete'],
  ['CapsLock', 'CapsLock'], ['ф', 'KeyA'], ['ы', 'KeyS'], ['в', 'KeyD'], ['а', 'KeyF'], ['п', 'KeyG'], ['р', 'KeyH'], ['о', 'KeyJ'], ['л', 'KeyK'], ['д', 'KeyL'], ['ж', 'Semicolon'], ['э', 'Quote'], ['Enter', 'Enter'],
  ['Shift', 'ShiftLeft'], ['я', 'KeyZ'], ['ч', 'KeyX'], ['с', 'KeyC'], ['м', 'KeyV'], ['и', 'KeyB'], ['т', 'KeyN'], ['ь', 'KeyM'], ['б', ''], ['ю', ''], ['.', ''], ['🡹', 'ArrowUp'], ['Shift', 'ShiftRight'],
  ['Ctrl', 'ControlLeft'], ['Win', 'MetaLeft'], ['Alt', 'AltLeft'], ['', 'Space'], ['Alt', 'AltRight'], ['🡸', 'ArrowLeft'], ['🡻', 'ArrowDown'], ['🡺', 'ArrowRight'], ['Ctrl', 'ControlRight'],
];

const ruUp = [
  ['Ё', 'Backquote'], ['!', 'Digit1'], ['"', 'Digit2'], [';', 'Digit3'], ['%', 'Digit4'], [':', 'Digit5'], [':', 'Digit6'], ['?', 'Digit7'], ['*', 'Digit8'], ['(', 'Digit9'], [')', 'Digit0'], ['_', 'Minus'], ['+', 'Equal'], ['Backspace', 'Backspace'],
  ['Tab', 'Tab'], ['Й', 'KeyQ'], ['Ц', 'KeyW'], ['У', 'KeyE'], ['К', 'KeyR'], ['Е', 'KeyR'], ['Н', 'KeyY'], ['Г', 'KeyU'], ['Ш', 'KeyI'], ['Щ', 'KeyO'], ['З', 'KeyP'], ['Х', 'BracketLeft'], ['Ъ', 'BracketRight'], ['/', 'Backslash'], ['Delete', 'Delete'],
  ['CapsLock', 'CapsLock'], ['Ф', 'KeyA'], ['Ы', 'KeyS'], ['В', 'KeyD'], ['А', 'KeyF'], ['П', 'KeyG'], ['Р', 'KeyH'], ['О', 'KeyJ'], ['Л', 'KeyK'], ['Д', 'KeyL'], ['Ж', 'Semicolon'], ['Э', 'Quote'], ['Enter', 'Enter'],
  ['Shift', 'ShiftLeft'], ['Я', 'KeyZ'], ['Ч', 'KeyX'], ['С', 'KeyC'], ['М', 'KeyV'], ['И', 'KeyB'], ['Т', 'KeyN'], ['Ь', 'KeyM'], ['Б', ''], ['Ю', ''], [',', ''], ['🡹', 'ArrowUp'], ['Shift', 'ShiftRight'],
  ['Ctrl', 'ControlLeft'], ['Win', 'MetaLeft'], ['Alt', 'AltLeft'], ['', 'Space'], ['Alt', 'AltRight'], ['🡸', 'ArrowLeft'], ['🡻', 'ArrowDown'], ['🡺', 'ArrowRight'], ['Ctrl', 'ControlRight'],
];

const ruCaps = [
  ['Ё', 'Backquote'], ['1', 'Digit1'], ['2', 'Digit2'], ['3', 'Digit3'], ['4', 'Digit4'], ['5', 'Digit5'], ['6', 'Digit6'], ['7', 'Digit7'], ['8', 'Digit8'], ['9', 'Digit9'], ['0', 'Digit0'], ['-', 'Minus'], ['=', 'Equal'], ['Backspace', 'Backspace'],
  ['Tab', 'Tab'], ['Й', 'KeyQ'], ['Ц', 'KeyW'], ['У', 'KeyE'], ['К', 'KeyR'], ['Е', 'KeyR'], ['Н', 'KeyY'], ['Г', 'KeyU'], ['Ш', 'KeyI'], ['Щ', 'KeyO'], ['З', 'KeyP'], ['Х', 'BracketLeft'], ['Ъ', 'BracketRight'], ['\\', 'Backslash'], ['Delete', 'Delete'],
  ['CapsLock', 'CapsLock'], ['Ф', 'KeyA'], ['Ы', 'KeyS'], ['В', 'KeyD'], ['А', 'KeyF'], ['П', 'KeyG'], ['Р', 'KeyH'], ['О', 'KeyJ'], ['Л', 'KeyK'], ['Д', 'KeyL'], ['Ж', 'Semicolon'], ['Э', 'Quote'], ['Enter', 'Enter'],
  ['Shift', 'ShiftLeft'], ['Я', 'KeyZ'], ['Ч', 'KeyX'], ['С', 'KeyC'], ['М', 'KeyV'], ['И', 'KeyB'], ['Т', 'KeyN'], ['Ь', 'KeyM'], ['Б', ''], ['Ю', ''], ['.', ''], ['🡹', 'ArrowUp'], ['Shift', 'ShiftRight'],
  ['Ctrl', 'ControlLeft'], ['Win', 'MetaLeft'], ['Alt', 'AltLeft'], ['', 'Space'], ['Alt', 'AltRight'], ['🡸', 'ArrowLeft'], ['🡻', 'ArrowDown'], ['🡺', 'ArrowRight'], ['Ctrl', 'ControlRight'],
];

export {
  enLow, enUp, enCaps, ruLow, ruUp, ruCaps,
};
