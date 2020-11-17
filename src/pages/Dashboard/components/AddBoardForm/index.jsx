// libs
import React from "react";
import { Form, Input } from "antd";
// components
// others
import "./style.scss";
import { addBoard } from "actions/Dashboard";

const AddBoardForm = ({ form }) => (
	<Form
		className="add-board-form-wrapper"
		form={form}
		layout="vertical"
		onFinish={(values) => addBoard(values)}
	>
		<Form.Item required label="Name" name="name" rules={[{ required: true }]}>
			<Input size="large" placeholder="Name" />
		</Form.Item>
		{/* <Form.Item name="description" label="Description">
				<Input.TextArea size="large" rows={5} />
			</Form.Item> */}
	</Form>
);

export default AddBoardForm;
