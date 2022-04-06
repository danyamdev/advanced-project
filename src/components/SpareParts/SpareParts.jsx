import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Formik} from "formik";
import * as yup from "yup";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Button,
	InputLabel,
	MenuItem,
	Select,
	TextField
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import {updateStationsAction} from "../../store/stations/action";
import {stationsSelector} from "../../store/stations/selectors";
import {useParams} from "react-router-dom";

const SpareParts = ({brand, name, spareParts, user, station}) => {
	const [isShowFormSparePart, setIsShowFormSparePart] = useState(false);

	return (
		<>
			<Accordion sx={{marginBottom: 3}}>
				<AccordionSummary
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%"}}>
						<Typography>{brand} {name}</Typography>
						{user?.id === station?.idUser && user?.id && user.entity && (
							<Button
								variant="contained"
								onClick={() => setIsShowFormSparePart(true)}>
								Заказать запчасть
							</Button>
						)}
					</div>
				</AccordionSummary>
				<AccordionDetails>
					<List>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemText sx={{width: "33%"}} primary="Название"/>
								<ListItemText sx={{textAlign: "right", width: "33%"}} primary="Наличие"/>
								<ListItemText sx={{textAlign: "right", width: "33%"}} primary="Цена"/>
							</ListItemButton>
						</ListItem>
						{spareParts?.map(({id, name, price, count}) => (
							<ListItem key={id} disablePadding>
								<ListItemButton>
									<ListItemText sx={{width: "33%"}} primary={`${name}`}/>
									<ListItemText sx={{textAlign: "right", width: "33%"}}
									              primary={`${count > 0 ? `в наличие${user?.id && user.entity ? `(${count} шт.)` : ""}` : "не в наличие"}`}/>
									<ListItemText sx={{textAlign: "right", width: "33%"}} primary={price}/>
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</AccordionDetails>
			</Accordion>
			<ModalFormAddSparePart
				open={isShowFormSparePart}
				onClose={setIsShowFormSparePart}
				spareParts={spareParts}
				brandCar={brand}
				nameCar={name}
			/>
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

const ModalFormAddSparePart = ({open, onClose, spareParts, brandCar, nameCar}) => {
		const {id} = useParams();

		const stations = useSelector(stationsSelector);

		const dispatch = useDispatch();

		const [valueOption, setValueOption] = useState("");
		const [sparePart, setSparePart] = useState(null);

		const handleChangeValueOption = (event) => {
			const value = event.target.value;

			if (value !== "other") {
				const sp = spareParts.find(item => item.id == value);
				setSparePart(sp);
			}

			setValueOption(value);
		}

		const validationSchema = yup.object().shape({
			name: yup
				.string()
				.min(1, "Название должно содержать больше 1 символа")
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

			const updateSpareParts = spareParts;

			if (valueOption === "other") {
				updateSpareParts.push(sparePart);
			} else {
				updateSpareParts.forEach(item => {
					if (item.id == valueOption) {
						item.name = name;
						item.count = +count + +item.count;
						item.price = price;
					}
				})
			}

			const updateStations = stations?.map(station => {
				if (station.id === +id) {
					station.carParks.map(carPark => {
						if (carPark.name === brandCar) {
							carPark.cars.map(car => {
								if (car.name === nameCar) {
									carPark.spareParts = updateSpareParts;
								}
								return car;
							});
						}
						return carPark;
					});
				}
				return station;
			});

			dispatch(updateStationsAction(updateStations));

			setValueOption("");
			setSparePart(null);
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
						Добавить запчасть
					</Typography>
					<Typography id="modal-modal-description" variant="div" sx={{mt: 2}}>
						{valueOption
							? (
								<Formik
									initialValues={{
										name: sparePart ? sparePart.name : "",
										price: sparePart ? sparePart.price : "",
										count: ""
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
											{valueOption && (
												<>
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
													<Button
														sx={{marginTop: 3}}
														className="form-button"
														disabled={!isValid && !dirty}
														onClick={handleSubmit}
														type="submit"
														variant="contained">
														Добавить
													</Button>
												</>
											)}
										</form>
									)}
								</Formik>
							)
							: (
								<Typography sx={{width: "100%"}}>
									<InputLabel sx={{width: "100%"}} id="demo-simple-select-label">Выбрать запчасть</InputLabel>
									<Select
										sx={{width: "100%"}}
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={valueOption}
										label="Выбрать запчасть"
										onChange={handleChangeValueOption}
									>
										<MenuItem value="other">Новая запчасть</MenuItem>
										{spareParts?.map(item => (
											<MenuItem value={item.id}>{item.name}</MenuItem>
										))}
									</Select>
								</Typography>
							)}
					</Typography>
				</Box>
			</Modal>
		)
	}
;

export default SpareParts;