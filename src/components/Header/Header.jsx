import React from "react";
import { Button } from "@mui/material";

import logo from "../../assets/images/logo.png";

import "./styles.scss";

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header-inner">
					<div className="header-logo">
						<img src={logo} alt="Logo"/>
					</div>
					<div className="header-link">записаться на прием</div>
					<Button variant="contained">Войти</Button>
				</div>
			</div>
		</header>
	)
};

export default Header;