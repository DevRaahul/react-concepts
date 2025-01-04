import { createContext, FC, useContext, useState } from "react";

interface IContext {
  globalData: IContextData;
  updateGlobalContext: (data: any) => void;
}

interface IContextData {
  test: string;
}

export const Context = createContext<IContext | null>(null);

export const useGlobalContext = () => useContext(Context);

const GlobalContext: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [globalData, setGlobalData] = useState<IContextData | null>({ test: "test" });

  const updateGlobalContext = (data: any) => {
    setGlobalData((prev: any) => {
      return {
        ...prev,
        ...data,
      };
    });
  };

  return <Context.Provider value={[globalData, updateGlobalContext]}>{children}</Context.Provider>;
};

export default GlobalContext;
