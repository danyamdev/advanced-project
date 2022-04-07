import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Formik} from "formik";
import * as yup from "yup";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {Accordion, AccordionDetails, AccordionSummary, Button, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import {stationsSelector} from "../../store/stations/selectors";
import {updateStationsAction} from "../../store/stations/action";

const SingleCarPark = ({id, name, cars, user, station}) => {
	const [isShowFormCar, setIsShowFormCar] = useState(false);

	return (
		<>
			<Accordion sx={{marginBottom: 3}}>
				<AccordionSummary
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%"}}>
						<Typography>{name}</Typography>
						{user?.id === station?.idUser && user?.id && user.entity && (
							<Button
								variant="contained"
								onClick={() => setIsShowFormCar(true)}>
								Добавить машину
							</Button>
						)}
					</div>
				</AccordionSummary>
				<AccordionDetails>
					{cars.length > 0
						? (
							<List>
								{cars?.map(car => (
									<ListItem key={car.id} disablePadding>
										<ListItemButton>
											<ListItemText primary={`${car.name}`}/>
										</ListItemButton>
									</ListItem>
								))}
							</List>
						)
						: (
							<div style={{marginTop: "30px", fontSize: "36px", textAlign: "center"}}>
								В автопарке пока нет машин...😔
							</div>
						)
					}
				</AccordionDetails>
			</Accordion>
			<ModalFormAddCar idCarPark={id}  brand={name} open={isShowFormCar} onClose={setIsShowFormCar}/>
		</>
	)
};

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

const ModalFormAddCar = ({ idCarPark, brand, open, onClose}) => {
	const stations = useSelector(stationsSelector);

	const dispatch = useDispatch();

	const validationSchema = yup.object().shape({
		name: yup
			.string()
			.min(1, "Автопарк должен содержать больше 1 символа")
			.required("Обязательное поле."),
	});

	const onSubmitForm = ({name}) => {
		const car = {
			id: Date.now(),
			name,
			spareParts: []
		};

		const updateStations = stations?.map(station => {
			station.carParks?.map(carPark => {
				if (carPark.id === idCarPark) {
					carPark.cars.push(car);
				}
				return carPark;
			}); 
			return station;
		});

		dispatch(updateStationsAction(updateStations));

		onClose(false);
	};

	return (
		<Modal
			open={open}
			onClose={() => onClose(false)}
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
							brand,
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
									label="Название бренда"
									type="text"
									name="brand"
									disabled
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.brand}
									InputLabelProps={{
										shrink: true,
									}}
								/>
								<TextField
									sx={{marginTop: 3}}
									id="outlined-number"
									label="Название машины"
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

export default SingleCarPark;