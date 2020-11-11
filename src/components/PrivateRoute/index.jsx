import { useAuth } from "hooks/useAuth";
import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = (props) => {
	const auth = useAuth();
	console.log(auth);
	return auth.user ? (
		<Route {...props} />
	) : (
		<Route render={() => <Redirect to="/login" />} />
	);
};

export default PrivateRoute;
