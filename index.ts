// const express = require("express");
import express from "express";
import { bmiCalculate, parsedBmiValues } from "./bmiCalculator";

import { calculateExercises, parseArguments } from "./exerciseCalculator";

const app = express();
app.use(express.json());

app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get(`/bmi`, (_req, res) => {
  const { height, weight } = _req.query;

  if (!height || !weight) {
    res
      .status(400)
      .json({ error: "Height and weight are required parameters" });
  }

  try {
    const parsedHeight = Number(height);
    const parsedWeight = Number(weight);
    const { heightCM, weightKG } = parsedBmiValues(parsedHeight, parsedWeight);
    const bmi = bmiCalculate(heightCM, weightKG);
    type Res = { weight: number; height: number; bmi: string };
    const response: Res = {
      weight: parsedWeight,
      height: parsedHeight,
      bmi: bmi,
    };
    res.json(response);
  } catch (error: unknown) {
    let errorMessage = "Something went wrong: ";
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    res.status(400).send({ error: errorMessage });
  }
});

app.post("/exercises", (_req, res) => {
  const { daily_exercises, target } = _req.body;
  if (!daily_exercises || !target) {
    res.status(400).json({ error: "parameters missing" });
  } else {
    try {
      const { targetDay, exerciseArgs } = parseArguments(
        target,
        daily_exercises
      );
      console.log(targetDay, exerciseArgs);
      const response = calculateExercises(targetDay, exerciseArgs);
      res.status(200).json(response);
    } catch (error: unknown) {
      let errorMessage = "Something went wrong: ";
      if (error instanceof Error) {
        errorMessage += error.message;
      }
      res.status(400).send({ error: errorMessage });
    }
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
