const nestedObject = {
	Akshara: {
		EyeColor: 'Black',
		HairColor: 'Black',
		Nose: 'Big',
		ShoeSize: 5,
		Address: {
			City: 'Bangalore',
			State: 'Karnataka',
			Country: 'India',
		},
		Spouse: {
			Name: 'Santhosh', // <-- need to access this
			Address: {
				City: 'Bangalore',
				State: 'Karnataka',
				Country: 'India',
			},
		},
		Sibling: {
			Name: 'Gautham',
			Age: 0,
		},
		'Wierd+Name': 'AK47',
	},
};

// Accessing nested object properties
console.log(nestedObject.Akshara.Spouse.Name);
console.log(nestedObject.Akshara['Wierd+Name']);
console.log(nestedObject.Akshara.Spouse.Address.City);

// FOR AND
//
// null && "something" // null
// undefined && "something" // undefined
// false && "something" // false
// "" && "something" // ""
// 0 && "something" // 0
//
//
//
// statement && statement
//
// isNovember = true;
// isFriday = true;
//
// (isNovember && isFriday)
// (true && true);
// (true)
//
// isNovember = false;
// isFriday = "NO its not Friday";
//
// (isNovember && isFriday)
// (true && "NO its not Friday");
// ("NO its not Friday")
//
// true || "non empty string" || 1-n || object || ...
//
// false,
// null, undefined, "", 0
//
// FOR OR
//
// 0 || "something" // "something"
// "" || "something" // "something"
// false || "something" // "something"
// null || "something" // "something"
// undefined || "something" // "something"
// true || "something" // true
// "something" || "something else" // "something"
//
//  null || undefined || "" || 0 || false
// if (0) {
// 	this block will not execute
// }

//
// nullish coalescing operator
// everything except null and undefined, is true for ?? operator
//
//
// 0 ?? "something" // 0
// "" ?? "something" // ""
// false ?? "something" // false
// null ?? "something" // "something"
// undefined ?? "something" // "something"
// true ?? "something" // true
// "something" ?? "something else" // "something"

// const siblingsCity =
// 	(nestedObject.Akshara.Sibling.Address &&
// 		nestedObject.Akshara.Sibling.Address.City) ||
// 	'Unknown';
//
// 	undefined && nestedObject.Akshara.Sibling.Address.City

// const siblingsCity =
// 	nestedObject.Akshara.Sibling.Address ? nestedObject.Akshara.Sibling.Address.City : 'Unknown';
//

// const siblingCity = nestedObject.Akshara.Sibling.Address.City;
//																									undefined.City
// Uncaught TypeError: Cannot read property 'City' of undefined
// const siblingCity = nestedObject.Akshara.Sibling.Address?.City; // optional chaining

// const siblingCity = nestedObject?.Akshara?.Sibling?.Address?.City; // user optional chaining by default
//
// falling back to a default value
const siblingCity =
	nestedObject?.Akshara?.Sibling?.Address?.City || 'Not available';

// const siblingAge = nestedObject?.Akshara?.Sibling?.Age || 48; // 48
const siblingAge = nestedObject?.Akshara?.Sibling?.Age ?? 48; // 0

console.log(siblingAge);

