import { newPatientEntry } from "./types";

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};








const toNewPatientEntry = (object: unknown): newPatientEntry => {
  console.log(object);
  const newEntry: newPatientEntry = {
    name: "dani",
    occupation: "web developer",
    gender: "male",
    dateOfBirth: "28.02.1987",
    ssn: "987-987-987",
  };
  return newEntry;
};

export default toNewPatientEntry;
