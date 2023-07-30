import { useContext, useState } from "react";
import { Button, Dropdown, Layout, Space } from 'antd';
import Image from "next/image";
import BrandLogo from "@/assets/images/pc_builder.png";
import { DownOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Link from "next/link";
import IsMobile from "../../hooks/isMobile";
import { categories } from "../../utils/_categories_data";
import { useRouter } from "next/router";
import { PcContext } from "@/context/PcContext";
import MobileDrawer from "./Drawer";
import AuthButton from "../auth/AuthButton";


const headerStyle: React.CSSProperties = {
	textAlign: 'center',
	color: '#fff',
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

const { Header } = Layout;

const Navbar = () => {
	const [open, setOpen] = useState<boolean>(false);
	const { isMobileScreen } = IsMobile();
	const { setIsPcBuilding } = useContext(PcContext);
	const router = useRouter();
	return (
		<Header
			style={{ ...headerStyle, height: isMobileScreen ? 50 : 74 }}
		>
			<div style={{ display: 'flex', alignItems: "center", justifyContent: "space-evenly", gap: "30px" }}>

				{/* Brand logo */}
				<Link href={'/'} onClick={() => setIsPcBuilding(false)}>
					<Image src={BrandLogo} width={isMobileScreen ? 80 : 150} height={isMobileScreen ? 50 : 84} style={{ marginTop: isMobileScreen ? 30 : 30 }} alt="pc builder" /></Link>

				{/* desktop nav */}
				{!isMobileScreen &&
					<Dropdown onOpenChange={() => setIsPcBuilding(false)} trigger={['click']} menu={{ items: categories }} placement="bottom" arrow >
						<Button ghost><Space style={{ color: "white", cursor: "pointer", fontSize: "20px" }} size={'large'}>

							Categories         <DownOutlined /></Space></Button>
					</Dropdown>}

			</div>

			{/* Mobile Menu */}
			{isMobileScreen && <Space>
				<MobileDrawer open={open} setOpen={setOpen} />
				<Space>

					<Button ghost onClick={() => setOpen(true)}>
						<MenuFoldOutlined />
					</Button>
				</Space>
			</Space>}

			{!isMobileScreen && <div>
				<AuthButton />
				{!router.asPath.includes('/pcbuild') && <Button ghost onClick={() => router.push('/pcbuild')}>PC Builder</Button>}
			</div>}
		</Header>
	);
}
export default Navbar;