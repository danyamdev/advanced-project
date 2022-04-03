import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {Point} from "../index";
import ModalAddCStation from "../ModalAddStation/ModalAddStation";
import {getStationsByUserIdSelector} from "../../store/stations/selectors";
import {getStationByUserIdAction} from "../../store/stations/action";

import "./styles.scss";

const ProfileEntity = ({id, name, surname, patronymic, email}) => {
	const stations = useSelector(getStationsByUserIdSelector);
	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);
	const handleChange = () => setOpen(!open);

	useEffect(() => {
		dispatch(getStationByUserIdAction(id));
	}, [id]);

	return (
		<div className="profile-entity">
			<div className="container">
				<div className="profile-entity-inner">
					<Card sx={{margin: "0 auto 50px", textAlign: "center", minWidth: 275, maxWidth: 400}}>
						<CardContent>
							<Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
								Добро пожаловать!
							</Typography>
							<Typography variant="h5" component="div">
								{surname} {name} {patronymic}
							</Typography>
							<Typography color="primary.main">
								Ваш email - {email}
							</Typography>
						</CardContent>
					</Card>
					<Card sx={{margin: "auto", textAlign: "center", minWidth: 275, maxWidth: 600}}>
						<CardContent>
							<Typography sx={{marginBottom: 3, display: "flex", justifyContent: "space-between", alignItems: "center" }} component="div">
								<Typography sx={{fontSize: 20, marginBottom: 0, marginRight: 5}} color="success.main" gutterBottom>
									Список ваших станций
								</Typography>
								<CardActions onClick={handleChange}>
									<Button variant="contained" size="small">Добавить станцию</Button>
								</CardActions>
							</Typography>
							{stations?.length > 0
								? (
									<div className="profile-entity-list">
										{stations.map(item => <Point key={item.id} {...item}/>)}
									</div>
								)
								: (
									<div style={{fontSize: "20px", textAlign: "center"}}>
										У вас пока нет станций...😔
									</div>
								)
							}
						</CardContent>
					</Card>
				</div>
				<ModalAddCStation open={open} handleChange={handleChange}/>
			</div>
		</div>
	)
};

export default ProfileEntity;