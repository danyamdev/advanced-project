import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {Accordion, AccordionDetails, AccordionSummary, Button, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const Application = ({ car, phone, sparePart, station, user }) => {
	return (
		<>
			<Accordion sx={{marginBottom: 3}}>
				<AccordionSummary
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%"}}>
						<Typography>{car.brand} {car.name}</Typography>
						{user?.id === station?.idUser && user?.id && user.entity && (
							<Button
								variant="contained"
								onClick={() => console.log(1)}>
								Принять авто
							</Button>
						)}
					</div>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>Деталь - {sparePart.name}</Typography>
					<Typography>Контакт -  {phone}</Typography>
				</AccordionDetails>
			</Accordion>
		</>
	)
};

export default Application;