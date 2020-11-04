// libs
import BoardList from "pages/Dashboard/mains/BoardList";
import DashboardHeading from "pages/Dashboard/mains/DashboardHeading";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
// components
// others

const Dashboard = () => {
	const { name } = useSelector((state) => state.auth);
	return name ? (
		<div className="dashboard-wrapper">
			<DashboardHeading />
			<BoardList />
		</div>
	) : (
		<Redirect to="/login" />
	);
};

export default Dashboard;