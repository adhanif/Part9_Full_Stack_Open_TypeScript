interface Result1 {
  periodLength: number;
  trainingDays: number;
  targetValue: number;
  averageTime: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
}

export const isNotNumber = (argument: any): boolean => isNaN(Number(argument));

export const calculateExercises = (args: number[], target: number): Result1 => {
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

export const parseArguments = (
  args: string[]
): { target: number; exerciseArgs: number[] } => {
  if (args.length < 8)
    throw new Error("Not enough arguments for exercise calculation");

  const target = parseFloat(args[2]);
  if (isNotNumber(target)) {
    throw new Error(`Invalid argument: ${args[2]} is not a number`);
  }

  const exerciseArgs = args.slice(3).map((arg) => {
    if (isNotNumber(arg)) {
      throw new Error(`Invalid argument: ${arg} is not a number`);
    }
    return parseFloat(arg);
  });

  return { target, exerciseArgs };
};

try {
  const { target, exerciseArgs } = parseArguments(process.argv);
  const ans = calculateExercises(exerciseArgs, target);
  console.log(ans);
} catch (e) {
  console.error(e.message);
}
