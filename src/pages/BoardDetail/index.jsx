// libs
import { getDetail } from "actions/BoardDetail";
import withLoading from "hocs/withLoading";
import BoardColumns from "pages/BoardDetail/mains/BoardColumns";
import BoardName from "pages/BoardDetail/mains/BoardName";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// components
// others

const BoardDetail = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => dispatch(getDetail(id)), [dispatch, id]);
	const { isLoading, data } = useSelector((state) => state.detail);
	return withLoading(isLoading)(
		<div className="board-detail-wrapper">
			<BoardName data={data} />
			<BoardColumns items={data?.items} />
		</div>
	);
};

export default BoardDetail;
