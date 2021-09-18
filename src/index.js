import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Routes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";

import { configureStore } from "./store/configureStore";
const store = configureStore();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Routes />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
