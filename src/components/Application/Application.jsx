import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Accordion, AccordionDetails, AccordionSummary, Button} from "@mui/material";
import Typography from "@mui/material/Typography";

import {stationsSelector} from "../../store/stations/selectors";
import {updateStationsAction} from "../../store/stations/action";

const Application = ({ id, car, phone, result, sparePart, station, user }) => {
	const stations = useSelector(stationsSelector);
	const dispatch = useDispatch();

	const [toggle, setToggle] = useState(result);

	const receptionCar = () => {
		const story = {
			...car,
			id,
			sparePart: sparePart.name,
			phone,
			history: [
				{
					name: "Прием авто:",
					date: new Date().toISOString(),
				}
			]
		};
		
		const updateStation = {
			...station,
			history: [...station.history, story],
			applications: station.applications.map(el => el.id === id ? (el.result = true) && el : el)
		};

		const updateStations = stations.map(el => el.id === updateStation.id ? updateStation : el);
		
		dispatch(updateStationsAction(updateStations));

		setToggle(true);
	};

	const inspectionCar = () => {
		const history = station.history.find(el => el.id === id);
		history.history = [...history.history, {name: "Провели осмотр", date: new Date().toISOString()}]

		const updateStations = stations.map(el => {
			if (el.id === station.id) {
				el.applications = el.applications.filter(item => item.id !== id);
				el.history = el.history.map(item => item.id === history.id ? history : item);
			}

			return el;
		});

		dispatch(updateStationsAction(updateStations));
	}

	return (
		<Accordion sx={{marginBottom: 3}}>
			<AccordionSummary
				aria-controls="panel1a-content"
				id="panel1a-header"
			>
				<div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%"}}>
					<Typography>{car.brand} {car.name}</Typography>
					{user?.id === station?.idUser && user?.id && user.entity && (
						!toggle
							? (
								<Button
									variant="contained"
									onClick={receptionCar}>
									Принять авто
								</Button>
							)
							: (
								<Button
									variant="contained"
									onClick={inspectionCar}>
									Провести техосмотр
								</Button>
							)
					)}
				</div>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>Деталь - {sparePart.name}</Typography>
				<Typography>Контакт -  {phone}</Typography>
			</AccordionDetails>
		</Accordion>
	)
};

export default Application;