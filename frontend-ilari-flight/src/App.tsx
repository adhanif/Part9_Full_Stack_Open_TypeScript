import React from 'react';
import { useState, useEffect } from 'react';
import { getAllDiaries, createNewDiary } from './diaryService';
import { DiaryEntry } from '../src/types';
import './App.css';

function App() {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);
  const [date, setDate] = useState('');
  const [visibility, setVisibilty] = useState('');
  const [weather, setweather] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    getAllDiaries().then((data) => setDiaries(data));
  }, []);

  const diaryCreation = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const diaryToAdd: DiaryEntry = {
      id: diaries.length + 1,
      date: date,
      weather: weather,
      visibility: visibility,
      comment: comment,
    };

    createNewDiary(diaryToAdd).then((data) => setDiaries(diaries.concat(data)));
    setDiaries(diaries.concat(diaryToAdd));
    setDate('');
    setVisibilty('');
    setweather('');
    setComment('');
  };

  return (
    <>
      <div>
        <form onSubmit={diaryCreation}>
          <div>
            date:
            <input
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
          <div>
            visibilty:
            <input
              value={visibility}
              onChange={(event) => setVisibilty(event.target.value)}
            />
          </div>
          <div>
            weather:
            <input
              value={weather}
              onChange={(event) => setweather(event.target.value)}
            />
          </div>
          <div>
            comment:
            <input
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
          </div>
          <button type='submit'>add</button>
        </form>
      </div>

      <div>
        <h1>Diary Entries</h1>
        {diaries.map((diary) => (
          <div key={diary.id}>
            <h3>{diary.date}</h3>
            <p>visibility: {diary.visibility}</p>
            <p>weather: {diary.weather}</p>
            <p>comment: {diary.comment}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
