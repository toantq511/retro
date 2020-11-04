import { BOARD_DETAIL_ACTION_TYPES } from "constants/actionTypes/BoardDetail";
const initialState = {
	data: {
		items: {
			1: [],
			2: [],
			3: [],
		},
	},
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
		case BOARD_DETAIL_ACTION_TYPES.ADD_ITEM:
			return {
				...state,
				data: {
					...state.data,
					items: {
						...state.data.items,
						[action.payload.column]: [
							...state.data.items[action.payload.column],
							action.payload,
						],
					},
				},
			};
		case BOARD_DETAIL_ACTION_TYPES.EDIT_ITEM:
			return {
				...state,
				data: {
					...state.data,
					items: {
						...state.data.items,
						[action.payload.column]: state.data.items[
							action.payload.column
						].map((item) =>
							item.id === action.payload.id ? action.payload : item
						),
					},
				},
			};
		case BOARD_DETAIL_ACTION_TYPES.EDIT_BOARD:
			return {
				...state,
				data: {
					...state.data,
					...action.payload,
				},
			};
		default:
			return state;
	}
};
