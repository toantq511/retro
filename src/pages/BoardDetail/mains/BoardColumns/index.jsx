// libs
import { moveItem } from "actions/BoardDetail";
import BoardSingleColumn from "pages/BoardDetail/components/BoardSingleColumns";
import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
// components
// others
import "./style.scss";

const BoardColumns = ({ items, boardId }) => {
	const [list, setList] = useState(items);
	useEffect(() => {
		setList(items);
	}, [items]);
	// const [col1, setCol1] = useState(items.col1);
	// const [col2, setCol2] = useState(items.col2);
	// const [col3, setCol3] = useState(items.col3);
	// const tags = { col1, col2, col3 };
	return (
		<div className="board-columns-wrapper">
			<DragDropContext
				onDragEnd={(result) => {
					console.log(result);
					if (result.destination && result.source) {
						if (result.destination.droppableId === result.source.droppableId) {
							const move = (arr, from, to) => {
								const list = [...arr];
								list.splice(to, 0, list.splice(from, 1)[0]);
								return list;
							};
							const oldList = list[result.destination.droppableId];
							const newList = move(
								oldList,
								result.source.index,
								result.destination.index
							);
							setList({
								...list,
								[result.destination.droppableId]: newList,
							});
						} else {
							const itemId = result.draggableId.split("-");
							const boardId = itemId[0];
							const time = itemId[2];
							const oldList = list[result.source.droppableId].filter(
								(item) => item.id !== result.draggableId
							);
							const item = list[result.source.droppableId].find(
								(it) => it.id === result.draggableId
							);
							const newItem = {
								...item,
								id: `${boardId}-${result.destination.droppableId}-${time}`,
							};
							const newList = list[result.destination.droppableId];
							newList.splice(result.destination.index, 0, newItem);
							setList({
								...list,
								[result.destination.droppableId]: newList,
								[result.source.droppableId]: oldList,
							});
						}

						moveItem(
							result.draggableId,
							{ index: result.source.index, column: result.source.droppableId },
							{
								index: result.destination.index,
								column: result.destination.droppableId,
							}
						);
					}
				}}
			>
				{["col1", "col2", "col3"].map((key) => (
					<BoardSingleColumn
						key={key}
						column={key}
						items={list[key]}
						boardId={boardId}
					/>
				))}
			</DragDropContext>
		</div>
	);
};

export default BoardColumns;
