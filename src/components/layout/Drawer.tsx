import React, { useContext, useState } from 'react';
import { Button, Drawer, Menu, Radio, Space } from 'antd';
import type { DrawerProps } from 'antd/es/drawer';
import BrandLogo from "@/assets/images/pc_builder.png";
import { categories } from '@/utils/_categories_data';
import { PcContext } from '@/context/PcContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import IsMobile from '@/hooks/isMobile';

const MobileDrawer = ({ open, setOpen }: { open: boolean, setOpen: Function }) => {
	const [placement] = useState<DrawerProps['placement']>('right');
	const { setIsPcBuilding } = useContext(PcContext);
	const { isMobileScreen } = IsMobile();
	const router = useRouter();

	const onClose = () => {
		setOpen(false);
	};

	return (
		<>

			<Drawer
				bodyStyle={{ backgroundColor: "#f0f2f5" }}
				placement={placement}
				width={'100%'}
				onClose={onClose}
				open={open}
				extra={
					<Space size={30}>


						<Button size="large" onClick={() => {
							router.push('/pc-build')

							onClose();
						}}>PC Builder</Button>

						<Link href={'/'} onClick={() => {
							setIsPcBuilding(false)

							onClose();
						}}>
							<Image src={BrandLogo} width={isMobileScreen ? 100 : 200} height={isMobileScreen ? 80 : 150} style={{ marginTop: 30 }} alt="pc builder" /></Link>

					</Space>
				}
			>
				<Menu
					theme="light"
					onClick={() => {
						setIsPcBuilding(false)
						onClose();
					}}
					mode="inline"
					items={categories}
				/>
			</Drawer >
		</>
	);
};

export default MobileDrawer;
