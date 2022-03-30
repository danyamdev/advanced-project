import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import Typography from "@mui/material/Typography";

const SingleCarPark = ({ name, cars }) => (
	<Accordion sx={{ marginBottom: 3}}>
		<AccordionSummary
			aria-controls="panel1a-content"
			id="panel1a-header"
		>
			<Typography>{name}</Typography>
		</AccordionSummary>
		<AccordionDetails>
			<List>
				{cars?.map(car => (
					<ListItem key={car.id} disablePadding>
						<ListItemButton>
							<ListItemText primary={`${car.name}`}/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</AccordionDetails>
	</Accordion>
);

export default SingleCarPark;