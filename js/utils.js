import * as p from './promt.js';

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
                return new p.PromptVideos(element.titulo, element.descripcion, element.video);
            default:
                alert('error de conceccion en utils');
        }
    },

    modBack: () => {
        const luz = document.querySelector("#ligth");
        const h1 = document.querySelector('h1');
        const body = document.querySelector('body');
        const fotoPersonal = document.querySelector('#fotoPersonal');
        const buttons = document.querySelectorAll('li');
        const ul = document.querySelector('ul');
        luz.addEventListener("click", () => {
            body.classList.toggle("darckMod");
            luz.classList.toggle('darckLigth');
            h1.innerText = 'Desarrollador Backend';
            fotoPersonal.classList.toggle('fotoPersonalDarck');
            buttons[0].classList.toggle(`fotosDarck0`);
            buttons[1].classList.toggle(`fotosDarck1`);
            buttons[2].classList.toggle(`fotosDarck2`);
            buttons[3].classList.toggle(`fotosDarck3`);
            buttons[4].classList.toggle(`fotosDarck4`);
            buttons[5].classList.toggle(`fotosDarck5`);
            buttons[6].classList.toggle(`fotosDarck6`);
            buttons[7].classList.toggle(`fotosDarck7`);
            buttons[8].classList.toggle(`fotosDarck8`);
            ul.classList.toggle('fondoFotos');
            });


    },


    promptEmail: ()=>{
        p.promtEmail.email();
    },


    cargarCv:()=>{

        p.promptCv.cv();
    }

}