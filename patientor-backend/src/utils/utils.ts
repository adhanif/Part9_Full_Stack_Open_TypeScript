import { newPatientEntry, Gender } from '../types/patientsTypes';

const isString = (input: unknown): input is string => {
  return typeof input === 'string' || input instanceof String;
};

const parseName = (name: unknown): string => {
  if (!name) {
    throw new Error(' Missing Name');
  } else if (!isString(name)) {
    throw new Error(' Incorrect Name type');
  }
  return name;
};

const parseSSN = (ssn: unknown): string => {
  if (!ssn) {
    throw new Error(' Missing Social Security number');
  } else if (!isString(ssn)) {
    throw new Error(' Incorrect ssn type');
  }
  return ssn;
};

const isDate = (date: string): Boolean => {
  return Boolean(Date.parse(date));
};

const parseDateOfBirth = (dob: unknown): string => {
  if (!dob) {
    throw new Error('missing dob:' + dob);
  } else if (!isString(dob)) {
    throw new Error('Incorrect dob:' + dob);
  } else if (!isDate(dob)) {
    throw new Error('Incorrect dob:' + dob);
  }
  return dob;
};

const parseOccupation = (occu: unknown): string => {
  if (!occu) {
    throw new Error(' Missing Name');
  } else if (!isString(occu)) {
    throw new Error(' Incorrect Name type');
  }
  return occu;
};

const isGender = (input: string): input is Gender => {
  return Object.values(Gender)
    .map((g) => g.toString())
    .includes(input);
};

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isString(gender) || !isGender(gender)) {
    throw new Error('Incorrect or missing visibility: ' + gender);
  }
  return gender;
};

const toNewPatientEntry = (obj: unknown): newPatientEntry => {
  if (!obj || typeof obj !== 'object') {
    throw new Error('Incorrect or missing data');
  }

  if (
    'name' in obj &&
    'dateOfBirth' in obj &&
    'ssn' in obj &&
    'gender' in obj &&
    'occupation' in obj
  ) {
    const newPatient: newPatientEntry = {
      name: parseName(obj.name),
      dateOfBirth: parseDateOfBirth(obj.dateOfBirth),
      ssn: parseSSN(obj.ssn),
      gender: parseGender(obj.gender),
      occupation: parseOccupation(obj.occupation),
    };
    return newPatient;
  }
  throw new Error('Incorrect data: some fields are missing');
};

export default toNewPatientEntry ;
