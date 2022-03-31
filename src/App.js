import React from "react";
import {Route, Switch} from "react-router-dom";
import {useDispatch} from "react-redux";

import {Header, ProtectedRoute} from "./components";
import gettingDataFromLS from "./helpers/gettingDataFromLS";
import routes from "./routes/routes";
import users from "./mocks/users";
import stations from "./mocks/stations";
import {addAllUsersAction} from "./store/users/action";
import {addAllStationsAction} from "./store/stations/action";
import {authUserAction} from "./store/auth/action";

import "./default.scss";

const App = () => {
	const dispatch = useDispatch();
	
	const idUser = localStorage.getItem("ID_USER");

	if (idUser) {
		const users = JSON.parse(localStorage.getItem("users"));
		const user = users.find(user => user.id === +idUser);

		dispatch(authUserAction(user));
	}
	
	gettingDataFromLS(users, "users", dispatch, addAllUsersAction);
	gettingDataFromLS(stations, "stations", dispatch, addAllStationsAction);

	return (
		<>
			<Header/>
			<Switch>
				{routes.map((route, index) =>
					route.withAuth ? (
						<ProtectedRoute
							path={route.path}
							key={index}
							component={route.component}
							exact
						/>
					) : (
						<Route
							key={index}
							path={route.path}
							exact={route.exact}
							render={() => <route.component/>}
						/>
					)
				)}
			</Switch>
		</>
	);
}

export default App;
