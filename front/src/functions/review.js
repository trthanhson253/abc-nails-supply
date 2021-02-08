import axios from "axios";

export const createReview = async (values, productId, token) =>
  await axios.post(`${process.env.REACT_APP_API}/review/${productId}`, values, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
export const remove = async (reviewId, productId, token) =>
  await axios.delete(
    `${process.env.REACT_APP_API}/review/${reviewId}/${productId}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

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

export const getReviewsPercent = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/review-percent/${slug}`);
