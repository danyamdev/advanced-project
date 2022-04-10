import React from "react";
import {useSelector} from "react-redux";

import {Point} from "../index";
import {stationsSelector} from "../../store/stations/selectors";

import "./styles.scss";

const MainPage = () => {
	const stations = useSelector(stationsSelector);

	return (
		<div className="main-page">
			<div className="container">
				<div className="main-page-inner">
					<h1 className="main-page-title">
						Техосмотр в Ростове-на-Дону
					</h1>
					{stations.length > 0
						? (
							<div className="main-page-block-points">
								<h3 className="main-page-block-points-title">
									Пункты технического осмотра в Ростове-на-Дону
								</h3>
								<div className="main-page-block-points-list">
									{stations?.map(station => <Point key={station.id} {...station}/>)}
								</div>
							</div>
						)
						: (
							<div style={{fontSize: "36px", textAlign: "center"}}>
								На данный момент пунктов техосмотра на сервисе нет...😔
							</div>
						)
					}
				</div>
			</div>
		</div>
	)
};

export default MainPage;