// require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT;
const quiz = require("./routes/quiz");
const result = require("./routes/results");
const connect = require("./config/db");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/quiz",quiz);
app.use("/result",result);

app.get("/",(req,res)=>{
    res.send("Hello World");
})



app.listen(PORT,async()=>{
    await connect();
    console.log(`http://localhost:${PORT}`)
})