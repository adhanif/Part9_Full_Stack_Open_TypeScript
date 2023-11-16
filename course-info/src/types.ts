export interface Total {
  totalExercises: number;
}

export interface Courses {
  name: string;
  exerciseCount: number;
}

export interface Heading {
  name: string;
}

export const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

export interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

export interface CoursePartBase2 extends CoursePartBase {
  description: string;
}

export interface CoursePartBasic extends CoursePartBase2 {
  // description: string;
  kind: "basic";
}

export interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group";
}

export interface CoursePartBackground extends CoursePartBase2 {
  // description: string;
  backgroundMaterial: string;
  kind: "background";
}

export interface CoursePartSpecial extends CoursePartBase2 {
  requirements: string[];
  kind: "special";
}

export type CoursePart =
  | CoursePartBasic
  | CoursePartGroup
  | CoursePartBackground
  | CoursePartSpecial;
