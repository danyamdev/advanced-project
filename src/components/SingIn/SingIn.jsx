import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import Card from "@mui/material/Card";
import { Button, TextField } from "@mui/material";

import "./styles.scss";

const SingIn = () => {
	const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

	const validationSchema = yup.object().shape({
		name: yup
			.string()
			.min(2, "Количество символов > 2.")
			.required("Обязательное поле."),
		surname: yup
			.string()
			.min(2, "Количество символов > 2.")
			.required("Обязательное поле."),
		patronymic: yup
			.string()
			.min(2, "Количество символов > 2.")
			.required("Обязательное поле."),
		phone: yup
			.string()
			.matches(phoneRegExp, 'Phone number is not valid')
			.min(10, "Количество символов - 10")
			.max(10, "Количество символов - 10")
			.required("Обязательное поле."),
		email: yup
			.string()
			.email("Пожалуйста введите правильный email.")
			.required("Обязательное поле."),
		password: yup
			.string()
			.min(8, "Пароль содержит от 8 до 16 символов.")
			.max(16, "Пароль содержит от 8 до 16 символов.")
			.required("Обязательное поле."),
	});

	const onSubmitForm = async ({name, surname, patronymic, email, password}) => {
		try {
			console.log('===>name', name);
			console.log('===>surname', surname);
			console.log('===>patronymic', patronymic);
			console.log('===>email', email);
			console.log('===>password', password);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="sing-in">
			<div className="container">
				<Card sx={{minWidth: 275, maxWidth: 500, margin: "50px auto", padding: '10px'}}>
					<h2 className="sing-in-title">Зарегистрируйтесь, чтобы продолжить</h2>
					<Formik
						initialValues={{
							name: "",
							surname: "",
							patronymic: "",
							phone: "",
							email: "",
							password: "",
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
							<form className="form">
								<TextField
									id="outlined-number"
									label="Имя"
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
									<span className="form-error">{errors.name}</span>
								)}
								<TextField
									id="outlined-number"
									label="Фамилия"
									type="text"
									name="surname"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.surname}
									InputLabelProps={{
										shrink: true,
									}}
								/>
								{touched.surname && errors.surname && (
									<span className="form-error">{errors.surname}</span>
								)}
								<TextField
									id="outlined-number"
									label="Отчество"
									type="text"
									name="patronymic"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.patronymic}
									InputLabelProps={{
										shrink: true,
									}}
								/>
								{touched.patronymic && errors.patronymic && (
									<span className="form-error">{errors.patronymic}</span>
								)}
								<TextField
									id="outlined-number"
									label="Телефон"
									type="text"
									name="phone"
									placeholder="Номер начинается с 9"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.phone}
									InputLabelProps={{
										shrink: true,
									}}
								/>
								{touched.phone && errors.phone && (
									<span className="form-error">{errors.phone}</span>
								)}
								<TextField
									id="outlined-number"
									label="Email"
									type="email"
									name="email"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
									InputLabelProps={{
										shrink: true,
									}}
								/>
								{touched.email && errors.email && (
									<span className="form-error">{errors.email}</span>
								)}
								<TextField
									id="outlined-number"
									label="Пароль"
									type="password"
									name="password"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password}
									InputLabelProps={{
										shrink: true,
									}}
								/>
								{touched.password && errors.password && (
									<span className="form-error">{errors.password}</span>
								)}
								<Button
									className="form-button"
									disabled={!isValid && !dirty}
									onClick={handleSubmit}
									type="submit"
									variant="contained">
									Зарегистрироваться
								</Button>
								<Link to="/login">
									<p className="form-link">
										Есть аккаунт? <span>Войдите</span>
									</p>
								</Link>
							</form>
						)}
					</Formik>
				</Card>
			</div>
		</div>
	);
};

export default SingIn;