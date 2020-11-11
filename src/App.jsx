// libs
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// components
import AppLayout from "components/AppLayout";
// pages
import Dashboard from "pages/Dashboard";
import Page404 from "pages/Page404";
// others
import store from "./store";
import RetroDetail from "./pages/BoardDetail/index";
import Login from "pages/Login";
import Registry from "pages/Registry";
import Profile from "pages/Profile";
import { ProvideAuth } from "hooks/useAuth";
import PrivateRoute from "components/PrivateRoute";

const App = () => (
	<Provider store={store}>
		<ProvideAuth>
			<BrowserRouter basename="/retro">
				<AppLayout>
					<Switch>
						<PrivateRoute exact path="/" component={Dashboard} />
						<PrivateRoute path="/board/:id" component={RetroDetail} />
						<PrivateRoute path="/profile" component={Profile} />
						<Route path="/login" component={Login} />
						<Route path="/registry" component={Registry} />
						<Route component={Page404} />
					</Switch>
				</AppLayout>
			</BrowserRouter>
		</ProvideAuth>
	</Provider>
);

export default App;
