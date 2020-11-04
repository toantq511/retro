import { AUTH_ACTION_TYPES } from "constants/actionTypes/Auth";
import { PROFILE_ACTION_TYPES } from "constants/actionTypes/Profile";
import jwt from "jwt-decode";
const getUser = () => {
	const token = localStorage.getItem("token");
	if (token) {
		try {
			const { password, ...user } = jwt(token);
			return user;
		} catch {
			return undefined;
		}
	} else return undefined;
};
const initialState = {
	isLoadingLogin: false,
	isLoadingGetUser: true,
	...getUser(),
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
			return {};
		case AUTH_ACTION_TYPES.GET_USER:
			return {
				isLoadingGetUser: false,
				...action.payload,
			};
		case AUTH_ACTION_TYPES.SET_LOADING_GET_USER:
			return {
				isLoadingGetUser: action.payload,
				...state,
			};
		case PROFILE_ACTION_TYPES.UPDATE_PROFILE:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};
