import { ISkill } from '@/types/Skills';

export const skills: ISkill[] = [
  {
    title: 'Programmation',
    skills: [
      {
        name: 'React.js',
        type: 'Web Framework',
        image: 'react.png',
      },
      {
        name: 'Node.js',
        type: 'Web Framework',
        image: 'nodejs.png',
      },
      {
        name: 'Next.js',
        type: 'Web Framework',
        image: 'nextjs.png',
      },
      {
        name: 'JavaScript',
        type: 'Language',
        image: 'javascript.png',
      },
      {
        name: 'TypeScript',
        type: 'Language',
        image: 'typescript.png',
      },
      {
        name: 'TailwindCSS',
        type: 'CSS',
        image: 'tailwindcss.png',
      },
      {
        name: 'WordPress',
        type: 'CMS',
        image: 'wordpress.png',
      },
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      {
        name: 'Autonomie',
        type: 'Soft Skill',
        image: 'autonomie.webp',
      },
      {
        name: 'Adaptabilité',
        type: 'Soft Skill',
        image: 'adaptability.png',
      },
      {
        name: 'Travail en équipe',
        image: 'teams.png',
        type: 'Soft Skill',
      },
      {
        name: 'Curiosité',
        type: 'Soft Skill',
        image: 'curiosity.png',
      },
      {
        name: 'Communication',
        type: 'Soft Skill',
        image: 'communication.png',
      },
    ],
  },
  {
    title: 'Langues',
    skills: [
      {
        name: 'Français',
        type: 'Langue',
        image: 'fr.png',
      },
      {
        name: 'Anglais',
        type: 'Langue',
        image: 'en.png',
      },
    ],
  },
  {
    title: 'Diplômes',
    skills: [
      {
        name: 'École 42',
        type: 'Lyon',
        image: '42.png',
      },
      {
        name: 'Bac STI2D',
        type: 'Lycée',
        image: 'bac.png',
      },
    ],
  },
];
