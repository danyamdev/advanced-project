import {actionTypes} from "./action";

const initialState = {
	stations: []
};

const stationsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_ALL_STATIONS:
			return {
				...state,
				stations: action.payload
			}

		case actionTypes.ADD_STATION:
			return {
				...state,
				stations: [...state.stations, action.payload]
			}

		default:
			return state;
	}
};

export default stationsReducer;