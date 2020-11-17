import { message } from "antd";
import fetcher from "config/fetcher";

export const addItem = (boardId, column, name, cb) => {
	fetcher.post(`/board/${boardId}/${column}`, { name }).then(() => {
		message.success("Add Item successfully");
		cb && cb();
	});
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

export const editBoard = (boardId, name) => {
	fetcher
		.put("/board/" + boardId, { name })
		.then(() => message.success("Edit board successfully"));
};

export const deleteBoard = (boardId) => {
	fetcher
		.delete(`/board/${boardId}`)
		.then(() => message.success("Remove Board successfully"));
};

export const moveItem = (itemId, source, destination) =>
	fetcher.put(`/board/item/move/${itemId}`, { source, destination });
