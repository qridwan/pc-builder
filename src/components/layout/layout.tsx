import { ReactNode, useContext, useState } from "react";
import { Button, Dropdown, Layout, Menu, Space, theme } from 'antd';
import Image from "next/image";
import BrandLogo from "@/assets/images/pc_builder.png";
const { Header, Content, Footer } = Layout;
import type { MenuProps } from 'antd';
import { DownOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Link from "next/link";
import IsMobile from "../../hooks/isMobile";
import { categories } from "../../utils/_categories_data";
import { useRouter } from "next/router";
import { PcContext } from "@/context/PcContext";
import handler from '../../pages/api/hello';
import MobileDrawer from "./Drawer";
const headerStyle: React.CSSProperties = {
	textAlign: 'center',
	color: '#fff',
	height: 120,
	lineHeight: '64px',
	backgroundColor: '#576ECF',
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
	const [open, setOpen] = useState<boolean>(false);
	const { isMobileScreen } = IsMobile();
	const { setIsPcBuilding } = useContext(PcContext);
	const router = useRouter();
	return (
		<Layout>
			<Header
				style={headerStyle}
			>
				<div style={{ display: 'flex', alignItems: "center", justifyContent: "space-evenly", gap: "30px" }}>
					<Link href={'/'} onClick={() => setIsPcBuilding(false)}>
						<Image src={BrandLogo} width={isMobileScreen ? 100 : 200} height={isMobileScreen ? 80 : 150} style={{ marginTop: 30 }} alt="pc builder" /></Link>
					{!isMobileScreen && <Dropdown onOpenChange={() => setIsPcBuilding(false)} trigger={['click']} menu={{ items: categories }} placement="bottom" arrow >
						<Space style={{ color: "white", cursor: "pointer", fontSize: "22px" }} size={'large'}>Categories         <DownOutlined /></Space>
					</Dropdown>}

				</div>

				{isMobileScreen && <Space>
					<MobileDrawer open={open} setOpen={setOpen} />
					<Space>

						<Button ghost onClick={() => setOpen(true)}>
							<MenuFoldOutlined />
						</Button>
					</Space>
				</Space>}

				{!isMobileScreen && <div>
					<Button ghost size="large" onClick={() => router.push('/pc-build')}>PC Builder</Button>
				</div>}
			</Header>
			<Content style={{ padding: isMobileScreen ? '0 5px' : '0 50px' }}>

				<div style={{ padding: isMobileScreen ? 10 : 24, minHeight: 800, background: colorBgContainer }}>{
					children
				}</div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>PC Builder ©2023 Created by <a href="mailto:404ridwan@gmail.com">Ridwan</a></Footer>
		</Layout>
	);
};

export default MainLayout;

