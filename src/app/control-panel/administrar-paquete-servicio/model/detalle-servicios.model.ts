export class Detalle {
    constructor(
        public ID: number,
        public servicio: number,
        public evento: number,
        public precio: number,
        public descripcion: string,
        public titulo: string
    ){}
  }