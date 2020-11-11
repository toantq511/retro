// libs
import React from "react";
import { Card, message, Tooltip } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";
import {
	EllipsisOutlined,
	ClockCircleOutlined,
	ShareAltOutlined,
} from "@ant-design/icons";
// components
import BoardColumn from "../BoardColumn";
// others
import "./style.scss";
import BoardInfo from "pages/Dashboard/components/BoardInfo";

const Board = ({ board }) => {
	const { col1, col2, col3 } = board.items;
	const total = col1.length + col2.length + col3.length;
	return (
		<Card
			size="small"
			className="board-item-wrapper"
			actions={[
				<Tooltip key="share" title="Share URL">
					<ShareAltOutlined
						onClick={() => {
							const url = document.location.href + "board/" + board.id;
							navigator.clipboard.writeText(url);
							message.success("URL copied");
						}}
					/>
				</Tooltip>,
				<Tooltip
					key="info"
					title={<BoardInfo item={board} />}
					placement="bottom"
				>
					<EllipsisOutlined />
				</Tooltip>,
			]}
			title={<Link to={`/board/${board.id}`}>{board.name}</Link>}
			extra={
				<>
					<ClockCircleOutlined /> {moment(new Date(board.createdAt)).fromNow()}
				</>
			}
		>
			<Card.Meta description={total + " Items"} />
			<BoardColumn
				col1={col1.length}
				col2={col2.length}
				col3={col3.length}
				total={total}
			/>
		</Card>
	);
};

export default Board;
