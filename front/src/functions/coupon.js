import axios from "axios";

export const getCoupons = async () =>
  await axios.get(`${process.env.REACT_APP_API}/coupons`);

  
export const createCoupon = async (coupon, token) =>
await axios.post(`${process.env.REACT_APP_API}/coupon`, coupon, {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  },
});

