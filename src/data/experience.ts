export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
  tools: string[];
  isCurrent?: boolean;
}

export const WORK_EXPERIENCES: WorkExperience[] = [
    {
      company: "Departamento de Informatica y Sistemas (UMSS)",
      role: "Auxiliar de mantenimiento de hardware y Software",
      period: "Febrero 2026 - Presente",
      location: "Cochabamba, Bolivia",
      isCurrent: true,
      description: [
        "Mantenimiento preventivo y correctivo de computadoras portatiles y de escritorio.",
        "Instalacion de Sistemas Operativos.",
        "Optimizacion de software.",
      ],
      tools: ["Linux", "Windows", "Redes"]
    },
    {
      company: "Tribunal Electoral Departamental (TED)",
      role: "Tecnico de Informacion Computarizada",
      period: "Marzo 2026",
      location: "Cochabamba, Bolivia",
      isCurrent: false,
      description: [
        "Entrega de certificados de impedimento a no votantes en las Elcciones Subnacionales..",
        "Manejó del sistema de impedimentos."
      ],
      tools: ["VPN"]
    },
    {
      company: "Seguro Social Universitario (SSU)",
      role: "Practicante en Desarollo Web",
      period: "agosto 2024 - noviembre 2024",
      location: "Cochabamba, Bolivia",
      isCurrent: false,
      description: [
        "Migraón del sistema de escritorio a web.",
        "Implementación de modulos de Consulta Externa, Laboratorio e Imagenologia.",
        "Trabajo con procedimientos almacenados almacenados"
      ],
      tools: ["Yii2", "PHP", "JavaScript", "HTML/CSS", "PostgreSQL", "Bootstrap", "SQLServer"]
    }
];
  