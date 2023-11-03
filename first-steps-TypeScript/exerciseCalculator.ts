interface Result1 {
  periodLength: number;
  trainingDays: number;
  targetValue: number;
  averageTime: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
}

interface InputValues {
  targetDay: number;
  exerciseArgs: Array<number>;
}

export const parseArguments = (
  target: number,
  dailyExercisaDays: Array<number>
): InputValues => {
  if (!isNaN(target) && dailyExercisaDays.some(isNaN)) {
    return { targetDay: target, exerciseArgs: dailyExercisaDays };
  } else {
    throw new Error(`Invalid argument: not all values are numbers`);
  }
};

export const calculateExercises = (target: number, args: number[]): Result1 => {
  // if (args.length < 7) throw new Error("Not enough arguments");
  // if (args.length > 7) throw new Error("Too many arguments");

  const periodLength = args.length;
  const trainingDays = args.filter((ele) => ele > 0).length;
  const targetValue = target;
  const averageTime =
    args.reduce((curr, total) => curr + total, 0) / periodLength;

  const success = averageTime >= target;

  let rating: number;
  let ratingDescription: string;

  if (averageTime > target) {
    rating = 3;
    ratingDescription = "very good";
  } else if (averageTime === target) {
    rating = 2;
    ratingDescription = "good";
  } else if (averageTime < target) {
    rating = 1;
    ratingDescription = "Not good";
  } else {
    rating = 0;
    ratingDescription = "You did not meet your target";
  }

  return {
    periodLength,
    trainingDays,
    targetValue,
    averageTime,
    success,
    rating,
    ratingDescription,
  };
};

// try {
//   const { target, exerciseArgs } = parseArguments(process.argv);
//   const ans = calculateExercises(exerciseArgs, target);
//   console.log(ans);
// } catch (error: unknown) {
//   let errorMessage = "Something went wrong: ";
//   if (error instanceof Error) {
//     errorMessage += error.message;
//   }
//   throw new Error(errorMessage);
// }
