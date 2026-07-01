import type { JSX } from "react";


export interface Tecnologia {
  nombre: string;
  icono: JSX.Element;
  colors?: string[];
  svg?: string;
}

export interface Proyecto {
  titulo: string;
  descripcion: string;
  imagenes: string[];
  tecnologias: Tecnologia[];
  github: string;
  pagina: string;
}
