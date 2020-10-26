// The Firebase Admin SDK to access Cloud Firestore.
import express, { json } from "express";
import {
	initializeApp,
	credential as _credential,
	firestore,
} from "firebase-admin";
import cors from "cors";
import { config } from "dotenv";
import serviceAccount from "./config/serviceAccount.json";
config();
// const jwt = require("jsonwebtoken");
const app = express();

app.use(json());
app.use(cors());

const PORT = process.env.PORT || 8080;

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.

// admin.initializeApp();

// mongoose.connect(ATLAS_URI, {
// 	useNewUrlParser: true,
// 	useCreateIndex: true,
// 	useUnifiedTopology: true,
// });

// const connection = mongoose.connection;
// connection.once("open", () => {
// 	console.log("MongoDB connection established successfully");
// });

// app.use((req, res) => {
// 	res.status(404).send({ message: "URL Not Found" });
// });

// app.listen(PORT, () => console.log("Server on localhost:" + PORT));

initializeApp({
	credential: _credential.cert(serviceAccount),
	databaseURL: "https://retro-49d98.firebaseio.com",
});

const db = firestore();

app.listen(PORT, () => console.log("Server on localhost:" + PORT));
