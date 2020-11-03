import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ component: Component, goto, ...rest }) => {
	const { token } = localStorage.getItem("token");
	return (
		<Route
			{...rest}
			render={(props) =>
				token ? <Component {...props} /> : <Redirect to={goto} />
			}
		/>
	);
};
