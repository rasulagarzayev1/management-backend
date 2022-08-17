const express = require('express');
const router = express.Router();
const db = require('../../db.js');
/* GET goals listing. */
router.get('/', function(req, res, next) {
	const sql = 'SELECT * FROM Goals';
	db.all(sql, (err, rows) => {
		if (err) {
			res.send(err);
			return
		}
		res.send(rows);
	});
});

module.exports = router;
