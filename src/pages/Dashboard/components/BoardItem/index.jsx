// libs
import React, { useEffect, useState } from "react";
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
import Axios from "axios";
import BoardItemInfo from "pages/Dashboard/components/BoardItemInfo";
import { api } from "config/api";

const BoardItem = ({ item }) => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState();
	useEffect(() => {
		if (item.id) {
			setLoading(true);
			Axios.get(api + "/board/" + item.id + "/column")
				.then((res) => setData(res.data))
				.catch((err) => {
					if (err.response)
						message.error(err.response.status + ": " + err.response.statusText);
					else message.error("Something went wrong");
				})
				.finally(() => setLoading(false));
		}
	}, [item]);
	return (
		<Card
			size="small"
			className="board-item-wrapper"
			actions={[
				<Tooltip key="share" title="Share URL">
					<ShareAltOutlined
						onClick={() => {
							const url = document.location.href + "board/" + item.id;
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
					title={<BoardItemInfo item={item} />}
					placement="bottom"
				>
					<EllipsisOutlined />
				</Tooltip>,
			]}
			title={<Link to={`/board/${item.id}`}>{item.name}</Link>}
			extra={
				<>
					<ClockCircleOutlined /> {moment(new Date(item.createdAt)).fromNow()}
				</>
			}
			loading={loading}
		>
			<Card.Meta description={item.desc} />
			<BoardColumn data={data} />
		</Card>
	);
};
export default BoardItem;
