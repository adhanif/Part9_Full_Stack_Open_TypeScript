const calculateBmi = (height: number, weight: number) => {
  let bmi: number = parseFloat((weight / Math.pow(height / 100, 2)).toFixed(2));

  if (bmi < 18.5) {
    console.log("Not Normal (Underweight)");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Normal (healthy weight)");
  } else if (bmi > 25 && bmi <= 29.9) {
    console.log("Not Normal (Overweight)");
  } else if (bmi >= 30) {
    console.log("Not Normal (Obesity)");
  }
};

const height: number = Number(process.argv[2]);
const weight: number = Number(process.argv[3]);

calculateBmi(height, weight);
