// libs
import {
	CheckOutlined,
	CloseOutlined,
	DeleteFilled,
	EditOutlined,
	HistoryOutlined,
} from "@ant-design/icons";
import { deleteBoard, editBoard } from "actions/BoardDetail";
import { Button, Input, Modal } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
// components
// others
import "./style.scss";
const BoardHeading = ({ name = "", boardId, updatedAt, updatedBy }) => {
	const dispatch = useDispatch();
	const [isEdit, setIsEdit] = useState(false);
	const [value, setValue] = useState(name);
	return (
		<div className="board-heading-wrapper">
			{isEdit ? (
				<div className="edit">
					<Input value={value} onChange={(e) => setValue(e.target.value)} />
					<div className="btn">
						<Button
							type="primary"
							onClick={() => {
								dispatch(editBoard(boardId, value));
								setIsEdit(false);
							}}
							icon={<CheckOutlined />}
						/>
						<Button
							type="primary"
							danger
							onClick={() => setIsEdit(false)}
							icon={<CloseOutlined />}
						/>
					</div>
				</div>
			) : (
				<h2>
					{name} <EditOutlined onClick={() => setIsEdit(true)} />
				</h2>
			)}
			<div className="history">
				<span>
					<HistoryOutlined /> Last Update:{" "}
					{moment(new Date(updatedAt)).fromNow()} - {updatedBy}
				</span>
				<Button
					danger
					icon={<DeleteFilled />}
					onClick={() =>
						Modal.confirm({
							title: "Confirm",
							content: "Delete this board ?",
							onOk: () => {
								deleteBoard(boardId);
							},
						})
					}
				/>
			</div>
		</div>
	);
};
export default BoardHeading;
