const express = require("express");
const app = express.Router();
const Quiz = require("../models/quiz");
const mongoose = require("mongoose");

app.get("/", async (req, res) => {
  try {
    const { limit, page } = req.query;
    const { category, difficulty, no_of_ques } = req.query;
    const quiz = await Quiz.find({category:category,difficulty:difficulty})
      .limit(limit)
    //   .skip((page - 1) * limit);
    res.status(200).json({
      quiz: quiz,
    });
  } catch (error) {
    res.status(404).json({
      error: error,
    });
  }
});

app.post("/", async (req, res) => {
  try {
    const quiz = new Quiz({
      _id: new mongoose.Types.ObjectId(),
      category: req.body.category,
      type: req.body.type,
      difficulty: req.body.difficulty,
      question: req.body.question,
      correct_answer: req.body.correct_answer,
      incorrect_answers: req.body.incorrect_answers,
    });
    const response = await quiz.save();
    res.status(200).json({
      quiz: response,
    });
  } catch (error) {
    res.status(404).json({
      error: error,
    });
  }
});

module.exports = app;
