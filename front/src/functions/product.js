import axios from 'axios';

export const getProducts = async () =>
  await axios.get(`${process.env.REACT_APP_API}/products`);

export const getMenuByCategory = (cslug) => {
  return fetch(`${process.env.REACT_APP_API}/products/category/menu/${cslug}`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const createProduct = async (product, token) =>
  await axios.post(`${process.env.REACT_APP_API}/product`, product, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

export const getProductBySubSub = (slug) => {
  return fetch(`${process.env.REACT_APP_API}/products/subSub/${slug}`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// export const getDetailProduct = async (slug) =>{
//   return await axios.get(`${process.env.REACT_APP_API}/product/${slug}`);
// }

export const getDetailProduct = (slug) => {
  // console.log('slug123', slug);
  return fetch(`${process.env.REACT_APP_API}/product/${slug}`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const removeProduct = async (slug, token, image) => {
  // console.log("token",token);
  await axios.post(
    `${process.env.REACT_APP_API}/product/${slug}`,
    { image },
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const fetchProductsByFilter = async (arg) =>
  await axios.post(`${process.env.REACT_APP_API}/search/filters`, arg);

export const getRecentlyView = async (recentlyProduct, pslug1) =>
  await axios.post(`${process.env.REACT_APP_API}/products/recentlyProduct`, {
    recentlyProduct,
    pslug1,
  });

export const getFilteredProducts = (skip, limit, filters = {}) => {
  const data = {
    limit,
    skip,
    filters,
  };
  return fetch(`${process.env.REACT_APP_API}/products/by/search`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getProductByCategory = (skip, limit, cslug) => {
  const data = {
    limit,
    skip,
  };
  return fetch(`${process.env.REACT_APP_API}/products/category/${cslug}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
