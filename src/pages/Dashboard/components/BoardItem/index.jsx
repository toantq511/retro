// libs
import React from "react";
import { Card, Skeleton } from "antd";
import { Link } from "react-router-dom";
import {
	SettingOutlined,
	EditOutlined,
	EllipsisOutlined,
	ClockCircleOutlined,
} from "@ant-design/icons";
// components
// others
import "./style.scss";

const BoardItem = ({ item }) => (
	<Card
		className="board-item-wrapper"
		actions={[
			<SettingOutlined key="setting" />,
			<EditOutlined key="edit" />,
			<EllipsisOutlined key="ellipsis" />,
		]}
		title={<Link to="/board/id">{item.name}</Link>}
		extra={
			<>
				<ClockCircleOutlined /> 10 October
			</>
		}
	>
		<Skeleton loading={false} active paragraph={{ rows: 1 }}>
			<Card.Meta title="Card title" description="This is the description" />
		</Skeleton>
	</Card>
);
export default BoardItem;
