import { message } from "antd";
import { api } from "config/api";
import fetcher from "config/fetcher";
import { DASHBOARD_ACTION_TYPES } from "constants/actionTypes/Dashboard";

export const setLoadingAddBoard = (isLoading) => ({
	type: DASHBOARD_ACTION_TYPES.SET_LOADING_ADD_BOARD,
	payload: isLoading,
});

export const addBoard = (value) => (dispatch) => {
	dispatch(setLoadingAddBoard(true));
	fetcher
		.post(api + "/board", value)
		.then(() => message.success("Add successfully"))
		.finally(() => dispatch(setLoadingAddBoard(false)));
};
