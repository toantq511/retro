// libs
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { login } from "actions/Auth";
import { Button, Form, Input } from "antd";
import { useAuth } from "hooks/useAuth";
import React from "react";
import { Link, Redirect } from "react-router-dom";
// components
// others
import "./style.scss";

const Login = () => {
	const auth = useAuth();
	console.log(auth.user);
	return auth.user ? (
		<Redirect to="/" />
	) : (
		<div className="login-wrapper">
			<h1>Login</h1>
			<Form layout="vertical" onFinish={(value) => auth.signin(value)}>
				<Form.Item name="username" required>
					<Input placeholder="Username" prefix={<UserOutlined />} />
				</Form.Item>
				<Form.Item name="password" required>
					<Input.Password placeholder="Password" prefix={<LockOutlined />} />
				</Form.Item>
				<Button block type="primary" htmlType="submit">
					Login
				</Button>
			</Form>
			New User ? <Link to="/registry">Registry</Link>
		</div>
	);
};
export default Login;
