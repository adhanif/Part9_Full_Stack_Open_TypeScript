import patientEntries from "../data/patients";
import { PatientEntry, NonSensitivePatientEntry } from "../types";

const getPatients = (): PatientEntry[] => {
  return patientEntries;
};

const getNonSensitivePatientEntries = (): NonSensitivePatientEntry[] => {
  return patientEntries.map(({ ssn, ...rest }) => rest);
};

export default {
  getPatients,
  getNonSensitivePatientEntries,
};
