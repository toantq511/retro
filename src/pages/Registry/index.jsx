// Libs
import { LockOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useAuth } from "hooks/useAuth";
import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
// Components
// Data Sources, Mocks
// Others
import "./style.scss";

const Registry = () => {
	const history = useHistory();
	const auth = useAuth();
	const [loading, setLoading] = useState(false);
	return auth.user ? (
		<Redirect to="/" />
	) : (
		<div className="registry-wrapper">
			<h1>Registry</h1>
			<Form
				layout="vertical"
				onFinish={(value) => {
					setLoading(true);
					auth.signup(
						value,
						() => history.push("/login"),
						() => setLoading(false)
					);
				}}
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
				<Button block type="primary" htmlType="submit" loading={loading}>
					Registry
				</Button>
			</Form>
			Have account ? <Link to="/login">Login</Link>
		</div>
	);
};
export default Registry;
