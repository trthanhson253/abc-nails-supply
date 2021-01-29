let initialState = [];

export const searchResultReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_SEARCH":
      return action.payload;
    default:
      return state;
  }
};
