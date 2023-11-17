import { DiaryEntry } from "./types";
import axios from "axios";

const baseUrl = "http://localhost:3000/api/diaries";

export const getAllDiaryEntries = () => {
  return axios.get<DiaryEntry[]>(baseUrl).then((res) => res.data);
};

export const createDiaryEntry = (obj: DiaryEntry) => {
  return axios.post<DiaryEntry>(baseUrl, obj).then((res) => res.data);
};
