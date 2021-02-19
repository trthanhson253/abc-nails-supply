import React, { useState, useEffect } from "react";
import { getCategories } from "../functions/category";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Home = () => {
  const [categories, setCategories] = useState([]);

  const loadCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        toast.error(data.error);
      } else {
        setCategories(data.data);
      }
    });
  };
  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <>
      <Helmet>
        <title>ABC Nails Supply</title>
      </Helmet>
      <div className="ty-tygh bp-tygh-container" id="tygh_container">
        <div className="cm-notification-container notification-container"></div>
        <div className="ty-helper-container" id="tygh_main_container">
          <div className="tygh-top-panel clearfix"></div>

          <div className="tygh-content clearfix">
            <div className="container-fluid content-grid">
              <div className="container-fluid-row container-fluid-row-full-width hp-grid-banners">
                <div className="row-fluid ">
                  {" "}
                  <div className="span16 ut2-bottom">
                    <div className="row-fluid ">
                      {" "}
                      <div className="span10  ">
                        <div
                          id="banner_slider_1147"
                          className="banners owl-carousel owl-theme"
                          style={{ opacity: 1, display: "block" }}
                        >
                          <div className="owl-wrapper-outer">
                            <div
                              className="owl-wrapper"
                              style={{
                                width: 11808,
                                left: 0,
                                display: "block",
                                transform: "translate3d(-738px, 0px, 0px)",
                                transition: "all 800ms ease 0s",
                              }}
                            >
                              <div className="owl-item" style={{ width: 738 }}>
                                <div className="ty-banner__image-item">
                                  <a className="banner__link" href="/">
                                    {" "}
                                    <img
                                      className="ty-pict ty-banner__image cm-image"
                                      id="det_img_1215992593"
                                      src={require("../assets/img/a.jpg")}
                                      alt
                                      title
                                      style={{ opacity: 1 }}
                                    />
                                  </a>{" "}
                                </div>
                              </div>
                              <div className="owl-item" style={{ width: 738 }}>
                                <div className="ty-banner__image-item">
                                  <a className="banner__link" href="/">
                                    {" "}
                                    <img
                                      className="ty-pict ty-banner__image cm-image"
                                      id="det_img_1679624702"
                                      src={require("../assets/img/b.jpg")}
                                      alt
                                      title
                                      style={{ opacity: 1 }}
                                    />
                                  </a>{" "}
                                </div>
                              </div>
                              <div className="owl-item" style={{ width: 738 }}>
                                <div className="ty-banner__image-item">
                                  <a className="banner__link" href="/">
                                    {" "}
                                    <img
                                      className="ty-pict ty-banner__image cm-image"
                                      id="det_img_366264171"
                                      src={require("../assets/img/c.jpg")}
                                      alt
                                      title
                                      style={{ opacity: 1 }}
                                    />
                                  </a>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Inline script moved to the bottom of the page */}
                      </div>
                      <div className="span6  ">
                        <div
                          id="banner_slider_1148"
                          className="banners owl-carousel owl-theme"
                          style={{ opacity: 1, display: "block" }}
                        >
                          <div className="owl-wrapper-outer">
                            <div
                              className="owl-wrapper"
                              style={{
                                width: 1728,
                                left: 0,
                                display: "block",
                                transform: "translate3d(-432px, 0px, 0px)",
                                transition: "all 800ms ease 0s",
                              }}
                            >
                              <div className="owl-item" style={{ width: 432 }}>
                                <div className="ty-banner__image-item">
                                  <a className="banner__link" href="/">
                                    {" "}
                                    <img
                                      className="ty-pict ty-banner__image cm-image"
                                      id="det_img_1787694550"
                                      src={require("../assets/img/d.jpg")}
                                      alt
                                      title
                                      style={{ opacity: 1 }}
                                    />
                                  </a>{" "}
                                </div>
                              </div>
                              <div className="owl-item" style={{ width: 432 }}>
                                <div className="ty-banner__image-item">
                                  <a className="banner__link" href="/">
                                    {" "}
                                    <img
                                      className="ty-pict ty-banner__image cm-image"
                                      src={require("../assets/img/e.jpg")}
                                      alt
                                      title
                                      style={{ opacity: 1 }}
                                    />
                                  </a>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          id="banner_slider_1149"
                          className="banners owl-carousel owl-theme"
                          style={{ opacity: 1, display: "block" }}
                        >
                          <div className="owl-wrapper-outer">
                            <div
                              className="owl-wrapper"
                              style={{
                                width: 864,
                                left: 0,
                                display: "block",
                                transition: "all 1000ms ease 0s",
                                transform: "translate3d(0px, 0px, 0px)",
                              }}
                            >
                              <div className="owl-item" style={{ width: 432 }}>
                                <div className="ty-banner__image-item">
                                  <a className="banner__link" href="/">
                                    {" "}
                                    <img
                                      className="ty-pict ty-banner__image cm-image"
                                      id="det_img_1556682208"
                                      src={require("../assets/img/f.jpg")}
                                      alt
                                      title
                                      style={{ opacity: 1 }}
                                    />
                                  </a>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="owl-controls clickable"
                            style={{ display: "none" }}
                          >
                            <div className="owl-pagination">
                              <div className="owl-page active">
                                <span className />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Inline script moved to the bottom of the page */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container-fluid-row">
                <div className="row-fluid" style={{ width: "1270px" }}>
                  {" "}
                  <div className="span16 hp-newproducts ut2-top-bottom">
                    <div className="ty-mainbox-simple-container clearfix">
                      <h2 className="ty-mainbox-simple-title">
                        <div className="ab-fn-common-link">
                          <a
                            href="/categories/"
                            className="ty-btn ty-btn__primary ty-btn__big "
                          >
                            <span>Shop By Categories</span>
                          </a>
                        </div>
                      </h2>
                      <div className="ty-mainbox-simple-body">
                        <div className="ab-fn-parent ab-fn-block-700_145  clearfix">
                          <div className="ab-fn-first-level ab-fn-clipped ab__fn_scroller one_level active">
                            <div
                              data-view-index="home_top.category_product_container"
                              className="style__StyledFeaturedCategories-wdsfi3-0 gSjoWS"
                            >
                              <div className="body">
                                <div className="Slider__Wrapper-pmvh7n-0 kCqiXD">
                                  <div className="slick-slider home-hot-categories slick-initialized">
                                    <div className="slick-list">
                                      <div
                                        className="slick-track"
                                        style={{
                                          width: 1240,
                                          opacity: 1,
                                          transform:
                                            "translate3d(0px, 0px, 0px)",
                                        }}
                                      >
                                        <div
                                          data-index={0}
                                          className="slick-slide slick-active slick-current"
                                          tabIndex={-1}
                                          aria-hidden="false"
                                          style={{
                                            outline: "none",
                                            width: 1240,
                                          }}
                                        >
                                          <div>
                                            <div
                                              tabIndex={-1}
                                              style={{
                                                width: "100%",
                                                display: "inline-block",
                                              }}
                                            >
                                              <div className="page">
                                                {categories.map((c) => (
                                                  <Link
                                                    data-view-id="home_top.category_product_item"
                                                    className="item"
                                                    to="#"
                                                  >
                                                    <div
                                                      className="category-image"
                                                      style={{ width: 60 }}
                                                    >
                                                      <div className="PictureV2__StyledWrapImage-tfuu67-0 joKtUd">
                                                        <img
                                                          src={c.images[1].url}
                                                          alt={c.name}
                                                          className="PictureV2__StyledImage-tfuu67-1 gjndCP"
                                                        />
                                                      </div>
                                                    </div>
                                                    <span>{c.name}</span>
                                                  </Link>
                                                ))}
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
                        </div>
                        {/* Inline script moved to the bottom of the page */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ padding: "15px" }}></div>
              <div className="container-fluid-row">
                <div className="row-fluid ">
                  {" "}
                  <div className="span16 hp-shopby ut2-bottom">
                    <div className="row-fluid ">
                      {" "}
                      <div className="span8  ">
                        <div className="ty-banner__image-wrapper">
                          <a href="/">
                            {" "}
                            <img
                              className="ty-pict cm-image"
                              src={require("../assets/img/k.jpg")}
                              alt=""
                              style={{ opacity: 1 }}
                            />
                          </a>{" "}
                        </div>
                      </div>
                      <div className="span8  ">
                        <div className="ty-banner__image-wrapper">
                          <a href="/">
                            {" "}
                            <img
                              className="ty-pict cm-image"
                              src={require("../assets/img/m.jpg")}
                              alt=""
                              style={{ opacity: 1 }}
                            />
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container-fluid-row">
                <div className="row-fluid ">
                  {" "}
                  <div className="span16 hp-newproducts ut2-top-bottom">
                    <div className="ty-mainbox-simple-container clearfix">
                      <h2 className="ty-mainbox-simple-title">
                        <div className="ab-fn-common-link">
                          <a
                            href="/categories/"
                            className="ty-btn ty-btn__primary ty-btn__big "
                          >
                            <span>New Products</span>
                          </a>
                        </div>
                      </h2>
                      <div className="ty-mainbox-simple-body">
                        <div className="ab-fn-parent ab-fn-block-700_145  clearfix">
                          <div className="ab-fn-first-level ab-fn-clipped ab__fn_scroller one_level active">
                            <div className="style__StyledHomeInfiniteScroll-sc-1gykk89-0 ljLnVX">
                              <div
                                data-view-id="home_infinity_tab_content"
                                data-view-index={0}
                                className="style__StyledInfiniteScroll-sc-1xjioqa-0 jGFkeY"
                              >
                                <div className="content">
                                  <a
                                    className="product-item"
                                    data-view-id="home_infinity_products"
                                    href="/binh-giu-nhiet-lock-lock-one-touch-lhc3208-300ml-p701749.html?spid=700291"
                                  >
                                    <span className="style__StyledItem-sc-1bp67fh-0 khGMIT">
                                      <div>
                                        <div className="thumbnail">
                                          <div className="badge-top" />
                                          <img
                                            src="https://salt.tikicdn.com/cache/280x280/media/catalog/product//1/_/1.u5131.d20170623.t153050.626743_3.jpg"
                                            alt="Bình Giữ Nhiệt Lock&Lock One Touch LHC3208 (300ml)"
                                          />
                                        </div>
                                        <div className="info">
                                          <div className="badge-service" />
                                          <div className="name">
                                            <span>
                                              Bình Giữ Nhiệt Lock&amp;Lock One
                                              Touch LHC3208 (300ml)
                                            </span>
                                          </div>
                                          <div className="rating-review">
                                            <div className="rating">
                                              <div className="rating__total">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                              <div
                                                className="rating__average"
                                                style={{ width: "92%" }}
                                              >
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                            </div>
                                            <div className="review">(69)</div>
                                          </div>
                                          <div className="price-discount">
                                            <div className="price-discount__price">
                                              340.000 ₫
                                            </div>
                                            <div className="price-discount__discount">
                                              -10%
                                            </div>
                                          </div>
                                          <div className="badge-under-price" />
                                          <div className="badge-benefits" />
                                          <div className="badge-additional-info" />
                                        </div>
                                      </div>
                                    </span>
                                  </a>
                                  <a
                                    className="product-item"
                                    data-view-id="home_infinity_products"
                                    href="/binh-giu-nhiet-lock-lock-colorful-tumbler-funcolor-lhc3222-390ml-p701579.html?spid=19894335"
                                  >
                                    <span className="style__StyledItem-sc-1bp67fh-0 khGMIT">
                                      <div>
                                        <div className="thumbnail">
                                          <div className="badge-top" />
                                          <img
                                            src="https://salt.tikicdn.com/cache/280x280/ts/product/cb/15/15/45ad1d23f5717d0e9428cc6403cc5388.jpg"
                                            alt="Bình Giữ Nhiệt Lock&Lock Colorful Tumbler Funcolor LHC3222 (390ml)"
                                          />
                                        </div>
                                        <div className="info">
                                          <div className="badge-service" />
                                          <div className="name">
                                            <span>
                                              Bình Giữ Nhiệt Lock&amp;Lock
                                              Colorful Tumbler Funcolor LHC3222
                                              (390ml)
                                            </span>
                                          </div>
                                          <div className="rating-review">
                                            <div className="rating">
                                              <div className="rating__total">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                              <div
                                                className="rating__average"
                                                style={{ width: "90%" }}
                                              >
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                            </div>
                                            <div className="review">(580)</div>
                                          </div>
                                          <div className="price-discount">
                                            <div className="price-discount__price">
                                              249.000 ₫
                                            </div>
                                            <div className="price-discount__discount">
                                              -41%
                                            </div>
                                          </div>
                                          <div className="badge-under-price" />
                                          <div className="badge-benefits" />
                                          <div className="badge-additional-info" />
                                        </div>
                                      </div>
                                    </span>
                                  </a>
                                  <a
                                    className="product-item"
                                    data-view-id="home_infinity_products"
                                    href="/mau-nuoc-superior-12-mau-dang-nen-p24766594.html?spid=72288882"
                                  >
                                    <span className="style__StyledItem-sc-1bp67fh-0 khGMIT">
                                      <div>
                                        <div className="thumbnail">
                                          <div className="badge-top" />
                                          <img
                                            src="https://salt.tikicdn.com/cache/280x280/ts/product/02/b2/78/3a45759cfee7294e916ebf1ccd8c3744.jpg"
                                            alt="Màu nước superior 12 màu - Dạng nén"
                                          />
                                        </div>
                                        <div className="info">
                                          <div className="badge-service" />
                                          <div className="name">
                                            <span>
                                              Màu nước superior 12 màu - Dạng
                                              nén
                                            </span>
                                          </div>
                                          <div className="rating-review">
                                            <div className="rating">
                                              <div className="rating__total">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                              <div
                                                className="rating__average"
                                                style={{ width: "94%" }}
                                              >
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                            </div>
                                            <div className="review">(20)</div>
                                          </div>
                                          <div className="price-discount">
                                            <div className="price-discount__price">
                                              99.000 ₫
                                            </div>
                                            <div className="price-discount__discount">
                                              -53%
                                            </div>
                                          </div>
                                          <div className="badge-under-price" />
                                          <div className="badge-benefits" />
                                          <div className="badge-additional-info" />
                                        </div>
                                      </div>
                                    </span>
                                  </a>
                                  <a
                                    className="product-item"
                                    data-view-id="home_infinity_products"
                                    href="/binh-dung-nuoc-giu-nhiet-loi-thuy-tinh-chong-nong-6-oup-sieu-ben-dep-450ml-nhieu-mau-p19273054.html?spid=56998722"
                                  >
                                    <span className="style__StyledItem-sc-1bp67fh-0 khGMIT">
                                      <div>
                                        <div className="thumbnail">
                                          <div className="badge-top" />
                                          <img
                                            src="https://salt.tikicdn.com/cache/280x280/ts/product/a0/5d/fc/fabbc2f283542244279da0984d6ea477.jpg"
                                            alt="Bình Đựng Nước Giữ Nhiệt Lõi Thủy Tinh Chống Nóng 6 Oup Siêu Bền Đẹp 450ml (Nhiều Màu)"
                                          />
                                        </div>
                                        <div className="info">
                                          <div className="badge-service" />
                                          <div className="name">
                                            <span>
                                              Bình Đựng Nước Giữ Nhiệt Lõi Thủy
                                              Tinh Chống Nóng 6 Oup Siêu Bền Đẹp
                                              450ml (Nhiều Màu)
                                            </span>
                                          </div>
                                          <div className="rating-review">
                                            <div className="rating">
                                              <div className="rating__total">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                              <div
                                                className="rating__average"
                                                style={{ width: "70%" }}
                                              >
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                            </div>
                                            <div className="review">(67)</div>
                                          </div>
                                          <div className="price-discount">
                                            <div className="price-discount__price">
                                              19.999 ₫
                                            </div>
                                            <div className="price-discount__discount">
                                              -89%
                                            </div>
                                          </div>
                                          <div className="badge-under-price" />
                                          <div className="badge-benefits" />
                                          <div className="badge-additional-info" />
                                        </div>
                                      </div>
                                    </span>
                                  </a>
                                  <a
                                    className="product-item"
                                    data-view-id="home_infinity_products"
                                    href="/giay-sneaker-nam-3fashion-vai-mem-nhe-style-han-quoc-3172-p14656893.html?spid=14656905"
                                  >
                                    <span className="style__StyledItem-sc-1bp67fh-0 khGMIT">
                                      <div>
                                        <div className="thumbnail">
                                          <div className="badge-top" />
                                          <img
                                            src="https://salt.tikicdn.com/cache/280x280/ts/product/4a/86/ed/4f1256a21e2784673eea6bfa5fa2a667.jpg"
                                            alt="Giày Sneaker Nam 3Fashion Vải Mềm Nhẹ Style Hàn Quốc - 3172"
                                          />
                                        </div>
                                        <div className="info">
                                          <div className="badge-service" />
                                          <div className="name">
                                            <span>
                                              Giày Sneaker Nam 3Fashion Vải Mềm
                                              Nhẹ Style Hàn Quốc - 3172
                                            </span>
                                          </div>
                                          <div className="rating-review">
                                            <div className="rating">
                                              <div className="rating__total">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                              <div
                                                className="rating__average"
                                                style={{ width: "82%" }}
                                              >
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                            </div>
                                            <div className="review">(149)</div>
                                          </div>
                                          <div className="price-discount">
                                            <div className="price-discount__price">
                                              98.000 ₫
                                            </div>
                                            <div className="price-discount__discount">
                                              -67%
                                            </div>
                                          </div>
                                          <div className="badge-under-price" />
                                          <div className="badge-benefits" />
                                          <div className="badge-additional-info" />
                                        </div>
                                      </div>
                                    </span>
                                  </a>
                                  <div>
                                    <a
                                      className="product-item"
                                      href="//tka.tiki.vn/pixel?data=djAwMb_VmG6VD82DWoxiEOLh8qEfK5h0LJVYiINtdbzN-IQSgc_by1ICzZdUI5F2tVIC5UoNqXCRCoZ8INxTN_xto5iS6wnmk0UHdwdqtqR2EQe_34wnNKtw_JfRrmo8z5qtG6Jb57uxhQUHuXnY6g8GfgqBhhhrHeVPOR8Qt93GmrPWynHH7TsXX4rCDA0ygBE_CrnRW854DUzqNDbfj_vrgSFnEvVvipKsolDq5Gu3t-0ioiZtcXCf3XviHuWI7zcJPxhzykDDOXZZmK57W41RwNgyB2q1fldSsDdZkZEdXL9pliQN9YP28-dG6Q99SBlvX6zw3-P5uv4R37vdYDrYaslSjfB3rQRYVu_497PRtrByjrA6kk6M5IccFduOk9mrGBO93v-uLuTBfUhLnPATp9IleP0kWJEMQAu0HXbWW4qlYcRaGFcf4JwkWL3CEk1_guTOGBk5D6vFNcwk7LIU7ltxNVPQGKQy-5qNzYtWCFzikK9I_wXrtlTRhaoza8OZC35AzeA4r-DRMHXQNwuOBFMb9rc8oTGgWR2BU5ggZRqYSz-jBL0p-xUZnPIdtsUk912Ew0ykfhRYsJ3Xr-RWBGgE5xc9QKFQH_MvUMXu2AVfFl4cG4gNm4qOCPSib0vClP_80thhijr3_J7pYkdm17RCmie6F1L5ZP0WQ4eY9dwrcyq9nc3n3Rz4Zkd4b_dxro-juOc_fpmuILyv1C7jLjubvfA9CWEcdeoM7JrMawiEhcK2w0z3l2m7EbZDXztoaGDXHMyPXdktTypkfemvVCuS7KkarO_7RBtWh1K0j9bVxmlpDcqtNgAjwqZuSOJRoeDn__nXGlK0pYihYVbb38AhR7h1BlGmffNAepR8AWGQBSMkI6LghXFIxuQ_9GV_gIH6KJVsg0W217CJnE2q1HyayCGh5AggeTanYU7EaMM-88ggK-3sWm2kz_FLE6DZ&CLICK&reqid=FoJ3J5YjX6&pos=6&redirect=https%3A%2F%2Ftiki.vn%2Fmau-nuoc-colokit-waco-c09-p55996811.html%3Fspid%3D55996812"
                                      data-view-id="home_infinity_products"
                                    >
                                      <span className="style__StyledItem-sc-1bp67fh-0 khGMIT">
                                        <div>
                                          <div className="thumbnail">
                                            <div className="badge-top" />
                                            <img
                                              src="https://salt.tikicdn.com/cache/280x280/ts/product/51/eb/da/e69534f7282d4bb34e36dbec7e4843e1.jpg"
                                              alt="Màu nước Colokit WACO-C09"
                                            />
                                          </div>
                                          <div className="info">
                                            <div className="badge-service" />
                                            <div className="name">
                                              <p
                                                style={{
                                                  background:
                                                    "rgb(242, 242, 242)",
                                                  lineHeight: 12,
                                                  display: "inline-block",
                                                  padding: "0px 4px",
                                                  fontSize: 9,
                                                  margin: "0px 4px 0px 0px",
                                                  position: "relative",
                                                  top: "-1px",
                                                  borderRadius: 2,
                                                }}
                                              >
                                                Ad
                                              </p>
                                              <span>
                                                Màu nước Colokit WACO-C09
                                              </span>
                                            </div>
                                            <div className="rating-review">
                                              <div className="rating">
                                                <div className="rating__total">
                                                  <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 24 24"
                                                    size={12}
                                                    color="#c7c7c7"
                                                    height={12}
                                                    width={12}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{
                                                      color:
                                                        "rgb(199, 199, 199)",
                                                    }}
                                                  >
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                  </svg>
                                                  <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 24 24"
                                                    size={12}
                                                    color="#c7c7c7"
                                                    height={12}
                                                    width={12}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{
                                                      color:
                                                        "rgb(199, 199, 199)",
                                                    }}
                                                  >
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                  </svg>
                                                  <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 24 24"
                                                    size={12}
                                                    color="#c7c7c7"
                                                    height={12}
                                                    width={12}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{
                                                      color:
                                                        "rgb(199, 199, 199)",
                                                    }}
                                                  >
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                  </svg>
                                                  <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 24 24"
                                                    size={12}
                                                    color="#c7c7c7"
                                                    height={12}
                                                    width={12}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{
                                                      color:
                                                        "rgb(199, 199, 199)",
                                                    }}
                                                  >
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                  </svg>
                                                  <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 24 24"
                                                    size={12}
                                                    color="#c7c7c7"
                                                    height={12}
                                                    width={12}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{
                                                      color:
                                                        "rgb(199, 199, 199)",
                                                    }}
                                                  >
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                  </svg>
                                                </div>
                                                <div
                                                  className="rating__average"
                                                  style={{ width: "100%" }}
                                                >
                                                  <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 24 24"
                                                    size={12}
                                                    color="#fdd836"
                                                    height={12}
                                                    width={12}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{
                                                      color:
                                                        "rgb(253, 216, 54)",
                                                    }}
                                                  >
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                  </svg>
                                                  <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 24 24"
                                                    size={12}
                                                    color="#fdd836"
                                                    height={12}
                                                    width={12}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{
                                                      color:
                                                        "rgb(253, 216, 54)",
                                                    }}
                                                  >
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                  </svg>
                                                  <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 24 24"
                                                    size={12}
                                                    color="#fdd836"
                                                    height={12}
                                                    width={12}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{
                                                      color:
                                                        "rgb(253, 216, 54)",
                                                    }}
                                                  >
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                  </svg>
                                                  <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 24 24"
                                                    size={12}
                                                    color="#fdd836"
                                                    height={12}
                                                    width={12}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{
                                                      color:
                                                        "rgb(253, 216, 54)",
                                                    }}
                                                  >
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                  </svg>
                                                  <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 24 24"
                                                    size={12}
                                                    color="#fdd836"
                                                    height={12}
                                                    width={12}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{
                                                      color:
                                                        "rgb(253, 216, 54)",
                                                    }}
                                                  >
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="review">(8)</div>
                                            </div>
                                            <div className="price-discount">
                                              <div className="price-discount__price">
                                                114.300 ₫
                                              </div>
                                              <div className="price-discount__discount">
                                                -10%
                                              </div>
                                            </div>
                                            <div className="badge-under-price" />
                                            <div className="badge-benefits" />
                                            <div className="badge-additional-info" />
                                          </div>
                                        </div>
                                      </span>
                                    </a>
                                  </div>
                                  <a
                                    className="product-item"
                                    data-view-id="home_infinity_products"
                                    href="/do-boi-nu-bigsize-hai-manh-tu-60-72kg-at193-mayhomes-kin-dao-va-de-thuong-p72461915.html?spid=72461917"
                                  >
                                    <span className="style__StyledItem-sc-1bp67fh-0 khGMIT">
                                      <div>
                                        <div className="thumbnail">
                                          <div className="badge-top" />
                                          <img
                                            src="https://salt.tikicdn.com/cache/280x280/ts/product/ca/4d/f9/3441fa2c05caa1afa3e5218cf96b7239.png"
                                            alt="Đồ Bơi Nữ Bigsize Hai Mảnh Từ 60-72Kg AT193 MayHomes Kín Đáo Và Dễ Thương"
                                          />
                                        </div>
                                        <div className="info">
                                          <div className="badge-service" />
                                          <div className="name">
                                            <span>
                                              Đồ Bơi Nữ Bigsize Hai Mảnh Từ
                                              60-72Kg AT193 MayHomes Kín Đáo Và
                                              Dễ Thương
                                            </span>
                                          </div>
                                          <div className="rating-review">
                                            <div className="rating">
                                              <div className="rating__total">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                              <div
                                                className="rating__average"
                                                style={{ width: "86%" }}
                                              >
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                            </div>
                                            <div className="review">(3)</div>
                                          </div>
                                          <div className="price-discount">
                                            <div className="price-discount__price">
                                              187.000 ₫
                                            </div>
                                            <div className="price-discount__discount">
                                              -22%
                                            </div>
                                          </div>
                                          <div className="badge-under-price" />
                                          <div className="badge-benefits" />
                                          <div className="badge-additional-info" />
                                        </div>
                                      </div>
                                    </span>
                                  </a>
                                  <a
                                    className="product-item"
                                    data-view-id="home_infinity_products"
                                    href="/binh-giu-nhiet-lock-lock-colorful-tumbler-funcolor-390ml-p3577053.html?spid=3656313"
                                  >
                                    <span className="style__StyledItem-sc-1bp67fh-0 khGMIT">
                                      <div>
                                        <div className="thumbnail">
                                          <div className="badge-top" />
                                          <img
                                            src="https://salt.tikicdn.com/cache/280x280/ts/product/dd/db/d0/0600996ca75846e56be4032a9d487c60.jpg"
                                            alt="Bình Giữ Nhiệt Lock&Lock Colorful Tumbler FUNCOLOR (390ml)"
                                          />
                                        </div>
                                        <div className="info">
                                          <div className="badge-service" />
                                          <div className="name">
                                            <span>
                                              Bình Giữ Nhiệt Lock&amp;Lock
                                              Colorful Tumbler FUNCOLOR (390ml)
                                            </span>
                                          </div>
                                          <div className="rating-review">
                                            <div className="rating">
                                              <div className="rating__total">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                              <div
                                                className="rating__average"
                                                style={{ width: "94%" }}
                                              >
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                            </div>
                                            <div className="review">(116)</div>
                                          </div>
                                          <div className="price-discount">
                                            <div className="price-discount__price">
                                              414.000 ₫
                                            </div>
                                            <div className="price-discount__discount">
                                              -10%
                                            </div>
                                          </div>
                                          <div className="badge-under-price" />
                                          <div className="badge-benefits" />
                                          <div className="badge-additional-info" />
                                        </div>
                                      </div>
                                    </span>
                                  </a>
                                  <a
                                    className="product-item"
                                    data-view-id="home_infinity_products"
                                    href="/nuoc-giat-chong-lao-hoa-comfort-huong-thoi-thuong-tui-3-1kg-p59257930.html?spid=59257931"
                                  >
                                    <span className="style__StyledItem-sc-1bp67fh-0 khGMIT">
                                      <div>
                                        <div className="thumbnail">
                                          <div className="badge-top" />
                                          <img
                                            src="https://salt.tikicdn.com/cache/280x280/ts/product/93/ef/5a/b806c786c9e58afa793c552d23073443.jpg"
                                            alt="Nước Giặt Chống Lão Hóa Comfort Hương Thời Thượng Túi 3,1kg"
                                          />
                                        </div>
                                        <div className="info">
                                          <div className="badge-service" />
                                          <div className="name">
                                            <span>
                                              Nước Giặt Chống Lão Hóa Comfort
                                              Hương Thời Thượng Túi 3,1kg
                                            </span>
                                          </div>
                                          <div className="rating-review">
                                            <div className="rating">
                                              <div className="rating__total">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                              <div
                                                className="rating__average"
                                                style={{ width: "96%" }}
                                              >
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                            </div>
                                            <div className="review">(93)</div>
                                          </div>
                                          <div className="price-discount">
                                            <div className="price-discount__price">
                                              169.000 ₫
                                            </div>
                                            <div className="price-discount__discount">
                                              -16%
                                            </div>
                                          </div>
                                          <div className="badge-under-price" />
                                          <div className="badge-benefits" />
                                          <div className="badge-additional-info" />
                                        </div>
                                      </div>
                                    </span>
                                  </a>
                                  <a
                                    className="product-item"
                                    data-view-id="home_infinity_products"
                                    href="/chuot-khong-day-elecom-m-bl5db-p68549.html?spid=68550"
                                  >
                                    <span className="style__StyledItem-sc-1bp67fh-0 khGMIT">
                                      <div>
                                        <div className="thumbnail">
                                          <div className="badge-top" />
                                          <img
                                            src="https://salt.tikicdn.com/cache/280x280/media/catalog/product//e/l/elecom-m-bl5db-trang_1.jpg"
                                            alt="Chuột Không Dây Elecom M-BL5DB"
                                          />
                                        </div>
                                        <div className="info">
                                          <div className="badge-service" />
                                          <div className="name">
                                            <span>
                                              Chuột Không Dây Elecom M-BL5DB
                                            </span>
                                          </div>
                                          <div className="price-discount">
                                            <div className="price-discount__price">
                                              379.000 ₫
                                            </div>
                                          </div>
                                          <div className="badge-under-price" />
                                          <div className="badge-benefits" />
                                          <div className="badge-additional-info" />
                                        </div>
                                      </div>
                                    </span>
                                  </a>
                                  <a
                                    className="product-item"
                                    data-view-id="home_infinity_products"
                                    href="/binh-giu-nhiet-lock-lock-grip-tumbler-lhc801-370ml-p701726.html?spid=779741"
                                  >
                                    <span className="style__StyledItem-sc-1bp67fh-0 khGMIT">
                                      <div>
                                        <div className="thumbnail">
                                          <div className="badge-top" />
                                          <img
                                            src="https://salt.tikicdn.com/cache/280x280/media/catalog/product//1/_/1.u5386.d20170808.t151205.859425_1.jpg"
                                            alt="Bình Giữ Nhiệt Lock&Lock Grip Tumbler LHC801 (370ml)"
                                          />
                                        </div>
                                        <div className="info">
                                          <div className="badge-service" />
                                          <div className="name">
                                            <span>
                                              Bình Giữ Nhiệt Lock&amp;Lock Grip
                                              Tumbler LHC801 (370ml)
                                            </span>
                                          </div>
                                          <div className="rating-review">
                                            <div className="rating">
                                              <div className="rating__total">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                              <div
                                                className="rating__average"
                                                style={{ width: "82%" }}
                                              >
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                            </div>
                                            <div className="review">(86)</div>
                                          </div>
                                          <div className="price-discount">
                                            <div className="price-discount__price">
                                              434.000 ₫
                                            </div>
                                            <div className="price-discount__discount">
                                              -10%
                                            </div>
                                          </div>
                                          <div className="badge-under-price" />
                                          <div className="badge-benefits" />
                                          <div className="badge-additional-info" />
                                        </div>
                                      </div>
                                    </span>
                                  </a>
                                  <a
                                    className="product-item"
                                    data-view-id="home_infinity_products"
                                    href="/ban-phim-co-e-dra-ek387-pro-hang-chinh-hang-p48835147.html?spid=48835153"
                                  >
                                    <span className="style__StyledItem-sc-1bp67fh-0 khGMIT">
                                      <div>
                                        <div className="thumbnail">
                                          <div className="badge-top" />
                                          <img
                                            src="https://salt.tikicdn.com/cache/280x280/ts/product/4f/8d/10/fb84d21a4a53946f059aed97e42507b2.jpg"
                                            alt="Bàn phím cơ E-DRA EK387 PRO - Hàng Chính Hãng"
                                          />
                                        </div>
                                        <div className="info">
                                          <div className="badge-service" />
                                          <div className="name">
                                            <span>
                                              Bàn phím cơ E-DRA EK387 PRO - Hàng
                                              Chính Hãng
                                            </span>
                                          </div>
                                          <div className="rating-review">
                                            <div className="rating">
                                              <div className="rating__total">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                              <div
                                                className="rating__average"
                                                style={{ width: "90%" }}
                                              >
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                            </div>
                                            <div className="review">(17)</div>
                                          </div>
                                          <div className="price-discount">
                                            <div className="price-discount__price">
                                              969.999 ₫
                                            </div>
                                            <div className="price-discount__discount">
                                              -19%
                                            </div>
                                          </div>
                                          <div className="badge-under-price" />
                                          <div className="badge-benefits" />
                                          <div className="badge-additional-info" />
                                        </div>
                                      </div>
                                    </span>
                                  </a>
                                  <a
                                    className="product-item"
                                    data-view-id="home_infinity_products"
                                    href="/ao-thun-nam-in-hinh-xe-phuot-everest-aoknam325-xanh-duong-p1647141.html?spid=1649963"
                                  >
                                    <span className="style__StyledItem-sc-1bp67fh-0 khGMIT">
                                      <div>
                                        <div className="thumbnail">
                                          <div className="badge-top" />
                                          <img
                                            src="https://salt.tikicdn.com/cache/280x280/ts/product/d9/24/12/1e74e5892d6ec247e038597f4f6cb6dd.jpg"
                                            alt="Áo Thun Nam In Hình Xe Phượt Everest AoKNAM325 - Xanh Dương"
                                          />
                                        </div>
                                        <div className="info">
                                          <div className="badge-service" />
                                          <div className="name">
                                            <span>
                                              Áo Thun Nam In Hình Xe Phượt
                                              Everest AoKNAM325 - Xanh Dương
                                            </span>
                                          </div>
                                          <div className="price-discount">
                                            <div className="price-discount__price">
                                              49.000 ₫
                                            </div>
                                            <div className="price-discount__discount">
                                              -40%
                                            </div>
                                          </div>
                                          <div className="badge-under-price" />
                                          <div className="badge-benefits" />
                                          <div className="badge-additional-info" />
                                        </div>
                                      </div>
                                    </span>
                                  </a>
                                  <a
                                    className="product-item"
                                    data-view-id="home_infinity_products"
                                    href="/noi-chien-khong-dau-dien-tu-cosori-air-fryer-5-8-qt-5-5-lit-hang-chinh-hang-mau-do-p72105672.html?spid=73876422"
                                  >
                                    <span className="style__StyledItem-sc-1bp67fh-0 khGMIT">
                                      <div>
                                        <div className="thumbnail">
                                          <div className="badge-top" />
                                          <img
                                            src="https://salt.tikicdn.com/cache/280x280/ts/product/ec/c7/a2/a7b1ae2fc281f3bc502185a0690bcff2.png"
                                            alt="NỒI CHIÊN KHÔNG DẦU ĐIỆN TỬ COSORI (AIR FRYER) 5.8 Qt / 5.5 LÍT- HÀNG CHÍNH HÃNG- MÀU ĐỎ "
                                          />
                                        </div>
                                        <div className="info">
                                          <div className="badge-service" />
                                          <div className="name">
                                            <span>
                                              NỒI CHIÊN KHÔNG DẦU ĐIỆN TỬ COSORI
                                              (AIR FRYER) 5.8 Qt / 5.5 LÍT- HÀNG
                                              CHÍNH HÃNG- MÀU ĐỎ
                                            </span>
                                          </div>
                                          <div className="rating-review">
                                            <div className="rating">
                                              <div className="rating__total">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                              <div
                                                className="rating__average"
                                                style={{ width: "96%" }}
                                              >
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                            </div>
                                            <div className="review">(5)</div>
                                          </div>
                                          <div className="price-discount">
                                            <div className="price-discount__price">
                                              3.399.000 ₫
                                            </div>
                                            <div className="price-discount__discount">
                                              -30%
                                            </div>
                                          </div>
                                          <div className="badge-under-price" />
                                          <div className="badge-benefits" />
                                          <div className="badge-additional-info" />
                                        </div>
                                      </div>
                                    </span>
                                  </a>
                                  <a
                                    className="product-item"
                                    data-view-id="home_infinity_products"
                                    href="/noi-chien-khong-dau-cosori-co158-af-5-5l-hang-chinh-hang-p63104279.html?spid=69764560"
                                  >
                                    <span className="style__StyledItem-sc-1bp67fh-0 khGMIT">
                                      <div>
                                        <div className="thumbnail">
                                          <div className="badge-top" />
                                          <img
                                            src="https://salt.tikicdn.com/cache/280x280/ts/product/21/ee/c2/a8039b7edde2302851ad8bba1aee67c2.jpg"
                                            alt="NỒI CHIÊN KHÔNG DẦU COSORI CO158- AF/5.5L- HÀNG CHÍNH HÃNG"
                                          />
                                        </div>
                                        <div className="info">
                                          <div className="badge-service" />
                                          <div className="name">
                                            <span>
                                              NỒI CHIÊN KHÔNG DẦU COSORI CO158-
                                              AF/5.5L- HÀNG CHÍNH HÃNG
                                            </span>
                                          </div>
                                          <div className="rating-review">
                                            <div className="rating">
                                              <div className="rating__total">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                              <div
                                                className="rating__average"
                                                style={{ width: "96%" }}
                                              >
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                            </div>
                                            <div className="review">(17)</div>
                                          </div>
                                          <div className="price-discount">
                                            <div className="price-discount__price">
                                              2.779.000 ₫
                                            </div>
                                            <div className="price-discount__discount">
                                              -30%
                                            </div>
                                          </div>
                                          <div className="badge-under-price" />
                                          <div className="badge-benefits" />
                                          <div className="badge-additional-info" />
                                        </div>
                                      </div>
                                    </span>
                                  </a>
                                  <a
                                    className="product-item"
                                    data-view-id="home_infinity_products"
                                    href="/noi-com-dien-lock-lock-ejr431-dung-tich-1-lit-hang-chinh-hang-p48462032.html?spid=55770873"
                                  >
                                    <span className="style__StyledItem-sc-1bp67fh-0 khGMIT">
                                      <div>
                                        <div className="thumbnail">
                                          <div className="badge-top" />
                                          <img
                                            src="https://salt.tikicdn.com/cache/280x280/ts/product/94/8f/a3/78c9204a447e249d9f021b9170c0519e.jpeg"
                                            alt="Nồi Cơm Điện Lock&Lock EJR431 Dung Tích 1 lít (Hàng Chính Hãng)"
                                          />
                                        </div>
                                        <div className="info">
                                          <div className="badge-service" />
                                          <div className="name">
                                            <span>
                                              Nồi Cơm Điện Lock&amp;Lock EJR431
                                              Dung Tích 1 lít (Hàng Chính Hãng)
                                            </span>
                                          </div>
                                          <div className="rating-review">
                                            <div className="rating">
                                              <div className="rating__total">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                              <div
                                                className="rating__average"
                                                style={{ width: "92%" }}
                                              >
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                            </div>
                                            <div className="review">(106)</div>
                                          </div>
                                          <div className="price-discount">
                                            <div className="price-discount__price">
                                              619.000 ₫
                                            </div>
                                            <div className="price-discount__discount">
                                              -37%
                                            </div>
                                          </div>
                                          <div className="badge-under-price" />
                                          <div className="badge-benefits" />
                                          <div className="badge-additional-info" />
                                        </div>
                                      </div>
                                    </span>
                                  </a>
                                  <a
                                    className="product-item"
                                    data-view-id="home_infinity_products"
                                    href="/mau-gouache-himi-dang-thach-p52063744.html?spid=69537119"
                                  >
                                    <span className="style__StyledItem-sc-1bp67fh-0 khGMIT">
                                      <div>
                                        <div className="thumbnail">
                                          <div className="badge-top" />
                                          <img
                                            src="https://salt.tikicdn.com/cache/280x280/ts/product/13/4d/86/a68fe9e05aadb0564567291e370b2d40.jpg"
                                            alt="Màu Gouache HiMi dạng thạch (Vỏ Hộp Màu Ngẫu Nhiên)"
                                          />
                                        </div>
                                        <div className="info">
                                          <div className="badge-service" />
                                          <div className="name">
                                            <span>
                                              Màu Gouache HiMi dạng thạch (Vỏ
                                              Hộp Màu Ngẫu Nhiên)
                                            </span>
                                          </div>
                                          <div className="rating-review">
                                            <div className="rating">
                                              <div className="rating__total">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                              <div
                                                className="rating__average"
                                                style={{ width: "84%" }}
                                              >
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                            </div>
                                            <div className="review">(10)</div>
                                          </div>
                                          <div className="price-discount">
                                            <div className="price-discount__price">
                                              265.000 ₫
                                            </div>
                                          </div>
                                          <div className="badge-under-price" />
                                          <div className="badge-benefits" />
                                          <div className="badge-additional-info" />
                                        </div>
                                      </div>
                                    </span>
                                  </a>
                                  <a
                                    className="product-item"
                                    data-view-id="home_infinity_products"
                                    href="/binh-giu-nhiet-inox-1200ml-giu-nhiet-tren-15h-p19733027.html?spid=67257957"
                                  >
                                    <span className="style__StyledItem-sc-1bp67fh-0 khGMIT">
                                      <div>
                                        <div className="thumbnail">
                                          <div className="badge-top" />
                                          <img
                                            src="https://salt.tikicdn.com/cache/280x280/ts/product/30/f5/07/2dbd28b138c6c0d48b3f199d2dc5130b.jpg"
                                            alt="Bình Giữ Nhiệt Inox 1200ml Giữ Nhiệt Trên 15H"
                                          />
                                        </div>
                                        <div className="info">
                                          <div className="badge-service" />
                                          <div className="name">
                                            <span>
                                              Bình Giữ Nhiệt Inox 1200ml Giữ
                                              Nhiệt Trên 15H
                                            </span>
                                          </div>
                                          <div className="rating-review">
                                            <div className="rating">
                                              <div className="rating__total">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                              <div
                                                className="rating__average"
                                                style={{ width: "84%" }}
                                              >
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                            </div>
                                            <div className="review">(266)</div>
                                          </div>
                                          <div className="price-discount">
                                            <div className="price-discount__price">
                                              115.000 ₫
                                            </div>
                                            <div className="price-discount__discount">
                                              -39%
                                            </div>
                                          </div>
                                          <div className="badge-under-price" />
                                          <div className="badge-benefits" />
                                          <div className="badge-additional-info" />
                                        </div>
                                      </div>
                                    </span>
                                  </a>
                                  <a
                                    className="product-item"
                                    data-view-id="home_infinity_products"
                                    href="/chuot-chuyen-game-bosston-d608-led-7-mau-tu-chuyen-hang-chinh-hang-p1046464.html?spid=38056473"
                                  >
                                    <span className="style__StyledItem-sc-1bp67fh-0 khGMIT">
                                      <div>
                                        <div className="thumbnail">
                                          <div className="badge-top" />
                                          <img
                                            src="https://salt.tikicdn.com/cache/280x280/media/catalog/product//1/_/1.u5618.d20171020.t174459.960909.jpg"
                                            alt="Chuột Chuyên Game Bosston D608 LED 7 Màu Tự Chuyển - Hàng Chính Hãng"
                                          />
                                        </div>
                                        <div className="info">
                                          <div className="badge-service" />
                                          <div className="name">
                                            <span>
                                              Chuột Chuyên Game Bosston D608 LED
                                              7 Màu Tự Chuyển - Hàng Chính Hãng
                                            </span>
                                          </div>
                                          <div className="rating-review">
                                            <div className="rating">
                                              <div className="rating__total">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                              <div
                                                className="rating__average"
                                                style={{ width: "82%" }}
                                              >
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                            </div>
                                            <div className="review">(11)</div>
                                          </div>
                                          <div className="price-discount">
                                            <div className="price-discount__price">
                                              75.000 ₫
                                            </div>
                                          </div>
                                          <div className="badge-under-price" />
                                          <div className="badge-benefits" />
                                          <div className="badge-additional-info" />
                                        </div>
                                      </div>
                                    </span>
                                  </a>
                                  <a
                                    className="product-item"
                                    data-view-id="home_infinity_products"
                                    href="/bo-mau-nuoc-solid-water-color-cao-cap-12-18-24-36-mau-tang-kem-2-but-nuoc-2-mut-1-palette-chuyen-dung-cho-hoc-sinh-sinh-vien-ve-chuyen-nghiep-hang-chinh-hang-vinbuy-p75403873.html?spid=75403875"
                                  >
                                    <span className="style__StyledItem-sc-1bp67fh-0 khGMIT">
                                      <div>
                                        <div className="thumbnail">
                                          <div className="badge-top" />
                                          <img
                                            src="https://salt.tikicdn.com/cache/280x280/ts/product/ff/ba/79/a25d6cde785ff84d58372007504e3c86.jpg"
                                            alt="Bộ Màu Nước Solid Water Color Cao Cấp 12/18/24/36 Màu - Tặng Kèm 2 Bút Nước, 2 Mút, 1 Palette - Chuyên Dùng Cho Học Sinh, Sinh Viên, Vẽ Chuyên Nghiệp - Hàng Chính Hãng - VinBuy"
                                          />
                                        </div>
                                        <div className="info">
                                          <div className="badge-service" />
                                          <div className="name">
                                            <span>
                                              Bộ Màu Nước Solid Water Color Cao
                                              Cấp 12/18/24/36 Màu - Tặng Kèm 2
                                              Bút Nước, 2 Mút, 1 Palette -
                                              Chuyên Dùng Cho Học Sinh, Sinh
                                              Viên, Vẽ Chuyên Nghiệp - Hàng
                                              Chính Hãng - VinBuy
                                            </span>
                                          </div>
                                          <div className="rating-review">
                                            <div className="rating">
                                              <div className="rating__total">
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#c7c7c7"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(199, 199, 199)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                              <div
                                                className="rating__average"
                                                style={{ width: "98%" }}
                                              >
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth={0}
                                                  viewBox="0 0 24 24"
                                                  size={12}
                                                  color="#fdd836"
                                                  height={12}
                                                  width={12}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  style={{
                                                    color: "rgb(253, 216, 54)",
                                                  }}
                                                >
                                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                              </div>
                                            </div>
                                            <div className="review">(30)</div>
                                          </div>
                                          <div className="price-discount">
                                            <div className="price-discount__price">
                                              168.000 ₫
                                            </div>
                                            <div className="price-discount__discount">
                                              -52%
                                            </div>
                                          </div>
                                          <div className="badge-under-price" />
                                          <div className="badge-benefits" />
                                          <div className="badge-additional-info" />
                                        </div>
                                      </div>
                                    </span>
                                  </a>
                                  <a
                                    className="product-item"
                                    data-view-id="home_infinity_products"
                                    href="/ao-khoac-sat-nach-tap-gym-nam-unique-apparel-aksny-xam-chi-p1533417.html?spid=1536561"
                                  >
                                    <span className="style__StyledItem-sc-1bp67fh-0 khGMIT">
                                      <div>
                                        <div className="thumbnail">
                                          <div className="badge-top" />
                                          <img
                                            src="https://salt.tikicdn.com/cache/280x280/ts/product/f8/76/61/4d5fdcb0bb1d3e01d72b24e533d11766.jpg"
                                            alt="Áo Khoác Sát Nách Tập Gym Nam Unique Apparel AKSNY - Xám Chì"
                                          />
                                        </div>
                                        <div className="info">
                                          <div className="badge-service" />
                                          <div className="name">
                                            <span>
                                              Áo Khoác Sát Nách Tập Gym Nam
                                              Unique Apparel AKSNY - Xám Chì
                                            </span>
                                          </div>
                                          <div className="price-discount">
                                            <div className="price-discount__price">
                                              245.650 ₫
                                            </div>
                                            <div className="price-discount__discount">
                                              -15%
                                            </div>
                                          </div>
                                          <div className="badge-under-price" />
                                          <div className="badge-benefits" />
                                          <div className="badge-additional-info" />
                                        </div>
                                      </div>
                                    </span>
                                  </a>
                                </div>
                                <a
                                  className="style__Wrapper-oim5hq-0 fwzWaW view-more"
                                  data-view-id="home_infinity_view.more"
                                >
                                  Xem Thêm
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ padding: "15px" }}></div>
            </div>
          </div>

          {/*tygh_main_container*/}
        </div>
        {/*tygh_container*/}
      </div>
    </>
  );
};

export default Home;
