import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SettingsIcon from '@mui/icons-material/Settings';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

import {TabPanel, SingleCarPark, SpareParts} from "../index";
import {stationsSelector} from "../../store/stations/selectors";

import "./styles.scss";

const getListCars = items => items.map(item => item.cars?.map(car => ({
	brand: item.name,
	...car
}))).flat();

const PointPage = () => {
	const {id} = useParams();
	const stations = useSelector(stationsSelector);

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
										</Tabs>
									</Box>
									<TabPanel value={value} index={0}>
										{station?.carParks.length > 0
											? (
												station.carParks?.map(park => <SingleCarPark key={park.id} {...park}/>)
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
												cars?.map(car => <SpareParts key={car.id} {...car}/>)
											)
											: (
												<div style={{marginTop: "30px", fontSize: "36px", textAlign: "center"}}>
													На станции пока нет запчастей...😔
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
			</div>
		</div>
	)
};

export default PointPage;