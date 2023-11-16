import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { DiaryEntry } from "./types";
import Entries from "../src/components/Entries";

function App() {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const [date, setDate] = useState("");
  const [visibility, setVisibility] = useState("");
  const [weather, setWeather] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/api/diaries").then((res) => {
      setEntries(res.data as DiaryEntry[]);
    });
  }, []);

  const entryCreation = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const entryToAdd = {
      date: date,
      visibility: visibility,
      weather: weather,
      comment: comment,
      id: entries.length + 1,
    };
    setEntries(entries.concat(entryToAdd));
    console.log(entryToAdd);
  };

  return (
    <>
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
