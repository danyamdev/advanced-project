export const actionTypes = {
	ADD_ALL_STATIONS:  "ADD_ALL_STATIONS",
	ADD_STATION: "ADD_STATION",
};

export const addAllStationsAction = (payload) => ({
	type: actionTypes.ADD_ALL_STATIONS,
	payload
});

export const addStationAction = (payload) => ({
	type: actionTypes.ADD_STATION,
	payload
});