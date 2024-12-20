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

const object = {
	teacher: 'Santhosh',
	student: 'Akshara',
	spouse: 'AK47',
};

// ...args = rest operator
// it collects the remaining arguments into an array
const genericFunction = (argument1, argument2, ...args) => {
	console.log({ argument1, argument2, args });
	return 'WHy why'; // what ever is returned will be the value of the function call
};

console.log(
	genericFunction('teacher', 'student', 'spouse', 'sibling', 'parent')
);

const getValue = (key, key1) => {
	console.log({ key, key1 });
	console.log(object[key]);
};

getValue('teacher');
getValue('student');
getValue('spouse');

const month = 'November';
const day = 'Friday';
// let isNovember;
//
// if (month === 'November') {
// 	isNovember = true;
// } else {
// 	isNovember = false;
// }
// const isNovember = month === 'November';
const isNovember = month === 'November' ? 'Yes its november' : 'Hell no';

// let whatDayIsIt;
//
// if (day === "Monday") {
// 	whatDayIsIt = "Its Monday";
// } else if (day === "Tuesday") {
// 	whatDayIsIt = "Its Tuesday";
// } else if (day === "Wednesday") {
// 	whatDayIsIt = "Its Wednesday";
// } else if (day === "Thursday") {
// 	whatDayIsIt = "Its Thursday";
// } else {
// 	whatDayIsIt = "Its Friday";
// }
//
const whatDayIsIt =
	day === 'Monday'
		? 'Its Monday'
		: day === 'Tuesday'
			? 'Its Tuesday'
			: day === 'Wednesday'
				? 'Its Wednesday'
				: day === 'Thursday'
					? 'Its Thursday'
					: 'Its Friday';

for (let idx = 0; idx < 10 ? true : false; idx++) {
	console.log(idx);
}

const whatIsShe = (
    isSheMySoulMate,
    isSheMyGirlFriend,
    isSheMyWify
) => {
	let result;

	if (isSheMySoulMate && isSheMyGirlFriend && isSheMyWify) {
		result = 'Soulmate, girlfriend and wify';
	} else if (isSheMySoulMate && isSheMyGirlFriend) {
		result = 'Soulmate and girlfriend';
	} else if (isSheMyWify) {
		result = 'Wify';
	} else if (isSheMyGirlFriend) {
		result = 'Girlfriend';
	} else if (isSheMySoulMate) {
		result = 'Soulmate';
	} else {
		result = 'Are you crazy she is mine';
	}
    
    return result;
};

console.log(whatIsShe(false, false, false)); // "Are you crazy she is mine"
console.log(whatIsShe(false, false, true));  // "Wify"
console.log(whatIsShe(false, true, false));  // "Girlfriend"
console.log(whatIsShe(false, true, true));   // "Wify"
console.log(whatIsShe(true, false, false));  // "Soulmate"
console.log(whatIsShe(true, false, true));   // "Wify"
console.log(whatIsShe(true, true, false));   // "Soulmate and girlfriend"
console.log(whatIsShe(true, true, true));    // "Soulmate, girlfriend and wify"
