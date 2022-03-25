const mongoose = require('mongoose');
require("dotenv").config();
const mongoURI = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.xgw18.mongodb.net/emotunesDB?retryWrites=true&w=majority`;

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => console.log("Connected to Mongo Successfully!"));
}

module.exports = connectToMongo;