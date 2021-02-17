import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCardBrowsingHistory = ({ sanpham }) => {
  return (
    <>
      <div
        className="owl-item"
        style={{ width: "25%", display: "inline-block" }}
      >
        <div className="ut2-gl__item ">
          <form className="cm-disable-empty-files cm-ajax cm-ajax-full-render cm-ajax-status-middle cm-processed-form">
            <div className="ut2-gl__body" style={{ minHeight: "440px" }}>
              <div className="ut2-gl__image" style={{ height: "250px" }}>
                <a href="#">
                  {sanpham.image && (
                    <img
                      src={sanpham.image[0].url}
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
                    title="Add to wishlist"
                  >
                    <i className="ut2-icon-baseline-favorite" />
                  </a>

                  <a
                    className=" ut2-add-to-compare cm-ajax cm-ajax-full-render cm-tooltip"
                    title="Add to comparison list"
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
              <div className="ty-control-group ty-sku-item cm-hidden-wrapper">
                <label className="ty-control-group__label">Item #:</label>
                <span className="ty-control-group__item cm-reload-129000393">
                  {sanpham.item}
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
                  <span className="cm-reload-129000393"></span>
                  <span className="cm-reload-129000393 ty-price-update">
                    <span className="ty-price">
                      <bdi>
                        <span className="ty-price-num">$</span>
                        <span className="ty-price-num">{sanpham.price}</span>
                      </bdi>
                    </span>
                  </span>
                </div>
                <div> </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductCardBrowsingHistory;
