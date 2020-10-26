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

const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<AppLayout>
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route path="/board/:id" component={RetroDetail} />
					<Route component={Page404} />
				</Switch>
			</AppLayout>
		</BrowserRouter>
	</Provider>
);

export default App;
