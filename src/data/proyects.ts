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
        "Sitio web estático con arquitectura frontend.",
        "Temas: oscuro, claro y sepia.",
        "Sección de cuentos y poemas.",
        "Imágenes y metadatos de las publicaciones.",
        "Tipografía y estilos acordes a una página literaria."
      ],
      solvedDescription: "El sitio busca ser un espacio personal para la publicación de cuentos, relatos cortos y poemas. Un sitio adecuado para compartir la literatura en un ambiente apropiado y quizá de forma más dinámica que compartirlo en una red social.",
      decissions: "Se decidió usar Astro debido a que el framework es el más adecuado para desarrollar sitios con estilo o temática de blog. Además de que Astro proporciona un ambiente de desarrollo liviano. \n Para complementar y realizar un sitio con sencillez, se optó por estilos CSS y funcionalidades con JavaScript para algunos aspectos como el cambio de tema. Por último, el soporte con archivos MarkDown (.md) de Astro hicieron perfecto el manejo de rutas da cada cuento y poema."
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
        "Juego educativo de laberinto 2D.",
        "Registro de plantas y árboles con descripciones e imágenes.",
        "Búsqueda manual y automática de descripciones en internet.",
        "Generación de consejos en afiches ilustrados.",
        "Colección de datos curiosos e interesantes",
        "Calculo estimado de la cantidad de oxígeno que podría producir un árbol.",
        "Gráficos e interpretación de resultados."
      ],
      solvedDescription: "El sistema es una inspiración de lo que fue E-Tree de Microsoft en su momento y la combinación de aplicaciones móviles de jardinería. Mediante la gamificación, el objetivo del sistema es incentivar a cuidar y valorar los árboles y plantas que se encuentran en los jardines. Permite al usuario el registro de plantas y obtener un progreso en el sistema al desbloquear consejos y temas de aprendizaje.",
      decissions: "Se decidió usar React para el frontend debido a que la escala del proyecto no requería de un framework más robusto como Angular y tampoco algo demasiado sencillo. Por el lado del backend, Django fue elegido por las ventajas que Python aportaría a funciones complejas a futuro; por ejemplo, la función de búsqueda se realizó mediante el uso de una de sus librerías.",
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