import React, {useState} from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

import {ModalAddCar} from "../index";

import "./styles.scss";

const ProfileIndividual = ({id, name, surname, patronymic, email, cars}) => {
	const [open, setOpen] = useState(false);
	const handleChange = () => setOpen(!open);

	return (
		<div className="profile-individual">
			<div className="container">
				<div className="profile-individual-inner">
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
									Список ваших машин
								</Typography>
								<CardActions onClick={handleChange}>
									<Button variant="contained" size="small">Добавить машину</Button>
								</CardActions>
							</Typography>
							{cars?.length > 0
								? (
									<div className="profile-individual-list">
										{cars.map(item => (
											<Card key={item.id} sx={{textAlign: "left"}}>
												<CardContent>
													<Typography color="text.secondary" gutterBottom>
														Марка - <Typography  variant="span" sx={{fontSize: 18}} color="primary.main" gutterBottom>{item.brand}</Typography>
													</Typography>
													<Typography >
														Модель -  <Typography  variant="span" sx={{fontSize: 18}} color="primary.main" gutterBottom>{item.name}</Typography>
													</Typography>
													<CardActions sx={{padding: "10px 0 0"}}>
														<Button variant="contained" size="small">История</Button>
													</CardActions>
												</CardContent>
											</Card>
										))}
									</div>
								)
								: (
									<div style={{fontSize: "20px", textAlign: "center"}}>
										У вас пока не добавлена машина...😔
									</div>
								)
							}
						</CardContent>
					</Card>
				</div>
				<ModalAddCar open={open} handleChange={handleChange}/>
			</div>
		</div>
	)
};

export default ProfileIndividual;