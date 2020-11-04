// Libs
import { LockOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import { registry } from "actions/Auth";
import { Button, Form, Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
// Components
// Data Sources, Mocks
// Others
import "./style.scss";

const Registry = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { isLoadingSignup } = useSelector((state) => state.auth);
	return (
		<div className="registry-wrapper">
			<h1>Registry</h1>
			<Form
				layout="vertical"
				onFinish={(value) =>
					dispatch(registry(value, () => history.push("/login")))
				}
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
