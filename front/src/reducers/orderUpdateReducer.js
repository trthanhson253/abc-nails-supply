let initialState = [];

export const orderUpdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ORDER_UPDATE_CHANGE":
      return action.payload;
    default:
      return state;
  }
};
