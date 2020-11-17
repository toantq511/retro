import { message } from "antd";
import fetcher from "config/fetcher";

export const addBoard = (value) => {
	fetcher.post("/board", value).then(() => message.success("Add successfully"));
};
