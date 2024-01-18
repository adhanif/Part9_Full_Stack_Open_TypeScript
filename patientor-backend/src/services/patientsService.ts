import patientsEntries from '../../data/patients';

import { PatientEntry, NonSensitivePatientEntry } from '../types/patientsTypes';

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

export default {
  getPatients,
  getNonSensitivePatientEntries,
};
