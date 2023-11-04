import express from "express";
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const PORT = 3001;

app.get("/api/patients", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
