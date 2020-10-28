// libs
import useFirestore from "hooks/useFirestore";
import AddNewBoard from "pages/Dashboard/components/AddNewBoard";
import BoardItem from "pages/Dashboard/components/BoardItem";
import React from "react";
// components
// others
import "./style.scss";

const BoardListRealtime = () => {
	const { collectionData } = useFirestore("board");
	const data = (collectionData || []).map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
	console.log(data);
	return (
		<div className="board-list-realtime-wrapper">
			<AddNewBoard />
			{data.map((item) => (
				<BoardItem key={item.id} item={item} />
			))}
		</div>
	);
};

export default BoardListRealtime;
