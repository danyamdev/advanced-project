import React from "react";
import { Route, Switch } from "react-router-dom";

import { Header, ProtectedRoute } from "./components";
import routes from "./routes/routes";

import "./default.scss";

const App = () => {
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
