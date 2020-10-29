import axios from "axios";

export const getColors = async () =>
  await axios.get(`${process.env.REACT_APP_API}/colors`);

  
export const createColor = async (color, token) =>
await axios.post(`${process.env.REACT_APP_API}/color`, color, {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  },
});

