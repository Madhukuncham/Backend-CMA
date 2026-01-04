const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const db = new sqlite3.Database(
  path.join(__dirname, "database.sqlite"),
  (err) => {
    if (err) console.error("DB Error:", err.message);
    else console.log("Connected to SQLite database");
  }
);

// Users table
db.run(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
)`);

// Courses table
db.run(`
CREATE TABLE IF NOT EXISTS courses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  courseName TEXT NOT NULL,
  description TEXT NOT NULL,
  instructor TEXT NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
)`);

module.exports = db;
