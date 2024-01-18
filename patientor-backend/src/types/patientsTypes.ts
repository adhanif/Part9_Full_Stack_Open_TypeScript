export interface PatientEntry {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
}

export interface NonSensitivePatientEntry extends Omit<PatientEntry, 'ssn'> {}
