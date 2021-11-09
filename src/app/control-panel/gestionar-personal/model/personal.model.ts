export class Personal {
    constructor(
        public nombre: string,
        public apellido: string,
        public correo : string,
        public celular : string,
        public doc : string,
        public direccion : string,
        public autonomo: 0,
        public cargo: 0
    ) {}
  }

  export class PersonalListar {
    0:{
       ID: number,
         Nombres: string,
         Apellidos: string,
         DNI : string,
         Celular : string,
         Correo : string,
         Autonomo : 0,
         Cargo: string,
         Estado: string

    }   
      
  }