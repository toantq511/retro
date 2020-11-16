// Libs
import React, { useState, useEffect } from "react";
// Components
import AddNewBoard from "pages/Dashboard/components/AddNewBoard";
import Board from "pages/Dashboard/components/Board";
// Others
import "./style.scss";
import useFirestore from "hooks/useFirestore";
import { useAuth } from "hooks/useAuth";
import { Empty } from "antd";

const BoardList = () => {
	const { db } = useFirestore();
	const [data, setData] = useState([]);
	const { user } = useAuth();
	useEffect(() => {
		if (user) {
			const unsubscribe = db
				.collection("board")
				.where("createdBy", "==", user.username)
				.onSnapshot((snapshot) =>
					setData(
						snapshot.docs.map((item) => ({ id: item.id, ...item.data() }))
					)
				);
			return () => unsubscribe();
		}
	}, [db, user]);
	return user ? (
		<div className="board-list-wrapper">
			<AddNewBoard />
			{data.map((item) => (
				<Board key={item.id} board={item} />
			))}
		</div>
	) : (
		<Empty />
	);
};
export default BoardList;
