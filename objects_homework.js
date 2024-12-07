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
