import { technologyIcons } from "./icons";
import type { Proyecto } from "../types";

const icon = Object.fromEntries(
  technologyIcons.map((t) => [t.nombre, t.icono]),
);

export const proyectos: Proyecto[] = [
  {
    titulo: "projects.restaurant.title",
    descripcion: "projects.restaurant.description",
    imagenes: [
      "/img/projects/restaurant/restaurante.webp",
      "/img/projects/restaurant/restaurante2.webp",
      "/img/projects/restaurant/restaurante3.webp",
      "/img/projects/restaurant/restaurante4.webp",
      "/img/projects/restaurant/restaurante5.webp",
    ],
    tecnologias: [
      { nombre: "Angular", icono: icon["Angular"] },
      { nombre: "supabase", icono: icon["Supabase"] },
    ],
    github: "https://github.com/Juanma7882/",
    pagina: "https://clima-cyan.vercel.app/",
  },
  {
    titulo: "projects.self-service-for-hotel.title",
    descripcion: "projects.self-service-for-hotel.description",
    imagenes: [
      "/img/projects/hotel/Macbook-Air-localhost.webp",
      "/img/projects/hotel/Macbook-Air-localhost (1).webp",
      "/img/projects/hotel/Macbook-Air-localhost (2).webp",
      "/img/projects/hotel/Macbook-Air-localhost (3).webp",
      "/img/projects/hotel/Macbook-Air-localhost (4).webp",
      "/img/projects/hotel/Macbook-Air-localhost (5).webp",
      "/img/projects/hotel/Macbook-Air-localhost (6).webp",
    ],
    tecnologias: [
      { nombre: "node.js", icono: icon["Node.js"] },
      { nombre: "JavaScript", icono: icon["JavaScript"] },
      { nombre: "EJS", icono: icon["JavaScript"] },
    ],
    github: "https://github.com/Juanma7882/clima",
    pagina: "https://clima-cyan.vercel.app/",
  },
  {
    titulo: "projects.hackathon.title",
    descripcion: "projects.hackathon.description",
    imagenes: [
      "/img/projects/hackaton/hackaton.webp",
      "/img/projects/hackaton/hackaton2.webp",
      "/img/projects/hackaton/hackaton3.webp",
    ],
    tecnologias: [
      { nombre: "React", icono: icon["React"] },
      { nombre: "node.js", icono: icon["Node.js"] },
      { nombre: "docker", icono: icon["Docker"] },
    ],
    github: "https://github.com/Juanma7882/clima",
    pagina: "https://clima-cyan.vercel.app/",
  },
  {
    titulo: "projects.PowerType.title",
    descripcion: "projects.PowerType.description",
    imagenes: [
      "/img/projects/consola/consola.webp",
      "/img/projects/consola/consola1.webp",
      "/img/projects/consola/consola2.webp",
    ],
    tecnologias: [{ nombre: "git", icono: icon["Git"] }],
    github: "https://github.com/Juanma7882/clima",
    pagina: "https://clima-cyan.vercel.app/",
  },
  {
    titulo: "projects.weatherApp.title",
    descripcion: "projects.weatherApp.description",
    imagenes: [
      "/img/projects/weather/notebookclima1.webp",
      "/img/projects/weather/notebookclima2.webp",
      "/img/projects/weather/tableclima1.webp",
      "/img/projects/weather/tableclima2.webp",
      "/img/projects/weather/celularclima1.webp",
      "/img/projects/weather/celularclima2.webp",
      "/img/projects/weather/celularclima3.webp",
    ],
    tecnologias: [
      { nombre: "HTML5", icono: icon["HTML5"] },
      { nombre: "CSS3", icono: icon["CSS3"] },
      { nombre: "JavaScript", icono: icon["JavaScript"] },
      { nombre: "Vite", icono: icon["Vite"] },
    ],
    github: "https://github.com/Juanma7882/clima",
    pagina: "https://clima-cyan.vercel.app/",
  },
  {
    titulo: "projects.dealershipManager.title",
    descripcion: "projects.dealershipManager.description",
    imagenes: [
      "/img/projects/dealership/imgInicio.webp",
      "/img/projects/dealership/imgMenu.webp",
      "/img/projects/dealership/vehiculos.webp",
      "/img/projects/dealership/Agregar Vechiculo.webp",
    ],
    tecnologias: [
      { nombre: "C#", icono: icon["C#"] },
      { nombre: "SQL Server", icono: icon["SQL Server"] },
    ],
    github: "https://github.com/Juanma7882/Concecionaria-wf",
    pagina: "",
  },
  {
    titulo: "projects.pygame.title",
    descripcion: "projects.pygame.description",
    imagenes: [
      "/img/projects/pygame/mainGame.webp",
      "/img/projects/pygame/level1game.webp",
      "/img/projects/pygame/level2game.webp",
      "/img/projects/pygame/level3game.webp",
      "/img/projects/pygame/gamepause.webp",
      "/img/projects/pygame/gameTop5.webp",
      "/img/projects/pygame/loseGame.webp",
    ],
    tecnologias: [{ nombre: "Python", icono: icon["Python"] }],
    github: "https://github.com/Juanma7882/MiJuego",
    pagina: "",
  },
  {
    titulo: "projects.blog.title",
    descripcion: "projects.blog.description",
    imagenes: [
      "/img/projects/blog/Enpoints.webp",
      "/img/projects/blog/Enpoints1.webp",
    ],
    tecnologias: [
      { nombre: "C#", icono: icon["C#"] },
      { nombre: ".NET Core", icono: icon[".NET"] },
      { nombre: "SQL Server", icono: icon["SQL Server"] },
    ],
    github: "https://github.com/Juanma7882/Blog",
    pagina: "",
  },
];
