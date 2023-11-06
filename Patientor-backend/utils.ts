import { newPatientEntry, Gender } from "./types";

//Typeguards
const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const parseName = (name: unknown): string => {
  if (!name || !isString(name)) {
    throw new Error("Incorrect or missing comment");
  }
  return name;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date: " + date);
  }

  return date;
};

const parseOccupation = (occupation: unknown): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error(`Incorrect or missing occupation ${occupation}`);
  }
  return occupation;
};

const isGender = (param: string): param is Gender => {
  return Object.values(Gender)
    .map((g) => g.toString())
    .includes(param);
};

const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error(`Invalid or missing gender value "${gender}"`);
  }
  return gender;
};

const parseSSN = (ssn: unknown): string => {
  if (!ssn || !isString(ssn) || ssn === "") {
    throw new Error(`Invalid or missing SSN value "${ssn}"`);
  }
  return ssn;
};

const toNewPatientEntry = (object: any): newPatientEntry => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data");
  }

  if (
    "name" in object &&
    "occupation" in object &&
    "gender" in object &&
    "dateOfBirth" in object &&
    "ssn" in object
  ) {
    const newEntry: newPatientEntry = {
      name: parseName(object.name),
      occupation: parseOccupation(object.occupation),
      gender: parseGender(object.gender),
      dateOfBirth: parseDate(object.dateOfBirth),
      ssn: parseSSN(object.ssn),
    };
    return newEntry;
  }
  throw new Error("Incorrect data: some fields are missing");
};

export default toNewPatientEntry;
