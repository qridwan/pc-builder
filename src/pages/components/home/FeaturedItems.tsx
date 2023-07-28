import { Col, Divider, Row } from "antd";
import ProductCard from "../ProductCard";
import { anton } from "@/pages/_app";

const style: React.CSSProperties = { background: '#fff', padding: '0px 0' };

const FeaturedItems = () => {
	return (
		<div>
			<h1 style={{ textAlign: 'center', padding: '20px 0 0 0', textDecoration: 'underline', fontSize: 40 }} className={anton.className}>🎉 Featured Products 🎉</h1>
			<Divider style={{ margin: 20 }} />
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				{Array(6).fill(null).map((_, index) => <Col key={index} className="gutter-row" sm={4} xs={24}>
					<div style={style}>
						<ProductCard />
					</div>
				</Col>)}
			</Row>
		</div>
	);
};

export default FeaturedItems;