import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rashidayusuf@5",            // your MySQL password
  database: "flashcards_db"
});

db.connect(err => {
  if (err) console.error("DB connection failed:", err);
  else console.log("Connected to MySQL");
});

// Get all subjects
app.get("/subjects", (req, res) => {
  db.query("SELECT DISTINCT subject FROM flashcards", (err, results) => {
    if (err) return res.status(500).json(err);
    const subjects = results.map(r => r.subject);
    res.json(subjects);
  });
});

// Get all flashcards of a subject
app.get("/flashcards/:subject", (req, res) => {
  const { subject } = req.params;
  db.query("SELECT * FROM flashcards WHERE subject = ?", [subject], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// Add new flashcard
app.post("/flashcards", (req, res) => {
  const { question, answer, subject } = req.body;
  db.query(
    "INSERT INTO flashcards (question, answer, subject) VALUES (?,?,?)",
    [question, answer, subject],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ id: result.insertId, question, answer, subject });
    }
  );
});

app.listen(5000, () => console.log("Server running on port 5000"));
