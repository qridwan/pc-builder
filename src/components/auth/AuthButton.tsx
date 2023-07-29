import { PcContext } from "@/context/PcContext";
import { Avatar, Button, Space } from "antd"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";
import { useContext } from "react";

export default function AuthButton() {
	const { data: session } = useSession();
	const router = useRouter();
	const { setIsPcBuilding } = useContext(PcContext)

	const handleSignOut = async () => {
		router.push('/');
		await signOut();
		setIsPcBuilding(false);
	};

	if (session) {
		return (
			<Space>
				<Avatar src={session.user && session.user.image} /> {session.user && session.user.name.toUpperCase()} <br />
				<Button style={{ marginRight: 10 }} type="primary" onClick={handleSignOut}>Sign out</Button>
			</Space>
		)
	}
	return (
		<Space>
			<Button style={{ marginRight: 10 }} type="primary" onClick={() => signIn()}>Sign in</Button>
		</Space>
	)
}