import * as l from '/js/impl.js';

try {

  const buttons = document.querySelectorAll('li');
  buttons[0].addEventListener('click', () => { l.impl.clases(); });
  buttons[1].addEventListener('click', () => { l.impl.clear(); });

} catch (error) {
  alert(error);
}





