import { message } from "antd";
import Axios from "axios";
import { api } from "config/api";
import { DASHBOARD_ACTION_TYPES } from "constants/actionTypes/Dashboard";

export const setLoadingGetTemplateColumns = (isLoading) => ({
	type: DASHBOARD_ACTION_TYPES.SET_LOADING_GET_TEMPLATE_COLUMNS,
	payload: isLoading,
});

export const getTemplateColumns = (id) => (dispatch) => {
	dispatch(setLoadingGetTemplateColumns(true));
	setTimeout(() => {
		dispatch({
			type: DASHBOARD_ACTION_TYPES.GET_TEMPLATE_COLUMNS,
			payload: ["abc", "def"],
		});
		dispatch(setLoadingGetTemplateColumns(false));
	}, 1000);
};

export const toggleRealtime = () => ({
	type: DASHBOARD_ACTION_TYPES.TOGGLE_REALTIME,
});

export const setLoadingExport = (isLoading) => ({
	type: DASHBOARD_ACTION_TYPES.SET_LOADING_EXPORT,
	payload: isLoading,
});
export const setLoadingImport = (isLoading) => ({
	type: DASHBOARD_ACTION_TYPES.SET_LOADING_IMPORT,
	payload: isLoading,
});

export const exportData = () => (dispatch) => {
	dispatch(setLoadingExport(true));
	Axios.get(api + "/export")
		.then((res) => {
			const a = document.createElement("a");
			a.href =
				"data:text/json;charset=utf-8," +
				encodeURIComponent(JSON.stringify(res.data, null, 4));
			a.style.display = "none";
			a.download = "data.json";
			document.body.appendChild(a);
			a.click();
			a.remove();
			message.success("Data export sucessfully");
		})
		.finally(() => dispatch(setLoadingExport(false)));
};

export const importData = (data) => (dispatch) => {
	dispatch(setLoadingImport(true));
	Axios.post(api + "/import", data)
		.then((response) => {
			if (response.data) {
				if (response.data.status) message.success(response.data.message);
				else message.error(response.data.message);
			}
		})
		.catch(() => message.error("Something went wrong"))
		.finally(() => dispatch(setLoadingImport(false)));
};
