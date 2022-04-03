import {actionTypes} from "./action";

const initialState = {
	stations: [],
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

		case actionTypes.GET_STATION_BY_USER_ID:
			const station = state.stations.filter(item => item.idUser === action.payload);

			return {
				...state,
				station
			}

		case actionTypes.UPDATE_STATIONS:
			localStorage.setItem("stations", JSON.stringify(action.payload));

			return {
				...state,
				station: action.payload
			}

		default:
			return state;
	}
};

export default stationsReducer;