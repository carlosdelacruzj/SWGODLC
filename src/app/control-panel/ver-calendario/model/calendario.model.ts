/*export class Citacalendario{
    constructor(
    public ID: string,
    public title : string,
    public EstadoProyecto: string,
    public date: string,
   // public start: string,
    public HoraEvento: string,
    public Direccion: string,
    public Cliente: string,
    public Telefono: string
    ){}
}
*/
export interface CitaCalendario  {
    id: string;
    title: string;
    date: string;
    allDay: boolean;
    end: string;
  }