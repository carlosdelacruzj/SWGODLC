

export class Proyecto {
<<<<<<< HEAD
  constructor(
    public PK_Pro_Cod: number,
    public Pro_Nombre: string,
    public FK_P_Cod: number,
    public EPro_Fecha_Inicio_Edicion: string,
    public Pro_Fecha_Fin_Edicion: string,
    public Pro_Revision_Edicion: number,
    public Pro_Revision_Multimedia: number,
    public Pro_Enlace: string
  ) {}
=======
  constructor(public PK_Pro_Cod: number,
    public Pro_Nombre: string,
    public FK_P_Cod: number,
    public EPro_Fecha_Inicio_Edicion: string,
    public Pro_Fecha_Fin_Edicion: null | string,
    public Pro_Revision_Edicion: number,
    public Pro_Revision_Multimedia: number,
    public Pro_Enlace: null | string
  ) { }
>>>>>>> 70e2325463e5ceb9cb296821ce99a926f4ae53bb
}
