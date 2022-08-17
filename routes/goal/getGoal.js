const express = require('express');
const router = express.Router();
const db = require('../../db.js');

/* GET single goal. */
router.get('/:id', (req, res) => {
	const id = req.params.id;
	const sql = `SELECT * FROM Goals WHERE Id = ${id}`;
	db.get(sql, (err, row) => {
		if(err) {
			res.send(err);
		}

		res.send(row);
	});
});

module.exports = router;
