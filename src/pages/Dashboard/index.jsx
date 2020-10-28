// libs
import BoardList from "pages/Dashboard/mains/BoardList";
import BoardListRealtime from "pages/Dashboard/mains/BoardListRealtime";
import DashboardHeading from "pages/Dashboard/mains/DashboardHeading";
import React from "react";
import { useSelector } from "react-redux";
// components
// others

const Dashboard = () => {
	const { realtime } = useSelector((state) => state.dashboard);
	return (
		<div className="dashboard-wrapper">
			<DashboardHeading />
			{realtime ? <BoardListRealtime /> : <BoardList />}
		</div>
	);
};
export default Dashboard;
