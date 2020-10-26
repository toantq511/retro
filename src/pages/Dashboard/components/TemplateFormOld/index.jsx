// libs
import React from "react";
import { Form, Spin } from "antd";
// components
import SelectTemplate from "pages/Dashboard/components/SelectTemplate";
import { useSelector } from "react-redux";
// others

const TemplateFormOld = () => {
	const { isLoading, list } = useSelector(
		(state) => state.dashboard.createBoard.template
	);
	return (
		<div className="template-form-old-wrapper">
			<Form.Item label="Template" required name="template">
				<SelectTemplate size="large" />
			</Form.Item>
			<Spin spinning={isLoading}>
				<ul>
					{list.map((item, id) => (
						<li key={id}>{item}</li>
					))}
				</ul>
			</Spin>
		</div>
	);
};
export default TemplateFormOld;
