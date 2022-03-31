import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, Redirect} from "react-router-dom";
import {Formik} from "formik";
import * as yup from "yup";
import Card from "@mui/material/Card";
import {Button, TextField} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';

import {usersSelector} from "../../store/users/selectors";
import {addUserAction} from "../../store/users/action";
import {authUserAction} from "../../store/user/action";

import "./styles.scss";

const SingIn = () => {
	const users = useSelector(usersSelector);
	const dispatch = useDispatch();

	const [isAuth, setIsAuth] = useState(false);
	const [error, setError] = useState(false);

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

	const onSubmitForm = async ({name, surname, patronymic, email, password, entity}) => {
		const candidate = users.find(user => user.email === email);

		if (candidate) {
			setIsAuth(false);
			setError(true);
		} else {
			const user = {
				id: Date.now(),
				name,
				surname,
				patronymic,
				email,
				entity
			};

			if (!entity) {
				user.cars = [];
			}

			dispatch(addUserAction({
				...user,
				password
			}));
			dispatch(authUserAction(user));

			setIsAuth(true);
			setError(false);
		}
	};

	return (
		<>
			{isAuth
				? (
					<Redirect to="/"/>
				)
				: (
					<div className="sing-in">
						<div className="container">
							<Card sx={{minWidth: 275, maxWidth: 500, margin: "50px auto", padding: '10px'}}>
								<h2 className="sing-in-title">Зарегистрируйтесь, чтобы продолжить</h2>
								<Formik
									initialValues={{
										name: "",
										surname: "",
										patronymic: "",
										email: "",
										password: "",
										entity: false
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
											<label htmlFor="entity">
												<Checkbox id="entity" name="entity" onChange={handleChange}/>
												Юридическое лицо
											</label>
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
								{error && (
									<div style={{textAlign: "center", color: "red"}}>
										Данный пользователь уже существует. Попробуйте снова.
									</div>
								)}
							</Card>
						</div>
					</div>
				)
			}
		</>
	);
};

export default SingIn;