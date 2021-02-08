import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  // getProductsByCount,
  fetchProductsByFilter,
} from "../functions/product";
// import SubSubHomeMenu from "../components/home/SubSubHomeMenu";
import ProductCard from "../components/cards/ProductCard";
import { getBrands } from "../functions/brand";
import { Slider, Checkbox } from "antd";

import _ from "lodash";
import Spinner from "../components/Spinner";

import queryString from "query-string";
import { useLocation } from "react-router-dom";

const Search = ({ props }) => {
  // const keyword = match.params.keyword;
  const { search } = useLocation();
  const { keyword } = queryString.parse(search);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [brands, setBrands] = useState([]);
  const [price, setPrice] = useState([0, 0]);
  const [ok, setOk] = useState(false);
  const [brandIds, setBrandIds] = useState([]);
  const [colors, setColors] = useState([]);

  const [sizes, setSizes] = useState([]);
  let dispatch = useDispatch();
  let { spin, searchResult } = useSelector((state) => ({ ...state }));
  // const { text } = search;

  const fetchProducts = () => {
    setLoading(true);

    fetchProductsByFilter(keyword).then((res) => {
      setProducts(res.data);

      const delayed = setTimeout(() => {
        setLoading(false);
      }, 800);
    });
  };

  const fetchMenuByProductsSearch = () => {
    fetchProductsByFilter(keyword).then((res) => {
      let color = [];
      let brand = [];
      let size = [];
      // console.log('data_son', data);
      for (let i = 0; i < res.data.length; i++) {
        color.push(res.data[i].color);
        brand.push(res.data[i].brand);
        size.push(res.data[i].size);
      }
      let uniqueColor = _.uniqWith(color, _.isEqual);
      let uniqueBrand = _.uniqWith(brand, _.isEqual);
      let uniqueSize = _.uniqWith(size, _.isEqual);
      // console.log('colorUnique', unique);
      setColors(uniqueColor);
      setBrands(uniqueBrand);
      setSizes(uniqueSize);
    });
  };

  const handleSlider = (value) => {
    const delayed = dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });

    // reset
    setBrandIds([]);
    setPrice(value);
    // setStar("");
    // setSub("");
    // setBrand("");
    // setColor("");
    // setShipping("");
    setTimeout(() => {
      setOk(!ok);
    }, 300);
    return () => clearTimeout(delayed);
  };

  const handleCheck = (e) => {
    // reset
    // dispatch({
    //   type: "SEARCH_QUERY",
    //   payload: { text: "" },
    // });
    setPrice([0, 0]);
    // setStar("");
    // setSub("");
    // setBrand("");
    // setColor("");
    // setShipping("");
    // console.log(e.target.value);
    let inTheState = [...brandIds];
    let justChecked = e.target.value;
    let foundInTheState = inTheState.indexOf(justChecked); // index or -1

    // indexOf method ?? if not found returns -1 else return index [1,2,3,4,5]
    if (foundInTheState === -1) {
      inTheState.push(justChecked);
    } else {
      // if found pull out one item from index
      inTheState.splice(foundInTheState, 1);
    }

    setBrandIds(inTheState);
    // console.log(inTheState);
    fetchProducts({ brand: inTheState });
  };

  useEffect(() => {
    fetchProducts();
    fetchMenuByProductsSearch();
  }, [keyword]);

  // useEffect(() => {
  //   console.log("ok to request");
  //   fetchProducts(keyword);
  // }, []);

  // useEffect(() => {
  //   // loadAllProducts();
  //   // fetch categories
  //   // getBrands().then((res) => setBrands(res.data));
  //   // fetch subcategories
  // }, []);

  return (
    <>
      <div className="tygh-content clearfix">
        <div className="container-fluid  cat-content-grid">
          <div className="container-fluid-row container-fluid-row-full-width ut2__subcategories">
            <div className="row-fluid ">
              {" "}
              <div className="span16 ut2-top">
                <div className="ut2-extra-block-title">
                  <h1 className="ty-mainbox-title">
                    <span>
                      Search Result for "<>{keyword}</>"
                    </span>
                  </h1>
                  <div id="breadcrumbs_167">
                    <div className="ty-breadcrumbs clearfix">
                      <Link to="/" className="ty-breadcrumbs__a">
                        <bdi>Home</bdi>
                      </Link>
                      <span className="ty-breadcrumbs__slash">/</span>
                      <div className="ty-breadcrumbs__a">
                        <bdi>Search</bdi>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {loading ? (
            <Spinner />
          ) : (
            <div className="container-fluid-row">
              <div className="row-fluid ">
                {" "}
                <div className="span9 main-content-grid  ">
                  <div className="ut2-cat-container">
                    <div className="cat-view-grid" id="category_products_11">
                      <div
                        className="ty-pagination-container cm-pagination-container"
                        id="pagination_contents"
                      >
                        <div>
                          <a
                            data-ca-scroll=".cm-pagination-container"
                            href="#"
                            data-ca-page
                            data-ca-target-id="pagination_contents"
                            className="hidden"
                          />
                        </div>
                        <div className="ty-sort-container">
                          <div
                            className="ut2-selected-product-filters cm-product-filters"
                            id="selected_filters_170"
                          >
                            {/*selected_filters_170*/}
                          </div>
                          <div className="ut2-sorting-wrap"></div>
                        </div>

                        <div className="grid-list">
                          {products.length > 0 ? (
                            <>
                              {" "}
                              <div id="categories_view_pagination_contents">
                                {products.map((product) => (
                                  <ProductCard product={product} />
                                ))}
                              </div>
                              <div
                                className="ut2-load-more-container"
                                id="load_more_categories_view_pagination_contents"
                              >
                                <span
                                  className="ut2-load-more"
                                  data-ut2-load-more-result-ids="categories_view_pagination_contents,load_more_categories_view_pagination_contents,pagination_block,pagination_block_bottom"
                                >
                                  <i className="loader" />
                                  Show another 24 products
                                </span>
                              </div>
                            </>
                          ) : (
                            <>No Product Found</>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="span7 side-grid ut2-bottom">
                  <div className="ty-sidebox ut2-filters hidden-phone">
                    <div
                      className="ty-sidebox__title cm-combination "
                      id="sw_sidebox_177"
                    >
                      <span className="ty-sidebox__title-wrapper hidden-phone">
                        Product filters
                      </span>
                      <span className="ty-sidebox__title-wrapper visible-phone">
                        Product filters
                      </span>
                      <span className="ty-sidebox__title-toggle visible-phone">
                        <i className="ty-sidebox__icon-open ty-icon-down-open" />
                        <i className="ty-sidebox__icon-hide ty-icon-up-open" />
                      </span>
                    </div>
                    <div className="ty-sidebox__body" id="sidebox_177">
                      {/* Inline script moved to the bottom of the page */}
                      <div className="cm-product-filters">
                        <div className="ty-product-filters__wrapper">
                          <div className="ty-product-filters__block">
                            <div className="ty-product-filters__switch cm-combination-filter_177_1 open cm-save-state cm-ss-reverse">
                              <span className="ty-product-filters__title">
                                Brand
                              </span>
                              <i className="ty-product-filters__switch-down ty-icon-down-open" />
                              <i className="ty-product-filters__switch-right ty-icon-up-open" />
                            </div>
                            <ul
                              className="ty-product-filters "
                              id="content_177_1"
                            >
                              <li className="ty-product-filters__item-more">
                                <ul
                                  id="ranges_177_1"
                                  style={{ maxHeight: "310px" }}
                                  className="ty-product-filters__variants cm-filter-table"
                                  data-ca-input-id="elm_search_177_1"
                                  data-ca-clear-id="elm_search_clear_177_1"
                                  data-ca-empty-id="elm_search_empty_177_1"
                                >
                                  {brands.map((c) => (
                                    <li className="cm-product-filters-checkbox-container ty-product-filters__group">
                                      <Checkbox name="brand">{c}</Checkbox>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                              <p
                                id="elm_search_empty_177_1"
                                className="ty-product-filters__no-items-found hidden"
                              >
                                No items found matching the search criteria
                              </p>
                            </ul>
                          </div>
                          {/* Inline script moved to the bottom of the page */}
                          <div className="ty-product-filters__block">
                            <div
                              id="sw_content_177_2"
                              className="ty-product-filters__switch cm-combination-filter_177_2 open cm-save-state cm-ss-reverse"
                            >
                              <span className="ty-product-filters__title">
                                Color
                              </span>
                              <i className="ty-product-filters__switch-down ty-icon-down-open" />
                              <i className="ty-product-filters__switch-right ty-icon-up-open" />
                            </div>
                            <ul
                              className="ty-product-filters "
                              id="content_177_2"
                            >
                              <li className="cm-product-filters-checkbox-container ty-product-filters__group cp_inline_block ">
                                <label>
                                  <input
                                    style={{ display: "none" }}
                                    className="cm-product-filters-checkbox"
                                    type="checkbox"
                                    name="product_filters[2]"
                                    data-ca-filter-id={2}
                                    defaultValue={25}
                                  />
                                  <div
                                    title="Black"
                                    className="cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                    style={{ background: "#000000" }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="ci_color_checked"
                                      width={1024}
                                      height={1024}
                                      viewBox="0 0 1024 1024"
                                    >
                                      <path d="M954.9 323.4q0 22.9-16 38.9l-491.4 491.4q-16 16-38.9 16t-38.9-16l-284.6-284.6q-16-16-16-38.9t16-38.9l77.7-77.7q16-16 38.9-16t38.9 16l168 168.6 374.9-375.4q16-16 38.9-16t38.9 16l77.7 77.7q16 16 16 38.9z" />
                                    </svg>
                                  </div>
                                </label>
                              </li>
                              <li className="cm-product-filters-checkbox-container ty-product-filters__group cp_inline_block ">
                                <label>
                                  <input
                                    style={{ display: "none" }}
                                    className="cm-product-filters-checkbox"
                                    type="checkbox"
                                    name="product_filters[2]"
                                    data-ca-filter-id={2}
                                    defaultValue={14}
                                    id="elm_checkbox_177_2_14"
                                  />
                                  <div
                                    title="White"
                                    className="cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                    style={{ background: "#ffffff" }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="ci_color_checked"
                                      width={1024}
                                      height={1024}
                                      viewBox="0 0 1024 1024"
                                    >
                                      <path d="M954.9 323.4q0 22.9-16 38.9l-491.4 491.4q-16 16-38.9 16t-38.9-16l-284.6-284.6q-16-16-16-38.9t16-38.9l77.7-77.7q16-16 38.9-16t38.9 16l168 168.6 374.9-375.4q16-16 38.9-16t38.9 16l77.7 77.7q16 16 16 38.9z" />
                                    </svg>
                                  </div>
                                </label>
                              </li>
                              <li className="cm-product-filters-checkbox-container ty-product-filters__group cp_inline_block ">
                                <label>
                                  <input
                                    style={{ display: "none" }}
                                    className="cm-product-filters-checkbox"
                                    type="checkbox"
                                    name="product_filters[2]"
                                    data-ca-filter-id={2}
                                    defaultValue={7}
                                    id="elm_checkbox_177_2_7"
                                  />
                                  <div
                                    title="Red"
                                    className="cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                    style={{ background: "#ff0000" }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="ci_color_checked"
                                      width={1024}
                                      height={1024}
                                      viewBox="0 0 1024 1024"
                                    >
                                      <path d="M954.9 323.4q0 22.9-16 38.9l-491.4 491.4q-16 16-38.9 16t-38.9-16l-284.6-284.6q-16-16-16-38.9t16-38.9l77.7-77.7q16-16 38.9-16t38.9 16l168 168.6 374.9-375.4q16-16 38.9-16t38.9 16l77.7 77.7q16 16 16 38.9z" />
                                    </svg>
                                  </div>
                                </label>
                              </li>
                              <li className="cm-product-filters-checkbox-container ty-product-filters__group cp_inline_block ">
                                <label>
                                  <input
                                    style={{ display: "none" }}
                                    className="cm-product-filters-checkbox"
                                    type="checkbox"
                                    name="product_filters[2]"
                                    data-ca-filter-id={2}
                                    defaultValue={22}
                                  />
                                  <div
                                    title="Blue"
                                    className="cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                    style={{ background: "#0000ff" }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="ci_color_checked"
                                      width={1024}
                                      height={1024}
                                      viewBox="0 0 1024 1024"
                                    >
                                      <path d="M954.9 323.4q0 22.9-16 38.9l-491.4 491.4q-16 16-38.9 16t-38.9-16l-284.6-284.6q-16-16-16-38.9t16-38.9l77.7-77.7q16-16 38.9-16t38.9 16l168 168.6 374.9-375.4q16-16 38.9-16t38.9 16l77.7 77.7q16 16 16 38.9z" />
                                    </svg>
                                  </div>
                                </label>
                              </li>
                              <li className="cm-product-filters-checkbox-container ty-product-filters__group cp_inline_block ">
                                <label>
                                  <input
                                    style={{ display: "none" }}
                                    className="cm-product-filters-checkbox"
                                    type="checkbox"
                                    name="product_filters[2]"
                                    data-ca-filter-id={2}
                                    defaultValue={12}
                                  />
                                  <div
                                    title="Pink"
                                    className="cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                    style={{ background: "#ff00ff" }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="ci_color_checked"
                                      width={1024}
                                      height={1024}
                                      viewBox="0 0 1024 1024"
                                    >
                                      <path d="M954.9 323.4q0 22.9-16 38.9l-491.4 491.4q-16 16-38.9 16t-38.9-16l-284.6-284.6q-16-16-16-38.9t16-38.9l77.7-77.7q16-16 38.9-16t38.9 16l168 168.6 374.9-375.4q16-16 38.9-16t38.9 16l77.7 77.7q16 16 16 38.9z" />
                                    </svg>
                                  </div>
                                </label>
                              </li>
                              <li className="cm-product-filters-checkbox-container ty-product-filters__group cp_inline_block ">
                                <label>
                                  <input
                                    style={{ display: "none" }}
                                    className="cm-product-filters-checkbox"
                                    type="checkbox"
                                    name="product_filters[2]"
                                    data-ca-filter-id={2}
                                    defaultValue={18}
                                  />
                                  <div
                                    title="Purple"
                                    className="cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                    style={{ background: "#9900ff" }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="ci_color_checked"
                                      width={1024}
                                      height={1024}
                                      viewBox="0 0 1024 1024"
                                    >
                                      <path d="M954.9 323.4q0 22.9-16 38.9l-491.4 491.4q-16 16-38.9 16t-38.9-16l-284.6-284.6q-16-16-16-38.9t16-38.9l77.7-77.7q16-16 38.9-16t38.9 16l168 168.6 374.9-375.4q16-16 38.9-16t38.9 16l77.7 77.7q16 16 16 38.9z" />
                                    </svg>
                                  </div>
                                </label>
                              </li>
                              <li className="cm-product-filters-checkbox-container ty-product-filters__group cp_inline_block ">
                                <label>
                                  <input
                                    style={{ display: "none" }}
                                    className="cm-product-filters-checkbox"
                                    type="checkbox"
                                    name="product_filters[2]"
                                    data-ca-filter-id={2}
                                    defaultValue={20}
                                    id="elm_checkbox_177_2_20"
                                  />
                                  <div
                                    title="Green"
                                    className="cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                    style={{ background: "#38761d" }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="ci_color_checked"
                                      width={1024}
                                      height={1024}
                                      viewBox="0 0 1024 1024"
                                    >
                                      <path d="M954.9 323.4q0 22.9-16 38.9l-491.4 491.4q-16 16-38.9 16t-38.9-16l-284.6-284.6q-16-16-16-38.9t16-38.9l77.7-77.7q16-16 38.9-16t38.9 16l168 168.6 374.9-375.4q16-16 38.9-16t38.9 16l77.7 77.7q16 16 16 38.9z" />
                                    </svg>
                                  </div>
                                </label>
                              </li>
                              <li className="cm-product-filters-checkbox-container ty-product-filters__group cp_inline_block ">
                                <label>
                                  <input
                                    style={{ display: "none" }}
                                    className="cm-product-filters-checkbox"
                                    type="checkbox"
                                    name="product_filters[2]"
                                    data-ca-filter-id={2}
                                    defaultValue={21}
                                    id="elm_checkbox_177_2_21"
                                  />
                                  <div
                                    title="Yellow"
                                    className="cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                    style={{ background: "#ffff00" }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="ci_color_checked"
                                      width={1024}
                                      height={1024}
                                      viewBox="0 0 1024 1024"
                                    >
                                      <path d="M954.9 323.4q0 22.9-16 38.9l-491.4 491.4q-16 16-38.9 16t-38.9-16l-284.6-284.6q-16-16-16-38.9t16-38.9l77.7-77.7q16-16 38.9-16t38.9 16l168 168.6 374.9-375.4q16-16 38.9-16t38.9 16l77.7 77.7q16 16 16 38.9z" />
                                    </svg>
                                  </div>
                                </label>
                              </li>
                              <li className="cm-product-filters-checkbox-container ty-product-filters__group cp_inline_block ">
                                <label>
                                  <input
                                    style={{ display: "none" }}
                                    className="cm-product-filters-checkbox"
                                    type="checkbox"
                                    name="product_filters[2]"
                                    data-ca-filter-id={2}
                                    defaultValue={17}
                                    id="elm_checkbox_177_2_17"
                                  />
                                  <div
                                    title="Neutral"
                                    className="cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                    style={{ background: "#e3b28b" }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="ci_color_checked"
                                      width={1024}
                                      height={1024}
                                      viewBox="0 0 1024 1024"
                                    >
                                      <path d="M954.9 323.4q0 22.9-16 38.9l-491.4 491.4q-16 16-38.9 16t-38.9-16l-284.6-284.6q-16-16-16-38.9t16-38.9l77.7-77.7q16-16 38.9-16t38.9 16l168 168.6 374.9-375.4q16-16 38.9-16t38.9 16l77.7 77.7q16 16 16 38.9z" />
                                    </svg>
                                  </div>
                                </label>
                              </li>
                              <li className="cm-product-filters-checkbox-container ty-product-filters__group cp_inline_block ">
                                <label>
                                  <input
                                    style={{ display: "none" }}
                                    className="cm-product-filters-checkbox"
                                    type="checkbox"
                                    name="product_filters[2]"
                                    data-ca-filter-id={2}
                                    defaultValue={6}
                                    id="elm_checkbox_177_2_6"
                                  />
                                  <div
                                    title="Orange"
                                    className="cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                    style={{ background: "#ff9900" }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="ci_color_checked"
                                      width={1024}
                                      height={1024}
                                      viewBox="0 0 1024 1024"
                                    >
                                      <path d="M954.9 323.4q0 22.9-16 38.9l-491.4 491.4q-16 16-38.9 16t-38.9-16l-284.6-284.6q-16-16-16-38.9t16-38.9l77.7-77.7q16-16 38.9-16t38.9 16l168 168.6 374.9-375.4q16-16 38.9-16t38.9 16l77.7 77.7q16 16 16 38.9z" />
                                    </svg>
                                  </div>
                                </label>
                              </li>
                              <li className="cm-product-filters-checkbox-container ty-product-filters__group cp_inline_block ">
                                <label>
                                  <input
                                    style={{ display: "none" }}
                                    className="cm-product-filters-checkbox"
                                    type="checkbox"
                                    name="product_filters[2]"
                                    data-ca-filter-id={2}
                                    defaultValue={26}
                                    id="elm_checkbox_177_2_26"
                                  />
                                  <div
                                    title="Brown"
                                    className="cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                    style={{ background: "#804c2f" }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="ci_color_checked"
                                      width={1024}
                                      height={1024}
                                      viewBox="0 0 1024 1024"
                                    >
                                      <path d="M954.9 323.4q0 22.9-16 38.9l-491.4 491.4q-16 16-38.9 16t-38.9-16l-284.6-284.6q-16-16-16-38.9t16-38.9l77.7-77.7q16-16 38.9-16t38.9 16l168 168.6 374.9-375.4q16-16 38.9-16t38.9 16l77.7 77.7q16 16 16 38.9z" />
                                    </svg>
                                  </div>
                                </label>
                              </li>
                              <li className="cm-product-filters-checkbox-container ty-product-filters__group cp_inline_block ">
                                <label>
                                  <input
                                    style={{ display: "none" }}
                                    className="cm-product-filters-checkbox"
                                    type="checkbox"
                                    name="product_filters[2]"
                                    data-ca-filter-id={2}
                                    defaultValue={15}
                                    id="elm_checkbox_177_2_15"
                                  />
                                  <div
                                    title="Silver"
                                    className="cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                    style={{ background: "#d9d9d9" }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="ci_color_checked"
                                      width={1024}
                                      height={1024}
                                      viewBox="0 0 1024 1024"
                                    >
                                      <path d="M954.9 323.4q0 22.9-16 38.9l-491.4 491.4q-16 16-38.9 16t-38.9-16l-284.6-284.6q-16-16-16-38.9t16-38.9l77.7-77.7q16-16 38.9-16t38.9 16l168 168.6 374.9-375.4q16-16 38.9-16t38.9 16l77.7 77.7q16 16 16 38.9z" />
                                    </svg>
                                  </div>
                                </label>
                              </li>
                              <li className="cm-product-filters-checkbox-container ty-product-filters__group cp_inline_block ">
                                <label>
                                  <input
                                    style={{ display: "none" }}
                                    className="cm-product-filters-checkbox"
                                    type="checkbox"
                                    name="product_filters[2]"
                                    data-ca-filter-id={2}
                                    defaultValue={28}
                                    id="elm_checkbox_177_2_28"
                                  />
                                  <div
                                    title="Gray"
                                    className="cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                    style={{ background: "#434343" }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="ci_color_checked"
                                      width={1024}
                                      height={1024}
                                      viewBox="0 0 1024 1024"
                                    >
                                      <path d="M954.9 323.4q0 22.9-16 38.9l-491.4 491.4q-16 16-38.9 16t-38.9-16l-284.6-284.6q-16-16-16-38.9t16-38.9l77.7-77.7q16-16 38.9-16t38.9 16l168 168.6 374.9-375.4q16-16 38.9-16t38.9 16l77.7 77.7q16 16 16 38.9z" />
                                    </svg>
                                  </div>
                                </label>
                              </li>
                              <li className="cm-product-filters-checkbox-container ty-product-filters__group cp_inline_block ">
                                <label>
                                  <input
                                    style={{ display: "none" }}
                                    className="cm-product-filters-checkbox"
                                    type="checkbox"
                                    name="product_filters[2]"
                                    data-ca-filter-id={2}
                                    defaultValue={31}
                                    id="elm_checkbox_177_2_31"
                                  />
                                  <div
                                    title="Clear"
                                    className="cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                    style={{ background: "#ffffff" }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="ci_color_checked"
                                      width={1024}
                                      height={1024}
                                      viewBox="0 0 1024 1024"
                                    >
                                      <path d="M954.9 323.4q0 22.9-16 38.9l-491.4 491.4q-16 16-38.9 16t-38.9-16l-284.6-284.6q-16-16-16-38.9t16-38.9l77.7-77.7q16-16 38.9-16t38.9 16l168 168.6 374.9-375.4q16-16 38.9-16t38.9 16l77.7 77.7q16 16 16 38.9z" />
                                    </svg>
                                  </div>
                                </label>
                              </li>
                              <li className="cm-product-filters-checkbox-container ty-product-filters__group cp_inline_block ">
                                <label>
                                  <input
                                    style={{ display: "none" }}
                                    className="cm-product-filters-checkbox"
                                    type="checkbox"
                                    name="product_filters[2]"
                                    data-ca-filter-id={2}
                                    defaultValue={34}
                                    id="elm_checkbox_177_2_34"
                                  />
                                  <div
                                    title="Gold"
                                    className="cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                    style={{ background: "#f1c232" }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="ci_color_checked"
                                      width={1024}
                                      height={1024}
                                      viewBox="0 0 1024 1024"
                                    >
                                      <path d="M954.9 323.4q0 22.9-16 38.9l-491.4 491.4q-16 16-38.9 16t-38.9-16l-284.6-284.6q-16-16-16-38.9t16-38.9l77.7-77.7q16-16 38.9-16t38.9 16l168 168.6 374.9-375.4q16-16 38.9-16t38.9 16l77.7 77.7q16 16 16 38.9z" />
                                    </svg>
                                  </div>
                                </label>
                              </li>
                              <p className="ty-product-filters__no-items-found hidden">
                                No items found matching the search criteria
                              </p>
                            </ul>
                          </div>

                          <div className="ty-product-filters__block">
                            <div className="ty-product-filters__switch cm-combination-filter_177_4 open cm-save-state cm-ss-reverse">
                              <span className="ty-product-filters__title">
                                Size
                              </span>
                              <i className="ty-product-filters__switch-down ty-icon-down-open" />
                              <i className="ty-product-filters__switch-right ty-icon-up-open" />
                            </div>
                            <ul className="ty-product-filters ">
                              <li className="ty-product-filters__item-more">
                                <ul
                                  style={{ maxHeight: "310px" }}
                                  className="ty-product-filters__variants cm-filter-table"
                                >
                                  <li className="cm-product-filters-checkbox-container ty-product-filters__group">
                                    <input
                                      className="cm-product-filters-checkbox"
                                      type="checkbox"
                                      name="product_filters[4]"
                                      data-ca-filter-id={4}
                                      defaultValue={11}
                                    />
                                    <label>
                                      <span>0.5oz</span>
                                    </label>
                                  </li>
                                </ul>
                              </li>
                              <p className="ty-product-filters__no-items-found hidden">
                                No items found matching the search criteria
                              </p>
                            </ul>
                          </div>
                          {/* Inline script moved to the bottom of the page */}

                          <div className="ty-product-filters__block">
                            <div
                              id="sw_content_177_9"
                              className="ty-product-filters__switch cm-combination-filter_177_9 open cm-save-state cm-ss-reverse"
                            >
                              <span className="ty-product-filters__title">
                                <i class="fa fa-dollar" /> Price
                              </span>
                              <i className="ty-product-filters__switch-down ty-icon-down-open" />
                              <i className="ty-product-filters__switch-right ty-icon-up-open" />
                            </div>

                            <div className="cm-product-filters-checkbox-container">
                              <Slider
                                className="ml-4 mr-4"
                                tipFormatter={(v) => `$${v}`}
                                range
                                value={price}
                                onChange={handleSlider}
                                max="200"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
