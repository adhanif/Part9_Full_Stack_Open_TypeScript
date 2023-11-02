// const express = require("express");
import express from "express";
import { bmiCalculate, parsedBmiValues } from "./bmiCalculator";

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
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
