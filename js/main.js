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

  const menu = document.querySelector('#menu');
  menu.addEventListener('click', (event) => {l.impl.menuOpen(event)});
  buttons.forEach(li => {li.addEventListener('click', (event) => { l.impl.menuClose(event); });});
  menu.addEventListener('click', (event) => {l.impl.menuOpen(event)});

  /* efectos touch */
  luz.addEventListener('ontouchend', () => { l.impl.modoBack() });
  foto.addEventListener('ontouchend', () => { l.impl.clear(); });

  menu.addEventListener('ontouchend', (event) => {l.impl.menuOpen(event)});
  buttons.forEach(li => {li.addEventListener('touchstart', (event) => { l.impl.menuClose(event); });});
  
  buttons[0].addEventListener('ontouchend', () => { l.impl.js(); });
  buttons[2].addEventListener('ontouchend', () => { l.impl.cv(); });
  buttons[4].addEventListener('ontouchend', () => { l.impl.clases(); });
  buttons[5].addEventListener('ontouchend', () => { l.impl.java(); });
  buttons[8].addEventListener('ontouchend', () => { l.impl.email(); });

  /* efecto scroll */
  document.addEventListener("scroll", () => { l.impl.scroll(); });
} catch (error) {
  console.error(error);
}





