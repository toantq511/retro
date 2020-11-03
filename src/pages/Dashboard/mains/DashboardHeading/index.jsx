// libs
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { toggleRealtime } from "actions/Dashboard";
import { Switch } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// components
// others
import "./style.scss";

const DashboardHeading = () => {
	const { realtime } = useSelector((state) => state.dashboard);
	const dispatch = useDispatch();
	return (
		<div className="dashboard-heading-wrapper">
			<div className="title">
				<h1>My boards</h1>
				<div>
					Realtime:
					<Switch
						checkedChildren={<CheckOutlined />}
						unCheckedChildren={<CloseOutlined />}
						checked={realtime}
						onChange={() => dispatch(toggleRealtime())}
					/>
				</div>
			</div>
		</div>
	);
};
export default DashboardHeading;
