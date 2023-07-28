/* eslint-disable @next/next/no-img-element */
import { Badge, Card, Descriptions, Rate } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons'
import { truncateText } from '@/utils/truncateText';
import Link from 'next/link';



const ProductCard = ({ product }: { product: IProduct }) => {
	return (

		<Badge.Ribbon text={product.category} placement='end' color={product.color}>
			<Card
				style={{ width: '100%' }}
				cover={
					<img
						alt="example"
						// fill
						src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
					/>
				}
				actions={[
					<Link key="setting" href={`/product/${product?.name}`}>
						<InfoCircleOutlined key="setting" /></Link>,
					// <EditOutlined key="edit" />,
					// <EllipsisOutlined key="ellipsis" />,
				]}
			>
				<h4 style={{ margin: 0 }}>{(product.name)}</h4>
				<Rate disabled defaultValue={product.average_rating} />
				<Descriptions >
					<Descriptions.Item span={24} style={{ padding: "10px 0" }}>{truncateText(product.description, 8)}</Descriptions.Item>
					<Descriptions.Item span={24} label="Price" style={{ paddingBottom: 0 }}>{product.price} $</Descriptions.Item>
					<Descriptions.Item span={24} label="Status" style={{ paddingBottom: 0 }}>{product.status}</Descriptions.Item>
				</Descriptions>
			</Card></Badge.Ribbon>
	);
};

export default ProductCard;