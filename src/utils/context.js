import React, { useReducer, useEffect, useContext } from "react";
import reducer from "./reducer";

let apiUrl = "https://restcountries.com/v3.1/all";
const AppContext = React.createContext();
const initialState = {
  isFilterModal: false,
  currentRegion: "",
  isLoading: true,
  allCountries: null,
  filteredCountries: null,
  searchQuery: "",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function setNewRegion(val) {
    dispatch({ type: "setNewRegion", payload: val });
    dispatch({ type: "searchCountry" });
  }
  function toggleModal() {
    dispatch({ type: "toggleModal" });
  }
  function searchCountry(query) {
    console.log(query);
    dispatch({ type: "searchCountry", payload: query });
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
    <AppContext.Provider
      value={{ ...state, setNewRegion, toggleModal, searchCountry }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useGlobalContext() {
  return useContext(AppContext);
}
export { AppContext, AppProvider };
