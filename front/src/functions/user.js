import axios from "axios";

export const userCart = async (cart, token) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/cart`,
    { cart },
    {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
    }
  );

export const getUserCart = async (token) =>
  await axios.get(`${process.env.REACT_APP_API}/user/cart`, {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
  });

  export const emptyUserCart = async (token) =>
  await axios.delete(`${process.env.REACT_APP_API}/user/cart`, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
  },
  });
