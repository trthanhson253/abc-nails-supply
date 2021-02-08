import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
  let { user } = useSelector((state) => ({ ...state }));
  return (
    <>
      <div className="tygh-footer clearfix" id="tygh_footer">
        <div className="container-fluid  ty-footer-grid">
          <div
            className="container-fluid-row container-fluid-row-full-width hp-subscribe-social"
            style={{ position: "relative" }}
          >
            <div className="row-fluid ">
              {" "}
              <div className="span16 ">
                <div className="row-fluid ">
                  {" "}
                  <div className="span4">
                    <img
                      className="ty-pict  ty-logo-container__image cm-image"
                      src={require("../../assets/img/newsletter.png")}
                      alt="ABC Nail Supply"
                      title="ABC Nail Supply"
                      style={{
                        position: "absolute",
                        bottom: "30px",
                        left: "80px",
                      }}
                      width={100}
                      height={20}
                    />
                  </div>
                  <div className="span12">
                    <div className="ty-footer-form-block ty-footer-form-block--responsive">
                      <form
                        action="https://www.ABCnailsupply.com/"
                        className="cm-processing-personal-data"
                      >
                        <h3 className="ty-footer-form-block__title">
                          Subscribe For Our Newsletter
                        </h3>
                        <div className="ty-footer-form-block__form-container">
                          <div className="ty-footer-form-block__form ty-control-group ty-input-append cm-block-add-subscribe">
                            <label className="cm-required cm-email hidden">
                              Email
                            </label>
                            <input
                              type="text"
                              name="subscribe_email"
                              size={20}
                              defaultValue="Enter e-mail address"
                              className="cm-hint ty-input-text"
                            />
                            <button
                              title="Go"
                              className="ty-btn-go"
                              type="submit"
                            >
                              <i className="ty-btn-go__icon ty-icon-right-dir" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid-row container-fluid-row-full-width ty-footer-menu b-top">
            <div className="row-fluid ">
              {" "}
              <div className="span16 ">
                <div className="row-fluid ">
                  {" "}
                  <div className="span4 my-account-grid ">
                    <div className="ty-footer ty-float-left">
                      <div
                        className="ty-footer-general__header  cm-combination"
                        id="sw_footer-general_140"
                      >
                        <span>My account</span>
                        <i className="ty-footer-menu__icon-open ty-icon-down-open" />
                        <i className="ty-footer-menu__icon-hide ty-icon-up-open" />
                      </div>
                      <div className="ty-footer-general__body">
                        <ul className="ty-account-info__links">
                          {!user && (
                            <>
                              {" "}
                              <li>
                                <Link to="/login">Sign in</Link>
                              </li>
                              <li>
                                <Link to="/register">Create an account</Link>
                              </li>
                            </>
                          )}

                          <li>
                            <Link to="/user/orders">Orders</Link>
                          </li>
                          <li>
                            <Link to="/user/wishlist">Wish list</Link>
                          </li>
                          <li>
                            <Link to="/user/compare">Comparison List</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="span4 customer-service-grid "></div>
                  <div className="span4 about-grid "></div>
                  <div className="span4  ">
                    <div className="hp-footer-info-block ty-float-left">
                      <div
                        className="ty-wysiwyg-content"
                        data-ca-live-editor-object-id={0}
                        data-ca-live-editor-object-type
                      >
                        <div className="hp-footer-logo">
                          <img
                            src={require("../../assets/img/abc-logo.png")}
                            width={280}
                            height={120}
                          />
                        </div>
                        <ul>
                          <li className="hp-address">1178 Skylark Dr</li>
                          <li className="hp-city">Morrow, GA 30260</li>
                          <li className="hp-phone">Phone: 470-437-3433</li>
                          <li className="hp-viet">(We speak Vietnamese.)</li>
                          <li className="hp-email">
                            <a
                              href="mailto:sales@abcnailsupply.com?Subject=ABC%20Nail%20Supply%20-%20Sales%20Questions"
                              target="_top"
                            >
                              sales@abcnailsupply.com
                            </a>
                          </li>
                        </ul>
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
              <div className="span16 ty-footer-grid__full-width footer-copyright ">
                <div className="row-fluid ">
                  {" "}
                  <div className="span16  ">
                    <div className="hp-cr ty-float-left">
                      <div
                        className="ty-wysiwyg-content"
                        data-ca-live-editor-object-id={0}
                        data-ca-live-editor-object-type
                      >
                        <p>© 2020 ABC Nail Supply.</p>
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

export default Footer;
