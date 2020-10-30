import axios from "axios";

export const getProducts = async () =>
  await axios.get(`${process.env.REACT_APP_API}/products`);

  
export const createProduct = async (product, token) =>
await axios.post(`${process.env.REACT_APP_API}/product`, product, {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  },
});

export const getProductBySubSub = async (slug) =>{
  // console.log("slug",slug);
  // await axios.get(`${process.env.REACT_APP_API}/products/subSub/${slug}`);
  return fetch(`${process.env.REACT_APP_API}/products/subSub/${slug}`, {
    method: 'GET',
  }).then((response) => {
    return response.json();
  })
  .catch((err) => console.log(err));
}

// export const getDetailProduct = async (slug) =>{
//   return await axios.get(`${process.env.REACT_APP_API}/product/${slug}`);
// }

export const getDetailProduct = (slug) => {
  console.log("slug123",slug)
  return fetch(`${process.env.REACT_APP_API}/product/${slug}`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
  
export const removeProduct = async (slug,token,image) =>{
  // console.log("token",token);
  await axios.post(`${process.env.REACT_APP_API}/product/${slug}`, {image},{
    headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
    },
  });
}
