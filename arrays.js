const array = [1, 2, 3, 4, 5];

console.log("Traditional for loop");
for (let idx = 0; idx < array.length; idx++) {
	if (idx === 2) {
		continue;
	}
	console.log({ idx, value: array[idx] });
}

console.log("For of loop");
for (const value of array) {
	if (value === 3) {
		continue;
	}
	console.log({ value });
}

console.log("For in loop");
for (const idx in array) {
	if (idx === "2") {
		continue;
	}
	console.log({ idx, value: array[idx] });
}

console.log("forEach");
const forEachValue = array.forEach((el, idx, arr) => {
	if (idx === 2) {
		// break or continue is not possible in forEach
		return;
	}
	console.log({ idx, el, arr });
});

console.log(forEachValue); // undefined

console.log("map");
const mapValue = array.map((el, idx, arr) => `GF_${el}`);
console.log(mapValue);

console.log("filter");
const filteredArray = array.filter((el, idx, arr) => {
	if (el === 3) {
		return false;
	}
	return true;
});
console.log(filteredArray);

console.log("reduce"); // this is too advanced Ill cover this in a separate video


const arrayMethods = [1, 2, 3, 4, 5];

console.log(arrayMethods.join("-")); // 1 - 2 - 3 - 4 - 5
console.log("Akshara".split("")); // ["A", "k", "s", "h", "a", "r", "a"]
console.log("Akshara Santhosh".split(" ")); // ["Akshara", "Santhosh"]
console.log(arrayMethods.reverse()); // [5, 4, 3, 2, 1]
console.log([1, 2, 3, 4, 5].slice(1, 4));
console.log("reversed array", arrayMethods); // [5, 4, 3, 2, 1]

arrayMethods.splice(2, 1, "Akshara");
console.log("Splice", arrayMethods); // [5, 4, 2, 1]

