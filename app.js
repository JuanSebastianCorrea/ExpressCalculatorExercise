const express = require('express');
const ExpressError = require('./expressError');
const { mean, median, mode, convertStrToIntArray } = require('./operations');

const app = express();

app.get('/mean', (req, res, next) => {
	try {
		if (!req.query.nums) {
			throw new ExpressError(
				'Bad Request: You must pass a query key of nums with a comma-separated list of numbers.',
				400
			);
		}
		let numsStr = req.query.nums.split(',');
		let numsArr = convertStrToIntArray(numsStr);
		if (numsArr instanceof Error) {
			throw new ExpressError(numsArr.message, 400);
		}
		// SUCCESS
		let result = {
			operation: 'mean',
			result: mean(numsArr)
		};
		return res.send(result);
	} catch (e) {
		next(e);
	}
});

app.get('/median', (req, res, next) => {
	try {
		if (!req.query.nums) {
			throw new ExpressError(
				'Bad Request: You must pass a query key of nums with a comma-separated list of numbers.',
				400
			);
		}
		let numsStr = req.query.nums.split(',');
		let numsArr = convertStrToIntArray(numsStr);
		if (numsArr instanceof Error) {
			throw new ExpressError(numsArr.message, 400);
		}
		// SUCCESS
		let result = {
			operation: 'median',
			result: median(numsArr)
		};
		return res.send(result);
	} catch (e) {
		next(e);
	}
});

app.get('/mode', (req, res, next) => {
	try {
		if (!req.query.nums) {
			throw new ExpressError(
				'Bad Request: You must pass a query key of nums with a comma-separated list of numbers.',
				400
			);
		}
		let numsStr = req.query.nums.split(',');
		let numsArr = convertStrToIntArray(numsStr);
		if (numsArr instanceof Error) {
			throw new ExpressError(numsArr.message, 400);
		}
		// SUCCESS
		let result = {
			operation: 'mode',
			result: mode(numsArr)
		};
		return res.send(result);
	} catch (e) {
		next(e);
	}
});

// Non-existing page error handler
app.use(function(req, res, next) {
	const err = new ExpressError('Not Found', 404);
	return next(err);
});

// GENERAL ERROR HANDLER
app.use((err, req, res, next) => {
	res.status(err.status || 500);

	return res.json({
		error: err
		// message: err.message
	});
});

app.listen(3000, function() {
	console.log('Server running on port 3000');
});
