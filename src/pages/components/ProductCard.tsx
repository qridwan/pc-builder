import { Avatar, Badge, Card, Descriptions, Rate } from 'antd';
import { EditOutlined, EllipsisOutlined, InfoCircleOutlined, MoreOutlined, SettingOutlined } from '@ant-design/icons'
import { Meta } from 'antd/es/card';



const ProductCard = () => {
	return (

		<Badge.Ribbon text="Hippies" placement='end'>
			<Card
				style={{ width: '100%' }} title="Card title"
				cover={
					<img
						alt="example"
						// fill
						src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
					/>
				}
				actions={[
					<InfoCircleOutlined key="setting" />,
					// <EditOutlined key="edit" />,
					// <EllipsisOutlined key="ellipsis" />,
				]}
			>
				<Rate disabled defaultValue={5} />
				<Descriptions >
					<Descriptions.Item span={24} style={{ padding: "10px 0" }}>This is the description</Descriptions.Item>
					<Descriptions.Item span={24} label="Price" style={{ paddingBottom: 0 }}>223 $</Descriptions.Item>
					<Descriptions.Item span={24} label="Status" style={{ paddingBottom: 0 }}>In stock</Descriptions.Item>
				</Descriptions>
			</Card></Badge.Ribbon>
	);
};

export default ProductCard;