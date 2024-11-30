# Homework: JavaScript Arrays and Object Basics

## Part1, Arrays

### Modify Loop Behavior

```js
function skipDivisibleByFourWithForLoop(numbers) {
	// Implement using a traditional for loop
	// Expected Output:
	// 1, 2, 3, 5, 6, 7
}

function skipDivisibleByFourWithForOfLoop(numbers) {
	// Implement using a for...of loop
	// Expected Output:
	// 1, 2, 3, 5, 6, 7
}

function skipDivisibleByFourWithForInLoop(numbers) {
	// Implement using a for...in loop
	// Expected Output:
	// 1, 2, 3, 5, 6, 7
}

function upperCaseAllWords(words) {
	// Implement using a map statement
	// Expected Output:
	// ["HELLO", "WORLD", "FROM", "AKSHARA"]
}

// Function calls
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
skipDivisibleByFourWithForLoop(numbers);
skipDivisibleByFourWithForOfLoop(numbers);
skipDivisibleByFourWithForInLoop(numbers);
upperCaseAllWords(['hello', 'world', 'from', 'akshara']);
```

### Modify Array Elements

```js
function prependYummyToFruits(fruits) {
	// Use map to prepend "Yummy"
	// Expected Output:
	// ["Yummy Apple", "Yummy Banana", "Yummy Cherry", "Yummy Date", "Yummy Elderberry"]
}

function filterShortFruits(fruits) {
	// Use filter to include fruits with names shorter than 6 characters
	// Expected Output:
	// ["Apple", "Banana", "Date"]
}

function alternateUpperCase(sentence) {
	// Expected Output:
	// ["AkShArA", "LoVeS", "ScOoBy"]
}

// Function calls
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
console.log(prependYummyToFruits(fruits));
console.log(filterShortFruits(fruits));
console.log(alternateUpperCase('Akshara Loves Scooby'));
```

### Understanding Array Methods

```js
function joinColors(colors) {
    // Use join to create a comma-separated string
    // Expected Output:
    // "red, blue, green"
}

function reverseNumbers(numbers) {
    // Use reverse to reverse the array
    // Expected Output:
    // [5, 4, 3, 2, 1]
}

function sliceMiddleThree(numbers) {
    // Use slice to extract the middle three numbers
    // Expected Output:
    // [2, 3, 4]
}

function replaceSecondNumber(numbers, "ILU") {
    // Use splice to replace the second number
    // Expected Output:
    // [10, "ILU", 30]
}

// Function calls
const colors = ["red", "blue", "green"];
const numbers = [1, 2, 3, 4, 5];
const numbersToSplice = [10, 20, 30];

console.log(joinColors(colors));
console.log(reverseNumbers(numbers));
console.log(sliceMiddleThree(numbers));
console.log(replaceSecondNumber(numbersToSplice, "ILU"));
```

## Part2, objects

```js
const original = {
	name: 'Akshara',
	age: 22,
	address: {
		city: 'Bangalore',
		country: 'India',
	},
};
const newAddress = {
	city: 'Mysore',
	country: 'India',
};
function updateAddress(original, newAddress) {
	// Implement using Object.assign
	// Expected Output:
	// {
	//     name: "Akshara",
	//     age: 22,
	//     address: {
	//         city: "Mysore",
	//         country: "India"
	//     }
	// }
}
```

```js
const original = {
	name: 'Akshara',
	age: 22,
	address: {
		city: 'Bangalore',
		country: 'India',
	},
};
function updateAge(original) {
	// remove age from original object
	// Expected Output:
	// {
	//     name: "Akshara",
	//     address: {
	//         city: "Bangalore",
	//         country: "India"
	//     }
	// }
}
```

```js
const original = {
	name: 'Akshara',
	age: 22,
	address: {
		city: 'Bangalore',
		country: 'India',
	},
};
const backup = original;
original.name = 'Bangaram';
original.address.city = 'Mysore';

console.log(backup); // TODO: make sure the backup does not change
// Expected Output:
// {
//     name: "Akshara",
//     age: 22,
//     address: {
//         city: "Bangalore",
//         country: "India"
//     }
// };
```

```js
const original = ['Akshara', 'Bangalore', 'India'];
const backup = original;
original[0] = 'Bangaram';
console.log(backup); // TODO: make sure the backup does not change
// Expected Output:
// ["Akshara", "Bangalore", "India"];
```

```js
const original = [
	{ name: 'Akshara' },
	{ city: 'Bangalore' },
	{ country: 'India' },
];
const backup = original;
original[0].name = 'Bangaram';
console.log(backup); // TODO: make sure the backup does not change
// Expected Output:
// [
//     { name: "Akshara" },
//     { city: "Bangalore" },
//     { country: "India" }
// ];
```

## Part3, Bonus

1. Explain why we should avoid using `Deep Copy` in JavaScript, and how we can avoid it.
2. Explain the difference between `Shallow Copy` and `Deep Copy` in JavaScript.
3. Learn about optional chaining and nullish coalescing operators in JavaScript. Explain with examples.
4. Learn about destructuring in JavaScript. Explain with examples.
