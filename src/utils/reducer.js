const reducer = (state, action) => {
  if (action.type === "dummy") {
    let id = action.payload.id;
    let name = action.payload.name;
    return { ...state };
  }
};

export default reducer;
