import React, {useState} from "react";
import * as yup from "yup";
import {Button, TextField} from "@mui/material";
import {Formik} from "formik";

const FormAddCarPark = ({setOpenCarPark, setCarParks}) => {
	const [cars, setCars] = useState([]);

	const validationSchema = yup.object().shape({
		name: yup
			.string()
			.min(1, "Автопарк должен содержать больше 1 символа")
			.required("Обязательное поле."),
	});

	const onSubmitForm = (values) => {
		const carPark = {
			id: Date.now(),
			name: values.name,
			cars: []
		};

		if (cars.length > 0) {
			carPark.cars = cars;
		} else {
			carPark.cars = [];
		}

		setCarParks(prev => ([...prev, carPark]));
		setOpenCarPark(false);
	};

	return (
		<Formik
			initialValues={{
				name: "",
			}}
			validateOnBlur
			onSubmit={(values, initialValues) => onSubmitForm(values, initialValues)}
			validationSchema={validationSchema}
		>
			{({
				  values,
				  errors,
				  touched,
				  handleChange,
				  handleBlur,
				  isValid,
				  handleSubmit,
				  dirty,
			  }) => (
				<form className="form" style={{display: "flex", flexDirection: "column"}}>
					<TextField
						sx={{marginTop: 3}}
						id="outlined-number"
						label="Название автопарка"
						type="text"
						name="name"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.name}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					{touched.name && errors.name && (
						<span className="form-error" style={{color: "red"}}>{errors.name}</span>
					)}
					<FormAddCar setCars={setCars}/>
					<Button
						sx={{marginTop: 3}}
						className="form-button"
						disabled={!isValid && !dirty}
						onClick={handleSubmit}
						type="submit"
						variant="contained">
						Добавить автопарк
					</Button>
				</form>
			)}
		</Formik>
	)
};


const FormAddCar = ({setCars}) => {
	const [isShow, setIsShow] = useState(false);
	const [spareParts, setSpareParts] = useState([]);

	const validationSchema = yup.object().shape({
		name: yup
			.string()
			.min(1, "Название машины должно содержать больше 1 символа")
			.required("Обязательное поле."),
	});

	const onSubmitForm = ({name}) => {
		const car = {
			id: Date.now(),
			name,
		};

		if (spareParts.length > 0) {
			car.spareParts = spareParts;
		} else {
			car.spareParts = [];
		}

		setCars(prev => ([...prev, car]));
		setSpareParts([]);
	};

	return (
		<Formik
			initialValues={{
				name: "",
			}}
			validateOnBlur
			onSubmit={(values) => onSubmitForm(values)}
			validationSchema={validationSchema}
		>
			{({
				  values,
				  errors,
				  touched,
				  handleChange,
				  handleBlur,
				  isValid,
				  handleSubmit,
				  dirty,
			  }) => (
				<form className="form" style={{display: "flex", flexDirection: "column"}}>
					<TextField
						sx={{marginTop: 3}}
						id="outlined-number"
						label="Название машины"
						type="text"
						name="name"
						disabled={isShow}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.name}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					{touched.name && errors.name && (
						<span className="form-error" style={{color: "red"}}>{errors.name}</span>
					)}
					{!isShow
						? (
							<div style={{display: "flex", justifyContent: "space-between"}}>
								<Button
									sx={{marginTop: 3, marginRight: 1}}
									className="form-button"
									disabled={!isValid && !dirty}
									onClick={() => setIsShow(true)}
									type="submit"
									variant="contained">
									Добавить деталь
								</Button>
								<Button
									sx={{marginTop: 3}}
									className="form-button"
									disabled={!isValid && !dirty}
									onClick={handleSubmit}
									type="submit"
									variant="contained">
									Добавить машину
								</Button>
							</div>
						)
						: (
							<FormAddSpareParts setIsShow={setIsShow} setSpareParts={setSpareParts}/>
						)}
				</form>
			)}
		</Formik>
	)
};

const FormAddSpareParts = ({setIsShow, setSpareParts}) => {
	const validationSchema = yup.object().shape({
		name: yup
			.string()
			.min(1, "Название машины должно содержать больше 1 символа")
			.required("Обязательное поле."),
		price: yup
			.string()
			.required("Обязательное поле."),
		count: yup
			.string()
			.required("Обязательное поле."),
	});

	const onSubmitForm = ({name, price, count}) => {
		const sparePart = {
			id: Date.now(),
			name,
			price,
			count
		};

		setSpareParts(prev => ([...prev, sparePart]));
	};

	return (
		<Formik
			initialValues={{
				name: "",
			}}
			validateOnBlur
			onSubmit={(values) => onSubmitForm(values)}
			validationSchema={validationSchema}
		>
			{({
				  values,
				  errors,
				  touched,
				  handleChange,
				  handleBlur,
				  isValid,
				  handleSubmit,
				  dirty,
			  }) => (
				<form className="form" style={{display: "flex", flexDirection: "column"}}>
					<TextField
						sx={{marginTop: 3}}
						id="outlined-number"
						label="Название детали"
						type="text"
						name="name"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.name}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					{touched.name && errors.name && (
						<span className="form-error" style={{color: "red"}}>{errors.name}</span>
					)}
					<TextField
						sx={{marginTop: 3}}
						id="outlined-number"
						label="Стоимость"
						type="text"
						name="price"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.price}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					{touched.price && errors.price && (
						<span className="form-error" style={{color: "red"}}>{errors.price}</span>
					)}
					<TextField
						sx={{marginTop: 3}}
						id="outlined-number"
						label="Количество"
						type="text"
						name="count"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.count}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					{touched.count && errors.count && (
						<span className="form-error" style={{color: "red"}}>{errors.count}</span>
					)}
					<div style={{display: "flex", justifyContent: "space-between"}}>
						<Button
							sx={{marginTop: 3}}
							className="form-button"
							disabled={!isValid && !dirty}
							onClick={handleSubmit}
							type="submit"
							variant="contained">
							Добавить
						</Button>
						<Button
							sx={{marginTop: 3}}
							className="form-button"
							disabled={!isValid && !dirty}
							onClick={()=> setIsShow(false)}
							variant="contained">
							Готово
						</Button>
					</div>
				</form>
			)}
		</Formik>
	)
};

export default FormAddCarPark;