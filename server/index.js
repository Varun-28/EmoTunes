const connectToMongo = require("./db");
connectToMongo();

const cors = require("cors");

const express = require("express");
const app = express();
require("dotenv").config();
if (process.env.NODE_ENV == "production") {
	app.use(express.static("client/build"));
	const path = require("path");
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
app.use("/api/auth", require("./routes/auth.js"));

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
