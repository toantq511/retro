// libs
import React from "react";
import { Button, Form, Input } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { editPassword } from "actions/Profile";
import { useAuth } from "hooks/useAuth";
// components
// others

const UpdatePassword = () => {
	const auth = useAuth();
	return (
		<Form
			className="update-password-wrapper"
			initialValues={auth.user}
			layout="vertical"
			onFinish={(value) => editPassword(value)}
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
