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
    res.send(400).send({ error: errorMessage });
  }
});

patientsRouter.post("/", (_req, res) => {
  // const { name, occupation, gender, dateOfBirth, ssn } = _req.body;
  const newPatientEntryCheck = toNewDiaryEntry(_req.body);
  console.log(newPatientEntryCheck);

  const addedPatient = patientsServices.addPatient(newPatientEntryCheck);
  try {
    // const newPatient = patientsServices.addPatient({
    //   name,
    //   occupation,
    //   gender,
    //   dateOfBirth,
    //   ssn,
    // });
    res.status(200).json(addedPatient);
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
