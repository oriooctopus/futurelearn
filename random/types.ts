// {
//   id: string;
//   label: string;
// } ||
export type Skill = string;

// export type Unit = {
//   introduces: Skill[];
//   prerequisites: (Skill | Unit)[];
//   title: string;
// };

// export type Lesson = Unit & {};

// export type Category = Unit & {
//   lessons: Lesson[];
// };

export type Lesson = string[];

export type Category = {
  dependsOn?: string[];
  title: string;
  lessons: Lesson[];
};
