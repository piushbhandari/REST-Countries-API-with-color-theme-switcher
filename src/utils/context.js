import React, { useReducer, useEffect, useContext } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
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
  searchParams: {
    region: "",
    theme: "light",
    search: "",
  },
};

const AppProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  let { search } = useLocation();
  const [state, dispatch] = useReducer(reducer, initialState);

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
    let params = {};
    let apiUrl;
    let currentParams = search.split("?")[1];
    let formattedParam = new URLSearchParams(currentParams);
    for (const [key, value] of formattedParam) {
      params = { ...params, [key]: value };
    }
    console.log(params);
    apiUrl = params.search
      ? `https://restcountries.com/v3.1/name/${params.search}`
      : "https://restcountries.com/v3.1/all";

    console.log(apiUrl);
    fetchApi(apiUrl).then((data) => {
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
