import { Col, Divider, Row } from "antd";
import ProductCard from "./ProductCard";
import { anton } from "@/pages/_app";
import IsMobile from "@/hooks/isMobile";

const style: React.CSSProperties = { background: '#fff', padding: '0px 0' };


const ProductItems = ({ products, title }: { products: IProduct[], title: string }) => {
	const { isMobileScreen } = IsMobile();
	return (
		<div>
			<h1 style={{ textAlign: 'center', padding: '20px 0 0 0', textDecoration: 'underline', fontSize: isMobileScreen ? 24 : 40 }} className={anton.className}>🎉 {title.toUpperCase()} 🎉</h1>
			<Divider style={{ margin: 20 }} />
			<Row justify='center' gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				{products.map((product: IProduct, index) => <Col key={index} style={isMobileScreen ? { marginBottom: 30 } : { marginBottom: 10 }} className="gutter-row" xl={6} lg={8} md={12} sm={12} xs={24}>
					<div style={style}>
						<ProductCard product={product} />
					</div>
				</Col>)}
			</Row>
		</div>
	);
};

export default ProductItems;