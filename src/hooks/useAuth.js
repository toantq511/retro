// Hook (use-auth.js)
import React, { useState, useEffect, useContext, createContext } from "react";
import firebase from "../config/firebase";
import "firebase/auth";
import { message } from "antd";
import Axios from "axios";
import fetcher from "config/fetcher";
const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
	const auth = useProvideAuth();
	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
	return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
	const [user, setUser] = useState(null);
	// Wrap any Firebase methods we want to use making sure ...
	// ... to save the user to state.
	const signin = (user) => {
		return fetcher.post("/auth/login", user).then((response) => {
			console.log(response.data);
			setUser(response.data);
			return response.data;
		});
	};

	const signup = (user, cb) => {
		return fetcher.post("/auth/signup", user).then(() => {
			message.success("Sign up successfully");
			cb && cb();
		});
	};

	const signout = () => {
		setUser(false);
	};

	// Subscribe to user on mount
	// Because this sets state in the callback it will cause any ...
	// ... component that utilizes this hook to re-render with the ...
	// ... latest auth object.
	useEffect(() => {
		// const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
		// 	if (user) {
		// 		setUser(user);
		// 	} else {
		// 		setUser(false);
		// 	}
		// });
		// // Cleanup subscription on unmount
		// return () => unsubscribe();
	}, []);

	// Return the user object and auth methods
	return {
		user,
		signin,
		signup,
		signout,
	};
}
