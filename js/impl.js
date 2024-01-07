import { utils } from './utils.js';

export const impl = {

  modoBack: () => { utils.modBack(); },

  clases: () => { utils.leerJson(); },

  clear: () => { utils.borrarTodo(); },

  email: () => { utils.promptEmail(); },

  cv: () => { utils.cargarCv(); },

  scroll: () => { utils.scrollFx(); },

  js: () => { utils.leerJson('/json/js.json', 'js'); },

  java: () => { utils.leerJson('/json/java.json', 'java'); }
}