import {
  enLow,
  enUp,
  enCaps,
  ruLow,
  ruUp,
  ruCaps,
} from './keyAssets';

const keyboard = document.querySelector('.keyboard');
const textarea = document.querySelector('#kinput');
const key = document.querySelectorAll('.key');

textarea.focus();

const status = {
  shift: false,
  ctrl: false,
  alt: false,
  capslock: false,
  lang: localStorage.getItem('lang'),
};

function changeTruCtr(elem) {
  if (elem.code === 'ControlLeft') {
    status.ctrl = true;
  }
}

function changeTruAlt(elem) {
  if (elem.code === 'AltLeft' && status.ctrl === true) {
    status.alt = true;
    if (status.lang === 'en') {
      status.lang = 'ru';
      localStorage.setItem('lang', 'ru');
    } else {
      status.lang = 'en';
      status.alt = false;
      localStorage.setItem('lang', 'en');
    }
  }
}

function changeFalCtr(elem) {
  if (elem.code === 'ControlLeft' && status.ctrl === true) {
    status.ctrl = false;
  }
}

function changeFalAlt(elem) {
  if (elem.code === 'AltLeft' && status.alt === true) {
    status.alt = false;
  }
}

document.addEventListener('keydown', changeTruCtr);
document.addEventListener('keydown', changeTruAlt);
document.addEventListener('keyup', changeFalAlt);
document.addEventListener('keyup', changeFalCtr);

document.addEventListener('keydown', keyDownEnHandler);
document.addEventListener('keyup', keyUpEnHandler);

if (status.lang === 'en') {
  key.forEach((el, i) => {
    el.textContent = enLow[i][0];
  });
} else {
  key.forEach((el, i) => {
    el.textContent = ruLow[i][0];
  });
}

document.addEventListener('click', () => {
  kinput.focus();
});

keyboard.addEventListener('mousedown', (elem) => {
  const key = document.querySelectorAll('.key');

  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const count = textarea.value;
  let positon = textarea.selectionStart;
  let arr = textarea.value.split('\n');
  let num = 0;
  let pos = 0;

  if (elem.target.className.match(/^key/gm)) {
    elem.target.classList.add('push-active');
  }

  switch (elem.target.getAttribute('data')) {
    case 'Backspace':
      textarea.value = `${count.substring(0, start - 1)}${count.substring(end)}`;
      textarea.selectionStart = textarea.selectionEnd = start - 1;
      break;

    case 'AltLeft':
      break;
    case 'AltRight':
      break;
    case 'MetaLeft':
      break;
    case 'ControlRight':
      break;

    case 'ControlLeft':
      break;

    case 'Tab':
      textarea.value = `${count.substring(0, start)}   ${count.substring(end)}`;
      textarea.selectionStart = textarea.selectionEnd = start + 3;
      elem.preventDefault();
      break;

    case 'Delete':
      textarea.value = count.substring(0, start) + count.substring(end + 1);
      textarea.selectionStart = textarea.selectionEnd = start;
      break;

    case 'CapsLock':
      break;

    case 'Enter':
      textarea.value = `${count.substring(0, start)}\n${count.substring(end)}`;
      textarea.selectionStart = textarea.selectionEnd = start + 1;
      break;

    case 'ShiftRight':
      if (status.lang === 'ru') {
        key.forEach((el, i) => {
          el.textContent = ruUp[i][0];
        });
      } else {
        key.forEach((el, i) => {
          el.textContent = enUp[i][0];
        });
      }
      break;

    case 'ShiftLeft':
      if (status.lang === 'ru') {
        key.forEach((el, i) => {
          el.textContent = ruUp[i][0];
        });
      } else {
        key.forEach((el, i) => {
          el.textContent = enUp[i][0];
        });
      }
      break;

    case 'Space':
      textarea.value = `${count.substring(0, start)} ${count.substring(end)}`;
      textarea.selectionStart = textarea.selectionEnd = start + 1;
      break;

    case 'ArrowUp':
      positon = textarea.selectionStart;
      arr = textarea.value.split('\n');
      num = 0;
      pos = 0;

      for (let i = 1; i < arr.length; i++) {
        num += arr[i].length + 1;
        pos = arr[i].length - (num - positon - 2);

        if (arr[i - 1].length < arr[i].length && pos > arr[i - 1].length) {
          textarea.selectionStart = textarea.selectionEnd = pos + arr[i - 1].length;
          positon = textarea.selectionStart;
          return;
        }

        if (positon <= num) {
          pos = arr[i].length - (num - positon + 1);
          positon = textarea.selectionStart;
          return;
        }
      }
      break;

    case 'ArrowDown':
      positon = textarea.selectionStart;
      arr = textarea.value.split('\n');
      num = 0;
      pos = 0;

      for (let i = 0; i < arr.length; i++) {
        num += arr[i].length + 1;
        pos = arr[i].length - (num - positon - 2);

        if (arr[i + 1].length < arr[i].length && pos > arr[i + 1].length) {
          textarea.selectionStart = textarea.selectionEnd = pos + arr[i + 1].length;
          positon = textarea.selectionStart;
          return;
        }

        if (positon <= num) {
          textarea.selectionStart = textarea.selectionEnd = pos + num - 1;
          positon = textarea.selectionStart;
          return;
        }

        if (!arr[i + 1]) {
          positon = textarea.value.length;
          return;
        }
      }
      break;

    case 'ArrowLeft':
      textarea.selectionStart = textarea.selectionEnd = start - 1;
      break;

    case 'ArrowRight':
      textarea.selectionStart = textarea.selectionEnd = start + 1;
      break;

    default:
      if (elem.target.className.match(/^key /gm)) {
      textarea.value = `${count.substring(0, start)
      }${elem.target.textContent}${
        count.substring(end)}`;
      textarea.selectionStart = textarea.selectionEnd = start + 1;}
      break;
  }
});

keyboard.addEventListener('mouseup', (elem) => {
  if (elem.target.className.match(/^key/gm)) {
    elem.target.classList.remove('push-active');
  }

  switch (elem.target.getAttribute('data')) {
    case 'ShiftLeft':
      const key = document.querySelectorAll('.key');
      if (status.lang === 'ru') {
        key.forEach((el, i) => {
          el.textContent = ruLow[i][0];
        });
      } else {
        key.forEach((el, i) => {
          el.textContent = enLow[i][0];
        });
      }
      break;

    default:
  }

  switch (elem.target.getAttribute('data')) {
    case 'ShiftRight':
      const key = document.querySelectorAll('.key');
      if (status.lang === 'ru') {
        key.forEach((el, i) => {
          el.textContent = ruLow[i][0];
        });
      } else {
        key.forEach((el, i) => {
          el.textContent = enLow[i][0];
        });
      }
      break;

    default:
  }
});

function keyDownEnHandler(elem) {
  const key = document.querySelectorAll('.key');

  key.forEach((el) => {
    if (elem.code === el.getAttribute('data')) {
      el.classList.add('push-active');
      if (elem.code === 'Tab') {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const { target } = elem;
        const count = target.value;
        target.value = `${count.substring(0, start)}   ${count.substring(end)}`;
        textarea.selectionStart = textarea.selectionEnd = start + 1;
        elem.preventDefault();
      }
    }
  });

  if (status.lang === 'en') {
    key.forEach((el, i) => {
      el.textContent = enLow[i][0];
    });
    if (elem.code === 'CapsLock') {
      if (status.capslock == false) {
        key.forEach((el, i) => {
          el.textContent = enCaps[i][0];
        });
        status.capslock = true;
      } else {
        key.forEach((el, i) => {
          el.textContent = enLow[i][0];
        });
        status.capslock = false;
      }
    }

    if (elem.code === 'ShiftLeft' || elem.code === 'ShiftRight') {
      status.shift = true;
      key.forEach((el, i) => {
        el.textContent = enUp[i][0];
      });
    }
  } else if (status.lang === 'ru') {
    key.forEach((el, i) => {
      el.textContent = ruLow[i][0];
    });

    if (elem.code === 'CapsLock') {
      if (status.capslock == false) {
        key.forEach((el, i) => {
          el.textContent = ruCaps[i][0];
        });
        status.capslock = true;
      } else {
        key.forEach((el, i) => {
          el.textContent = ruLow[i][0];
        });
        status.capslock = false;
      }
    }

    if (elem.code === 'ShiftLeft' || elem.code === 'ShiftRight') {
      status.shift = true;
      key.forEach((el, i) => {
        el.textContent = ruUp[i][0];
      });
    }
  }
}

function keyUpEnHandler(elem) {
  const key = document.querySelectorAll('.key');
  key.forEach((el) => {
    if (elem.code === el.getAttribute('data')) {
      el.classList.remove('push-active');
    }
  });

  if (status.lang === 'en') {
    if (elem.code === 'ShiftLeft' || elem.code === 'ShiftRight') {
      key.forEach((el, i) => {
        el.textContent = enLow[i][0];
      });
    }
  } else if (status.lang === 'ru') {
    if (elem.code === 'ShiftLeft' || elem.code === 'ShiftRight') {
      key.forEach((el, i) => {
        el.textContent = ruLow[i][0];
      });
    }
  }
}

export { status };
