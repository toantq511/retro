// Libs
import React, { useEffect, useState } from "react";
// Components
import AddNewBoard from "pages/Dashboard/components/AddNewBoard";
import BoardItem from "pages/Dashboard/components/BoardItem";
// Data Sources, Mocks
// Others
import "./style.scss";
// import useFirestore from "hooks/useFirestore";
import Axios from "axios";
import { message } from "antd";
import withError from "hocs/withError";
import withLoading from "hocs/withLoading";
import { api } from "config/api";

const BoardList = () => {
	// const { collectionData } = useFirestore("board");
	// const data = (collectionData || []).map((doc) => ({
	// 	id: doc.id,
	// 	...doc.data(),
	// }));

	const [data, setData] = useState([]);
	const [error, setError] = useState();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		Axios.get(api + "/boards")
			.then((res) => setData(res.data))
			.catch((err) => {
				if (err.response) {
					message.error(err.response.status + ": " + err.response.statusText);
					setError({
						status: err.response.status,
						message: err.response.statusText,
					});
				} else {
					message.error("Something went wrong");
					setError(true);
				}
			})
			.finally(() => setIsLoading(false));
	}, []);
	return withLoading(isLoading)(
		withError(error)(
			<div className="board-list-wrapper">
				<AddNewBoard />
				{data.map((item) => (
					<BoardItem key={item.id} item={item} />
				))}
			</div>
		)
	);
};
export default BoardList;
