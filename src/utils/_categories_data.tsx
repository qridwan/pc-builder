import { MenuProps } from "antd";
import Link from "next/link";

const cssStyle: React.CSSProperties = {
	color: 'inherit',
	cursor: 'pointer'
};
export const categories: MenuProps["items"] = [
	{
		key: "1",
		label: <Link style={cssStyle} href="/products/cpu">CPU / Processor</Link>,
	},
	{
		key: "2",
		label: <Link style={cssStyle} href="/products/motherboard">Motherboard</Link>,
	},
	{
		key: "3",
		label: <Link style={cssStyle} href="/products/ram">RAM</Link>,
	},
	{
		key: "4",
		label: <Link style={cssStyle} href="/products/power supply unit">Power Supply Unit</Link>,
	},
	{
		key: "5",
		label: <Link style={cssStyle} href="/products/storage device">Storage Device</Link>,
	},
	{
		key: "6",
		label: <Link style={cssStyle} href="/products/monitor">Monitor</Link>,
	},
	{
		key: "7",
		label: <Link style={cssStyle} href="/products/gpu">GPU</Link>,
	},
];
