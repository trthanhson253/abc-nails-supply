import React, { useState } from "react";
import { Link } from "react-router-dom";
import { message } from "antd";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist } from "../../functions/user";
import Loader from "../Loader";

const ProductCard = ({ product }) => {
  const { user, cart, spin } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const handleAddToCart = (p) => {
    // create cart array
    let cart = [];
    if (typeof window !== "undefined") {
      // if cart is in local storage GET it
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // push new product to cart
      cart.push({
        ...product,
        count: 1,
      });
      dispatch({
        type: "SET_LOADING",
        payload: true,
      });
      // cart.map((item, i) => {
      //   if (item._id == p._id) {
      //     cart[i].count++;
      //   }
      // });
      // remove duplicates
      let unique = _.uniqWith(cart, _.isEqual);
      // save to local storage
      // console.log('unique', unique)
      localStorage.setItem("cart", JSON.stringify(unique));
      // show tooltip

      // setLoading(true);
      const delayed = setTimeout(() => {
        // setLoading(false);
        dispatch({
          type: "SET_VISIBLE",
          payload: true,
        });
        dispatch({
          type: "SET_LOADING",
          payload: false,
        });
        message.success("This product is added to cart successfully");
      }, 500);

      // add to reeux state
      dispatch({
        type: "ADD_TO_CART",
        payload: unique,
      });
      // show cart items in side drawer
    }
  };
  const handleAddToWishlist = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    addToWishlist(product._id, user.token).then((res) => {
      const delayed = setTimeout(() => {
        dispatch({
          type: "SET_LOADING",
          payload: false,
        });
        message.success("Added to wishlist");
      }, 500);
    });
  };
  return (
    <>
      <div className="ty-column3" data-ut2-load-more="first-item">
        <div className="ut2-gl__item " style={{ height: "418px" }}>
          <div className="ut2-gl__body" style={{ height: "418px" }}>
            {spin ? (
              <Loader />
            ) : (
              <>
                {" "}
                <div className="ut2-gl__image" style={{ height: "250px" }}>
                  <Link
                    to={`/${product.category.slug}/${product.sub.slug}/${product.subSub.slug}/${product.slug}/product`}
                  >
                    <img
                      className="ty-pict lazyOwl cm-image abt-ut2-lazy-loaded"
                      src={product.image[1].url}
                      alt={product.name}
                      title
                      style={{ opacity: 1 }}
                    />
                  </Link>
                  <div className="ut2-gl__buttons">
                    <a
                      className="ut2-quick-view-button cm-tooltip"
                      title="Quick view"
                    >
                      <i class="fa fa-eye" />
                    </a>
                    <a
                      className="ut2-add-to-wish cm-submit cm-tooltip"
                      title="Add to wishlist"
                      onClick={handleAddToWishlist}
                    >
                      <i class="fa fa-heart" />{" "}
                    </a>
                    <a className="ut2-add-to-compare cm-ajax cm-ajax-full-render cm-tooltip">
                      <i class="fa fa-bar-chart-o" />{" "}
                    </a>
                  </div>
                </div>
                <div className="ut2-gl__rating no-rating">
                  <span className="ty-nowrap ty-stars">
                    <i class="fa fa-heart-o" />
                    &nbsp;
                    <i class="fa fa-heart-o" />
                    &nbsp;
                    <i class="fa fa-heart-o" />
                    &nbsp;
                    <i class="fa fa-heart-o" />
                    &nbsp;
                    <i class="fa fa-heart-o" />
                  </span>
                </div>
                <div
                  className="ty-control-group ty-sku-item cm-hidden-wrapper"
                  id="sku_update_7797"
                >
                  <label className="ty-control-group__label" id="sku_7797">
                    Item #:
                  </label>
                  <span
                    className="ty-control-group__item cm-reload-7797"
                    id="product_code_7797"
                  >
                    {product.item}
                  </span>
                </div>
                <div className="ut2-gl__name">
                  <Link
                    to={`/${product.category.slug}/${product.sub.slug}/${product.subSub.slug}/${product.slug}/product`}
                    className="product-title"
                  >
                    {product.name}
                  </Link>
                </div>
                <div
                  className="ut2-gl__price pr-col"
                  style={{ minHeight: "39px" }}
                >
                  <div>
                    {" "}
                    <span
                      className="cm-reload-7797"
                      id="old_price_update_7797"
                    ></span>
                    <span
                      className="cm-reload-7797 ty-price-update"
                      id="price_update_7797"
                    >
                      <span
                        className="ty-price"
                        id="line_discounted_price_7797"
                      >
                        <bdi>
                          <span className="ty-price-num">$</span>
                          <span
                            id="sec_discounted_price_7797"
                            className="ty-price-num"
                          >
                            {product.price}
                          </span>
                        </bdi>
                      </span>
                    </span>
                  </div>
                  <div> </div>
                </div>
                <div className="ut2-gl__control bt-2x ut2-view-qty view">
                  <div className="ut2-gl__qty">
                    <div className="cm-reload-7797" id="qty_update_7797">
                      <div
                        className="ty-qty clearfix changer"
                        id="qty_7797"
                      ></div>
                    </div>
                  </div>
                  <div className="button-container">
                    <div
                      className="cm-reload-7797 "
                      id="add_to_cart_update_7797"
                    >
                      <button
                        className="ty-btn__primary ty-btn__add-to-cart cm-form-dialog-closer ty-btn"
                        type="submit"
                        onClick={() => handleAddToCart(product)}
                      >
                        <span>
                          <i className="ut2-icon-outline-cart" />
                          <span>Add to cart</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="ut2-gl__bottom"></div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
