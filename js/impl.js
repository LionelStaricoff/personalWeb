import { utils } from './utils.js';

export const impl = {

  modoBack: () => { utils.modBack(); },

  clases: () => {
    utils.borrarTodo();
    utils.leerJson();
  },

  clear: () => { utils.borrarTodo(); },

  email: () => { utils.promptEmail(); },

  cv: () => { utils.cargarCv(); },

  scroll: () => { utils.scrollFx(); },

  js: () => {
    utils.borrarTodo();
    utils.leerJson('/json/js.json', 'js');
  },

  java: () => {
    utils.borrarTodo();
    utils.leerJson('/json/java.json', 'java');
  },

  menuOpen:(event)=>{ utils.menuOpen(event);},

  menuClose:(event)=>{ utils.menuClose(event);}
}