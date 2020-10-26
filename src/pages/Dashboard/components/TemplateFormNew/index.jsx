// libs
import React from "react";
import { Button, Form, Input } from "antd";
import { CloseCircleFilled, PlusOutlined } from "@ant-design/icons";
// components
// others
import "./style.scss";

const TemplateFormNew = () => (
	<div className="template-form-new-wrapper">
		<Form.Item name="templateName" label="Template Name">
			<Input size="large" />
		</Form.Item>
		<Form.List
			name="col"
			rules={[
				{
					validator: async (_, names) => {
						if (!names || names.length < 2) {
							return Promise.reject(new Error("At least 2 Column"));
						}
					},
				},
			]}
		>
			{(fields, { add, remove }, { errors }) => (
				<>
					{fields.map((field, index) => (
						<Form.Item
							label={"Column " + (index + 1)}
							{...field}
							key={field.key}
							rules={[
								{
									required: true,
									message: "Please input column's name or delete this column.",
								},
							]}
						>
							<Input
								size="large"
								suffix={
									<CloseCircleFilled onClick={() => remove(field.name)} />
								}
							/>
						</Form.Item>
					))}
					<Form.ErrorList errors={errors} />
					<Button
						className="btn-add"
						type="primary"
						onClick={() => add("")}
						icon={<PlusOutlined />}
						block
					>
						Add Column
					</Button>
				</>
			)}
		</Form.List>
	</div>
);
export default TemplateFormNew;
