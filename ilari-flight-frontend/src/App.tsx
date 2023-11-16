import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { DiaryEntry } from "./types";
import Entries from "../src/components/Entries";

function App() {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/diaries").then((res) => {
      setEntries(res.data as DiaryEntry[]);
    });
  }, []);

  console.log(entries);

  return (
    <>
      <h1>Diary entries</h1>
      <Entries entries={entries} />
    </>
  );
}

export default App;
