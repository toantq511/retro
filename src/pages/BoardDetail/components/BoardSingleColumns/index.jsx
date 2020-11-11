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
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const BoardSingleColumn = ({ column, items, boardId }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const [name, setName] = useState("");
	const dispatch = useDispatch();
	const hideEdit = () => {
		setIsEdit(false);
		setName("");
		setIsLoading(false);
	};
	return (
		<div className="board-single-column-wrapper">
			<h2 className="title">{ColumnTypes[column]}</h2>
			{isEdit ? (
				<>
					<Input.TextArea
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<div className="btns">
						<Button
							className="btn-save"
							type="primary"
							disabled={name.length === 0}
							loading={isLoading}
							onClick={() => {
								setIsLoading(true);
								dispatch(addItem(boardId, column, name, hideEdit));
							}}
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
				<Button className="btn-add" onClick={() => setIsEdit(true)}>
					Add Item
				</Button>
			)}
			{items.map((item) => (
				<Item item={item} key={item.id} column={column} />
			))}
		</div>
	);
};
export default BoardSingleColumn;
