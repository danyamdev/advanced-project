import React from "react";
import {Link} from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Point = ({ id, name, city, street, home, phone }) => (
	<Link to={`/point/${id}`}>
		<Card sx={{minWidth: 275, maxWidth: 500, mb: 3.5}}>
			<CardContent>
				<Typography color="primary.main" gutterBottom>
					{`${city}, ${street}, ${home}`}
				</Typography>
				<Typography sx={{mb: 1}} color="info.main">
					{name}
				</Typography>
				<Typography sx={{fontSize: 14}} color="text.secondary">
					Телефон {phone}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Подробнее</Button>
			</CardActions>
		</Card>
	</Link>
);

export default Point;