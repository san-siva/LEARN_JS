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

Access the following properties from the `superheroDatabase` object:

```js
const superManStrength = 0;
console.log(superManStrength); // should output 100

const superManWierdWeekness = '';
console.log(superManWierdWeekness); // should output 'Kryptonite'

const batmanWierdWeekness = null;
console.log(batmanWeekness); // should output null
```

Complete the following functions:

```js
const getSideKickPowerStats = superhero => {
	// return the power stats of the sidekick of the superhero
	// if the superhero has no sidekick, return default power stats (strength: 0, speed: 0, intelligence: 0)
};
console.log(getSideKickPowerStats('batman')); // should output { strength: 50, speed: 65, intelligence: 70 }
console.log(getSideKickPowerStats('superman')); // "No sidekick found for [superhero]"
```

```js
const getSuperHeroPartner = superhero => {
	// return the partner of the superhero
	// if the superhero has no partner, return 'No partner'
};
console.log(getSuperHeroPartner('batman')); // should output 'No partner'
console.log(getSuperHeroPartner('superman')); // should output 'Lois Lane'
console.log(getSuperHeroPartner('wonderwoman')); // should output 'No partner'
```

```js
const printHeroMetaData = superhero => {
	// return "Alias: Bruce Wayne, Base: Gotham, Sidekick: Robin"
};
console.log(printHeroMetaData('batman')); // should output "Alias: Bruce Wayne, Base: Gotham, Sidekick: Robin"
console.log(printHeroMetaData('superman')); // should output "Alias: Clark Kent, Base: Metropolis, Sidekick: No sidekick"
console.log(printHeroMetaData('wonderwoman')); // should output "Hero not found"
```

```js
const getHeroPlanet = superhero => {
	// return the planet of the superhero
	// if the superhero has no planet, return 'No planet'
};
console.log(getHeroPlanet('batman')); // should output true
console.log(getHeroPlanet('superman')); // should output 'Earth'
console.log(getHeroPlanet('wonderwoman')); // should output 'No planet'
console.log(getHeroPlanet('loferMan')); // should output false
console.log(getHeroPlanet('deadMan')); // should output 'No planet'
console.log(getHeroPlanet('undeadMan')); // should output 'No planet'
```

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

```js
const getSideKickStrength = superhero => {
	// return the strength of the sidekick of the superhero
	// if the superhero has no sidekick, return 'No sidekick'
	// if the sidekick has no strength, return 'No strength'
};

console.log(getSideKickStrength('batman')); // should output 50
console.log(getSideKickStrength('superman')); // should output 'No sidekick'
console.log(getSideKickStrength('wonderwoman')); // should output 'No sidekick'
console.log(getSideKickStrength('loferMan')); // should output false
console.log(getSideKickStrength('deadMan')); // should output 0
console.log(getSideKickStrength('undeadMan')); // should output null
```

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

## Next up
- Object iteration, (getTopHeroesByStat)
