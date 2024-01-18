export interface PatientEntry {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
}

export interface newPatientEntry extends Omit<PatientEntry, 'id'> {}

export interface NonSensitivePatientEntry extends Omit<PatientEntry, 'ssn'> {}
