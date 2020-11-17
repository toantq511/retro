import React, { useState, useContext, createContext } from "react";
import { message } from "antd";
import firebase from "firebase/app";
import "firebase/auth";
import fetcher from "config/fetcher";
import jwtdecode from "jwt-decode";

const authContext = createContext();

// firebase.initializeApp(firebaseConfig);

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

	const signInGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				const user = {
					username: result.user.email,
					name: result.user.displayName,
				};
				setUser(user);
				fetcher
					.post("/auth/token", user)
					.then(({ data }) =>
						localStorage.setItem("access-token", data.accessToken)
					);
				return user;
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				message.error(errorCode + ": " + errorMessage);
			});
	};

	const signInFacebook = () => {
		const provider = new firebase.auth.FacebookAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				const user = {
					username: result.user.email,
					name: result.user.displayName,
				};
				setUser(user);
				fetcher
					.post("/auth/token", user)
					.then(({ data }) =>
						localStorage.setItem("access-token", data.accessToken)
					);
				return user;
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				message.error(errorCode + ": " + errorMessage);
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
		signInGoogle,
		signInFacebook,
	};
}
