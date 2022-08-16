import React, { useReducer, useEffect, useContext } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();
const initialState = {
  isFilterModal: false,
  currentRegion: "",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function setNewRegion(val) {
    dispatch({ type: "setNewRegion", payload: val });
  }
  function toggleModal() {
    dispatch({ type: "toggleModal" });
  }
  return (
    <AppContext.Provider value={{ ...state, setNewRegion, toggleModal }}>
      {children}
    </AppContext.Provider>
  );
};

export function useGlobalContext() {
  return useContext(AppContext);
}
export { AppContext, AppProvider };
