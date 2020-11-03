import { message } from "antd";
import fetcher from "config/fetcher";
import { BOARD_DETAIL_ACTION_TYPES } from "constants/actionTypes/BoardDetail";

export const setLoadingGetDetail = (isLoading) => ({
	type: BOARD_DETAIL_ACTION_TYPES.SET_LOADING_GET_DETAIL,
	payload: isLoading,
});

export const getDetail = (id) => (dispatch) => {
	dispatch(setLoadingGetDetail(true));
	fetcher
		.get("/board/" + id)
		.then((res) => {
			const { data, error } = res.data;
			if (error) message.error(error.code + ": " + error.message);
			else
				dispatch({
					type: BOARD_DETAIL_ACTION_TYPES.GET_DETAIL,
					payload: data,
				});
		})
		.finally(() => dispatch(setLoadingGetDetail(false)));
};
