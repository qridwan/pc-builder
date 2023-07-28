import { PcContextType } from "@/types/pcContext";
import { ReactNode, createContext, useState } from "react";

export const PcContext = createContext<PcContextType>({ isPcBuilding: false, setIsPcBuilding: () => { }, pcData: null, setPcData: () => { }, addToPcBuilder: () => { }, deleteFromPcBuilder: () => { } });

const PcContextProvider = ({ children }: { children: ReactNode }) => {
	const [isPcBuilding, setIsPcBuilding] = useState<boolean>(false);
	const [pcData, setPcData] = useState<IProduct[] | null>(null);


	const addToPcBuilder = (pd: IProduct | null) => {
		const filterPd = pcData?.filter((p) => p.category !== pd?.category);
		pd && setPcData(filterPd ? [...filterPd, pd] : [pd])
	}

	const deleteFromPcBuilder = (category: string) => {
		const filterPd = pcData?.filter((p) => p.category !== category);
		setPcData(filterPd ? [...filterPd] : null)
	}


	const value = { isPcBuilding, setIsPcBuilding, pcData, setPcData, addToPcBuilder, deleteFromPcBuilder };
	return (
		<PcContext.Provider value={value}>
			{children}
		</PcContext.Provider>
	)
}

export default PcContextProvider;