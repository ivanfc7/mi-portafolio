export interface SkillItem {
    name: string;
    icon?: string;
}
  
export interface SkillCategory {
    title: string;
    skills: SkillItem[];
}
  
export const SKILL_CATEGORIES: SkillCategory[] = [
    {
      title: "Lenguajes de Programación",
      skills: [
        { name: "Java", icon: "java" },
        { name: "PHP", icon: "php" },
        { name: "Python", icon: "py" },
        { name: "JavaScript", icon: "js" },
        { name: "TypeScript", icon: "ts" }
      ]
    },
    {
      title: "Frameworks y Librerías Frontend",
      skills: [
        { name: "HTML5", icon: "html" },
        { name: "CSS3", icon: "css" },
        { name: "React", icon: "react" },
        { name: "Bootstrap", icon: "bootstrap" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "Angular", icon: "angular" },
        { name: "Astro", icon: "astro" }
      ]
    },
    {
      title: "Frameworks Backend",
      skills: [
        { name: "Django", icon: "django" },
        { name: "Laravel", icon: "laravel" },
        { name: "Spring Boot", icon: "spring" },
        { name: "Node JS", icon: "nodejs" },
        { name: "Express", icon: "express" }
      ]
    },
    {
      title: "Herramientas para el Desarrollo",
      skills: [
        { name: "GitHub", icon: "github" },
        { name: "Git", icon: "git" },
        { name: "VS Code", icon: "vscode" },
        { name: "Postman", icon: "postman" },
        { name: "Vite", icon: "vite" },
        { name: "MySQL", icon: "mysql" },
        { name: "PostgreSQL", icon: "postgres" },
        { name: "Linux Mint", icon: "mint" }
      ]
    },
    {
      title: "Habilidades Blandas",
      skills: [
        { name: "Trabajo en equipo" },
        { name: "Comunicación asertiva" },
        { name: "Autodidacta" },
        { name: "Consideración de detalles" },
        { name: "Pensamiento crítico" }
      ]
    }
];