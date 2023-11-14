import { Courses } from "../types";

const Content = (props: { Courses: Courses[] }) => {
  return (
    <div>
      {props.Courses.map((course) => {
        return (
          <div key={course.exerciseCount}>
            <h4>Course Name: {course.name}</h4>
            <p>Total Exercises in Course: {course.exerciseCount}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
