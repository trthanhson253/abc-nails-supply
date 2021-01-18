import React, { useState } from "react";
import { Slider, Checkbox } from "antd";
import { getFilteredProducts } from "../../functions/product";
import { message } from "antd";
import _ from "lodash";

const ProductFilterMenu = ({
  brands,
  colors,
  sizes,
  setProducts,
  setSizes,
  setColors,
  setBrands,
  resetMenu,
  skip,
  limit,
  setSoluong,
  myFilters,
  setMyFilters,
  setSkip,
}) => {
  const [checkedBrand, setCheckedBrand] = useState([]);
  const [checkedSize, setCheckedSize] = useState([]);
  // const [myFilters, setMyFilters] = useState({
  //   filters: { brand: [], size: [] },
  // });

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

  return (
    <>
      {JSON.stringify(myFilters)}
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
              id="product_filters_177"
            >
              <div className="ty-product-filters__wrapper">
                <div className="ty-product-filters__block">
                  <div
                    id="sw_content_177_1"
                    className="ty-product-filters__switch cm-combination-filter_177_1 open cm-save-state cm-ss-reverse"
                  >
                    <span className="ty-product-filters__title">Brand</span>
                    <i className="ty-product-filters__switch-down ty-icon-down-open" />
                    <i className="ty-product-filters__switch-right ty-icon-up-open" />
                  </div>
                  <ul className="ty-product-filters " id="content_177_1">
                    <li className="ty-product-filters__item-more">
                      <ul
                        id="ranges_177_1"
                        style={{ maxHeight: "310px" }}
                        className="ty-product-filters__variants cm-filter-table"
                        data-ca-input-id="elm_search_177_1"
                        data-ca-clear-id="elm_search_clear_177_1"
                        data-ca-empty-id="elm_search_empty_177_1"
                      >
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
                    <span className="ty-product-filters__title">Color</span>
                    <i className="ty-product-filters__switch-down ty-icon-down-open" />
                    <i className="ty-product-filters__switch-right ty-icon-up-open" />
                  </div>
                  <ul className="ty-product-filters " id="content_177_2">
                    {colors.map((c) => (
                      <li className="cm-product-filters-checkbox-container ty-product-filters__group cp_inline_block ">
                        {c === "Blue" && (
                          <Checkbox
                            // onChange={handleCheck}
                            // value={c}
                            name="color"
                            // checked={brandIds.includes(c._id)}
                          >
                            <label>
                              <div
                                className="cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                style={{ background: "blue" }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={900}
                                  height={1024}
                                  viewBox="0 0 1024 1024"
                                >
                                  <path d="M954.9 323.4q0 22.9-16 38.9l-491.4 491.4q-16 16-38.9 16t-38.9-16l-284.6-284.6q-16-16-16-38.9t16-38.9l77.7-77.7q16-16 38.9-16t38.9 16l168 168.6 374.9-375.4q16-16 38.9-16t38.9 16l77.7 77.7q16 16 16 38.9z" />
                                </svg>
                              </div>
                            </label>
                          </Checkbox>
                        )}

                        {c === "Pink" && (
                          <Checkbox
                            // onChange={handleCheck}
                            // value={c}
                            name="color"
                            // checked={brandIds.includes(c._id)}
                          >
                            <label>
                              <div
                                className="cp_noactive_filter ci_color_icon cp_ci_icon_round"
                                style={{ background: "pink" }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={900}
                                  height={1024}
                                  viewBox="0 0 1024 1024"
                                >
                                  <path d="M954.9 323.4q0 22.9-16 38.9l-491.4 491.4q-16 16-38.9 16t-38.9-16l-284.6-284.6q-16-16-16-38.9t16-38.9l77.7-77.7q16-16 38.9-16t38.9 16l168 168.6 374.9-375.4q16-16 38.9-16t38.9 16l77.7 77.7q16 16 16 38.9z" />
                                </svg>
                              </div>
                            </label>
                          </Checkbox>
                        )}
                      </li>
                    ))}

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
                    id="sw_content_177_4"
                    className="ty-product-filters__switch cm-combination-filter_177_4 open cm-save-state cm-ss-reverse"
                  >
                    <span className="ty-product-filters__title">Size</span>
                    <i className="ty-product-filters__switch-down ty-icon-down-open" />
                    <i className="ty-product-filters__switch-right ty-icon-up-open" />
                  </div>
                  <ul className="ty-product-filters " id="content_177_4">
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
                    <span className="ty-product-filters__title">Price</span>
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
    </>
  );
};

export default ProductFilterMenu;
