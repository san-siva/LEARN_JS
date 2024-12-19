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

//EXCERCISE :1
// const getSuperHeroPartner = (superhero) => {
// 	if (!superheroDatabase[superhero]) {
// 		return "No partner found";
// 	  }
//   return superheroDatabase[superhero].partner

//   // return the partner of the superhero
//   // if the superhero has no partner, return 'No partner'
// };
// console.log(getSuperHeroPartner("batman")); // should output 'No partner'
// console.log(getSuperHeroPartner("superman")); // should output 'Lois Lane'
// console.log(getSuperHeroPartner("wonderwoman")); // should output 'No partner'

//EXERSICE 1
console.log("..............EXERCISE 1.............");
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

//EXERSICE 2
console.log("..............EXERCISE 2.............");

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

//EXERSICE 3

console.log("..............EXERCISE 3.............");

// ?? Hint: you can use turnary operator to check if the value is null, undefined, or missing
const getHeroPlanet = (superhero) => {
  return superheroDatabase[superhero]
    ? superheroDatabase[superhero]?.planet
    : "No planet";
  // return the planet of the superhero
  // if the superhero has no planet, return 'No planet'
};
console.log(getHeroPlanet("batman")); // should output "Earth"
console.log(getHeroPlanet("superman")); // should output true
console.log(getHeroPlanet("wonderwoman")); // should output 'No planet'
console.log(getHeroPlanet("loferMan")); // should output false
console.log(getHeroPlanet("deadMan")); // should output 'No planet'
console.log(getHeroPlanet("undeadMan")); // should output 'No planet'

//EXERSICE 4

console.log("..............EXERCISE 4.............");

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
console.log(getHeroStrength("undeadMan")); // should output 'No strength'

//EXERSICE 5

console.log("..............EXERCISE 5.............");

const getSideKickStrength = (superhero) => {
  const sideKick = superheroDatabase[superhero]?.sidekick ?? "No sidekick";
  const sideKickStrength =
    sideKick?.powerStats?.strength ??
    "No strength";

  return superheroDatabase[superhero]
    ? sideKickStrength ||
        sideKickStrength === undefined ||
        sideKickStrength === null
    : "no";
};

// return the strength of the sidekick of the superhero
// if the superhero has no sidekick, return 'No sidekick'
// if the sidekick has no strength, return 'No strength'

console.log(getSideKickStrength("batman")); // should output 50
console.log(getSideKickStrength("superman")); // should output 'No sidekick'
console.log(getSideKickStrength("wonderwoman")); // should output 'No sidekick'
console.log(getSideKickStrength("loferMan")); // should output false
console.log(getSideKickStrength("deadMan")); // should output 0
console.log(getSideKickStrength("undeadMan")); // should output null
