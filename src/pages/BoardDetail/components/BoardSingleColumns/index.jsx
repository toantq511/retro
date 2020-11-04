// libs
import ColumnTypes from "constants/dataTypes/ColumnTypes";
import { Button, Input } from "antd";
import Item from "pages/BoardDetail/components/Item";
import React, { useState } from "react";
// components
// others
import "./style.scss";
import { useDispatch } from "react-redux";
import { addItem } from "actions/BoardDetail";

const BoardSingleColumn = ({ type, items, boardId }) => {
	const [isEdit, setIsEdit] = useState(false);
	const [name, setName] = useState("");
	const dispatch = useDispatch();
	const hideEdit = () => {
		setIsEdit(false);
		setName("");
	};
	return (
		<div className="board-single-column-wrapper">
			<h2 className="title">{ColumnTypes[type]}</h2>
			{isEdit ? (
				<>
					<Input.TextArea
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<Button
						className="btn-save"
						type="primary"
						onClick={() => dispatch(addItem(boardId, type, name, hideEdit))}
					>
						Save
					</Button>
					<Button
						className="btn-cancel"
						type="primary"
						danger
						onClick={hideEdit}
					>
						Cancel
					</Button>
				</>
			) : (
				<Button className="btn-add" onClick={() => setIsEdit(true)}>
					Add Item
				</Button>
			)}
			{items.map((item) => (
				<Item item={item} key={item.id} />
			))}
		</div>
	);
};
export default BoardSingleColumn;
