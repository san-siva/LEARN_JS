## Turnary operator

1. represent this as ternary operator

```js
const isAksharaPretty = true;
let result;

if (isAksharaPretty) {
	result = 'Akshara is pretty';
} else {
	result = 'Are you sure you are not blind?';
}
```

Answer

```js
console.log("..............Exersice 1.............");
const result = (isAksharaPretty) =>
	
  isAksharaPretty ? "Akshara is pretty" : "Are you sure you are not blind?";
console.log(result(true));
```

2. represent this as ternary operator

```js
const whatIsShe = (isSheMySoulMate, isSheMyGirlFriend, isSheMyWify) => {
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
console.log(whatIsShe(false, false, true)); // "Wify"
console.log(whatIsShe(false, true, false)); // "Girlfriend"
console.log(whatIsShe(false, true, true)); // "Wify"
console.log(whatIsShe(true, false, false)); // "Soulmate"
console.log(whatIsShe(true, false, true)); // "Wify"
console.log(whatIsShe(true, true, false)); // "Soulmate and girlfriend"
console.log(whatIsShe(true, true, true)); // "Soulmate, girlfriend and wify"
```

Answer

```js

```

## Object Homework

```js
const superheroDatabase = {
	superman: {
		'Weird+Alias': 'Clark Kent',
		powerStats: {
			Strength: 100,
			Speed: 99,
			Intelligence: 85,
		},
		'wierd weakness': 'Kryptonite',
		sidekick: null,
		partner: 'Lois Lane',
		base: {
			city: 'Metropolis',
			country: 'USA',
			coordinates: {
				latitude: 38.8951,
				longitude: -77.0364,
			},
		},
		planet: true,
	},
	batman: {
		'Weird+Alias': 'Bruce Wayne',
		powerStats: {
			strength: 70,
			speed: 80,
			intelligence: 100,
		},
		'wierd weakness': null,
		partner: '',
		sidekick: {
			name: 'Robin',
			powerStats: {
				strength: 50,
				speed: 65,
				intelligence: 70,
			},
		},
		base: {
			city: 'Gotham',
			country: 'USA',
			coordinates: {
				latitude: 40.7128,
				longitude: -74.006,
			},
		},
		planet: 'Earth',
	},
	loferMan: {
		planet: false,
		sidekick: {
			powerStats: {
				strength: false,
			},
		},
	},
	deadMan: {
		planet: null,
		sidekick: {
			powerStats: {
				strength: 0,
			},
		},
	},
	undeadMan: {
		planet: undefined,
		sidekick: {
			powerStats: {
				strength: null,
			},
		},
	},
};
```

3. Access the following properties from the `superheroDatabase` object:

```js
const superManStrength = 0;
console.log(superManStrength); // should output 100

const superManWierdWeekness = '';
console.log(superManWierdWeekness); // should output 'Kryptonite'

const batmanWierdWeekness = null;
console.log(batmanWeekness); // should output null
```

Answer

```js
superheroDatabase[superManStrength]
```

4. Complete the following function

```js
const getSideKickPowerStats = superhero => {
	// return the power stats of the sidekick of the superhero
	// if the superhero has no sidekick, return default power stats (strength: 0, speed: 0, intelligence: 0)
	return superheroDatabase[superhero].sidekick
		? superheroDatabase[superhero].sidekick.powerStats
		: `No sidekick found for ${superhero}`;
};
console.log(getSideKickPowerStats('batman')); // should output { strength: 50, speed: 65, intelligence: 70 }
console.log(getSideKickPowerStats('superman')); // "No sidekick found for [superhero]"
```

Answer

```js
console.log('..............QUESTION 4.............');
const getSuperHeroPartner = superhero => {
	return superheroDatabase[superhero]?.partner
		? superheroDatabase[superhero].partner
		: `No partner found for ${superhero}`;
	// return the partner of the superhero
	// if the superhero has no partner, return 'No partner'
};
console.log(getSuperHeroPartner('batman')); // should output 'No partner'
console.log(getSuperHeroPartner('superman')); // should output 'Lois Lane'
console.log(getSuperHeroPartner('wonderwoman')); // should output 'No partner'
```

5. Complete the following function

```js
const getSuperHeroPartner = superhero => {
	// return the partner of the superhero
	// if the superhero has no partner, return 'No partner'
};
console.log(getSuperHeroPartner('batman')); // should output 'No partner'
console.log(getSuperHeroPartner('superman')); // should output 'Lois Lane'
console.log(getSuperHeroPartner('wonderwoman')); // should output 'No partner'
```

Answer

```js
console.log('..............QUESTION 5.............');

const printHeroMetaData = superhero => {
	// return "Alias: Bruce Wayne, Base: Gotham, Sidekick: Robin"
	const Alias = superheroDatabase[superhero]?.['Weird+Alias'] || 'no output';
	const Base = superheroDatabase[superhero]?.base?.city || ' no output ';
	const Sidekick =
		superheroDatabase[superhero]?.sidekick?.name || 'No sidekick';

	return superheroDatabase[superhero]
		? `Alias:${Alias}, Base:${Base}, Sidekick:${Sidekick}`
		: `Hero Not found `;
};
console.log(printHeroMetaData('batman')); // should output "Alias: Bruce Wayne, Base: Gotham, Sidekick: Robin"
console.log(printHeroMetaData('superman')); // should output "Alias: Clark Kent, Base: Metropolis, Sidekick: No sidekick"
console.log(printHeroMetaData('wonderwoman')); // should output "Hero not found"
```

6. Complete the following function

```js
const printHeroMetaData = superhero => {
	// return "Alias: Bruce Wayne, Base: Gotham, Sidekick: Robin"
};
console.log(printHeroMetaData('batman')); // should output "Alias: Bruce Wayne, Base: Gotham, Sidekick: Robin"
console.log(printHeroMetaData('superman')); // should output "Alias: Clark Kent, Base: Metropolis, Sidekick: No sidekick"
console.log(printHeroMetaData('wonderwoman')); // should output "Hero not found"
```

Answer

```js
console.log('..............QUESTION 6.............');

// ?? Hint: you can use turnary operator to check if the value is null, undefined, or missing
const getHeroPlanet = superhero => {
	return superheroDatabase[superhero]
		? superheroDatabase[superhero]?.planet
		: 'No planet';
	// return the planet of the superhero
	// if the superhero has no planet, return 'No planet'
};
console.log(getHeroPlanet('batman')); // should output "Earth"
console.log(getHeroPlanet('superman')); // should output true
console.log(getHeroPlanet('wonderwoman')); // should output 'No planet'
console.log(getHeroPlanet('loferMan')); // should output false
console.log(getHeroPlanet('deadMan')); // should output 'No planet'
console.log(getHeroPlanet('undeadMan')); // should output 'No planet'
```

7. Complete the following function

```js
// ?? Hint: you can use turnary operator to check if the value is null, undefined, or missing
const getHeroPlanet = superhero => {
	// return the planet of the superhero
	// if the superhero has no planet, return 'No planet'
};
console.log(getHeroPlanet('batman')); // should output "Earth"
console.log(getHeroPlanet('superman')); // should output true
console.log(getHeroPlanet('wonderwoman')); // should output 'No planet'
console.log(getHeroPlanet('loferMan')); // should output false
console.log(getHeroPlanet('deadMan')); // should output 'No planet'
console.log(getHeroPlanet('undeadMan')); // should output 'No planet'
```

Answer

```js
console.log('..............QUESTION 7.............');

const getHeroStrength = superhero => {
	const strength = superheroDatabase[superhero]?.powerStats?.Strength;
	return strength ||
		superhero === 0 ||
		superhero === null ||
		superhero === false
		? strength
		: 'No Strength';
	// return the strength of the superhero
	// if the superhero has no strength, return 'No strength'
};
console.log(getHeroStrength('batman')); // should output 70
console.log(getHeroStrength('superman')); // should output 100
console.log(getHeroStrength('wonderwoman')); // should output 'No strength'
console.log(getHeroStrength('loferMan')); // should output 'No strength'
console.log(getHeroStrength('deadMan')); // should output 'No strength'
console.log(getHeroStrength('undeadMan')); // should output 'No strength'

```

8. Complete the following function

```js
const getHeroStrength = superhero => {
	// return the strength of the superhero
	// if the superhero has no strength, return 'No strength'
};
console.log(getHeroStrength('batman')); // should output 70
console.log(getHeroStrength('superman')); // should output 100
console.log(getHeroStrength('wonderwoman')); // should output 'No strength'
console.log(getHeroStrength('loferMan')); // should output 'No strength'
console.log(getHeroStrength('deadMan')); // should output 'No strength'
console.log(getHeroStrength('undeadMan')); // should output 'No strength'
```

Answer

```js
console.log('..............QUESTION 8.............');

const getSideKickStrength = superhero => {
	return typeof superheroDatabase[superhero]?.sidekick === 'object'
		? (superheroDatabase[superhero]?.sidekick?.powerStats?.Strength ??
				'No sidekick Power')
		: 'No sidekick';

};

// return the strength of the sidekick of the superhero
// if the superhero has no sidekick, return 'No sidekick'
// if the sidekick has no strength, return 'No strength'

console.log(getSideKickStrength('batman')); // should output 50
console.log(getSideKickStrength('superman')); // should output 'No sidekick Power'
console.log(getSideKickStrength('wonderwoman')); // should output 'No sidekick'
console.log(getSideKickStrength('loferMan')); // should output false
console.log(getSideKickStrength('deadMan')); // should output 0
console.log(getSideKickStrength('undeadMan')); // should output 'No sidekick Power'
```

9. Complete the following function

```js
console.log('..............QUESTION 9.............')
const getSideKickStrength = superhero => {

	// return the strength of the sidekick of the superhero
	// if the superhero has no sidekick, return 'No sidekick'
	// if the sidekick has no strength, return 'No strength'
};

console.log(getSideKickStrength('batman')); // should output 50
console.log(getSideKickStrength('superman')); // should output 'No sidekick Power'
console.log(getSideKickStrength('wonderwoman')); // should output 'No sidekick'
console.log(getSideKickStrength('loferMan')); // should output false
console.log(getSideKickStrength('deadMan')); // should output 0
console.log(getSideKickStrength('undeadMan')); // should output 'No sidekick Power'
```

Answer

```js
console.log('..............QUESTION 9.............')
const getSideKickStrengthh = superhero => {
	const sideKick =superheroDatabase[superhero]?.sidekick
	const strength =sideKick?.powerStats?.Strength
	
	return typeof sideKick === "object"
	? strength ?? 'No strength' : 'No sidekick'

	// return the strength of the sidekick of the superhero
	// if the superhero has no sidekick, return 'No sidekick'
	// if the sidekick has no strength, return 'No strength'
};

console.log(getSideKickStrengthh('batman')); // should output 50
console.log(getSideKickStrengthh('superman')); // should output No strength'
console.log(getSideKickStrengthh('wonderwoman')); // should output 'No sidekick'
console.log(getSideKickStrengthh('loferMan')); // should output false
console.log(getSideKickStrengthh('deadMan')); // should output 0
console.log(getSideKickStrengthh('undeadMan')); // should output No strength'
```

10. Complete the following function

```js
const isPlanetKnown = superhero => {
	// return true if the superhero has a known planet
	// return false if the planet is null, undefined, or missing
};
console.log(isPlanetKnown('batman')); // should output true
console.log(isPlanetKnown('superman')); // should output false
console.log(isPlanetKnown('superman')); // should output false
console.log(isPlanetKnown('loferMan')); // should output false
console.log(isPlanetKnown('deadMan')); // should output false
console.log(isPlanetKnown('undeadMan')); // should output false
```

Answer

```js
console.log('..............QUESTION 10.............')

// ?? Hint: you can use turnary operator to check if the value is null, undefined, or missing
const getHeroPlanet = (superhero) => {
  const planet = superheroDatabase[superhero]?.planet;

  return planet ? planet : "No planet";
  // return the planet of the superhero
  // if the superhero has no planet, return 'No planet'
};
console.log(getHeroPlanet("batman")); // should output "Earth"
console.log(getHeroPlanet("superman")); // should output true
console.log(getHeroPlanet("wonderwoman")); // should output 'No planet'
console.log(getHeroPlanet("loferMan")); // should output false
console.log(getHeroPlanet("deadMan")); // should output 'No planet'
console.log(getHeroPlanet("undeadMan")); // should output 'No planet'

```

11. Complete the following function

```js
const getPowerStat = (superhero, stat) => {
	// return the value of the given power stat for the superhero
	// if the stat is missing, return 0
};
console.log(getPowerStat('batman', 'strength')); // should output 70
console.log(getPowerStat('superman', 'Speed')); // should output 99
console.log(getPowerStat('wonderwoman', 'Strength')); // should output 0
console.log(getPowerStat('loferMan', 'Speed')); // should output 0
```

Answer

```js
console.log('..............QUESTION 11.............')


const getPowerStat = (superhero, stat) => {
	const heroName = superheroDatabase[superhero]
	const strength = heroName?.powerStats?.[stat]
	return strength
	? strength
	: '0'
	// return the value of the given power stat for the superhero
	// if the stat is missing, return 0
};
console.log(getPowerStat('batman', 'strength')); // should output 0
console.log(getPowerStat('superman', 'Speed')); // should output 99
console.log(getPowerStat('wonderwoman', 'Strength')); // should output 0
console.log(getPowerStat('loferMan', 'Speed')); // should output 0


```

## Next up

- Object iteration, (getTopHeroesByStat)
- Object deep and shallow copy
- Array cloneing
