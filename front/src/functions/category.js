import axios from "axios";

export const getCategories = async () =>
  await axios.get(`${process.env.REACT_APP_API}/categories`);

  
export const createCategory = async (category, token) =>
  await axios.post(`${process.env.REACT_APP_API}/category`, category, {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  },
});

export const getCategorySubs = async (_id) =>
  await axios.get(`${process.env.REACT_APP_API}/category/subs/${_id}`);

export const getCategorySubSubs = async (_id) =>
  await axios.get(`${process.env.REACT_APP_API}/category/subs/subsubs/${_id}`);

export const loadMenu = async (id) =>{
  return await axios.post(`${process.env.REACT_APP_API}/category/load-menu`, {id},{
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
  });
}
  
export const removeCategory = async (slug,cateId,token,images) =>{
  console.log("token",token);
  await axios.post(`${process.env.REACT_APP_API}/category/${slug}`, {images,cateId},{
    headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
    },
  });
}
