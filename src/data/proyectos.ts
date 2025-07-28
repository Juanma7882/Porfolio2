import { technologyIcons } from './icons'; 
import type { Proyecto } from '../types';

export const proyectos:Proyecto[] = [
  {
    titulo: "projects.weatherApp.title", 
    descripcion: "projects.weatherApp.description",
    imagenes: [
      "/public/img/projects/weather/notebookclima1.webp",
      "/public/img/projects/weather/notebookclima2.webp",
      "/public/img/projects/weather/tableclima1.webp",
      "/public/img/projects/weather/tableclima2.webp",
      "/public/img/projects/weather/celularclima1.webp",
      "/public/img/projects/weather/celularclima2.webp",
      "/public/img/projects/weather/celularclima3.webp"
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
      "/public/img/projects/dealership/imgInicio.webp",
      "/public/img/projects/dealership/imgMenu.webp",
      "/public/img/projects/dealership/vehiculos.webp",
      "/public/img/projects/dealership/Agregar Vechiculo.webp"
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
      "/public/img/projects/pygame/mainGame.webp",
      "/public/img/projects/pygame/level1game.webp",
      "/public/img/projects/pygame/level2game.webp",
      "/public/img/projects/pygame/level3game.webp",
      "/public/img/projects/pygame/gamepause.webp",
      "/public/img/projects/pygame/gameTop5.webp",
      "/public/img/projects/pygame/loseGame.webp"
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
      "/public/img/projects/blog/Enpoints.webp",
      "/public/img/projects/blog/Enpoints1.webp"
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
