// ** Mean ** //
function mean(arr) {
	let sum = arr.reduce((acc, next) => {
		return acc + next;
	});
	return sum / arr.length;
}

// ** Median ** //
function median(arr) {
	let median;
	if (arr.length % 2 !== 0) {
		median = arr[Math.floor(arr.length / 2)];
	} else {
		let median1 = arr[Math.floor(arr.length / 2) - 1];
		let median2 = arr[Math.floor(arr.length / 2)];
		median = mean([ median1, median2 ]);
	}
	return median;
}

// ** Mode ** //
function createFrequencyCounter(arr) {
	return arr.reduce(function(acc, next) {
		acc[next] = (acc[next] || 0) + 1;
		return acc;
	}, {});
}

function mode(arr) {
	let freqCounter = createFrequencyCounter(arr);

	let count = 0;
	let mostFrequent;

	for (let key in freqCounter) {
		if (freqCounter[key] > count) {
			mostFrequent = key;
			count = freqCounter[key];
		}
	}

	return +mostFrequent;
}

// ***** HELPER FUNCTION TO CONVERT STRING TO INT ARRAY ***** //
function convertStrToIntArray(numListAsString) {
	let res = [];

	for (let i = 0; i < numListAsString.length; i++) {
		let valToNumber = Number(numListAsString[i]);

		if (Number.isNaN(valToNumber)) {
			return new Error(`The value '${numListAsString[i]}' at index ${i} is not a valid number.`);
		}

		res.push(valToNumber);
	}
	return res;
}

/////////////////////////////////
module.exports = {
	mean: mean,
	median: median,
	mode: mode,
	convertStrToIntArray: convertStrToIntArray
};
