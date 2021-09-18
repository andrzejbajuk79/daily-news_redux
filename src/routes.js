import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/home/Home";
import Layout from "./HOC/layout";

const routes = () => {
	return (
		<Router>
			<Header />
			<Layout>
				<Switch>
					<Route path='/' component={Home} />
				</Switch>
			</Layout>
		</Router>
	);
};

export default routes;
