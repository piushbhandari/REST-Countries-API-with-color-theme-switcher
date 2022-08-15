import React, { useReducer, useEffect, useContext } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();
const initialState = {};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dummyFunc = (id, name) => {
    dispatch({ type: "dummy", payload: { id: id, name: name } });
  };
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export function useGlobalContext() {
  return useContext(AppContext);
}
export { AppContext, AppProvider };
