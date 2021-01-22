import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { searchReducer } from "./searchReducer";
import { cartReducer } from "./cartReducer";
import { drawerReducer } from "./drawerReducer";
import { couponReducer } from "./couponReducer";
import { loadingReducer } from "./loadingReducer";
import { spinReducer } from "./spinReducer";
import { checkOutReducer } from "./checkOutReducer";

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  cart: cartReducer,
  drawer: drawerReducer,
  coupon: couponReducer,
  load: loadingReducer,
  spin: spinReducer,
  checkout: checkOutReducer,
});

export default rootReducer;
