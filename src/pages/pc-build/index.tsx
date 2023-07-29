import { Badge, Button, Divider, List, Modal, Skeleton } from "antd";
import { anton } from "../_app";
import { useRouter } from "next/router";
import { useContext } from "react";
import { PcContext } from "@/context/PcContext";
import IsMobile from "@/hooks/isMobile";

const PcBuild = () => {
	const router = useRouter();
	const { setIsPcBuilding, pcData, deleteFromPcBuilder, setPcData } = useContext(PcContext);
	const { isMobileScreen } = IsMobile();
	const [modal, contextHolder] = Modal.useModal();
	const countDown = () => {
		let secondsToGo = 5;

		const instance = modal.success({
			title: 'Successfully Built',
			content: `Thank You for order the pc, we will reach you soon!`,
		});

		const timer = setInterval(() => {
			secondsToGo -= 1;
			instance.update({
				content: `Thank You for order the pc, we will reach you soon!`,
			});
		}, 1000);

		setTimeout(() => {
			clearInterval(timer);
			instance.destroy();
			setPcData(null);
			setIsPcBuilding(false)
		}, secondsToGo * 1000);
	};


	const findComponent = (title: string) => {
		return pcData?.find((pd) => pd.category === title)
	}

	const countCost = () => {
		return pcData?.reduce((acc, pd) => acc + pd.price, 0)
	}





	return (
		<div style={{ width: isMobileScreen ? "100%" : "80%", margin: '0 auto' }}>

			<h1 style={{ textAlign: 'center', padding: isMobileScreen ? '5px 0' : '20px 0 0 0', textDecoration: 'underline', fontSize: isMobileScreen ? 30 : 40 }} className={anton.className}>🎉 Make Your Dream PC 🎉</h1>
			{contextHolder}
			<List
				size="large"
				header={<div>Add Required Components</div>}
				footer={<div style={{ textAlign: 'end', fontWeight: 'bold' }}>Total Cost: {countCost() ?? 0}
					<Button color="green" type="primary" size="large" disabled={(pcData === null || pcData?.length <= 6)} style={{ marginLeft: '20px', }} onClick={() => {
						countDown();

					}}>Complete Build</Button>
				</div>}
				bordered
				dataSource={data}
				renderItem={(item) => <List.Item
					actions={[

						!findComponent(item.title) ? <Button key="list-loadmore-more" onClick={() => {
							setIsPcBuilding(true)
							router.push(item.link)
						}}>Choose</Button> : null, findComponent(item.title) ? <Button key="list-loadmore-more" onClick={() => {
							deleteFromPcBuilder(item.title)
						}} danger>Delete</Button> : null]}
				>
					<Skeleton avatar title={false} loading={false} active>
						<List.Item.Meta
							title={<div>
								<Badge count={findComponent(item.title) ? "Added" : 'Required'} color={findComponent(item.title) ? "green" : 'red'} offset={[40, 10]}>
									{item.title}
								</Badge>
							</div>}
							description={<>
								{findComponent(item.title)?.name}

								{isMobileScreen && findComponent(item.title) && <div>
									<Divider></Divider>
									Price: {findComponent(item.title)?.price}
									<br />
									Ratings: {findComponent(item.title)?.average_rating}

								</div>}

							</>}
						/>
						{!isMobileScreen && findComponent(item.title) && <div>
							<Divider></Divider>
							Price: {findComponent(item.title)?.price}
							<br />
							Ratings: {findComponent(item.title)?.average_rating}

						</div>}
					</Skeleton>
				</List.Item>}
			/>
		</div>
	);
};

export default PcBuild;
const data = [
	{
		id: 1,
		title: 'CPU',
		required: true,
		link: '/products/cpu?build=pc',
	},
	{
		id: 2,
		title: 'Motherboard',
		required: true,
		link: '/products/motherboard?build=pc',
	},
	{
		id: 3,
		title: 'RAM',
		required: true,
		link: '/products/ram?build=pc',
	},
	{
		id: 4,
		title: 'Storage Device',
		required: true,
		link: '/products/storage device?build=pc',
	},
	{
		id: 5,
		title: 'GPU',
		required: true,
		link: '/products/gpu?build=pc',
	},
	{
		id: 6,
		title: 'Monitor',
		required: true,
		link: '/products/monitor?build=pc',
	},
	{
		id: 7,
		title: 'Power Supply Unit',
		required: true,
		link: '/products/power supply unit?build=pc',
	},
]