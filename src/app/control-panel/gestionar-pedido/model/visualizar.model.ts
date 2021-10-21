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
  constructor(public N_Pedido : number){

  }
}

export class EditarPedido {
  constructor(
public EP_Cod:number,
public fecha:string,
public hora:string,
public id:number


 ){}}

 export class AddPedido {
  constructor(
public EP_Cod:number,
public F_Registro : String,
public N_Pedido : number,
public Nombre : String,
public Apellido:String,
public Evento : String,
public Servicio : String,
public F_Evento :String,
public Hora_Evento : String,
public  Direccion : String,
public  Descripcion :String,

 ){}}