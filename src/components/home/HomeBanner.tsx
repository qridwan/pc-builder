import { Col, Divider, Row } from 'antd';
import Image from 'next/image';
import BannerImage from '@/assets/images/banner.png';
import { anton, pacifico } from '@/pages/_app';
import IsMobile from '@/hooks/isMobile';
import { TypeAnimation } from 'react-type-animation';

const style: React.CSSProperties = { background: '#f48bb2', padding: '20px' };

const HomeBanner = () => {
	const { isMobileScreen } = IsMobile();
	return (
		<Row gutter={isMobileScreen ? 10 : 16} style={style} align='middle' justify={'center'}>

			<Col className="gutter-row" md={10} sm={0} xs={0}>
				<div >
					<Image src={BannerImage} width={300} alt="Welcome to Pc Builder"></Image>
				</div>
			</Col>
			<Col className="gutter-row" sm={24} md={12}>
				<div style={{ color: 'white' }}>
					{isMobileScreen ? <h2 className={anton.className} style={{ fontSize: 30, margin: 0 }}>Craft Your Perfect PC</h2> : <TypeAnimation
						sequence={[
							// Same substring at the start will only be typed once, initially
							'Craft Your Perfect PC',
							4000,
							'Craft Your Dream PC',
							4000,
							'Design Your Ultimate PC',
							4000,
						]}
						speed={10}
						style={{ fontSize: 60 }}
						className={anton.className}
						repeat={Infinity}
					/>}
					{/* <h2 className={anton.className} style={{ fontSize: isMobileScreen ? 40 : 70, margin: 0 }}></h2> */}
					<p className={pacifico.className} style={{ fontSize: isMobileScreen ? 20 : 40, marginTop: 0 }}>Where Dreams Meet Reality!</p>
				</div>
			</Col>
		</Row>
	);
};

export default HomeBanner;