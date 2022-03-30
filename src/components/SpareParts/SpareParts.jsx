import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import Typography from "@mui/material/Typography";

const SpareParts = ({ brand, name, spareParts }) => (
	<Accordion sx={{ marginBottom: 3}}>
		<AccordionSummary
			aria-controls="panel1a-content"
			id="panel1a-header"
		>
			<Typography>{brand} {name}</Typography>
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
				{spareParts?.map(({ id, name, price, count }) => (
					<ListItem key={id} disablePadding>
						<ListItemButton>
							<ListItemText sx={{width: "33%"}} primary={`${name}`}/>
							<ListItemText sx={{textAlign: "right", width: "33%"}} primary={`${count > 0 ? "в наличие" : "не в наличие"}`}/>
							<ListItemText sx={{textAlign: "right", width: "33%"}} primary={price}/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</AccordionDetails>
	</Accordion>
);

export default SpareParts;