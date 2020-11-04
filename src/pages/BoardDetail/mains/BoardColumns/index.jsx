// libs
import ColumnTypes from "constants/dataTypes/ColumnTypes";
import BoardSingleColumn from "pages/BoardDetail/components/BoardSingleColumns";
import React from "react";
// components
// others
import "./style.scss";

const BoardColumns = ({ items, boardId }) => (
	<div className="board-columns-wrapper">
		{Object.values(ColumnTypes).map(
			(index) =>
				!isNaN(index) && (
					<BoardSingleColumn
						key={index}
						type={index}
						items={items[index]}
						boardId={boardId}
					/>
				)
		)}
	</div>
);
export default BoardColumns;
