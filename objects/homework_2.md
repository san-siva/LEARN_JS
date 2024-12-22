Prerequisites for this homework:
Copy the following object into your code editor and use it for the following tasks.

```js
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
	},
};
```

1. Create a function that returns the holidays in a given month and year.

```js
const getHolidays = (year, month) => {
	// return the holidays in the month and year
};
console.log(getHolidays(2021, 'apr'));
// should output ['Ram Navami', 'Ambedkar Jayanti / Tamil New Year', 'Good Friday']
console.log(getHolidays(2022, 'apr')); // should output ['Ram Navami', 'Ambedkar Jayanti / Tamil New Year', 'Good Friday']
console.log(getHolidays(2023, 'apr')); // should output ['Mahavir Jayanti', 'Eid al-Fitr']
console.log(getHolidays(1997, 'apr')); // should output 'Year not found'
console.log(getHolidays(2021, 'bujji')); // should output 'Month not found'
console.log(getHolidays(2021)); // should output 'Month not valid'
console.log(getHolidays(2021, 99)); // should output 'Month not valid'
console.log(getHolidays(2021, null)); // should output 'Month not valid'
console.log(getHolidays(2021, false)); // should output 'Month not valid'
console.log(getHolidays()); // should output 'Year not valid'
console.log(getHolidays(null, false)); // should output 'Year not valid'
```

```js
//answer
console.log('..........QUESTION 1..........');

const getHolidays = (year, month) => {
	if (typeof year !== 'number') {
		return 'year not valid';
	}
	if (!holidayCalendar[year]) {
		return 'year not found';
	}

	if (!month || typeof month !== 'string') {
		return 'Month not valid';
	}
	const holidayMonth = holidayCalendar[year]?.[month];
	return holidayMonth ? Object.values(holidayMonth) : 'month not found';
};
console.log(getHolidays(2021, 'apr')); // should output ['Ram Navami', 'Ambedkar Jayanti / Tamil New Year', 'Good Friday']
console.log(getHolidays(2022, 'apr')); // should output ['Ram Navami', 'Ambedkar Jayanti / Tamil New Year', 'Good Friday']
console.log(getHolidays(2023, 'apr')); // should output ['Mahavir Jayanti', 'Eid al-Fitr']
console.log(getHolidays(1997, 'apr')); // should output 'Year not found'
console.log(getHolidays(2021, 'bujji')); // should output 'Month not found'
console.log(getHolidays(2021)); // should output 'Month not valid'
console.log(getHolidays(2021, 99)); // should output 'Month not valid'
console.log(getHolidays(2021, null)); // should output 'Month not valid'
console.log(getHolidays(2021, false)); // should output 'Month not valid'
console.log(getHolidays()); // should output 'Year not valid'
console.log(getHolidays(null, false)); // should output 'Year not valid'
```

2. Create a function that takes a year as an argument and returns the number of holidays in that year.

```js
const getHolidaysCount = year => {
	// return the number of holidays in the year
};
console.log(getHolidaysCount(2021)); // should output 24
console.log(getHolidaysCount(2022)); // should output 21
console.log(getHolidaysCount(2023)); // should output 21
console.log(getHolidaysCount(1997)); // should output 'Year not found'
console.log(getHolidaysCount(null)); // should output 'Year not valid'
console.log(getHolidaysCount(false)); // should output 'Year not valid'
console.log(getHolidaysCount()); // should output 'Year not valid'
```

```js
//QUESTION 2

console.log('..........QUESTION 2..........');
// 2. Create a function that takes a year as an argument and returns the number of holidays in that year.

const getHolidaysCount = year => {
	if (typeof year !== 'number') {
		return 'year not valid';
	}
	if (!holidayCalendar[year]) {
		return 'year not found';
	}

	let holidays = 0;
	for (let month in holidayCalendar[year]) {
		holidays += Object.values(holidayCalendar[year][month]).length;
	}
	return holidays;
};
console.log(getHolidaysCount(2024)); // should output 26
console.log(getHolidaysCount(2021)); // should output 26
console.log(getHolidaysCount(2022)); // should output 26
console.log(getHolidaysCount(2023)); // should output 24
console.log(getHolidaysCount(1997)); // should output 'Year not found'
console.log(getHolidaysCount(null)); // should output 'Year not valid'
console.log(getHolidaysCount(false)); // should output 'Year not valid'
console.log(getHolidaysCount()); // should output 'Year not valid'
```

3. Create a function that takes a year as an argument and returns the number of holidays in that year and the month with the most holidays.

```js
const getHolidaysCountAndMonth = year => {
	// return the number of holidays in the year and the month with the most holidays
};
console.log(getHolidaysCountAndMonth(2021)); // should output { count: 24, month: 'apr' }
console.log(getHolidaysCountAndMonth(2022)); // should output { count: 21, month: 'apr' }
console.log(getHolidaysCountAndMonth(2023)); // should output { count: 21, month: 'apr' }
console.log(getHolidaysCountAndMonth(1997)); // should output 'Year not found'
console.log(getHolidaysCountAndMonth(null)); // should output 'Year not valid'
console.log(getHolidaysCountAndMonth(false)); // should output 'Year not valid'
console.log(getHolidaysCountAndMonth()); // should output 'Year not valid'
```

```js

```

4. Create a function that takes years as arguments and returns the year with the most holidays.

```js
const getYearWithMostHolidays = (...years) => {
	// return the year with the most holidays
};

// 26,  26,  24
console.log(getYearWithMostHolidays(2021, 2022, 2023)); // should output 2021
// 26,  26,  24
console.log(getYearWithMostHolidays(2022, 2021, 2023)); // should output 2022

//                                  26,   24
console.log(getYearWithMostHolidays(2022, 2023)); // should output 2022
//                                  26,   24
console.log(getYearWithMostHolidays(2021, 2023)); // should output 2021
//                                  26,   24
console.log(getYearWithMostHolidays(2021, 2023, 1996)); // should output 2021
//                                  26,   24
console.log(getYearWithMostHolidays(2021, 2023, null)); // should output 2021
//                          26,   24
console.log(
	getYearWithMostHolidays(2021, 2023, null, false, undefined, 'What')
); // should output 2021
```

5. You are give a day (integer), create a function that returns the months and holidays on that day.

```js
const getHoliday = (day, year) => {
	// return the month and holiday on that day
};
console.log(getHoliday(14, 2022));
// [
//   { month: 'jan', holiday: 'Makar Sankranti / Pongal' },
//   { month: 'feb', holiday: "Valentine's Day" },
//   { month: 'apr', holiday: 'Ambedkar Jayanti / Tamil New Year' },
//   { month: 'nov', holiday: "Children's Day" }
// ]
console.log(getHoliday(15, 2021));
// [
//   { month: 'aug', holiday: 'Independence Day' },
//   { month: 'oct', holiday: 'Dussehra' }
// ]
console.log(getHoliday(301, 2023)); // day not valid
console.log(getHoliday(3, 2023)); // no holidays found
console.log(getHoliday(3, 1997)); // year not found
console.log(getHoliday(3)); // year not valid
console.log(getHoliday()); // year not valid
```

6. Destructure the `holidayCalendar` object into following variables:

- `newYear2021`
- `newYear2022`
- `newYear2023`
- `january2021`
- `january2022`
- `january2023`
- `february2021`
- `february2022`
- `february2023`
- `march2021`
- `march2022`
- `march2023`

```js
// your code here
```

7. Get list of holidays in the given year

```js
const getHolidaysInYear = year => {
	// return the holidays in the year
};

console.log(getHolidaysInYear(2023));
// [
//   "New Year (jan 1)",
//   "Makar Sankranti / Pongal (jan 14)",
//   "Republic Day (jan 26)",
//   "Valentine's Day (feb 14)",
//   "Holi (mar 7)",
//   "International Women's Day (mar 8)",
//   "Mahavir Jayanti (apr 4)",
//   "Eid al-Fitr (apr 22)",
//   "Labor Day (may 1)",
//   "Buddha Purnima (may 5)",
//   "Father's Day (jun 18)",
//   "Muharram (jul 19)",
//   "Independence Day (aug 15)",
//   "Raksha Bandhan (aug 30)",
//   "Teachers' Day (sep 5)",
//   "Ganesh Chaturthi (sep 19)",
//   "Gandhi Jayanti (oct 2)",
//   "Dussehra (oct 24)",
//   "Halloween (oct 31)",
//   "Diwali (nov 13)",
//   "Children's Day (nov 14)",
//   "Guru Nanak Jayanti (nov 27)",
//   "Christmas (dec 25)",
//   "New Year's Eve (dec 31)"
// ]
console.log(getHolidaysInYear(1997)); // year not found
console.log(getHolidaysInYear()); // year not valid
```
