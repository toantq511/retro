const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");
const firestoreService = require("firestore-export-import");
const fs = require("fs-extra");
const formidable = require("formidable");
require("dotenv").config();

const serviceAccount = require("./config/serviceAccount.json");
// const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://retro-49d98.firebaseio.com",
});
firestoreService.initializeApp(
	serviceAccount,
	"https://retro-49d98.firebaseio.com"
);

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

app.get("/api/export", (req, res) => {
	firestoreService.backups().then((collections) => {
		res.json(collections);
	});
});

app.post("/api/import", (req, res) => {
	const form = formidable.IncomingForm();
	form.parse(req, (err, fields, files) => {
		const data = fs.readFileSync(files.file.path, "utf-8");
		firestoreService
			.restore(JSON.parse(data))
			.then((value) => res.json(value))
			.catch(() => res.json({ status: false, message: "Import failed" }));
	});
});

app.listen(PORT, () => console.log("Server on localhost:" + PORT));
