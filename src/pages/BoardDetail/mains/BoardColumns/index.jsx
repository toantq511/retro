// libs
import ColumnTypes from "constants/dataTypes/ColumnTypes";
import BoardSingleColumn from "pages/BoardDetail/components/BoardSingleColumns";
import React from "react";
// components
// others

const BoardColumns = ({ items = [] }) => (
	<div className="board-columns-wrapper">
		{Object.values(ColumnTypes).map(
			(index) =>
				!isNaN(index) && (
					<BoardSingleColumn
						key={index}
						type={index}
						items={items.filter((item) => item.column === index)}
					/>
				)
		)}
	</div>
);
export default BoardColumns;
