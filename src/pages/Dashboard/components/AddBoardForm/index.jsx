// libs
import React from "react";
import { Form, Input, Tabs } from "antd";
// components
// others
import "./style.scss";
import TemplateFormOld from "pages/Dashboard/components/TemplateFormOld";
import TemplateFormNew from "pages/Dashboard/components/TemplateFormNew";

const AddBoardForm = ({ form }) => {
	return (
		<Form
			className="add-board-form-wrapper"
			form={form}
			layout="vertical"
			initialValues={{ col: ["", ""], type: "old" }}
			onFinish={(values) => console.log(values)}
		>
			<Form.Item label="Name" required name="name">
				<Input size="large" />
			</Form.Item>
			<Form.Item name="type" hidden>
				<Input size="large" />
			</Form.Item>
			<Tabs
				defaultActiveKey="old"
				className="tabs-wrapper"
				onChange={(active) => form.setFieldsValue({ type: active })}
			>
				<Tabs.TabPane tab="Use existing template" key="old">
					<TemplateFormOld />
				</Tabs.TabPane>
				<Tabs.TabPane tab="Create custom template" key="new">
					<TemplateFormNew />
				</Tabs.TabPane>
			</Tabs>
		</Form>
	);
};
export default AddBoardForm;
