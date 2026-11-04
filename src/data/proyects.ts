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
];