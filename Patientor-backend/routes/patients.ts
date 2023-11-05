import express from "express";
const patientsRouter = express.Router();
import patientsServices from "../services/patientsServices";

patientsRouter.get("/", (_req, res) => {
  try {
    res.json(patientsServices.getNonSensitivePatientEntries());
  } catch (error: unknown) {
    console.error(error);
    let errorMessage = "Something went wrong";
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    res.send(400).send({ error: errorMessage });
  }
});

export default patientsRouter;
