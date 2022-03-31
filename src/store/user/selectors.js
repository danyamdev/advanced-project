import {createSelector} from "reselect";

const usersStateSelector = state => state.user;

export const authUserSelector = createSelector(
	usersStateSelector,
	state => state
);

export const getIdSelector = createSelector(
	usersStateSelector,
	state => state.id
);