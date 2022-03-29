import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import logo from "../../assets/images/logo.png";

import "./styles.scss";

const Header = () => {
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
					<Link to="/login">
						<Button variant="contained">Войти</Button>
					</Link>
				</div>
			</div>
		</header>
	)
};

export default Header;