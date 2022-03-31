export const actionTypes = {
	ADD_ALL_USERS:  "ADD_ALL_USERS",
	ADD_USER: "ADD_USER",
};

export const addAllUsersAction = (payload) => ({
	type: actionTypes.ADD_ALL_USERS,
	payload
});

export const addUserAction = (payload) => ({
	type: actionTypes.ADD_USER,
	payload
});