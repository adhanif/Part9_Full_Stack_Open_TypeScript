import React from 'react';
import { assertNever, CoursePart } from '../types';

const Part = ({ course }: { course: CoursePart }): JSX.Element => {
  switch (course.kind) {
    case 'basic':
      return (
        <>
          <h3>
            {course.name} {course.exerciseCount}
          </h3>
          <p>{course.description}</p>
        </>
      );

    case 'group':
      return (
        <>
          <h3>
            {course.name} {course.exerciseCount}
          </h3>
          <p>project exercises {course.groupProjectCount}</p>
        </>
      );

    case 'background':
      return (
        <>
          <h3>
            {course.name} {course.exerciseCount}
          </h3>
          <p>
            {course.description} <br />
            {course.backgroundMaterial}{' '}
          </p>
        </>
      );
    case 'special':
      return (
        <>
          <h3>
            {course.name} {course.exerciseCount}
          </h3>
          <p>
            {course.description} <br />
            required skills: {course.requirements[0]}
            {', '}
            {course.requirements[1]}
          </p>
        </>
      );

    default:
      return assertNever(course);
      break;
  }
};

export default Part;
