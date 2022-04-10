export const actionTypes = {
	AUTH:  "AUTH",
	LOGOUT: "LOGOUT",
	UPDATE_USER: "UPDATE_USER"
};

export const authUserAction = (payload) => ({
	type: actionTypes.AUTH,
	payload
});

export const logoutAction = () => ({
	type: actionTypes.LOGOUT
});

export const updateUserAction = (payload) => ({
	type: actionTypes.UPDATE_USER,
	payload
});