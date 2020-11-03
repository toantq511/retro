// libs
import React from "react";
import { Dropdown, Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
// components
// others
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "actions/Auth";

const AppLayout = ({ children }) => {
	const { name } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const { push } = useHistory();
	return (
		<Layout className="app-layout-wrapper">
			<Layout.Header className="app-header">
				<Link to="/">
					<h1 className="app-brand">Fun Retro</h1>
				</Link>
				<Menu theme="dark" mode="horizontal">
					<Menu.Item icon={<UserOutlined />}>
						{name ? (
							<Dropdown
								trigger="click"
								overlay={
									<Menu>
										<Menu.Item>
											<Link to="/profile">Profile</Link>
										</Menu.Item>
										<Menu.Item
											onClick={() => dispatch(logout(), push("/login"))}
										>
											Log out
										</Menu.Item>
									</Menu>
								}
							>
								<span>{name}</span>
							</Dropdown>
						) : (
							<Link to="/login">Login</Link>
						)}
					</Menu.Item>
				</Menu>
			</Layout.Header>
			<Layout.Content className="app-content">{children}</Layout.Content>
		</Layout>
	);
};
export default AppLayout;
