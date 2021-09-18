import { compose, createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./reducers";

export const configureStore = () => {
	const store = compose(
		applyMiddleware(promiseMiddleware),
		devToolsEnhancer()
	)(createStore)(rootReducer);
	return store;
};
