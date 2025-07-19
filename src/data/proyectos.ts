import { technologyIcons } from './icons'; 
export const proyectos = [
  {
    titulo: "Aplicación del clima",
    descripcion: "Aplicación del clima desarrollada con JavaScript. Permite consultar el clima actual junto con información adicional, como el pronóstico por horas y para los próximos seis días, consumiendo múltiples APIs.",
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
    titulo: "Gestor de concesionaria",
    descripcion: "Aplicación para gestionar una concesionaria de vehículos. Permite validar usuarios, roles y permisos. Está desarrollada en C# con .NET Framework, integrada con una base de datos y pruebas unitarias. Es una aplicación completamente funcional.",
    imagenes: [
      "/src/img/concesionaria/imgInicio.jpg",
      "/src/img/concesionaria/imgMenu.png",
      "/src/img/concesionaria/vehiculos.png",
      "/src/img/concesionaria/Agregar Vehiculo.png"
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
    titulo: "Juego en Pygame",
    descripcion: "Juego desarrollado en Python utilizando Pygame. Utiliza programación orientada a objetos (POO) e inteligencia artificial básica para definir el comportamiento de los enemigos. Cuenta con tres niveles con enemigos distintos, ofreciendo una experiencia desafiante y entretenida.",
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
    titulo: "API Blog de Notas",
    descripcion: "Backend para una aplicación de blog de notas, desarrollado con .NET Core y SQL Server. La gestión de datos se realiza mediante Entity Framework Core (EF Core), lo que permite una interacción fluida y segura con las entidades del dominio.",
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
