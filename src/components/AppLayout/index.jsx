// libs
import React from "react";
import { Dropdown, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
// components
// others
import "./style.scss";
import { useAuth } from "hooks/useAuth";
import { CaretDownFilled } from "@ant-design/icons";

const AppLayout = ({ children }) => {
	const auth = useAuth();
	return (
		<Layout className="app-layout-wrapper">
			<Layout.Header className="app-header">
				<Link to="/">
					<h1 className="app-brand">Fun Retro</h1>
				</Link>
				<Menu theme="dark" mode="horizontal">
					{auth.user ? (
						<Dropdown
							trigger="click"
							overlay={
								<Menu>
									<Menu.Item>
										<Link to="/profile">Profile</Link>
									</Menu.Item>
									<Menu.Item onClick={() => auth.logout()}>Log out</Menu.Item>
								</Menu>
							}
						>
							<span style={{ cursor: "pointer" }}>
								{auth.user.username} <CaretDownFilled />
							</span>
						</Dropdown>
					) : (
						<Menu.Item>
							<Link to="/login">Login</Link>
						</Menu.Item>
					)}
				</Menu>
			</Layout.Header>
			<Layout.Content className="app-content">{children}</Layout.Content>
		</Layout>
	);
};
export default AppLayout;
