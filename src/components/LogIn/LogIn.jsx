import React, {useState} from "react";
import {Link, Redirect} from "react-router-dom";
import {Formik} from "formik";
import * as yup from "yup";
import Card from "@mui/material/Card";
import {Button, TextField} from "@mui/material";

import "./styles.scss";

const LogIn = () => {
	const [isAuth, setIsAuth] = useState(false);
	const [error, setError] = useState(false);

	const users = JSON.parse(localStorage.getItem("users"));

	const validationSchema = yup.object().shape({
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

	const onSubmitForm = ({email, password}) => {
		const user = users.find(user => user.email === email && user.password === password);

		if (user) {
			setIsAuth(true);
			setError(false);

			// dispatch()
		} else {
			setIsAuth(false);
			setError(true);
		}
	};

	return (
		<>
			{isAuth
				? (
					<Redirect to="/" />
				)
				: (
					<div className="log-in">
						<div className="container">
							<Card sx={{minWidth: 275, maxWidth: 500, margin: "50px auto", padding: '10px'}}>
								<h2 className="log-in-title">Войдите, чтобы продолжить</h2>
								<Formik
									initialValues={{
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
												Войти
											</Button>
											<Link to="/singin">
												<p className="form-link">
													Нет аккаунта? <span>Зарегистрироваться</span>
												</p>
											</Link>
										</form>
									)}
								</Formik>
								{error && (
									<div style={{textAlign: "center", color: "red"}}>Пользователь не найден. Проверьте введенные
										данные.</div>
								)}
							</Card>
						</div>
					</div>
				)
			}
		</>
	);
};

export default LogIn;