const users = [
	{
		id: 1,
		name: "Даниэль",
		surname: "Мамин",
		patronymic: "Ильдарович",
		email: "dm@mail.com",
		password: "12345678",
		cars: [
			{
				id: 1,
				brand: "Audi",
				name: "A5",
				history: [],
				result: null,
			},
			{
				id: 2,
				brand: "Volkswagen",
				name: "POLO",
				history: [],
				result: null,
			}
		],
		entity: false
	},
	{
		id: 2,
		name: "Артем",
		surname: "Есупов",
		patronymic: "Алексеевич",
		email: "ae@mail.com",
		password: "12345678",
		entity: true
	},
	{
		id: 3,
		name: "Михаил",
		surname: "Орлов",
		patronymic: "Алексеевич",
		email: "mo@mail.com",
		password: "12345678",
		entity: true
	},
	{
		id: 4,
		name: "Дмитрий",
		surname: "Вернов",
		patronymic: "Артемович",
		email: "dv@mail.com",
		password: "12345678",
		cars: [],
		entity: false
	},
];

export default users;