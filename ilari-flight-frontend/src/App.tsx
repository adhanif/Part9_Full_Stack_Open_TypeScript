import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { DiaryEntry, ValidationError } from "./types";
import { getAllDiaryEntries, createDiaryEntry } from "./DiaryEntryServices";
import Entries from "../src/components/Entries";

function App() {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const [date, setDate] = useState("");
  const [visibility, setVisibility] = useState("");
  const [weather, setWeather] = useState("");
  const [comment, setComment] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    getAllDiaryEntries().then((data) => {
      setEntries(data);
    });
  }, []);

  // const entryCreation = async (e: React.SyntheticEvent) => {
  //   e.preventDefault();
  //   const entryToAdd = {
  //     date: date,
  //     visibility: visibility,
  //     weather: weather,
  //     comment: comment,
  //     id: entries.length + 1,
  //   };

  //   createDiaryEntry(entryToAdd).then((data) => {
  //     setEntries((entries) => [...entries, data]);
  //   });
  // };
  const entryCreation = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const entryToAdd = {
        date: date,
        visibility: visibility,
        weather: weather,
        comment: comment,
        id: entries.length + 1,
      };

      const data = await createDiaryEntry(entryToAdd);
      setEntries((entries) => [...entries, data]);
    } catch (error) {
      if (axios.isAxiosError<ValidationError, Record<string, unknown>>(error)) {
        // console.log(error.status);
        const validationError = error as AxiosError<ValidationError>;
        const errorMessage = validationError.response?.data;
        setErrorMessage(errorMessage);
        setTimeout(() => {
          setErrorMessage(null);
        }, 2000);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <>
      <p style={{ color: "red" }}>{errorMessage?.split(". ")[1]}</p>
      <h1> add new Entry</h1>
      <form onSubmit={entryCreation}>
        <div>
          date <input value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div>
          visibility{" "}
          <input
            value={visibility}
            onChange={(e) => setVisibility(e.target.value)}
          />
        </div>
        <div>
          weather{" "}
          <input value={weather} onChange={(e) => setWeather(e.target.value)} />
        </div>
        <div>
          comment{" "}
          <input value={comment} onChange={(e) => setComment(e.target.value)} />
        </div>

        <button type="submit">add</button>
      </form>
      <h1>Diary entries</h1>
      <Entries entries={entries} />
    </>
  );
}

export default App;
