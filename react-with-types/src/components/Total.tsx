const Total = ({ totalExercises }: { totalExercises: number }): JSX.Element => {
  console.log(totalExercises);
  return <p>Number of exercises {totalExercises}</p>;
};

export default Total;
