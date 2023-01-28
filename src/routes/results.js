const express = require("express");
const app = express.Router();
const mongoose = require("mongoose");
const result = require("../models/result");

app.post("/", async (req, res) => {
  try {
    let total_questions =
      +req.body.Correct_answers_count + +req.body.Incorrect_answers_count;
    let percentage = Math.floor((+req.body.Correct_answers_count / total_questions) * 100);

    const result1 = new result({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      Correct_answers_count: +req.body.Correct_answers_count,
      Incorrect_answers_count: +req.body.Incorrect_answers_count,
      Total_score: +req.body.Total_score,
      Percentage: percentage,
    });
    const response = await result1.save();
    res.status(200).json({
      quiz: response,
    });
  } catch (error) {
    res.status(404).json({
      error: error,
    });
  }
});

app.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    const result1 = await result.find({ name: name });
    res.status(200).json({
      result: result1,
    });
  } catch (error) {
    res.status(404).json({
      error: error,
    });
  }
});

module.exports = app;
