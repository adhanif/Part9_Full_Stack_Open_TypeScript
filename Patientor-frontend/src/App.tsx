import "./App.css";
import Header from "../src/components/Header";
import Content from "./components/Content";
import TotalExercises from "./components/Total";

function App() {
  const courseName: string = "Half Stack application development";
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
    },
  ];

  const totalExercises = courseParts.reduce(
    (sum, curr) => sum + curr.exerciseCount,
    0
  );

  return (
    <>
      <Header name={courseName} />
      <Content Courses={courseParts} />
      <TotalExercises totalExercises={totalExercises} />
    </>
  );
}

export default App;
