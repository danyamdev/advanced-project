import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as yup from "yup";
import {Formik} from "formik";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Button, TextField} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HistoryIcon from '@mui/icons-material/History';
import AssignmentIcon from '@mui/icons-material/Assignment';

import Application from "../Application/Application";
import {TabPanel, SingleCarPark, SpareParts} from "../index";
import {updateStationsAction} from "../../store/stations/action";
import {stationsSelector} from "../../store/stations/selectors";
import {authUserSelector} from "../../store/user/selectors";

import "./styles.scss";

const getListCars = items => items.map(item => item.cars?.map(car => ({
	brand: item.name,
	...car
}))).flat();

const PointPage = () => {
	const {id} = useParams();
	const stations = useSelector(stationsSelector);
	const user = useSelector(authUserSelector);

	const [isShowFormCarPark, setIsShowFormCarPark] = useState(false);
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => setValue(newValue);

	const station = stations.find(item => item.id === +id);
	const cars = station && getListCars(station.carParks);

	return (
		<div className="point-page">
			<div className="container">
				<div className="point-page-inner">
					{station
						? (
							<>
								<h1 className="point-page-title">
									Пункт техосмотра {station.name}
								</h1>
								<div className="point-page-block-info">
									<Typography color="primary.main" gutterBottom>
										{`${station.city}, ${station.street}, ${station.home}`}
									</Typography>
									<Typography color="primary.main" gutterBottom>
										Телефон {station.phone}
									</Typography>
								</div>
								<Box sx={{width: '50%'}}>
									<Box>
										<Tabs
											value={value}
											onChange={handleChange}
											aria-label="icon label tabs example">
											<Tab icon={<DirectionsCarIcon/>} label="Автопарк"/>
											<Tab icon={<SettingsIcon/>} label="Запчасти"/>
											<Tab style={{display: user.entity && station.idUser === user.id ? "" : "none"}} icon={<HistoryIcon/>} label="История"/>
											<Tab style={{display: user.entity && station.idUser === user.id ? "" : "none"}} icon={<AssignmentIcon/>} label="Заявки"/>
										</Tabs>
									</Box>
									<TabPanel value={value} index={0}>
										{user?.id === station?.idUser && user?.id && user.entity && (
											<Button
												sx={{margin: "10px 0"}}
												variant="contained"
												onClick={() => setIsShowFormCarPark(true)}>
												Добавить автопарк
											</Button>
										)}
										{station?.carParks.length > 0
											? (
												station.carParks?.map(park => <SingleCarPark key={park.id} station={station} {...park} user={user}/>)
											)
											: (
												<div style={{marginTop: "30px", fontSize: "36px", textAlign: "center"}}>
													На станции пока нет автопарков...😔
												</div>
											)
										}
									</TabPanel>
									<TabPanel value={value} index={1}>
										{cars.length > 0
											? (
												cars?.map(car => <SpareParts key={car.id} {...car} station={station} user={user}/>)
											)
											: (
												<div style={{marginTop: "30px", fontSize: "36px", textAlign: "center"}}>
													На станции пока нет запчастей...😔
												</div>
											)
										}
									</TabPanel>
									<TabPanel style={{display: user.entity && station.idUser === user.id ? "" : "none"}} value={value} index={2}>
										{station?.history.length > 0
											? (
												<h2>История</h2>
											)
											: (
												<div style={{marginTop: "30px", fontSize: "36px", textAlign: "center"}}>
													На станции пока нет истории...😔
												</div>
											)
										}
									</TabPanel>
									<TabPanel style={{display: user.entity && station.idUser === user.id ? "" : "none"}} value={value} index={3}>
										{station?.applications.length > 0
											? (
												station?.applications.map(el => <Application key={el.id} {...el} station={station} user={user}/>)
											)
											: (
												<div style={{marginTop: "30px", fontSize: "36px", textAlign: "center"}}>
													На станции пока нет заявок...😔
												</div>
											)
										}
									</TabPanel>
								</Box>
							</>
						)
						: (
							<div style={{marginTop: "30px", fontSize: "36px", textAlign: "center"}}>
								Произошла ошибка...😔 Попрообоуйте снова!
							</div>
						)
					}
				</div>
				<ModalFormAddCarPark open={isShowFormCarPark} onClose={setIsShowFormCarPark} id={id}/>
			</div>
		</div>
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

const ModalFormAddCarPark = ({open, onClose, id}) => {
	const stations = useSelector(stationsSelector);

	const dispatch = useDispatch();

	const validationSchema = yup.object().shape({
		name: yup
			.string()
			.min(1, "Автопарк должен содержать больше 1 символа")
			.required("Обязательное поле."),
	});

	const onSubmitForm = ({name}) => {
		const carPark = {
			id: Date.now(),
			name,
			cars: []
		};

		const updateStation = stations.map(item => {
			if (item.id === +id) {
				item.carParks.push(carPark);
			}
			return item;
		});

		dispatch(updateStationsAction(updateStation));

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
					Добавить автопарк
				</Typography>
				<Typography id="modal-modal-description" variant="div" sx={{mt: 2}}>
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

export default PointPage;