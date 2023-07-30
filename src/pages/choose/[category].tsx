import ProductItems from "@/components/shared/ProductItems";
import { env } from "@/utils/envVariables";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

const Products = ({ products }: { products: IProduct[] }) => {
	const router = useRouter();

	return (
		<div>
			<ProductItems title={router?.query.category as string} products={products} />
		</div>
	);
};

export default Products;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
// export async function getStaticProps(context: any) {
// 	const { category } = context.params; // Access the dynamic "category" parameter

// 	// Fetch products for the specified category
// 	const res = await fetch(env.apiUrl + `/products?category=${category}`);
// 	const products = await res.json();

// 	return {
// 		props: {
// 			products,
// 		},
// 	};
// }


// // This function specifies the dynamic paths for pre-rendering
// export async function getStaticPaths() {
// 	// Fetch the list of all categories or hard-code the categories you want to pre-render
// 	const categories = ["gpu", "monitor", "storage device", "motherboard", "power supply unit", "cpu", "ram"]; // Replace with your actual categories

// 	// Map the categories to an array of objects with "params" property
// 	const paths = categories.map((category) => ({
// 		params: { category },
// 	}));

// 	return {
// 		paths,
// 		fallback: false, // Set to true if you want to fallback to server-side rendering for unmatched paths
// 	};
// }


export const getServerSideProps = async (context: any) => {
	// Fetch products for the specified category
	const res = await fetch(env.apiUrl + `/products?category=${context.query.category}`);
	const products = await res.json();

	return {
		props: {
			products,
		},
	};
}