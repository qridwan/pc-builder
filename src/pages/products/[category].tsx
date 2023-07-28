import { useRouter } from "next/router";

const Products = () => {
	const router = useRouter()

	return (
		<div>
			{router.query?.category}
		</div>
	);
};

export default Products;