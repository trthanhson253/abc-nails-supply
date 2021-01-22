import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCardRelate = ({ sanpham }) => {
  return (
    <>
      <div
        className="owl-item"
        style={{ width: "233px", display: "inline-block" }}
      >
        <div className="ut2-gl__item ">
          <form className="cm-disable-empty-files cm-ajax cm-ajax-full-render cm-ajax-status-middle cm-processed-form">
            <div className="ut2-gl__body" style={{ minHeight: "440px" }}>
              <div className="ut2-gl__image" style={{ height: "250px" }}>
                <a href="#">
                  {sanpham.image && (
                    <img
                      src={sanpham.image[1].url}
                      className="ty-pict lazyOwl cm-image abt-ut2-lazy-loaded"
                      id="det_img_393"
                      alt=""
                      title
                      style={{ opacity: 1 }}
                    />
                  )}
                </a>
                <div className="ut2-gl__buttons">
                  <a
                    className="ut2-quick-view-button cm-dialog-opener cm-tooltip cm-dialog-auto-size"
                    title="Quick view"
                    data-ca-view-id={393}
                    data-ca-target-id="product_quick_view"
                    href="#"
                    data-ca-dialog-title="Quick product viewer"
                    rel="nofollow"
                  >
                    <i className="ut2-icon ut2-icon-baseline-visibility" />
                  </a>
                  <a
                    className="ut2-add-to-wish cm-submit cm-tooltip"
                    title="Add to wishlist"
                    id="button_wishlist_129000393"
                    data-ca-dispatch="dispatch[wishlist.add..393]"
                  >
                    <i className="ut2-icon-baseline-favorite" />{" "}
                  </a>
                  <a
                    className=" ut2-add-to-compare cm-ajax cm-ajax-full-render cm-tooltip"
                    title="Add to comparison list"
                    data-ca-target-id="comparison_list,account_info*,abt__ut2_compared_products"
                    rel="nofollow"
                    href="#"
                  >
                    <i className="ut2-icon-baseline-equalizer" />{" "}
                  </a>
                </div>
              </div>
              <div className="ut2-gl__rating no-rating">
                <span className="ty-nowrap ty-stars">
                  <i className="ty-icon-star-empty" />
                  <i className="ty-icon-star-empty" />
                  <i className="ty-icon-star-empty" />
                  <i className="ty-icon-star-empty" />
                  <i className="ty-icon-star-empty" />
                </span>
              </div>
              <div
                className="ty-control-group ty-sku-item cm-hidden-wrapper"
                id="sku_update_129000393"
              >
                <input
                  type="hidden"
                  name="appearance[show_sku]"
                  defaultValue={1}
                />
                <label className="ty-control-group__label" id="sku_129000393">
                  Item #:
                </label>
                <span
                  className="ty-control-group__item cm-reload-129000393"
                  id="product_code_129000393"
                >
                  70577{/*product_code_129000393*/}
                </span>
              </div>
              <div className="ut2-gl__name">
                <Link
                  to="#"
                  className="product-title"
                  title="China Glaze - Ruby Pumps 0.5oz #182"
                >
                  {sanpham.name}
                </Link>
              </div>
              <div
                className="ut2-gl__price 	pr-col"
                style={{ minHeight: "41px" }}
              >
                <div>
                  {" "}
                  <span
                    className="cm-reload-129000393"
                    id="old_price_update_129000393"
                  >
                    {/*old_price_update_129000393*/}
                  </span>
                  <span
                    className="cm-reload-129000393 ty-price-update"
                    id="price_update_129000393"
                  >
                    <span
                      className="ty-price"
                      id="line_discounted_price_129000393"
                    >
                      <bdi>
                        <span className="ty-price-num">$</span>
                        <span
                          id="sec_discounted_price_129000393"
                          className="ty-price-num"
                        >
                          3.25
                        </span>
                      </bdi>
                    </span>
                    {/*price_update_129000393*/}
                  </span>
                </div>
                <div> </div>
              </div>
              <div className="ut2-gl__control bt-2x ut2-view-qty view">
                <div className="ut2-gl__qty">
                  <div
                    className="cm-reload-129000393"
                    id="qty_update_129000393"
                  >
                    <div className="ty-qty clearfix changer" id="qty_129000393">
                      <div className="ty-center ty-value-changer cm-value-changer">
                        <a className="cm-increase ty-value-changer__increase">
                          +
                        </a>
                        <input
                          type="text"
                          size={5}
                          className="ty-value-changer__input cm-amount"
                          id="qty_count_129000393"
                          name="product_data[393][amount]"
                          defaultValue={1}
                          data-ca-min-qty={1}
                        />
                        <a className="cm-decrease ty-value-changer__decrease">
                          −
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button-container">
                  <div
                    className="cm-reload-129000393 "
                    id="add_to_cart_update_129000393"
                  >
                    <button
                      id="button_cart_129000393"
                      className="ty-btn__primary ty-btn__add-to-cart cm-form-dialog-closer ty-btn"
                      type="submit"
                      name="dispatch[checkout.add..393]"
                    >
                      <span>
                        <i className="ut2-icon-outline-cart" />
                        <span>Add to cart</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductCardRelate;
