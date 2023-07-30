/* eslint-disable @next/next/no-img-element */
import { Badge, Button, Card, Descriptions, Rate, Image } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons'
import { truncateText } from '@/utils/truncateText';
import Link from 'next/link';
import { PcContext } from '@/context/PcContext';
import { useContext } from 'react';
import { useRouter } from 'next/router';



const ProductCard = ({ product }: { product: IProduct }) => {
	const { isPcBuilding, addToPcBuilder } = useContext(PcContext);
	const router = useRouter();
	const handleAddToPcBuilder = (pd: IProduct) => {
		addToPcBuilder(pd);
		router.push('/pcbuild')
	}
	return (

		<Badge.Ribbon text={product.category} placement='end' color={product.color}>
			<Card
				style={{ width: '100%' }}
				cover={
					<Image
						height={250}
						alt={product.category + "-" + product.name}
						src={product.image}
					/>

				}
				actions={isPcBuilding ? [
					<Link key="setting" href={`/product/${product?.name}`}>
						<InfoCircleOutlined key="setting" /></Link>,
					<Button type='primary' key={'add'} onClick={() => handleAddToPcBuilder(product)}>Add To Builder</Button>

				] : [
					<Link key="setting" href={`/product/${product?.name}`}>
						<InfoCircleOutlined key="setting" /> Details</Link>,

				]}
			>
				<Link key="setting" href={`/product/${product?.name}`}>
					<h4 style={{ margin: 0 }}>{(product.name)}</h4>
				</Link>
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