import { combineReducers } from "redux";
import Dashboard from "reducers/Dashboard";
import Auth from "reducers/Auth";
import BoardDetail from "reducers/BoardDetail";

export default combineReducers({
	dashboard: Dashboard,
	detail: BoardDetail,
	auth: Auth,
});
