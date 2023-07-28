import React from 'react';
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import theme from './theme/themeConfig';
import MainLayout from './components/layout';
import { Anton, Pacifico } from 'next/font/google';

export const anton = Anton({ subsets: ['latin'], weight: ['400'], })
export const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'], })

const App = ({ Component, pageProps }: AppProps) => (
	<ConfigProvider theme={theme}>
		<MainLayout>
			<Component {...pageProps} />
		</MainLayout>
	</ConfigProvider>
);

export default App;
