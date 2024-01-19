import express from 'express';
import patientsService from '../services/patientsService';
import toNewPatientEntry from '../utils/utils';

const patientsRouter = express.Router();

patientsRouter.get('/', (_req, res) => {
  res.send(patientsService.getNonSensitivePatientEntries());
});

patientsRouter.post('/', (_req, res) => {
  try {
    const newPatientEntr = toNewPatientEntry(_req.body);
    const newPatient = patientsService.addPatient(newPatientEntr);
    res.json(newPatient);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error:' + error.message;
    }
    res.status(404).send(errorMessage);
  }
});

export default patientsRouter;
