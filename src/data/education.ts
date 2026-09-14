export type EducationType = 'principal' | 'curso' | 'competencia';

export interface EducationItem {
  type: EducationType;
  title: string;
  nameInstitucion: string;
  description: string;
  date: string;
  imgCertificate?: string; 
}

export const EducationList: EducationItem[] = [
    {
        type: 'principal',
        title: 'Egresado de Ingeniería de Sistemas',
        nameInstitucion: 'Universidad Mayor de San Simón',
        description: 'Egresé en la gestión II-2024. Desde entonces realizo mi modalidad de titulación. Durante mis años universitarios aprendí las bases y lógica necesarias para realizar un proyecto de software. En este camino conocí la programación en aplicaciones de escritorio con Java, la web con: HTML, CSS, PHP, Laravel,JavaScript. Conocí sobre gestión de sistemas y el pensamiento sistemico',
        date: 'Dic. 2024',
    },
    {
        type: 'curso',
        title: 'El ABC de la Investigación',
        nameInstitucion: 'Universidad Mayor de San Simón',
        description: 'Aprendí las bases para realizar un trabajo de investigación: metodologías de investigación, el método científico, el planteamiento de hípotesis y herramientas de recolección de datos e información.',
        date: '23 Ago. - 19 Sep. 2021',
        imgCertificate: '/certificates/abc.JPG'
    },
    {
        type: 'competencia',
        title: 'Hackthon IA "Servicio Tecnológico Publico Boliviano"',
        nameInstitucion: 'CBA & AGETIC',
        description: 'En el lapso de tres días estuve junto a un equipo donde compartimos ideas y juntos intentamos resolver problematicas mediante el uso de la inteligencia artificial. Implementamos un chatbot y logramos obtener el podio.',
        date: '3 Dic. 2023',
        imgCertificate: '/certificates/hackIA.jpg'
    },
    {
        type: 'curso',
        title: 'CCNAv7: Introducción a Redes',
        nameInstitucion: 'Cisco Networking Academy',
        description: 'Curso donde dí mi primer paso en el área de redes y telecomunicaciones. Aprendí los protocolos básicos de internet, el concepto de redes y el uso de subnnating',
        date: '28 Dic. 2023',
        imgCertificate: '/certificates/ccna1.JPG'
    },
    {
        type: 'curso',
        title: 'Mantenimiento de Computadoras',
        nameInstitucion: 'Departamento de Informatica y Sistemas - UMSS',
        description: 'Dentro del área de soporte; aprendí el proceso para reallizar mantenimiento preventivo y correctivo a computadoras portatiles y de escritorio. Además de conocer herramientas de testing para conocer el estado de los componentes internos y el proceso de recuperación de archivos.',
        date: '28 Feb. 2023',
        imgCertificate: '/certificates/mante-comp.jpg'
    },
    {
        type: 'curso',
        title: 'CCNAv7: Switching, Routing and Wireless Essentials',
        nameInstitucion: 'Cisco Networking Academy',
        description: 'Mi segundo paso por el mundo de las redes. En este punto aprendí las conexiones a través de los dispositivos de red: computadora, switch, router y la comprensión de la conectvidad de dispositivos a una red wireless',
        date: '30 Jun. 2024',
        imgCertificate: '/certificates/ccna2.JPG'
    },
    {
        type: 'curso',
        title: 'Spring Boot',
        nameInstitucion: 'Departamento de Informatica y Sistemas - UMSS',
        description: 'Donde aprendí el uso del framework backend de java "Spring Boot". Conocí los microservicios y el servicio de API Rest, ademas aprendí a crear mis primeros endpoints.',
        date: '2 Feb. 2025',
        imgCertificate: '/certificates/springboot.jpg'
    },
    {
        type: 'curso',
        title: 'Desarrollo de Software',
        nameInstitucion: 'Santex xAcademy (Argentina)',
        description: 'El curso más completo de desarrollo web que hé completado. En el lapso de seis meses aprendí de forma asincrona y remota todo el proceso de desarrollo de software. Profundicé en metodologías ágiles, el uso de GIT, linux como entorno de desarrollo, los primeros pasos en Docker y el desarrollo con tecnologías modernas: Angular, Node js, Express y Nest js.',
        date: 'Mar. 2026',
        imgCertificate: '/certificates/xacademy.JPG'
    }
]

