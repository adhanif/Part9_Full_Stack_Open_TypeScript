import { DiaryEntry } from "../types";

const Entries = ({ entries }: { entries: DiaryEntry[] }) => {
  return (
    <div>
      {entries.map((entry) => (
        <div key={entry.id}>
          <h3>{entry.date}</h3>
          <p>
            visibility: {entry.visibility} <br /> weather: {entry.weather}
          </p>
          <p></p>
        </div>
      ))}
    </div>
  );
};

export default Entries;
