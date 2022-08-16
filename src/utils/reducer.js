const reducer = (state, action) => {
  if (action.type === "setNewRegion") {
    return { ...state, currentRegion: action.payload };
  }
  if (action.type === "toggleModal") {
    return { ...state, isFilterModal: !state.isFilterModal };
  }
};

export default reducer;
