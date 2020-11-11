// Libs
import React, { useState, useEffect } from "react";
// Components
import AddNewBoard from "pages/Dashboard/components/AddNewBoard";
import Board from "pages/Dashboard/components/Board";
// Others
import "./style.scss";
import useFirestore from "hooks/useFirestore";

const BoardList = () => {
	const { db } = useFirestore();
	const [data, setData] = useState([]);
	useEffect(() => {
		const unsubscribe = db
			.collection("board")
			.onSnapshot((snapshot) =>
				setData(snapshot.docs.map((item) => ({ id: item.id, ...item.data() })))
			);
		return () => unsubscribe();
	}, [db]);
	console.log(data);
	return (
		<div className="board-list-wrapper">
			<AddNewBoard />
			{data.map((item) => (
				<Board key={item.id} board={item} />
			))}
		</div>
	);
};
export default BoardList;
