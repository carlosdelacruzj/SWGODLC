export class EquipoTipoAll { //Filtro
  constructor(
    public PK_TE_Cod: number,
    public TE_Nombre: string) {}
}

export class EquipoAll {
  constructor(
    public Nombre: string,
    public Marca: string,
    public Modelo: string,
    public Estado: string,
  ) {}
}
//Como manejaria el estado?
export class EquipoTipoAllID { //Filtro
  constructor(
    public Codigo: string,
    public Marca: string,
    public Modelo: string,
    public Estado: string) {}
}
export class EquipoTipoAllIDMARCAMODELO { //Filtro 3 ids
  constructor(
    public Equipo: String,
    public Marca: string,
    public Modelo: string,
    public Serie: String,
    public Fecha: String,
    public Estado: string) {}
}
export class EquipoAllGroup { //PRIMERA VISTA | EQUIPO MARCA MODELO ¿VER?
  constructor(
    public Equipo: string,
    public Marca: string,
    public Modelo: string,
    public IdEquipo: number,
    public IdMarca: number,
    public IdModelo: number,
  ) {}
}

export class EquipoAllMARCA { //Filtro
  constructor(
    public Id: number,
    public Nombre: string) {}
}

export class EquipoAllMarcaTipo { //Filtro
  constructor(
    public Id: number,
    public Nombre: string) {}
}

export class EquipoRegistrar { //registrar nuevo equipo
  constructor(
    public idEquipo: string,
    public fecha: string,
    public modelo: number) {}
}
