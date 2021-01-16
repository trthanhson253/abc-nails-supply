import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getWishlist, removeWishlist } from "../functions/user";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import Loader from "../components/Loader";

const WishList = () => {
  const dispatch = useDispatch();
  const [wishlist, setWishlist] = useState([]);
  const { user, spin } = useSelector((state) => ({ ...state }));

  const loadWishlist = () => {
    dispatch({
      type: "SET_SPIN",
      payload: true,
    });
    getWishlist(user.token).then((res) => {
      const delayed = setTimeout(() => {
        dispatch({
          type: "SET_SPIN",
          payload: false,
        });
      }, 1000);
      setWishlist(res.data.wishlist);
    });
  };

  const handleRemove = (productId) => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    removeWishlist(productId, user.token).then((res) => {
      const delayed = setTimeout(() => {
        dispatch({
          type: "SET_LOADING",
          payload: false,
        });
      }, 1000);
      loadWishlist();
    });
  };

  useEffect(() => {
    loadWishlist();
  }, []);

  return (
    <>
      <Helmet>
        <title>Wishlist | ABC Nails Supply</title>
      </Helmet>
      <div className="tygh-content clearfix">
        <div className="container-fluid  content-grid">
          <div className="container-fluid-row">
            <div className="row-fluid ">
              {" "}
              <div className="span16 breadcrumbs-grid ">
                <div id="breadcrumbs_10">
                  <div className="ty-breadcrumbs clearfix">
                    <Link to="/" className="ty-breadcrumbs__a">
                      <bdi>Home</bdi>
                    </Link>
                    <span className="ty-breadcrumbs__slash">/</span>
                    <span className="ty-breadcrumbs__current">
                      <bdi>Wish list content</bdi>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid-row">
            <div className="row-fluid ">
              {" "}
              <div className="span16 main-content-grid ">
                <div className="ty-mainbox-container clearfix">
                  <h1 className="ty-mainbox-title">Wish list content</h1>
                  <div className="ty-mainbox-body">
                    <div className="grid-list ut2-wl__grid">
                      {wishlist.length > 0 ? (
                        <>
                          {wishlist.map((p) => (
                            <div className="ty-column4" key={p._id}>
                              <div
                                className="ut2-gl__item "
                                style={{ height: "418px" }}
                              >
                                <div className="ty-twishlist-item">
                                  <a
                                    href="#"
                                    className="ty-twishlist-item__remove ty-remove"
                                    title="Remove"
                                    onClick={() => handleRemove(p._id)}
                                  >
                                    <i class="fa fa-trash" />
                                    <span className="ty-twishlist-item__txt ty-remove__txt">
                                      Remove
                                    </span>
                                  </a>
                                </div>
                                <div
                                  className="ut2-gl__body"
                                  style={{ minHeight: "418px" }}
                                >
                                  {spin ? (
                                    <Loader />
                                  ) : (
                                    <>
                                      <div
                                        className="ut2-gl__image"
                                        style={{ height: "250px" }}
                                      >
                                        <a href="#">
                                          <img
                                            className="ty-pict lazyOwl cm-image abt-ut2-lazy-loaded"
                                            id="det_img_8795desktop"
                                            src={p.image[1].url}
                                            alt={p.name}
                                            title
                                            style={{ opacity: 1 }}
                                          />
                                        </a>
                                        <div className="ut2-gl__buttons">
                                          <a
                                            className="ut2-quick-view-button cm-tooltip cm-dialog-auto-size"
                                            title="Quick view"
                                            href="#"
                                          >
                                            <i class="fa fa-eye" />
                                          </a>
                                          <a
                                            className="ut2-add-to-wish cm-submit cm-tooltip"
                                            title="Add to wishlist"
                                            id="button_wishlist_8795"
                                          >
                                            <i className="ut2-icon-baseline-favorite" />{" "}
                                          </a>
                                          <a
                                            className="ut2-add-to-compare cm-ajax cm-ajax-full-render cm-tooltip"
                                            title="Add to comparison list"
                                            rel="nofollow"
                                            href="#"
                                          >
                                            <i className="ut2-icon-baseline-equalizer" />{" "}
                                          </a>
                                        </div>
                                      </div>
                                      <div className="ut2-gl__rating no-rating">
                                        <span className="ty-nowrap ty-stars">
                                          <i className="ty-icon-star-empty" />
                                          <i className="ty-icon-star-empty" />
                                          <i className="ty-icon-star-empty" />
                                          <i className="ty-icon-star-empty" />
                                          <i className="ty-icon-star-empty" />
                                        </span>
                                      </div>
                                      <div
                                        className="ty-control-group ty-sku-item cm-hidden-wrapper"
                                        id="sku_update_8795"
                                      >
                                        <input
                                          type="hidden"
                                          name="appearance[show_sku]"
                                          defaultValue={1}
                                        />
                                        <label
                                          className="ty-control-group__label"
                                          id="sku_8795"
                                        >
                                          Item #:
                                        </label>
                                        <span
                                          className="ty-control-group__item cm-reload-8795"
                                          id="product_code_8795"
                                        >
                                          {p.item}
                                        </span>
                                      </div>
                                      <div className="ut2-gl__name">
                                        <a href="#" className="product-title">
                                          {p.name}
                                        </a>
                                      </div>
                                      <div
                                        className="ut2-gl__price 	pr-col"
                                        style={{ minHeight: "39px" }}
                                      >
                                        <div>
                                          <span
                                            className="cm-reload-8795"
                                            id="old_price_update_8795"
                                          ></span>
                                          <span
                                            className="cm-reload-8795 ty-price-update"
                                            id="price_update_8795"
                                          >
                                            <span
                                              className="ty-price"
                                              id="line_discounted_price_8795"
                                            >
                                              <bdi>
                                                <span className="ty-price-num">
                                                  $
                                                </span>
                                                <span
                                                  id="sec_discounted_price_8795"
                                                  className="ty-price-num"
                                                >
                                                  {p.price}
                                                </span>
                                              </bdi>
                                            </span>
                                          </span>
                                        </div>
                                        <div></div>
                                      </div>
                                      <div className="ut2-gl__bottom"></div>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </>
                      ) : (
                        <p class="ty-no-items">Your wish list is empty</p>
                      )}
                    </div>

                    <div className="ty-wish-list__buttons">
                      <a href="#" className="ty-btn ty-btn__tertiary ">
                        <span>Clear wish list</span>
                      </a>
                      <a
                        className="ty-btn ty-btn__secondary text-button "
                        href="#"
                      >
                        Continue shopping
                      </a>
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

export default WishList;
