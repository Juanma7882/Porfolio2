import type { JSX } from "react";


export interface Tecnologia {
  nombre: string;
  icono: JSX.Element;
  colors?: string[];
  svg?: string;
}

export interface DetalleSeccion {
  texto: string;
  imagen?: string;
}

export interface DetalleProyecto {
  participacion: DetalleSeccion;
  diseno: DetalleSeccion;
  alcance: DetalleSeccion;
  solucion: DetalleSeccion;
}

export interface Proyecto {
  slug: string;
  titulo: string;
  descripcion: string;
  imagenes: string[];
  tecnologias: Tecnologia[];
  github: string;
  pagina: string;
  detalle?: DetalleProyecto;
}
