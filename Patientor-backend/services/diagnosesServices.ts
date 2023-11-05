import diagnoseData from "../data/diagnoses.json";
import { DiagnosesEntry } from "../types";

const diagnoses: DiagnosesEntry[] = diagnoseData;

const getEntries = (): DiagnosesEntry[] => {
  return diagnoses;
};

const addDiagnose = () => {
  return null;
};

export default {
  getEntries,
  addDiagnose,
};
