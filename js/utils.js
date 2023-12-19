import {PromptVideos} from './promt.js';

export const utils = {

    leerJson: async function (archivo = 'videos.json',numero) {
        try {
            await fetch(archivo)
                .then(response => response.json())
                .then(data => {
                    const datos = data.clases;
                    datos.forEach(element => {
                        const pmt = utils.Tipo_objetos(numero);
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

    borrarTodo:()=>{
        const main = document.querySelector("agregar");
        main.innerHTML = '';
    },

    Tipo_objetos: (numero)=>{

        switch(numero){
            case "Papayas":
                console.log("El kilogramo de mangos y papayas cuesta $2.79.");
                break;
                default:
                    return new PromptVideos(element.titulo,element.descripcion,element.video);
        }
    }

}