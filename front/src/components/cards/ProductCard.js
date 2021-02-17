import React, { useState } from "react";
import { Link } from "react-router-dom";
import { message, Modal } from "antd";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist } from "../../functions/user";
import Loader from "../Loader";

const ProductCard = ({ product }) => {
  const { user, spin } = useSelector((state) => ({ ...state }));
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

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
  const needLogin = () => {
    setVisible(true);
  };
  return (
    <>
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
      <div className="ty-column3" data-ut2-load-more="first-item">
        <div className="ut2-gl__item " style={{ height: "418px" }}>
          <div className="ut2-gl__body" style={{ height: "418px" }}>
            {spin ? (
              <Loader />
            ) : (
              <>
                {" "}
                <div className="ut2-gl__image" style={{ height: "250px" }}>
                  <Link
                    to={`/${product.category.slug}/${product.sub.slug}/${product.subSub.slug}/${product.slug}/product`}
                  >
                    <img
                      className="ty-pict lazyOwl cm-image abt-ut2-lazy-loaded"
                      src={product.image[0].url}
                      alt={product.name}
                      title
                      style={{ opacity: 1 }}
                    />
                  </Link>
                  {user ? (
                    <div className="ut2-gl__buttons">
                      <a
                        className="ut2-add-to-wish cm-submit cm-tooltip"
                        title="Add to wishlist"
                        onClick={handleAddToWishlist}
                      >
                        <i class="fa fa-heart" />{" "}
                      </a>
                      <a className="ut2-add-to-compare cm-ajax cm-ajax-full-render cm-tooltip">
                        <i class="fa fa-bar-chart-o" />{" "}
                      </a>
                    </div>
                  ) : (
                    <div className="ut2-gl__buttons">
                      <a
                        className="ut2-add-to-wish cm-submit cm-tooltip"
                        title="Add to wishlist"
                        onClick={needLogin}
                      >
                        <i class="fa fa-heart" />{" "}
                      </a>
                      <a
                        className="ut2-add-to-compare cm-ajax cm-ajax-full-render cm-tooltip"
                        onClick={needLogin}
                      >
                        <i class="fa fa-bar-chart-o" />{" "}
                      </a>
                    </div>
                  )}
                </div>
                <div className="ut2-gl__rating no-rating">
                  <b>(5)</b>&nbsp;&nbsp;
                  <span className="ty-nowrap ty-stars">
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
                </div>
                <div className="ty-control-group ty-sku-item cm-hidden-wrapper">
                  <label className="ty-control-group__label">Item #:</label>
                  <span className="ty-control-group__item cm-reload-7797">
                    {product.item}
                  </span>
                </div>
                <div className="ut2-gl__name">
                  <Link
                    to={`/${product.category.slug}/${product.sub.slug}/${product.subSub.slug}/${product.slug}/product`}
                    className="product-title"
                  >
                    {product.name}
                  </Link>
                </div>
                <div
                  className="ut2-gl__price pr-col"
                  style={{ minHeight: "39px" }}
                >
                  <div>
                    {" "}
                    <span className="cm-reload-7797"></span>
                    <span className="cm-reload-7797 ty-price-update">
                      <span className="ty-price">
                        <bdi>
                          <span className="ty-price-num">$</span>
                          <span className="ty-price-num">{product.price}</span>
                        </bdi>
                      </span>
                    </span>
                  </div>
                  <div> </div>
                </div>
                <div className="ut2-gl__control bt-2x ut2-view-qty view">
                  <div className="ut2-gl__qty">
                    <div className="cm-reload-7797" id="qty_update_7797">
                      <div className="ty-qty clearfix changer"></div>
                    </div>
                  </div>
                </div>
                <div className="ut2-gl__bottom"></div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
