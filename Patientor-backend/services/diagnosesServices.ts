import diagnoseData from "../data/diagnoses.json";
import { DiagnosisEntry } from "../types";

const diagnoses: DiagnosisEntry[] = diagnoseData;

const getEntries = (): DiagnosisEntry[] => {
  return diagnoses;
};

const addDiagnose = () => {
  return null;
};

export default {
  getEntries,
  addDiagnose,
};
