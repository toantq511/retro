// libs
import React from "react";
import { Card, message, Tooltip } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";
import {
	EllipsisOutlined,
	ClockCircleOutlined,
	CopyOutlined,
	ShareAltOutlined,
} from "@ant-design/icons";
// components
import BoardColumn from "../BoardColumn";
// others
import "./style.scss";
import BoardItemInfo from "pages/Dashboard/components/BoardItemInfo";

const BoardItem = ({ board }) => (
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
			<Tooltip key="copy" title="Clone">
				<CopyOutlined />
			</Tooltip>,
			<Tooltip
				key="info"
				title={<BoardItemInfo item={board} />}
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
		<Card.Meta description={board.desc} />
		<BoardColumn data={board.items} />
	</Card>
);

export default BoardItem;
