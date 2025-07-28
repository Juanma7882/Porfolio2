import { technologyIcons } from './icons'; 
import type { Proyecto } from '../types';

export const proyectos:Proyecto[] = [
  {
    titulo: "projects.weatherApp.title", 
    descripcion: "projects.weatherApp.description",
    imagenes: [
      "/src/img/dispositivos/notebookclima1.png",
      "/src/img/dispositivos/notebookclima2.png",
      "/src/img/dispositivos/tableclima1.png",
      "/src/img/dispositivos/tableclima2.png",
      "/src/img/dispositivos/celularclima1.png",
      "/src/img/dispositivos/celularclima2.png",
      "/src/img/dispositivos/celularclima3.png"
    ],
    tecnologias: [
      {
        nombre: "HTML5",
        icono: technologyIcons[1].icono
      },
      {
        nombre: "CSS3",
        icono: technologyIcons[2].icono
      }, 
      {
        nombre: "JavaScript",
        icono: technologyIcons[3].icono

      },
      {
          nombre: "Vite",
        icono: technologyIcons[0].icono
      }
    ],
    github: "https://github.com/Juanma7882/clima",
    pagina: "https://clima-cyan.vercel.app/"
  },
  {
    titulo: "projects.dealershipManager.title",
    descripcion: "projects.dealershipManager.description",
    imagenes: [
      "/src/img/concesionaria/imgInicio.jpg",
      "/src/img/concesionaria/imgMenu.png",
      "/src/img/concesionaria/vehiculos.png",
      "/src/img/concesionaria/Agregar Vechiculo.png"
    ],
    tecnologias: [
      {
        nombre: "C#",
        icono: technologyIcons[8].icono

      },
      {
        nombre: "SQL Server",
        icono: technologyIcons[10].icono
      }
    ],
    github: "https://github.com/Juanma7882/Concecionaria-wf",
    pagina: ""
  },
  {
    titulo: "projects.pygame.title",
    descripcion: "projects.pygame.description",
    imagenes: [
      "/src/img/pygame/mainGame.png",
      "/src/img/pygame/level1game.png",
      "/src/img/pygame/level2game.png",
      "/src/img/pygame/level3game.png",
      "/src/img/pygame/gamepause.png",
      "/src/img/pygame/gameTop5.png",
      "/src/img/pygame/loseGame.png"
    ],
    tecnologias: [
      {
        nombre: "Python",
        icono: technologyIcons[13].icono
      }
    ],
    github: "https://github.com/Juanma7882/MiJuego",
    pagina: ""
  },
  {
    titulo: "projects.blog.title",
    descripcion: "projects.blog.description",
    imagenes: [
      "/src/img/Blog/Enpoints.png",
      "/src/img/Blog/Enpoints1.png"
    ],
    tecnologias: [
      {
        nombre: "C#",
        icono: technologyIcons[8].icono

      },
      {
        nombre: ".NET Core",
        icono: technologyIcons[9].icono

      },
      {
        nombre: "SQL Server",
        icono: technologyIcons[10].icono
      }
    ],
    github: "https://github.com/Juanma7882/Blog",
    pagina: ""
  },
];
