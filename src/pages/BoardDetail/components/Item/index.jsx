// libs
import { editItem } from "actions/BoardDetail";
import { Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// components
// others
import "./style.scss";

const bgColor = (type) => (type === 1 ? "green" : type === 2 ? "red" : "blue");
const Item = ({ item }) => {
	const [isEdit, setIsEdit] = useState(false);
	const [name, setName] = useState(item.name);
	const dispatch = useDispatch();

	return isEdit ? (
		<Input.TextArea
			value={name}
			onChange={(e) => setName(e.target.value)}
			onBlur={() =>
				name !== item.name &&
				dispatch(editItem(item.id, name, () => setIsEdit(false)))
			}
		/>
	) : (
		<div
			className="item-wrapper"
			style={{ backgroundColor: bgColor(item.column) }}
			onDoubleClick={() => setIsEdit(true)}
		>
			{item.name}
		</div>
	);
};
export default Item;
