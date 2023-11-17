import { DiaryEntry } from "../types";
import React from "react";

const Entries = ({ entries }: { entries: DiaryEntry[] }) => {
  return (
    <div>
      {entries.map((entry) => (
        <div key={entry.id}>
          <h3>{entry.date}</h3>
          <p>
            visibility: {entry.visibility} <br /> weather: {entry.weather}
          </p>
          <p>"{entry.comment}"</p>
        </div>
      ))}
    </div>
  );
};

export default Entries;
