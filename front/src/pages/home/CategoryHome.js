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
import Spinner from "../../components/Spinner";
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
  const [loading, setLoading] = useState(false);
  const [soluong, setSoluong] = useState(0);
  const [checkedBrand, setCheckedBrand] = useState([]);
  const [checkedSize, setCheckedSize] = useState([]);
  const [flag, setFlag] = useState(false);
  const [myFilters, setMyFilters] = useState({
    filters: { brand: [], size: [] },
  });
  const [blue, setBlue] = useState(false);
  const [green, setGreen] = useState(false);
  const [black, setBlack] = useState(false);
  const [white, setWhite] = useState(false);
  const [red, setRed] = useState(false);
  const [pink, setPink] = useState(false);
  const [purple, setPurple] = useState(false);
  const [yellow, setYellow] = useState(false);
  const [orange, setOrange] = useState(false);
  const [brown, setBrown] = useState(false);

  const [silver, setSilver] = useState(false);
  const [grey, setGrey] = useState(false);
  const [clear, setClear] = useState(false);
  const [gold, setGold] = useState(false);
  const loadProductByCategory = (cslug) => {
    setLoading(true);

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
        setLoading(false);
      }, 800);
    });
  };

  const loadMenuByCategory = (cslug) => {
    getMenuByCategory(cslug).then((data) => {
      let color = [];
      let brand = [];
      let size = [];
      // console.log("data_son", data);
      for (let i = 0; i < data.products.length; i++) {
        color.push(data.products[i].color);
        brand.push(data.products[i].brand);
        size.push(data.products[i].size);
      }
      let uniqueColor = _.uniqWith(color, _.isEqual);
      let uniqueBrand = _.uniqWith(brand, _.isEqual);
      let uniqueSize = _.uniqWith(size, _.isEqual);
      // console.log("colorUnique", uniqueColor);

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
    // console.log(newCheckedSize);
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

  const changeColor = (x) => {
    if (x == 1) {
      setBlue(!blue);
    } else if (x == 2) {
      setGreen(!green);
    } else if (x == 3) {
      setBlack(!black);
    } else if (x == 4) {
      setWhite(!white);
    } else if (x == 5) {
      setRed(!red);
    } else if (x == 6) {
      setPink(!pink);
    } else if (x == 7) {
      setPurple(!purple);
    } else if (x == 8) {
      setYellow(!yellow);
    } else if (x == 9) {
      setOrange(!orange);
    } else if (x == 10) {
      setBrown(!brown);
    } else if (x == 11) {
      setSilver(!clear);
    } else if (x == 12) {
      setGrey(!grey);
    } else if (x == 13) {
      setClear(!clear);
    } else if (x == 14) {
      setGold(!gold);
    }
  };

  useEffect(() => {
    const cslug = props.match.params.cslug;
    loadProductByCategory(cslug);
    loadMenuByCategory(cslug);
  }, [props]);

  return (
    <>
      <Helmet>
        <title>{cate.name}</title>
      </Helmet>
      {JSON.stringify(myFilters)}
      {colors}
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
                        {cate.description ? (
                          <>
                            <div>{renderHTML(cate.description)}</div>
                          </>
                        ) : (
                          <></>
                        )}

                        <div className="ty-sort-container">
                          <div
                            className="ut2-selected-product-filters cm-product-filters"
                            id="selected_filters_170"
                          ></div>
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
                      <div className="cm-product-filters">
                        <div className="ty-product-filters__wrapper">
                          <div className="ty-product-filters__block">
                            <div className="ty-product-filters__switch cm-combination-filter_177_1 open cm-save-state cm-ss-reverse">
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
                                        <b>{c.name}</b>
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
                            <div className="ty-product-filters__switch cm-combination-filter_177_1 open cm-save-state cm-ss-reverse">
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
                            <div className="ty-product-filters__switch cm-combination-filter_177_2 open cm-save-state cm-ss-reverse">
                              <span className="ty-product-filters__title">
                                Color
                              </span>

                              <i className="ty-product-filters__switch-down ty-icon-down-open" />
                              <i className="ty-product-filters__switch-right ty-icon-up-open" />
                            </div>
                            <ul className="ty-product-filters">
                              {colors.map((c) => (
                                <>
                                  {c.toString() === "Blue" && (
                                    <li className="cm-product-filters-checkbox-container ty-product-filters__group cp_inline_block ">
                                      <label>
                                        <input
                                          type="checkbox"
                                          style={{ display: "none" }}
                                          className="cm-product-filters-checkbox"
                                          name="checkbox"
                                          onClick={() => changeColor(1)}
                                        />
                                        <div
                                          title="Blue"
                                          className={
                                            blue
                                              ? "cp_active_filter ci_color_icon cp_ci_icon_round"
                                              : "cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                          }
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
                                  )}
                                  {c.toString() === "Green" && (
                                    <li className="cm-product-filters-checkbox-container ty-product-filters__group cp_inline_block ">
                                      <label>
                                        <input
                                          style={{ display: "none" }}
                                          className="cm-product-filters-checkbox"
                                          type="checkbox"
                                          name="checkbox"
                                          onClick={() => changeColor(2)}
                                        />
                                        <div
                                          title="Green"
                                          className={
                                            green
                                              ? "cp_active_filter ci_color_icon cp_ci_icon_round"
                                              : "cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                          }
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
                                  )}
                                  {c.toString() === "Black" && (
                                    <li className="cm-product-filters-checkbox-container ty-product-filters__group cp_inline_block ">
                                      <label>
                                        <input
                                          style={{ display: "none" }}
                                          className="cm-product-filters-checkbox"
                                          type="checkbox"
                                          onClick={() => changeColor(3)}
                                        />
                                        <div
                                          title="Black"
                                          className={
                                            black
                                              ? "cp_active_filter ci_color_icon cp_ci_icon_round"
                                              : "cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                          }
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
                                  )}
                                  {c.toString() === "White" && (
                                    <li className="cm-product-filters-checkbox-container ty-product-filters__group cp_inline_block ">
                                      <label>
                                        <input
                                          style={{ display: "none" }}
                                          className="cm-product-filters-checkbox"
                                          type="checkbox"
                                          name="product_filters[2]"
                                          onClick={() => changeColor(4)}
                                        />
                                        <div
                                          title="White"
                                          className={
                                            white
                                              ? "cp_active_filter ci_color_icon cp_ci_icon_round"
                                              : "cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                          }
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
                                  )}
                                  {c.toString() === "Red" && (
                                    <li className="cm-product-filters-checkbox-container ty-product-filters__group cp_inline_block ">
                                      <label>
                                        <input
                                          style={{ display: "none" }}
                                          className="cm-product-filters-checkbox"
                                          type="checkbox"
                                          name="product_filters[2]"
                                          onClick={() => changeColor(5)}
                                        />
                                        <div
                                          title="Red"
                                          className={
                                            red
                                              ? "cp_active_filter ci_color_icon cp_ci_icon_round"
                                              : "cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                          }
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
                                  )}
                                  {c.toString() === "Pink" && (
                                    <li className="cm-product-filters-checkbox-container ty-product-filters__group cp_inline_block ">
                                      <label>
                                        <input
                                          style={{ display: "none" }}
                                          className="cm-product-filters-checkbox"
                                          type="checkbox"
                                          name="product_filters[2]"
                                          onClick={() => changeColor(6)}
                                        />
                                        <div
                                          title="Pink"
                                          className={
                                            pink
                                              ? "cp_active_filter ci_color_icon cp_ci_icon_round"
                                              : "cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                          }
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
                                  )}
                                  {c.toString() === "Purple" && (
                                    <li className="cm-product-filters-checkbox-container ty-product-filters__group cp_inline_block ">
                                      <label>
                                        <input
                                          style={{ display: "none" }}
                                          className="cm-product-filters-checkbox"
                                          type="checkbox"
                                          name="product_filters[2]"
                                          onClick={() => changeColor(7)}
                                        />
                                        <div
                                          title="Purple"
                                          className={
                                            purple
                                              ? "cp_active_filter ci_color_icon cp_ci_icon_round"
                                              : "cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                          }
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
                                  )}
                                  {c.toString() === "Yellow" && (
                                    <li className="cm-product-filters-checkbox-container ty-product-filters__group cp_inline_block ">
                                      <label>
                                        <input
                                          style={{ display: "none" }}
                                          className="cm-product-filters-checkbox"
                                          type="checkbox"
                                          name="product_filters[2]"
                                          onClick={() => changeColor(8)}
                                        />
                                        <div
                                          title="Yellow"
                                          className={
                                            yellow
                                              ? "cp_active_filter ci_color_icon cp_ci_icon_round"
                                              : "cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                          }
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
                                  )}
                                  {c.toString() === "Orange" && (
                                    <li className="cm-product-filters-checkbox-container ty-product-filters__group cp_inline_block ">
                                      <label>
                                        <input
                                          style={{ display: "none" }}
                                          className="cm-product-filters-checkbox"
                                          type="checkbox"
                                          name="product_filters[2]"
                                          onClick={() => changeColor(9)}
                                        />
                                        <div
                                          title="Orange"
                                          className={
                                            orange
                                              ? "cp_active_filter ci_color_icon cp_ci_icon_round"
                                              : "cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                          }
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
                                  )}
                                  {c.toString() === "Brown" && (
                                    <li className="cm-product-filters-checkbox-container ty-product-filters__group cp_inline_block ">
                                      <label>
                                        <input
                                          style={{ display: "none" }}
                                          className="cm-product-filters-checkbox"
                                          type="checkbox"
                                          name="product_filters[2]"
                                          onClick={() => changeColor(10)}
                                        />
                                        <div
                                          title="Brown"
                                          className={
                                            brown
                                              ? "cp_active_filter ci_color_icon cp_ci_icon_round"
                                              : "cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                          }
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
                                  )}

                                  {c.toString() === "Silver" && (
                                    <li className="cm-product-filters-checkbox-container ty-product-filters__group cp_inline_block ">
                                      <label>
                                        <input
                                          style={{ display: "none" }}
                                          className="cm-product-filters-checkbox"
                                          type="checkbox"
                                          name="product_filters[2]"
                                          onClick={() => changeColor(11)}
                                        />
                                        <div
                                          title="Silver"
                                          className={
                                            silver
                                              ? "cp_active_filter ci_color_icon cp_ci_icon_round"
                                              : "cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                          }
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
                                  )}
                                  {c.toString() === "Grey" && (
                                    <li className="cm-product-filters-checkbox-container ty-product-filters__group cp_inline_block ">
                                      <label>
                                        <input
                                          style={{ display: "none" }}
                                          className="cm-product-filters-checkbox"
                                          type="checkbox"
                                          name="product_filters[2]"
                                          onClick={() => changeColor(12)}
                                        />
                                        <div
                                          title="Gray"
                                          className={
                                            grey
                                              ? "cp_active_filter ci_color_icon cp_ci_icon_round"
                                              : "cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                          }
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
                                  )}
                                  {c.toString() === "Clear" && (
                                    <li className="cm-product-filters-checkbox-container ty-product-filters__group cp_inline_block ">
                                      <label>
                                        <input
                                          style={{ display: "none" }}
                                          className="cm-product-filters-checkbox"
                                          type="checkbox"
                                          name="product_filters[2]"
                                          onClick={() => changeColor(13)}
                                        />
                                        <div
                                          title="Clear"
                                          className={
                                            clear
                                              ? "cp_active_filter ci_color_icon cp_ci_icon_round"
                                              : "cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                          }
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
                                  )}
                                  {c.toString() === "Gold" && (
                                    <li className="cm-product-filters-checkbox-container ty-product-filters__group cp_inline_block ">
                                      <label>
                                        <input
                                          style={{ display: "none" }}
                                          className="cm-product-filters-checkbox"
                                          type="checkbox"
                                          name="product_filters[2]"
                                          onClick={() => changeColor(14)}
                                        />
                                        <div
                                          title="Gold"
                                          className={
                                            gold
                                              ? "cp_active_filter ci_color_icon cp_ci_icon_round"
                                              : "cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                          }
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
                                  )}
                                </>
                              ))}

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
                              <p className="ty-product-filters__no-items-found hidden">
                                No items found matching the search criteria
                              </p>
                            </ul>
                          </div>

                          <div className="ty-product-filters__block">
                            <div className="ty-product-filters__switch cm-combination-filter_177_9 open cm-save-state cm-ss-reverse">
                              <span className="ty-product-filters__title">
                                <i class="fa fa-dollar" /> Price
                              </span>
                              <i className="ty-product-filters__switch-down ty-icon-down-open" />
                              <i className="ty-product-filters__switch-right ty-icon-up-open" />
                            </div>

                            <div className="cm-product-filters-checkbox-container"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*END MENU*/}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryHome;
