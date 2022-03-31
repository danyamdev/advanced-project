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
			localStorage.setItem("ID_USER", action.payload.id);

			return {
				...state,
				...action.payload
			}

		case actionTypes.LOGOUT:
			localStorage.removeItem("ID_USER");

			return {
				...state,
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