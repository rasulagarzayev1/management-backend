const createError = require('http-errors');
const express = require('express');
const router = express.Router();
const db = require('../../db.js');
const { isStringValid, isValidNumber } = require('../../utils/validator.js');

router.put('/:id', (req, res, next) => {
	const id = req.params.id;
	const goal = [req.body.Content];

	if(!isValidNumber(id)) {
		next(createError(500, 'Id must be in correct number format'));
		return;
	}

	if(!isStringValid(req.body.Content)) {
		next(createError(500, 'Content must contain at least one character'));
		return;
	}

	const sql = `UPDATE Goals SET  Content = ? WHERE (Id = ${id})`;
	db.run(sql,goal, err => {
		if(err) {
			next(createError(500, 'Internal server error'));
			return;
		}
		res.send({
			status: 200,
			messgae: 'Goal updated successfully',
		});
	});
});

module.exports = router;
