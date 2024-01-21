import axios from 'axios';
import { DiaryEntry } from '../src/types';

const baseUrl = 'http://localhost:3000/api/diaries';

export const getAllDiaries = () => {
  return axios.get<DiaryEntry[]>(baseUrl).then((res) => res.data);
};

export const createNewDiary = (object: DiaryEntry) => {
  return axios.post<DiaryEntry>(baseUrl, object).then((res) => res.data);
};
