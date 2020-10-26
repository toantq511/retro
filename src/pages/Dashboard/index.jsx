// libs
import BoardList from "pages/Dashboard/mains/BoardList";
import DashboardHeading from "pages/Dashboard/mains/DashboardHeading";
import React from "react";
// components
// others

const Dashboard = () => (
	<div className="dashboard-wrapper">
		<DashboardHeading />
		<BoardList />
	</div>
);
export default Dashboard;
