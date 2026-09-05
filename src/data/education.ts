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
        title: 'Egresado de Ingenieria de Sistemas',
        nameInstitucion: 'Universidad Mayor de San Simón',
        description: 'Egrese en la gestion II-2024. Desde entonces  realizo mi modalidad de titulacion.',
        date: 'Dic. 2024',
    },
    {
        type: 'curso',
        title: 'El ABC de la Investigación',
        nameInstitucion: 'Universidad Mayor de San Simón',
        description: 'Aprendi las bases de como realizar un trabajo de investigacion.',
        date: '23 Ago. - 19 Sep. 2021',
        imgCertificate: '/certificates/abc.JPG'
    },
    {
        type: 'competencia',
        title: 'Hackthon IA "Servicio Tecnológico Publico Boliviano"',
        nameInstitucion: 'CBA & AGETIC',
        description: 'En el lapso de tres dias estuve junto a un equipo donde compatimos ideas y juntos intentamos resolver problematicas mediante el uso de la IA. Implementamos un chatbot y logramos obtener el primer lugar.',
        date: '3 Dic. 2023',
    },
    {
        type: 'curso',
        title: 'CCNAv7: Introducción a Redes',
        nameInstitucion: 'Cisco Networking Academy',
        description: 'Curso donde di mi primer paso en el area de redes y telecomunicaciones. Aprendi los protocolos basicos el concepto de redes y el uso de subnnating',
        date: '28 Dic. 2023',
         imgCertificate: '/certificates/ccna1.JPG'
    },
    {
        type: 'curso',
        title: 'Mantenimiento de Computadoras',
        nameInstitucion: 'Departamento de Informatica y Sistemas - UMSS',
        description: 'Dentro del area de soporte; aprendi el proceso para reallizar mantenimiento preventivo y correctivo a computadoras portatiles y de escritorio. Ademas de conocer herramientas de testing de los componentes y recuperacion de archivos.',
        date: '28 Feb. 2023',
    },
    {
        type: 'curso',
        title: 'CCNAv7: Switching, Routing and Wireless Essentials',
        nameInstitucion: 'Cisco Networking Academy',
        description: 'Mi segundo paso por el mundo de las redes. En este punto aprendi las conexiones a traves de los dispositivos de red: switch router y la comprension del manejo de servidores y la conectvidad a una rede wireless',
        date: '30 Jun. 2024',
         imgCertificate: '/certificates/ccna2.JPG'
    },
    {
        type: 'curso',
        title: 'Spring Boot',
        nameInstitucion: 'Departamento de Informatica y Sistemas - UMSS',
        description: 'Donde aprendi el uso del framework backend de java Spring boot. Conoci los microservicios y el servicio de API Rest. En eset curso aprendi a crear mis primeros endpoints.',
        date: '2 Feb. 2025',
    },
    {
        type: 'curso',
        title: 'Desarrollo de Software',
        nameInstitucion: 'Santex xAcademy (Argentina)',
        description: 'El curso mas completo de desarrollo web. En el lapso de seis meses aprendi de forma asincrona y remota todo el proceso de desarrollo de software. Profundice en metodologias agiles el uso de git linux como entorno de desarrollo los primeros pasos en docker y el desarrollo con tecnologias modernas angular y nest js.',
        date: 'Mar. 2026',
        imgCertificate: '/certificates/xacademy.JPG'
    }
]

