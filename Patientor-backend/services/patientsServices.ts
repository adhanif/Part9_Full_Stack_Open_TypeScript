import patientEntries from "../data/patients";
import {
  PatientEntry,
  NonSensitivePatientEntry,
  newPatientEntry,
} from "../types";
import { v1 as uuid } from "uuid";

const getPatients = (): PatientEntry[] => {
  return patientEntries;
};

const getNonSensitivePatientEntries = (): NonSensitivePatientEntry[] => {
  return patientEntries.map(({ ssn, ...rest }) => rest);
};

const addPatient = (entry: newPatientEntry): PatientEntry => {
  const newPatientEntry = {
    id: uuid(),
    ...entry,
  };
  patientEntries.push(newPatientEntry);

  return newPatientEntry;
};

const findPatientById = (id: number): PatientEntry | undefined => {
  const patient = patientEntries.find((pat) => Number(pat.id) === Number(id));
  return patient;
};

export default {
  getPatients,
  getNonSensitivePatientEntries,
  addPatient,
  findPatientById,
};
