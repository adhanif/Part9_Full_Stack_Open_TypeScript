export interface DiagnosesEntry {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}

export interface PatientEntry {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  dateOfBirth?: string;
  ssn?: string;
}

export type newPatientEntry = Omit<PatientEntry, "id">;
export type NonSensitivePatientEntry = Omit<PatientEntry, "ssn">;
