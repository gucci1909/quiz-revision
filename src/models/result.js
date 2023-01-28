const mongoose = require("mongoose");

resultSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name:{required:true,type:String},
    Correct_answers_count:{required:true,type:Number},
    Incorrect_answers_count:{required:true,type:Number},
    Total_score:{required:true,type:Number},
    Percentage:{required:true,type:Number}
  }
);

module.exports = mongoose.model("results", resultSchema);
