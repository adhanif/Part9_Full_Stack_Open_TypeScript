import "./App.css";
import Header from "../src/components/Header";

function App() {
  const courseName: string = "Half Stack application development";

  return (
    <>
      <Header name={courseName} />
    </>
  );
}

export default App;
