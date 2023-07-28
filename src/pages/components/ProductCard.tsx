/* eslint-disable @next/next/no-img-element */
import { Badge, Card, Descriptions, Rate } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons'



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