import patientsEntries from '../../data/patients';
import {
  PatientEntry,
  NonSensitivePatientEntry,
  newPatientEntry,
} from '../types/patientsTypes';
import { v1 as uuid } from 'uuid';

const getPatients = (): PatientEntry[] => {
  return patientsEntries;
};

const getNonSensitivePatientEntries = (): NonSensitivePatientEntry[] => {
  return patientsEntries.map(
    ({ id, name, dateOfBirth, gender, occupation }) => ({
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
    }),
  );
};

const addPatient = (obj: newPatientEntry): PatientEntry => {
  const newPatientEntry = {
    id: uuid(),
    ...obj,
  };
  patientsEntries.push(newPatientEntry);
  return newPatientEntry;
};

export default {
  getPatients,
  getNonSensitivePatientEntries,
  addPatient,
};
