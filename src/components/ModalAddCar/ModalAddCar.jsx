import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Formik} from "formik";
import * as yup from "yup";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {Button, TextField} from "@mui/material";

import {usersSelector} from "../../store/users/selectors";
import {authUserSelector} from "../../store/user/selectors";
import {updateUserAction} from "../../store/user/action";
import {updateUsersAction} from "../../store/users/action";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const ModalAddCar = ({open, handleChange}) => {
	const user = useSelector(authUserSelector);
	const users = useSelector(usersSelector);
	
	const dispatch = useDispatch();

	const validationSchema = yup.object().shape({
		brand: yup
			.string()
			.min(1, "Марка должна содержать больше 1 символа")
			.required("Обязательное поле."),
		name: yup
			.string()
			.min(1, "Модель должна содержать больше 1 символа")
			.required("Обязательное поле."),
	});

	const onSubmitForm = ({brand, name}) => {
		const car = {
			id: Date.now(),
			brand,
			name,
			history: [],
			result: null,
		};
		
		user.cars = [...user.cars, car];

		const updateUsers = users.map(item => {
			if (item.id === user.id) {
				return {
					...item,
					cars: [...item.cars, car]
				}
			}
			return item;
		})
		
		dispatch(updateUserAction(user));
		dispatch(updateUsersAction(updateUsers));

		handleChange();
	};

	return (
		<Modal
			open={open}
			onClose={handleChange}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					Добавить машину
				</Typography>
				<Typography id="modal-modal-description" variant="div" sx={{mt: 2}}>
					<Formik
						initialValues={{
							brand: "",
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
							<form className="form" style={{ display: "flex", flexDirection: "column"}}>
								<TextField
									sx={{marginTop: 3}}
									id="outlined-number"
									label="Марка"
									type="text"
									name="brand"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
									InputLabelProps={{
										shrink: true,
									}}
								/>
								{touched.brand && errors.brand && (
									<span className="form-error" style={{color: "red"}}>{errors.brand}</span>
								)}
								<TextField
									sx={{marginTop: 3}}
									id="outlined-number"
									label="Модель"
									type="text"
									name="name"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password}
									InputLabelProps={{
										shrink: true,
									}}
								/>
								{touched.name && errors.name && (
									<span className="form-error" style={{color: "red"}}>{errors.name}</span>
								)}
								<Button
									sx={{marginTop: 3}}
									className="form-button"
									disabled={!isValid && !dirty}
									onClick={handleSubmit}
									type="submit"
									variant="contained">
									Добавить
								</Button>
							</form>
						)}
					</Formik>
				</Typography>
			</Box>
		</Modal>
	)
};

export default ModalAddCar;