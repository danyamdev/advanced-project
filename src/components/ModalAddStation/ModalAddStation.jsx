import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Formik} from "formik";
import * as yup from "yup";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {Button, TextField} from "@mui/material";
import InputMask from "react-input-mask";

import {FormAddCarPark} from "../index";
import {getIdSelector} from "../../store/user/selectors";
import {stationsSelector} from "../../store/stations/selectors";
import {updateStationsAction} from "../../store/stations/action";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	maxHeight: 600,
	overflow: "scroll",
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const ModalAddCStation = ({open, handleChange}) => {
	const dispatch = useDispatch();

	const idUser = useSelector(getIdSelector);
	const stations = useSelector(stationsSelector);

	const [openCarPark, setOpenCarPark] = useState(false);
	const [carParks, setCarParks] = useState([]);

	const validationSchema = yup.object().shape({
		name: yup
			.string()
			.min(2, "Название должно содержать больше 2 символов")
			.required("Обязательное поле."),
		street: yup
			.string()
			.min(5, "Улица должна содержать больше 5 символов")
			.required("Обязательное поле."),
		home: yup
			.string()
			.min(2, "Дом должен содержать больше 2 символов")
			.required("Обязательное поле."),
		phone: yup
			.string()
			.required("Обязательное поле."),
	});

	const onSubmitForm = ({name, city, street, home, phone}) => {
		const station = {
			id: Date.now(),
			name,
			city,
			street,
			home,
			phone,
			carParks,
			idUser,
			history: [],
			applications: []
		};

		stations.push(station);

		dispatch(updateStationsAction(stations));

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
					Добавить {openCarPark ? "автопарк" : "станцию"}
				</Typography>
				<Typography id="modal-modal-description" variant="div" sx={{mt: 2}}>
					<Formik
						initialValues={{
							name: "",
							city: "г Ростов-на-Дону",
							street: "",
							home: "",
							phone: "",
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
								{!openCarPark && (
									<>
										<TextField
											sx={{marginTop: 3}}
											id="outlined-number"
											label="Название станции"
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
											label="Город"
											type="text"
											name="city"
											disabled
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.city}
											InputLabelProps={{
												shrink: true,
											}}
										/>
										{touched.city && errors.city && (
											<span className="form-error" style={{color: "red"}}>{errors.city}</span>
										)}
										<TextField
											sx={{marginTop: 3}}
											id="outlined-number"
											label="Улица"
											type="text"
											name="street"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.street}
											InputLabelProps={{
												shrink: true,
											}}
										/>
										{touched.street && errors.street && (
											<span className="form-error" style={{color: "red"}}>{errors.street}</span>
										)}
										<TextField
											sx={{marginTop: 3}}
											id="outlined-number"
											label="Дом"
											type="text"
											name="home"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.home}
											InputLabelProps={{
												shrink: true,
											}}
										/>
										{touched.home && errors.home && (
											<span className="form-error" style={{color: "red"}}>{errors.home}</span>
										)}
										<label style={{margin: "10px 0"}}>Номер телефона</label>
										<InputMask
											style={{
												height: "40px",
												borderRadius: "5px",
												borderColor: "grey",
												padding: "0 10px"
											}}
											mask="+7 (999) 999-99-99"
											name="phone"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.phone}
										/>
										{touched.phone && errors.phone && (
											<span className="form-error" style={{color: "red"}}>{errors.phone}</span>
										)}
										<Button
											sx={{marginTop: 3}}
											className="form-button"
											disabled={!isValid && !dirty}
											onClick={() => setOpenCarPark(!openCarPark)}
											variant="contained">
											Добавить автопарк ?
										</Button>
										<Button
											sx={{marginTop: 3}}
											className="form-button"
											disabled={!isValid && !dirty}
											onClick={handleSubmit}
											type="submit"
											variant="contained">
											Добавить станцию
										</Button>
									</>
								)}
								{openCarPark && <FormAddCarPark setOpenCarPark={setOpenCarPark} setCarParks={setCarParks}/>}
							</form>
						)}
					</Formik>
				</Typography>
			</Box>
		</Modal>
	)
};

export default ModalAddCStation;