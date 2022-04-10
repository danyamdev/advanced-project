import {createSelector} from "reselect";

const usersStateSelector = state => state.users;

export const usersSelector = createSelector(
	usersStateSelector,
	state => state.users
);