import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Formik} from "formik";
import * as yup from "yup";
import {Button, InputLabel, MenuItem, Select} from "@mui/material";
import Typography from "@mui/material/Typography";
import InputMask from "react-input-mask";

import {updateStationsAction} from "../../store/stations/action";
import {stationsSelector} from "../../store/stations/selectors";

import "./styles.scss";

const Entry = () => {
	const stations = useSelector(stationsSelector);

	const dispatch = useDispatch();

	const [cars, setCars] = useState([]);
	const [spareParts, setSpareParts] = useState([]);
	const [valueStationOption, setValueStationOption] = useState("");
	const [valueCarOption, setValueCarOption] = useState("");
	const [valueSparePart, setValueSparePart] = useState("");

	const handleChangeValueStationOption = (event) => {
		const value = event.target.value;

		const station = stations.find(item => item.id === value);

		const cars = station.carParks.map(park => park.cars?.map(car => ({
			brand: park.name,
			...car
		}))).flat();

		setValueStationOption(value);
		setCars(cars);
	};

	const handleChangeValueCarOption = (event) => {
		const value = event.target.value;

		const spareParts = cars.find(el => el.id === value).spareParts.filter(el => el.count > 0);

		setValueCarOption(value);
		setSpareParts(spareParts);
	};

	const handleChangeValueSparePartsOption = (event) => setValueSparePart(event.target.value);

	const validationSchema = yup.object().shape({
		phone: yup
			.string()
			.required("Обязательное поле."),
	});

	const onSubmitForm = ({phone}) => {
		const station = stations.find(item => item.id === valueStationOption);

		const application = {
			id: Date.now(),
			phone
		};
		
		station?.carParks.forEach(park => {
			park.cars.forEach(car => {
				if (car.id === valueCarOption) {
					car.spareParts.forEach(sparePart => {
						if (sparePart.id === valueSparePart) {
							application.car = {
								id: Date.now() + 1,
								brand: park.name,
								name: car.name
							};

							application.sparePart = {
								id: sparePart.id,
								name: sparePart.name
							};

							sparePart.count -= 1;
						}
					});
				}
			});
		});

		station.applications = [...station.applications, application];
		
		const updateStations = stations.map(el => el.id === station.id ? station : el);

		dispatch(updateStationsAction(updateStations));
		
	};


	return (
		<div className="entry">
			<div className="container">
				<div className="entry-inner">
					<h1 className="entry-title">Запись на ТО</h1>
					<Formik
						initialValues={{
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
							<form className="form">
								<Typography sx={{width: "100%", marginBottom: 3}}>
									<InputLabel sx={{width: "100%"}} id="demo-simple-select-label">Выбрать станцию ТО</InputLabel>
									<Select
										sx={{width: "100%"}}
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={valueStationOption}
										label="Выбрать станцию TO"
										onChange={handleChangeValueStationOption}
									>
										{stations?.map(item => (
											<MenuItem value={item.id}>{item.name}</MenuItem>
										))}
									</Select>
								</Typography>
								<Typography sx={{width: "100%", marginBottom: 3}}>
									<InputLabel sx={{width: "100%"}} id="demo-simple-select-label">Выбрать машину</InputLabel>
									<Select
										sx={{width: "100%"}}
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={valueCarOption}
										label="Выбрать машину"
										onChange={handleChangeValueCarOption}
									>
										{cars?.map(item => (
											<MenuItem value={item.id}>{item.brand} {item.name}</MenuItem>
										))}
									</Select>
								</Typography>
								<Typography sx={{width: "100%", marginBottom: 3}}>
									<InputLabel sx={{width: "100%"}} id="demo-simple-select-label">Выбрать запчасть</InputLabel>
									<Select
										sx={{width: "100%"}}
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={valueSparePart}
										label="Выбрать запчасть"
										onChange={handleChangeValueSparePartsOption}
									>
										{spareParts?.map(item => (
											<MenuItem value={item.id}>{item.name}</MenuItem>
										))}
									</Select>
								</Typography>
								<p style={{margin: "10px 0"}}>Номер телефона</p>
								<InputMask
									style={{
										width: "100%",
										height: "40px",
										borderRadius: "5px",
										borderColor: "grey",
										padding: "0 10px"
									}}
									mask="+7 (999) 999-99-99"
									placeholder="+7 (XXX) XXX-XX-XX"
									name="phone"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.phone}
								/>
								{touched.phone && errors.phone && (
									<span className="form-error" style={{color: "red"}}>{errors.phone}</span>
								)}
								<Button
									sx={{width: "100%", marginTop: 3}}
									className="form-button"
									disabled={!isValid && !dirty}
									onClick={handleSubmit}
									type="submit"
									variant="contained">
									Отправить заявку
								</Button>
							</form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	)
};

export default Entry;