// libs
import React, { useState } from "react";
import { Button } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
// components
// others
import "./style.scss";
import AddBoardDrawer from "pages/Dashboard/components/AddBoardDrawer";

const AddNewBoard = () => {
	const [visible, setVisible] = useState(false);
	return (
		<>
			<Button
				onClick={() => setVisible(true)}
				className="add-new-board-wrapper"
				type="ghost"
			>
				<PlusCircleFilled />
				Add board
			</Button>
			<AddBoardDrawer visible={visible} hide={() => setVisible(false)} />
		</>
	);
};
export default AddNewBoard;
