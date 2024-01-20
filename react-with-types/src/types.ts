export interface HeaderProps {
  name: string;
}

export interface CourseParts {
  name: string;
  exerciseCount: number;
}

export interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

export interface CoursePartBaseDescription extends CoursePartBase {
  description: string;
}
export interface CoursePartBasic extends CoursePartBaseDescription {
  kind: 'basic';
}

export interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: 'group';
}

export interface CoursePartBackground extends CoursePartBaseDescription {
  backgroundMaterial: string;
  kind: 'background';
}

export interface CoursePartSpecial extends CoursePartBaseDescription {
  requirements: string[];
  kind: 'special';
}

export type CoursePart =
  | CoursePartBasic
  | CoursePartGroup
  | CoursePartBackground
  | CoursePartSpecial;

export interface PartProps {
  parts: CoursePart[];
}

export interface ContentProps {
  parts: CoursePart[];
}
/**
 * Helper function for exhaustive type checking
 */
export const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`,
  );
};
