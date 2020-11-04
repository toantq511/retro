import { logout } from "actions/Auth";
import { message } from "antd";
import fetcher from "config/fetcher";
import { PROFILE_ACTION_TYPES } from "constants/actionTypes/Profile";

export const setLoadingEditUser = (isLoading) => ({
	type: PROFILE_ACTION_TYPES.SET_LOADING_UPDATE_PROFILE,
	payload: isLoading,
});
export const setLoadingEditPassword = (isLoading) => ({
	type: PROFILE_ACTION_TYPES.SET_LOADING_UPDATE_PASSWORD,
	payload: isLoading,
});

export const editUser = (value) => (dispatch) => {
	dispatch(setLoadingEditUser(true));
	fetcher
		.put("/user/", value)
		.then((res) => {
			const { data, error } = res.data;
			if (error) message.error(error.code + ": " + error.message);
			else {
				if (data.token) localStorage.setItem("token", data.token);
				dispatch({
					type: PROFILE_ACTION_TYPES.UPDATE_PROFILE,
					payload: data,
				});
				message.success("Update profile successfully");
			}
		})
		.finally(() => dispatch(setLoadingEditUser(false)));
};
export const editPassword = (value) => (dispatch) => {
	dispatch(setLoadingEditPassword(true));
	fetcher
		.put("/user/password", value)
		.then((res) => {
			const { error } = res.data;
			if (error) message.error(error.code + ": " + error.message);
			else {
				message.success("Update password successfully");
				setTimeout(() => {
					dispatch(logout());
				}, 1000);
			}
		})
		.finally(() => dispatch(setLoadingEditPassword(false)));
};
