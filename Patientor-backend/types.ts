export interface DiagnosesEntry {
  code: string;
  name: string;
  latin?: string;
}

export interface PatientEntry {
  id: string;
  name: string;
  occupation: string;
  gender: string;
  dateOfBirth?: string;
  ssn?: string;
}

export type NonSensitivePatientEntry = Omit<PatientEntry, "ssn">;
