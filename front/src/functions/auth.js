import axios from "axios";
import cookie from "js-cookie";

export const login = async (email, password) => {
  return await axios.post(`${process.env.REACT_APP_API}/login`, {
    email,
    password,
  });
};

export const register = async (name, email, password, confirmPassword) => {
  return await axios.post(`${process.env.REACT_APP_API}/register`, {
    name,
    email,
    password,
    confirmPassword,
  });
};

export const currentUser = async (userId, token) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/current-user`,
    { userId },
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const currentAdmin = async (token) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/current-admin`,
    {},
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const registerActivate = async (token) => {
  return await axios.get(
    `${process.env.REACT_APP_API}/register/activate/${token}`
  );
};

export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
    });
  }
};

export const getCookie = (key) => {
  if (process.browser) {
    return cookie.get(key);
  }
};

export const removeCookie = (key) => {
  if (process.browser) {
    cookie.remove(key);
  }
};

export const updateUser = async (values, token) =>
  await axios.post(`${process.env.REACT_APP_API}/user/update`, values, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
