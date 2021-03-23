const { mean, median, mode } = require('./operations');

describe('mean', function() {
	it('finds the mean of an array of numbers', function() {
		expect(mean([ 1, 2, 3 ])).toEqual(2);
		expect(mean([ 1, 1, 1 ])).toEqual(1);
	});
});

describe('median', function() {
	it('finds the median of an odd array of numbers', function() {
		expect(median([ 1, 2, 3 ])).toEqual(2);
		expect(median([ 1, 2, 3, 4, 5 ])).toEqual(3);
	});

	it('finds the median of an even array of numbers', function() {
		expect(median([ 1, 2 ])).toEqual(1.5);
		expect(median([ 1, 2, 3, 5, 6, 7 ])).toEqual(4);
	});
});

describe('mode', function() {
	it('finds the mode of an array of numbers', function() {
		expect(mode([ 1, 2, 2, 2, 3, 3, 4 ])).toEqual(2);
	});
});
