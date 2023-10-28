interface Result1{
  periodLength: number,
  trainingDays: number,
  targetValue: number,
  averageTime: number 
  success: boolean,
  rating: number,
  ratingDescription: string,
}


const calculateExercises=(args: number[], target:number):Result1=>{
  
    if (args.length < 7) throw new Error('Not enough arguments');
    if (args.length > 7) throw new Error('Too many arguments');

const periodLength=args.length
const trainingDays=args.filter(ele=>
  ele>0
).length

const targetValue=target

const averageTime=(args.reduce(( curr, total)=>{return curr+total},0))/7

const success=averageTime >= target

let rating:number
let ratingDescription: string
if(averageTime>target){
  rating=3
  ratingDescription="very good"
}else if(averageTime===target){
  rating=2
  ratingDescription="good"
}else if(averageTime<target){
  rating=1
  ratingDescription="Not good"
}else {
  rating = 0;
  ratingDescription = 'You did not meet your target';
}

return{
  periodLength,
  trainingDays,
  targetValue,
  averageTime,
  success,
  rating,
  ratingDescription
}

}

let ans=calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2)
console.log(ans)