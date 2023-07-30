import { ReactNode } from "react";
import { Layout, theme } from 'antd';
import IsMobile from "../../hooks/isMobile";
import Navbar from "./NavBar";

const { Content, Footer } = Layout;
const MainLayout = ({ children }: { children: ReactNode }) => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	const { isMobileScreen } = IsMobile();
	return (
		<Layout>
			<Navbar />
			<Content style={{ padding: isMobileScreen ? '0 5px' : '0 50px' }}>

				<div style={{ padding: isMobileScreen ? 10 : 24, minHeight: 800, background: colorBgContainer }}>{
					children
				}</div>
			</Content>
			<Footer style={{ textAlign: 'center', background: '#F48BB2', }}>Pro. PC Builder ©{new Date().getFullYear()} Created by <a href="mailto:404ridwan@gmail.com">Ridwan</a></Footer>
		</Layout>
	);
};

export default MainLayout;

