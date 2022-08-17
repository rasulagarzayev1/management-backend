const createError = require('http-errors');
const express = require('express');
const router = express.Router();
const db = require('../../db.js');
const { isStringValid } = require('../../utils/validator.js');

router.put('/:id', (req, res, next) => {
	const id = req.params.id;
	const userStory = [req.body.Content, req.body.GoalId, req.body.StakeholderMotivation, req.body.BusinessMotivation, req.body.StrategicMotivation];

	if(!isValidNumber(req.body.GoalId)) {
		next(createError(500, 'GoalId must be entered correctly'));
		return;
	}

	if(!isValidNumber(req.body.StakeholderMotivation)) {
		next(createError(500, 'StakeholderMotivation must be selected'));
		return;
	}

	if(!isValidNumber(req.body.BusinessMotivation)) {
		next(createError(500, 'BusinessMotivation must be selected'));
		return;
	}

	if(!isValidNumber(req.body.StrategicMotivation)) {
		next(createError(500, 'StrategicMotivation must be selected'));
		return;
	}

	if(!isStringValid(req.body.Content)) {
		next(createError(500, 'Content must contain at least one character'));
		return;
	}

	const sql = `UPDATE UserStories SET Content = ?, GoalId = ?, StakeholderMotivation = ?, BusinessMotivation = ?, StrategicMotivation = ?  WHERE (Id = ${id})`;
	db.run(sql,userStory, err => {
		if(err) {
			next(createError(500, 'Internal server error'));
			return;
		}
		res.send({
			status: 200,
			messgae: 'UserStory updated successfully',
		});
	});
});

module.exports = router;
