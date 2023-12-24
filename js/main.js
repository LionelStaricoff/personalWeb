import * as l from '/js/impl.js';

try {
  const luz = document.querySelector('#ligth');
  luz.addEventListener('click', ()=> {l.impl.modoBack() });

   const foto = document.querySelector('#fotoPersonal');
   foto.addEventListener('click', () => { l.impl.clear(); });

  const buttons = document.querySelectorAll('li');
  buttons[0].addEventListener('click', () => { l.impl.clases(); });
  buttons[8].addEventListener('click', () => { l.impl.email(); });

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

