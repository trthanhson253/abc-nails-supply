import axios from "axios";

export const getBrands = async () =>
  await axios.get(`${process.env.REACT_APP_API}/brands`);

  
export const createBrand = async (brand, token) =>
await axios.post(`${process.env.REACT_APP_API}/brand`, brand, {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  },
});

