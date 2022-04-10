import {createStore, combineReducers} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import stationsReducer from "./stations/reducer";
import usersReducer from "./users/reducer";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({
	users: usersReducer,
	stations: stationsReducer,
	user: userReducer
});


export const store = createStore(rootReducer, composeWithDevTools());