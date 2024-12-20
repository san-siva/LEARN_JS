const holidayCalendar = {
	2024: {
		jan: {
			1: 'New Year',
			14: 'Makar Sankranti / Pongal',
			26: 'Republic Day',
		},
		feb: {
			14: "Valentine's Day",
		},
		mar: {
			8: "International Women's Day",
			25: 'Holi',
		},
		apr: {
			10: 'Ram Navami',
			14: 'Ambedkar Jayanti / Tamil New Year',
			21: 'Eid al-Fitr',
		},
		may: {
			1: 'Labor Day',
			23: 'Buddha Purnima',
		},
		jun: {
			16: "Father's Day",
		},
		jul: {
			28: 'Muharram',
		},
		aug: {
			15: 'Independence Day',
			26: 'Raksha Bandhan',
			29: 'Janmashtami',
		},
		sep: {
			5: "Teachers' Day",
			17: 'Ganesh Chaturthi',
		},
		oct: {
			2: 'Gandhi Jayanti',
			20: 'Dussehra',
			31: 'Halloween',
		},
		nov: {
			12: 'Diwali',
			14: "Children's Day",
			24: 'Guru Nanak Jayanti',
		},
		dec: {
			25: 'Christmas',
			31: "New Year's Eve",
		},
	},
	2023: {
		jan: {
			1: 'New Year',
			14: 'Makar Sankranti / Pongal',
			26: 'Republic Day',
		},
		feb: {
			14: "Valentine's Day",
		},
		mar: {
			7: 'Holi',
			8: "International Women's Day",
		},
		apr: {
			4: 'Mahavir Jayanti',
			22: 'Eid al-Fitr',
		},
		may: {
			1: 'Labor Day',
			5: 'Buddha Purnima',
		},
		jun: {
			18: "Father's Day",
		},
		jul: {
			19: 'Muharram',
		},
		aug: {
			15: 'Independence Day',
			30: 'Raksha Bandhan',
		},
		sep: {
			5: "Teachers' Day",
			19: 'Ganesh Chaturthi',
		},
		oct: {
			2: 'Gandhi Jayanti',
			24: 'Dussehra',
			31: 'Halloween',
		},
		nov: {
			13: 'Diwali',
			14: "Children's Day",
			27: 'Guru Nanak Jayanti',
		},
		dec: {
			25: 'Christmas',
			31: "New Year's Eve",
		},
	},
	2022: {
		jan: {
			1: 'New Year',
			14: 'Makar Sankranti / Pongal',
			26: 'Republic Day',
		},
		feb: {
			14: "Valentine's Day",
		},
		mar: {
			18: 'Holi',
			8: "International Women's Day",
		},
		apr: {
			10: 'Ram Navami',
			14: 'Ambedkar Jayanti / Tamil New Year',
			22: 'Good Friday',
		},
		may: {
			1: 'Labor Day',
			16: 'Buddha Purnima',
		},
		jun: {
			19: "Father's Day",
		},
		jul: {
			9: 'Eid al-Adha',
		},
		aug: {
			15: 'Independence Day',
			11: 'Raksha Bandhan',
			18: 'Janmashtami',
		},
		sep: {
			5: "Teachers' Day",
			2: 'Ganesh Chaturthi',
		},
		oct: {
			2: 'Gandhi Jayanti',
			4: 'Dussehra',
			31: 'Halloween',
		},
		nov: {
			24: 'Diwali',
			14: "Children's Day",
			8: 'Guru Nanak Jayanti',
		},
		dec: {
			25: 'Christmas',
			31: "New Year's Eve",
		},
	},
	2021: {
		jan: {
			1: 'New Year',
			14: 'Makar Sankranti / Pongal',
			26: 'Republic Day',
		},
		feb: {
			14: "Valentine's Day",
		},
		mar: {
			29: 'Holi',
			8: "International Women's Day",
		},
		apr: {
			13: 'Ram Navami',
			14: 'Ambedkar Jayanti / Tamil New Year',
			2: 'Good Friday',
		},
		may: {
			1: 'Labor Day',
			26: 'Buddha Purnima',
		},
		jun: {
			20: "Father's Day",
		},
		jul: {
			20: 'Eid al-Adha',
		},
		aug: {
			15: 'Independence Day',
			22: 'Raksha Bandhan',
			30: 'Janmashtami',
		},
		sep: {
			5: "Teachers' Day",
			10: 'Ganesh Chaturthi',
		},
		oct: {
			2: 'Gandhi Jayanti',
			15: 'Dussehra',
			31: 'Halloween',
		},
		nov: {
			4: 'Diwali',
			14: "Children's Day",
			19: 'Guru Nanak Jayanti',
		},
		dec: {
			25: 'Christmas',
			31: "New Year's Eve",
		},
		aksharaMonth: 'All year',
	},
};

// Object accessing
// bracket notation
// . notation

// I want the holidays for the month jan, dec for the year 2021
// const jan = holidayCalendar[2021].jan;
// const nov = holidayCalendar[2021].nov;
// const dec = holidayCalendar[2021].dec;
// const aksharaMonth = holidayCalendar[2021].aksharaMonth;

// Object Destructuring
const { jan, nov, dec, aksharaMonth: akshraMonth2021 } = holidayCalendar[2021];
const { aksharaMonth: aksharaMonth2023 = ['0', '1'] } = holidayCalendar[2023];
console.log({ jan, nov, dec, akshraMonth2021, aksharaMonth2023 });

// Object iteration
const holidayDaysInDec = Object.keys(dec); // [ '25', '31' ]
console.log(holidayDaysInDec);

const holidaysInDec = Object.values(dec); // [ 'Christmas', "New Year's Eve" ]
console.log(holidaysInDec);

const holidayEntriesInDec = Object.entries(dec); // [ [ '25', 'Christmas' ], [ '31', "New Year's Eve" ] ]
console.log(holidayEntriesInDec);

// Shallow cloning
//      variable = value assignment
const decUpdated = { ...dec, 25: 'Xmas' };
// decUpdated['25'] = 'Xmas';
console.log(decUpdated);

const object1 = { a: 1, b: 2, c: 3 };
const object2 = { b: 20, c: 9, d: 4 };

console.log({ ...object1, ...object2 }); // { a: 1, b: 20, c: 9, d: 4 }
//  b and c in object 1 are overwritten by b and c in object 2
console.log({ ...object2, ...object1 }); // { b: 2, c: 3, d: 4, a: 1 }
console.log({ ...object2, ...object1, b: 100 });

// Array destucturing
const arr = [1, 2, 3, 4];
// const [first, second, third, fourth] = arr;
// console.log({ first, second, third, fourth }); // { first: 1, second: 2, third: 3, fourth: 4 }
// const [first, second, ...rest] = arr;
// console.log({ first, second, rest }); // { first: 1, second: 2, rest: [ 3, 4 ] }
//
const [first, _, third, fourth] = arr; // we are skipping the second element declaration
console.log({ first, third, fourth }); // { first: 1, third: 3, fourth: 4 }

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];

console.log([100, ...array1, 200, ...array2, 3000]); // [ 100, 1, 2, 3, 4, 200, 5, 6, 7, 8, 3000 ]

const genericFunction = (a, b, c = null, d = 'Default', ...restOfTheArgs) => {
	console.log({ a, b, c, d, restOfTheArgs });
};

genericFunction(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // { a: 1, b: 2, c: 3, d: 4, restOfTheArgs: [ 5, 6, 7, 8, 9, 10 ] }
genericFunction(1, 2);
