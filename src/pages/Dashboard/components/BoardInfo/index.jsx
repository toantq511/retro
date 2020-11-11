// libs
import React from "react";
import moment from "moment";
// components
// others

const BoardInfo = ({ item }) => (
	<div className="board-info-wrapper">
		<p>Created By: {item.createdBy}</p>
		<p>
			Last Update: {item.updatedBy} -{" "}
			{moment(new Date(item.updatedAt)).fromNow()}
		</p>
	</div>
);
export default BoardInfo;
