import patientsData from "../data/patients.json";
import { PatientEntry } from "../types";

type patientWithoutSSN = Omit<PatientEntry, "ssn">;

const patients: PatientEntry[] = patientsData;

const patientsWithoutSSN: patientWithoutSSN[] = patients.map(
  ({ ssn, ...rest }) => rest
);

const getPatients = (): patientWithoutSSN[] => {
  return patientsWithoutSSN;
};

export default {
  getPatients,
};
