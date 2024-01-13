interface Exercise {
  periodLength: number
  trainingDays: number
  success: boolean
  rating: number
  ratingDescription: string
  target: number
  average: number
}

const calculateExercises = (values: number[], target: number): Exercise => {
  const trainingDays = values.filter((ele) => ele !== 0).length
  const averageHours =
    values.reduce((tot, curr) => {
      return tot + curr
    }, 0) / values.length

  console.log(trainingDays, averageHours)

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
  }
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))
