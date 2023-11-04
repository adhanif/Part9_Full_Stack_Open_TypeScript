import express from "express";

export const getDiagnoses = (_req, res) => {
  try {
    // res.json(diagnoses);
  } catch (error: unknown) {
    console.error(error);
    let errorMessage = "Something went wrong";
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    res.send(400).send({ error: errorMessage });
  }
};

// export default getDiagnoses;
