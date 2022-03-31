import {createSelector} from "reselect";

const usersStateSelector = state => state.auth;

export const authUserSelector = createSelector(
	usersStateSelector,
	state => state
);

export const getIdSelector = createSelector(
	usersStateSelector,
	state => state.id
);