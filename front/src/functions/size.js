import axios from "axios";

export const getSizes = async () =>
  await axios.get(`${process.env.REACT_APP_API}/sizes`);

  
export const createSize = async (size, token) =>
await axios.post(`${process.env.REACT_APP_API}/size`, size, {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  },
});

