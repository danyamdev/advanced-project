import {createStore, combineReducers} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import stationsReducer from "./stations/reducer";
import usersReducer from "./users/reducer";
import authReducer from "./auth/reducer";

const rootReducer = combineReducers({
	users: usersReducer,
	stations: stationsReducer,
	auth: authReducer
});


export const store = createStore(rootReducer, composeWithDevTools());