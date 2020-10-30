
import { Link } from "react-router-dom";
import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    // getProductsByCount,
    fetchProductsByFilter,
  } from "../functions/product";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [price, setPrice] = useState([0, 0]);
    const [ok, setOk] = useState(false);
    const [categories, setCategories] = useState([]);
    const [categoryIds, setCategoryIds] = useState([]);
    const [star, setStar] = useState("");
    const [subs, setSubs] = useState([]);
    const [sub, setSub] = useState("");

    let dispatch = useDispatch();
    let { search } = useSelector((state) => ({ ...state }));
    const { text } = search;


      const fetchProducts = (arg) => {
        fetchProductsByFilter(arg).then((res) => {
          setProducts(res.data);
        });
      };
    

      useEffect(() => {
        const delayed = setTimeout(() => {
          fetchProducts({ query: text });
          if (!text) {
            // loadAllProducts();
          }
        }, 300);
        return () => clearTimeout(delayed);
      }, [text]);
  return (
   <>
  

   </>
  );
};

export default Shop;
