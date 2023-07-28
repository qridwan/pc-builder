import { ReactNode } from "react";
import { Button, Dropdown, Layout, Menu, Space, theme } from 'antd';
import Image from "next/image";
import BrandLogo from "@/assets/images/pc_builder.png";
const { Header, Content, Footer } = Layout;
import type { MenuProps } from 'antd';
import { DownOutlined } from "@ant-design/icons";
import Link from "next/link";
import IsMobile from "../hooks/isMobile";
import { categories } from "../utils/_categories_data";
const headerStyle: React.CSSProperties = {
	textAlign: 'center',
	color: '#fff',
	height: 120,
	lineHeight: '64px',
	backgroundColor: '#7dbcea',
	position: 'sticky',
	top: 0,
	zIndex: 1,
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: "space-between"
};

const MainLayout = ({ children }: { children: ReactNode }) => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	const { isMobileScreen } = IsMobile();

	return (
		<Layout>
			<Header
				style={headerStyle}
			>
				<div style={{ display: 'flex', alignItems: "center", justifyContent: "space-evenly", gap: "30px" }}>
					<Link href={'/'}>
						<Image src={BrandLogo} width={200} height={150} style={{ marginTop: 30 }} alt="pc builder" /></Link>
					{isMobileScreen ? <Space>
						<Button ghost size="large">PC Builder</Button>
						<Menu
							theme="light"

							mode="horizontal"
							items={categories}
						/>

					</Space> : <Dropdown menu={{ items: categories }} placement="bottom" arrow >
						<Space style={{ color: "white", cursor: "pointer", fontSize: "22px" }} size={'large'}>Categories         <DownOutlined /></Space>
					</Dropdown>}

				</div>

				{!isMobileScreen && <div>
					<Button ghost size="large">PC Builder</Button>
				</div>}
			</Header>
			<Content className="site-layout" style={{ padding: '0 50px' }}>

				<div style={{ padding: 24, minHeight: 800, background: colorBgContainer }}>{
					children
				}</div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>PC Builder ©2023 Created by <a href="mailto:404ridwan@gmail.com">Ridwan</a></Footer>
		</Layout>
	);
};

export default MainLayout;

