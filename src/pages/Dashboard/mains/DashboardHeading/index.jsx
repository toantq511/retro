// libs
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { toggleRealtime } from "actions/Dashboard";
import { Button, Switch } from "antd";
import DatabaseDrawer from "pages/Dashboard/components/DatabaseDrawer";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
// others
import "./style.scss";

const DashboardHeading = () => {
	const { realtime } = useSelector((state) => state.dashboard);
	const dispatch = useDispatch();
	const [visible, setVisible] = useState(false);
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
			<div>
				<Button type="primary" onClick={() => setVisible(true)}>
					Database
				</Button>

				<DatabaseDrawer visible={visible} hide={() => setVisible(false)} />
			</div>
		</div>
	);
};
export default DashboardHeading;
