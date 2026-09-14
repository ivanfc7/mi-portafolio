export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
  tools: string[];
  isCurrent?: boolean;
  logo?: string;
}

export const WORK_EXPERIENCES: WorkExperience[] = [
    {
      company: "Departamento de Informatica y Sistemas (UMSS)",
      role: "Auxiliar de Mantenimiento de Hardware y Software",
      period: "May. 2024 - Dic. 2024, Feb. 2026 - Presente",
      location: "Cochabamba, Bolivia",
      isCurrent: true,
      description: [
        "Mantenimiento preventivo y correctivo de computadoras portatiles y de escritorio.",
        "Instalación de Sistemas Operativos.",
        "Optimización de software.",
        "Instalación de programas.",
        "Diagnóstico de problemas y errores en software y hardware."
      ],
      tools: ["Linux", "Windows", "Redes"],
      logo: "/logoInstitutionals/labo.JPG"
    },
    {
      company: "Tribunal Electoral Departamental (TED)",
      role: "Tecnico de Informacion Computarizada",
      period: "Mar. 2026",
      location: "Cochabamba, Bolivia",
      isCurrent: false,
      description: [
        "Entrega de certificados de impedimento a no votantes en las Elcciones Subnacionales Departamentales 2026.",
        "Trabajo junto a actas y el sistema de impedimentos."
      ],
      tools: ["VPN"],
      logo: "/logoInstitutionals/ted.JPG"
    },
    {
      company: "Servicio de Registro Civico (SERECI)",
      role: "Operador de Transmisión del SIREPRE",
      period: "Ago. 2025, Oct. 2025 ",
      location: "Cochabamba, Bolivia",
      isCurrent: false,
      description: [
        "Transmición los resultados preeliminares del conteo rapido de las actas en un recinto electoral.",
        "Trabajo junto a la aplicación SIREPRE para enviar los datos a la sede en La Paz."
      ],
      tools: ["Aplicación movil"],
      logo: "/logoInstitutionals/sereci.JPG"
    },
    {
      company: "Seguro Social Universitario (SSU)",
      role: "Practicante en Desarollo Web",
      period: "Ago. 2024 - Nov. 2024",
      location: "Cochabamba, Bolivia",
      isCurrent: false,
      description: [
        "Migración de un sistema de escritorio a web.",
        "Implementación de módulos de: Consulta Externa, Laboratorio e Imagenología.",
        "Trabajo con procedimientos almacenados en conexión con dos motores de base de datos."
      ],
      tools: ["Yii2", "PHP", "JavaScript", "HTML/CSS", "PostgreSQL", "Bootstrap", "SQLServer"],
      logo: "/logoInstitutionals/ssu.JPG"
    }
];
  