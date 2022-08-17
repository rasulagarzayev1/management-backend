const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const userStoriesRouter = require('./routes/userStories/getUserStories.js');
const userStoryGetRouter = require('./routes/userStory/getUserStory.js');
const userStoryEditRouter = require('./routes/userStory/editUserStory.js');
const userStoryCreateRouter = require('./routes/userStory/createUserStory.js');
const userStoryDeleteRouter = require('./routes/userStory/deleteUserStory.js');

const goalsRouter = require('./routes/goals/getGoals.js');
const goalGetRouter = require('./routes/goal/getGoal.js');
const goalEditRouter = require('./routes/goal/editGoal.js');
const goalCreateRouter = require('./routes/goal/createGoal.js');
const goalDeleteRouter = require('./routes/goal/deleteGoal.js');

const app = express();
const cors = require("cors");
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/userStories/getUserStories', userStoriesRouter);
app.use('/userStory/getUserStory/', userStoryGetRouter);
app.use('/userStory/editUserStory/', userStoryEditRouter);
app.use('/userStory/createUserStory/', userStoryCreateRouter);
app.use('/userStory/deleteUserStory/', userStoryDeleteRouter);

app.use('/goals/getGoals', goalsRouter);
app.use('/goal/getGoal/', goalGetRouter);
app.use('/goal/editGoal/', goalEditRouter);
app.use('/goal/createGoal/', goalCreateRouter);
app.use('/goal/deleteGoal/', goalDeleteRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;