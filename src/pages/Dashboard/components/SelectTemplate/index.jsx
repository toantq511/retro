// libs
import React from "react";
import { Select } from "antd";
import { useDispatch } from "react-redux";
import { getTemplateColumns } from "actions/Dashboard";
// components
// others

const SelectTemplate = (props) => {
	const dispatch = useDispatch();
	return (
		<Select
			className="select-template-wrapper"
			{...props}
			onChange={(value) => {
				props.onChange(value);
				dispatch(getTemplateColumns(value));
			}}
		>
			{[0, 1, 2, 3, 4].map((item) => (
				<Select.Option key={item} value={item}>
					{item}
				</Select.Option>
			))}
		</Select>
	);
};

export default SelectTemplate;
