let variableA = 10; // primitive, data type
let variableB = variableA; // variableB gets a copy of variableA
variableA = 20; // even when variableA is changed, variableB remains the same

console.log(variableA); // 20
console.log(variableB); // 10

let objectA = { akshara: 'gf' }; // object, reference type
let objectB = objectA; // objectB gets a reference (pointer) to objectA
objectA.akshara = 'wife';

console.log(objectA); // { 'akshara': 'wife' }
console.log(objectB); // { 'akshara': 'wife' }

// 1. Primitive data types (null, undefined, string, number, boolean, symbol)
// 2. Objects are everything else (arrays, functions, objects, regex, classes, etc.)


// shallow copy
//
let janInventory = { apple: 2, banana: 3, vegies: { carrot: 4, potato: 5 } };
let febInventory = { ...janInventory }; // shallow copy

febInventory.apple = 5; // this will not change janInventory
febInventory.vegies.carrot = "NOT_AVAILABLE"; // this will change janInventory as well

console.log({ janInventory, febInventory });
/*
 *
 * {
 *  janInventory: { apple: 2, banana: 3, vegies: { carrot: 'NOT_AVAILABLE', potato: 5 } },
 *  febInventory: { apple: 5, banana: 3, vegies: { carrot: 'NOT_AVAILABLE', potato: 5 } }
 *  }
 */

// deep copy
//
let week1 = { apple: 2, banana: 3, vegies: { carrot: 4, potato: 5 } };
let week2 = JSON.parse(JSON.stringify(week1)); // deep copy

week2.apple = 5; // this will not change week1
week2.vegies.carrot = 'NOT_AVAILABLE'; // this will not change week1

console.log({ week1, week2 });

const stringifiedWeek1 = JSON.stringify(week1, null, 2);
console.log('Stringified', stringifiedWeek1);
console.log('Parsed', JSON.parse(stringifiedWeek1));

// Webapp (object) -> HTTP req to server (JSON)
// server (JSON) -> Webapp (object)

// 1. JSON.stringify() -> Converts object to JSON string
// 2. string is a primitive data type
// 3. JSON.parse() -> Converts JSON string to object

const jsonObject = {
	apple: 2,
	parse: function () {
		console.log('parse function');
	},
};

jsonObject.parse();


const array1 = [1, 2, 3, 4, 5, { akshara: 'wife' }];
// const array2 = array1;
// const array2 = [...array1]; // shallow copy
// const array2 = array1.slice(); // shallow copy
const array2 = JSON.parse(JSON.stringify(array1)); // deep copy

array1.push(6);
array1[5].akshara = 'gf';
console.log({array1, array2});


