const mongoose = require("mongoose");

quizSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    category:{required:true,type: String, enum:["General Knowledge","Sports","Geography"]},
    type: {required:true,type:String},
    difficulty: {required:true, type: String,enum: ["easy", "medium","hard"]},
    question: {required:true,type:String},
    correct_answer:{required:true,type:String},
    incorrect_answers:{required:true,type:Array}
  }
//   {
//     versionKey: false,
//     timestamps: true,
//   }
);

module.exports = mongoose.model("quizs", quizSchema);
