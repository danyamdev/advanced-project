import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import Typography from "@mui/material/Typography";

const SpareParts = () => (
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
						<ListItemText sx={{width: "33%"}} primary="Название"/>
						<ListItemText sx={{textAlign: "right", width: "33%"}} primary="Наличие"/>
						<ListItemText sx={{textAlign: "right", width: "33%"}} primary="Цена"/>
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemText sx={{width: "33%"}} primary="POLO"/>
						<ListItemText sx={{textAlign: "right", width: "33%"}} primary="в наличие"/>
						<ListItemText sx={{textAlign: "right", width: "33%"}} primary="от 1000"/>
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemText sx={{width: "33%"}} primary="POLO"/>
						<ListItemText sx={{textAlign: "right", width: "33%"}} primary="не в наличие"/>
						<ListItemText sx={{textAlign: "right", width: "33%"}} primary="от 1000"/>
					</ListItemButton>
				</ListItem>
			</List>
		</AccordionDetails>
	</Accordion>
);

export default SpareParts;