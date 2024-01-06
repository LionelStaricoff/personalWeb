import * as l from '/js/impl.js';

try {
  const luz = document.querySelector('#ligth');
  luz.addEventListener('click', () => { l.impl.modoBack() });

  const foto = document.querySelector('#fotoPersonal');
  foto.addEventListener('click', () => { l.impl.clear(); });

  const buttons = document.querySelectorAll('li');
  buttons[0].addEventListener('click', () => { l.impl.js(); });
  buttons[2].addEventListener('click', () => { l.impl.cv(); });
  buttons[4].addEventListener('click', () => { l.impl.clases(); });
  buttons[5].addEventListener('click', () => { l.impl.java(); });
  buttons[8].addEventListener('click', () => { l.impl.email(); });

  document.addEventListener("scroll", () => { l.impl.scroll(); });
} catch (error) {
  console.error(error);
}








