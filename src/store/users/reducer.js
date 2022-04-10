import {actionTypes} from "./action";

const initialState = {
	users: []
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_ALL_USERS:
			return {
				...state,
				users: action.payload
			}

		case actionTypes.ADD_USER:
			const users = JSON.parse(localStorage.getItem("users"));
			users.push(action.payload);
			localStorage.setItem("users", JSON.stringify(users));

			return {
				...state,
				users: [...state.users, action.payload]
			}

		case actionTypes.UPDATE_USERS:
			localStorage.setItem("users", JSON.stringify(action.payload));

			return {
				...state,
				users: action.payload
			}

		default:
			return state
	}
};

export default usersReducer;