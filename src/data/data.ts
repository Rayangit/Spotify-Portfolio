import { 
  Kookai, 
  Cloudeasier,
  Cloud,
  AirFrance, 
  Enedis,
  Integration,
  Python,
  Ruby,
  Typescript,
  VueJS,
  Epitech,
  Ahlia,
} from 'assets/img'
import {
  Eminem,
  FreezeRael,
  Pride
} from 'assets/sounds'



export interface Techno {
  frameworks: string[]
  bgColor: string
  icon: string
}

export interface TechnicalStackInterface {
  [key: string]: Techno
}

export enum TechnicalStackKeys {
  TYPESCRIPT = 1,
  PYTHON = 2,
  INTEGRATION = 3,
  CLOUD = 4,
  RUBY = 5,
}

export const TechnicalStack: TechnicalStackInterface = {
  typescript: {
    frameworks: ['ReactJS', 'React Native', 'VueJS'],
    bgColor: '#3178c6',
    icon: Typescript,
  },
  python: {
    frameworks: ['Django', 'Flask', 'SciKit-Learn'],
    bgColor: '#1E3264',
    icon: Python,
  },
  integration: {
    frameworks: ['HTML5', 'CSS', 'SASS', 'LESS'],
    bgColor: '#f1662b',
    icon: Integration,
  },
  cloud: {
    frameworks: ['AWS', 'GCP'],
    bgColor: '#ffcb05',
    icon: Cloud,

  },
  ruby: {
    frameworks: ['Liquid', 'Rails', 'Sidekiq'],
    bgColor: '#901212',
    icon: Ruby,
  },
 
}

export const SongsInformations: PlaylistProps[] = [
  {
    title: 'Cleaning Out My Closet',
    artist: 'Eminem',
    src: Eminem
  },
  {
    title: 'Freeze Rael',
    artist: 'Freeze Corleone',
    src: FreezeRael
  },
  {
    title: 'Pride',
    artist: 'Kendrick Lamar',
    src: Pride
  },
]

export const experiences: ModalPropsType[] = [
  {
    title: 'Frontend Engineer',
    bgColor: '#003371',
    subtitle: 'Enedis',
    date: 'May - Jun 20',
    stack: 'CSS | JS | C++',
    source: Enedis,
    location: 'Paris - France',
    description: `⇨ 𝑴𝑨 𝑴𝑰𝑺𝑺𝑰𝑶𝑵 : Modifier et ajouter des données sur un outil de monitoring constitué d'une carte et de plusieurs graphiques répertoriant toutes les données liées aux coupures électriques en France.
  
  𝐃𝐨𝐦𝐚𝐢𝐧𝐞 𝐝'𝐢𝐧𝐭𝐞𝐫𝐯𝐞𝐧𝐭𝐢𝐨𝐧 :
  ➤ Modification des labels constituants les graphiques (React, Chart JS).
  ➤ Récupération des données nécessaires en base de données (Django, PGSQL).
  ➤ Modification des graphiques afin d'avoir un rendu plus adapté aux besoins d'Enedis. (Chart JS).
  ➤ Mise en place de tests unitaires Back-End (Pytest).
  ➤ Mise en place de l'automatisation des tests Back-End (Jenkins).

  𝐅𝐫𝐨𝐧𝐭-𝐄𝐧𝐝 : HTML, CSS, Javascript (React)
  𝐁𝐚𝐜𝐤-𝐄𝐧𝐝 : Python, Django
  𝐁𝐚𝐬𝐞 𝐝𝐞 𝐝𝐨𝐧𝐧𝐞𝐞 : PGSQL
  𝐓𝐞𝐬𝐭𝐢𝐧𝐠 : Pytest
  𝐃𝐞𝐯𝐎𝐩𝐬 : Jenkins
  𝐎𝐫𝐠𝐚𝐧𝐢𝐬𝐚𝐭𝐢𝐨𝐧 : Trello
  𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐧𝐢𝐧𝐠 : GIT
  `,
    mainTechno: [TechnicalStackKeys.PYTHON]
  },
  {
    title: 'Frontend Engineer',
    bgColor: '#092D32',
    subtitle: 'Kookaï',
    stack: 'CSS | JS | C++',
    date: 'Jul - Sep 20',
    source: Kookai,
    location: 'Paris - France',
    description: `⇨ 𝑴𝑨 𝑴𝑰𝑺𝑺𝑰𝑶𝑵 : Modifier et ajouter des données sur un outil de monitoring constitué d'une carte et de plusieurs graphiques répertoriant toutes les données liées aux coupures électriques en France.

  𝐃𝐨𝐦𝐚𝐢𝐧𝐞 𝐝'𝐢𝐧𝐭𝐞𝐫𝐯𝐞𝐧𝐭𝐢𝐨𝐧 :
  ➤ Modification des labels constituants les graphiques (React, Chart JS).
  ➤ Récupération des données nécessaires en base de données (Django, PGSQL).
  ➤ Modification des graphiques afin d'avoir un rendu plus adapté aux besoins d'Enedis. (Chart JS).
  ➤ Mise en place de tests unitaires Back-End (Pytest).
  ➤ Mise en place de l'automatisation des tests Back-End (Jenkins).

  𝐅𝐫𝐨𝐧𝐭-𝐄𝐧𝐝 : HTML, CSS, Javascript (React)
  𝐁𝐚𝐜𝐤-𝐄𝐧𝐝 : Python, Django
  𝐁𝐚𝐬𝐞 𝐝𝐞 𝐝𝐨𝐧𝐧𝐞𝐞 : PGSQL
  𝐓𝐞𝐬𝐭𝐢𝐧𝐠 : Pytest
  𝐃𝐞𝐯𝐎𝐩𝐬 : Jenkins
  𝐎𝐫𝐠𝐚𝐧𝐢𝐬𝐚𝐭𝐢𝐨𝐧 : Trello
  𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐧𝐢𝐧𝐠 : GIT
  `,
    mainTechno: [TechnicalStackKeys.TYPESCRIPT, TechnicalStackKeys.RUBY]
  },
  {
    title: 'Lead tech integration',
    bgColor: '#000E23',
    stack: 'CSS | JS | C++',
    subtitle: 'Air France',
    date: 'Oct 20 - Jan 21',
    source: AirFrance,
    location: 'Paris - France',
    description: `⇨ 𝑴𝑨 𝑴𝑰𝑺𝑺𝑰𝑶𝑵 : Modifier et ajouter des données sur un outil de monitoring constitué d'une carte et de plusieurs graphiques répertoriant toutes les données liées aux coupures électriques en France.

  𝐃𝐨𝐦𝐚𝐢𝐧𝐞 𝐝'𝐢𝐧𝐭𝐞𝐫𝐯𝐞𝐧𝐭𝐢𝐨𝐧 :
  ➤ Modification des labels constituants les graphiques (React, Chart JS).
  ➤ Récupération des données nécessaires en base de données (Django, PGSQL).
  ➤ Modification des graphiques afin d'avoir un rendu plus adapté aux besoins d'Enedis. (Chart JS).
  ➤ Mise en place de tests unitaires Back-End (Pytest).
  ➤ Mise en place de l'automatisation des tests Back-End (Jenkins).

  𝐅𝐫𝐨𝐧𝐭-𝐄𝐧𝐝 : HTML, CSS, Javascript (React)
  𝐁𝐚𝐜𝐤-𝐄𝐧𝐝 : Python, Django
  𝐁𝐚𝐬𝐞 𝐝𝐞 𝐝𝐨𝐧𝐧𝐞𝐞 : PGSQL
  𝐓𝐞𝐬𝐭𝐢𝐧𝐠 : Pytest
  𝐃𝐞𝐯𝐎𝐩𝐬 : Jenkins
  𝐎𝐫𝐠𝐚𝐧𝐢𝐬𝐚𝐭𝐢𝐨𝐧 : Trello
  𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐧𝐢𝐧𝐠 : GIT
  `,
    mainTechno: [TechnicalStackKeys.INTEGRATION]
  },
  {
    title: 'Backend Engineer',
    bgColor: '#42004A',
    stack: 'CSS | JS | C++',
    date: 'Feb 20 - May 21',
    subtitle: 'Cloudeasieer',
    source: Cloudeasier,
    location: 'Paris - France',
    description: `⇨ 𝑴𝑨 𝑴𝑰𝑺𝑺𝑰𝑶𝑵 : Modifier et ajouter des données sur un outil de monitoring constitué d'une carte et de plusieurs graphiques répertoriant toutes les données liées aux coupures électriques en France.

  𝐃𝐨𝐦𝐚𝐢𝐧𝐞 𝐝'𝐢𝐧𝐭𝐞𝐫𝐯𝐞𝐧𝐭𝐢𝐨𝐧 :
  ➤ Modification des labels constituants les graphiques (React, Chart JS).
  ➤ Récupération des données nécessaires en base de données (Django, PGSQL).
  ➤ Modification des graphiques afin d'avoir un rendu plus adapté aux besoins d'Enedis. (Chart JS).
  ➤ Mise en place de tests unitaires Back-End (Pytest).
  ➤ Mise en place de l'automatisation des tests Back-End (Jenkins).

  𝐅𝐫𝐨𝐧𝐭-𝐄𝐧𝐝 : HTML, CSS, Javascript (React)
  𝐁𝐚𝐜𝐤-𝐄𝐧𝐝 : Python, Django
  𝐁𝐚𝐬𝐞 𝐝𝐞 𝐝𝐨𝐧𝐧𝐞𝐞 : PGSQL
  𝐓𝐞𝐬𝐭𝐢𝐧𝐠 : Pytest
  𝐃𝐞𝐯𝐎𝐩𝐬 : Jenkins
  𝐎𝐫𝐠𝐚𝐧𝐢𝐬𝐚𝐭𝐢𝐨𝐧 : Trello
  𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐧𝐢𝐧𝐠 : GIT
  `,
    mainTechno: [TechnicalStackKeys.CLOUD, TechnicalStackKeys.PYTHON]
  },
]

export const schools = [
  {
    title: 'Master’s degree in Computer Science',
    subtitle: 'Epitech Paris',
    description: `Epitech est une école d'informatique créée en 1999 qui forme en 5 ans après-bac des experts du secteur. Elle permet de transformer une passion en expertise via une pédagogie résolument innovante.
    Les étudiants sont plongés dans un écosystème à la fois national et international et dans un rythme pédagogique destiné à favoriser ouverture d’esprit, rencontres avec des influenceurs, des experts, afin de trouver le problème qu’ils chercheront à résoudre.

    Quelques compétences mises en oeuvre :

    ➤ EIP Innovative project - Top 10 des projet EPITECH expérience France
    ➤ Diagnostiquer la situation actuelle de l’entreprise et anticiper les évolutions.
    ➤ Accompagner le développement et le financement de son activité.
    ➤ Analyser les cibles de croissance externe et répondre aux besoins de financement.
    ➤ Forward : Inspiré du business model Canvas (générer de la valeur),`,
    source: Epitech,
    location: 'Paris - France',
    date: '2013 - 2019',
    bgColor: '#122767'
  },
  {
    title: 'Master of Science Degree in Engineering Management.',
    subtitle: 'Ahlia University',
    location: 'Manama - Bahrain',
    date: '2016 - 2017',
    description: `Fondée en 2001, Ahlia University est la première université agréée par le gouvernement du Bahrain
    Dès le départ, les fondateurs ont énoncé leur vision d’une institution distincte d’enseignement supérieur pour faire en sorte que les sciences humaines, le commerce et l'éducation occupent la place qui leur revient de droit dans la construction et le développement de notre société.
    
    Quelques compétences mises en oeuvre lors de ce cursus :
    
    ➤ Stratégies de management d'entreprise,
    ➤ Entrepreneuriat - Pitch & Conférences pendant la Journée Nationale de l'Entrepreneuriat à Ahlia University,
    ➤ Cisco, administration réseau et certification CCNA,
    ➤ .NET, Microsoft Developpers,
    ➤ Éthique en entreprise,
    ➤ Intelligence artificielle - Développement du projet Sara : Intelligence artificielle de traduction francophone`,
    source: Ahlia,
    bgColor: '#930B23'
  }
]

export interface ModalPropsType {
  title: string
  stack?: string
  bgColor: string
  date: string
  subtitle: string
  mainTechno?: TechnicalStackKeys[]
  source: string
  location: string
  description: string
}

export interface PlaylistProps {
  title: string
  artist: string
  src: string
}