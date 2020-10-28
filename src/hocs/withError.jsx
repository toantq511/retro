// libs
import React from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const withError = (error) => (Component) =>
	error ? (
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
	) : (
		Component
	);

export default withError;
