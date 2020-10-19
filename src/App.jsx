// libs
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// components
// others
import store from "./store";

const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<div className="app-wrapper">app</div>
				</Route>
				<Route>404</Route>
			</Switch>
		</BrowserRouter>
	</Provider>
);

export default App;
