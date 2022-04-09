import React from "react";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import Typography from "@mui/material/Typography";
import {format, parseISO} from "date-fns";

const History = ({station}) => {
	const historyArr = station.history;

	console.log('===>historyArr[0].', historyArr[0].history[0].date);
	console.log('===>',historyArr[0].history[1].date );
	return (
		<>
			{historyArr.map(({brand, name, phone, sparePart, history}, i) => (
				<Accordion sx={{marginBottom: 3}}>
					<AccordionSummary
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%"}}>
							<Typography>{i + 1}. {brand} {name}</Typography>
							<Typography>Деталь - {sparePart}</Typography>
						</div>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>Контакт -  {phone}</Typography>
						{history?.map(el => (
							<Typography>{el.name} - {format(parseISO(el.date), "dd.MM.yyyy HH:mm")} </Typography>
						))}
					</AccordionDetails>
				</Accordion>
			))}
		</>
	)
};

export default History;