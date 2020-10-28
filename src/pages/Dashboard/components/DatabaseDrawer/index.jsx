// libs
import { UploadOutlined } from "@ant-design/icons";
import { exportData, importData } from "actions/Dashboard";
import { Button, Drawer, Form, message, Upload } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
// others
import "./style.scss";

const DatabaseDrawer = ({ visible, hide }) => {
	const [fileList, setFileList] = useState([]);
	const dispatch = useDispatch();
	const { loadingImport, loadingExport } = useSelector(
		(state) => state.dashboard
	);

	return (
		<Drawer
			className="database-drawer-wrapper"
			title="Database"
			onClose={hide}
			visible={visible}
			width={300}
		>
			<div className="export">
				<Button
					type="primary"
					onClick={() => dispatch(exportData())}
					loading={loadingExport}
					danger
				>
					Export
				</Button>
			</div>
			<div className="import">
				<Form
					className="import-data-wrapper"
					onFinish={() => {
						if (fileList.length) {
							const formData = new FormData();
							formData.append("file", fileList[0]);
							dispatch(importData(formData));
						} else message.error("File not found");
					}}
				>
					<Form.Item name="file" rules={[{ required: true }]}>
						<Upload
							fileList={fileList}
							beforeUpload={(file, files) => {
								console.log(file.type);
								if (file.type !== "application/json")
									message.error(`${file.name} is not a JSON file`);
								else setFileList(files);
								return false;
							}}
							accept=".json"
						>
							<Button icon={<UploadOutlined />} loading={loadingImport}>
								Click to Upload
							</Button>
						</Upload>
					</Form.Item>
					<Button type="primary" htmlType="submit" loading={loadingImport}>
						Import
					</Button>
				</Form>
			</div>
		</Drawer>
	);
};

export default DatabaseDrawer;
