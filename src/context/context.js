import { createContext, useContext } from "react";

const Context = createContext();

export function useLocalContext() {
  return useContext(Context);
}

export function ContextProvider({ children }) {
  const abc = "test";
  const value = {
    abc,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
