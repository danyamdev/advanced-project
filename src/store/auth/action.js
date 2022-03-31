export const actionTypes = {
	AUTH:  "AUTH",
	LOGOUT: "LOGOUT",
};

export const authUserAction = (payload) => ({
	type: actionTypes.AUTH,
	payload
});

export const logoutAction = () => ({
	type: actionTypes.LOGOUT
});