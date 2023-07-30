/* eslint-disable @next/next/no-img-element */
import { Avatar, Badge, Button, Col, Descriptions, Divider, Image, List, Rate, Row, Typography } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons'
import { PcContext } from '@/context/PcContext';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import IsMobile from '@/hooks/isMobile';



const DeatailsCard = ({ product }: { product: IProduct }) => {
	const { addToPcBuilder } = useContext(PcContext);
	const { isMobileScreen } = IsMobile();
	const router = useRouter();

	return (


		<div
			style={{ width: isMobileScreen ? '95%' : '80%', margin: '0 auto', padding: '20px 0' }}

		>
			<div style={{ padding: 20 }}>
				<Button icon={<ArrowLeftOutlined />} onClick={() => router.back()}>
					Back
				</Button>
			</div>
			<Row justify='center' gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col className="gutter-row" xl={0} lg={0} md={0} sm={12} xs={24}>
					<Badge.Ribbon text={product.category} placement='end' color={product.color}>
						<Image
							width={310}
							height={280}
							alt={product.category + "-" + product.name}
							// fill
							src={product.image}
						/></Badge.Ribbon>
				</Col>
				<Col className="gutter-row" xl={12} lg={12} md={12} sm={12} xs={24}>
					<h2 style={{ margin: 5 }}>{(product.name)}</h2>
					{product.average_rating} <Rate disabled defaultValue={product.average_rating} />
					<Descriptions >
						<Descriptions.Item span={24} style={{ padding: "10px 0" }}>{(product.description)}</Descriptions.Item>
						<Descriptions.Item span={24} label="Price" style={{ paddingBottom: 0 }}>{product.price} $</Descriptions.Item>
						<Descriptions.Item span={24} label="Status" style={{ paddingBottom: 0 }}>{product.status}</Descriptions.Item>
					</Descriptions>

					<List
						header={<div > <strong>Key Features :</strong></div>}
						// footer={<div>Footer</div>}
						// bordered
						dataSource={product.features}
						renderItem={(item, index) => (
							<List.Item>
								<Typography.Text mark>[{index + 1}]</Typography.Text> {item}
							</List.Item>
						)}
					/>

					<Divider></Divider>
					<List
						itemLayout="horizontal"
						header={<div > <strong>Reviews :</strong></div>}
						dataSource={product.reviews}
						renderItem={(item, index) => (
							<List.Item>
								<List.Item.Meta
									avatar={<Avatar style={{ backgroundColor: product.color, }}>A{index + 1}</Avatar>}
									title={<div>Anonymous</div>}
									description={<div>{item.message}
										<br />
										{/* <Divider style={{ margin: 0 }}></Divider> */}
										<b>Rating: </b> <Rate disabled defaultValue={item.rating} />
									</div>}
								/>
							</List.Item>
						)}
					/>
				</Col>
				<Col className="gutter-row" xl={7} lg={12} md={12} sm={12} xs={0}>
					<Badge.Ribbon text={product.category} placement='end' color={product.color}>
						<div><Image
							width={400}
							height={300}
							alt={product.category + "-" + product.name}
							// fill
							src={product.image}
						/></div></Badge.Ribbon>
				</Col>
			</Row>



		</div>
	);
};

export default DeatailsCard;