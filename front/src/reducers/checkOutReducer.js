// export const checkOutReducer = (state = false, action) => {
//   switch (action.type) {
//     case "CHECKOUT_APPLIED":
//       return action.payload;
//     default:
//       return state;
//   }
// };
let initialState = {
  address: false,
  payment: false,
  finish: false,
};
export const checkOutReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECKOUT_APPLIED":
      return action.payload;
    default:
      return state;
  }
};
