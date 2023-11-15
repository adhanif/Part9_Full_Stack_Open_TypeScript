import { CoursePart } from "../types";
import Part from "../components/Part";

const Content = (props: { Courses: CoursePart[] }) => {
  return (
    <div>
      {props.Courses.map((course, i) => {
        return <Part key={i} course={course} />;
      })}
    </div>
  );
};

export default Content;
