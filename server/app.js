require("dotenv").config();

const express = require("express");
const cors = require("cors");
// const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;
const ATLAS_URI = process.env.ATLAS_URI;

mongoose.connect(ATLAS_URI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
	console.log("MongoDB connection established successfully");
});

app.use((req, res) => {
	res.status(404).send({ message: "URL Not Found" });
});

app.listen(PORT, () => console.log("Server on localhost:" + PORT));
