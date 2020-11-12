import { message } from "antd";
import { api } from "./api";
import axios from "axios";
import Cookies from "js-cookie";
import { createBrowserHistory } from "history"; // or createBrowserHistory
const history = createBrowserHistory();

const fetcher = axios.create();

fetcher.interceptors.request.use(
	async (config) => {
		const token = localStorage.getItem("access-token");
		console.log(token);
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
				message.error(
					error.response.data.message ||
						"You don't have permission to access this page."
				);
				reject(error);
			});
		else if (error.response.status === 401)
			return new Promise((resolve, reject) => {
				message.error(error.response.data.message || "Unauthorized");
				history.push("/login");
			});
		else if (error.response.status === 404)
			return new Promise((resolve, reject) => {
				message.error(error.response.data.message || "URL not found");
				reject(error);
			});
		else if (error.response.status === 500)
			return new Promise((resolve, reject) => {
				message.error(error.response.data.message || "Server Error");
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
