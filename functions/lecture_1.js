// Objects
// 1. Object iteration order is not guaranteed.
//

// Functions Basics
// 1. Function declaration
// 2. Function expression
// 3. Arrow function
// 4. IIFE (Immediately Invoked Function Expression)
// 5. Default parameters
// 6. Rest parameters
// 7. Math.max() spreading
//
// Advanced Functions
// 1. Scope chain
// 2. Call back function
//    - How everything is a callback, dom events (eg)
//    - Anonymous functions
// 4. Closure
// 5. Currying
// 8. Why are functions first class citizens in JS?
//
// Nextup this keyword

// object iteration order is not guaranteed, in JS
const obj = { 2: 'two', 1: 'one', b: 'bee', a: 'ay' };
for (const key in obj) {
	console.log(key); // 1, 2, a, b
}
console.log(Object.keys(obj)); // ['1', '2', 'a', 'b']

// Function basics
// console.log(functionDeclaration()); // JS wont complain
try {
	sfeoaiuraeow; // this throws an error, stops the execution in this execution block
	console.log(functionExpression()); // this also throws an error
} catch (error) {
	console.log('ERROR', error);
}

// hoisting, a function declaration can be called before it is declared
function functionDeclaration() {
	console.log('function declaration');
}

const functionExpression = function () {
	console.log('function expression');
};

const arrowFunction = () => {
	console.log('arrow function');
};

() => {
	console.log('Anonymous function');
};

const respondHi = () => {
	console.log('I am good, How are you?');
};

const getLost = () => {
	console.log('Hey, get lost');
};

// sayHi is executing a function that is passed as an argument
const sayHi = callBackFunction => {
	console.log('Hi, How are you');
	callBackFunction();
};

sayHi(respondHi); // respondHi is a callback function
sayHi(getLost); // getlost is a callback function
sayHi(function () {
	console.log('I am anonymous, function declaration');
});
sayHi(() => {
	console.log('I am anonymous');
});

(() => {
	console.log('IIFE');
})();
(function () {
	console.log('IIFE');
})();

// default parameters
// only when a paramenter is undefined, it defaults to the default value
const add = (a = 0, b = 0) => {
	console.log({ a, b });
	return a + b;
};

console.log(add(1)); // defaults to zero
console.log(add(1, null)); // null is used
console.log(add(1, 'string')); // string is used

// rest parameters
const addAll = (...rest) => {
	let restSum = 0;
	for (let idx = 0; idx < rest.length; idx++) {
		restSum += rest[idx];
	}
	return restSum;
};

console.log(addAll(1, 2, 3, 4, 5, 6)); // 21
console.log(addAll(...[1, 2, 3, 4, 5, 6])); // 21

console.log(Math.max(1, 200, 3)); // 200
console.log(Math.min(1, 200, 3)); // 1
console.log(Math.max(...[1, 2000, 3])); // 2000
console.log(Math.floor(1.2)); // 1 rounding down
console.log(Math.floor(1.9)); // 1
console.log(Math.floor(1.5)); // 1
console.log(Math.ceil(1.5)); // 2 rounding up
console.log(Math.ceil(1.2)); // 2

const functionOne = () => {
	return 1;
};

const functionTwo = () => {
	return 2;
};

const functionAdd = (a, b) => {
	console.log(a + b);
};

functionAdd(10, 20); // 30
functionAdd(functionOne(), functionTwo()); // 3

const globalVariable = 10;

// Scope chain
// variables declared in a global scope is accessible in a local scope
//
// Closure:
// variables declared inside a local scope is not accessible outside the local scope (global scope)
const outerFunction = () => {
	const outerVariable = 1;
	console.log('outer function', {
		functionAdd,
		globalVariable,
		outerVariable,
		// innerVariable, not accessible outside local scope
	});
	const innerFunction = () => {
		const innerVariable = 2;
		console.log('inner function', {
			globalVariable,
			outerVariable,
			innerVariable,
			functionAdd,
		});
	};
	return innerFunction;
};

// global scope --> outerFunction --> innerFunction

console.log(outerFunction());
console.log(outerFunction()());

const object = {
	name: 'John',
	age: 30,
	city: 'New York',
	whatsYourName: function () {
		console.log('Hey dude');
	},
};
object.whatsYourName();
// Why are functions first class citizens in JS?
// 1. Functions can be assigned to variables (function expression)
// 2. Functions can be passed as arguments to other functions
// 3. Functions can be returned from other functions ( closures )
// 4. Functions can be stored in data structures (arrays, objects)
//

const addMe = (a, b, c, d) => {
	return a + b + c + d;
};

console.log(addMe(1, 2, 3, 4)); // 10

// const addMeCurried = a => b => c => d => {
// 	return a + b + c + d;
// }
const addMeCurried = a => {
	return b => {
		return c => {
			return d => {
				return a + b + c + d;
			};
		};
	};
};
const value = addMeCurried(1)(2)(3)(4);


const iamANormalFunction = () => {
	// I am not doing anything
	return 'I am a normal function';
}
// const iamANormalFunction = () => 'I am a normal function';
