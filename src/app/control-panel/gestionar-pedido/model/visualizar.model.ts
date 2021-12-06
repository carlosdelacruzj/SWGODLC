export class Proyecto {
  constructor(

    public Empleado : String,
    public N_Pedido : number,
    public Cliente : String,
    public F_Registro : String,
    public EstadoPedido : String,
    public Costo_Total : number,
    public Acuenta : number,
    public EstadoPago : String,
    public Evento : String,
    public Servicio : String,
    public F_Evento :String,
    public Hora_Evento : String,
    public  Direccion : String,
    public  Descripcion :String,
    public  NombrePedido : String
   

 ){}
}
export class N_Pedido{
  constructor(
    public N_Pedido : number
    ){

  }
}

export class EditarPedido {
  constructor(
public EP_Cod:number,
public fecha:string,
public hora:string,
public id:number


 ){}}

 export class AgregarPedido {
  constructor(
 
public NombrePedido:string,
public ExS :number,
public doc : string,
public fechaCreate : string,
public fechaEvent : string,
public horaEvent: string,
public CodEmp : number,
public Direccion : string,
public Observacion : string,

 ){}}

 export class EventServi2{
  constructor(
public ID : number,
public Evento : string,
public Servicio : String,
public Precio : number,
public Descripcion : String,
public Titulo : String,

  ){

  }
}