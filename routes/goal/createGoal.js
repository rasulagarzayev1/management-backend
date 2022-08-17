const createError = require('http-errors');
const express = require('express');
const router = express.Router();
const db = require('../../db.js');
const { isStringValid } = require('../../utils/validator.js')

router.post('/', (req, res, next) => {
	const sql = 'INSERT INTO Goals (Content) VALUES (?)';
	const goal = [req.body.Content];

	if(!isStringValid(req.body.Content)) {
		next(createError(500, 'Content must contain at least one character'));
		return;
	}

	db.run(sql, goal, err => {
		if(err) {
			next(createError(500, 'Internal server error'));
			return;
		}

		res.send({
			status: 200,
			messgae: 'UserStory created successfully',
		});
	});
});

module.exports = router;
