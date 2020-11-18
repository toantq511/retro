// libs
import {
	FacebookFilled,
	GoogleCircleFilled,
	LockOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useAuth } from "hooks/useAuth";
import React from "react";
import { Link, Redirect } from "react-router-dom";
// components
// others
import "./style.scss";

const Login = () => {
	const auth = useAuth();
	return auth.user ? (
		<Redirect to="/" />
	) : (
		<div className="login-wrapper">
			<h1>Login</h1>
			<Form layout="vertical" onFinish={(value) => auth.signin(value)}>
				<Form.Item name="username" required rules={[{ required: true }]}>
					<Input placeholder="Username" prefix={<UserOutlined />} />
				</Form.Item>
				<Form.Item name="password" required rules={[{ required: true }]}>
					<Input.Password placeholder="Password" prefix={<LockOutlined />} />
				</Form.Item>
				<Button block type="primary" htmlType="submit">
					Login
				</Button>
			</Form>
			New User ? <Link to="/registry">Registry</Link>
			<div className="btns">
				<Button
					icon={<GoogleCircleFilled />}
					danger
					onClick={() => auth.signInGoogle()}
				>
					Login With Google
				</Button>
				<Button icon={<FacebookFilled />} onClick={() => auth.signInFacebook()}>
					Login With Facebook
				</Button>
			</div>
		</div>
	);
};
export default Login;
