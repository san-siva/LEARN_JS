const superheroDatabase = {
  superman: {
    "Weird+Alias": "Clark Kent",
    powerStats: {
      Strength: 100,
      Speed: 99,
      Intelligence: 85,
    },
    "wierd weakness": "Kryptonite",
    sidekick: null,
    partner: "Lois Lane",
    base: {
      city: "Metropolis",
      country: "USA",
      coordinates: {
        latitude: 38.8951,
        longitude: -77.0364,
      },
    },
    planet: true,
  },
  batman: {
    "Weird+Alias": "Bruce Wayne",
    powerStats: {
      Strength: 70,
      speed: 80,
      intelligence: 100,
    },
    "wierd weakness": null,
    partner: "",
    sidekick: {
      name: "Robin",
      powerStats: {
        Strength: 50,
        speed: 65,
        intelligence: 70,
      },
    },
    base: {
      city: "Gotham",
      country: "USA",
      coordinates: {
        latitude: 40.7128,
        longitude: -74.006,
      },
    },
    planet: "Earth",
  },
  loferMan: {
    planet: false,
    sidekick: {
      powerStats: {
        Strength: false,
      },
    },
  },
  deadMan: {
    planet: null,
    sidekick: {
      powerStats: {
        Strength: 0,
      },
    },
  },
  undeadMan: {
    planet: undefined,
    sidekick: {
      powerStats: {
        Strength: null,
      },
    },
  },
};
console.log(".............QUESTION 1...............");
const superManStrength = superheroDatabase.superman.powerStats.Strength;
console.log(superManStrength); // should output 100

console.log(".............QUESTION 2...............");
const superManWierdWeekness = superheroDatabase.superman["wierd weakness"];
console.log(superManWierdWeekness); // should output 'Kryptonite'

console.log(".............QUESTION 3...............");
const batmanWierdWeekness = superheroDatabase.batman["wierd weakness"];
console.log(batmanWierdWeekness); // should output null

//EXERSICE 4
console.log("............QUESTION 4...............");
const getSuperHeroPartner = (superhero) => {
  return superheroDatabase[superhero]?.partner
    ? superheroDatabase[superhero].partner
    : `No partner found for ${superhero}`;
  // return the partner of the superhero
  // if the superhero has no partner, return 'No partner'
};
console.log(getSuperHeroPartner("batman")); // should output 'No partner'
console.log(getSuperHeroPartner("superman")); // should output 'Lois Lane'
console.log(getSuperHeroPartner("wonderwoman")); // should output 'No partner'

//EXERSICE 5
console.log("..............QUESTION 5.............");

const printHeroMetaData = (superhero) => {
  // return "Alias: Bruce Wayne, Base: Gotham, Sidekick: Robin"
  const Alias = superheroDatabase[superhero]?.["Weird+Alias"] || "no output";
  const Base = superheroDatabase[superhero]?.base?.city || " no output ";
  const Sidekick =
    superheroDatabase[superhero]?.sidekick?.name || "No sidekick";

  return superheroDatabase[superhero]
    ? `Alias:${Alias}, Base:${Base}, Sidekick:${Sidekick}`
    : `Hero Not found `;
};
console.log(printHeroMetaData("batman")); // should output "Alias: Bruce Wayne, Base: Gotham, Sidekick: Robin"
console.log(printHeroMetaData("superman")); // should output "Alias: Clark Kent, Base: Metropolis, Sidekick: No sidekick"
console.log(printHeroMetaData("wonderwoman")); // should output "Hero not found"

//EXERSICE 6

console.log("............QUESTION 6...............");

// ?? Hint: you can use turnary operator to check if the value is null, undefined, or missing
const getHeroPlanett = (superhero) => {
  return superheroDatabase[superhero]
    ? superheroDatabase[superhero]?.planet
    : "No planet";
  // return the planet of the superhero
  // if the superhero has no planet, return 'No planet'
};
console.log(getHeroPlanett("batman")); // should output "Earth"
console.log(getHeroPlanett("superman")); // should output true
console.log(getHeroPlanett("wonderwoman")); // should output 'No planet'
console.log(getHeroPlanett("loferMan")); // should output false
console.log(getHeroPlanett("deadMan")); // should output 'No planet'
console.log(getHeroPlanett("undeadMan")); // should output 'No planet'

//EXERSICE 7

console.log("..............QUESTION 7.............");

const getHeroStrength = (superhero) => {
  const strength = superheroDatabase[superhero]?.powerStats?.Strength;
  return strength ||
    superhero === 0 ||
    superhero === null ||
    superhero === false
    ? strength
    : "No Strength";
  // return the strength of the superhero
  // if the superhero has no strength, return 'No strength'
};
console.log(getHeroStrength("batman")); // should output 70
console.log(getHeroStrength("superman")); // should output 100
console.log(getHeroStrength("wonderwoman")); // should output 'No strength'
console.log(getHeroStrength("loferMan")); // should output 'No strength'
console.log(getHeroStrength("deadMan")); // should output 'No strength'
console.log(getHeroStrength("undeadMan")); // should output ' No strength'

//EXERSICE 8

console.log("..............QUESTION 8.............");

const getSideKickStrength = (superhero) => {
  return typeof superheroDatabase[superhero]?.sidekick === "object"
    ? superheroDatabase[superhero]?.sidekick?.powerStats?.Strength ??
        "No sidekick Power"
    : "No sidekick";
};

// return the strength of the sidekick of the superhero
// if the superhero has no sidekick, return 'No sidekick'
// if the sidekick has no strength, return 'No strength'

console.log(getSideKickStrength("batman")); // should output 50
console.log(getSideKickStrength("superman")); // should output 'No sidekick Power'
console.log(getSideKickStrength("wonderwoman")); // should output 'No sidekick'
console.log(getSideKickStrength("loferMan")); // should output false
console.log(getSideKickStrength("deadMan")); // should output 0
console.log(getSideKickStrength("undeadMan")); // should output 'No sidekick Power'

//excersice 9
console.log("..............QUESTION 9.............");
const getSideKickStrengthh = (superhero) => {
  const sideKick = superheroDatabase[superhero]?.sidekick;
  const strength = sideKick?.powerStats?.Strength;

  return typeof sideKick === "object"
    ? strength ?? "No strength"
    : "No sidekick";

  // return the strength of the sidekick of the superhero
  // if the superhero has no sidekick, return 'No sidekick'
  // if the sidekick has no strength, return 'No strength'
};

console.log(getSideKickStrengthh("batman")); // should output 50
console.log(getSideKickStrengthh("superman")); // should output No strength'
console.log(getSideKickStrengthh("wonderwoman")); // should output 'No sidekick'
console.log(getSideKickStrengthh("loferMan")); // should output false
console.log(getSideKickStrengthh("deadMan")); // should output 0
console.log(getSideKickStrengthh("undeadMan")); // should output No strength'
//exersice 10

console.log("..............QUESTION 10.............");

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

//excersice 11
console.log("..............QUESTION 11.............");

const getPowerStat = (superhero, stat) => {
  const heroName = superheroDatabase[superhero];
  const strength = heroName?.powerStats?.[stat];
  return strength ? strength : "0";
  // return the value of the given power stat for the superhero
  // if the stat is missing, return 0
};
console.log(getPowerStat("batman", "Strength")); // should output 70
console.log(getPowerStat("superman", "Speed")); // should output 99
console.log(getPowerStat("wonderwoman", "Strength")); // should output 0
console.log(getPowerStat("loferMan", "Speed")); // should output 0

// 1. represent this as ternary operator

console.log("..............Exersice 1.............");
const answer = (isAksharaPretty) =>
  isAksharaPretty ? "Akshara is pretty" : "Are you sure you are not blind?";
console.log(answer(true));

// 2. represent this as ternary operator
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

// Answer
console.log("..............Exersice 2.............");
const result = (whatIsShe) =>
  whatIsShe
    ? isSheMySoulMate && isSheMyGirlFriend && isSheMyWify
    : isSheMySoulMate && isSheMyGirlFriend
    ? isSheMyWify
    : isSheMyGirlFriend
    ? isSheMySoulMate
    : "Are you crazy she is mine";

	console.log(whatIsShe(false, false, false)); // "Are you crazy she is mine"
	console.log(whatIsShe(false, false, true)); // "Wify"
	console.log(whatIsShe(false, true, false)); // "Girlfriend"
	console.log(whatIsShe(false, true, true)); // "Wify"
	console.log(whatIsShe(true, false, false)); // "Soulmate"
	console.log(whatIsShe(true, false, true)); // "Wify"
	console.log(whatIsShe(true, true, false)); // "Soulmate and girlfriend"
	console.log(whatIsShe(true, true, true)); // "Soulmate, girlfriend and wify"
	

	