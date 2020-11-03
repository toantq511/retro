// libs

import { Button, Form, Modal } from "antd";
import AddBoardForm from "pages/Dashboard/components/AddBoardForm";
import React from "react";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";
// components
// others

const AddBoardModal = ({ visible, hide }) => {
	const [form] = Form.useForm();
	const { isLoadingAdd } = useSelector((state) => state.dashboard);
	return (
		<Modal
			className="add-board-modal-wrapper"
			onClose={hide}
			visible={visible}
			onCancel={hide}
			title="Add New Board"
			footer={
				<>
					<Button onClick={hide}>Cancel</Button>
					<Button
						type="primary"
						onClick={() => {
							form.submit();
							hide();
						}}
						loading={isLoadingAdd}
					>
						Add
					</Button>
				</>
			}
		>
			<AddBoardForm form={form} />
		</Modal>
	);
};
export default AddBoardModal;
