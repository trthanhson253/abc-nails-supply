import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/cards/ProductCard';
import ProductCardRelate from '../../components/cards/ProductCardRelate';
import { getProductBySubSub } from '../../functions/product';
import { useSelector } from 'react-redux';
import SubSubHomeMenu from '../../components/home/SubSubHomeMenu';
import { Slider, Checkbox } from 'antd';
import _ from 'lodash';

const SubSubHome = (props) => {
  const [products, setProducts] = useState([]);
  const [subSub, setSubSub] = useState({});
  const [cate, setCate] = useState({});
  const [sub, setSub] = useState({});
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));

  // const loadProductBySubSub = () => {
  //   getProductBySubSub(match.params.ssslug).then(res => {
  //     console.log(res)
  //     // setProduct(res.data.products);
  //   });
  // };
  const loadProductBySubSub = (slug) => {
    setLoading(true);
    getProductBySubSub(slug).then((data) => {
      console.log('data', data);
      console.log('products', data.products);
      console.log('subsub', data.subSub[0]);
      setProducts(data.products);
      setSubSub(data.subSub[0]);
      setCate(data.subSub[0].category);
      setSub(data.subSub[0].sub);
      setLoading(false);
      var colorUnique = _.uniq(data.products, 'price');

      console.log('colorUnique', colorUnique);
    });
  };

  useEffect(() => {
    const ssslug1 = props.match.params.ssslug;
    loadProductBySubSub(ssslug1);
  }, [props]);

  return (
    <>
      <div className="tygh-content clearfix">
        <div className="container-fluid  cat-content-grid">
          <div className="container-fluid-row container-fluid-row-full-width ut2__subcategories">
            <div className="row-fluid ">
              {' '}
              <div className="span16 ut2-top">
                <div className="ut2-extra-block-title">
                  <h1 className="ty-mainbox-title">
                    <span>{subSub.name}</span>
                  </h1>
                  <div id="breadcrumbs_167">
                    <div className="ty-breadcrumbs clearfix">
                      <Link to="/" className="ty-breadcrumbs__a">
                        <bdi>Home</bdi>
                      </Link>
                      <span className="ty-breadcrumbs__slash">/</span>
                      <Link
                        to={`/${cate.slug}/product`}
                        className="ty-breadcrumbs__a"
                      >
                        <bdi>{cate.name}</bdi>
                      </Link>
                      <span className="ty-breadcrumbs__slash">/</span>
                      <Link
                        to={`/${cate.slug}/${sub.slug}/product`}
                        className="ty-breadcrumbs__a"
                      >
                        <bdi>{sub.name}</bdi>
                      </Link>
                      <span className="ty-breadcrumbs__slash">/</span>
                      <span className="ty-breadcrumbs__current">
                        <bdi>{subSub.name}</bdi>
                      </span>
                    </div>
                    {/* Inline script moved to the bottom of the page */}
                    {/*breadcrumbs_167*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid-row">
            <div className="row-fluid ">
              {' '}
              <div className="span9 main-content-grid  ">
                <div className="ut2-cat-container">
                  <div className="cat-view-grid" id="category_products_11">
                    {/* Inline script moved to the bottom of the page */}
                    <div
                      className="ty-pagination-container cm-pagination-container"
                      id="pagination_contents"
                    >
                      <div>
                        <a
                          data-ca-scroll=".cm-pagination-container"
                          href="https://www.happynailsupply.com/"
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
                        <div className="ut2-sorting-wrap">
                          <div className="ty-sort-dropdown">
                            <div className="ut2-sort-label"> Sort by:</div>
                            <a
                              id="sw_elm_sort_fields"
                              className="ty-sort-dropdown__wrapper cm-combination"
                            >
                              <span>Sort by Newest</span>
                              <i className="ut2-icon-outline-expand_more" />
                            </a>
                            <ul
                              id="elm_sort_fields"
                              className="ty-sort-dropdown__content cm-popup-box hidden"
                            >
                              <li className="sort-by-timestamp-asc ty-sort-dropdown__content-item">
                                <a
                                  className="cm-ajax cm-ajax-full-render ty-sort-dropdown__content-item-a"
                                  data-ca-target-id="pagination_contents"
                                  href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/?sort_by=timestamp&sort_order=asc"
                                  rel="nofollow"
                                >
                                  Sort by Oldest
                                </a>
                              </li>
                              <li className="sort-by-code-asc ty-sort-dropdown__content-item">
                                <a
                                  className="cm-ajax cm-ajax-full-render ty-sort-dropdown__content-item-a"
                                  data-ca-target-id="pagination_contents"
                                  href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/?sort_by=code&sort_order=asc"
                                  rel="nofollow"
                                >
                                  Sort by Item # 0 to 9
                                </a>
                              </li>
                              <li className="sort-by-code-desc ty-sort-dropdown__content-item">
                                <a
                                  className="cm-ajax cm-ajax-full-render ty-sort-dropdown__content-item-a"
                                  data-ca-target-id="pagination_contents"
                                  href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/?sort_by=code&sort_order=desc"
                                  rel="nofollow"
                                >
                                  Sort by Item # 9 to 0
                                </a>
                              </li>
                              <li className="sort-by-product-asc ty-sort-dropdown__content-item">
                                <a
                                  className="cm-ajax cm-ajax-full-render ty-sort-dropdown__content-item-a"
                                  data-ca-target-id="pagination_contents"
                                  href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/?sort_by=product&sort_order=asc"
                                  rel="nofollow"
                                >
                                  Sort by A to Z
                                </a>
                              </li>
                              <li className="sort-by-product-desc ty-sort-dropdown__content-item">
                                <a
                                  className="cm-ajax cm-ajax-full-render ty-sort-dropdown__content-item-a"
                                  data-ca-target-id="pagination_contents"
                                  href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/?sort_by=product&sort_order=desc"
                                  rel="nofollow"
                                >
                                  Sort by Z to A
                                </a>
                              </li>
                              <li className="sort-by-price-asc ty-sort-dropdown__content-item">
                                <a
                                  className="cm-ajax cm-ajax-full-render ty-sort-dropdown__content-item-a"
                                  data-ca-target-id="pagination_contents"
                                  href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/?sort_by=price&sort_order=asc"
                                  rel="nofollow"
                                >
                                  Sort by Price Lowest
                                </a>
                              </li>
                              <li className="sort-by-price-desc ty-sort-dropdown__content-item">
                                <a
                                  className="cm-ajax cm-ajax-full-render ty-sort-dropdown__content-item-a"
                                  data-ca-target-id="pagination_contents"
                                  href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/?sort_by=price&sort_order=desc"
                                  rel="nofollow"
                                >
                                  Sort by Price Highest
                                </a>
                              </li>
                              <li className="sort-by-popularity-desc ty-sort-dropdown__content-item">
                                <a
                                  className="cm-ajax cm-ajax-full-render ty-sort-dropdown__content-item-a"
                                  data-ca-target-id="pagination_contents"
                                  href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/?sort_by=popularity&sort_order=desc"
                                  rel="nofollow"
                                >
                                  Sort by Popular
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="ty-sort-dropdown"
                            style={{ marginRight: '10px' }}
                          >
                            <a
                              id="sw_elm_pagination_steps"
                              className="ty-sort-dropdown__wrapper cm-combination cm-tooltip"
                              title="24 Per Page"
                            >
                              <span>24</span>
                              <i className="ut2-icon-outline-expand_more" />
                            </a>
                            <ul
                              id="elm_pagination_steps"
                              className="ty-sort-dropdown__content cm-popup-box hidden"
                            >
                              <li className="ty-sort-dropdown__content-item">
                                <a
                                  className="cm-ajax cm-ajax-full-render ty-sort-dropdown__content-item-a"
                                  href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/?items_per_page=12"
                                  data-ca-target-id="pagination_contents"
                                  rel="nofollow"
                                >
                                  12 Per Page
                                </a>
                              </li>
                              <li className="ty-sort-dropdown__content-item">
                                <a
                                  className="cm-ajax cm-ajax-full-render ty-sort-dropdown__content-item-a"
                                  href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/?items_per_page=48"
                                  data-ca-target-id="pagination_contents"
                                  rel="nofollow"
                                >
                                  48 Per Page
                                </a>
                              </li>
                              <li className="ty-sort-dropdown__content-item">
                                <a
                                  className="cm-ajax cm-ajax-full-render ty-sort-dropdown__content-item-a"
                                  href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/?items_per_page=96"
                                  data-ca-target-id="pagination_contents"
                                  rel="nofollow"
                                >
                                  96 Per Page
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* Inline script moved to the bottom of the page */}
                      <div className="grid-list">
                        <div id="categories_view_pagination_contents">
                          {products.map((product) => (
                            <ProductCard product={product} loading={loading} />
                          ))}
                        </div>
                        <div className="ut2-load-more-container">
                          <span className="ut2-load-more">
                            <i className="loader" />
                            Show another 24 products
                          </span>
                        </div>
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
                                style={{ maxHeight: '310px' }}
                                className="ty-product-filters__variants cm-filter-table"
                                data-ca-input-id="elm_search_177_1"
                                data-ca-clear-id="elm_search_clear_177_1"
                                data-ca-empty-id="elm_search_empty_177_1"
                              >
                                <li className="cm-product-filters-checkbox-container ty-product-filters__group">
                                  <li className="cm-product-filters-checkbox-container ty-product-filters__group">
                                    <Checkbox
                                      // onChange={handleCheck}
                                      // value={c._id}
                                      name="brand"
                                      // checked={brandIds.includes(c._id)}
                                    >
                                      China
                                    </Checkbox>
                                  </li>
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
                                  style={{ display: 'none' }}
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
                                  style={{ background: '#000000' }}
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
                                  style={{ display: 'none' }}
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
                                  style={{ background: '#ffffff' }}
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
                                  style={{ display: 'none' }}
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
                                  style={{ background: '#ff0000' }}
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
                                  style={{ display: 'none' }}
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
                                  style={{ background: '#0000ff' }}
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
                                  style={{ display: 'none' }}
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
                                  style={{ background: '#ff00ff' }}
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
                                  style={{ display: 'none' }}
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
                                  style={{ background: '#9900ff' }}
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
                                  style={{ display: 'none' }}
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
                                  style={{ background: '#38761d' }}
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
                                  style={{ display: 'none' }}
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
                                  style={{ background: '#ffff00' }}
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
                                  style={{ display: 'none' }}
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
                                  style={{ background: '#e3b28b' }}
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
                                  style={{ display: 'none' }}
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
                                  style={{ background: '#ff9900' }}
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
                                  style={{ display: 'none' }}
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
                                  style={{ background: '#804c2f' }}
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
                                  style={{ display: 'none' }}
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
                                  style={{ background: '#d9d9d9' }}
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
                                  style={{ display: 'none' }}
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
                                  style={{ background: '#434343' }}
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
                                  style={{ display: 'none' }}
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
                                  style={{ background: '#ffffff' }}
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
                                  style={{ display: 'none' }}
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
                                  style={{ background: '#f1c232' }}
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
                        {/* Inline script moved to the bottom of the page */}
                        <div className="ty-product-filters__block">
                          <div
                            id="sw_content_177_3"
                            className="ty-product-filters__switch cm-combination-filter_177_3 open cm-save-state cm-ss-reverse"
                          >
                            <span className="ty-product-filters__title">
                              Shade
                            </span>
                            <i className="ty-product-filters__switch-down ty-icon-down-open" />
                            <i className="ty-product-filters__switch-right ty-icon-up-open" />
                          </div>
                          <ul
                            className="ty-product-filters "
                            id="content_177_3"
                          >
                            <li className="ty-product-filters__item-more">
                              <ul
                                id="ranges_177_3"
                                style={{ maxHeight: '310px' }}
                                className="ty-product-filters__variants cm-filter-table"
                                data-ca-input-id="elm_search_177_3"
                                data-ca-clear-id="elm_search_clear_177_3"
                                data-ca-empty-id="elm_search_empty_177_3"
                              >
                                <li className="cm-product-filters-checkbox-container ty-product-filters__group">
                                  <input
                                    className="cm-product-filters-checkbox"
                                    type="checkbox"
                                    name="product_filters[3]"
                                    data-ca-filter-id={3}
                                    defaultValue={35}
                                    id="elm_checkbox_177_3_35"
                                  />
                                  <label htmlFor="elm_checkbox_177_3_35">
                                    <span>Chrome</span>
                                  </label>
                                </li>
                                <li className="cm-product-filters-checkbox-container ty-product-filters__group">
                                  <input
                                    className="cm-product-filters-checkbox"
                                    type="checkbox"
                                    name="product_filters[3]"
                                    data-ca-filter-id={3}
                                    defaultValue={10}
                                    id="elm_checkbox_177_3_10"
                                  />
                                  <label htmlFor="elm_checkbox_177_3_10">
                                    <span>Cream</span>
                                  </label>
                                </li>
                                <li className="cm-product-filters-checkbox-container ty-product-filters__group">
                                  <input
                                    className="cm-product-filters-checkbox"
                                    type="checkbox"
                                    name="product_filters[3]"
                                    data-ca-filter-id={3}
                                    defaultValue={19}
                                    id="elm_checkbox_177_3_19"
                                  />
                                  <label htmlFor="elm_checkbox_177_3_19">
                                    <span>Glitter</span>
                                  </label>
                                </li>
                                <li className="cm-product-filters-checkbox-container ty-product-filters__group">
                                  <input
                                    className="cm-product-filters-checkbox"
                                    type="checkbox"
                                    name="product_filters[3]"
                                    data-ca-filter-id={3}
                                    defaultValue={36}
                                    id="elm_checkbox_177_3_36"
                                  />
                                  <label htmlFor="elm_checkbox_177_3_36">
                                    <span>Neon</span>
                                  </label>
                                </li>
                                <li className="cm-product-filters-checkbox-container ty-product-filters__group">
                                  <input
                                    className="cm-product-filters-checkbox"
                                    type="checkbox"
                                    name="product_filters[3]"
                                    data-ca-filter-id={3}
                                    defaultValue={16}
                                    id="elm_checkbox_177_3_16"
                                  />
                                  <label htmlFor="elm_checkbox_177_3_16">
                                    <span>Nude</span>
                                  </label>
                                </li>
                                <li className="cm-product-filters-checkbox-container ty-product-filters__group">
                                  <input
                                    className="cm-product-filters-checkbox"
                                    type="checkbox"
                                    name="product_filters[3]"
                                    data-ca-filter-id={3}
                                    defaultValue={24}
                                    id="elm_checkbox_177_3_24"
                                  />
                                  <label htmlFor="elm_checkbox_177_3_24">
                                    <span>Pearl</span>
                                  </label>
                                </li>
                                <li className="cm-product-filters-checkbox-container ty-product-filters__group">
                                  <input
                                    className="cm-product-filters-checkbox"
                                    type="checkbox"
                                    name="product_filters[3]"
                                    data-ca-filter-id={3}
                                    defaultValue={23}
                                    id="elm_checkbox_177_3_23"
                                  />
                                  <label htmlFor="elm_checkbox_177_3_23">
                                    <span>Shapes</span>
                                  </label>
                                </li>
                                <li className="cm-product-filters-checkbox-container ty-product-filters__group">
                                  <input
                                    className="cm-product-filters-checkbox"
                                    type="checkbox"
                                    name="product_filters[3]"
                                    data-ca-filter-id={3}
                                    defaultValue={13}
                                    id="elm_checkbox_177_3_13"
                                  />
                                  <label htmlFor="elm_checkbox_177_3_13">
                                    <span>Shimmer</span>
                                  </label>
                                </li>
                              </ul>
                            </li>
                            <p
                              id="elm_search_empty_177_3"
                              className="ty-product-filters__no-items-found hidden"
                            >
                              No items found matching the search criteria
                            </p>
                          </ul>
                        </div>
                        {/* Inline script moved to the bottom of the page */}
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
                                style={{ maxHeight: '310px' }}
                                className="ty-product-filters__variants cm-filter-table"
                                data-ca-input-id="elm_search_177_4"
                                data-ca-clear-id="elm_search_clear_177_4"
                                data-ca-empty-id="elm_search_empty_177_4"
                              >
                                <li className="cm-product-filters-checkbox-container ty-product-filters__group">
                                  <input
                                    className="cm-product-filters-checkbox"
                                    type="checkbox"
                                    name="product_filters[4]"
                                    data-ca-filter-id={4}
                                    defaultValue={11}
                                    id="elm_checkbox_177_4_11"
                                  />
                                  <label htmlFor="elm_checkbox_177_4_11">
                                    <span>0.5oz</span>
                                  </label>
                                </li>
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
                              Price
                            </span>
                            <i className="ty-product-filters__switch-down ty-icon-down-open" />
                            <i className="ty-product-filters__switch-right ty-icon-up-open" />
                          </div>
                          {/* Inline script moved to the bottom of the page */}
                          <div
                            id="content_177_9"
                            className="cm-product-filters-checkbox-container"
                          >
                            <Slider range defaultValue={[20, 50]} />
                          </div>
                        </div>
                        {/* Inline script moved to the bottom of the page */}
                      </div>
                      {/*product_filters_177*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubSubHome;
