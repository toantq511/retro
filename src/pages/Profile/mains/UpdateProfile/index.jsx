// libs
import { Button, Form, Input } from "antd";
import { SmileOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import { editUser } from "actions/Profile";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
// components
// others

const UpdateProfile = () => {
	const dispatch = useDispatch();
	const auth = useAuth();
	return (
		<Form
			className="update-profile-wrapper"
			initialValues={auth.user}
			layout="vertical"
			onFinish={(value) => dispatch(editUser(value, auth.setUser))}
		>
			<Form.Item
				label="Username"
				name="username"
				required
				rules={[{ required: true }]}
			>
				<Input placeholder="Username" disabled prefix={<UserOutlined />} />
			</Form.Item>
			<Form.Item label="Name" name="name" required rules={[{ required: true }]}>
				<Input placeholder="Name" prefix={<SmileOutlined />} />
			</Form.Item>
			<Button block type="primary" htmlType="submit">
				Update
			</Button>
		</Form>
	);
};

export default UpdateProfile;
