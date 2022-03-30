import React, {useEffect, useState} from "react";

import {Point} from "../index";

import "./styles.scss";

const MainPage = () => {
	const [stations, setStations] = useState([]);

	useEffect(() => {
		const dataStations = JSON.parse(localStorage.getItem("stations"));

		setStations(dataStations);
	}, []);

	return (
		<div className="main-page">
			<div className="container">
				<div className="main-page-inner">
					<h1 className="main-page-title">
						Техосмотр в Ростове-на-Дону
					</h1>
					<div className="main-page-block-points">
						<h3 className="main-page-block-points-title">
							Пункты технического осмотра в Ростове-на-Дону
						</h3>
						<div className="main-page-block-points-list">
							{stations?.map(station => <Point key={station.id} {...station}/>)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default MainPage;