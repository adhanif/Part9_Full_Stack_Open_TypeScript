import { assertNever, CoursePart } from "../types";

const Part = (
  // { part }: { part: CoursePart })
  { course }: { course: CoursePart }
) => {
  switch (course.kind) {
    case "basic":
      return (
        <>
          <h3>
            {course.name} {course.exerciseCount}
          </h3>
          <p>{course.description}</p>
        </>
      );

    case "group":
      return (
        <>
          <h3>
            {course.name} {course.exerciseCount}
          </h3>
          <p>project exercises {course.groupProjectCount}</p>
        </>
      );

    case "background":
      return (
        <>
          <h3>
            {course.name} {course.exerciseCount}
          </h3>
          <p>
            {course.description} <br />
            {course.backgroundMaterial}{" "}
          </p>
        </>
      );
    case "special":
      return (
        <>
          <h3>
            {course.name} {course.exerciseCount}
          </h3>
          <p>
            {course.description} <br />
            required skills: {course.requirements[0]}
            {", "}
            {course.requirements[1]}
          </p>
        </>
      );

    default:
      return null;
    //   return assertNever(part);
    //   break;
  }
};

export default Part;
