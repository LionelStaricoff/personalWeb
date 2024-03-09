
export class PromptJs2 {
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
