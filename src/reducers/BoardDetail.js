import { BOARD_DETAIL_ACTION_TYPES } from "constants/actionTypes/BoardDetail";
const initialState = {
	data: undefined,
	isLoading: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case BOARD_DETAIL_ACTION_TYPES.SET_LOADING_GET_DETAIL:
			return {
				...state,
				isLoading: action.payload,
			};
		case BOARD_DETAIL_ACTION_TYPES.GET_DETAIL:
			return {
				...state,
				data: action.payload,
			};
		default:
			return state;
	}
};
