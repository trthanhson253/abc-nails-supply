import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image, Tabs, Tooltip, message, Spin } from 'antd';
import { getDetailProduct, getRecentlyView } from '../../functions/product';
import { setCookie, getCookie } from '../../functions/auth';
import renderHTML from 'react-render-html';
import ProductCardRelate from '../../components/cards/ProductCardRelate';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { LoadingOutlined } from '@ant-design/icons';
import { addToWishlist } from '../../functions/user';

const ProductDetailHome = (props) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('');
  const [recentProducts, setRecentProducts] = useState([]);
  const { TabPane } = Tabs;
  const { user, cart, load } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const [tooltip, setTooltip] = useState('Click to add this product');
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  // const render = require('react-render-html');

  const loadDetailProduct = (pslug) => {
    getDetailProduct(pslug).then((data) => {
      setProduct(data.product);
      setContent(data.product.description);
      // var date = new Date();
      var currentProductId = data.product._id;
      var howManyItems = 5;
      // currentValues=[];
      if (currentProductId && !getCookie('lastVisited')) {
        setCookie('lastVisited', data.product._id);
      } else {
        var currentValues = getCookie('lastVisited');

        if (!currentValues.includes(currentProductId)) {
          currentValues += '-' + currentProductId;
        }
        setCookie('lastVisited', currentValues);
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
    if (typeof window !== 'undefined') {
      // if cart is in local storage GET it
      if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
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
      localStorage.setItem('cart', JSON.stringify(unique));
      // show tooltip
      dispatch({
        type: 'SET_LOADING',
        payload: true,
      });

      setLoading(true);
      const delayed = setTimeout(() => {
        setLoading(false);
        dispatch({
          type: 'SET_VISIBLE',
          payload: true,
        });
        dispatch({
          type: 'SET_LOADING',
          payload: false,
        });
        message.success('This product is added to cart successfully');
        setTooltip('You already added this product.');
      }, 1000);

      // add to reeux state
      dispatch({
        type: 'ADD_TO_CART',
        payload: unique,
      });
      // show cart items in side drawer
    }
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    addToWishlist(product._id, user.token).then((res) => {
      // console.log("ADDED TO WISHLIST", res.data);
      message.success('Added to wishlist');
      // history.push("/user/wishlist");
    });
  };

  useEffect(() => {
    const pslug1 = props.match.params.pslug;
    if (getCookie('lastVisited')) {
      const recentlyProduct = getCookie('lastVisited').split('-').slice(-5);
      loadRecentlyView(recentlyProduct, pslug1);
    }
    // console.log("SPLIT",recently);
    loadDetailProduct(pslug1);
  }, [props]);

  return (
    <>
      <div className="tygh-content clearfix">
        <div className="container-fluid  content-grid">
          <div className="container-fluid-row">
            <div className="row-fluid ">
              {' '}
              <div className="span16 main-content-grid ut2-bottom">
                {/* Inline script moved to the bottom of the page */}
                <div className="ut2-pb ty-product-block ty-product-detail">
                  <h1 className="ut2-pb__title">
                    <bdi>{product.name}</bdi>
                  </h1>
                  <div className="ut2-breadcrumbs__wrapper">
                    <div id="breadcrumbs_11">
                      <div className="ty-breadcrumbs clearfix">
                        <a
                          href="https://www.happynailsupply.com/"
                          className="ty-breadcrumbs__a"
                        >
                          <bdi>Home</bdi>
                        </a>
                        <span className="ty-breadcrumbs__slash">/</span>
                        <a
                          href="https://www.happynailsupply.com/nail-polishes/"
                          className="ty-breadcrumbs__a"
                        >
                          <bdi>Nail Polishes</bdi>
                        </a>
                        <span className="ty-breadcrumbs__slash">/</span>
                        <a
                          href="https://www.happynailsupply.com/nail-polishes/colors/"
                          className="ty-breadcrumbs__a"
                        >
                          <bdi>Colors</bdi>
                        </a>
                        <span className="ty-breadcrumbs__slash">/</span>
                        <a
                          href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/"
                          className="ty-breadcrumbs__a"
                        >
                          <bdi>China Glaze</bdi>
                        </a>
                        <span className="ty-breadcrumbs__slash">/</span>
                        <span className="ty-breadcrumbs__current">
                          <bdi>China Glaze - Pilates Please 0.5oz</bdi>
                        </span>
                      </div>
                      {/* Inline script moved to the bottom of the page */}
                      {/*breadcrumbs_11*/}
                    </div>
                  </div>
                  <div className="ut2-pb__wrapper clearfix">
                    <div className="ut2-pb__img-wrapper ty-product-block__img-wrapper">
                      <div
                        className="ut2-pb__img cm-reload-7797"
                        data-ca-previewer="true"
                        id="product_images_7797_update"
                      >
                        <div
                          className="ab_vg-images-wrapper clearfix"
                          data-ca-previewer="true"
                        >
                          <div
                            style={{ position: 'relative', maxHeight: '420px' }}
                          >
                            <div
                              id="product_images_77975f98847a60ca8"
                              className="ty-product-img cm-preview-wrapper ab-vertical owl-carousel owl-theme"
                              style={{ opacity: 1, display: 'block' }}
                            >
                              <div className="owl-wrapper-outer">
                                <div
                                  className="owl-wrapper"
                                  style={{
                                    width: '1150px',
                                    left: '0px',
                                    display: 'block',
                                  }}
                                >
                                  <div
                                    className="owl-item active"
                                    style={{ width: '575px' }}
                                  >
                                    {product.image && (
                                      <Image
                                        src={product.image[1].url}
                                        alt={product.name}
                                        title
                                        style={{ opacity: 1 }}
                                      />
                                    )}

                                    <svg
                                      className="ty-pict__container"
                                      aria-hidden="true"
                                      width={400}
                                      height={400}
                                      viewBox="0 0 400 400"
                                      style={{
                                        maxHeight: '100%',
                                        maxWidth: '100%',
                                        position: 'absolute',
                                        top: 0,
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        zIndex: -1,
                                      }}
                                    >
                                      <rect
                                        fill="transparent"
                                        width={400}
                                        height={400}
                                      />
                                    </svg>
                                    <span className="ty-previewer__icon hidden-phone" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ut2-pb__right">
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
                              id="opener_new_post_main_info_title_7797"
                              className="ty-discussion__review-write cm-dialog-opener cm-dialog-auto-size"
                              data-ca-target-id="new_post_dialog_main_info_title_7797"
                              rel="nofollow"
                              href="#"
                              title="Quick Rating"
                            >
                              Quick Rating
                            </a>
                          </div>
                        </div>
                        <div className="ut2-pb__sku">
                          <div
                            className="ty-control-group ty-sku-item cm-hidden-wrapper"
                            id="sku_update_7797"
                          >
                            <input
                              type="hidden"
                              name="appearance[show_sku]"
                              defaultValue={1}
                            />
                            <label
                              className="ty-control-group__label"
                              id="sku_7797"
                            >
                              Item #:
                            </label>
                            <span
                              className="ty-control-group__item cm-reload-7797"
                              id="product_code_7797"
                            >
                              {product.item}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="cols-wrap">
                        <div className="col-left">
                          <div className="prices-container price-wrap">
                            <div className="ty-product-prices">
                              <span
                                className="cm-reload-7797"
                                id="old_price_update_7797"
                              ></span>
                              <div className="ut2-pb__price-actual">
                                <span
                                  className="cm-reload-7797 ty-price-update"
                                  id="price_update_7797"
                                >
                                  <span
                                    className="ty-price"
                                    id="line_discounted_price_7797"
                                  >
                                    <bdi>
                                      <span className="ty-price-num">$</span>
                                      <span
                                        id="sec_discounted_price_7797"
                                        className="ty-price-num"
                                      >
                                        {product.price}
                                      </span>
                                    </bdi>
                                  </span>
                                </span>
                              </div>
                              <span
                                className="cm-reload-7797"
                                id="line_discount_update_7797"
                              ></span>
                            </div>
                          </div>
                          <div
                            className="cm-reload-7797 stock-wrap"
                            id="product_amount_update_7797"
                          >
                            <div className="ty-control-group product-list-field">
                              <span
                                className="ty-qty-in-stock ty-control-group__item"
                                id="in_stock_info_7797"
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
                              className="cm-reload-7797"
                              id="advanced_options_update_7797"
                            ></div>
                          </div>
                          <div className="ut2-qty__wrap  ut2-pb__field-group">
                            <div
                              className="cm-reload-7797"
                              id="qty_update_7797"
                            ></div>
                          </div>

                          <div className="ut2-pb__button ty-product-block__button">
                            <div
                              className="cm-reload-7797 "
                              id="add_to_cart_update_7797"
                            >
                              <Tooltip title={tooltip}>
                                <a
                                  className="ty-btn__primary ty-btn__add-to-cart cm-ajax cm-ajax-full-render ty-btn"
                                  href="/cart"
                                  onClick={() => handleAddToCart(product)}
                                >
                                  {loading ? (
                                    <span>
                                      <span>Loading&nbsp;</span>
                                      <div class="dots-loading">
                                        <div></div>
                                        <div></div>
                                      </div>
                                    </span>
                                  ) : (
                                    <span>
                                      <i className="fa fa-shopping-cart fa-fw" />
                                      <span>Add to cart</span>
                                    </span>
                                  )}
                                </a>
                              </Tooltip>

                              <a
                                className="ut2-add-to-wish label cm-submit"
                                onClick={handleAddToWishlist}
                              >
                                <i className="ut2-icon-baseline-favorite" /> Add
                                to wish list
                              </a>
                              <a
                                className="ut2-add-to-compare cm-ajax cm-ajax-full-render label cm-tooltip"
                                title="Add to comparison list"
                                href="#"
                              >
                                <i className="ut2-icon-baseline-equalizer" />{' '}
                                Compare{' '}
                              </a>
                              {/*add_to_cart_update_7797*/}
                            </div>
                          </div>
                        </div>
                        <div className="col-right">
                          <div className="brand ut2-pb__product-brand">
                            <div className="ty-features-list">
                              {' '}
                              <a href="#" />
                            </div>
                          </div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Inline script moved to the bottom of the page */}

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
                          borderStyle: 'solid',
                          padding: '15px',
                          borderRadius: '10px',
                          borderColor: '#F0F0F0',
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
                    {getCookie('lastVisited') ? (
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
