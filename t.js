function partsSums(ls) {
	const lengthArray = ls.length;
	let array = [];
	for (let i = 0; i < lengthArray; i++) {
		let number = ls.reduce((acc, curr) => {
			return acc + curr;
		}, 0);
		ls.shift();
		array.push(number);
	}
	array.push(0);
	console.log(array);
	return array;
}

partsSums([0, 1, 3, 6, 10]); // [20, 20, 19, 16, 10, 0]

// ====================================

function partsSums(ls) {
	const lengthArray = ls.length;
	let array = [];
	for (let i = 0; i < lengthArray; i++) {
		let number = 0;
		ls.map((i, index) => {
			number = number + i;
		});
		ls.shift();
		array.push(number);
	}
	array.push(0);
	console.log(array);
	return array;
}

partsSums([0, 1, 3, 6, 10]); // [20, 20, 19, 16, 10, 0]

// ==================================================

function partsSums(ls) {
	const lengthArray = ls.length;
	let array = [];
	for (let i = -1; i < lengthArray; i++) {
		let number = 0;
		ls.map((item, index) => {
			if (index > i) {
				number = number + item;
				return;
			}
			return;
		});
		array.push(number);
	}
	return array;
}

partsSums([0, 1, 3, 6, 10]); // [20, 20, 19, 16, 10, 0]
