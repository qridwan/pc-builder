import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import theme from '../theme/themeConfig';
import MainLayout from '../components/layout/layout';
import { Anton, Pacifico } from 'next/font/google';
import PcContextProvider from '@/context/PcContext';

export const anton = Anton({ subsets: ['latin'], weight: ['400'], })
export const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'], })



const App = ({ Component, pageProps }: AppProps) => (
	<PcContextProvider>
		<ConfigProvider theme={theme}>
			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		</ConfigProvider>
	</PcContextProvider>
);

export default App;
