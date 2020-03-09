exports.min = function min(arr) {
	if (arguments.length == 0) {
		return 0;
	}
	let n = arr.length;
	if (n == 0) {
		return 0;
	}

	let minEl = arr[0];
	for (let i = 0; i < n; i++) {
		if (minEl > arr[i]) {
			minEl = arr[i];
		}

	}
	return minEl;
}

exports.max = function max(arr) {
	if (arguments.length == 0) {
		return 0;
	}
	let n = arr.length;
	if (n == 0) {
		return 0;
	}
	let maxEl = arr[0];

	for (let i = 0; i < n; i++) {
		if (maxEl < arr[i]) {
			maxEl = arr[i];
		}
	}
	return maxEl;
}

exports.avg = function avg(arr) {
	let avgSum = 0;
	let avgEl;

	if (arguments.length == 0) {
		return 0;
	}
	let n = arr.length;
	if (n == 0) {
		return 0;
	}

	for (let i = 0; i < n; i++) {
		avgSum = avgSum + arr[i];
		avgEl = avgSum / n;
	}
	return avgEl;
}

