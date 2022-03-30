import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import { Header, ProtectedRoute } from "./components";
import gettingDataFromLS from "./helpers/gettingDataFromLS";
import routes from "./routes/routes";
import users from "./mocks/users";
import stations from "./mocks/stations";

import "./default.scss";

const App = () => {

	useEffect(() => {
		gettingDataFromLS(users, "users");
		gettingDataFromLS(stations, "stations");
	}, [])

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
							render={() => <route.component />}
						/>
					)
				)}
			</Switch>
		</>
	);
}

export default App;
