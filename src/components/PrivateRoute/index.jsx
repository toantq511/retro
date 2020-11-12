import { useAuth } from "hooks/useAuth";
import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = (props) => {
	const auth = useAuth();
	return auth.user ? <Route {...props} /> : <Redirect to="/login" />;
};

export default PrivateRoute;
