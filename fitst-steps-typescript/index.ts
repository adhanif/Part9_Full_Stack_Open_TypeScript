import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';
const app = express();
app.use(express.json());

app.get('/ping', (_req, res) => {
  res.send('Hello Full Stack!');
});

const PORT = 3003;

app.get('/bmi', (_req, res) => {
  try {
    const { height, weight } = _req.query;

    if (!height || !weight) {
      res.status(400).json({ error: 'malformatted parameters' });
    }

    if (isNaN(Number(height)) || isNaN(Number(weight))) {
      res.status(400).json({ error: 'Invalid height or weight values.' });
    }
    const bmi = calculateBmi(Number(height), Number(weight));

    res.json({ weight: weight, height: height, bmi: bmi });
  } catch (error: unknown) {
    let errorMessage = 'Something bad happened.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
  }
});

app.post('/exercises', (_req, res) => {
  try {
    // console.log(_req.body);
    const { daily_exercises, target } = _req.body;

    if (!daily_exercises || !target) {
      res.status(400).json({ error: 'parameters missing' });
    }
    if (!daily_exercises || isNaN(Number(target))) {
      res.status(400).json({ error: 'malformatted parameters' });
    }

    const result = calculateExercises(target, daily_exercises);
    res.json(result);
  } catch (error: unknown) {
    let errorMessage = 'Something bad happened.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
