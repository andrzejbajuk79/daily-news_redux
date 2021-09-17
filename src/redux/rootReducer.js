import { combineReducers } from "redux";
import filmy from "./reducers/movies_red";

const rootReducer = combineReducers({
	filmy,
});

export default rootReducer;
