export const spinReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_SPIN':
      return action.payload;
    default:
      return state;
  }
};
