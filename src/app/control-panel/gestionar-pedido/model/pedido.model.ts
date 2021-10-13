export class Proyecto {
  constructor(

 public ID : number,
 public Nombre :String,
 public Fecha : string,
 public Servicio :String,
 public Evento :String,
 public Cliente :String,
 public Estado :String,

 ){}
}
export class DatosCliente{
  constructor(
    public Nombre : String,
    public Apellido:String,
    public Cod_Cli:number
  ){
    
  }
}