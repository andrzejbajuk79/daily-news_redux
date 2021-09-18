import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/Header";
import Home from "./components/home/Home";
import Post from "./components/posts/Post";
import Layout from "./HOC/layout";

const routes = () => {
	return (
		<Router>
			<Header />
			<Layout>
				<Switch>
					<Route path='/contact' component={Contacts} />
					<Route path='/article/:id' component={Post} />
					<Route path='/' exact component={Home} />
				</Switch>
			</Layout>
		</Router>
	);
};

export default routes;
