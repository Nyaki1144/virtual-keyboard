const key = document.querySelectorAll('.key');
function transforElement(elem) {
  elem.forEach((el) => {
    switch (el.innerText) {
      case 'Backspace':
        el.classList.add('key-backspace');
        el.classList.add('key-radus');
        break;

      case 'Ctrl':
        el.classList.add('key-tub');
        el.classList.add('key-radus');
        break;

      case 'Tab':
        el.classList.add('key-tub');
        el.classList.add('key-radus');
        break;

      case 'Delete':
        el.classList.add('key--middle-s');
        el.classList.add('key-radus');
        break;

      case 'CapsLock':
        el.classList.add('key--middle-l');
        el.classList.add('key-radus');
        break;

      case 'Enter':
        el.classList.add('key--middle-s');
        el.classList.add('key-radus');
        break;

      case 'Shift':
        el.classList.add('key--middle-xl');
        el.classList.add('key-radus');
        break;

      case '':
        el.classList.add('key-spc');
        el.classList.add('key-radus');
        break;
    }
  });
}

transforElement(key);
