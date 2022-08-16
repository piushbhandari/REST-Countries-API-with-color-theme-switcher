const reducer = (state, action) => {
  if (action.type === "setNewRegion") {
    return { ...state, currentRegion: action.payload };
  }
  if (action.type === "toggleModal") {
    return { ...state, isFilterModal: !state.isFilterModal };
  }
  if (action.type === "loadData") {
    return {
      ...state,
      allCountries: action.payload,
      filteredCountries: action.payload,
    };
  }
  if (action.type === "searchCountry") {
    let allCountries = state.allCountries;
    let searchQuery = action.payload.toLowerCase().trim().split(" ").join("");
    let currentRegion = state.currentRegion;
    console.log(allCountries);
    let filteredCountries = allCountries.filter(
      (country) =>
        country.name.common
          .toLowerCase()
          .trim()
          .split(" ")
          .join("")
          .includes(searchQuery) && country.region.includes(currentRegion)
    );

    console.log(filteredCountries);
    return { ...state, filteredCountries };
  }
  if (action.type === "toggleLoad") {
    return { ...state, isLoading: action.payload };
  }
};

export default reducer;
