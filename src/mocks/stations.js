const stations = [
	{
		id: 1,
		name: "ООО «Эксперт»",
		city: "г Ростов-на-Дону",
		street: "пер Технологический",
		home: "зд 1 стр 3",
		phone: "+7 (918) 581-36-69",
		carParks: [
			{
				id: 11,
				name: "Volkswagen",
				cars: [
					{
						id: 111,
						name: "POLO",
						spareParts: [
							{
								id: 1111,
								name: "Диск тормозной, задний",
								price: 1000,
								count: 0,
							},
							{
								id: 11111,
								name: "Диск тормозной, передний",
								price: 1000,
								count: 6,
							},
							{
								id: 111111,
								name: "Щётки стеклоочистителя, комплект, передние",
								price: 500,
								count: 0,
							},
						]
					},
					{
						id: 112,
						name: "Jetta",
						spareParts: [
							{
								id: 1122,
								name: "Диск тормозной, задний",
								price: 2000,
								count: 5,
							},
							{
								id: 11222,
								name: "Диск тормозной, передний",
								price: 2000,
								count: 6,
							}
						]
					},
					{
						id: 113,
						name: "Scirocco",
						spareParts: [
							{
								id: 1133,
								name: "Диск тормозной, передний",
								price: 2200,
								count: 6,
							},
							{
								id: 11333,
								name: "Щётки стеклоочистителя, комплект, передние",
								price: 500,
								count: 3,
							},
						]
					}
				]
			},
			{
				id: 12,
				name: "Mazda",
				cars: [
					{
						id: 121,
						name: "CX-5",
						spareParts: [
							{
								id: 1211,
								name: "Фильтр воздушный",
								price: 3000,
								count: 5,
							},
							{
								id: 12111,
								name: "Пробка сливная поддона двигателя",
								price: 3000,
								count: 6,
							},
						]
					},
					{
						id: 122,
						name: "RX-7",
						spareParts: [
							{
								id: 1222,
								name: "Щётки стеклоочистителя, комплект, передние",
								price: 500,
								count: 3,
							},
							{
								id: 12222,
								name: "Свеча зажигания, 5 шт.",
								price: 7000,
								count: 5,
							},
							{
								id: 122222,
								name: "Свечи зажигания, комплект",
								price: 10000,
								count: 5,
							},
						]
					},
				]
			},
			{
				id: 13,
				name: "BMW",
				cars: [
					{
						id: 131,
						name: "i8",
						spareParts: [
							{
								id: 1311,
								name: "Щётки стеклоочистителя, комплект, передние",
								price: 2500,
								count: 3,
							},
							{
								id: 13111,
								name: "Датчик износа тормозных колодок, задний",
								price: 10000,
								count: 5,
							},
							{
								id: 131111,
								name: "Датчик износа тормозных колодок, передний",
								price: 10000,
								count: 5,
							},
						]
					},
					{
						id: 132,
						name: "X5",
						spareParts: [
							{
								id: 1322,
								name: "Фильтр воздушный",
								price: 3000,
								count: 5,
							},
							{
								id: 13222,
								name: "Жидкость тормозная 1л",
								price: 3000,
								count: 6,
							},
						]
					},
				]
			},
		],
		history: [],
		applications: [],
		idUser: 2
	},
	{
		id: 2,
		name: "ИП Орлов М.А.",
		city: "г Ростов-на-Дону",
		street: "пер Машиностроительный",
		home: "д 11",
		phone: "+7 (911) 581-36-69",
		carParks: [
			{
				id: 21,
				name: "Volkswagen",
				cars: [
					{
						id: 211,
						name: "POLO",
						spareParts: [
							{
								id: 2111,
								name: "Диск тормозной, задний",
								price: 1000,
								count: 5,
							},
							{
								id: 21111,
								name: "Диск тормозной, передний",
								price: 1000,
								count: 6,
							},
							{
								id: 211111,
								name: "Щётки стеклоочистителя, комплект, передние",
								price: 500,
								count: 3,
							},
						]
					},
					{
						id: 212,
						name: "Jetta",
						spareParts: [
							{
								id: 2122,
								name: "Диск тормозной, задний",
								price: 2000,
								count: 5,
							},
							{
								id: 21222,
								name: "Диск тормозной, передний",
								price: 2000,
								count: 6,
							}
						]
					},
					{
						id: 213,
						name: "Scirocco",
						spareParts: [
							{
								id: 2133,
								name: "Диск тормозной, передний",
								price: 2200,
								count: 6,
							},
							{
								id: 21333,
								name: "Щётки стеклоочистителя, комплект, передние",
								price: 500,
								count: 3,
							},
						]
					}
				]
			}
		],
		history: [],
		applications: [],
		idUser: 2
	},
];

export default stations;