import { getCookie } from "../functions/auth";

let initialState = null;

if (getCookie("token")) {
    initialState = getCookie("token");
} else {
    initialState = null;
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGGED_IN_USER":
        return action.payload;
      case "LOGOUT":
        return action.payload;
      default:
        return state;
    }
  };
  