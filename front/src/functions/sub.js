import axios from "axios";

export const getSubs= async () =>
  await axios.get(`${process.env.REACT_APP_API}/subs`);

  
export const createSub = async (sub, token) =>
await axios.post(`${process.env.REACT_APP_API}/sub`, sub, {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  },
});

export const removeSub = async (slug, subId, token) =>
  await axios.delete(`${process.env.REACT_APP_API}/sub/${subId}/${slug}`, {
    headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
    },
  });