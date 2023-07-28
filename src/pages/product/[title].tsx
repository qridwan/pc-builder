
import { env } from "@/utils/envVariables";
import DeatailsCard from '../../components/shared/DetailsPage';

const Product = ({ product }: { product: IProduct }) => {
	// const router = useRouter();
	return (
		<div>
			<DeatailsCard product={product} />
		</div>
	);
};

export default Product;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps(context: any) {
	const { title } = context.params; // Access the dynamic "category" parameter

	// Fetch product for the specified category
	const res = await fetch(env.apiUrl + `/products?title=${title}`);
	const product = await res.json();

	return {
		props: {
			product: product[0],
		},
	};
}


// This function specifies the dynamic paths for pre-rendering
export async function getStaticPaths() {
	const res = await fetch(env.apiUrl + `/products`);
	const allProducts = await res.json();

	const paths = allProducts.map((product: IProduct) => ({
		params: { title: product.name },
	}));

	return {
		paths,
		fallback: false, // Set to true if you want to fallback to server-side rendering for unmatched paths
	};
}