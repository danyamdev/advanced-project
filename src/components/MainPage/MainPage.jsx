import React from "react";

import Point from "../Point/Point";

import "./styles.scss";

const MainPage = () => {
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
							{[1, 2, 3, 4, 5].map(item => <Point/>)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default MainPage;