import * as l from '/js/impl.js';

try {

  const buttons = document.querySelectorAll('li');
  buttons[0].addEventListener('click', () => { l.impl.clases(); });
  buttons[1].addEventListener('click', () => { l.impl.clear(); });

} catch (error) {
  alert(error);
}


/*
const miLista = document.querySelector('ul');

window.addEventListener('scroll', function() {
  if (miLista.getBoundingClientRect().top < 0) {
    miLista.classList.add('sticky');
  } else {
    miLista.classList.remove('sticky');
  }
});
*/

