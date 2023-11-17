import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { DiaryEntry, ValidationError, Weather, Visibility } from "./types";
import { getAllDiaryEntries, createDiaryEntry } from "./DiaryEntryServices";
import Entries from "../src/components/Entries";

function App() {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const [date, setDate] = useState("");
  const [visibility, setVisibility] = useState<Visibility>(Visibility.Great);
  const [weather, setWeather] = useState<Weather>(Weather.Sunny);
  const [comment, setComment] = useState("");

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    getAllDiaryEntries().then((data) => {
      setEntries(data);
    });
  }, []);

  const visibilityInputs: string[] = ["great", "good", "ok", "poor"];
  const weatherInputs: string[] = ["rainy", "cloudy", "stormy", "windy"];

  const entryCreation = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const entryToAdd: DiaryEntry = {
        date: date,
        visibility: visibility,
        weather: weather,
        comment: comment,
        id: entries.length + 1,
      };

      const data = await createDiaryEntry(entryToAdd);
      setEntries((entries) => [...entries, data]);
      setDate("");
      setComment("");
    } catch (error) {
      if (axios.isAxiosError<ValidationError, Record<string, unknown>>(error)) {
        const validationError = error as AxiosError<ValidationError>;
        const errorMessage = validationError.response?.data;

        if (typeof errorMessage === "string") {
          setErrorMessage(errorMessage);
          setTimeout(() => {
            setErrorMessage(null);
          }, 2000);
        } else {
          console.error(error);
          setErrorMessage(null);
        }
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
          date{" "}
          <input
            type="date"
            id="dateInput"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          visibility{" "}
          {visibilityInputs.map((opt, i) => (
            <React.Fragment key={i}>
              {opt}{" "}
              <input
                type="radio"
                name="filter"
                onChange={() => setVisibility(opt as Visibility)}
              />
            </React.Fragment>
          ))}
        </div>

        <div>
          weather{" "}
          {weatherInputs.map((opt, i) => (
            <React.Fragment key={i}>
              {opt}{" "}
              <input
                type="radio"
                name="filter2"
                onChange={() => setWeather(opt as Weather)}
              />
            </React.Fragment>
          ))}
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
