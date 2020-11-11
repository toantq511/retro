// libs
import BoardSingleColumn from "pages/BoardDetail/components/BoardSingleColumns";
import React from "react";
// components
// others
import "./style.scss";

const BoardColumns = ({ items, boardId }) => (
	<div className="board-columns-wrapper">
		{["col1", "col2", "col3"].map((key) => (
			<BoardSingleColumn
				key={key}
				column={key}
				items={items[key]}
				boardId={boardId}
			/>
		))}
	</div>
);
export default BoardColumns;
