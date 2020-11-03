import { AUTH_ACTION_TYPES } from "constants/actionTypes/Auth";
const initialState = {
	isLoadingLogin: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case AUTH_ACTION_TYPES.SET_LOADING_LOGIN:
			return {
				...state,
				isLoadingLogin: action.payload,
			};
		case AUTH_ACTION_TYPES.LOGIN:
			return {
				...state,
				...action.payload,
			};
		case AUTH_ACTION_TYPES.LOGOUT:
			return initialState;
		default:
			return state;
	}
};
