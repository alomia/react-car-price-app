import { createContext, useContext, useState } from "react";

export const Context = createContext();

export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

function GlobalStateProvider({ children }) {
  const [budget, setBudget] = useState(4000);

  return (
    <Context.Provider
      value={{
        budget,
        setBudget,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default GlobalStateProvider;
