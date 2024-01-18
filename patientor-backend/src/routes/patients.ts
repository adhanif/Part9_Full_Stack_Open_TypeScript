import express from 'express';
import patientsService from '../services/patientsService';

const patientsRouter = express.Router();

patientsRouter.get('/', (_req, res) => {
  res.send(patientsService.getNonSensitivePatientEntries());
});

patientsRouter.post('/', (_req, res) => {
  const newPatient = patientsService.addPatient(_req.body);
  res.json(newPatient);
});

export default patientsRouter;
