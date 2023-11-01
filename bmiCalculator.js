var calculateBmi = function (height, weight) {
    var bmi = parseFloat((weight / (Math.pow(height / 100, 2))).toFixed(2));
    if (bmi < 18.5) {
        return 'Not Normal (Underweight)';
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normal (healthy weight)";
    }
    else if (bmi > 25 && bmi <= 29.9) {
        return 'Not Normal (Overweight)';
    }
    else if (bmi >= 30) {
        return 'Not Normal (Obesity)';
    }
};
console.log(calculateBmi(177, 70));
// const multiplicator = (a:number, b:number, printText:string) => {
//     console.log(printText,  a * b);
//   }
//   multiplicator(2, 4, 'Multiplied numbers 2 and 4, the result is:');
// multiplicator('how about a string?', 4, 'Multiplied a string and 4, the result is:');
//  type Operation = 'multiply' | 'add' | 'divide';
// const calculator = (a: number, b: number, op: Operation): number | string => {
//   if (op === 'multiply') {
//     return a * b;
//   } else if (op === 'add') {
//     return a + b;
//   } else if (op === 'divide') {
//     if (b === 0) return 'this cannot be done';
//     return a / b;
//   }
// }
// const result = calculator(1, 2, 'add');
// console.log(result);
