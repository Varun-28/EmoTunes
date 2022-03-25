const connectToMongo = require('./db');
connectToMongo();

const express = require('express');
const app = express();
require("dotenv").config();
const port = process.env.PORT;
app.use(express.json());

app.use('/api/auth', require('./routes/auth.js'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})