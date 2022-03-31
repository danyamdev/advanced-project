import {createSelector} from "reselect";

const stationsStateSelector = state => state.stations;

export const stationsSelector = createSelector(
	stationsStateSelector,
	state => state.stations
);