import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeCookie } from "../../functions/auth";
import { toast } from "react-toastify";
import { getCategories, loadMenu } from "../../functions/category";
import Search from "../forms/Search";
import { Image, message } from "antd";

const Header = () => {
  let { user, cart, load } = useSelector((state) => ({ ...state }));
  let history = useHistory();
  let dispatch = useDispatch();
  const [subs, setSubs] = useState([]);
  const [categories, setCategories] = useState([]);

  // const loadSubSubs= () => {
  //   getSubSubs().then((data) => {
  //     if (data.error) {
  //       toast.error(data.error);
  //     } else {
  //         console.log(data.data)
  //       setSubSubs(data.data);
  //     }
  //   });
  // };
  const loadCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        toast.error(data.error);
      } else {
        // console.log(data.data)
        setCategories(data.data);
      }
    });
  };

  function activateMenu(id) {
    const delayed = setTimeout(() => {
      loadMenu(id).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          // console.log(data.data.result)
          setSubs(data.data.result);
        }
      });
    }, 500);
    return () => clearTimeout(delayed);
  }

  // const clearCart = () => {
  //   // remove from local storage
  //   if (window.confirm("Are you sure to clear your cart ?")) {
  //   if (typeof window !== "undefined") {
  //     localStorage.removeItem("cart");
  //   }
  //   // remove from redux
  //   dispatch({
  //     type: "ADD_TO_CART",
  //     payload: [],
  //   });
  //  message.success("Your cart is empty")
  // }
  // };

  const handleRemove = (p) => (e) => {
    // console.log(p._id, "to remove");
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
    }
    history.push("/cart");
  };
  useEffect(() => {
    // loadSubSubs();
    loadCategories();
  }, []);

  const signout = () => {
    removeCookie("token");
    removeCookie("_id");
    removeCookie("role");
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });

    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    setTimeout(() => {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    }, 1000);
    toast.success(`Logout Success`);
    history.push("/login");
  };

  return (
    <>
      <div className="tygh-header clearfix">
        <div
          className="container-fluid  header-grid  advanced-header"
          style={{ padding: "5px 0" }}
        >
          <div className="container-fluid-row">
            <div className="row-fluid ">
              {" "}
              <div className="span5 top-logo-grid ">
                <div className="top-logo ">
                  <div className="ty-logo-container">
                    <Link to="/" title="ABC Nail Supply">
                      <img
                        className="ty-pict  ty-logo-container__image cm-image"
                        id="det_img_590283576"
                        src={require("../../assets/img/abc-logo.png")}
                        width={374}
                        height={160}
                        alt="ABC Nail Supply"
                        title="ABC Nail Supply"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="span8 top-header-menu hidden-phone ">
                <div className="hidden-phone ">
                  <ul id="text_links_678" className="ty-text-links">
                    <li className="ty-text-links__item ty-level-0 ty-menu-item__newest">
                      <Link className="ty-text-links__a" to="new-products/">
                        New
                      </Link>
                    </li>
                    <li className="ty-text-links__item ty-level-0 ty-menu-item__sale">
                      <Link className="ty-text-links__a" to="/special-sales/">
                        Sales
                      </Link>
                    </li>
                    <li className="ty-text-links__item ty-level-0 ty-menu-item__hits">
                      <Link className="ty-text-links__a" to="/best-sellers">
                        Best Sellers
                      </Link>
                    </li>
                    <li className="ty-text-links__item ty-level-0">
                      <Link className="ty-text-links__a" to="/promotions">
                        Deals
                      </Link>
                    </li>
                    <li className="ty-text-links__item ty-level-0">
                      <Link className="ty-text-links__a" to="/brands">
                        Brands
                      </Link>
                    </li>
                    <li className="ty-text-links__item ty-level-0 ty-menu-item-free">
                      <Link className="ty-text-links__a" to="/free-items">
                        Free
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="span3 top-phoness ">
                <div className="top-buttons-grid ty-float-right">
                  <div
                    className="ut2-compared-products"
                    id="abt__ut2_compared_products"
                  >
                    <Link
                      className="cm-tooltip ty-compare__a "
                      to="/compare"
                      rel="nofollow"
                      title="Comparison List"
                    >
                      <i className="ut2-icon-baseline-equalizer" />
                    </Link>
                    {/*abt__ut2_compared_products*/}
                  </div>
                  <div
                    className="ut2-wishlist-count"
                    id="abt__ut2_wishlist_count"
                  >
                    <Link
                      className="cm-tooltip ty-wishlist__a "
                      to="/user/wishlist"
                      rel="nofollow"
                      title="WishList"
                    >
                      <i className="ut2-icon-baseline-favorite-border" />
                    </Link>
                    {/*abt__ut2_wishlist_count*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid-row container-fluid-row-full-width top-menu-grid">
            <div className="row-fluid ">
              {" "}
              <div className="span16 ">
                <div className="row-fluid ">
                  {" "}
                  <div className="span11 top-left-grid ">
                    <div className="row-fluid ">
                      {" "}
                      <div className="span6 menu-grid ">
                        <div className="ty-dropdown-box  top-menu-grid-vetrtical">
                          <div
                            id="sw_dropdown_682"
                            className="ty-dropdown-box__title cm-combination "
                          >
                            <a>Shop By Category&nbsp;</a>
                            <i
                              class="fa fa-angle-down fa-dw"
                              style={{ color: "white", fontSize: "13px" }}
                            />
                          </div>

                          <div
                            id="dropdown_682"
                            className="cm-popup-box ty-dropdown-box__content hidden"
                          >
                            <div className="ut2-menu__inbox">
                              <ul className="ty-menu__items cm-responsive-menu">
                                <li className="ty-menu__item cm-menu-item-responsive first-lvl shop-by">
                                  <Link className="ty-menu__item-toggle ty-menu__menu-btn visible-phone cm-responsive-menu-toggle"></Link>
                                  <Link
                                    to="javascript:void(0)"
                                    className="ty-menu__item-link a-first-lvl"
                                  >
                                    <div className="menu-lvl-ctn ">
                                      <span>
                                        <bdi>Shop by</bdi>
                                      </span>
                                      <i className="icon-right-dir ut2-icon-outline-arrow_forward" />
                                    </div>
                                  </Link>
                                  <div
                                    className="ty-menu__submenu"
                                    id="topmenu_139_4258547604"
                                  >
                                    <ul
                                      className="ty-menu__submenu-items ty-menu__submenu-items-simple  cm-responsive-menu-submenu"
                                      style={{ minHeight: "475px" }}
                                    >
                                      <li className="ty-menu__submenu-item">
                                        <Link
                                          className="ty-menu__submenu-link "
                                          to="https://www.ABCnailsupply.com/new-products/"
                                        >
                                          <bdi>New Products</bdi>
                                        </Link>
                                      </li>
                                      <li className="ty-menu__submenu-item">
                                        <Link
                                          className="ty-menu__submenu-link "
                                          to="https://www.ABCnailsupply.com/special-sales/"
                                        >
                                          <bdi>Special Sales</bdi>
                                        </Link>
                                      </li>
                                      <li className="ty-menu__submenu-item">
                                        <Link
                                          className="ty-menu__submenu-link "
                                          to="https://www.ABCnailsupply.com/index.php?dispatch=products.bestsellers"
                                        >
                                          <bdi>Best Sellers</bdi>
                                        </Link>
                                      </li>
                                      <li className="ty-menu__submenu-item">
                                        <Link
                                          className="ty-menu__submenu-link "
                                          to="https://www.ABCnailsupply.com/promotions/"
                                        >
                                          <bdi>Best Deals</bdi>
                                        </Link>
                                      </li>
                                      <li className="ty-menu__submenu-item">
                                        <Link
                                          className="ty-menu__submenu-link "
                                          to="/collections"
                                        >
                                          <bdi>Collections</bdi>
                                        </Link>
                                      </li>
                                      <li className="ty-menu__submenu-item">
                                        <Link
                                          className="ty-menu__submenu-link "
                                          to="/holidays"
                                        >
                                          <bdi>Holidays</bdi>
                                        </Link>
                                      </li>
                                      <li className="ty-menu__submenu-item">
                                        <Link
                                          className="ty-menu__submenu-link "
                                          to="/clearance"
                                        >
                                          <bdi>Clearance</bdi>
                                        </Link>
                                      </li>
                                      <li className="ty-menu__submenu-item">
                                        <Link
                                          className="ty-menu__submenu-link "
                                          to="/free-items"
                                        >
                                          <bdi>Free Items</bdi>
                                        </Link>
                                      </li>
                                      <li className="ty-menu__submenu-item">
                                        <Link
                                          className="ty-menu__submenu-link "
                                          to="https://www.ABCnailsupply.com/brands/?filter_id=1"
                                        >
                                          <bdi>Brands</bdi>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>

                                {categories.map((c) => (
                                  <li className="ty-menu__item cm-menu-item-responsive first-lvl ty-menu-item__nailpolishes">
                                    <Link className="ty-menu__item-toggle ty-menu__menu-btn visible-phone cm-responsive-menu-toggle">
                                      <i className="ut2-icon-outline-expand_more" />
                                    </Link>
                                    <Link
                                      to={`/${c.slug}/product`}
                                      className="ty-menu__item-link a-first-lvl"
                                      onMouseMove={() => activateMenu(c._id)}
                                    >
                                      <div className="menu-lvl-ctn ">
                                        <span>
                                          <bdi>{c.name}</bdi>
                                        </span>
                                        <i className="icon-right-dir ut2-icon-outline-arrow_forward" />
                                      </div>
                                    </Link>

                                    <div
                                      className="ty-menu__submenu"
                                      id="topmenu_139_80377297"
                                    >
                                      <div
                                        className="ty-menu__submenu-items cm-responsive-menu-submenu dropdown-column-item  with-icon-items clearfix"
                                        style={{ minHeight: "475px" }}
                                      >
                                        <ul>
                                          {subs.length > 0 &&
                                            subs.map((s) => (
                                              <li className="ty-menu__submenu-col">
                                                <ul>
                                                  <li className="ut2-submenu-col second-lvl">
                                                    <div className="ty-menu__submenu-item-header ">
                                                      <Link
                                                        to={`/${c.slug}/${s.slug}/product`}
                                                        className="ty-menu__submenu-link"
                                                      >
                                                        <bdi>{s.name}</bdi>
                                                      </Link>
                                                    </div>
                                                    <Link className="ty-menu__item-toggle visible-phone cm-responsive-menu-toggle">
                                                      <i className="ut2-icon-outline-expand_more" />
                                                    </Link>

                                                    <div className="ty-menu__submenu ">
                                                      <ul className="ty-menu__submenu-list cm-responsive-menu-submenu">
                                                        {s.subSub.length > 0 &&
                                                          s.subSub.map((s1) => (
                                                            <li className="ty-menu__submenu-item">
                                                              <Link
                                                                to={`/${c.slug}/${s.slug}/${s1.slug}/product`}
                                                                className="ty-menu__submenu-link"
                                                              >
                                                                <bdi>
                                                                  {s1.name}
                                                                </bdi>
                                                              </Link>
                                                            </li>
                                                          ))}
                                                      </ul>
                                                    </div>
                                                  </li>
                                                </ul>
                                              </li>
                                            ))}
                                        </ul>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="span10 search-grid ">
                        <div className="top-search ">
                          <div className="ty-search-block">
                            <Search />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="span5 account-cart-grid ">
                    <div className="ut2-top-cart-content ty-float-right">
                      <div className="ty-dropdown-box" id="cart_status_684">
                        <div
                          id="sw_dropdown_684"
                          className="ty-dropdown-box__title cm-combination"
                        >
                          <Link to="#" className="ac-title ty-hand">
                            <i className="ut2-icon-outline-cart empty">
                              <span className="ty-minicart-count ty-hand empty">
                                {cart.length}
                              </span>
                            </i>
                            <span style={{ fontSize: "15px" }}>Cart&nbsp;</span>
                            <i
                              class="fa fa-angle-down fa-dw"
                              style={{ color: "white", fontSize: "13px" }}
                            />
                          </Link>
                        </div>
                        <div
                          id="dropdown_684"
                          className="cm-popup-box ty-dropdown-box__content hidden"
                        >
                          <div className="cm-cart-content cm-cart-content-thumb cm-cart-content-delete">
                            {cart.length ? (
                              <>
                                {cart.map((c) => (
                                  <div className="ty-cart-items">
                                    <ul className="ty-cart-items__list">
                                      <li className="ty-cart-items__list-item">
                                        <div className="ty-cart-items__list-item-image">
                                          <Image
                                            width={30}
                                            heigth={45}
                                            className="ty-pict lazyOwl cm-image abt-ut2-lazy-loaded"
                                            src={c.image[1].url}
                                            alt={c.name}
                                            title
                                            style={{ opacity: "1" }}
                                          />
                                        </div>
                                        <div className="ty-cart-items__list-item-desc">
                                          <a href="#">{c.name}</a>
                                          <p>
                                            <span>{c.count}</span>
                                            <span>&nbsp;x&nbsp;</span>
                                            <bdi>
                                              <span className="none">$</span>
                                              <span
                                                id="sec_price_407242202_684"
                                                className="none"
                                              >
                                                {c.price}
                                              </span>
                                            </bdi>
                                          </p>
                                        </div>
                                        <div className="ty-cart-items__list-item-tools cm-cart-item-delete">
                                          <div
                                            style={{ cursor: "pointer" }}
                                            className="cm-ajax cm-ajax-full-render"
                                            onClick={handleRemove(c)}
                                          >
                                            <i
                                              title="Remove"
                                              class="fa fa-remove"
                                            />
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                ))}
                              </>
                            ) : (
                              <div className="ty-cart-items">
                                <div className="ty-cart-items__empty ty-center">
                                  Cart is empty
                                </div>
                              </div>
                            )}
                            {cart.length ? (
                              <div className="cm-cart-buttons ty-cart-content__buttons buttons-container">
                                <div className="ty-float-right">
                                  <Link
                                    className="cm-dialog-auto-size ty-btn ty-btn__primary"
                                    to="/cart"
                                  >
                                    View Cart
                                  </Link>
                                </div>
                              </div>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                        {/*cart_status_684*/}
                      </div>
                    </div>
                    <div className="ut2-top-my-account ty-float-right">
                      <div className="ty-dropdown-box" id="account_info_685">
                        <div
                          id="sw_dropdown_55"
                          className="ty-dropdown-box__title cm-combination"
                        >
                          <div>
                            <Link className="ac-title">
                              <i className="ut2-icon-outline-account-circle" />
                              {!user && (
                                <>
                                  <span style={{ fontSize: "15px" }}>
                                    Account&nbsp;
                                  </span>
                                  <i
                                    class="fa fa-angle-down fa-dw"
                                    style={{ color: "white", fontSize: "13px" }}
                                  />
                                </>
                              )}
                              {user && (
                                <span style={{ fontSize: "15px" }}>
                                  {user.name}&nbsp;
                                  <i
                                    class="fa fa-angle-down fa-dw"
                                    style={{ color: "white", fontSize: "13px" }}
                                  />
                                </span>
                              )}
                            </Link>
                          </div>
                        </div>
                        <div
                          id="dropdown_55"
                          className="cm-popup-box ty-dropdown-box__content hidden"
                        >
                          <ul className="ty-account-info">
                            {user && user.role == 1 && (
                              <>
                                {" "}
                                <li class="ty-account-info__item  ty-account-info__name ty-dropdown-box__item">
                                  <i className="fa fa-user fa-fw" />
                                  Hello, <b>{user.name}</b>{" "}
                                </li>
                                <li className="ty-account-info__item ty-dropdown-box__item">
                                  <Link
                                    className="ty-account-info__a underlined"
                                    to="/my-account"
                                    rel="nofollow"
                                  >
                                    <i className="fa fa-bell fa-fw" /> My
                                    Account
                                  </Link>
                                </li>
                              </>
                            )}

                            {user && user.role == 0 && (
                              <>
                                <li class="ty-account-info__item  ty-account-info__name ty-dropdown-box__item">
                                  <i className="fa fa-user fa-fw" />
                                  Hello, <b>{user.name}</b>{" "}
                                </li>
                                <li className="ty-account-info__item ty-dropdown-box__item">
                                  <Link
                                    className="ty-account-info__a underlined"
                                    to="/admin"
                                    rel="nofollow"
                                  >
                                    <i className="fa fa-bell fa-fw" /> Admin
                                    Dashboard
                                  </Link>
                                </li>
                              </>
                            )}
                            {user && user.role == 1 && (
                              <>
                                <li className="ty-account-info__item ty-dropdown-box__item">
                                  <Link
                                    className="ty-account-info__a underlined"
                                    to="/user/orders"
                                    rel="nofollow"
                                  >
                                    <i className="fa fa-delicious fa-fw" />{" "}
                                    Orders
                                  </Link>
                                </li>
                                <li className="ty-account-info__item ty-dropdown-box__item">
                                  <Link
                                    className="ty-account-info__a underlined"
                                    to="/user/compare"
                                    rel="nofollow"
                                  >
                                    <i className="fa fa-bar-chart fa-fw" />{" "}
                                    Comparison list
                                  </Link>
                                </li>
                                <li className="ty-account-info__item ty-dropdown-box__item">
                                  <Link
                                    className="ty-account-info__a"
                                    to="/user/wishlist"
                                    rel="nofollow"
                                  >
                                    <i className="fa fa-star fa-fw" /> Wish list
                                  </Link>
                                </li>
                              </>
                            )}
                          </ul>

                          <div
                            className="ty-account-info__orders updates-wrapper track-orders"
                            id="track_orders_block_685"
                          >
                            <div className="ty-account-info__orders-txt">
                              Track my order(s)
                            </div>
                            <div className="ty-account-info__orders-input ty-control-group ty-input-append">
                              <label
                                htmlFor="track_order_item685"
                                className="cm-required hidden"
                              >
                                Track my order(s)
                              </label>
                              <input
                                type="text"
                                size={20}
                                className="ty-input-text cm-hint"
                                id="track_order_item685"
                                name="track_data"
                                defaultValue="Order ID/Email"
                              />
                              <button
                                title="Go"
                                className="ty-btn-go"
                                type="submit"
                              >
                                <i
                                  class="fa fa-play fa-dw"
                                  style={{ fontSize: "13px" }}
                                />
                              </button>
                              <input
                                type="hidden"
                                name="dispatch"
                                defaultValue="orders.track_request"
                              />
                            </div>

                            {/*track_orders_block_685*/}
                          </div>
                          <div className="ty-account-info__buttons buttons-container">
                            {!user && (
                              <>
                                <Link
                                  to="/login"
                                  data-ca-target-id="login_block685"
                                  className="ty-btn ty-btn__secondary"
                                  rel="nofollow"
                                >
                                  <i className="fa fa-sign-in" />
                                  &nbsp;Sign in
                                </Link>
                                <Link
                                  to="/register"
                                  rel="nofollow"
                                  className="ty-btn ty-btn__primary"
                                >
                                  <i className="fa fa-user-plus" />
                                  &nbsp;Register
                                </Link>
                              </>
                            )}
                            {user && (
                              <div
                                onClick={signout}
                                rel="nofollow"
                                class="ty-btn ty-btn__primary"
                              >
                                <i className="fa fa-sign-out" />
                                &nbsp;Sign out
                              </div>
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
        </div>
      </div>
    </>
  );
};
export default Header;
