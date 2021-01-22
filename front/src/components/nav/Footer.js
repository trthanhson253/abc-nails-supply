import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="tygh-footer clearfix" id="tygh_footer">
        <div className="container-fluid  ty-footer-grid">
          <div className="container-fluid-row container-fluid-row-full-width hp-subscribe-social">
            <div className="row-fluid ">
              {" "}
              <div className="span16 ">
                <div className="row-fluid ">
                  {" "}
                  <div className="span4  "></div>
                  <div className="span12  ">
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
                            <label
                              className="cm-required cm-email hidden"
                              htmlFor="subscr_email78"
                            >
                              Email
                            </label>
                            <input
                              type="text"
                              name="subscribe_email"
                              id="subscr_email78"
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
                            <input
                              type="hidden"
                              name="dispatch"
                              defaultValue="newsletters.add_subscriber"
                            />
                          </div>
                        </div>
                        <input
                          type="hidden"
                          name="security_hash"
                          className="cm-no-hide-input"
                          defaultValue="9015f7214ad6c5db7036646ea0b626ad"
                        />
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
                      <div
                        className="ty-footer-general__body"
                        id="footer-general_140"
                      >
                        <ul
                          id="account_info_links_688"
                          className="ty-account-info__links"
                        >
                          <li>
                            <Link to="/login">Sign in</Link>
                          </li>
                          <li>
                            <Link to="/register">Create an account</Link>
                          </li>
                          <li>
                            <Link to="/orders">Orders</Link>
                          </li>
                          <li>
                            <Link to="/wishlist">Wish list</Link>
                          </li>
                          <li>
                            <Link to="/compare">Comparison List</Link>
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
