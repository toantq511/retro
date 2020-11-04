import { message } from "antd";
import { api } from "config/api";
import fetcher from "config/fetcher";
import { DASHBOARD_ACTION_TYPES } from "constants/actionTypes/Dashboard";

export const setLoadingAddBoard = (isLoading) => ({
	type: DASHBOARD_ACTION_TYPES.SET_LOADING_ADD_BOARD,
	payload: isLoading,
});
export const setLoadingGetBoard = (isLoading) => ({
	type: DASHBOARD_ACTION_TYPES.SET_LOADING_BOARD,
	payload: isLoading,
});

export const addBoard = (value) => (dispatch) => {
	dispatch(setLoadingAddBoard(true));
	fetcher
		.post(api + "/board", value)
		.then((res) => {
			const { data, error } = res.data;
			if (error) message.error(error.code + ": " + error.message);
			else
				dispatch({
					type: DASHBOARD_ACTION_TYPES.ADD_BOARD,
					payload: data,
				});
		})
		.finally(() => dispatch(setLoadingAddBoard(false)));
};

export const getBoard = () => (dispatch) => {
	dispatch(setLoadingGetBoard(true));
	fetcher
		.get(api + "/board")
		.then((res) => {
			const { data, error } = res.data;
			if (error) message.error(error.code + ": " + error.message);
			else if (data)
				dispatch({
					type: DASHBOARD_ACTION_TYPES.GET_BOARD,
					payload: data,
				});
		})
		.finally(() => dispatch(setLoadingGetBoard(false)));
};

export const toggleRealtime = () => ({
	type: DASHBOARD_ACTION_TYPES.TOGGLE_REALTIME,
});
