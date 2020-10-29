import axios from "axios";

export const getSubSubs= async () =>
  await axios.get(`${process.env.REACT_APP_API}/subSubs`);

  
export const createSubSub = async (subSub, token) =>
await axios.post(`${process.env.REACT_APP_API}/subSub`, subSub, {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  },
});

export const removeSubSub = async (slug, subSubId, token) =>
  await axios.delete(`${process.env.REACT_APP_API}/subSub/${subSubId}/${slug}`, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  });