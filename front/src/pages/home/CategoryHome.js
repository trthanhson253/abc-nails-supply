import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  getProductByCategory,
  getMenuByCategory,
  getFilteredProducts,
} from "../../functions/product";
import _ from "lodash";
import ProductCard from "../../components/cards/ProductCard";
import renderHTML from "react-render-html";
import { Menu, Slider, Checkbox, message } from "antd";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
const CategoryHome = (props) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [cate, setCate] = useState([]);
  const [subCates, setSubCates] = useState([]);
  const [colors, setColors] = useState([]);
  const [brands, setBrands] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [limit, setLimit] = useState(4);
  const [skip, setSkip] = useState(0);

  const [soluong, setSoluong] = useState(0);
  const [checkedBrand, setCheckedBrand] = useState([]);
  const [checkedSize, setCheckedSize] = useState([]);
  const [flag, setFlag] = useState(false);
  const [myFilters, setMyFilters] = useState({
    filters: { brand: [], size: [] },
  });

  const loadProductByCategory = (cslug) => {
    dispatch({
      type: "SET_SPIN",
      payload: true,
    });
    getProductByCategory(skip, limit, cslug).then((data) => {
      // console.log("data", data);
      // console.log("products", data.products);

      // console.log('subsub', data.subSub[0]);
      setProducts(data.products);
      setCate(data.category[0]);
      //   setSubSub(data.subSub[0]);
      //   setCate(data.subSub[0].category);
      //   setSub(data.subSub[0].sub);

      setSoluong(data.size);
      setSkip(0);
      setFlag(false);
      const delayed = setTimeout(() => {
        dispatch({
          type: "SET_SPIN",
          payload: false,
        });
      }, 1000);
    });
  };

  const loadMenuByCategory = (cslug) => {
    getMenuByCategory(cslug).then((data) => {
      let color = [];
      let brand = [];
      let size = [];
      console.log("data_son", data);
      for (let i = 0; i < data.products.length; i++) {
        color.push(data.products[i].color);
        brand.push(data.products[i].brand);
        size.push(data.products[i].size);
      }
      let uniqueColor = _.uniqWith(color, _.isEqual);
      let uniqueBrand = _.uniqWith(brand, _.isEqual);
      let uniqueSize = _.uniqWith(size, _.isEqual);
      // console.log('colorUnique', unique);
      setColors(uniqueColor);
      setBrands(uniqueBrand);
      setSizes(uniqueSize);
      setSubCates(data.subs);
    });
  };

  const loadMore = () => {
    let toSkip = skip + limit;
    // console.log(newFilters);
    getProductByCategory(toSkip, limit, props.match.params.cslug).then(
      (data) => {
        if (data.error) {
          message.error("Cannot get data");
        } else {
          setProducts([...products, ...data.products]);
          setSoluong(data.size);
          setSkip(toSkip);
          setFlag(false);
        }
      }
    );
  };

  const loadMore1 = () => {
    let toSkip = skip + limit;
    // console.log(newFilters);
    getFilteredProducts(toSkip, limit, myFilters.filters).then((data) => {
      if (data.error) {
        message.error("Cannot get data");
      } else {
        setProducts([...products, ...data.data]);
        setSoluong(data.size);
        setSkip(toSkip);
        setFlag(true);
      }
    });
  };

  const handleChangeBrand = (c) => () => {
    const currentBrandName = checkedBrand.indexOf(c);
    const newCheckedBrandName = [...checkedBrand];

    if (currentBrandName === -1) {
      newCheckedBrandName.push(c);
    } else {
      newCheckedBrandName.splice(currentBrandName, 1);
    }

    setCheckedBrand(newCheckedBrandName);
    handleFilters(newCheckedBrandName, "brand");
  };

  const handleChangeSize = (c) => () => {
    const currentSize = checkedSize.indexOf(c);
    const newCheckedSize = [...checkedSize];

    if (currentSize === -1) {
      newCheckedSize.push(c);
    } else {
      newCheckedSize.splice(currentSize, 1);
    }
    console.log(newCheckedSize);
    setCheckedSize(newCheckedSize);
    handleFilters(newCheckedSize, "size");
  };

  const handleFilters = (filters, filterBy) => {
    // console.log('SHOP', filters, filterBy);
    const newFilters = { ...myFilters };
    newFilters.filters[filterBy] = filters;
    loadFilteredResults(myFilters.filters);
    setMyFilters(newFilters);
  };
  const loadFilteredResults = (newFilters) => {
    // console.log(newFilters);
    getFilteredProducts(skip, limit, newFilters).then((data) => {
      if (data.error) {
        message.error("Cannot Find Products");
      } else {
        setProducts(data.data);
        setSoluong(data.size);
        setSkip(0);
        setFlag(true);
        // CODE HERE
        let color = [];
        let brand = [];
        let size = [];
        for (let i = 0; i < data.size; i++) {
          color.push(data.data[i].color);
          brand.push(data.data[i].brand);
          size.push(data.data[i].size);
        }

        let uniqueColor = _.uniqWith(color, _.isEqual);
        let uniqueBrand = _.uniqWith(brand, _.isEqual);
        let uniqueSize = _.uniqWith(size, _.isEqual);
        // console.log('colorUnique', unique);
        if (newFilters.brand.length && newFilters.size.length == 0) {
          setSizes(uniqueSize);
        } else if (newFilters.brand.length == 0 && newFilters.size.length) {
          setBrands(uniqueBrand);
        } else if (
          newFilters.brand.length == 0 &&
          newFilters.size.length == 0
        ) {
          resetMenu();
        }
      }
    });
  };

  const resetMenu = () => {
    const cslug = props.match.params.cslug;
    loadMenuByCategory(cslug);
    setFlag(false);
  };
  useEffect(() => {
    const cslug = props.match.params.cslug;

    loadProductByCategory(cslug);
    loadMenuByCategory(cslug);
  }, []);

  return (
    <>
      <Helmet>
        <title>{cate.name}</title>
      </Helmet>
      {JSON.stringify(myFilters)}
      <div className="tygh-content clearfix">
        <div className="container-fluid  cat-content-grid">
          <div className="container-fluid-row container-fluid-row-full-width ut2__subcategories">
            <div className="row-fluid ">
              {" "}
              <div className="span16 ut2-top">
                <div className="ut2-extra-block-title">
                  <h1 className="ty-mainbox-title">
                    <span>Category::{cate.name}</span>
                  </h1>
                  <div id="breadcrumbs_167">
                    <div className="ty-breadcrumbs clearfix">
                      <Link to="/" className="ty-breadcrumbs__a">
                        <bdi>Home</bdi>
                      </Link>
                      <span className="ty-breadcrumbs__slash">/</span>
                      <div className="ty-breadcrumbs__current">
                        <bdi>{cate.name}</bdi>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid-row">
            <div className="row-fluid ">
              {" "}
              <div className="span9 main-content-grid  ">
                {cate.description ? (
                  <>
                    <div
                      style={{
                        borderStyle: "solid",
                        padding: "15px",
                        borderColor: "#F0F0F0",
                      }}
                    >
                      {renderHTML(cate.description)}
                    </div>{" "}
                    <hr />
                  </>
                ) : (
                  <hr></hr>
                )}
                <div className="ut2-cat-container">
                  <div className="cat-view-grid" id="category_products_11">
                    <div
                      className="ty-pagination-container cm-pagination-container"
                      id="pagination_contents"
                    >
                      <div></div>
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
                        <div id="categories_view_pagination_contents">
                          {products.map((product) => (
                            <ProductCard product={product} />
                          ))}
                        </div>
                        {flag == false && (
                          <div
                            className="ut2-load-more-container"
                            id="load_more_categories_view_pagination_contents"
                          >
                            {soluong > 0 && soluong >= limit && (
                              <span
                                className="ut2-load-more"
                                data-ut2-load-more-result-ids="categories_view_pagination_contents,load_more_categories_view_pagination_contents,pagination_block,pagination_block_bottom"
                                onClick={loadMore}
                              >
                                Show another products
                              </span>
                            )}
                          </div>
                        )}

                        {flag == true && (
                          <div
                            className="ut2-load-more-container"
                            id="load_more_categories_view_pagination_contents"
                          >
                            {soluong > 0 && soluong >= limit && (
                              <span
                                className="ut2-load-more"
                                data-ut2-load-more-result-ids="categories_view_pagination_contents,load_more_categories_view_pagination_contents,pagination_block,pagination_block_bottom"
                                onClick={loadMore1}
                              >
                                Show another products 1
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    {/*category_products_11*/}
                  </div>
                </div>
              </div>
              {/*START MENU*/}
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
                    <div
                      className="cm-product-filters"
                      data-ca-target-id="product_filters_*,products_search_*,category_products_*,product_features_*,breadcrumbs_*,currencies_*,languages_*,selected_filters_*"
                      data-ca-base-url="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/"
                      id="product_filters_177"
                    >
                      <div className="ty-product-filters__wrapper">
                        <div className="ty-product-filters__block">
                          <div
                            id="sw_content_177_1"
                            className="ty-product-filters__switch cm-combination-filter_177_1 open cm-save-state cm-ss-reverse"
                          >
                            <span className="ty-product-filters__title">
                              Sub-Category
                            </span>
                            <i className="ty-product-filters__switch-down ty-icon-down-open" />
                            <i className="ty-product-filters__switch-right ty-icon-up-open" />
                          </div>
                          <ul className="ty-product-filters ">
                            <li className="ty-product-filters__item-more">
                              <ul style={{ maxHeight: "310px" }}>
                                <li className="cm-product-filters-checkbox-container ty-product-filters__group">
                                  {subCates.map((c) => (
                                    <li className="cm-product-filters-checkbox-container ty-product-filters__group">
                                      <Checkbox
                                        // onChange={handleChangeBrand(c)}
                                        name="subCates"
                                        // value={checkedBrand.indexOf(c === -1)}
                                      >
                                        {c.name}
                                      </Checkbox>
                                    </li>
                                  ))}
                                </li>
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
                        <div className="ty-product-filters__block">
                          <div
                            id="sw_content_177_1"
                            className="ty-product-filters__switch cm-combination-filter_177_1 open cm-save-state cm-ss-reverse"
                          >
                            <span className="ty-product-filters__title">
                              Brand
                            </span>
                            <i className="ty-product-filters__switch-down ty-icon-down-open" />
                            <i className="ty-product-filters__switch-right ty-icon-up-open" />
                          </div>
                          <ul className="ty-product-filters ">
                            <li className="ty-product-filters__item-more">
                              <ul style={{ maxHeight: "310px" }}>
                                <li className="cm-product-filters-checkbox-container ty-product-filters__group">
                                  {brands.map((c) => (
                                    <li className="cm-product-filters-checkbox-container ty-product-filters__group">
                                      <Checkbox
                                        onChange={handleChangeBrand(c)}
                                        name="brand"
                                        value={checkedBrand.indexOf(c === -1)}
                                      >
                                        {c}
                                      </Checkbox>
                                    </li>
                                  ))}
                                </li>
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
                                  id="elm_checkbox_177_2_25"
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
                                  id="elm_checkbox_177_2_22"
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
                                  id="elm_checkbox_177_2_12"
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
                                  id="elm_checkbox_177_2_18"
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
                            <p
                              id="elm_search_empty_177_2"
                              className="ty-product-filters__no-items-found hidden"
                            >
                              No items found matching the search criteria
                            </p>
                          </ul>
                        </div>

                        <div className="ty-product-filters__block">
                          <div
                            id="sw_content_177_4"
                            className="ty-product-filters__switch cm-combination-filter_177_4 open cm-save-state cm-ss-reverse"
                          >
                            <span className="ty-product-filters__title">
                              Size
                            </span>
                            <i className="ty-product-filters__switch-down ty-icon-down-open" />
                            <i className="ty-product-filters__switch-right ty-icon-up-open" />
                          </div>
                          <ul
                            className="ty-product-filters "
                            id="content_177_4"
                          >
                            <li className="ty-product-filters__item-more">
                              <ul
                                id="ranges_177_4"
                                style={{ maxHeight: "310px" }}
                                className="ty-product-filters__variants cm-filter-table"
                                data-ca-input-id="elm_search_177_4"
                                data-ca-clear-id="elm_search_clear_177_4"
                                data-ca-empty-id="elm_search_empty_177_4"
                              >
                                {sizes.map((c) => (
                                  <li className="cm-product-filters-checkbox-container ty-product-filters__group">
                                    <Checkbox
                                      onChange={handleChangeSize(c)}
                                      name="size"
                                      value={checkedSize.indexOf(c === -1)}
                                    >
                                      {c}
                                    </Checkbox>
                                  </li>
                                ))}
                              </ul>
                            </li>
                            <p
                              id="elm_search_empty_177_4"
                              className="ty-product-filters__no-items-found hidden"
                            >
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
                          {/* Inline script moved to the bottom of the page */}
                          <div
                            id="content_177_9"
                            className="cm-product-filters-checkbox-container"
                          ></div>
                        </div>
                        {/* Inline script moved to the bottom of the page */}
                      </div>
                      {/*product_filters_177*/}
                    </div>
                  </div>
                </div>
              </div>
              {/*END MENU*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryHome;
