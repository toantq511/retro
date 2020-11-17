import { message } from "antd";
import fetcher from "config/fetcher";

export const editUser = (value, setUser) => {
	fetcher.put("/user/", value).then((res) => {
		const { token, user } = res.data;
		console.log({ token, user });
		if (token) localStorage.setItem("access-token", token);
		setUser(user);
		message.success("Update profile successfully");
	});
};
export const editPassword = (value) => {
	fetcher
		.put("/user/password", value)
		.then(() => message.success("Update password successfully"));
};
