import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import theme from '../theme/themeConfig';
import MainLayout from '../components/layout/layout';
import { Anton, Pacifico } from 'next/font/google';
import PcContextProvider from '@/context/PcContext';
import { SessionProvider } from "next-auth/react"

export const anton = Anton({ subsets: ['latin'], weight: ['400'], })
export const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'], })



const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
	<SessionProvider session={session}>
		<PcContextProvider>
			<ConfigProvider theme={theme}>
				<MainLayout>
					<Component {...pageProps} />
				</MainLayout>
			</ConfigProvider>
		</PcContextProvider>
	</SessionProvider>
);

export default App;
