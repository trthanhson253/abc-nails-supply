import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ModalImage from "react-modal-image";
import { message } from "antd";
import { toast } from "react-toastify";
import { InputNumber } from "antd";
import { userCart } from "../functions/user";
import { Helmet } from "react-helmet";
const Cart = ({ history }) => {
  const { cart, user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const getTotal = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  const saveOrderToDb = () => {
    // console.log("cart", JSON.stringify(cart, null, 4));
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    userCart(cart, user.token)
      .then((res) => {
        const delayed = setTimeout(() => {
          dispatch({
            type: "SET_LOADING",
            payload: false,
          });
        }, 1000);
        dispatch({
          type: "CHECKOUT_APPLIED",
          payload: {
            address: true,
            payment: false,
            finish: false,
          },
        });
        if (res.data.ok) history.push("/checkout");
      })
      .catch((err) => console.log("cart save err", err));
  };

  const handleQuantityChange = (p) => (e) => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    let count = e < 1 ? 1 : e;

    if (count > p.quantity) {
      toast.error(`Max available quantity: ${p.quantity}`);
      return;
    }

    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.map((product, i) => {
        if (product._id == p._id) {
          cart[i].count = count;
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      const delayed = setTimeout(() => {
        dispatch({
          type: "SET_LOADING",
          payload: false,
        });
        message.success("Updated Quantity");
      }, 500);
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  const clearCart = () => {
    // remove from local storage
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
    // remove from redux
    dispatch({
      type: "ADD_TO_CART",
      payload: [],
    });
    const delayed = setTimeout(() => {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    }, 1000);
    message.success("Your cart is empty");
  };

  const handleRemove = (p) => (e) => {
    // console.log(p._id, "to remove");
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // [1,2,3,4,5]
      cart.map((product, i) => {
        if (product._id === p._id) {
          cart.splice(i, 1);
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
      const delayed = setTimeout(() => {
        dispatch({
          type: "SET_LOADING",
          payload: false,
        });
      }, 1000);
    }
  };

  return (
    <>
      <Helmet>
        <title>Cart | ABC Nails Supply</title>
      </Helmet>{" "}
      <div className="tygh-content clearfix">
        <div className="container-fluid  content-grid">
          <div className="container-fluid-row">
            <div className="row-fluid ">
              <div className="span16 breadcrumbs-grid ">
                <div id="breadcrumbs_10">
                  <div className="ty-breadcrumbs clearfix">
                    <Link to="/" className="ty-breadcrumbs__a">
                      <bdi>Home</bdi>
                    </Link>
                    <span className="ty-breadcrumbs__slash">/</span>
                    <span className="ty-breadcrumbs__current">
                      <bdi>Cart</bdi>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid-row">
            <div className="row-fluid ">
              <div className="span16 main-content-grid ">
                <div className="ty-mainbox-container clearfix">
                  <div className="ty-mainbox-body">
                    {cart.length ? (
                      <>
                        <h1 className="ty-mainbox-title">Cart</h1>
                        <div className="buttons-container ty-cart-content__top-buttons clearfix">
                          <div className="ty-float-left ty-cart-content__left-buttons">
                            <a href="/" className="ty-btn ty-btn__secondary ">
                              <span>Continue shopping</span>
                            </a>
                            {cart.length ? (
                              <div
                                className="ty-btn ty-btn__tertiary text-button "
                                onClick={clearCart}
                              >
                                Clear cart
                              </div>
                            ) : (
                              <></>
                            )}
                          </div>
                          <div className="ty-float-right ty-cart-content__right-buttons">
                            {user ? (
                              <button
                                onClick={saveOrderToDb}
                                className=" cm-dialog-auto-size ty-btn ty-btn__primary"
                                to="/checkout"
                              >
                                Proceed to checkout
                              </button>
                            ) : (
                              <Link
                                className=" ty-btn ty-btn__tertiary text-button"
                                to="/login"
                              >
                                Signin to checkout
                              </Link>
                            )}
                          </div>
                        </div>
                        <div>
                          <div className="ty-mainbox-cart__body">
                            <div id="cart_items">
                              <table className="ty-cart-content ty-table">
                                <thead>
                                  <tr>
                                    <th className="ty-cart-content__title ty-left">
                                      Product
                                    </th>
                                    <th className="ty-cart-content__title ty-left">
                                      &nbsp;
                                    </th>
                                    <th className="ty-cart-content__title ty-right">
                                      Unit price
                                    </th>
                                    <th className="ty-cart-content__title quantity-cell">
                                      Quantity
                                    </th>
                                    <th className="ty-cart-content__title ty-right">
                                      Total price
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {cart.map((c) => (
                                    <tr>
                                      <td className="ty-cart-content__product-elem ty-cart-content__image-block">
                                        <div
                                          className="ty-cart-content__image cm-reload-2107916490"
                                          style={{
                                            width: "100px",
                                            height: "100px",
                                          }}
                                        >
                                          <ModalImage
                                            small={c.image[1].url}
                                            large={c.image[1].url}
                                          />
                                        </div>
                                      </td>
                                      <td
                                        className="ty-cart-content__product-elem ty-cart-content__description"
                                        style={{ width: "50%" }}
                                      >
                                        <Link
                                          to="#"
                                          className="ty-cart-content__product-title"
                                        >
                                          {c.name}
                                        </Link>
                                        <div
                                          className=" ty-cart-content__product-delete ty-delete-big"
                                          onClick={handleRemove(c)}
                                          style={{
                                            cursor: "pointer",
                                            color: "red",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          <i class="fa fa-remove" />
                                          &nbsp;Delete
                                        </div>
                                        <div
                                          className="ty-cart-content__sku ty-sku cm-hidden-wrapper"
                                          id="sku_2107916490"
                                        >
                                          Item #:{" "}
                                          <span
                                            className="cm-reload-2107916490"
                                            id="product_code_update_2107916490"
                                          >
                                            {c.item}
                                            {/*product_code_update_2107916490*/}
                                          </span>
                                        </div>
                                      </td>
                                      <td
                                        className="ty-cart-content__product-elem ty-cart-content__price cm-reload-2107916490"
                                        id="price_display_update_2107916490"
                                      >
                                        <bdi>
                                          <span className="ty-sub-price">
                                            $
                                          </span>
                                          <span
                                            id="sec_product_price_2107916490"
                                            className="ty-sub-price"
                                          >
                                            {c.price}
                                          </span>
                                        </bdi>
                                      </td>
                                      <td className="ty-cart-content__product-elem ty-cart-content__qty ">
                                        <div className="quantity cm-reload-2107916490 changer">
                                          <label htmlFor="amount_2107916490" />
                                          <div className="ty-center ty-value-changer cm-value-changer">
                                            <InputNumber
                                              min={1}
                                              max={100}
                                              defaultValue={c.count}
                                              onChange={handleQuantityChange(c)}
                                            />
                                          </div>
                                        </div>
                                      </td>
                                      <td
                                        className="ty-cart-content__product-elem ty-cart-content__price cm-reload-2107916490"
                                        id="price_subtotal_update_2107916490"
                                      >
                                        <bdi>
                                          <span className="price">$</span>
                                          <span
                                            id="sec_product_subtotal_2107916490"
                                            className="price"
                                          >
                                            7.00
                                          </span>
                                        </bdi>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                              {/*cart_items*/}
                            </div>
                          </div>
                        </div>

                        <div className="ty-cart-total">
                          <div
                            className="ty-cart-total__wrapper clearfix"
                            id="checkout_totals"
                          >
                            <div className="ty-coupons__container">
                              <div></div>
                            </div>
                            <ul className="ty-cart-statistic ty-statistic-list">
                              <li className="ty-cart-statistic__item ty-statistic-list-subtotal">
                                <span className="ty-cart-statistic__title">
                                  Subtotal
                                </span>
                                <span className="ty-cart-statistic__value">
                                  <bdi>
                                    $<span>{getTotal()}</span>
                                  </bdi>
                                </span>
                              </li>
                              <li className="ty-cart-statistic__item ty-statistic-list-shipping-method">
                                <span className="ty-cart-statistic__title">
                                  Shipping cost
                                </span>
                                <span className="ty-cart-statistic__value">
                                  {" "}
                                  <i className="ty-cart-total__icon-estimation ty-icon-flight" />
                                  <a
                                    id="opener_shipping_estimation_block"
                                    className="cm-dialog-opener cm-dialog-auto-size ty-cart-total__a-estimation"
                                    data-ca-target-id="shipping_estimation_block"
                                    title="Calculate shipping cost"
                                    href="/"
                                    rel="nofollow"
                                  >
                                    Calculate
                                  </a>
                                </span>
                              </li>
                            </ul>
                            <div className="clearfix" />
                            <ul className="ty-cart-statistic__total-list">
                              <li className="ty-cart-statistic__item ty-cart-statistic__total">
                                <span className="ty-cart-statistic__total-title">
                                  Total cost
                                </span>
                                <span className="ty-cart-statistic__total-value">
                                  <bdi>
                                    <span className="ty-price">$</span>
                                    <span
                                      id="sec_cart_total"
                                      className="ty-price"
                                    >
                                      11.50
                                    </span>
                                  </bdi>
                                </span>
                              </li>
                            </ul>
                            {/*checkout_totals*/}
                          </div>
                        </div>
                      </>
                    ) : (
                      <p class="ty-no-items">Your cart is empty</p>
                    )}

                    <div className="buttons-container ty-cart-content__bottom-buttons clearfix">
                      <div className="ty-float-left ty-cart-content__left-buttons">
                        <a href="/" className="ty-btn ty-btn__secondary ">
                          <span>Continue shopping</span>
                        </a>
                        {cart.length ? (
                          <div
                            className="ty-btn ty-btn__tertiary text-button "
                            onClick={clearCart}
                          >
                            Clear cart
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="ty-float-right ty-cart-content__right-buttons">
                        {user ? (
                          <>
                            {cart.length ? (
                              <button
                                onClick={saveOrderToDb}
                                className="cm-dialog-auto-size ty-btn ty-btn__primary"
                                to="/checkout"
                              >
                                Proceed to checkout
                              </button>
                            ) : (
                              <></>
                            )}
                          </>
                        ) : (
                          <Link
                            className="ty-btn ty-btn__tertiary text-button "
                            to={{
                              pathname: "/login",
                              state: { from: "cart" },
                            }}
                          >
                            Signin to checkout
                          </Link>
                        )}
                      </div>
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

export default Cart;
