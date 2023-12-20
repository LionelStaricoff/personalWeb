import { PromptVideos } from './promt.js';

export const utils = {

    leerJson: async function (archivo = '/jsons/videos.json', nombre) {
        try {
            await fetch(archivo)
                .then(response => response.json())
                .then(data => {
                    const datos = data.clases;
                    datos.forEach(element => {
                        const pmt = utils.Tipo_objetos(element, nombre);
                        pmt.agregarAlFront();
                    });

                })
                .catch(error => {
                    alert('error al convertir el json', error);
                })


        } catch (e) {
            alert('error al leer el json', e);
        }
    },

    borrarTodo: () => {
        const main = document.querySelector(".agregar");
        main.innerHTML = '';
    },

    Tipo_objetos: (element, numero = 'videos') => {

        switch (numero) {
            case "videos":
                return new PromptVideos(element.titulo, element.descripcion, element.video);
            default:
                alert('error de conceccion en utils');
        }
    },

    modBack: () => {
        const luz = document.querySelector("#ligth");
        const body = document.querySelector('body');

        luz.addEventListener("click", () => {
            body.classList.toggle("darckMod");
  
            
        });

    }

}