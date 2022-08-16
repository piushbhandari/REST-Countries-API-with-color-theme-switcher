const reducer = (state, action) => {
  if (action.type === "setNewRegion") {
    return { ...state, currentRegion: action.payload };
  }
  if (action.type === "toggleModal") {
    return { ...state, isFilterModal: !state.isFilterModal };
  }
  if (action.type === "loadData") {
    return { ...state, allCountries: action.payload };
  }
  if (action.type === "toggleLoad") {
    return { ...state, isLoading: action.payload };
  }
};

export default reducer;
