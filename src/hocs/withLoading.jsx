import React from "react";
import { Col, Row, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const withLoading = (isLoading, key) => (Component) =>
	isLoading ? (
		<Row
			align="middle"
			justify="center"
			style={{ height: "100%" }}
			className="spinner-wrapper"
		>
			<Col>
				<Spin key={key} size="large" indicator={<LoadingOutlined />} />
			</Col>
		</Row>
	) : (
		<Component />
	);

export default withLoading;
