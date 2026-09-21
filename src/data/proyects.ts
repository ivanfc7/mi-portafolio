export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;     
    previewVideo?: string; 
    tags: string[];
    githubUrl?: string;
    demoUrl?: string;
    featured: boolean;
    properties?: string [];
    solvedDescription? : string;
    decissions?: string;
    gallery?: string[]
}
  
export const LIST_PROJECTS: Project[] = [
    {
      id: "escritos-literarios",
      title: "Blog de escritos literarios",
      description: "Sitio web dedicado a la publicación de cuentos, relatos y poemas.",
      image: "/projects/escritos-literarios.JPG",
      tags: ["Astro", "JavaScript", "CSS"],
      githubUrl: "https://github.com/ivanfc7/escritos-literarios",
      demoUrl: "https://escritos-literarios.vercel.app",
      featured: true,
      properties: [
        "Sitio web estatico con arquitectura unica frontend.",
        "Temas oscuro claro y sepia",
        "Seccion de cuentos y poemas.",
        "Imagenes y metadatos de las publicaciones.",
        "Tipografia y estilos acordes a una pagina literaria."
      ],
      solvedDescription: "El sitio busca ser un espacio personal para la publicacion de cuentos relatos cortos y poemas un sitio que de un lugar adecuado para compartir la literatura en un ambiente apropiado y quiza de forma mas dinamica que compartirlo en una red social. ",
      decissions: "Se decidio usar Astro debido a que el framework es el mas adecuado a la hora de desarrollar sitios estilo blog, ademas de lograr un sitio liviano y sencillo se opto por estilos CSS y algo de JavaScript para algunos aspectos como el cambio de tema. Por ultimo Astro y su soporte para mostrar blogs con archivos MarkDown lo hicieron perfecto para las rutas da cada cuento y poema."
    },
    {
      id: "webgarden",
      title: "Webgarden",
      description: "Sistema educativo con gamificación para el cuidado y seguimiento de arboles y plantas.",
      image: "/projects/webgarden.JPG",
      tags: ["React", "Tailwind CSS","TypeScript", "Django", "Python"],
      githubUrl: "https://github.com/ivanfc7/webgarden",
      featured: true,
      properties: [
        "Sitio web con arquitectura frontend y backend.",
        "Juego de laberinto 2D educativo",
        "Registro de plantas y arboles con descripciones e imagenes.",
        "Busqueda de descripciones en la web y fomento a la busqueda.",
        "Generacion de consejos en afiches.",
        "Coleccion de datos curiosos e interesantes",
        "Calculo estimado de la cantidad de oxigeno que podria porducir un arbol"
      ],
      solvedDescription: "El sistema es una inspiracion en lo que fue E-Tree de Microsoft y la combinacion de aplicaciones moviles de jardineria. Medianre la gamificacion el objetivo del sistema es incentivar a cuidar y valores los arboles y plantas que se encuentran en los jardines. Permite al usuario el registro de plantas y obtener un progreso en el sistema al desbloquear consejos y temas de aprendizaje",
      decissions: "Se decidio usar React para el Frontend debido a que fue apropiado a la escala del proyecto sin necesesidad de recurri a algo enorme con Angular o algo muy basico con Astro o Vue. Junto con Django se busca la interaccion frontend backend con frameworks no tan robustos pero optimos. Django por ejemplo fue elegido por ser de Python puesto que este lenguaje aportaria a funciones de busqueda por ejemplo mediante sus librerias..",
      gallery: [
        "/projects/webgarden1.JPG",
        "/projects/webgarden2.JPG",
        "/projects/webgarden3.JPG",
        "/projects/webgarden4.JPG",
        "/projects/webgarden5.JPG",
        "/projects/webgarden6.JPG",
      ]
    }
];