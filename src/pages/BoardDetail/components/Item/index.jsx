// libs
import {
	CheckOutlined,
	CloseOutlined,
	DeleteOutlined,
	EditOutlined,
} from "@ant-design/icons";
import { deleteItem, editItem } from "actions/BoardDetail";
import { Button, Input, Popconfirm } from "antd";
import React, { useEffect, useState } from "react";
// components
// others
import "./style.scss";

const bgColor = (col) =>
	col === "col1" ? "#87d068" : col === "col2" ? "#108ee9" : "#f50";
const Item = ({ item, column }) => {
	const [isEdit, setIsEdit] = useState(false);
	const [name, setName] = useState(item.name);
	const hideEdit = () => {
		setIsEdit(false);
		setName(item.name);
	};
	useEffect(() => {
		setName(item.name);
	}, [item.name]);
	return isEdit ? (
		<>
			<Input.TextArea value={name} onChange={(e) => setName(e.target.value)} />
			<div className="btns">
				<Button
					className="btn-save"
					type="primary"
					disabled={name.length === 0}
					onClick={() =>
						name !== item.name && editItem(item.id, name, hideEdit)
					}
					icon={<CheckOutlined />}
				/>
				<Button
					className="btn-cancel"
					type="primary"
					danger
					onClick={hideEdit}
					icon={<CloseOutlined />}
				/>
			</div>
		</>
	) : (
		<div className="item-wrapper" style={{ backgroundColor: bgColor(column) }}>
			<span>{item.name}</span>
			<span className="icons">
				<EditOutlined onClick={() => setIsEdit(true)} />
				<Popconfirm title="Confirm ?" onConfirm={() => deleteItem(item.id)}>
					<DeleteOutlined />
				</Popconfirm>
			</span>
		</div>
	);
};
export default Item;
