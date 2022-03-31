import {actionTypes} from "./action";

const initialState = {
	id: null,
	name: "",
	surname: "",
	patronymic: "",
	email: "",
	entity: false
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.AUTH:
			const user = action.payload;

			delete user.password;

			localStorage.setItem("ID_USER", user.id);

			return {
				...state,
				...user
			}

		case actionTypes.LOGOUT:
			localStorage.removeItem("ID_USER");

			return {
				id: null,
				name: "",
				surname: "",
				patronymic: "",
				email: "",
				entity: false
			}

		default:
			return state
	}
};

export default authReducer;