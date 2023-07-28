export type PcContextType = {
  isPcBuilding: boolean;
  setIsPcBuilding: (isBuilding: boolean) => void;
  pcData: IProduct[] | null;
  setPcData: (dt: any) => void;
  addToPcBuilder: (data: IProduct | null) => void;
  deleteFromPcBuilder: (data: string | any) => void;
};
