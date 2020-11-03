import { message } from "antd";
import Axios from "axios";
import { api } from "config/api";
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
	Axios.post(api + "/board", value)
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

export const toggleRealtime = () => ({
	type: DASHBOARD_ACTION_TYPES.TOGGLE_REALTIME,
});
