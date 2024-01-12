export class PromptVideos {
    constructor(titul, descripcio, img) {
        const titulo = titul;
        const descripcion = descripcio;
        const src = img;


        this.getTitulo = () => {
            return titulo;
        }

        this.getDescripcion = () => {
            return descripcion;
        }

        this.getSrc = () => {
            return src;
        }
    }

    agregarAlFront() {
        const main = document.querySelector(".agregar");
        main.innerHTML += this.armarPrompt();
    }

    armarPrompt() {
        return `<div class="videos desaparecer">
      <h2>${this.getTitulo()}</h2>
      <p>${this.getDescripcion()}</p>
      <iframe src="${this.getSrc()}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
      </iframe>
  </div>`
    }


}





export const promtEmail = {
    email: () => {

        const main = document.querySelector(".agregar");

        main.innerHTML = `<form action="mailto:staicofflionel@gmail.com" method="post" enctype="text/plain">
        <label for="nombre">Nombre:</label>
        <input type="text" pattern="[a-zA-Z]+" title="Por favor, ingrese solo letras" id="nombre" name="nombre" required>
        <label for="email">Email:</label>
        <input type="email" title="Por favor, ingrese un email que sea valido" id="email" name="email" required>
        <label for="telefono">telefono:</label>
        <input type="tel" title="Por favor, ingrese solo números" id="telefono" name="telefono" required>
        <label for="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" required></textarea>
        <input type="submit" value="Enviar">
        
    </form>`;
    }
}




export const promptCv = {

    cv: () => {
        const main = document.querySelector(".agregar");
        while (main.firstChild) { main.removeChild(main.firstChild); };
        const embed = document.createElement('embed');
        embed.src = "../pdf/_Lionel Staricoff.pdf";
        embed.type = "application/pdf";
        main.appendChild(embed);

        //ir abajo en el menu
        setTimeout(() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        }, 1000);
    }
}


export class PromptJs {
    constructor(titul, descripcio, githu, we, vide) {
        const titulo = titul;
        const descripcion = descripcio;
        const github = githu;
        const video = vide;
        const web = we;

        this.getTitulo = () => {
            return titulo;
        }
        this.getDescripcion = () => {
            return descripcion;
        }
        this.getGithub = () => {
            return github;
        }
        this.getWeb = () => {
            return web;
        }
        this.getVideo = () => {
            return video;
        }
    }
    agregarAlFront() {
        const main = document.querySelector(".agregar");
        main.appendChild(this.armarPrompt());
    }

    armarPrompt() {
        const container = document.createElement('div');
        container.classList.add('acordion', 'desaparecer');

        const label = document.createElement('label');
        label.innerText = this.getTitulo();
        label.addEventListener('click', () => {
            if (Array.from(acordion_item.classList).includes('acordion_item')) {
                acordion_item.classList.remove('acordion_item');
                acordion_item.classList.add('agrandar');
                container.classList.add('acordion_agrandar');
            } else {
                acordion_item.classList.add('acordion_item');
                acordion_item.classList.remove('agrandar');
                container.classList.remove('acordion_agrandar');
            }
        });

        const hr = document.createElement('hr');

        const acordion_item = document.createElement('div');
        acordion_item.classList.add('acordion_item');

        const p = document.createElement('p');
        p.classList.add('p');
        p.innerText = this.getDescripcion();

        const a = document.createElement('a');
        a.href = this.getGithub();
        a.classList.add('p');
        a.target = '_blank';
        a.innerText = this.getGithub();

        const a2 = document.createElement('a');
        a2.href = this.getWeb();
        a2.classList.add('p');
        a2.target = '_blank';
        a2.innerText = this.getWeb();

        const iframe = document.createElement('iframe');
        iframe.classList.add('p');
        iframe.src = this.getVideo();
        iframe.title = "YouTube video player";
        iframe.frameBorder = 0;
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;

        acordion_item.append(p, a, a2, iframe);
        container.append(label, hr, acordion_item);


        return container;

    }

}


