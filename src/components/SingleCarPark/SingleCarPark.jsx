import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import Typography from "@mui/material/Typography";

const SingleCarPark = () => (
	<Accordion sx={{ marginBottom: 3}}>
		<AccordionSummary
			aria-controls="panel1a-content"
			id="panel1a-header"
		>
			<Typography>Mazda</Typography>
		</AccordionSummary>
		<AccordionDetails>
			<List>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemText primary="POLO"/>
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemText primary="POLO"/>
					</ListItemButton>
				</ListItem>
			</List>
		</AccordionDetails>
	</Accordion>
);

export default SingleCarPark;