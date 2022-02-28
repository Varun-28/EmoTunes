const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://VarunShilpe:vs282699@cluster0.xgw18.mongodb.net/emotunesDB?retryWrites=true&w=majority";

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => console.log("Connected to Mongo Successfully!"));
}

module.exports = connectToMongo;