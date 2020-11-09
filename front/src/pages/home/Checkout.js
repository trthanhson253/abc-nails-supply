import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getUserCart,
  emptyUserCart,
  // saveUserAddress,
  changeShippingMethod,
  applyCoupon,
} from '../../functions/user';
import { message, Image, Alert } from 'antd';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import StripeCheckout from '../../components/StripeCheckout';
import { Steps } from 'antd';
import {
  CreditCardOutlined,
  SmileOutlined,
  FileOutlined,
} from '@ant-design/icons';
import '../../stripe.css';

const promise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Checkout = ({ history }) => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const [totalAfterDiscount, setTotalAfterDiscount] = useState(0);
  const [discountError, setDiscountError] = useState('');
  const [coupon, setCoupon] = useState('');
  const [shipping, setShipping] = useState('');
  const [shipOption, setShipOption] = useState('');
  const [cartTotalBeforeTax, setCartTotalBeforeTax] = useState(0);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));
  const { Step } = Steps;

  const loadProductInCart = (token) => {
    // setLoading(true);
    getUserCart(token).then((res) => {
      console.log('user cart res', JSON.stringify(res.data, null, 4));
      setProducts(res.data.products);
      setTotal(res.data.cartTotal);
      setCartTotalBeforeTax(res.data.cartTotalBeforeTax);
      setShipOption(res.data.shipOption);
      // setLoading(false);
    });
  };
  const handleChangeShipping = (e) => {
    dispatch({
      type: 'SET_LOADING',
      payload: true,
    });
    changeShippingMethod(e.target.value, user.token).then((res) => {
      dispatch({
        type: 'SET_LOADING',
        payload: false,
      });
      loadProductInCart(user.token);
      message.success('Shipping Method Update Successfully');
    });
  };

  const handleEditCart = () => {
    history.push(`/cart`);
  };
  const emptyCart = () => {
    // remove from local storage
    if (typeof window !== 'undefined') {
      localStorage.removeItem('cart');
    }
    // remove from redux
    dispatch({
      type: 'ADD_TO_CART',
      payload: [],
    });
    // remove from backend
    emptyUserCart(user.token).then((res) => {
      setProducts([]);
      setTotal(0);
      setTotalAfterDiscount(0);
      setCoupon('');
      message.success('Your Cart is empty.');
    });
  };

  const applyDiscountCoupon = (e) => {
    e.preventDefault();
    // console.log('send coupon to backend', coupon);
    applyCoupon(user.token, coupon).then((res) => {
      // console.log('RES ON COUPON APPLIED', res.data);

      if (res.data) {
        setTotalAfterDiscount(res.data);
        // update redux coupon applied true/false
        dispatch({
          type: 'COUPON_APPLIED',
          payload: true,
        });
      }
      // error
      if (res.data.err) {
        setDiscountError(res.data.err);
        // update redux coupon applied true/false
        dispatch({
          type: 'COUPON_APPLIED',
          payload: false,
        });
      }
    });
  };

  useEffect(() => {
    // let token = user.token;
    loadProductInCart(user.token);
  }, []);
  return (
    <>
      <div className="tygh-content clearfix">
        <div className="container-fluid  content-grid">
          <div className="container-fluid-row">
            <div className="row-fluid ">
              <div className="span16 breadcrumbs-grid ">
                <div id="breadcrumbs_10">
                  <div className="ty-breadcrumbs clearfix">
                    <Link to="/" className="ty-breadcrumbs__a">
                      <bdi>Home</bdi>
                    </Link>
                    <span className="ty-breadcrumbs__slash">/</span>
                    <span className="ty-breadcrumbs__current">
                      <bdi>Checkout</bdi>
                    </span>
                  </div>
                  {/* Inline script moved to the bottom of the page */}{' '}
                  {/*breadcrumbs_10*/}
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid-row">
            <div className="row-fluid ">
              <div className="span16 main-content-grid ">
                <div className="ty-mainbox-container clearfix">
                  <Steps>
                    <Step
                      status="process"
                      title="Shipping & Order"
                      icon={<CreditCardOutlined twoToneColor="#eb2f96" />}
                    />
                    <Step
                      status="wait"
                      title="Payment"
                      icon={<FileOutlined twoToneColor="#52c41a" />}
                    />

                    <Step status="wait" title="Done" icon={<SmileOutlined />} />
                  </Steps>
                  <h1 className="ty-mainbox-title">
                    <span className="ty-checkout__title">
                      Secure checkout <i class="fa fa-lock" />
                    </span>
                  </h1>
                  <div className="ty-mainbox-body">
                    {/* Inline script moved to the bottom of the page */}{' '}
                    {/* Inline script moved to the bottom of the page */}
                    <a name="checkout_top" />
                    {/* Inline script moved to the bottom of the page */}
                    <div
                      className="cm-save-fields row-fluid clearfix"
                      id="onestepcheckout"
                    >
                      <div className="span8">
                        <div
                          className="ty-step__container-active ty-step-one"
                          data-ct-checkout="user_info"
                          id="step_one"
                        >
                          <h3 className="ty-step__title-active clearfix">
                            <span className="ty-step__title-left">1A</span>
                            <i className="ty-step__title-arrow ty-icon-down-micro" />
                            <span className="ty-step__title-txt">
                              Shipping address
                            </span>
                          </h3>
                          <div
                            className="ty-step__container-active ty-step-two"
                            data-ct-checkout="billing_shipping_address"
                            id="step_two"
                          >
                            <div
                              id="step_two_body"
                              className="ty-step__body-active cm-skip-save-fields"
                            >
                              <div className="clearfix">
                                <div className="checkout__block"></div>
                              </div>
                              <div
                                className="clearfix"
                                data-ct-address="billing-address"
                              >
                                <div className="checkout__block">
                                  <div className="clearfix">
                                    <div className="ty-control-group ty-profile-field__item ty-billing-email">
                                      <label
                                        htmlFor="elm_32"
                                        className="ty-control-group__title cm-profile-field cm-required cm-email "
                                      >
                                        Full name
                                      </label>
                                      <input
                                        type="text"
                                        value={user.name}
                                        name="name"
                                        size="{32}"
                                        placeholder="Your Full name"
                                        className="ty-input-text cm-skip-avail-switch "
                                      />
                                    </div>
                                    <div className="ty-control-group ty-profile-field__item ty-billing-email">
                                      <label
                                        htmlFor="elm_32"
                                        className="ty-control-group__title cm-profile-field cm-required cm-email "
                                      >
                                        E-mail
                                      </label>
                                      <input
                                        type="text"
                                        name="email"
                                        size="{32}"
                                        value={user.email}
                                        placeholder="Your Email"
                                        className="ty-input-text cm-skip-avail-switch "
                                      />
                                    </div>
                                    <div className="ty-control-group ty-profile-field__item ty-billing-phone">
                                      <label className="ty-control-group__title cm-profile-field cm-required cm-phone ">
                                        Phone
                                      </label>
                                      <input
                                        type="text"
                                        name="phone"
                                        size="{32}"
                                        placeholder="Phone"
                                        className="ty-input-text"
                                      />
                                    </div>

                                    <div className="ty-control-group ty-profile-field__item ty-billing-address">
                                      <label className="ty-control-group__title cm-profile-field cm-required ">
                                        Address
                                      </label>
                                      <input
                                        type="text"
                                        name="address"
                                        size="{32}"
                                        placeholder="Address"
                                        className="ty-input-text  "
                                      />
                                    </div>

                                    <div className="ty-control-group ty-profile-field__item ty-billing-city">
                                      <label
                                        htmlFor="elm_22"
                                        className="ty-control-group__title cm-profile-field cm-required "
                                      >
                                        City
                                      </label>
                                      <input
                                        placeholder="City"
                                        type="text"
                                        name="city"
                                        size="{32}"
                                        className="ty-input-text  "
                                      />
                                    </div>
                                    <div className="ty-control-group ty-profile-field__item ty-billing-state">
                                      <label className="ty-control-group__title cm-profile-field cm-required ">
                                        State
                                      </label>
                                      <select
                                        className="ty-profile-field__select-state cm-state cm-location-billing"
                                        name="state"
                                      >
                                        <option value="No" selected>
                                          - Select state -
                                        </option>
                                        <option value="AL">Alabama</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="DC">
                                          District of Columbia
                                        </option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">
                                          Massachusetts
                                        </option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NH">
                                          New Hampshire
                                        </option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">
                                          North Carolina
                                        </option>
                                        <option value="ND">North Dakota</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">
                                          South Carolina
                                        </option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VI">
                                          Virgin Islands
                                        </option>
                                        <option value="VA">Virginia</option>
                                        <option value="WA">Washington</option>
                                        <option value="WV">
                                          West Virginia
                                        </option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WY">Wyoming</option>
                                      </select>
                                    </div>
                                    <div className="ty-control-group ty-profile-field__item ty-billing-zip-code">
                                      <label className="ty-control-group__title cm-profile-field cm-required cm-zipcode cm-location-billing">
                                        Zip/postal code
                                      </label>
                                      <input
                                        type="text"
                                        name="zipcode"
                                        size="{32}"
                                        placeholder="Zip Code"
                                        className="ty-input-text"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="clearfix"
                                data-ct-address="shipping-address"
                              >
                                <div className="ty-control-group clearfix">
                                  <input
                                    type="hidden"
                                    defaultValue="{1}"
                                    name="ship_to_another"
                                  />
                                  <label htmlFor="sw_sa">
                                    <input
                                      type="checkbox"
                                      id="sw_sa"
                                      name="ship_to_another"
                                      defaultValue="{0}"
                                      className="checkbox cm-switch-availability cm-switch-inverse cm-switch-visibility"
                                      defaultChecked="checked"
                                    />
                                    Billing Address & Shipping Address are the
                                    same.
                                  </label>
                                </div>
                              </div>
                              <div
                                className="ty-step__container-active"
                                data-ct-checkout="shipping_options"
                                id="step_three"
                              >
                                <h3 className="ty-step__title-active clearfix">
                                  <span className="ty-step__title-left">
                                    1B
                                  </span>
                                  <i className="ty-step__title-arrow ty-icon-down-micro" />
                                  <span className="ty-step__title-txt">
                                    Billing Address
                                  </span>
                                </h3>
                                <div
                                  className="clearfix"
                                  data-ct-address="billing-address"
                                >
                                  <div className="checkout__block">
                                    <div className="clearfix">
                                      <div className="ty-control-group ty-profile-field__item ty-billing-email">
                                        <label
                                          htmlFor="elm_32"
                                          className="ty-control-group__title cm-profile-field cm-required cm-email "
                                        >
                                          Full name
                                        </label>
                                        <input
                                          type="text"
                                          name="name"
                                          size="{32}"
                                          placeholder="Your Full name"
                                          className="ty-input-text cm-skip-avail-switch "
                                        />
                                      </div>
                                      <div className="ty-control-group ty-profile-field__item ty-billing-email">
                                        <label
                                          htmlFor="elm_32"
                                          className="ty-control-group__title cm-profile-field cm-required cm-email "
                                        >
                                          E-mail
                                        </label>
                                        <input
                                          type="text"
                                          name="email"
                                          size="{32}"
                                          placeholder="Your Email"
                                          className="ty-input-text cm-skip-avail-switch "
                                        />
                                      </div>
                                      <div className="ty-control-group ty-profile-field__item ty-billing-phone">
                                        <label className="ty-control-group__title cm-profile-field cm-required cm-phone ">
                                          Phone
                                        </label>
                                        <input
                                          type="text"
                                          name="phone"
                                          size="{32}"
                                          placeholder="Phone"
                                          className="ty-input-text"
                                        />
                                      </div>

                                      <div className="ty-control-group ty-profile-field__item ty-billing-address">
                                        <label className="ty-control-group__title cm-profile-field cm-required ">
                                          Address
                                        </label>
                                        <input
                                          type="text"
                                          name="address"
                                          size="{32}"
                                          placeholder="Address"
                                          className="ty-input-text  "
                                        />
                                      </div>

                                      <div className="ty-control-group ty-profile-field__item ty-billing-city">
                                        <label
                                          htmlFor="elm_22"
                                          className="ty-control-group__title cm-profile-field cm-required "
                                        >
                                          City
                                        </label>
                                        <input
                                          placeholder="City"
                                          type="text"
                                          name="city"
                                          size="{32}"
                                          className="ty-input-text  "
                                        />
                                      </div>
                                      <div className="ty-control-group ty-profile-field__item ty-billing-state">
                                        <label className="ty-control-group__title cm-profile-field cm-required ">
                                          State
                                        </label>
                                        <select
                                          className="ty-profile-field__select-state cm-state cm-location-billing"
                                          name="state"
                                        >
                                          <option value="No" selected>
                                            - Select state -
                                          </option>
                                          <option value="AL">Alabama</option>
                                          <option value="AZ">Arizona</option>
                                          <option value="AR">Arkansas</option>
                                          <option value="CA">California</option>
                                          <option value="CO">Colorado</option>
                                          <option value="CT">
                                            Connecticut
                                          </option>
                                          <option value="DE">Delaware</option>
                                          <option value="DC">
                                            District of Columbia
                                          </option>
                                          <option value="FL">Florida</option>
                                          <option value="GA">Georgia</option>
                                          <option value="ID">Idaho</option>
                                          <option value="IL">Illinois</option>
                                          <option value="IN">Indiana</option>
                                          <option value="IA">Iowa</option>
                                          <option value="KS">Kansas</option>
                                          <option value="KY">Kentucky</option>
                                          <option value="LA">Louisiana</option>
                                          <option value="ME">Maine</option>
                                          <option value="MD">Maryland</option>
                                          <option value="MA">
                                            Massachusetts
                                          </option>
                                          <option value="MI">Michigan</option>
                                          <option value="MN">Minnesota</option>
                                          <option value="MS">
                                            Mississippi
                                          </option>
                                          <option value="MO">Missouri</option>
                                          <option value="MT">Montana</option>
                                          <option value="NE">Nebraska</option>
                                          <option value="NV">Nevada</option>
                                          <option value="NH">
                                            New Hampshire
                                          </option>
                                          <option value="NJ">New Jersey</option>
                                          <option value="NM">New Mexico</option>
                                          <option value="NY">New York</option>
                                          <option value="NC">
                                            North Carolina
                                          </option>
                                          <option value="ND">
                                            North Dakota
                                          </option>
                                          <option value="OH">Ohio</option>
                                          <option value="OK">Oklahoma</option>
                                          <option value="OR">Oregon</option>
                                          <option value="PA">
                                            Pennsylvania
                                          </option>
                                          <option value="RI">
                                            Rhode Island
                                          </option>
                                          <option value="SC">
                                            South Carolina
                                          </option>
                                          <option value="SD">
                                            South Dakota
                                          </option>
                                          <option value="TN">Tennessee</option>
                                          <option value="TX">Texas</option>
                                          <option value="UT">Utah</option>
                                          <option value="VT">Vermont</option>
                                          <option value="VI">
                                            Virgin Islands
                                          </option>
                                          <option value="VA">Virginia</option>
                                          <option value="WA">Washington</option>
                                          <option value="WV">
                                            West Virginia
                                          </option>
                                          <option value="WI">Wisconsin</option>
                                          <option value="WY">Wyoming</option>
                                        </select>
                                      </div>
                                      <div className="ty-control-group ty-profile-field__item ty-billing-zip-code">
                                        <label className="ty-control-group__title cm-profile-field cm-required cm-zipcode cm-location-billing">
                                          Zip/postal code
                                        </label>
                                        <input
                                          type="text"
                                          name="zipcode"
                                          size="{32}"
                                          placeholder="Zip Code"
                                          className="ty-input-text"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*step_two*/}
                        </div>
                      </div>

                      <div className="span8">
                        <div
                          className="ty-step__container-active"
                          data-ct-checkout="shipping_options"
                          id="step_three"
                        >
                          <h3 className="ty-step__title-active clearfix">
                            <span className="ty-step__title-left">2</span>
                            <i className="ty-step__title-arrow ty-icon-down-micro" />
                            <span className="ty-step__title-txt">
                              Shipping Options
                            </span>
                          </h3>
                          <div
                            id="step_three_body"
                            className="ty-step__body-active clearfix"
                          >
                            <div className="clearfix">
                              <div className="checkout__block">
                                {/* Inline script moved to the bottom of the page */}
                                <div id="shipping_rates_list">
                                  <div className="ty-shipping-options__method">
                                    <input
                                      onChange={handleChangeShipping}
                                      value={0}
                                      id="ship"
                                      name="ship"
                                      type="radio"
                                      className="ty-valign ty-shipping-options__checkbox"
                                      defaultValue="{6}"
                                      checked={shipOption == 0}
                                    />
                                    <div className="ty-shipping-options__group">
                                      <label className="ty-valign ty-shipping-options__title">
                                        <bdi>
                                          Flat Rate Shipping (2-7 Days) -
                                          <span className="ty-strong">
                                            <bdi>
                                              $<span>8.00</span>
                                            </bdi>
                                          </span>
                                        </bdi>
                                      </label>
                                    </div>
                                  </div>
                                  <div className="ty-shipping-options__method">
                                    <input
                                      onChange={handleChangeShipping}
                                      checked={shipOption == 1}
                                      value={1}
                                      name="ship"
                                      id="pickup"
                                      type="radio"
                                      className="ty-valign ty-shipping-options__checkbox"
                                      defaultValue="{8}"
                                    />
                                    <div className="ty-shipping-options__group">
                                      <label className="ty-valign ty-shipping-options__title">
                                        <bdi>
                                          {' '}
                                          Pick Up At Store -{' '}
                                          <span className="ty-strong">
                                            Free
                                          </span>{' '}
                                        </bdi>
                                      </label>
                                    </div>
                                  </div>
                                  {/*shipping_rates_list*/}
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*step_three*/}
                        </div>
                        {/* Inline script moved to the bottom of the page */}
                        <div
                          className="ty-step__container-active ty-step-five"
                          data-ct-checkout="billing_options"
                          id="step_five"
                        >
                          <h3 className="ty-step__title-active clearfix">
                            <span className="ty-step__title-left">
                              <i className="ty-icon-ok" />
                            </span>
                            <i className="ty-step__title-arrow ty-icon-down-micro" />
                            <span className="ty-step__title-txt">
                              Order Summary
                            </span>
                          </h3>
                          <div
                            id="step_four_body"
                            className="ty-step__body-active"
                          >
                            <div className="clearfix">
                              <div
                                className="checkout-summary"
                                id="checkout_info_summary_687"
                              >
                                <div className="ty-tabs cm-j-tabs cm-track cm-j-tabs-disable-convertation clearfix">
                                  <ul
                                    className="ty-tabs__list"
                                    id="payment_tabs"
                                  >
                                    <li
                                      id="payments_tab1"
                                      className="ty-tabs__item active"
                                    >
                                      <button
                                        type="button"
                                        class="btn btn-primary"
                                        onClick={emptyCart}
                                      >
                                        <i class="fa fa-bitbucket" /> Empty Cart
                                      </button>
                                    </li>
                                    <li
                                      id="payments_tab3"
                                      className="ty-tabs__item"
                                    >
                                      <button
                                        type="button"
                                        class="btn btn-default"
                                        onClick={handleEditCart}
                                      >
                                        <i class="fa fa-edit" />
                                        Edit Card
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                                <table className="table table-middle">
                                  <thead>
                                    <tr>
                                      <th>Product</th>
                                      <th></th>
                                      <th className="center">Quantity</th>
                                      <th className="right">Subtotal</th>
                                    </tr>
                                  </thead>
                                  <tbody className="tbody">
                                    {products.map((p, i) => (
                                      <tr key={p._id}>
                                        <td width="18%">
                                          <Link to="#">
                                            <Image
                                              src={p.product.image[1].url}
                                              alt={p.product.name}
                                              width={60}
                                              height={60}
                                              style={{ opacity: '1' }}
                                            />
                                          </Link>
                                        </td>
                                        <td width="42%">{p.product.name}</td>
                                        <td width="10%" className="center">
                                          {p.count}
                                        </td>
                                        <td
                                          width="20%"
                                          className="product-subtotal right"
                                        >
                                          <bdi>
                                            <span className="price">$</span>
                                            <span className="price">
                                              {p.product.price * p.count}
                                            </span>
                                          </bdi>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                  <tfoot>
                                    <tr>
                                      <td colspan="{6}" className="right">
                                        Subtotal Total
                                      </td>
                                      <td
                                        className="right"
                                        data-ct-checkout-summary="items"
                                      >
                                        <span>
                                          <bdi>
                                            $<span>{cartTotalBeforeTax}</span>
                                          </bdi>
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colspan="{6}" className="right">
                                        Handling & Shipping
                                      </td>
                                      <td
                                        className="right"
                                        data-ct-checkout-summary="shipping"
                                      >
                                        <span>
                                          <bdi>
                                            $
                                            <span>
                                              {shipOption == 0
                                                ? '8.00'
                                                : '0.00'}
                                            </span>
                                          </bdi>
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        colspan="{3}"
                                        className="taxes ty-strong right"
                                      >
                                        Taxes
                                      </td>
                                      <td className="right taxes">&nbsp;</td>
                                    </tr>
                                    <tr>
                                      <td
                                        colspan="{3}"
                                        className="right"
                                        data-ct-checkout-summary="tax-name Georgia (GA)"
                                      >
                                        <div className="taxes-name">
                                          Georgia (GA) (8%)
                                        </div>
                                      </td>
                                      <td
                                        className="right"
                                        data-ct-checkout-summary="taxes"
                                      >
                                        <span className="taxes-amount">
                                          <bdi>
                                            $
                                            <span>
                                              {(
                                                cartTotalBeforeTax * 0.08
                                              ).toFixed(2)}
                                            </span>
                                          </bdi>
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colspan="{3}" className="right last">
                                        <h4>Order Total</h4>
                                      </td>
                                      <td className="right last">
                                        <span>
                                          <h4>
                                            <bdi>
                                              $<span>{total}</span>
                                            </bdi>
                                          </h4>
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      {totalAfterDiscount > 0 && (
                                        <>
                                          <p>Cart Total:</p>
                                          <p className="bg-success p-2">
                                            Discount Applied: Total Payable: $
                                            {totalAfterDiscount}
                                          </p>
                                        </>
                                      )}
                                    </tr>
                                  </tfoot>
                                </table>

                                {/*checkout_info_summary_687*/}
                              </div>

                              <form onSubmit={applyDiscountCoupon}>
                                <b>Apply Promo Code</b>
                                <div className="ty-discount-coupon__control-group ty-input-append">
                                  <input
                                    onChange={(e) => {
                                      setCoupon(e.target.value);
                                      setDiscountError('');
                                    }}
                                    value={coupon}
                                    type="text"
                                    className="ty-input-text cm-hint"
                                    name="coupon"
                                    size="{40}"
                                    placeholder="Apply Promo Code Here"
                                  />
                                  <button
                                    onClick={applyDiscountCoupon}
                                    className="ty-btn-go"
                                    type="button"
                                  >
                                    <i
                                      class="fa fa-play fa-dw"
                                      style={{ fontSize: '13px' }}
                                    />
                                  </button>
                                  {discountError && (
                                    <Alert
                                      message={discountError}
                                      type="error"
                                      showIcon
                                      closable
                                    />
                                  )}
                                </div>
                              </form>
                              <div className="clearfix"></div>
                              <div className="ty-customer-notes"></div>
                              {/* Inline script moved to the bottom of the page */}
                              <div
                                className="checkout-buttons"
                                style={{ float: 'right' }}
                              >
                                <button
                                  className="ty-btn__big ty-btn__primary cm-checkout-place-order ty-btn"
                                  type="submit"
                                >
                                  <span>Next: Payment</span>
                                </button>
                              </div>
                              <div className="processor-buttons hidden" />
                            </div>
                          </div>
                        </div>
                        {/*step_five*/}
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

export default Checkout;
