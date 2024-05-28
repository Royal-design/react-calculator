import { ReactElement, createContext, useState } from "react";

type StateType = {
  sign: string;
  num: any;
  res: any;
};

const initState: StateType = {
  sign: "",
  num: 0,
  res: 0
};

type ChidrenType = {
  children?: ReactElement;
};

type UseContextType = {
  calc: StateType;
  setCalc: React.Dispatch<React.SetStateAction<StateType>>;
};

const useContextState: any = {};

export const DataContext = createContext<UseContextType>(useContextState);

export const DataContextProvider = ({ children }: ChidrenType) => {
  const [calc, setCalc] = useState(initState);

  const providerValue = { calc, setCalc };
  return (
    <DataContext.Provider value={providerValue}>
      {children}
    </DataContext.Provider>
  );
};
