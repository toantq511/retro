// libs
import { getDetail } from "actions/BoardDetail";
import withLoading from "hocs/withLoading";
import BoardColumns from "pages/BoardDetail/mains/BoardColumns";
import BoardName from "pages/BoardDetail/mains/BoardName";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
// components
// others

const BoardDetail = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => dispatch(getDetail(id)), [dispatch, id]);
	const { isLoading, data } = useSelector((state) => state.detail);
	const { name } = useSelector((state) => state.auth);
	return name ? (
		withLoading(isLoading)(
			<div className="board-detail-wrapper">
				<BoardName name={data.name} boardId={data.id} />
				<BoardColumns items={data?.items} boardId={data.id} />
			</div>
		)
	) : (
		<Redirect to="/login" />
	);
};

export default BoardDetail;
