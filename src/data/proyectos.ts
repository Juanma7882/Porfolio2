import { technologyIcons } from "./icons";
import type { Proyecto } from "../types";

const icon = Object.fromEntries(
  technologyIcons.map((t) => [t.nombre, t.icono]),
);

export const proyectos: Proyecto[] = [
  {
    slug: "la-parrilla-de-don-juan",
    titulo: "projects.parrillaDonJuan.title",
    descripcion: "projects.parrillaDonJuan.description",
    imagenes: [
      "/img/projects/restaurant/restaurante.webp",
      "/img/projects/restaurant/restaurante2.webp",
      "/img/projects/restaurant/restaurante3.webp",
      "/img/projects/restaurant/restaurante4.webp",
      "/img/projects/restaurant/restaurante5.webp",
    ],
    tecnologias: [
      { nombre: "Angular", icono: icon["Angular"] },
      { nombre: "Ionic", icono: icon["Ionic"] },
      { nombre: "Capacitor", icono: icon["Capacitor"] },
      { nombre: "Supabase", icono: icon["Supabase"] },
      { nombre: "Chart.js", icono: icon["Chart.js"] },
    ],
    github: "https://github.com/Juanma7882/la-parrilla-de-don-juan-2026",
    pagina: "",
    detalle: {
      participacion: {
        texto: "projects.parrillaDonJuan.detail.participacion",
        imagen: "/img/projects/restaurant/restaurante2.webp",
      },
      metodologia: {
        texto: "projects.parrillaDonJuan.detail.metodologia",
      },
      diseno: {
        texto: "projects.parrillaDonJuan.detail.diseno",
        imagen: "/img/projects/restaurant/restaurante3.webp",
      },
      alcance: {
        texto: "projects.parrillaDonJuan.detail.alcance",
        imagen: "/img/projects/restaurant/restaurante4.webp",
      },
      solucion: {
        texto: "projects.parrillaDonJuan.detail.solucion",
        imagen: "/img/projects/restaurant/restaurante5.webp",
      },
      softSkills: "projects.parrillaDonJuan.detail.softSkills",
    },
    featured: "hero",
  },
  {
    slug: "meta-api-automation",
    titulo: "projects.metaApiAutomation.title",
    descripcion: "projects.metaApiAutomation.description",
    imagenes: [],
    tecnologias: [
      { nombre: "NestJS", icono: icon["NestJS"] },
      { nombre: "PostgreSQL", icono: icon["PostgreSQL"] },
      { nombre: "Docker", icono: icon["Docker"] },
      { nombre: "n8n", icono: icon["n8n"] },
    ],
    github: "",
    pagina: "",
    detalle: {
      participacion: { texto: "projects.metaApiAutomation.detail.participacion" },
      diseno: { texto: "projects.metaApiAutomation.detail.diseno" },
      alcance: { texto: "projects.metaApiAutomation.detail.alcance" },
      solucion: { texto: "projects.metaApiAutomation.detail.solucion" },
    },
    featured: "feature-tall",
  },
  {
    slug: "hackathon",
    titulo: "projects.hackathon.title",
    descripcion: "projects.hackathon.description",
    imagenes: [
      "/img/projects/hackaton/hackaton.webp",
      "/img/projects/hackaton/hackaton2.webp",
      "/img/projects/hackaton/hackaton3.webp",
    ],
    tecnologias: [
      { nombre: "React", icono: icon["React"] },
      { nombre: "Node.js", icono: icon["Node.js"] },
      { nombre: "Docker", icono: icon["Docker"] },
    ],
    github: "https://github.com/Juanma7882/hackaton-midu",
    pagina: "",
    detalle: {
      participacion: {
        texto: "projects.hackathon.detail.participacion",
        imagen: "/img/projects/hackaton/hackaton.webp",
      },
      metodologia: {
        texto: "projects.hackathon.detail.metodologia",
      },
      diseno: {
        texto: "projects.hackathon.detail.diseno",
        imagen: "/img/projects/hackaton/hackaton2.webp",
      },
      alcance: {
        texto: "projects.hackathon.detail.alcance",
        imagen: "/img/projects/hackaton/hackaton3.webp",
      },
      solucion: {
        texto: "projects.hackathon.detail.solucion",
        imagen: "/img/projects/hackaton/hackaton.webp",
      },
      softSkills: "projects.hackathon.detail.softSkills",
    },
  },
  {
    slug: "powertype",
    titulo: "projects.PowerType.title",
    descripcion: "projects.PowerType.description",
    imagenes: [
      "/img/projects/consola/consola.webp",
      "/img/projects/consola/consola1.webp",
      "/img/projects/consola/consola2.webp",
    ],
    tecnologias: [
      { nombre: "PowerShell", icono: icon["PowerShell"] },
      { nombre: "Git", icono: icon["Git"] },
    ],
    github: "https://github.com/AnderssonPeter/PowerType",
    pagina: "",
    detalle: {
      participacion: {
        texto: "projects.PowerType.detail.participacion",
        imagen: "/img/projects/consola/consola.webp",
      },
      diseno: {
        texto: "projects.PowerType.detail.diseno",
        imagen: "/img/projects/consola/consola1.webp",
      },
      alcance: {
        texto: "projects.PowerType.detail.alcance",
        imagen: "/img/projects/consola/consola2.webp",
      },
      solucion: {
        texto: "projects.PowerType.detail.solucion",
        imagen: "/img/projects/consola/consola.webp",
      },
    },
  },
  {
    slug: "e-commerce",
    titulo: "projects.E-commerce.title",
    descripcion: "projects.E-commerce.description",
    imagenes: [],
    tecnologias: [
      { nombre: "Node.js", icono: icon["Node.js"] },
      { nombre: "TypeScript", icono: icon["TypeScript"] },
      { nombre: "React", icono: icon["React"] },
      { nombre: "Tailwind", icono: icon["Tailwind"] },
      { nombre: "PostgreSQL", icono: icon["PostgreSQL"] },
    ],
    github: "",
    pagina: "",
    detalle: {
      participacion: { texto: "projects.E-commerce.detail.participacion" },
      diseno: { texto: "projects.E-commerce.detail.diseno" },
      alcance: { texto: "projects.E-commerce.detail.alcance" },
      solucion: { texto: "projects.E-commerce.detail.solucion" },
    },
    featured: "feature-wide",
  },
  {
    slug: "weather-app",
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
    slug: "dealership-manager",
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
    slug: "pygame",
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
    slug: "blog-api",
    titulo: "projects.blog.title",
    descripcion: "projects.blog.description",
    imagenes: [
      "/img/projects/blog/Enpoints.webp",
      "/img/projects/blog/Enpoints1.webp",
    ],
    tecnologias: [
      { nombre: "C#", icono: icon["C#"] },
      { nombre: ".NET", icono: icon[".NET"] },
      { nombre: "SQL Server", icono: icon["SQL Server"] },
    ],
    github: "https://github.com/Juanma7882/Blog",
    pagina: "",
  },
  {
    slug: "sistema-venta",
    titulo: "projects.sistemaVenta.title",
    descripcion: "projects.sistemaVenta.description",
    imagenes: [],
    tecnologias: [
      { nombre: "C#", icono: icon["C#"] },
      { nombre: ".NET", icono: icon[".NET"] },
      { nombre: "SQL Server", icono: icon["SQL Server"] },
    ],
    github: "https://github.com/Juanma7882/VentaDotNet",
    pagina: "",
    detalle: {
      participacion: { texto: "projects.sistemaVenta.detail.participacion" },
      diseno: { texto: "projects.sistemaVenta.detail.diseno" },
      alcance: { texto: "projects.sistemaVenta.detail.alcance" },
      solucion: { texto: "projects.sistemaVenta.detail.solucion" },
    },
  },
  {
    slug: "hotel-self-service",
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
      { nombre: "Node.js", icono: icon["Node.js"] },
      { nombre: "JavaScript", icono: icon["JavaScript"] },
      { nombre: "EJS", icono: icon["JavaScript"] },
      { nombre: "MySQL", icono: icon["MySQL"] },
      { nombre: "Docker", icono: icon["Docker"] },
    ],
    github: "",
    pagina: "",
    detalle: {
      participacion: {
        texto: "projects.self-service-for-hotel.detail.participacion",
        imagen: "/img/projects/hotel/Macbook-Air-localhost.webp",
      },
      diseno: {
        texto: "projects.self-service-for-hotel.detail.diseno",
        imagen: "/img/projects/hotel/Macbook-Air-localhost (1).webp",
      },
      alcance: {
        texto: "projects.self-service-for-hotel.detail.alcance",
        imagen: "/img/projects/hotel/Macbook-Air-localhost (2).webp",
      },
      solucion: {
        texto: "projects.self-service-for-hotel.detail.solucion",
        imagen: "/img/projects/hotel/Macbook-Air-localhost (3).webp",
      },
    },
  },
];
