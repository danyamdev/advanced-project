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
				id: "1cp",
				name: "Volkswagen",
				cars: [
					{
						id: "1c",
						name: "POLO",
						spareParts: [
							{
								id: "1sp",
								name: "Диск тормозной, задний",
								price: 1000,
								count: 0,
							},
							{
								id: "2sp",
								name: "Диск тормозной, передний",
								price: 1000,
								count: 6,
							},
							{
								id: "3sp",
								name: "Щётки стеклоочистителя, комплект, передние",
								price: 500,
								count: 0,
							},
						]
					},
					{
						id: "2c",
						name: "Jetta",
						spareParts: [
							{
								id: "1sp",
								name: "Диск тормозной, задний",
								price: 2000,
								count: 5,
							},
							{
								id: "2sp",
								name: "Диск тормозной, передний",
								price: 2000,
								count: 6,
							}
						]
					},
					{
						id: "3c",
						name: "Scirocco",
						spareParts: [
							{
								id: "1sp",
								name: "Диск тормозной, передний",
								price: 2200,
								count: 6,
							},
							{
								id: "2sp",
								name: "Щётки стеклоочистителя, комплект, передние",
								price: 500,
								count: 3,
							},
						]
					}
				]
			},
			{
				id: "2cp",
				name: "Mazda",
				cars: [
					{
						id: "1c",
						name: "CX-5",
						spareParts: [
							{
								id: "1sp",
								name: "Фильтр воздушный",
								price: 3000,
								count: 5,
							},
							{
								id: "2sp",
								name: "Пробка сливная поддона двигателя",
								price: 3000,
								count: 6,
							},
						]
					},
					{
						id: "2c",
						name: "RX-7",
						spareParts: [
							{
								id: "1sp",
								name: "Щётки стеклоочистителя, комплект, передние",
								price: 500,
								count: 3,
							},
							{
								id: "2sp",
								name: "Свеча зажигания, 5 шт.",
								price: 7000,
								count: 5,
							},
							{
								id: "3sp",
								name: "Свечи зажигания, комплект",
								price: 10000,
								count: 5,
							},
						]
					},
				]
			},
			{
				id: "3cp",
				name: "BMW",
				cars: [
					{
						id: "1c",
						name: "i8",
						spareParts: [
							{
								id: "1sp",
								name: "Щётки стеклоочистителя, комплект, передние",
								price: 2500,
								count: 3,
							},
							{
								id: "2sp",
								name: "Датчик износа тормозных колодок, задний",
								price: 10000,
								count: 5,
							},
							{
								id: "3sp",
								name: "Датчик износа тормозных колодок, передний",
								price: 10000,
								count: 5,
							},
						]
					},
					{
						id: "2c",
						name: "X5",
						spareParts: [
							{
								id: "1sp",
								name: "Фильтр воздушный",
								price: 3000,
								count: 5,
							},
							{
								id: "2sp",
								name: "Жидкость тормозная 1л",
								price: 3000,
								count: 6,
							},
						]
					},
					{
						id: "2c",
						name: "X6",
						spareParts: [
							{
								id: "1sp",
								name: "Фильтр воздушный",
								price: 3000,
								count: 5,
							},
							{
								id: "2sp",
								name: "Жидкость тормозная 1л",
								price: 3000,
								count: 6,
							},
							{
								id: "3sp",
								name: "Щётки стеклоочистителя, комплект, передние",
								price: 1500,
								count: 3,
							},
							{
								id: "4sp",
								name: "Датчик износа тормозных колодок, задний",
								price: 5000,
								count: 5,
							},
							{
								id: "5sp",
								name: "Датчик износа тормозных колодок, передний",
								price: 5000,
								count: 5,
							},
							{
								id: "6sp",
								name: "Диск тормозной, задний",
								price: 3000,
								count: 5,
							}
						]
					},
				]
			},
		],
		history: [],
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
				id: "1cp",
				name: "Volkswagen",
				cars: [
					{
						id: "1c",
						name: "POLO",
						spareParts: [
							{
								id: "1sp",
								name: "Диск тормозной, задний",
								price: 1000,
								count: 5,
							},
							{
								id: "2sp",
								name: "Диск тормозной, передний",
								price: 1000,
								count: 6,
							},
							{
								id: "3sp",
								name: "Щётки стеклоочистителя, комплект, передние",
								price: 500,
								count: 3,
							},
						]
					},
					{
						id: "2c",
						name: "Jetta",
						spareParts: [
							{
								id: "1sp",
								name: "Диск тормозной, задний",
								price: 2000,
								count: 5,
							},
							{
								id: "2sp",
								name: "Диск тормозной, передний",
								price: 2000,
								count: 6,
							}
						]
					},
					{
						id: "3c",
						name: "Scirocco",
						spareParts: [
							{
								id: "1sp",
								name: "Диск тормозной, передний",
								price: 2200,
								count: 6,
							},
							{
								id: "2sp",
								name: "Щётки стеклоочистителя, комплект, передние",
								price: 500,
								count: 3,
							},
						]
					}
				]
			},
			{
				id: "2cp",
				name: "Volvo",
				cars: [
					{
						id: "1c",
						name: "C70 кабрио II",
						spareParts: [
							{
								id: "1sp",
								name: "Фильтр воздушный",
								price: 3000,
								count: 0,
							},
							{
								id: "2sp",
								name: "Пробка сливная поддона двигателя",
								price: 3000,
								count: 6,
							},
						]
					},
					{
						id: "2c",
						name: "V60 универсал",
						spareParts: [
							{
								id: "1sp",
								name: "Щётки стеклоочистителя, комплект, передние",
								price: 500,
								count: 3,
							},
							{
								id: "2sp",
								name: "Свеча зажигания, 5 шт.",
								price: 7000,
								count: 5,
							},
							{
								id: "3sp",
								name: "Свечи зажигания, комплект",
								price: 10000,
								count: 5,
							},
						]
					},
				]
			},
			{
				id: "3cp",
				name: "Acura",
				cars: [
					{
						id: "1c",
						name: "RDX II",
						spareParts: [
							{
								id: "1sp",
								name: "Щётки стеклоочистителя, комплект, передние",
								price: 2500,
								count: 3,
							},
							{
								id: "2sp",
								name: "Датчик износа тормозных колодок, задний",
								price: 10000,
								count: 5,
							},
							{
								id: "3sp",
								name: "Датчик износа тормозных колодок, передний",
								price: 10000,
								count: 5,
							},
						]
					},
					{
						id: "2c",
						name: "ZDX",
						spareParts: [
							{
								id: "1sp",
								name: "Фильтр воздушный",
								price: 3000,
								count: 5,
							},
							{
								id: "2sp",
								name: "Жидкость тормозная 1л",
								price: 3000,
								count: 6,
							},
						]
					},
					{
						id: "2c",
						name: "TLX",
						spareParts: [
							{
								id: "1sp",
								name: "Фильтр воздушный",
								price: 3000,
								count: 5,
							},
							{
								id: "2sp",
								name: "Жидкость тормозная 1л",
								price: 3000,
								count: 6,
							},
							{
								id: "3sp",
								name: "Щётки стеклоочистителя, комплект, передние",
								price: 1500,
								count: 3,
							},
							{
								id: "4sp",
								name: "Датчик износа тормозных колодок, задний",
								price: 5000,
								count: 5,
							},
							{
								id: "5sp",
								name: "Датчик износа тормозных колодок, передний",
								price: 5000,
								count: 5,
							},
							{
								id: "6sp",
								name: "Диск тормозной, задний",
								price: 3000,
								count: 5,
							}
						]
					},
				]
			},
		],
		history: [],
		idUser: 3
	},
];

export default stations;