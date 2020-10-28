// Libs
import { Progress, Tag, Tooltip } from "antd";
import React from "react";
// Components
// Data Sources, Mocks
// Others
import "./style.scss";

const BoardColumn = ({ data }) => (
	<div className="board-column-wrapper">
		<div className="tag-wrapper">
			<Tag color="#87d068">Went Well</Tag>
			<Tooltip title={data?.col1}>
				<Progress
					percent={(data?.col1 / data?.total) * 100}
					strokeColor="#87d068"
					showInfo={false}
				/>
			</Tooltip>
		</div>
		<div className="tag-wrapper">
			<Tag color="#108ee9">To Improve</Tag>
			<Tooltip title={data?.col2}>
				<Progress
					percent={(data?.col2 / data?.total) * 100}
					strokeColor="#108ee9"
					showInfo={false}
				/>
			</Tooltip>
		</div>
		<div className="tag-wrapper">
			<Tag color="#f50">Action Items</Tag>
			<Tooltip title={data?.col3}>
				<Progress
					percent={(data?.col3 / data?.total) * 100}
					strokeColor="#f50"
					showInfo={false}
				/>
			</Tooltip>
		</div>
	</div>
);
export default BoardColumn;
