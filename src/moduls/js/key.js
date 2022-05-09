import {
  enLow,
  ruLow,
} from './keyAssets';

import { status } from './pushToButton';

const keyboard = document.querySelector('.keyboard');

for (let i = 0; i <= 4; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  row.setAttribute('data-row', i);
  keyboard.append(row);
}

const row = document.querySelectorAll('.row');

function createKey(position, start, end, simb) {
  for (let i = start; i <= end; i++) {
    const key = document.createElement('div');
    key.classList.add('key');
    key.setAttribute('data', `${simb[i][1]}`);
    key.innerText = `${simb[i][0]}`;
    row[position].append(key);
  }
}

if (status.lang === 'en') {
  createKey(0, 0, 13, enLow);
  createKey(1, 14, 28, enLow);
  createKey(2, 29, 41, enLow);
  createKey(3, 42, 54, enLow);
  createKey(4, 55, 63, enLow);
} else {
  createKey(0, 0, 13, ruLow);
  createKey(1, 14, 28, ruLow);
  createKey(2, 29, 41, ruLow);
  createKey(3, 42, 54, ruLow);
  createKey(4, 55, 63, ruLow);
}

export { createKey };
