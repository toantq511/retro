// Libs
import { LockOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useAuth } from "hooks/useAuth";
import React from "react";
import { useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
// Components
// Data Sources, Mocks
// Others
import "./style.scss";

const Registry = () => {
	const history = useHistory();
	const { isLoadingSignup } = useSelector((state) => state.auth);
	const auth = useAuth();
	return auth.user ? (
		<Redirect to="/" />
	) : (
		<div className="registry-wrapper">
			<h1>Registry</h1>
			<Form
				layout="vertical"
				onFinish={(value) => auth.signup(value, () => history.push("/login"))}
			>
				<Form.Item name="name" required rules={[{ required: true }]}>
					<Input placeholder="Name" prefix={<SmileOutlined />} />
				</Form.Item>
				<Form.Item name="username" required rules={[{ required: true }]}>
					<Input placeholder="Username" prefix={<UserOutlined />} />
				</Form.Item>
				<Form.Item name="password" required rules={[{ required: true }]}>
					<Input.Password placeholder="Password" prefix={<LockOutlined />} />
				</Form.Item>
				<Button
					block
					type="primary"
					htmlType="submit"
					loading={isLoadingSignup}
				>
					Registry
				</Button>
			</Form>
			Have account ? <Link to="/login">Login</Link>
		</div>
	);
};
export default Registry;
