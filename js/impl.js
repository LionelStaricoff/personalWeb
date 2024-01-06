import {utils} from './utils.js';

export const impl ={

  modoBack:()=>{utils.modBack();},

   clases: ()=>{ utils.leerJson(); },
   
   clear: ()=>{utils.borrarTodo();},

   email: ()=>{utils.promptEmail();},

   cv: ()=>{utils.cargarCv();},

   scroll: ()=>{utils.scrollFx();}

  
  }