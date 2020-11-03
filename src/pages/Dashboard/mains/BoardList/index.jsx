// Libs
import React, { useEffect } from "react";
// Components
import AddNewBoard from "pages/Dashboard/components/AddNewBoard";
import BoardItem from "pages/Dashboard/components/BoardItem";
// Data Sources, Mocks
// Others
import "./style.scss";
// import useFirestore from "hooks/useFirestore";
import withLoading from "hocs/withLoading";
import { useDispatch, useSelector } from "react-redux";
import { getBoard } from "actions/Dashboard";

const BoardList = () => {
	// const { collectionData } = useFirestore("board");
	// const data = (collectionData || []).map((doc) => ({
	// 	id: doc.id,
	// 	...doc.data(),
	// }));

	const dispatch = useDispatch();
	const { isLoadingGet, data } = useSelector((state) => state.dashboard);
	useEffect(() => dispatch(getBoard()), [dispatch]);
	return withLoading(isLoadingGet)(
		<div className="board-list-wrapper">
			<AddNewBoard />
			{data.map((item) => (
				<BoardItem key={item.id} board={item} />
			))}
		</div>
	);
};
export default BoardList;
