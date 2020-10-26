// Libs
import React from "react";
// Components
import AddNewBoard from "pages/Dashboard/components/AddNewBoard";
import BoardItem from "pages/Dashboard/components/BoardItem";
// Data Sources, Mocks
// Others
import "./style.scss";
import useFirestore from "hooks/useFirestore";
import { Spin } from "antd";

const BoardList = () => {
	const { collectionData, isLoading } = useFirestore("item");
	const data = (collectionData || [])
		.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}))
		.map(({ id, columnKey, name, createdAt }) => ({
			id,
			columnKey,
			name,
			createdAt,
		}));
	return isLoading ? (
		<Spin />
	) : (
		<div className="board-list-wrapper">
			<AddNewBoard />
			{data.map((item) => (
				<BoardItem key={item.id} item={item} />
			))}
		</div>
	);
};
export default BoardList;
