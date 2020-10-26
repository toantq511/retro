// libs
import { Drawer, Form, Button } from "antd";
import React from "react";
// components
import AddBoardForm from "pages/Dashboard/components/AddBoardForm";
// others
import "./style.scss";

const AddBoardDrawer = ({ visible, hide }) => {
	const [form] = Form.useForm();
	return (
		<Drawer
			className="add-board-drawer-wrapper"
			title="Create Board"
			onClose={hide}
			visible={visible}
			width={480}
			footer={
				<div className="btn-group">
					<Button onClick={hide}>Cancel</Button>
					<Button onClick={() => form.submit()} type="primary">
						Submit
					</Button>
				</div>
			}
		>
			<AddBoardForm form={form} />
		</Drawer>
	);
};
export default AddBoardDrawer;
