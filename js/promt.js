export class PromptVideos {
    constructor(titul, descripcio, img) {
        const titulo = titul;
        const descripcion = descripcio;
        const src = img;
    }
    
    getTitulo = ()=>{
    return titulo;
    }

    getDescripcion = ()=>{
        return descripcion;
    }

    getSrc = ()=>{
        return src;
    }

    agregarAlFront() {
        const main = document.querySelector("#pVideo");
        main.innerHTML += this.armarPrompt();
    }
    armarPrompt() {
        return `<div class="videos">
      <h2>${this.getTitulo()}</h2>
      <p>${this.getDescripcion()}</p>
      <iframe src="${this.getSrc()}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
      </iframe>
  </div>`
    }
}