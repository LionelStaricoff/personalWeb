import * as l from '/js/impl.js';

try {
  const luz = document.querySelector('#ligth');
  luz.addEventListener('click', ()=> {l.impl.modoBack() });

   const foto = document.querySelector('#fotoPersonal');
   foto.addEventListener('click', () => { l.impl.clear(); });

  const buttons = document.querySelectorAll('li');
  
  buttons[2].addEventListener('click', () => { l.impl.cv(); });
  buttons[4].addEventListener('click', () => { l.impl.clases(); });
  buttons[8].addEventListener('click', () => { l.impl.email(); });

  document.addEventListener("scroll", () => { l.impl.scroll(); });
} catch (error) {
  alert(error);
}






/* codigo para efecto scoll*/
document.addEventListener("scroll", function() {
  const divs = document.querySelectorAll(".desaparecer");
  divs.forEach(function(div) {
    const rect = div.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < windowHeight && rect.bottom >= 0) {
      div.classList.add("aparecer");
    }else{
      div.classList.remove("aparecer");
    }
  });
})

