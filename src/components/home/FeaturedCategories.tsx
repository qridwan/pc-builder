import { Card, Divider } from "antd";
import { anton } from "@/pages/_app";
import IsMobile from "@/hooks/isMobile";
import { categories } from "@/utils/_categories_data";

const gridStyle: React.CSSProperties = {
	width: '18%',
	textAlign: 'center',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	margin: '5px',
	background: '#F48BB2',
	color: 'white',
	fontSize: 24,
	fontWeight: 'bold',
	borderRadius: 25,
	cursor: 'pointer',
	letterSpacing: 0.5,
	textShadow: '5px 2px 2px #474747'
};
const mobileStyle: React.CSSProperties = {
	width: '100%',
	textAlign: 'center',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	margin: '5px',
	background: '#F48BB2',
	color: 'white',
	fontSize: 24,
	fontWeight: 'bold',
	borderRadius: 25,
	cursor: 'pointer',
	letterSpacing: 0.5,
	textShadow: '5px 2px 2px #474747'
};
const FeaturedCategories = () => {
	const { isMobileScreen } = IsMobile();
	return (
		<div>
			<h1 style={{ textAlign: 'center', padding: '20px 0 0 0', textDecoration: 'underline', fontSize: 40 }} className={anton.className}>🎉 Featured Categories 🎉</h1>
			<Divider style={{ margin: 20 }} />
			<Card style={{ display: 'flex', justifyContent: 'center', width: '100%', border: 'none' }}>
				{categories?.map((item: any) => <Card.Grid key={item?.key} style={isMobileScreen ? mobileStyle : gridStyle}>
					{item?.label}
				</Card.Grid>)}

			</Card>
		</div>
	);
};

export default FeaturedCategories;