function createContainer() {
  const container = document.createElement('div');
  container.classList.add('container');

  const title = document.createElement('h1');
  title.classList.add('title');
  title.innerHTML = 'Virtual-keyboard';

  const textarea = document.createElement('textarea');
  textarea.setAttribute('name', 'keyboard');
  textarea.setAttribute('cols', 82);
  textarea.setAttribute('rows', 10);
  textarea.setAttribute('id', 'kinput');

  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');

  const p1 = document.createElement('div');
  p1.innerHTML = 'Клавиатура создана в операционной системе Windows';
  p1.classList.add('info');

  const p2 = document.createElement('div');
  p2.innerHTML = 'Для переключения языка комбинация: левыe ctrl + alt';
  p2.classList.add('info');

  const fragment = document.createDocumentFragment();

  container.append(title);
  container.append(textarea);
  container.append(keyboard);
  container.append(p1);
  container.append(p2);
  fragment.append(container);

  return (fragment);
}

const body = document.querySelector('body').append(createContainer());

createContainer();
