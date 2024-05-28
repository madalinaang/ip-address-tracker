import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface IpContextType {
  ip: string;
  setIp: Dispatch<SetStateAction<string>>;
}

export const IpContext = createContext<IpContextType>({
  ip: "",
  setIp: () => {},
});

interface IpProviderProps {
  children: ReactNode;
}

export const IpProvider = ({ children }: IpProviderProps) => {
  const [ip, setIp] = useState<string>("");

  return (
    <IpContext.Provider value={{ ip, setIp }}>{children}</IpContext.Provider>
  );
};

export const useIpContext = (): IpContextType => {
  const context = useContext(IpContext);
  if (!context) {
    throw new Error("useIpContext must be used within an IpProvider");
  }
  return context;
};
