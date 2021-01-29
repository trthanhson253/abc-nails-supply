import axios from "axios";

export const createReview = async (values, productId, token) =>
  await axios.post(`${process.env.REACT_APP_API}/review/${productId}`, values, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

export const getReviewsBasedOnProduct = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/review/${slug}`);

export const like = async (reviewId, token) =>
  await axios.get(`${process.env.REACT_APP_API}/like/${reviewId}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

export const dislike = async (reviewId, token) =>
  await axios.get(`${process.env.REACT_APP_API}/dislike/${reviewId}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
