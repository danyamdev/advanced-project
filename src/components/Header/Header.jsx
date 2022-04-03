import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

import {getIdSelector} from "../../store/user/selectors";
import {logoutAction} from "../../store/user/action";
import logo from "../../assets/images/logo.png";

import "./styles.scss";

const Header = () => {
	const idUser = useSelector(getIdSelector);
	const dispatch = useDispatch()

	const logout = () => dispatch(logoutAction());

	return (
		<header className="header">
			<div className="container">
				<div className="header-inner">
					<Link to="/">
						<div className="header-logo">
							<img src={logo} alt="Logo"/>
						</div>
					</Link>
					<Link to="/" className="header-link">записаться на прием</Link>
					<div>
						{idUser && (
							<Link to={`/profile/${idUser}`}>
								<Button variant="contained" sx={{marginRight: 5}}>Профиль</Button>
							</Link>
						)}
						<Link to={`${idUser ? "/" : "/login"}`}>
							{idUser
								? <Button variant="contained" onClick={logout}>Выйти</Button>
								: <Button variant="contained">Войти</Button>
							}
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
};

export default Header;