import { DASHBOARD_ACTION_TYPES } from "constants/actionTypes/Dashboard";
const initialState = {
	data: [],
	isLoadingGet: false,
	isLoadingAdd: false,
	realtime: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case DASHBOARD_ACTION_TYPES.SET_LOADING_ADD_BOARD:
			return {
				...state,
				isLoadingAdd: action.payload,
			};
		case DASHBOARD_ACTION_TYPES.SET_LOADING_BOARD:
			return {
				...state,
				isLoadingGet: action.payload,
			};
		case DASHBOARD_ACTION_TYPES.TOGGLE_REALTIME:
			return {
				...state,
				realtime: !state.realtime,
			};
		case DASHBOARD_ACTION_TYPES.GET_BOARD:
			return {
				...state,
				data: action.payload,
			};
		case DASHBOARD_ACTION_TYPES.ADD_BOARD:
			return {
				...state,
				data: [action.payload, ...state.data],
			};
		default:
			return state;
	}
};
