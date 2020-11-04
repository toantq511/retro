import { message } from "antd";
import fetcher from "config/fetcher";
import { BOARD_DETAIL_ACTION_TYPES } from "constants/actionTypes/BoardDetail";

export const setLoadingGetDetail = (isLoading) => ({
	type: BOARD_DETAIL_ACTION_TYPES.SET_LOADING_GET_DETAIL,
	payload: isLoading,
});
export const setLoadingAddItem = (isLoading) => ({
	type: BOARD_DETAIL_ACTION_TYPES.SET_LOADING_ADD_ITEM,
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

export const addItem = (boardId, column, name, cb) => (dispatch) => {
	dispatch(setLoadingAddItem(true));
	fetcher
		.post("/item", { boardId, column, name })
		.then((res) => {
			const { data, error } = res.data;
			if (error) message.error(error.code + ": " + error.message);
			else
				dispatch({
					type: BOARD_DETAIL_ACTION_TYPES.ADD_ITEM,
					payload: data,
				});
			cb();
		})
		.finally(() => dispatch(setLoadingAddItem(false)));
};

export const editItem = (itemId, name, cb) => (dispatch) => {
	fetcher.put("/item/" + itemId, { name }).then((res) => {
		const { data, error } = res.data;
		if (error) message.error(error.code + ": " + error.message);
		else
			dispatch({
				type: BOARD_DETAIL_ACTION_TYPES.EDIT_ITEM,
				payload: data,
			});
		cb();
	});
};

export const editBoard = (boardId, name) => (dispatch) => {
	fetcher.put("/board/" + boardId, { name }).then((res) => {
		const { data, error } = res.data;
		if (error) message.error(error.code + ": " + error.message);
		else
			dispatch({
				type: BOARD_DETAIL_ACTION_TYPES.EDIT_BOARD,
				payload: data,
			});
	});
};
