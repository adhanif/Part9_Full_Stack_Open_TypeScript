import { PatientEntry, Gender } from "../types";
import toNewPatientEntry from "../utils";

// const patientEntries: PatientEntry[] = [
//   {
//     id: "1",
//     name: "John Doe",
//     occupation: "Software Engineer",
//     gender: "Male",
//     dateOfBirth: "1990-05-15",
//     ssn: "111-22-3333",
//   },
//   {
//     id: "2",
//     name: "Jane Smith",
//     occupation: "Doctor",
//     gender: "Female",
//     dateOfBirth: "1985-12-10",
//     ssn: "444-55-6666",
//   },
//   {
//     id: "3",
//     name: "Bob Johnson",
//     occupation: "Teacher",
//     gender: "Male",
//     dateOfBirth: "1978-08-22",
//     ssn: "777-88-9999",
//   },
//   {
//     id: "4",
//     name: "Alice Williams",
//     occupation: "Graphic Designer",
//     gender: "Female",
//     dateOfBirth: "1992-02-28",
//     ssn: "123-45-6789",
//   },
//   {
//     id: "5",
//     name: "Charlie Brown",
//     occupation: "Accountant",
//     gender: "Male",
//     dateOfBirth: "1983-07-05",
//     ssn: "987-65-4321",
//   },
//   {
//     id: "6",
//     name: "Eva Davis",
//     occupation: "Nurse",
//     gender: "Female",
//     dateOfBirth: "1975-09-14",
//     ssn: "555-12-3456",
//   },
// ];

const data = [
  {
    id: "1",
    name: "John Doe",
    occupation: "Software Engineer",
    gender: Gender.Male,
    dateOfBirth: "1990-05-15",
    ssn: "111-22-3333",
  },
  {
    id: "2",
    name: "Jane Smith",
    occupation: "Doctor",
    gender: Gender.Female,
    dateOfBirth: "1985-12-10",
    ssn: "444-55-6666",
  },
  {
    id: "3",
    name: "Bob Johnson",
    occupation: "Teacher",
    gender: Gender.Male,
    dateOfBirth: "1978-08-22",
    ssn: "777-88-9999",
  },
  {
    id: "4",
    name: "Alice Williams",
    occupation: "Graphic Designer",
    gender: Gender.Female,
    dateOfBirth: "1992-02-28",
    ssn: "123-45-6789",
  },
  {
    id: "5",
    name: "Charlie Brown",
    occupation: "Accountant",
    gender: Gender.Male,
    dateOfBirth: "1983-07-05",
    ssn: "987-65-4321",
  },
  {
    id: "6",
    name: "Eva Davis",
    occupation: "Nurse",
    gender: Gender.Female,
    dateOfBirth: "1975-09-14",
    ssn: "555-12-3456",
  },
];

const patientEntries: PatientEntry[] = data.map((obj) => {
  const object = toNewPatientEntry(obj) as PatientEntry;
  object.id = obj.id;
  return object;
});

export default patientEntries;
