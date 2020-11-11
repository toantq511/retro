import { DASHBOARD_ACTION_TYPES } from "constants/actionTypes/Dashboard";
const initialState = {
	loadingAddBoard: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case DASHBOARD_ACTION_TYPES.SET_LOADING_ADD_BOARD:
			return {
				...state,
				loadingAddBoard: action.payload,
			};
		default:
			return state;
	}
};
