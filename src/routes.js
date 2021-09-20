import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import ArrayFields from "./components/forms/ArrayFields";
import FormOne from "./components/forms/formOne";
import FormThree from "./components/forms/formThree";
import FormTwo from "./components/forms/formtwo";
import ReusableForm from "./components/forms/ReusableForm";
import YoutubeForm from "./components/forms/YoutubeForm";
import Header from "./components/Header";
import Home from "./components/home/Home";
import Post from "./components/posts/Post";
import Reducer from "./components/utils/Reducer";
import Layout from "./HOC/layout";

const routes = () => {
	return (
		<Router>
			<Header />
			<Layout>
				<Switch>
					<Route path='/form0' component={ArrayFields} />
					<Route path='/form1' component={FormOne} />
					<Route path='/form2' component={FormTwo} />
					<Route path='/form3' component={FormThree} />
					<Route path='/youtube_form' component={YoutubeForm} />
					<Route path='/reus_form' component={ReusableForm} />
					<Route path='/contact' component={Contacts} />
					<Route path='/reducer' component={Reducer} />
					<Route path='/article/:id' component={Post} />
					<Route path='/' exact component={Home} />
				</Switch>
			</Layout>
		</Router>
	);
};

export default routes;
