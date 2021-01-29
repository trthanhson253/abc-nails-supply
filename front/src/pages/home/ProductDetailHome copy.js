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
import ReviewCard from "../../components/cards/ReviewCard";

const ProductDetailHome = (props) => {
  const [qty, setQty] = useState(1);
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
  console.log("qty", qty);
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
                                <div
                                  className="cm-reload-9060 "
                                  id="add_to_cart_update_9060"
                                >
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
                    <div className="rightInfo phone">
                      <input
                        type="hidden"
                        data-countstore={0}
                        data-arr={2}
                        data-isbuyonlyatstore="False"
                        data-isbuyonlyathome="False"
                      />
                      <ul className="policy ">
                        <li className="inpr">
                          <span>
                            Bộ sản phẩm gồm:{" "}
                            <a
                              className="stdImg"
                              href="javascript:void(0)"
                              onclick="showGalleryPS(100,0);"
                            >
                              Hộp, Sạc, Tai nghe, Sách hướng dẫn, Cáp, Cây lấy
                              sim, Ốp lưng{" "}
                              <i
                                className="icondetail-camera standkit"
                                href="//cdn.tgdd.vn/Products/Images/42/229056/Kit/oppo-a93-bbh-org.jpg"
                              />
                            </a>
                          </span>
                        </li>
                        <li className="wrpr">
                          <span>Bảo hành chính hãng 12 tháng.</span>
                        </li>
                        <li className="chpr">
                          Lỗi là đổi mới trong 1 tháng tại hơn 2434 siêu thị
                          toàn quốc
                          <a href="javascript:openPopWrt();">Xem chi tiết</a>
                        </li>
                      </ul>
                      <div className="promotion-bonus" data-scenario={20201210}>
                        <b>ƯU ĐÃI THÊM</b>
                        <ul>
                          <li>
                            <i>1</i>
                            <div className="promo_BHX">
                              <div className="l1">
                                <img src="/Content/desktop/images/V4/game/Gift@2x.png" />
                              </div>
                              <div className="l2">
                                <span>
                                  Tặng cho khách lần đầu mua hàng online tại web{" "}
                                  <a href="https://www.bachhoaxanh.com/?utm_source=tgdd_ttc_tct&utm_medium=link_tct&utm_campaign=tgdd">
                                    BachhoaXANH.com
                                  </a>
                                </span>
                                <div className="content">
                                  <p className="first-pap">
                                    <strong>100.000đ</strong> để mua đơn hàng
                                    BachhoaXANH từ <b>300.000đ</b>
                                  </p>
                                  <p>
                                    {" "}
                                    5 lần <b>FREEship</b>
                                  </p>
                                </div>
                                <span>
                                  Áp dụng tại Tp.HCM và 1 số khu vực,{" "}
                                  <b>1 SĐT nhận 1 lần</b>
                                </span>
                                <a
                                  href="https://www.bachhoaxanh.com/kinh-nghiem-hay/tang-phieu-mua-hang-bachhoaxanhcom-khi-mua-sam-tai-thegioididongcom-va-dienmayxanhcom-1276540?utm_source=tgdd_ttc_tct_the_le&utm_medium=link_tct&utm_campaign=tgdd"
                                  target="_blank"
                                >
                                  (Xem chi tiết)
                                </a>
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
                                      Samsung Galaxy Note 10 Plus 5G 256GB Hàn
                                      Quốc 99%
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
                                      Samsung Galaxy Note 9 N960 128Gb Hàn Quốc
                                      ( 99% )
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
                                      Samsung Galaxy Note 9 N960 512Gb Hàn Quốc
                                      ( 99% )
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
                                      Samsung Galaxy S20 Ultra G988 5G 256GB Hàn
                                      Quốc cũ 99%
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

                  <Tabs type="card" defaultActiveKey="1">
                    <TabPane
                      tab={
                        <span>
                          <i className="fa fa-files-o fa-fw" /> Description
                        </span>
                      }
                      key="1"
                    >
                      <div className="tab-panels">
                        <div
                          className="panel entry-content active"
                          id="tab-description"
                        >
                          <h3 className="product-table-title">
                            <strong>Details Information</strong>
                          </h3>
                          <div className="white-panel">
                            <div className="attribute-table multi-table" />
                            <table
                              id="chi-tiet"
                              className="table table-bordered table-detail table-striped"
                              cellSpacing={0}
                            >
                              <colgroup>
                                <col />
                                <col />
                              </colgroup>
                              <tbody>
                                <tr>
                                  <td>Thương hiệu</td>
                                  <td className="last">Apple</td>
                                </tr>
                                <tr>
                                  <td>Model</td>
                                  <td className="last">MQD32</td>
                                </tr>
                                <tr>
                                  <td>SKU</td>
                                  <td className="last">5309055103632</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <h3 className="product-table-title">
                            <strong>Description</strong>
                          </h3>
                          <div className="white-panel">
                            <div className="product-description">
                              <div className="product-content-detail">
                                dfasdfasdf
                              </div>
                            </div>
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
                      key="2"
                    >
                      <div className="container-fluid-row container-fluid-row-full-width new-popular-special">
                        <div className="row-fluid ">
                          <ReviewCard />
                        </div>
                      </div>
                    </TabPane>
                  </Tabs>
                </div>
                <div className="product-details"></div>
              </div>
            </div>
          </div>
          <div className="container-fluid-row container-fluid-row-full-width new-popular-special">
            <div className="row-fluid ">
              <Review Card />
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
                      YOU RECENTLY VIEWED
                    </a>
                  </li>
                </ul>

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
