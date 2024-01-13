const calculateBmi = (height: number, weight: number) => {
  let BMI: number = weight / (height / 100) ** 2
  BMI < 18.5
    ? console.log('Underweight')
    : BMI <= 25 && BMI >= 18.5
    ? console.log('Normal (healthy weight)')
    : BMI > 25 && BMI <= 35
    ? console.log('Overweight')
    : BMI > 35
    ? console.log('Obesity')
    : console.log('Invalid BMI value')
}
calculateBmi(180, 74)
