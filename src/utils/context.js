import React, { useReducer, useEffect, useContext } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();
const initialState = {
  isFilterModal: false,
  currentRegion: "",
  isLoading: true,
  allCountries: null,
  filteredCountries: null,
  searchQuery: "",
  countryAbbrevToBorders: null,
  currentTheme: "light",
  searchParams: {
    region: "",
    theme: "light",
    search: "",
  },
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function setNewRegion(val) {
    dispatch({ type: "setNewRegion", payload: val });
  }
  function toggleModal() {
    dispatch({ type: "toggleModal" });
  }
  function searchCountry(query) {
    dispatch({ type: "searchCountry", payload: query });
  }
  async function fetchApi(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    fetchApi("https://restcountries.com/v3.1/all").then((data) => {
      dispatch({ type: "loadData", payload: data });
      dispatch({ type: "getBorders", payload: data });
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
