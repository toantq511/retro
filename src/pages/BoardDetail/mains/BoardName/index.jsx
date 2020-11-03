// libs
import React from "react";
// components
// others

const BoardName = ({ data }) => (
	<div className="board-name-wrapper">
		<h2>{data?.name}</h2>
	</div>
);
export default BoardName;
