import express from "express";
import { Diagnosis } from "./types";

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const PORT = 3001;

const diagnoses: Diagnosis[] = [
  { code: "ABC123", name: "Diagnosis1", latin: "Lorem Ipsum" },
  { code: "DEF456", name: "Diagnosis2" },
];

app.get("/api/patients", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.get("/api/diagnoses", (_req, res) => {
  try {
    res.json(diagnoses);
  } catch (error: unknown) {
    console.error(error);
    let errorMessage = "Something went wrong";
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    res.send(400).send({ error: errorMessage });
  }
});

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
