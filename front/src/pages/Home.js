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
                                      id="det_img_156352866"
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
                <div className="row-fluid ">
                  {" "}
                  <div className="span16 hp-newproducts ut2-top-bottom">
                    <div className="ty-mainbox-simple-container clearfix">
                      <h2 className="ty-mainbox-simple-title">
                        Shop By Category
                      </h2>
                      <div className="ty-mainbox-simple-body">
                        <div className="ab-fn-parent ab-fn-block-700_145  clearfix">
                          <div className="ab-fn-first-level ab-fn-clipped ab__fn_scroller one_level active">
                            {categories.map((c) => (
                              <div className="ab-fn-first-level-item scroller-item ty-column6  ab-fn-dont-allow-link1 active">
                                <Link
                                  to={`/${c.slug}/product`}
                                  className="ab-fn-fl-content"
                                >
                                  <div
                                    className="ab-fn-image-wrap"
                                    style={{ width: "100px" }}
                                  >
                                    <img
                                      className="ty-pict lazyOwl cm-image"
                                      data-src={c.images[1].url}
                                      alt={c.name}
                                      title
                                    />
                                    <span className="ab-loading-spinner" />
                                  </div>
                                  <span className="ab-fn-item-header">
                                    <span>{c.name}</span>
                                  </span>
                                </Link>
                              </div>
                            ))}
                          </div>
                          <div className="ab-fn-common-link">
                            <a
                              href="/categories/"
                              className="ty-btn ty-btn__primary ty-btn__big "
                            >
                              <span>VIEW ALL CATEGORIES</span>
                            </a>
                          </div>
                        </div>
                        {/* Inline script moved to the bottom of the page */}
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
                      <h2 className="ty-mainbox-simple-title">New Products</h2>
                      <div className="ty-mainbox-simple-body">
                        <div className="ab-fn-parent ab-fn-block-700_145  clearfix">
                          <div className="ab-fn-first-level ab-fn-clipped ab__fn_scroller one_level active">
                            {categories.map((c) => (
                              <div className="ab-fn-first-level-item scroller-item ty-column6  ab-fn-dont-allow-link1 active">
                                <Link
                                  to={`/${c.slug}/product`}
                                  className="ab-fn-fl-content"
                                >
                                  <div
                                    className="ab-fn-image-wrap"
                                    style={{ width: "100px" }}
                                  >
                                    <img
                                      className="ty-pict lazyOwl cm-image"
                                      data-src={c.images[1].url}
                                      alt={c.name}
                                      title
                                    />
                                    <span className="ab-loading-spinner" />
                                  </div>
                                  <span className="ab-fn-item-header">
                                    <span>{c.name}</span>
                                  </span>
                                </Link>
                              </div>
                            ))}
                          </div>
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
                        Best-seller Products
                      </h2>
                      <div className="ty-mainbox-simple-body">
                        <div className="ab-fn-parent ab-fn-block-700_145  clearfix">
                          <div className="ab-fn-first-level ab-fn-clipped ab__fn_scroller one_level active">
                            {categories.map((c) => (
                              <div className="ab-fn-first-level-item scroller-item ty-column6  ab-fn-dont-allow-link1 active">
                                <Link
                                  to={`/${c.slug}/product`}
                                  className="ab-fn-fl-content"
                                >
                                  <div
                                    className="ab-fn-image-wrap"
                                    style={{ width: "100px" }}
                                  >
                                    <img
                                      className="ty-pict lazyOwl cm-image"
                                      data-src={c.images[1].url}
                                      alt={c.name}
                                      title
                                    />
                                    <span className="ab-loading-spinner" />
                                  </div>
                                  <span className="ab-fn-item-header">
                                    <span>{c.name}</span>
                                  </span>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
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
