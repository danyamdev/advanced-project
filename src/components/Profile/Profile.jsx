import React from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import ProfileEntity from "../ProfileEntity/ProfileEntity";
import ProfileIndividual from "../ProfileIndividual/ProfileIndividual";
import {authUserSelector} from "../../store/user/selectors";

import "./styles.scss";

const Profile = () => {
	const {id} = useParams();

	const user = useSelector(authUserSelector);

	const isMatch = +id === user.id;

	return (
		<div className="profile">
			<div className="container">
				<div className="profile-inner">
					{isMatch
						? (
							<>
								<h1 className="profile-title">Профиль</h1>
								{user.entity
									? <ProfileEntity {...user}/>
									: <ProfileIndividual {...user}/>
								}
							</>
						)
						: (
							<div style={{textAlign: "center", marginTop: "30px", fontSize: "36px"}}>
								Пользователя такого пользователя нет...
							</div>
						)
					}
				</div>
			</div>
		</div>
	)
};

export default Profile;