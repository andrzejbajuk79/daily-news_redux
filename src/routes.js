import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";

const routes = () => {
	return (
		<Router>
			<Switch>
				<Route path='/' component={Home} />
			</Switch>
		</Router>
	);
};

export default routes;
