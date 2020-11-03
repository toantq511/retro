const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const serviceAccount = require("./config/serviceAccount.json");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://retro-49d98.firebaseio.com",
});

const db = admin.firestore();

app.get("/api/boards", (req, res) => {
	db.collection("board")
		.get()
		.then((snapshot) =>
			res.json(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
		);
});

app.get("/api/board/:id/column", (req, res) => {
	db.collection("item")
		.where("boardId", "==", req.params.id)
		.get()
		.then((snapshot) => {
			const data = snapshot.docs;
			let col1 = 0;
			let col2 = 0;
			let col3 = 0;
			data.forEach((doc) => {
				const { column } = doc.data();
				if (column === 1) col1++;
				else if (column === 2) col2++;
				else if (column === 3) col3++;
			});
			res.json({ col1, col2, col3, total: data.length });
		});
});

app.post("/api/signup", (req, res) => {
	db.collection("user")
		.where("username", "==", req.body.username)
		.get()
		.then((snapshot) => {
			if (snapshot.docs.length > 0)
				return res.json({
					error: { code: 500, message: "Username already exist" },
				});
		});
	db.collection("users")
		.add({
			...req.body,
			password: bcrypt.hashSync(req.body.password),
			createdAt: new Date().getTime(),
		})
		.then((value) => {
			if (value.id) res.json({ data: value.id });
			else res.json({ error: { code: 500, message: "Sign up fail" } });
		})
		.catch((err) => {
			console.log(err);
			res.json({ error: { code: 500, message: "Sign up fail" } });
		});
});

app.post("/api/login", (req, res) => {
	const { username, password } = req.body;
	db.collection("users")
		.where("username", "==", username)
		.get()
		.then((snapshot) => {
			if (snapshot.docs.length > 0) {
				const matched = snapshot.docs[0];
				if (bcrypt.compareSync(password, matched.data().password))
					res.json({
						data: {
							username: matched.data().username,
							name: matched.data().name,
							token: jwt.sign(matched.data(), process.env.JWTSECRET),
						},
					});
			} else res.json({ error: { code: 401, message: "Username not exist" } });
		});
});

app.post("/api/board", (req, res) => {
	db.collection("board").add({ ...req.body, createdAt: new Date().getTime() });
});

app.listen(PORT, () => console.log("Server on localhost:" + PORT));
