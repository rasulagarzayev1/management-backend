const createError = require('http-errors');
const express = require('express');
const router = express.Router();
const db = require('../../db.js');

router.delete('/:id', (req, res) => {
	const id = req.params.id;
	const sql = "DELETE FROM UserStories WHERE Id = ?";
	db.run(sql, id, err => {
		if(err) {
			next(createError(500, 'Internal server error'));
			return
		}
		res.send({
			status: 200,
			messgae: 'UserStory removed successfully',
		});
	});
});

module.exports = router;
