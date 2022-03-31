export const actionTypes = {
	ADD_ALL_STATIONS:  "ADD_ALL_STATIONS",
	ADD_STATION: "ADD_STATION",
	GET_STATION_BY_USER_ID: "GET_STATION_BY_USER_ID",
};

export const addAllStationsAction = (payload) => ({
	type: actionTypes.ADD_ALL_STATIONS,
	payload
});

export const addStationAction = (payload) => ({
	type: actionTypes.ADD_STATION,
	payload
});

export const getStationByUserIdAction = (payload) => ({
	type: actionTypes.GET_STATION_BY_USER_ID,
	payload
});