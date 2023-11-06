import express from "express";
const patientsRouter = express.Router();
import patientsServices from "../services/patientsServices";
import toNewDiaryEntry from "../utils";

patientsRouter.get("/", (_req, res) => {
  try {
    res.status(200).json(patientsServices.getNonSensitivePatientEntries());
  } catch (error: unknown) {
    let errorMessage = "Something went wrong";
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    res.status(400).send({ error: errorMessage });
  }
});

patientsRouter.post("/", (_req, res) => {
  try {
    const newPatientEntryCheck = toNewDiaryEntry(_req.body);
    const addedPatient = patientsServices.addPatient(newPatientEntryCheck);
    res.status(200).json(addedPatient);
  } catch (error: unknown) {
    console.error(error);
    let errorMessage = "Something went wrong";
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    res.status(400).send({ error: errorMessage });
  }
});

export default patientsRouter;
