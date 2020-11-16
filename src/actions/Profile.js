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

export const editUser = (value, setUser) => (dispatch) => {
	dispatch(setLoadingEditUser(true));
	fetcher
		.put("/user/", value)
		.then((res) => {
			const { token, user } = res.data;
			console.log({ token, user });
			if (token) localStorage.setItem("access-token", token);
			setUser(user);
			message.success("Update profile successfully");
		})
		.finally(() => dispatch(setLoadingEditUser(false)));
};
export const editPassword = (value) => (dispatch) => {
	dispatch(setLoadingEditPassword(true));
	fetcher
		.put("/user/password", value)
		.then((res) => message.success("Update password successfully"))
		.finally(() => dispatch(setLoadingEditPassword(false)));
};
