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
        "Sitio web con SEO implementado",
        ""
      ]
    },
    {
      id: "webgarden",
      title: "Webgarden",
      description: "Sistema educativo con gamificación para el cuidado y seguimiento de arboles y plantas.",
      image: "/projects/webgarden.JPG",
      tags: ["React", "Tailwind CSS","TypeScript", "Django", "Python"],
      githubUrl: "https://github.com/ivanfc7/webgarden",
      featured: true,
    }
];