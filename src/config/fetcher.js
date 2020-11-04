import { message } from "antd";
import { api } from "./api";
import axios from "axios";
const fetcher = axios.create();

fetcher.interceptors.request.use(
	async (config) => {
		const token = await localStorage.getItem("token");
		config.headers = {
			Authorization: `Bearer ${token}`,
		};
		config.baseURL = api;
		return config;
	},
	(error) => Promise.reject(error)
);

fetcher.interceptors.response.use(
	(response) => new Promise((resolve) => resolve(response)),
	(error) => {
		if (!error.response)
			return new Promise((resolve, reject) => {
				message.error("Network Error.");
				reject(error);
			});
		if (error.response.status === 403)
			return new Promise((resolve, reject) => {
				message.error("You don't have permission to access this page.");
				reject(error);
			});
		else if (error.response.status === 401)
			return new Promise((resolve, reject) => {
				message.error("Not logged in");
				reject(error);
			});
		else {
			return new Promise((resolve, reject) => {
				message.error("Something went wrong.");
				reject(error);
			});
		}
	}
);

export default fetcher;
