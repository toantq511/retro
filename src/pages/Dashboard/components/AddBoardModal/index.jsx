// libs

import { Form, Modal } from "antd";
import AddBoardForm from "pages/Dashboard/components/AddBoardForm";
import React from "react";
// import { useSelector } from "react-redux";
// components
// others

const AddBoardModal = ({ visible, hide }) => {
	const [form] = Form.useForm();
	return (
		<Modal
			className="add-board-modal-wrapper"
			onClose={hide}
			visible={visible}
			title="Add New Board"
			onOk={() => form.submit()}
		>
			<AddBoardForm form={form} />
		</Modal>
	);
};
export default AddBoardModal;
