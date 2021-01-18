import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Image, Tabs, Tooltip, message, Spin } from "antd";
import { getDetailProduct, getRecentlyView } from "../../functions/product";
import { setCookie, getCookie } from "../../functions/auth";
import renderHTML from "react-render-html";
import ProductCardRelate from "../../components/cards/ProductCardRelate";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { LoadingOutlined } from "@ant-design/icons";
import { addToWishlist } from "../../functions/user";
import { Helmet } from "react-helmet";
import Spinner from "../../components/Spinner";
import Loader from "../../components/Loader";

const ProductDetailHome = (props) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const [category, setCategory] = useState({});
  const [sub, setSub] = useState({});
  const [subSub, setSubSub] = useState({});
  const [recentProducts, setRecentProducts] = useState([]);
  const { TabPane } = Tabs;
  const { user, cart, load, spin } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const [tooltip, setTooltip] = useState("Click to add this product");

  const loadDetailProduct = (pslug) => {
    dispatch({
      type: "SET_SPIN",
      payload: true,
    });
    getDetailProduct(pslug).then((data) => {
      setProduct(data.product);
      setContent(data.product.description);
      setCategory(data.product.category);
      setSub(data.product.sub);
      setSubSub(data.product.subSub);
      // var date = new Date();
      var currentProductId = data.product._id;
      var howManyItems = 5;
      const delayed = setTimeout(() => {
        dispatch({
          type: "SET_SPIN",
          payload: false,
        });
      }, 200);
      // currentValues=[];
      if (currentProductId && !getCookie("lastVisited")) {
        setCookie("lastVisited", data.product._id);
      } else {
        var currentValues = getCookie("lastVisited");

        if (!currentValues.includes(currentProductId)) {
          currentValues += "-" + currentProductId;
        }
        setCookie("lastVisited", currentValues);
      }
    });
  };

  const loadRecentlyView = (recentlyProduct, pslug1) => {
    getRecentlyView(recentlyProduct, pslug1).then((res) => {
      setRecentProducts(res.data);
    });
  };

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
      dispatch({
        type: "SET_LOADING",
        payload: true,
      });

      const delayed = setTimeout(() => {
        dispatch({
          type: "SET_VISIBLE",
          payload: true,
        });
        dispatch({
          type: "SET_LOADING",
          payload: false,
        });
        message.success("This product is added to cart successfully");
        setTooltip("You already added this product.");
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

  useEffect(() => {
    const pslug1 = props.match.params.pslug;
    if (getCookie("lastVisited")) {
      const recentlyProduct = getCookie("lastVisited").split("-").slice(-5);
      loadRecentlyView(recentlyProduct, pslug1);
    }

    loadDetailProduct(pslug1);
  }, []);

  return (
    <>
      <Helmet>
        <title>{product.name}</title>
      </Helmet>

      <div className="tygh-content clearfix">
        <div className="container-fluid  content-grid">
          <div className="container-fluid-row">
            <div className="row-fluid ">
              {" "}
              <div className="span16 main-content-grid ut2-bottom">
                <div className="ut2-pb ty-product-block ty-product-detail">
                  <h1 className="ut2-pb__title" style={{ fontSize: "25px" }}>
                    <bdi>{product.name}</bdi>
                  </h1>
                  <div className="ut2-breadcrumbs__wrapper">
                    <div id="breadcrumbs_11">
                      <div className="ty-breadcrumbs clearfix">
                        <Link to="/" className="ty-breadcrumbs__a">
                          <bdi>Home</bdi>
                        </Link>
                        <span className="ty-breadcrumbs__slash">/</span>
                        <Link
                          to={`/${category.slug}/product`}
                          className="ty-breadcrumbs__a"
                        >
                          <bdi>{category.name}</bdi>
                        </Link>
                        <span className="ty-breadcrumbs__slash">/</span>
                        <Link
                          to={`/${category.slug}/${sub.slug}/product`}
                          className="ty-breadcrumbs__a"
                        >
                          <bdi>{sub.name}</bdi>
                        </Link>
                        <span className="ty-breadcrumbs__slash">/</span>
                        <Link
                          to={`/${category.slug}/${sub.slug}/${subSub.slug}/product`}
                          className="ty-breadcrumbs__a"
                        >
                          <bdi>{subSub.name}</bdi>
                        </Link>
                        <span className="ty-breadcrumbs__slash">/</span>
                        <span className="ty-breadcrumbs__current">
                          <bdi>{product.name}</bdi>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="ut2-pb__wrapper clearfix">
                    <div className="ut2-pb__img-wrapper ty-product-block__img-wrapper">
                      <div
                        className="ut2-pb__img cm-reload-9060"
                        data-ca-previewer="true"
                        id="product_images_9060_update"
                      >
                        <div
                          className="ab_vg-images-wrapper clearfix"
                          data-ca-previewer="true"
                        >
                          <div style={{ position: "relative", maxHeight: 420 }}>
                            <input
                              type="hidden"
                              name="ab__stickers_output_side"
                              defaultValue="L"
                            />
                            <div
                              id="product_images_90606002011cee7a3"
                              className="ty-product-img cm-preview-wrapper ab-vertical owl-carousel owl-theme"
                              style={{ opacity: 1, display: "block" }}
                            >
                              <div className="owl-wrapper-outer">
                                <div
                                  className="owl-wrapper"
                                  style={{
                                    width: 1150,
                                    left: 0,
                                    display: "block",
                                  }}
                                >
                                  <div
                                    className="owl-item active"
                                    style={{ width: 575 }}
                                  >
                                    {product.image && (
                                      <>
                                        {spin ? (
                                          <Loader />
                                        ) : (
                                          <Image
                                            src={product.image[1].url}
                                            alt={product.name}
                                            title
                                            style={{ opacity: 1 }}
                                          />
                                        )}
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="ut2-pb__right"
                      style={{ borderRadius: "16px" }}
                    >
                      {spin ? (
                        <Loader />
                      ) : (
                        <>
                          {" "}
                          <div className="top-product-layer">
                            <div className="ut2-pb__rating">
                              <div className="ty-discussion__rating-wrapper">
                                <span className="ty-nowrap no-rating">
                                  <i className="ty-icon-star-empty" />
                                  <i className="ty-icon-star-empty" />
                                  <i className="ty-icon-star-empty" />
                                  <i className="ty-icon-star-empty" />
                                  <i className="ty-icon-star-empty" />
                                </span>
                                <a
                                  id="opener_discussion_login_form_new_post_main_info_title_9060"
                                  className="cm-dialog-opener cm-dialog-auto-size ty-discussion__review-write"
                                  data-ca-target-id="new_discussion_post_login_form_popup"
                                  rel="nofollow"
                                  title="Sign in"
                                  href="/"
                                >
                                  Write a review
                                </a>
                              </div>
                            </div>
                            <div className="ut2-pb__sku">
                              <div
                                className="ty-control-group ty-sku-item cm-hidden-wrapper"
                                id="sku_update_9060"
                              >
                                <input
                                  type="hidden"
                                  name="appearance[show_sku]"
                                  defaultValue={1}
                                />
                                <label
                                  className="ty-control-group__label"
                                  id="sku_9060"
                                >
                                  Item #:
                                </label>
                                <span
                                  className="ty-control-group__item cm-reload-9060"
                                  id="product_code_9060"
                                >
                                  {product.item}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="cols-wrap">
                            <div className="ab__deal_of_the_day">
                              <div className>
                                <div className="action-title">
                                  Color Club Nail Lacquers Sale
                                </div>
                                <div className="actions-link">
                                  <a href="/" title target="_blank">
                                    <span>Promotion details</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-left">
                              <div className="prices-container price-wrap">
                                {product.discountPrice ? (
                                  <div className="ty-product-prices">
                                    <span
                                      className="cm-reload-9060"
                                      id="old_price_update_9060"
                                    >
                                      <span
                                        className="ty-list-price ty-nowrap"
                                        id="line_old_price_9060"
                                      >
                                        <span className="ty-strike">
                                          <bdi>
                                            <span className="ty-list-price ty-nowrap">
                                              $
                                            </span>
                                            <span
                                              id="sec_old_price_9060"
                                              className="ty-list-price ty-nowrap"
                                            >
                                              {product.price}
                                            </span>
                                          </bdi>
                                        </span>
                                      </span>
                                    </span>
                                    <div className="ut2-pb__price-actual">
                                      <span
                                        className="cm-reload-9060 ty-price-update"
                                        id="price_update_9060"
                                      >
                                        <span
                                          className="ty-price"
                                          id="line_discounted_price_9060"
                                        >
                                          <bdi>
                                            <span className="ty-price-num">
                                              $
                                            </span>
                                            <span
                                              id="sec_discounted_price_9060"
                                              className="ty-price-num"
                                            >
                                              {product.discountPrice}
                                            </span>
                                          </bdi>
                                        </span>
                                      </span>
                                    </div>
                                    <span
                                      className="cm-reload-9060"
                                      id="line_discount_update_9060"
                                    >
                                      <span
                                        className="ty-list-price ty-save-price ty-nowrap"
                                        id="line_discount_value_9060"
                                      >
                                        You save:{" "}
                                        <bdi>
                                          <span className="ty-list-price ty-nowrap">
                                            $
                                          </span>
                                          <span
                                            id="sec_discount_value_9060"
                                            className="ty-list-price ty-nowrap"
                                          >
                                            {(
                                              product.price -
                                              product.discountPrice
                                            ).toFixed(2)}
                                          </span>
                                        </bdi>
                                      </span>
                                    </span>
                                  </div>
                                ) : (
                                  <div className="ty-product-prices">
                                    <div className="ut2-pb__price-actual">
                                      <span
                                        className="cm-reload-9060 ty-price-update"
                                        id="price_update_9060"
                                      >
                                        <span
                                          className="ty-price"
                                          id="line_discounted_price_9060"
                                        >
                                          <bdi>
                                            <span className="ty-price-num">
                                              $
                                            </span>
                                            <span
                                              id="sec_discounted_price_9060"
                                              className="ty-price-num"
                                            >
                                              {product.price}
                                            </span>
                                          </bdi>
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div
                                className="cm-reload-9060 stock-wrap"
                                id="product_amount_update_9060"
                              >
                                <input
                                  type="hidden"
                                  name="appearance[show_product_amount]"
                                  defaultValue={1}
                                />
                                <div className="ty-control-group product-list-field">
                                  <span
                                    className="ty-qty-in-stock ty-control-group__item"
                                    id="in_stock_info_9060"
                                  >
                                    {product.quantity > 0 ? (
                                      <>
                                        <i className="ty-icon-ok" />
                                        In stock
                                      </>
                                    ) : (
                                      <>
                                        <i className="ty-icon-ok" />
                                        Out of stock
                                      </>
                                    )}
                                  </span>
                                </div>
                              </div>

                              <div className="ut2-pb__advanced-option clearfix">
                                <div
                                  className="cm-reload-9060"
                                  id="advanced_options_update_9060"
                                ></div>
                              </div>
                              <div className="ut2-qty__wrap  ut2-pb__field-group">
                                <div
                                  className="cm-reload-9060"
                                  id="qty_update_9060"
                                >
                                  <div
                                    className="ty-qty clearfix changer"
                                    id="qty_9060"
                                  >
                                    <label
                                      className="ty-control-group__label"
                                      htmlFor="qty_count_9060"
                                    >
                                      Quantity:
                                    </label>{" "}
                                    <div className="ty-center ty-value-changer cm-value-changer">
                                      <a className="cm-increase ty-value-changer__increase">
                                        +
                                      </a>
                                      <input
                                        type="text"
                                        size={5}
                                        className="ty-value-changer__input cm-amount"
                                        id="qty_count_9060"
                                        name="product_data[9060][amount]"
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
                              <div className="ut2-pb__button ty-product-block__button">
                                <div
                                  className="cm-reload-9060 "
                                  id="add_to_cart_update_9060"
                                >
                                  <Tooltip title={tooltip}>
                                    <a
                                      className="ty-btn__primary ty-btn__add-to-cart cm-ajax cm-ajax-full-render ty-btn"
                                      href="/cart"
                                      onClick={() => handleAddToCart(product)}
                                    >
                                      <span>
                                        <i className="fa fa-shopping-cart fa-fw" />
                                        <span>Add to cart</span>
                                      </span>
                                    </a>
                                  </Tooltip>
                                  <a
                                    className="ut2-add-to-wish label cm-submit"
                                    onClick={handleAddToWishlist}
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "normal",
                                    }}
                                  >
                                    <i className="ut2-icon-baseline-favorite" />
                                    Add to wish list
                                  </a>
                                  <a
                                    className="ut2-add-to-compare cm-ajax cm-ajax-full-render label cm-tooltip"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "normal",
                                    }}
                                  >
                                    <i className="ut2-icon-baseline-equalizer" />{" "}
                                    Compare{" "}
                                  </a>
                                  {/*add_to_cart_update_9060*/}
                                </div>
                              </div>
                            </div>
                            <div className="col-right">
                              <div className="brand ut2-pb__product-brand">
                                <div className="ty-features-list"></div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <Tabs type="card" defaultActiveKey="1">
                    <TabPane
                      tab={
                        <span>
                          <i className="fa fa-files-o fa-fw" /> Description
                        </span>
                      }
                      key="1"
                    >
                      <div
                        style={{
                          borderStyle: "solid",
                          padding: "15px",
                          borderRadius: "10px",
                          borderColor: "#F0F0F0",
                        }}
                      >
                        {renderHTML(content)}
                      </div>
                    </TabPane>
                    <TabPane
                      tab={
                        <span>
                          <i className="fa fa-star-o fa-fw" /> Specification
                        </span>
                      }
                      key="2"
                    >
                      <div
                        id="content_description"
                        className="ty-wysiwyg-content content-description"
                      ></div>
                      <div
                        id="content_features"
                        className="ty-wysiwyg-content content-features"
                        data-ab-smc-tab-hide="N|N|Y"
                        data-ab-smc-more="More"
                        data-ab-smc-less="Less"
                        data-ab-smc-height="{250}"
                        data-ab-smc-tab-override-h="N"
                      >
                        <div className="ty-product-feature">
                          <span className="ty-product-feature__label">
                            Brand:
                          </span>
                          <div className="ty-product-feature__value">
                            {product.quantity}
                          </div>
                        </div>
                        <div className="ty-product-feature">
                          <span className="ty-product-feature__label">
                            Color:
                          </span>
                          <div className="ty-product-feature__value">
                            <ul className="ty-product-feature__multiple">
                              <li className="ty-product-feature__multiple-item">
                                <span className="ty-compare-checkbox">
                                  <i className="ty-compare-checkbox__icon ty-icon-ok" />
                                </span>
                                <span className="ty-product-feature__prefix" />
                                Orange
                                <span className="ty-product-feature__suffix" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="ty-product-feature">
                          <span className="ty-product-feature__label">
                            Shade:
                          </span>
                          <div className="ty-product-feature__value">
                            <ul className="ty-product-feature__multiple">
                              <li className="ty-product-feature__multiple-item">
                                <span className="ty-compare-checkbox">
                                  <i className="ty-compare-checkbox__icon ty-icon-ok" />
                                </span>
                                <span className="ty-product-feature__prefix" />
                                Cream
                                <span className="ty-product-feature__suffix" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="ty-product-feature">
                          <span className="ty-product-feature__label">
                            Size:
                          </span>
                          <div className="ty-product-feature__value">
                            <ul className="ty-product-feature__multiple">
                              <li className="ty-product-feature__multiple-item">
                                <span className="ty-compare-checkbox">
                                  <i className="ty-compare-checkbox__icon ty-icon-ok" />
                                </span>
                                <span className="ty-product-feature__prefix" />
                                0.5oz
                                <span className="ty-product-feature__suffix" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane
                      tab={
                        <span>
                          <i className="fa fa-comments fa-fw" /> Reviews
                        </span>
                      }
                      key="3"
                    >
                      Write A Review
                      <img src="../../assets/img/comment.png" />
                    </TabPane>
                  </Tabs>
                </div>
                <div className="product-details"></div>
              </div>
            </div>
          </div>

          <div className="container-fluid-row container-fluid-row-full-width new-popular-special">
            <div className="row-fluid ">
              <div className="panel-body">
                {/* Nav tabs */}
                <ul className="nav nav-pills">
                  <li className="active">
                    <a
                      href="#home-pills"
                      data-toggle="tab"
                      aria-expanded="true"
                    >
                      You Recently Viewed
                    </a>
                  </li>
                  <li className>
                    <a
                      href="#profile-pills"
                      data-toggle="tab"
                      aria-expanded="false"
                    >
                      Related Products
                    </a>
                  </li>
                </ul>
                {/* Tab panes */}
                <div className="tab-content">
                  <div className="tab-pane fade active in" id="home-pills">
                    {getCookie("lastVisited") ? (
                      <>
                        {recentProducts.map((c) => (
                          <ProductCardRelate sanpham={c} />
                        ))}
                      </>
                    ) : (
                      <h4>No currently products found.</h4>
                    )}
                  </div>
                  <div className="tab-pane fade" id="profile-pills"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailHome;
