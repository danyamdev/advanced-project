import React, {useState} from "react";
import {useParams} from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SettingsIcon from '@mui/icons-material/Settings';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

import {TabPanel, SingleCarPark, SpareParts} from "../index";

import "./styles.scss";

const getListCars = items => items.map(item => item.cars?.map(car => ({
	brand: item.name,
	...car
}))).flat();

const PointPage = () => {
	const {id} = useParams();

	const [value, setValue] = useState(0);
	const handleChange = (event, newValue) => setValue(newValue);

	const stations = JSON.parse(localStorage.getItem("stations"));
	const [{name, city, street, home, phone, carParks}] = stations.filter(item => item.id === id);
	console.log('===>carParks', carParks);
	const cars = getListCars(carParks);
	console.log('===>cars', cars);

	return (
		<div className="point-page">
			<div className="container">
				<div className="point-page-inner">
					<h1 className="point-page-title">
						Пункт техосмотра {name}
					</h1>
					<div className="point-page-block-info">
						<Typography color="primary.main" gutterBottom>
							{`${city}, ${street}, ${home}`}
						</Typography>
						<Typography color="primary.main" gutterBottom>
							Телефон {phone}
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
							</Tabs>
						</Box>
						<TabPanel value={value} index={0}>
							{carParks?.map(park => <SingleCarPark key={park.id} {...park}/>)}
						</TabPanel>
						<TabPanel value={value} index={1}>
							{cars?.map(car => <SpareParts key={car.id} {...car}/>)}
						</TabPanel>
					</Box>
				</div>
			</div>
		</div>
	)
};

export default PointPage;