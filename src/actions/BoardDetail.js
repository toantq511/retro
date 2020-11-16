import { message } from "antd";
import fetcher from "config/fetcher";
import { BOARD_DETAIL_ACTION_TYPES } from "constants/actionTypes/BoardDetail";

export const setLoadingAddItem = (isLoading) => ({
	type: BOARD_DETAIL_ACTION_TYPES.SET_LOADING_ADD_ITEM,
	payload: isLoading,
});
export const setLoadingEditBoard = (isLoading) => ({
	type: BOARD_DETAIL_ACTION_TYPES.SET_LOADING_EDIT_BOARD,
	payload: isLoading,
});

export const addItem = (boardId, column, name, cb) => (dispatch) => {
	dispatch(setLoadingAddItem(true));
	fetcher
		.post(`/board/${boardId}/${column}`, { name })
		.then(() => {
			message.success("Add Item successfully");
			cb && cb();
		})
		.finally(() => dispatch(setLoadingAddItem(false)));
};

export const editItem = (itemId, name, cb) => {
	fetcher.put(`/board/item/${itemId}`, { name }).then(() => {
		message.success("Edit Item successfully");
		cb && cb();
	});
};

export const deleteItem = (itemId) => {
	fetcher
		.delete(`/board/item/${itemId}`)
		.then(() => message.success("Remove Item successfully"));
};

export const editBoard = (boardId, name) => (dispatch) => {
	dispatch(setLoadingEditBoard(true));
	fetcher
		.put("/board/" + boardId, { name })
		.then(() => message.success("Edit board successfully"))
		.finally(() => setLoadingEditBoard(false));
};

export const deleteBoard = (boardId) => {
	fetcher
		.delete(`/board/${boardId}`)
		.then(() => message.success("Remove Board successfully"));
};

export const moveItem = (itemId, source, destination) =>
	fetcher.put(`/board/item/move/${itemId}`, { source, destination });
