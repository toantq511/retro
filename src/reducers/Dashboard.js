import { DASHBOARD_ACTION_TYPES } from "constants/actionTypes/Dashboard";
const initialState = {
	createBoard: {
		template: {
			list: [],
			isLoading: false,
		},
	},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case DASHBOARD_ACTION_TYPES.SET_LOADING_GET_TEMPLATE_COLUMNS:
			return {
				...state,
				createBoard: {
					...state.createBoard,
					template: {
						...state.createBoard.template,
						isLoading: action.payload,
					},
				},
			};
		case DASHBOARD_ACTION_TYPES.GET_TEMPLATE_COLUMNS:
			return {
				...state,
				createBoard: {
					...state.createBoard,
					template: {
						...state.createBoard.template,
						list: action.payload,
					},
				},
			};
		default:
			return state;
	}
};
