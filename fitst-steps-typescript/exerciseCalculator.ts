interface Exercise {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface MultiplyValues {
  values: number[];
}

const isNotNumber = (arg: number): boolean => isNaN(Number(arg));

const parseArguments = (args: string[]): MultiplyValues => {
  const values = args.slice(3).map(Number);
  if (values.some(isNotNumber)) {
    throw new Error('Provided values were not correct!');
  }
  return { values };
};

export const calculateExercises = (
  target: number,
  values: number[],
): Exercise => {
  const trainingDays: number = values.filter((ele) => ele !== 0).length;
  const averageHours: number =
    values.reduce((tot, curr) => {
      return tot + curr;
    }, 0) / values.length;

  return {
    periodLength: values.length,
    trainingDays: trainingDays,
    success: averageHours >= target ? true : false,
    rating: averageHours >= target ? 2 : 1,
    ratingDescription:
      averageHours >= target
        ? 'Good, target achieved'
        : 'not too bad but could be better',
    target: target,
    average: averageHours,
  };
};

try {
  const args = process.argv;
  const targetValue = Number(args[2]);

  const parsedValues = parseArguments(args);
  const exerciseResult = calculateExercises(targetValue, parsedValues.values);

  console.log(exerciseResult);
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}
