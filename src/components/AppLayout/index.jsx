// libs
import React from "react";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
// components
// others
import "./style.scss";

const AppLayout = ({ children }) => (
	<Layout className="app-layout-wrapper">
		<Layout.Header className="app-header">
			<Link to="/">
				<h1 className="app-brand">Fun Retro</h1>
			</Link>
			<Menu theme="dark" mode="horizontal">
				<Menu.Item icon={<UserOutlined />}>Login</Menu.Item>
			</Menu>
		</Layout.Header>
		<Layout.Content className="app-content">{children}</Layout.Content>
	</Layout>
);

export default AppLayout;
