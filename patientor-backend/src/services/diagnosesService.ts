import diagnosisEntries from '../../data/diagnoses';
import { DiagnosisEntry } from '../types/diagnosesTypes';

const getDiagnosis = (): DiagnosisEntry[] => {
  return diagnosisEntries;
};

export default {
  getDiagnosis,
};
