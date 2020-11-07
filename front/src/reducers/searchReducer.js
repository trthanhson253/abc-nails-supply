export const searchReducer = (state = { text: null }, action) => {
  switch (action.type) {
    case 'SEARCH_QUERY':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
