interface values {
  heightCM: number;
  weightKG: number;
}

export const parsedBmiValues = (height: number, weight: number): values => {
  if (!isNaN(height) && !isNaN(weight)) {
    return {
      heightCM: height,
      weightKG: weight,
    };
  } else {
    throw new Error("Invalid input types");
  }
};

export const bmiCalculate = (height: number, weight: number): string => {
  const bmi: number = parseFloat(
    (weight / Math.pow(height / 100, 2)).toFixed(2)
  );

  if (bmi < 18.5) {
    return "Not Normal (Underweight)";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal (healthy weight)";
  } else if (bmi > 25 && bmi <= 29.9) {
    return "Not Normal (Overweight)";
  } else if (bmi >= 30) {
    return "Not Normal (Obesity)";
  }
  // Default return statement
  return "Unknown BMI Category";
};

// export default calculateBmi;
// const height: number = Number(process.argv[2]);
// const weight: number = Number(process.argv[3]);

// calculateBmi(height, weight);
