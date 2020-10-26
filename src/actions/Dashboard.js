import { DASHBOARD_ACTION_TYPES } from "constants/actionTypes/Dashboard";

export const setLoadingGetTemplateColumns = (isLoading) => ({
	type: DASHBOARD_ACTION_TYPES.SET_LOADING_GET_TEMPLATE_COLUMNS,
	payload: isLoading,
});

export const getTemplateColumns = (id) => (dispatch) => {
	dispatch(setLoadingGetTemplateColumns(true));
	setTimeout(() => {
		dispatch({
			type: DASHBOARD_ACTION_TYPES.GET_TEMPLATE_COLUMNS,
			payload: ["abc", "def"],
		});
		dispatch(setLoadingGetTemplateColumns(false));
	}, 1000);
};
