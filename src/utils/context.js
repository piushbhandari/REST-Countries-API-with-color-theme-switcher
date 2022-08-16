import React, { useReducer, useEffect, useContext } from "react";
import reducer from "./reducer";

let apiUrl = "https://restcountries.com/v3.1/all";
const AppContext = React.createContext();
const initialState = {
  isFilterModal: false,
  currentRegion: "",
  isLoading: true,
  allCountries: null,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function setNewRegion(val) {
    dispatch({ type: "setNewRegion", payload: val });
  }
  function toggleModal() {
    dispatch({ type: "toggleModal" });
  }
  async function fetchApi(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  useEffect(() => {
    fetchApi(apiUrl).then((data) => {
      dispatch({ type: "loadData", payload: data });
      dispatch({ type: "toggleLoad", payload: false });
    });
  }, []);
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
