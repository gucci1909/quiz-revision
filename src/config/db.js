// require("dotenv").config();
const mongoose = require("mongoose");

const connect = async ()=>{
    return mongoose.connect("mongodb+srv://umangar34:Umang2000@gucci1909.vhyhdo6.mongodb.net/quiz?retryWrites=true&w=majority");
}

module.exports = connect;