// libs
import { Button, Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";
// components
// others

const ErrorResult = ({ error }) => (
	<Result
		className="error-result-wrapper"
		status={error.status || "error"}
		title="Oops!"
		subTitle={error.message || "Something went wrong"}
		extra={
			<Link to="/">
				<Button type="primary">Back Home</Button>
			</Link>
		}
	/>
);

export default ErrorResult;
