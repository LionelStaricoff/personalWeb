class Persona {
    constructor(nombre, apellido, dni) {
      const _nombre = nombre;
      const _apellido = apellido;
      const _dni = dni;
  
      this.getNombre = ()=> {
        return _nombre;
      };
  
      this.getApellido = function() {
        return _apellido;
      };
  
      this.getDni = function() {
        return _dni;
      };
    }
  
  }



