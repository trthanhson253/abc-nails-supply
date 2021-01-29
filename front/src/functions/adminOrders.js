import axios from "axios";

export const getOrders = async (token) =>
  await axios.get(`${process.env.REACT_APP_API}/admin/orders`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

export const changeStatus = async (orderId, orderStatus, token) =>
  await axios.put(
    `${process.env.REACT_APP_API}/admin/order-status`,
    { orderId, orderStatus },
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const getAdminDetailOrder = async (orderId, token) =>
  await axios.get(`${process.env.REACT_APP_API}/admin/order/${orderId}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

export const getAdminOrderUpdate = async (orderId, token) =>
  await axios.get(
    `${process.env.REACT_APP_API}/admin/order-update/${orderId}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const updateOrderProgress = async (order, orderId, token) =>
  await axios.post(
    `${process.env.REACT_APP_API}/admin/order/update-progress/${orderId}`,
    order,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
