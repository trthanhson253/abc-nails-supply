import axios from "axios";

export const userCart = async (cart, token) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/cart`,
    { cart },
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const getUserCart = async (token) =>
  await axios.get(`${process.env.REACT_APP_API}/user/cart`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

export const emptyUserCart = async (token) =>
  await axios.delete(`${process.env.REACT_APP_API}/user/cart`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

export const applyCoupon = async (token, coupon) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/cart/coupon`,
    { coupon },
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const getWishlist = async (token) =>
  await axios.get(`${process.env.REACT_APP_API}/user/wishlist`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

export const removeWishlist = async (productId, token) =>
  await axios.put(
    `${process.env.REACT_APP_API}/user/wishlist/${productId}`,
    {},
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const addToWishlist = async (productId, token) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/wishlist`,
    { productId },
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const changeShippingMethod = async (shipping, token) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/cart/shipping-change`,
    { shipping },
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const saveShippingBilling = async (values, token) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/cart/save-shipping-billing`,
    { values },
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
export const saveShippingBillingBothSame = async (values, token) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/cart/save-shipping-billing-both-same`,
    { values },
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
export const getBillingAndShippingAddress = async (token) =>
  await axios.get(
    `${process.env.REACT_APP_API}/user/cart/get-billing-shipping-address`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const createOrder = async (stripeResponse, token) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/order`,
    { stripeResponse },
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const getUserOrders = async (token) =>
  await axios.get(`${process.env.REACT_APP_API}/user/orders`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

export const getUserOrderDetail = async (trackId, token) =>
  await axios.get(
    `${process.env.REACT_APP_API}/user/order/detail/${trackId}`,

    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const getUserOrderUpdate = async (orderId, token) =>
  await axios.get(
    `${process.env.REACT_APP_API}/user/user-order-update/${orderId}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

// export const getLatestOrder = async (token) =>
//   await axios.get(`${process.env.REACT_APP_API}/user/orders/getLatest`, {
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });

export const getDetailOrderBaseOnTrackId = async (trackId) =>
  await axios.get(`${process.env.REACT_APP_API}/track-order/${trackId}`);

export const requestCancelOrder = async (trackId, token) => {
  console.log("token", token);
  await axios.get(
    `${process.env.REACT_APP_API}/user/order/request-cancel/${trackId}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
