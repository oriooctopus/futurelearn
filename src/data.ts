import { Skill, Lesson, Category } from '../random/types';

const skills = new Set([
  'declare-variable',
  'addition',
  'case-sensitivity',
  'variables',
  'strings',
  'reassign-variables',
]) as Set<Skill>;

// @ts-ignore
const data = [
  {
    title: 'Foundations',
    lessons: [
      'getting started',
      'console.log',
      'basic math',
      'combining strings and variables',
      'understanding basic error: x is not defined',
      'functions',
      'comments',
    ],
  },
  {
    dependsOn: ['Foundations'],
    title: 'Arrays',
    lessons: ['arrays-1', 'arrays-2', 'arrays-3', 'arrays-4', 'arrays-5', 'arrays-6', 'arrays-7'],
  },
  {
    dependsOn: ['Foundations'],
    title: 'Objects',
    lessons: ['objects-1', 'objects-2', 'objects-3', 'objects-4', 'objects-5'],
  },
  {
    dependsOn: ['Foundations'],
    title: 'More about strings',
    lessons: ['objects-1', 'objects-2', 'objects-3', 'objects-4'],
  },
  {
    dependsOn: ['Arrays'],
    title: 'loops',
    lessons: [
      'loops-1',
      'loops-2',
      'loops-3',
      'loops-4',
      'loops-5',
      'loops-6',
      'loops-7',
      'loops-8',
      'loops-9',
      'loops-10',
    ],
  },
] as Category[];

export default data;

// const data = [
//   {
//     title: "Foundations",
//     prerequisites: [],
//     lessons: [
//       {
//         title: "Getting Started",
//         prerequisites: [],
//         introduces: [
//           "case-sensitivity",
//           "variables",
//           "strings",
//           "reassign-variables",
//           "declare-variable",
//         ],
//       },
//     ],
//   },
//   {
//     title: "Console log",
//     prerequisites
//   }
// ] as Category[];
