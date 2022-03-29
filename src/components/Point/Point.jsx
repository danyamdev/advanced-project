import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Point = () => (
	<Card sx={{ minWidth: 275, maxWidth: 500, mb: 3.5 }}>
		<CardContent>
			<Typography color="primary.main" gutterBottom>
				г Ростов-на-Дону, пер Машиностроительный, д 11
			</Typography>
			<Typography sx={{ mb: 1 }} color="info.main">
				ИП Сабрекова О. С.
			</Typography>
			<Typography sx={{ fontSize: 14 }} color="text.secondary">
				Телефон +7 (989) 615-25-25
			</Typography>
		</CardContent>
		<CardActions>
			<Button size="small">Подробнее</Button>
		</CardActions>
	</Card>
);

export default Point;