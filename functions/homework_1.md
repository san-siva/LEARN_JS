### Question 1

```js
let invocationCount = 0;
const getCurrentDate = () => {
	invocationCount++;
	if (invocationCount % 2 === 0) {
		throw new Error('Iam not going to run this time!');
	}
	const date = new Date();
	return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};
```

The above function `getCurrentDate` is a simple function that returns the current date in the format `dd/mm/yyyy`. However, the function has a bug that it throws an error every second time it is called.

Your task is to safely call the function `getCurrentDate` and log the current date to the console. If the function throws an error, you should catch the error and default to "06/06/2002"

```js
const logCurrentDate = () => {
	const todaysDate = getCurrentDate();
	return todaysDate;
};
//                                Expected outputs
console.log(logCurrentDate()); // '23/12/2024'
console.log(logCurrentDate()); // "Couldn't find today's date. Guess I'll pretend it's '06/06/2002' and celebrate with my baby.
console.log(logCurrentDate()); // '23/12/2024'
console.log(logCurrentDate()); // "Couldn't find today's date. Guess I'll pretend it's '06/06/2002' and celebrate with my baby.
```

### Question 2

You are given a function `getFirstElement` that takes an array as an argument and returns the first element of the array.

```js
const getFirstElement = arr => {
	// <-- you can only modify this line
	// -----------------------------------
	// You are not allowed to modify anything inside this block
	return arr[0] ?? 'No elements in the array';
	// -----------------------------------
};
```

Your task is to modify the function to match the following conditions:

```ts
console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement([false])); // false
console.log(getFirstElement([null])); // null
console.log(getFirstElement([])); // "No elements in the array"
console.log(getFirstElement()); // 0
```

### Question 3

Convert this into a curried function:

```js
const appendStrings = (str1, str2, str3) => {
	return `${str1} ${str2} ${str3}`;
};
console.log(appendStrings('I", "love", "you', 'Santhosh')); // "I love you Santhosh"
```

modify the above function to be a curried function that can be called like this:

```js
console.log(appendStrings('I')('love')('you')('<pause>')('Akshara')); // "I love you <pause> Akshara"
```

### Question 3 (Challenge), I should be able to send any no of arguments

You can use the internet to figure this out, (search for dynamic curring in javascript)

```js
const appendStrings = (...strings) => {
	return strings.join(' ');
};
console.log(
	appendStrings(
		'Every',
		'breath',
		'you',
		'take',
		'I',
		'will',
		'be',
		'watching',
		'you'
	)
); // "Every breath you take I will be watching you"
```

```js
console.log(
	appendStrings('There')('is')('nothing')('in')('this')('world')('I')(
		'cherish'
	)('more')('than')('you')()
);
// "There is nothing in this world I cherish more than you"
```

```js
console.log(appendStrings('Just')('Say')('You')("Won't")('Let')('Go')()); // "Just Say You Won't Let Go"
```

```js
console.log(
	appendStrings('Every')('breath')('you')('take')('Every')('move')('you')(
		'make'
	)('Every')('bond')('you')('break')('I')('will')('be')('watching')('you')()
); // Every breath you take Every move you make Every bond you break I will be watching you
```
