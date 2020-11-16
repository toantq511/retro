// libs
import ErrorResult from "components/ErrorResult";
import Spinner from "components/Spinner";

import useFirestore from "hooks/useFirestore";
import BoardColumns from "pages/BoardDetail/mains/BoardColumns";
import BoardHeading from "pages/BoardDetail/mains/BoardHeading";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
// components
// others

const BoardDetail = () => {
	const { id } = useParams();
	const { db } = useFirestore();
	const [data, setData] = useState();
	const [error, setError] = useState(false);
	useEffect(() => {
		const unsubscribe = db
			.collection("board")
			.doc(id)
			.onSnapshot((doc) => {
				if (doc.exists) {
					setData({ id: doc.id, ...doc.data() });
				} else setError({ status: 404, message: "Board not found" });
			});
		return () => unsubscribe();
	}, [db, id]);
	return error ? (
		<ErrorResult error={error} />
	) : data ? (
		<div className="board-detail-wrapper">
			<BoardHeading
				name={data.name}
				boardId={data.id}
				updatedAt={data.updatedAt}
				updatedBy={data.updatedBy}
			/>
			<BoardColumns items={data.items} boardId={data.id} />
		</div>
	) : (
		<Spinner />
	);
};

export default BoardDetail;
