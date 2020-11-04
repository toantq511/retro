// libs
import React from "react";
import { Button, Form, Input } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { editPassword } from "actions/Profile";
import { useDispatch, useSelector } from "react-redux";
// components
// others

const UpdatePassword = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.auth);
	return (
		<Form
			className="update-password-wrapper"
			initialValues={user}
			layout="vertical"
			onFinish={(value) => dispatch(editPassword(value))}
		>
			<Form.Item
				label="Old Password"
				name="oldPass"
				required
				rules={[{ required: true }]}
			>
				<Input.Password prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item
				label="New Password"
				name="newPass"
				required
				rules={[{ required: true }]}
			>
				<Input.Password prefix={<LockOutlined />} />
			</Form.Item>
			<Button block type="primary" htmlType="submit">
				Update
			</Button>
		</Form>
	);
};
export default UpdatePassword;
