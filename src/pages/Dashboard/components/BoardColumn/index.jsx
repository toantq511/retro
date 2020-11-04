// Libs
import { Progress, Tag, Tooltip } from "antd";
import React from "react";
// Components
// Data Sources, Mocks
// Others
import "./style.scss";

const BoardColumn = ({ col1, col2, col3, total }) => (
	<div className="board-column-wrapper">
		<div className="tag-wrapper">
			<Tag color="#87d068">Went Well</Tag>
			<Tooltip title={col1}>
				<Progress
					percent={(col1 / total) * 100}
					strokeColor="#87d068"
					showInfo={false}
				/>
			</Tooltip>
		</div>
		<div className="tag-wrapper">
			<Tag color="#108ee9">To Improve</Tag>
			<Tooltip title={col2}>
				<Progress
					percent={(col2 / total) * 100}
					strokeColor="#108ee9"
					showInfo={false}
				/>
			</Tooltip>
		</div>
		<div className="tag-wrapper">
			<Tag color="#f50">Action Items</Tag>
			<Tooltip title={col3}>
				<Progress
					percent={(col3 / total) * 100}
					strokeColor="#f50"
					showInfo={false}
				/>
			</Tooltip>
		</div>
	</div>
);
export default BoardColumn;
