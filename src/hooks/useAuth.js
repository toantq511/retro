import React, { useState, useContext, createContext } from "react";
import "firebase/auth";
import { message } from "antd";
import fetcher from "config/fetcher";
import jwtdecode from "jwt-decode";
const authContext = createContext();

export function ProvideAuth({ children }) {
	const auth = useProvideAuth();
	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
	return useContext(authContext);
};

function useProvideAuth() {
	const token = localStorage.getItem("access-token");
	const [user, setUser] = useState(token ? jwtdecode(token) : false);

	const signin = (user) => {
		return fetcher.post("/auth/login", user).then((response) => {
			const { user, accessToken } = response.data;
			setUser(user);
			localStorage.setItem("access-token", accessToken);
			return response.data.user;
		});
	};

	const signup = (user, cb) => {
		return fetcher.post("/auth/signup", user).then(() => {
			message.success("Sign up successfully");
			cb && cb();
		});
	};

	const logout = () => {
		localStorage.removeItem("access-token");
		setUser(false);
	};

	return {
		user,
		signin,
		signup,
		logout,
		setUser,
	};
}
