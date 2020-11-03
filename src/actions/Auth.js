import { message } from "antd";
import Axios from "axios";
import { api } from "config/api";
import { AUTH_ACTION_TYPES } from "constants/actionTypes/Auth";

export const setLoadingLogin = (isLoading) => ({
	type: AUTH_ACTION_TYPES.SET_LOADING_LOGIN,
	payload: isLoading,
});
export const setLoadingSignup = (isLoading) => ({
	type: AUTH_ACTION_TYPES.SETLOADING_SIGNUP,
	payload: isLoading,
});

export const login = (value) => (dispatch) => {
	dispatch(setLoadingLogin(true));
	Axios.post(api + "/login", value)
		.then((res) => {
			const { data, error } = res.data;
			if (error) message.error(error.code + ": " + error.message);
			else {
				dispatch({
					type: AUTH_ACTION_TYPES.LOGIN,
					payload: data,
				});
				localStorage.setItem("token", data.token);
			}
		})
		.finally(() => dispatch(setLoadingLogin(false)));
};

export const registry = (value, cb) => (dispatch) => {
	dispatch(setLoadingSignup(true));
	Axios.post(api + "/signup", value)
		.then((res) => {
			const { data, error } = res.data;
			if (error) message.error(error.code + ": " + error.message);
			else if (data) cb();
		})
		.finally(() => dispatch(setLoadingSignup(false)));
};

export const logout = (cb) => (dispatch) => {
	dispatch({
		type: AUTH_ACTION_TYPES.LOGOUT,
	});
	if (cb) cb();
};
