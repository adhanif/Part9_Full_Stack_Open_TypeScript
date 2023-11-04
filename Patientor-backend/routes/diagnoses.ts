import express from "express";
const diagnosesRouter = express.Router();
import diagnosesServices from "../services/diagnosesServices";

diagnosesRouter.get("/", (_req, res) => {
  try {
    res.json(diagnosesServices.getEntries());
  } catch (error: unknown) {
    console.error(error);
    let errorMessage = "Something went wrong";
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    res.send(400).send({ error: errorMessage });
  }
});
export default diagnosesRouter;
