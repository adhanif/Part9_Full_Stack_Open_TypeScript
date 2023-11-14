import {Total} from "../types";

// interface Total {
//   totalExercises: number;
// }

const TotalExercises = (props: Total) => {
  return <h2>Total Exercises: {props.totalExercises}</h2>;
};

export default TotalExercises;
