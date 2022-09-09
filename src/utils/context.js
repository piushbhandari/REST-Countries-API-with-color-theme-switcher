import React, { useReducer, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import reducer from "./reducer";
import { getParams } from "./utilityFunctions";

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
  let [searchParams, setSearchParams] = useSearchParams();

  function setNewRegion(val) {
    dispatch({ type: "setNewRegion", payload: val });
  }
  function toggleModal() {
    dispatch({ type: "toggleModal" });
  }
  function searchCountry(query) {
    setSearchParams({ search: query });
    dispatch({ type: "searchCountry", payload: query });
  }
  async function fetchApi(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    let apiUrl;
    let paramObj = getParams();
    apiUrl = "https://restcountries.com/v3.1/all";
    fetchApi(apiUrl).then((data) => {
      dispatch({ type: "loadData", payload: data });
      dispatch({ type: "getBorders", payload: data });
      if (paramObj.search)
        dispatch({ type: "searchCountry", payload: paramObj.search });

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
