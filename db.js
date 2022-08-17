const sqlite3 = require("sqlite3").verbose();
const path = require('path');

const db_name = path.join(__dirname, "data", "thesis.db");
const db = new sqlite3.Database(db_name, err => {
	if (err) {
		return console.error(err.message);
	}
});

const sql_create_user_story = `CREATE TABLE IF NOT EXISTS UserStories (
	Id INTEGER PRIMARY KEY AUTOINCREMENT,
	Content VARCHAR(100) NOT NULL,
	GoalId INTEGER,
	StakeholderMotivation INTEGER,
	BusinessMotivation INTEGER,
	Strategic INTEGER
);`;

db.run(sql_create_user_story, err => {
	if (err) {
		return console.error(err.message);
	}
});

const sql_create_goal = `CREATE TABLE IF NOT EXISTS Goals (
	Id INTEGER PRIMARY KEY AUTOINCREMENT,
	Content VARCHAR(100) NOT NULL
);`;

db.run(sql_create_goal, err => {
	if (err) {
		return console.error(err.message);
	}
});

module.exports = db;