const express = require('express');
const router = express.Router();
const db = require('../../db.js');
/* GET user stories listing. */
router.get('/', function(req, res, next) {
	const sql = 'SELECT * FROM UserStories';
	db.all(sql, (err, rows) => {
		if (err) {
			res.send(err);
			return
		}
		res.send(rows);
	});
});

module.exports = router;
