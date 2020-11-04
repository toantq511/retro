// libs
import { editBoard } from "actions/BoardDetail";
import { Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// components
// others

const BoardName = ({ name = "", boardId }) => {
	const dispatch = useDispatch();
	const [isEdit, setIsEdit] = useState(false);
	const [value, setValue] = useState(name);
	return (
		<div className="board-name-wrapper">
			{isEdit ? (
				<Input
					value={value}
					onChange={(e) => setValue(e.target.value)}
					onBlur={() => {
						dispatch(editBoard(boardId, value));
						setIsEdit(false);
					}}
				/>
			) : (
				<h2 onDoubleClick={() => setIsEdit(true)}>{name}</h2>
			)}
		</div>
	);
};
export default BoardName;
