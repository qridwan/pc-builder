import Head from 'next/head'
import { Inter } from 'next/font/google'
import HomeBanner from '../components/home/HomeBanner'
import FeaturedCategories from '../components/home/FeaturedCategories'
import { env } from '@/utils/envVariables'
import ProductItems from '@/components/shared/ProductItems'


export default function Home({ products }: { products: IProduct[] }) {
	return (
		<>
			<Head>
				<title>Pc Builder || Pro</title>
				<meta name="description" content="PC Builder Application || Craft Your Dream PC" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HomeBanner />
			<ProductItems products={products} title='Featured Products' />
			<FeaturedCategories />
		</>
	)
}


// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
	const res = await fetch(env.apiUrl + '/featured')
	const products: IProduct[] = await res.json()

	return {
		props: {
			products,
		},
		revalidate: 10, // in 10 seconds the page will be revalidated
	}
}