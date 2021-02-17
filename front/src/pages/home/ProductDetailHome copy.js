import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Image,
  Tabs,
  Tooltip,
  message,
  Spin,
  Collapse,
  Progress,
  Modal,
} from "antd";
import { getDetailProduct, getRecentlyView } from "../../functions/product";
import {
  getReviewsBasedOnProduct,
  getReviewsPercent,
} from "../../functions/review";
import { setCookie, getCookie } from "../../functions/auth";
import renderHTML from "react-render-html";
import ProductCardBrowsingHistory from "../../components/cards/ProductCardBrowsingHistory";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { LoadingOutlined } from "@ant-design/icons";
import { addToWishlist } from "../../functions/user";
import { Helmet } from "react-helmet";
import Spinner from "../../components/Spinner";
import Loader from "../../components/Loader";
import ReviewProductCard from "../../components/cards/ReviewProductCard";
import { Editor } from "@tinymce/tinymce-react";
import { createReview } from "../../functions/review";
import { toast } from "react-toastify";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const ProductDetailHome = (props) => {
  const [images, setImages] = useState(null);
  const [percent, setPercent] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    onePercent: "",
    twoPercent: "",
    threePercent: "",
    fourPercent: "",
    fivePercent: "",
  });
  const [avg, setAvg] = useState(0);
  const [qty, setQty] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [verifiedPurchase, setVerifiedPurchase] = useState([]);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [content1, setContent1] = useState("");
  const [category, setCategory] = useState({});
  const [sub, setSub] = useState({});
  const [subSub, setSubSub] = useState({});
  const [recentProducts, setRecentProducts] = useState([]);
  const { TabPane } = Tabs;
  const { Panel } = Collapse;
  const { user, cart, load, spin } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const [tooltip, setTooltip] = useState("Click to add this product");
  const initialState = {
    rating: "",
    content: "",
    title: "",
  };
  const [values, setValues] = useState(initialState);
  const { content, title, rating } = values;
  const [visible, setVisible] = useState(false);

  const handleChange = (name) => (e) => {
    const value = name === "content" ? e.target.getContent() : e.target.value;
    setValues({ ...values, [name]: value });
  };

  const loadDetailProduct = () => {
    dispatch({
      type: "SET_SPIN",
      payload: true,
    });
    getDetailProduct(props.match.params.pslug).then((data) => {
      // console.log("data.product", data.product);
      setProduct(data.product);
      setContent1(data.product.description);
      setCategory(data.product.category);
      setSub(data.product.sub);
      setSubSub(data.product.subSub);
      setVerifiedPurchase(data.product.verifiedPurchase);
      setImages(
        data.product.image.map((i) => ({
          original: `${i.url}`,
          thumbnail: `${i.url}`,
        }))
      );
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

  const handleAddToCart = (item, qty) => {
    // create cart array
    let cart = [];
    if (typeof window !== "undefined") {
      // if cart is in local storage GET it
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // push new product to cart

      // cart.map((item, i) => {
      //   if (item._id == p._id) {
      //     cart[i].count++;
      //   }
      // });
      // remove duplicates

      const existItem = cart.find((x) => x.product._id === item._id);

      if (existItem) {
        cart.map((x, index) => {
          if (x.product._id === existItem.product._id) {
            cart.splice(index, 1);
            cart.push({
              product: item,
              count: parseInt(qty),
            });
          }
        });
      } else {
        cart.push({
          product: item,
          count: parseInt(qty),
        });
      }

      // save to local storage
      // console.log('unique', unique)
      localStorage.setItem("cart", JSON.stringify(cart));
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
        payload: cart,
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

  const loadReviewsBasedOnProduct = () => {
    getReviewsBasedOnProduct(props.match.params.pslug).then((res) => {
      setReviews(res.data);
      // console.log("getReviewsBasedOnProduct", res.data);
    });
  };
  const loadReviewsPercent = () => {
    getReviewsPercent(props.match.params.pslug).then((res) => {
      // console.log("getReviewsPercent", res.data);
      setPercent({
        one: res.data.one,
        two: res.data.two,
        three: res.data.three,
        four: res.data.four,
        five: res.data.five,
        onePercent: res.data.onePercent,
        twoPercent: res.data.twoPercent,
        threePercent: res.data.threePercent,
        fourPercent: res.data.fourPercent,
        fivePercent: res.data.fivePercent,
      });
    });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    createReview(values, product._id, user.token)
      .then((data) => {
        setValues({
          ...values,
          content: "",
          title: "",
          rating: "",
        });
        loadReviewsBasedOnProduct();
        loadReviewsPercent();
        loadDetailProduct();
      })
      .catch((err) => {
        // console.log("error", err.response.data);
        // toast.error(err.response.data);
        toast.error(err.response.data.error);
      });
  };

  const needLogin = () => {
    setVisible(true);
  };
  useEffect(() => {
    const pslug1 = props.match.params.pslug;
    if (getCookie("lastVisited")) {
      const recentlyProduct = getCookie("lastVisited").split("-");

      if (recentlyProduct.length > 5) {
        recentlyProduct.shift();
      }
      setCookie("lastVisited", recentlyProduct.join("-"));
      loadRecentlyView(recentlyProduct, pslug1);
    }
    loadDetailProduct();
    loadReviewsBasedOnProduct();
    loadReviewsPercent();
  }, []);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>{product.name}</title>
      </Helmet>
      <Modal
        title="Login Require"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={500}
      >
        <p>
          You need to <Link to="/login">login</Link> or{" "}
          <Link to="/register">register</Link>
        </p>
      </Modal>
      <div className="tygh-content clearfix">
        <div className="container-fluid  content-grid">
          <div className="container-fluid-row">
            <div className="row-fluid ">
              {" "}
              <div
                className="span16 main-content-grid ut2-bottom"
                style={{ paddingBottom: "0" }}
              >
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
                      >
                        <div
                          className="ab_vg-images-wrapper clearfix"
                          data-ca-previewer="true"
                        >
                          <div style={{ position: "relative", maxHeight: 420 }}>
                            <div
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
                                    style={{ width: 400 }}
                                  >
                                    {product.image && (
                                      <>
                                        {spin ? (
                                          <Loader />
                                        ) : (
                                          <ImageGallery
                                            items={images}
                                            showGalleryPlayButton={false}
                                            showNav={false}
                                            lazyLoad={true}
                                            showBullets={false}
                                            showThumbnails={true}
                                            showPlayButton={false}
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
                      style={{ borderRadius: "3px" }}
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
                                  {product.avg >= 1 ? (
                                    <span>
                                      <span className="icon is-small has-text-warning">
                                        <i
                                          className={
                                            product.avg >= 1
                                              ? "fa fa-star star-review"
                                              : "fa fa-star-o star-review"
                                          }
                                        />
                                      </span>
                                      <span className="icon is-small has-text-warning">
                                        <i
                                          className={
                                            product.avg >= 2
                                              ? "fa fa-star star-review"
                                              : product.avg >= 1.5
                                              ? "fa fa-star-half-o star-review"
                                              : "fa fa-star-o star-review"
                                          }
                                        />
                                      </span>
                                      <span className="icon is-small has-text-warning">
                                        <i
                                          className={
                                            product.avg >= 3
                                              ? "fa fa-star star-review"
                                              : product.avg >= 2.5
                                              ? "fa fa-star-half-o star-review"
                                              : "fa fa-star-o star-review"
                                          }
                                        />
                                      </span>
                                      <span className="icon is-small has-text-warning">
                                        <i
                                          className={
                                            product.avg >= 4
                                              ? "fa fa-star star-review"
                                              : product.avg >= 3.5
                                              ? "fa fa-star-half-o star-review"
                                              : "fa fa-star-o star-review"
                                          }
                                        />
                                      </span>
                                      <span className="icon is-small has-text-warning">
                                        <i
                                          className={
                                            product.avg == 5
                                              ? "fa fa-star star-review"
                                              : product.avg >= 4.5
                                              ? "fa fa-star-half-o star-review"
                                              : "fa fa-star-o star-review"
                                          }
                                        />
                                      </span>
                                    </span>
                                  ) : (
                                    <span>
                                      <span className="icon is-small has-text-warning">
                                        <i className="fa fa-star-o star-review" />
                                      </span>
                                      <span className="icon is-small has-text-warning">
                                        <i className="fa fa-star-o star-review" />
                                      </span>
                                      <span className="icon is-small has-text-warning">
                                        <i className="fa fa-star-o star-review" />
                                      </span>
                                      <span className="icon is-small has-text-warning">
                                        <i className="fa fa-star-o star-review" />
                                      </span>
                                      <span className="icon is-small has-text-warning">
                                        <i className="fa fa-star-o star-review" />
                                      </span>
                                    </span>
                                  )}
                                </span>
                                <b>({reviews.length})</b>&nbsp;&nbsp;
                                <a
                                  className="cm-dialog-opener cm-dialog-auto-size ty-discussion__review-write"
                                  href="/"
                                >
                                  Write a review
                                </a>
                              </div>
                            </div>
                            <div className="ut2-pb__sku">
                              <div className="ty-control-group ty-sku-item cm-hidden-wrapper">
                                <label
                                  className="ty-control-group__label"
                                  id="sku_9060"
                                >
                                  Item #:
                                </label>
                                <span className="ty-control-group__item cm-reload-9060">
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
                                    <span className="cm-reload-9060">
                                      <span className="ty-list-price ty-nowrap">
                                        <span className="ty-strike">
                                          <bdi>
                                            <span className="ty-list-price ty-nowrap">
                                              $
                                            </span>
                                            <span className="ty-list-price ty-nowrap">
                                              {product.price}
                                            </span>
                                          </bdi>
                                        </span>
                                      </span>
                                    </span>
                                    <div className="ut2-pb__price-actual">
                                      <span className="cm-reload-9060 ty-price-update">
                                        <span
                                          className="ty-price"
                                          id="line_discounted_price_9060"
                                        >
                                          <bdi>
                                            <span className="ty-price-num">
                                              $
                                            </span>
                                            <span className="ty-price-num">
                                              {product.discountPrice}
                                            </span>
                                          </bdi>
                                        </span>
                                      </span>
                                    </div>
                                    <span className="cm-reload-9060">
                                      <span className="ty-list-price ty-save-price ty-nowrap">
                                        You save:{" "}
                                        <bdi>
                                          <span className="ty-list-price ty-nowrap">
                                            $
                                          </span>
                                          <span className="ty-list-price ty-nowrap">
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
                                      <span className="cm-reload-9060 ty-price-update">
                                        <span className="ty-price">
                                          <bdi>
                                            <span className="ty-price-num">
                                              $
                                            </span>
                                            <span className="ty-price-num">
                                              {product.price}
                                            </span>
                                          </bdi>
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className="cm-reload-9060 stock-wrap">
                                <div className="ty-control-group product-list-field">
                                  <span className="ty-qty-in-stock ty-control-group__item">
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
                                <div className="cm-reload-9060"></div>
                              </div>
                              <div className="ut2-qty__wrap  ut2-pb__field-group">
                                <div className="cm-reload-9060">
                                  <div className="ty-qty clearfix changer">
                                    <label
                                      className="ty-control-group__label"
                                      htmlFor="qty_count_9060"
                                    >
                                      Quantity:
                                    </label>{" "}
                                    <div className="ty-center ty-value-changer cm-value-changer">
                                      <select
                                        name="qty"
                                        className="ty-value-changer__input cm-amount"
                                        onChange={(e) => {
                                          setQty(e.target.value);
                                        }}
                                        value={qty}
                                      >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="ut2-pb__button ty-product-block__button">
                                <div className="cm-reload-9060 ">
                                  <Tooltip title={tooltip}>
                                    <a
                                      className="ty-btn__primary ty-btn__add-to-cart cm-ajax cm-ajax-full-render ty-btn"
                                      href="/cart"
                                      onClick={() =>
                                        handleAddToCart(product, qty)
                                      }
                                    >
                                      <span>
                                        <i className="fa fa-shopping-cart fa-fw" />
                                        <span>Add to cart</span>
                                      </span>
                                    </a>
                                  </Tooltip>
                                  {user ? (
                                    <>
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
                                    </>
                                  ) : (
                                    <>
                                      <a
                                        className="ut2-add-to-wish label cm-submit"
                                        onClick={needLogin}
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
                                        onClick={needLogin}
                                        style={{
                                          fontSize: "12px",
                                          fontWeight: "normal",
                                        }}
                                      >
                                        <i className="ut2-icon-baseline-equalizer" />{" "}
                                        Compare{" "}
                                      </a>
                                    </>
                                  )}
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
                    <div className="rightInfo phone">
                      <ul className="policy ">
                        <li className="inpr">
                          <span>
                            This product includes:{" "}
                            <a className="stdImg">Box, Product, Warranty </a>
                          </span>
                        </li>
                        <li className="wrpr">
                          <span>
                            <b>Returns:</b>&nbsp;100% Satisfaction Guarantee -
                            If for some reason you are not satisfied with your
                            purchase, you may return it for refund.&nbsp;
                            <a>Details</a>
                          </span>
                        </li>
                        <li className="chpr">
                          <b>Exchanges:</b>&nbsp; If you received an item and
                          need to exchange it for a different item, you need to
                          follow the guidelines &nbsp;<a>Details</a>
                        </li>
                      </ul>
                      <div className="promotion-bonus" data-scenario={20201210}>
                        <b>Payment</b>
                        <ul>
                          <li>
                            <div className="promo_BHX">
                              <div className="l2">
                                <span>We Accept Credit Cards.</span>
                                <div className="content">
                                  <p className="first-pap">
                                    <img
                                      src="https://www.happynailsupply.com/images/companies/1/pages/payment/cards.jpg"
                                      width="180px"
                                    />
                                  </p>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n        .promotion-bonus {border:1px solid #ddd;border-radius:4px;clear:both;margin-bottom:10px;}\n        .promotion-bonus>b {\n            display: block;\n            overflow: hidden;\n            font-size: 15px;\n            color: #333;\n            padding: 10px 15px 8px 15px;\n            text-transform: uppercase;\n            background-color: #f6f6f6;\n            border-bottom: 1px solid #ddd;\n        }\n        .promotion-bonus>b>i {\n            font-style: normal;\n            font-weight: normal;\n            font-size: 12px;\n            color: #666;\n            display: block;\n            text-transform: none;\n            padding-top: 1px;\n        }\n        .promotion-bonus>ul {padding:10px;}\n        .promotion-bonus>ul>li {position:relative;padding-left:20px;margin-bottom:10px;}\n        .promotion-bonus>ul>li:last-child {margin-bottom:0;}\n        .promotion-bonus>ul>li>i {position:absolute;width:18px;height:18px;background-color:#4A90E2;line-height:19px;color:#fff;text-align:center;left:0;top:0;font-style:normal;border-radius:50%;font-size:11px;}\n        .promotion-bonus>b>i {display:inline-block;vertical-align:bottom;}\n        .promotion-bonus>ul>li>span {line-height:1.4;display:block;}\n        .promotion-bonus>ul>li.last {color:#4A90E2;cursor:pointer;text-align:center;padding-left:0;}\n        .promotion-bonus>ul>li.last:after {\n            content:'';\n            border-top: 1px solid #4A90E2 !important;\n            border-right: 1px solid #4A90E2;\n            transform: rotate(140deg) skew(12deg);\n            width: 6px;\n            height: 6px;\n            margin-bottom: 6px;\n            border-left: none;\n            display: inline-block;\n            vertical-align: middle;\n            margin-left: 8px;\n        }\n        .promotion-bonus>ul>li>div.promo_BHX {border:none;margin:0;padding:0;}\n        .promotion-bonus>ul>li>.promo_BHX .l1 {display:none;}\n        .promotion-bonus>ul>li>.promo_BHX .l2 {width:auto;float:left;}\n        .promotion-bonus>ul>li>i {\n            background: url(/Content/desktop/images/V4/game/check@2x.png);\n            width: 14px;\n            height: 14px;\n            background-size: 14px 14px;\n            text-indent:-9999px;\n            top:3px;\n        }\n\n        .rightInfo.fashion .promotion-bonus {margin-left:15px;margin-right:5px;}\n\n        @media screen and (max-width:640px){\n            .promotion-bonus {margin:10px 10px 0 10px;}\n            .promotion-bonus>b>i {margin-left:5px;}\n        }\n    ",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="container-fluid-row container-fluid-row-full-width new-popular-special">
                    <div className="row-fluid ">
                      <div
                        className="panel-body"
                        style={{ paddingTop: "70px" }}
                      >
                        {/* Nav tabs */}
                        <ul className="nav nav-pills">
                          <li className="active">
                            <a
                              href="#home-pills"
                              data-toggle="tab"
                              aria-expanded="true"
                            >
                              Browsing History
                            </a>
                          </li>
                        </ul>

                        <div className="tab-content">
                          <div
                            className="tab-pane fade active in"
                            id="home-pills"
                          >
                            {recentProducts.length > 0 ? (
                              <>
                                {recentProducts.map((c) => (
                                  <ProductCardBrowsingHistory sanpham={c} />
                                ))}
                              </>
                            ) : (
                              <h5>No recently products found.</h5>
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
          <div className="container-fluid-row container-fluid-row-full-width new-popular-special">
            <div className="row-fluid ">
              <div class="box_content">
                <aside class="left_content">
                  <div className="boxArticle">
                    <article className="area_article ">
                      <h2>Description</h2>
                      {content1 ? (
                        <>{renderHTML(content1)}</>
                      ) : (
                        <i>No Content</i>
                      )}
                    </article>
                  </div>
                </aside>
                <aside class="right_content">
                  <div className="tableparameter">
                    <h2>Details Information</h2>
                    <ul className="parameter ">
                      <li className="p217536 g6459_79_77">
                        <span>Size:</span>
                        <div>{product.size}</div>
                      </li>
                      <li className="p217536 g72">
                        <span>Color:</span>
                        <div>{product.color}</div>
                      </li>
                      <li className="p217536 g27">
                        <span>Brand:</span>
                        <a>{product.brand}</a>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
            <div class="clr"></div>
          </div>

          <div className="container-fluid-row container-fluid-row-full-width new-popular-special">
            <div className="row-fluid ">
              <hr></hr>
              <div className="customer-reviews__inner">
                <div className="style__StyledReviewRating-sc-103p4dk-1 bUjLvd review-rating">
                  <div className="review-rating__heading">Reviews</div>
                  <div className="review-rating__inner">
                    <div className="review-rating__summary">
                      <div className="review-rating__point">
                        {product.avg}/5
                      </div>
                      <div className="Stars__StyledStars-sc-15olgyg-0 jucQbJ">
                        {product.avg >= 1 ? (
                          <span>
                            <span className="icon is-small has-text-warning">
                              <i
                                className={
                                  product.avg >= 1
                                    ? "fa fa-star star-review"
                                    : "fa fa-star-o star-review"
                                }
                              />
                            </span>
                            <span className="icon is-small has-text-warning">
                              <i
                                className={
                                  product.avg >= 2
                                    ? "fa fa-star star-review"
                                    : product.avg >= 1.5
                                    ? "fa fa-star-half-o star-review"
                                    : "fa fa-star-o star-review"
                                }
                              />
                            </span>
                            <span className="icon is-small has-text-warning">
                              <i
                                className={
                                  product.avg >= 3
                                    ? "fa fa-star star-review"
                                    : product.avg >= 2.5
                                    ? "fa fa-star-half-o star-review"
                                    : "fa fa-star-o star-review"
                                }
                              />
                            </span>
                            <span className="icon is-small has-text-warning">
                              <i
                                className={
                                  product.avg >= 4
                                    ? "fa fa-star star-review"
                                    : product.avg >= 3.5
                                    ? "fa fa-star-half-o star-review"
                                    : "fa fa-star-o star-review"
                                }
                              />
                            </span>
                            <span className="icon is-small has-text-warning">
                              <i
                                className={
                                  product.avg == 5
                                    ? "fa fa-star star-review"
                                    : product.avg >= 4.5
                                    ? "fa fa-star-half-o star-review"
                                    : "fa fa-star-o star-review"
                                }
                              />
                            </span>
                          </span>
                        ) : (
                          <span>
                            <span className="icon is-small has-text-warning">
                              <i className="fa fa-star-o star-review" />
                            </span>
                            <span className="icon is-small has-text-warning">
                              <i className="fa fa-star-o star-review" />
                            </span>
                            <span className="icon is-small has-text-warning">
                              <i className="fa fa-star-o star-review" />
                            </span>
                            <span className="icon is-small has-text-warning">
                              <i className="fa fa-star-o star-review" />
                            </span>
                            <span className="icon is-small has-text-warning">
                              <i className="fa fa-star-o star-review" />
                            </span>
                          </span>
                        )}
                      </div>
                      <div className="review-rating__total">
                        {reviews.length} reviews
                      </div>
                    </div>
                    <div className="review-rating__detail">
                      <div className="review-rating__level">
                        <div className="Stars__StyledStars-sc-15olgyg-0 jucQbJ">
                          <span>
                            <i class="fa fa-star star-review"></i>
                          </span>
                          <span>
                            <i class="fa fa-star star-review "></i>
                          </span>
                          <span>
                            <i class="fa fa-star star-review "></i>
                          </span>
                          <span>
                            <i class="fa fa-star star-review"></i>
                          </span>
                          <span>
                            <i class="fa fa-star star-review"></i>
                          </span>
                        </div>
                        <div className="style__StyledProcessBar-sc-103p4dk-2 KCfxa">
                          <Progress
                            percent={percent.fivePercent}
                            showInfo={false}
                            status="exception"
                          />
                        </div>
                        <div className="review-rating__number">
                          {percent.five}
                        </div>
                      </div>
                      <div className="review-rating__level">
                        <div className="Stars__StyledStars-sc-15olgyg-0 jucQbJ">
                          <span>
                            <i class="fa fa-star star-review"></i>
                          </span>
                          <span>
                            <i class="fa fa-star star-review "></i>
                          </span>
                          <span>
                            <i class="fa fa-star star-review "></i>
                          </span>
                          <span>
                            <i class="fa fa-star star-review"></i>
                          </span>
                          <span>
                            <i class="fa fa-star-o star-review"></i>
                          </span>
                        </div>
                        <div className="style__StyledProcessBar-sc-103p4dk-2 KCfxa">
                          <Progress
                            percent={percent.fourPercent}
                            showInfo={false}
                            status="exception"
                          />
                        </div>
                        <div className="review-rating__number">
                          {percent.four}
                        </div>
                      </div>
                      <div className="review-rating__level">
                        <div className="Stars__StyledStars-sc-15olgyg-0 jucQbJ">
                          <span>
                            <i class="fa fa-star star-review"></i>
                          </span>
                          <span>
                            <i class="fa fa-star star-review "></i>
                          </span>
                          <span>
                            <i class="fa fa-star star-review "></i>
                          </span>
                          <span>
                            <i class="fa fa-star-o star-review"></i>
                          </span>
                          <span>
                            <i class="fa fa-star-o star-review"></i>
                          </span>
                        </div>
                        <div className="style__StyledProcessBar-sc-103p4dk-2 KCfxa">
                          <Progress
                            percent={percent.threePercent}
                            showInfo={false}
                            status="exception"
                          />
                        </div>
                        <div className="review-rating__number">
                          {percent.three}
                        </div>
                      </div>
                      <div className="review-rating__level">
                        <div className="Stars__StyledStars-sc-15olgyg-0 jucQbJ">
                          <span>
                            <i class="fa fa-star star-review"></i>
                          </span>
                          <span>
                            <i class="fa fa-star star-review "></i>
                          </span>
                          <span>
                            <i class="fa fa-star-o star-review "></i>
                          </span>
                          <span>
                            <i class="fa fa-star-o star-review"></i>
                          </span>
                          <span>
                            <i class="fa fa-star-o star-review"></i>
                          </span>
                        </div>
                        <div className="style__StyledProcessBar-sc-103p4dk-2 KCfxa">
                          <Progress
                            percent={percent.twoPercent}
                            showInfo={false}
                            status="exception"
                          />
                        </div>
                        <div className="review-rating__number">
                          {percent.two}
                        </div>
                      </div>
                      <div className="review-rating__level">
                        <div className="Stars__StyledStars-sc-15olgyg-0 jucQbJ">
                          <span>
                            <i class="fa fa-star star-review"></i>
                          </span>
                          <span>
                            <i class="fa fa-star-o star-review "></i>
                          </span>
                          <span>
                            <i class="fa fa-star-o star-review "></i>
                          </span>
                          <span>
                            <i class="fa fa-star-o star-review"></i>
                          </span>
                          <span>
                            <i class="fa fa-star-o star-review"></i>
                          </span>
                        </div>
                        <div className="style__StyledProcessBar-sc-103p4dk-2 KCfxa">
                          <Progress
                            percent={percent.onePercent}
                            showInfo={false}
                            status="exception"
                          />
                        </div>
                        <div className="review-rating__number">
                          {percent.one}
                        </div>
                      </div>
                    </div>
                    <div className="no-review">
                      <img
                        className
                        src="https://stcv4.hnammobile.com/v7/images/icon/review_grey.svg?v=5271"
                        alt="reviews"
                      />
                      <div className="review-heading">
                        Please review this product{" "}
                      </div>
                      <button class="btn-rating">Write Reviews</button>
                    </div>
                  </div>
                </div>
                <div className="style__StyledFilter-sc-103p4dk-4 fwZKR filter-review">
                  <div className="filter-review__label">Filter:</div>
                  <div className="filter-review__inner">
                    <div
                      data-view-id="pdp_review_filter_item"
                      data-view-index={0}
                      className="filter-review__item "
                    >
                      <span className="filter-review__check" />
                      <span className="filter-review__text">Newest</span>
                    </div>

                    <div
                      data-view-id="pdp_review_filter_item"
                      data-view-index={2}
                      className="filter-review__item "
                    >
                      <span className="filter-review__check" />
                      <span className="filter-review__text">
                        Verified Purchase
                      </span>
                    </div>
                    <div
                      data-view-id="pdp_review_filter_item"
                      data-view-index={3}
                      className="filter-review__item  "
                    >
                      <span className="filter-review__check" />
                      <span className="filter-review__text">5</span>
                      <i className="fa fa-star-o star-review"></i>
                    </div>
                    <div
                      data-view-id="pdp_review_filter_item"
                      data-view-index={4}
                      className="filter-review__item  "
                    >
                      <span className="filter-review__check" />
                      <span className="filter-review__text">4</span>
                      <i className="fa fa-star-o star-review"></i>
                    </div>
                    <div
                      data-view-id="pdp_review_filter_item"
                      data-view-index={5}
                      className="filter-review__item  "
                    >
                      <span className="filter-review__check" />
                      <span className="filter-review__text">3</span>
                      <i className="fa fa-star-o star-review"></i>
                    </div>
                    <div
                      data-view-id="pdp_review_filter_item"
                      data-view-index={6}
                      className="filter-review__item  "
                    >
                      <span className="filter-review__check" />
                      <span className="filter-review__text">2</span>
                      <i className="fa fa-star-o star-review"></i>
                    </div>
                    <div
                      data-view-id="pdp_review_filter_item"
                      data-view-index={7}
                      className="filter-review__item  "
                    >
                      <span className="filter-review__check" />
                      <span className="filter-review__text">1</span>
                      <i className="fa fa-star-o star-review"></i>
                    </div>
                  </div>
                </div>

                <div />
                <Collapse defaultActiveKey={["1"]}>
                  <Panel header="Review Form" key="1">
                    <div id="review-form">
                      <p className="intro">Please rate this product</p>
                      <div className="rating-point">
                        <span className="star-rating star-5">
                          <input
                            type="radio"
                            name="rating"
                            value={1}
                            onChange={handleChange("rating")}
                          />
                          <i />
                          <input
                            type="radio"
                            name="rating"
                            value={2}
                            onChange={handleChange("rating")}
                          />
                          <i />
                          <input
                            type="radio"
                            name="rating"
                            value={3}
                            onChange={handleChange("rating")}
                          />
                          <i />
                          <input
                            type="radio"
                            name="rating"
                            value={4}
                            onChange={handleChange("rating")}
                          />
                          <i />
                          <input
                            type="radio"
                            name="rating"
                            value={5}
                            onChange={handleChange("rating")}
                          />
                          <i />
                        </span>
                      </div>
                      <div className="rowReview">
                        <div className="comment-group col-lg-12">
                          <Editor
                            apiKey="vk5dzbhlfowdjlegve39540n21d7ems2k9hklan44u32j302"
                            value={content}
                            onChange={handleChange("content")}
                            init={{
                              selector: "textarea#emoticons",
                              placeholder: "Please write your comment here ...",
                              height: 150,
                              menubar: false,
                              plugins: "emoticons",
                              toolbar:
                                "emoticons undo redo bold italic backcolor ",
                              emoticons_database: "emojis",
                            }}
                          />
                        </div>
                      </div>
                      <div className="rowReview">
                        <div className="comment-group col-lg-10">
                          <input
                            type="text"
                            name="title"
                            onChange={handleChange("title")}
                            value={title}
                            className="comment-fullname"
                            placeholder="Title"
                          />
                        </div>
                        <div className="comment-group col-lg-2">
                          {user ? (
                            <button
                              type="submit"
                              className="btn-send-comment"
                              onClick={clickSubmit}
                            >
                              Send{" "}
                            </button>
                          ) : (
                            <button
                              type="submit"
                              className="btn-send-comment"
                              onClick={needLogin}
                            >
                              Send Login{" "}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Panel>
                </Collapse>
                {reviews.length > 0 ? (
                  <>
                    {reviews.map((review, i) => (
                      <ReviewProductCard
                        review={review}
                        product={product}
                        loadReviewsPercent={loadReviewsPercent}
                        loadDetailProduct={loadDetailProduct}
                        loadReviewsBasedOnProduct={loadReviewsBasedOnProduct}
                        verifiedPurchase={verifiedPurchase}
                      />
                    ))}
                  </>
                ) : (
                  <>
                    <br />
                    <br />
                    <i class="fa fa-comments"></i>&nbsp;
                    <i>Be the first one to review this product</i>
                  </>
                )}

                <div className="customer-reviews__pagination" />
              </div>
            </div>
          </div>
          <section className="products">
            {" "}
            <div className="container-fluid-row container-fluid-row-full-width">
              <div className="row-fluid ">
                <div
                  className="product-area tm-d recommendedforyou"
                  data-recoedwidget="true"
                >
                  <div className="product-header">
                    <p className="title">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Products Suggestion{" "}
                        </font>
                      </font>
                    </p>
                  </div>
                  <div className="product-content">
                    <div className="list-products">
                      <div
                        className="product-item-list product product-item-list "
                        data-boxxwi="YQQSHK92"
                        data-bxwidat='{"wt":"Gợi ý cho bạn","al":[],"rid":"07656ec2efc3488383ad43bca4ec9614","pid":"19278","cid":""}'
                        data-bxwrap
                        data-recoedproduct="true"
                        data-bxrfid="19278~`~PDP-Personalized-SuggestionsForYou~`~00~`~PDP"
                      >
                        <div className="product-top">
                          <div className="pay-0">Trả góp 0%</div>
                        </div>
                        <div className="product-mid">
                          <div className="product-image">
                            <figure className="image-wrapper">
                              <a
                                href="https://www.hnammobile.com/dien-thoai/samsung-galaxy-note-10-plus-5g-256gb-han-quoc-99.19278.html?utm_source=smartech&utm_medium=medium&utm_campaign=personalize"
                                title="Samsung Galaxy Note 10 Plus 5G 256GB Hàn Quốc 99%"
                              >
                                <picture className>
                                  <source
                                    data-srcset="https://stcv4.hnammobile.com/new-uploads/products/thumbnails/9838009892-samsung-galaxy-note-10-5g-256gb-han-quoc-99.jpg?v=1611692726"
                                    srcSet="https://stcv4.hnammobile.com/new-uploads/products/thumbnails/9838009892-samsung-galaxy-note-10-5g-256gb-han-quoc-99.jpg?v=1611692726"
                                    type="image/png"
                                  />
                                  <img
                                    alt="Samsung Galaxy Note 10 Plus 5G 256GB Hàn Quốc 99%"
                                    data-src="https://stcv4.hnammobile.com/new-uploads/products/thumbnails/9838009892-samsung-galaxy-note-10-5g-256gb-han-quoc-99.jpg?v=1611692726"
                                  />
                                </picture>
                              </a>
                            </figure>
                          </div>
                          <h3 className="product-name">
                            <a href="https://www.hnammobile.com/dien-thoai/samsung-galaxy-note-10-plus-5g-256gb-han-quoc-99.19278.html?utm_source=smartech&utm_medium=medium&utm_campaign=personalize">
                              Samsung Galaxy Note 10 Plus 5G 256GB Hàn Quốc 99%
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins>HNAM</ins> 11.399.000đ
                            <span />
                          </div>
                        </div>
                        <div className="product-bottom">
                          <a
                            className="btn buy-now"
                            href="https://www.hnammobile.com/cart/add?itemid=19278"
                            onclick="addToCart(this)"
                          >
                            Mua ngay
                          </a>
                          <a
                            className="btn pay-0"
                            href="https://www.hnammobile.com/mua-tra-gop/dien-thoai/samsung-galaxy-note-10-plus-5g-256gb-han-quoc-99.19278.html?utm_source=smartech&utm_medium=medium&utm_campaign=personalize"
                            onclick="addToCart(this,true)"
                          >
                            Trả góp 0%
                          </a>
                        </div>
                      </div>
                      <div
                        className="product-item-list product product-item-list "
                        data-boxxwi="YQQSHK92"
                        data-bxwidat='{"wt":"Gợi ý cho bạn","al":[],"rid":"07656ec2efc3488383ad43bca4ec9614","pid":"17510","cid":""}'
                        data-bxwrap
                        data-recoedproduct="true"
                        data-bxrfid="17510~`~PDP-Personalized-SuggestionsForYou~`~01~`~PDP"
                      >
                        <div className="product-top">
                          <div className="pay-0">Trả góp 0%</div>
                        </div>
                        <div className="product-mid">
                          <div className="product-image">
                            <figure className="image-wrapper">
                              <a
                                href="https://www.hnammobile.com/dien-thoai/samsung-galaxy-note-9-n960-128gb-han-quoc.17510.html?utm_source=smartech&utm_medium=medium&utm_campaign=personalize"
                                title="Samsung Galaxy Note 9 N960 128Gb Hàn Quốc ( 99% )"
                              >
                                <picture className>
                                  <source
                                    data-srcset="https://stcv4.hnammobile.com/new-uploads/products/thumbnails/4472706150_samsung-galaxy-note-9-512gb-ram-8gb.jpg?v=1611686803"
                                    srcSet="https://stcv4.hnammobile.com/new-uploads/products/thumbnails/4472706150_samsung-galaxy-note-9-512gb-ram-8gb.jpg?v=1611686803"
                                    type="image/png"
                                  />
                                  <img
                                    alt="Samsung Galaxy Note 9 N960 128Gb Hàn Quốc ( 99% )"
                                    data-src="https://stcv4.hnammobile.com/new-uploads/products/thumbnails/4472706150_samsung-galaxy-note-9-512gb-ram-8gb.jpg?v=1611686803"
                                  />
                                </picture>
                              </a>
                            </figure>
                          </div>
                          <h3 className="product-name">
                            <a href="https://www.hnammobile.com/dien-thoai/samsung-galaxy-note-9-n960-128gb-han-quoc.17510.html?utm_source=smartech&utm_medium=medium&utm_campaign=personalize">
                              Samsung Galaxy Note 9 N960 128Gb Hàn Quốc ( 99% )
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins>HNAM</ins> 6.799.000đ
                            <span />
                          </div>
                        </div>
                        <div className="product-bottom">
                          <a
                            className="btn buy-now"
                            href="https://www.hnammobile.com/cart/add?itemid=17510"
                            onclick="addToCart(this)"
                          >
                            Mua ngay
                          </a>
                          <a
                            className="btn pay-0"
                            href="https://www.hnammobile.com/mua-tra-gop/dien-thoai/samsung-galaxy-note-9-n960-128gb-han-quoc.17510.html?utm_source=smartech&utm_medium=medium&utm_campaign=personalize"
                            onclick="addToCart(this,true)"
                          >
                            Trả góp 0%
                          </a>
                        </div>
                      </div>
                      <div
                        className="product-item-list product product-item-list "
                        data-boxxwi="YQQSHK92"
                        data-bxwidat='{"wt":"Gợi ý cho bạn","al":[],"rid":"07656ec2efc3488383ad43bca4ec9614","pid":"20200","cid":""}'
                        data-bxwrap
                        data-recoedproduct="true"
                        data-bxrfid="20200~`~PDP-Personalized-SuggestionsForYou~`~02~`~PDP"
                      >
                        <div className="product-top">
                          <div className="pay-0">Trả góp 0%</div>
                        </div>
                        <div className="product-mid">
                          <div className="product-image">
                            <figure className="image-wrapper">
                              <a
                                href="https://www.hnammobile.com/dien-thoai/samsung-galaxy-note-9-n960-512gb-han-quoc.20200.html?utm_source=smartech&utm_medium=medium&utm_campaign=personalize"
                                title="Samsung Galaxy Note 9 N960 512Gb Hàn Quốc ( 99% )"
                              >
                                <picture className>
                                  <source
                                    data-srcset="https://stcv4.hnammobile.com/new-uploads/products/thumbnails/6852787817-samsung-galaxy-note-9-n960-512gb-han-quoc.jpg?v=1611685989"
                                    srcSet="https://stcv4.hnammobile.com/new-uploads/products/thumbnails/6852787817-samsung-galaxy-note-9-n960-512gb-han-quoc.jpg?v=1611685989"
                                    type="image/png"
                                  />
                                  <img
                                    alt="Samsung Galaxy Note 9 N960 512Gb Hàn Quốc ( 99% )"
                                    data-src="https://stcv4.hnammobile.com/new-uploads/products/thumbnails/6852787817-samsung-galaxy-note-9-n960-512gb-han-quoc.jpg?v=1611685989"
                                  />
                                </picture>
                              </a>
                            </figure>
                          </div>
                          <h3 className="product-name">
                            <a href="https://www.hnammobile.com/dien-thoai/samsung-galaxy-note-9-n960-512gb-han-quoc.20200.html?utm_source=smartech&utm_medium=medium&utm_campaign=personalize">
                              Samsung Galaxy Note 9 N960 512Gb Hàn Quốc ( 99% )
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins>HNAM</ins> 7.399.000đ
                            <span />
                          </div>
                        </div>
                        <div className="product-bottom">
                          <a
                            className="btn buy-now"
                            href="https://www.hnammobile.com/cart/add?itemid=20200"
                            onclick="addToCart(this)"
                          >
                            Mua ngay
                          </a>
                          <a
                            className="btn pay-0"
                            href="https://www.hnammobile.com/mua-tra-gop/dien-thoai/samsung-galaxy-note-9-n960-512gb-han-quoc.20200.html?utm_source=smartech&utm_medium=medium&utm_campaign=personalize"
                            onclick="addToCart(this,true)"
                          >
                            Trả góp 0%
                          </a>
                        </div>
                      </div>
                      <div
                        className="product-item-list product product-item-list "
                        data-boxxwi="YQQSHK92"
                        data-bxwidat='{"wt":"Gợi ý cho bạn","al":[],"rid":"07656ec2efc3488383ad43bca4ec9614","pid":"19276","cid":""}'
                        data-bxwrap
                        data-recoedproduct="true"
                        data-bxrfid="19276~`~PDP-Personalized-SuggestionsForYou~`~03~`~PDP"
                      >
                        <div className="product-top">
                          <div className="pay-0 label-oustock">
                            Tạm hết hàng
                          </div>
                        </div>
                        <div className="product-mid">
                          <div className="product-image">
                            <figure className="image-wrapper">
                              <a
                                href="https://www.hnammobile.com/dien-thoai/samsung-galaxy-s10-5g-256gb-han-quoc-99.19276.html?utm_source=smartech&utm_medium=medium&utm_campaign=personalize"
                                title="Samsung Galaxy S10 5G 256GB Hàn Quốc 99%"
                              >
                                <picture className>
                                  <source
                                    data-srcset="https://stcv4.hnammobile.com/new-uploads/products/thumbnails/1910708309-samsung-galaxy-s10-5g-256gb-han-quoc-99.jpg?v=1611685382"
                                    srcSet="https://stcv4.hnammobile.com/new-uploads/products/thumbnails/1910708309-samsung-galaxy-s10-5g-256gb-han-quoc-99.jpg?v=1611685382"
                                    type="image/png"
                                  />
                                  <img
                                    alt="Samsung Galaxy S10 5G 256GB Hàn Quốc 99%"
                                    data-src="https://stcv4.hnammobile.com/new-uploads/products/thumbnails/1910708309-samsung-galaxy-s10-5g-256gb-han-quoc-99.jpg?v=1611685382"
                                  />
                                </picture>
                              </a>
                            </figure>
                          </div>
                          <h3 className="product-name">
                            <a href="https://www.hnammobile.com/dien-thoai/samsung-galaxy-s10-5g-256gb-han-quoc-99.19276.html?utm_source=smartech&utm_medium=medium&utm_campaign=personalize">
                              Samsung Galaxy S10 5G 256GB Hàn Quốc 99%
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins>HNAM</ins> 8.599.000đ
                            <span />
                          </div>
                        </div>
                        <div className="product-bottom">
                          <a
                            className="btn buy-now"
                            href="https://www.hnammobile.com/cart/add?itemid=19276"
                            onclick="addToCart(this)"
                          >
                            Mua ngay
                          </a>
                          <a
                            className="btn pay-0"
                            href="https://www.hnammobile.com/mua-tra-gop/dien-thoai/samsung-galaxy-s10-5g-256gb-han-quoc-99.19276.html?utm_source=smartech&utm_medium=medium&utm_campaign=personalize"
                            onclick="addToCart(this,true)"
                          >
                            Trả góp 0%
                          </a>
                        </div>
                      </div>
                      <div
                        className="product-item-list product product-item-list "
                        data-boxxwi="YQQSHK92"
                        data-bxwidat='{"wt":"Gợi ý cho bạn","al":[],"rid":"07656ec2efc3488383ad43bca4ec9614","pid":"20126","cid":""}'
                        data-bxwrap
                        data-recoedproduct="true"
                        data-bxrfid="20126~`~PDP-Personalized-SuggestionsForYou~`~04~`~PDP"
                      >
                        <div className="product-top">
                          <div className="pay-0">In Stock</div>
                        </div>
                        <div className="product-mid">
                          <div className="product-image">
                            <figure className="image-wrapper">
                              <a
                                href="https://www.hnammobile.com/dien-thoai/samsung-galaxy-s20-ultra-g988-5g-256gb-han-quoc-cu-99.20126.html?utm_source=smartech&utm_medium=medium&utm_campaign=personalize"
                                title="Samsung Galaxy S20 Ultra G988 5G 256GB Hàn Quốc cũ 99%"
                              >
                                <picture className>
                                  <source
                                    data-srcset="https://stcv4.hnammobile.com/new-uploads/products/thumbnails/6970814308-samsung-galaxy-s20-ultra-g988-5g-256gb-han-quoc-cu-99.jpg?v=1611691957"
                                    srcSet="https://stcv4.hnammobile.com/new-uploads/products/thumbnails/6970814308-samsung-galaxy-s20-ultra-g988-5g-256gb-han-quoc-cu-99.jpg?v=1611691957"
                                    type="image/png"
                                  />
                                  <img
                                    alt="Samsung Galaxy S20 Ultra G988 5G 256GB Hàn Quốc cũ 99%"
                                    data-src="https://stcv4.hnammobile.com/new-uploads/products/thumbnails/6970814308-samsung-galaxy-s20-ultra-g988-5g-256gb-han-quoc-cu-99.jpg?v=1611691957"
                                  />
                                </picture>
                              </a>
                            </figure>
                          </div>
                          <h3 className="product-name">
                            <a href="https://www.hnammobile.com/dien-thoai/samsung-galaxy-s20-ultra-g988-5g-256gb-han-quoc-cu-99.20126.html?utm_source=smartech&utm_medium=medium&utm_campaign=personalize">
                              Samsung Galaxy S20 Ultra G988 5G 256GB Hàn Quốc cũ
                              99%
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins>HNAM</ins> 16.499.000đ
                            <span />
                          </div>
                        </div>
                        <div className="product-bottom">
                          <a
                            className="btn buy-now"
                            href="https://www.hnammobile.com/cart/add?itemid=20126"
                            onclick="addToCart(this)"
                          >
                            Mua ngay
                          </a>
                          <a
                            className="btn pay-0"
                            href="https://www.hnammobile.com/mua-tra-gop/dien-thoai/samsung-galaxy-s20-ultra-g988-5g-256gb-han-quoc-cu-99.20126.html?utm_source=smartech&utm_medium=medium&utm_campaign=personalize"
                            onclick="addToCart(this,true)"
                          >
                            Trả góp 0%
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default ProductDetailHome;
