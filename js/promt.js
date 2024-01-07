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

}


export class PromptJava {
    constructor(titul, descripcio, githu, vide) {
        const titulo = titul;
        const descripcion = descripcio;
        const github = githu;
        const video = vide;

        this.getTitulo = () => {
            return titulo;
        }
        this.getDescripcion = () => {
            return descripcion;
        }
        this.getGithub = () => {
            return github;
        }
        this.getVideo = () => {
            return video;
        }
    }
    agregarAlFront() {
        const main = document.querySelector(".agregar");
        main.innerHTML += this.armarPrompt();
    }

    armarPrompt() {
        return ` <div class="acordion desaparecer">
        <input id="activar" type="checkbox">
        <label for="activar">${this.getTitulo()}</label>
        <hr>
        <div class="acordion_item">
            <p class="p">${this.getDescripcion()}</p>

            <a class="p" href="${this.getGithub()}" target="_blank">${this.getGithub()}</a>
            <iframe class="p" src="${this.getVideo()}"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
            </iframe>
        </div>
    </div>`
    }
}