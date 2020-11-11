// Libs
import { LoadingOutlined } from "@ant-design/icons";
import { Col, Row, Spin } from "antd";
import React from "react";
// Components
// Data Sources, Mocks
// Others

const Spinner = () => (
	<Row
		align="middle"
		justify="center"
		style={{ height: "100%" }}
		className="spinner-wrapper"
	>
		<Col>
			<Spin size="large" indicator={<LoadingOutlined />} />
		</Col>
	</Row>
);

export default Spinner;
