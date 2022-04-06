import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

import {authUserSelector} from "../../store/user/selectors";
import {logoutAction} from "../../store/user/action";
import logo from "../../assets/images/logo.png";

import "./styles.scss";

const Header = () => {
	const user = useSelector(authUserSelector);
	const dispatch = useDispatch();

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
					{(!user.entity || !user) && (
						<Link to={`${user.id ? "/entry" : "/login"}`} className="header-link">записаться на прием</Link>
					)}
					<div>
						{user.id && (
							<Link to={`/profile/${user.id}`}>
								<Button variant="contained" sx={{marginRight: 5}}>Профиль</Button>
							</Link>
						)}
						<Link to={`${user.id ? "/" : "/login"}`}>
							{user.id
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