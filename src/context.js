import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import data from "./bakeryMenu";
const AppContext = React.createContext();

const initialState = {
  items: data,
  cart: [],
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increaseAmount = (id) => {
    dispatch({ type: "INCREASE", id: id });
  };
  const decreaseAmount = (id) => {
    dispatch({ type: "DECREASE", id: id });
  };
  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
