import { combineReducers } from "redux";
import Dashboard from "reducers/Dashboard";
import Auth from "reducers/Auth";

export default combineReducers({
	dashboard: Dashboard,
	auth: Auth,
});
