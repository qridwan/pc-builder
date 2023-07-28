import { Col, Divider, Row } from 'antd';
import Image from 'next/image';
import BannerImage from '@/assets/images/banner.png';
import { anton, pacifico } from '@/pages/_app';

const style: React.CSSProperties = { background: '#f48bb2', padding: '20px' };

const HomeBanner = () => {
	return (
		<Row gutter={16} style={style} align='middle' justify={'center'}>

			<Col className="gutter-row" sm={10} xs={0}>
				<div >
					<Image src={BannerImage} alt="Welcome to Pc Builder"></Image>
				</div>
			</Col>
			<Col className="gutter-row" span={14}>
				<div style={{ color: 'white' }}>
					<h2 className={anton.className} style={{ fontSize: 70, margin: 0 }}>Craft Your Perfect PC</h2>
					<p className={pacifico.className} style={{ fontSize: 40, marginTop: 0 }}>Where Dreams Meet Reality!</p>
				</div>
			</Col>
		</Row>
	);
};

export default HomeBanner;