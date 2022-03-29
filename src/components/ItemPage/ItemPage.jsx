import React, {useState} from "react";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SettingsIcon from '@mui/icons-material/Settings';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

import SingleCarPark from "../SingleCarPark/SingleCarPark";
import SpareParts from "../SpareParts/SpareParts";

import "./styles.scss";

const TabPanel = ({children, value, index, ...other}) => {
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{p: 3}}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
};

const ItemPage = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => setValue(newValue);

	return (
		<div className="item-page">
			<div className="container">
				<div className="item-page-inner">
					<h1 className="item-page-title">
						Пункт техосмотра ИП Сабрекова О. С.
					</h1>
					<div className="item-page-block-info">
						<Typography color="primary.main" gutterBottom>
							г Ростов-на-Дону, пер Машиностроительный, д 11
						</Typography>
						<Typography color="primary.main" gutterBottom>
							Телефон +7 (989) 615-25-25
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
								{/*<Tab icon={<AssignmentIcon />} label="История" />*/}
							</Tabs>
						</Box>
						<TabPanel value={value} index={0}>
							{[1, 2, 3].map(item => <SingleCarPark />)}
						</TabPanel>
						<TabPanel value={value} index={1}>
							{[1, 2, 3].map(item => <SpareParts />)}
						</TabPanel>
					</Box>
				</div>
			</div>
		</div>
	)
};

export default ItemPage;