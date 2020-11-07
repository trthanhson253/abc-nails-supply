import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getUserCart,
  emptyUserCart,
  // saveUserAddress,
  applyCoupon,
} from '../../functions/user';
import { message, Image } from 'antd';

const Checkout = ({ history }) => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const [totalAfterDiscount, setTotalAfterDiscount] = useState(0);
  const [discountError, setDiscountError] = useState('');
  const [coupon, setCoupon] = useState('');

  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));

  const loadProductInCart = (token) => {
    // setLoading(true);
    getUserCart(token).then((res) => {
      console.log('user cart res', JSON.stringify(res.data, null, 4));
      setProducts(res.data.products);
      setTotal(res.data.cartTotal);
      // setLoading(false);
    });
  };

  useEffect(() => {
    let token = user.token;
    loadProductInCart(token);
  }, []);
  const handleEditCard = () => {
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
  const applyDiscountCoupon = () => {
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
  return (
    <>
      <div className="tygh-content clearfix">
        <div className="container-fluid  content-grid">
          <div className="container-fluid-row">
            <div className="row-fluid ">
              <div className="span16 breadcrumbs-grid ">
                <div id="breadcrumbs_10">
                  <div className="ty-breadcrumbs clearfix">
                    <a
                      href="https://www.happynailsupply.com/"
                      className="ty-breadcrumbs__a"
                    >
                      <bdi>Home</bdi>
                    </a>
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
                      <form
                        name="onestepcheckout_form"
                        method="post"
                        className="cm-processed-form"
                      >
                        <div className="span5">
                          <div
                            className="ty-step__container-active ty-step-one"
                            data-ct-checkout="user_info"
                            id="step_one"
                          >
                            <h3 className="ty-step__title-active clearfix">
                              <span className="ty-step__title-left">1</span>
                              <i className="ty-step__title-arrow ty-icon-down-micro" />
                              <span className="ty-step__title-txt">
                                Billing address
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
                                      Ship to the same address
                                    </label>
                                  </div>
                                  <div className="clearfix">
                                    <div id="sa">
                                      <div className="checkout__block">
                                        <div className="ty-subheader">
                                          Shipping address
                                        </div>
                                        <div className="ty-control-group ty-profile-field__item ty-shipping-first-name">
                                          <label
                                            htmlFor="elm_15"
                                            className="ty-control-group__title cm-profile-field cm-required "
                                          >
                                            First name
                                          </label>
                                          <input
                                            x-autocompletetype="given-name"
                                            type="text"
                                            id="elm_15"
                                            name="user_data[s_firstname]"
                                            size="{32}"
                                            defaultValue="son"
                                            className="ty-input-text disabled  cm-focus"
                                            disabled="disabled"
                                          />
                                        </div>
                                        <div className="ty-control-group ty-profile-field__item ty-shipping-last-name">
                                          <label
                                            htmlFor="elm_17"
                                            className="ty-control-group__title cm-profile-field cm-required "
                                          >
                                            Last name
                                          </label>
                                          <input
                                            x-autocompletetype="surname"
                                            type="text"
                                            id="elm_17"
                                            name="user_data[s_lastname]"
                                            size="{32}"
                                            defaultValue="tran"
                                            className="ty-input-text disabled "
                                            disabled="disabled"
                                          />
                                        </div>
                                        <div className="ty-control-group ty-profile-field__item ty-shipping-phone">
                                          <label
                                            htmlFor="elm_31"
                                            className="ty-control-group__title cm-profile-field cm-required cm-phone "
                                          >
                                            Phone
                                          </label>
                                          <input
                                            x-autocompletetype="phone-full"
                                            type="text"
                                            id="elm_31"
                                            name="user_data[s_phone]"
                                            size="{32}"
                                            defaultValue="{4049881923}"
                                            className="ty-input-text disabled "
                                            disabled="disabled"
                                          />
                                        </div>
                                        <div className="ty-control-group ty-profile-field__item ty-">
                                          <label
                                            htmlFor="elm_38"
                                            className="ty-control-group__title cm-profile-field  "
                                          >
                                            Company
                                          </label>
                                          <input
                                            type="text"
                                            id="elm_38"
                                            name="user_data[fields][38]"
                                            size="{32}"
                                            defaultValue
                                            className="ty-input-text disabled "
                                            disabled="disabled"
                                          />
                                        </div>
                                        <div className="ty-control-group ty-profile-field__item ty-shipping-address">
                                          <label
                                            htmlFor="elm_19"
                                            className="ty-control-group__title cm-profile-field cm-required "
                                          >
                                            Address
                                          </label>
                                          <input
                                            x-autocompletetype="street-address"
                                            type="text"
                                            id="elm_19"
                                            name="user_data[s_address]"
                                            size="{32}"
                                            defaultValue="123 Abc Dr"
                                            className="ty-input-text disabled "
                                            disabled="disabled"
                                          />
                                        </div>
                                        <div className="ty-control-group ty-profile-field__item ty-shipping-address-line2">
                                          <input
                                            x-autocompletetype="address-line2"
                                            type="text"
                                            id="elm_21"
                                            name="user_data[s_address_2]"
                                            size="{32}"
                                            defaultValue
                                            className="ty-input-text disabled "
                                            disabled="disabled"
                                          />
                                        </div>
                                        <div className="ty-control-group ty-profile-field__item ty-shipping-city">
                                          <label
                                            htmlFor="elm_23"
                                            className="ty-control-group__title cm-profile-field cm-required "
                                          >
                                            City
                                          </label>
                                          <input
                                            x-autocompletetype="city"
                                            type="text"
                                            id="elm_23"
                                            name="user_data[s_city]"
                                            size="{32}"
                                            defaultValue="Morrow"
                                            className="ty-input-text disabled "
                                            disabled="disabled"
                                          />
                                        </div>
                                        <div className="ty-control-group ty-profile-field__item ty-shipping-state">
                                          <label
                                            htmlFor="elm_25"
                                            className="ty-control-group__title cm-profile-field cm-required "
                                          >
                                            State/province
                                          </label>
                                          <select
                                            x-autocompletetype="state"
                                            id="elm_25"
                                            className="ty-profile-field__select-state cm-state cm-location-shipping disabled"
                                            name="user_data[s_state]"
                                            disabled
                                          >
                                            <option value>
                                              - Select state -
                                            </option>
                                            <option value="AL">Alabama</option>
                                            <option value="AZ">Arizona</option>
                                            <option value="AR">Arkansas</option>
                                            <option value="CA">
                                              California
                                            </option>
                                            <option value="CO">Colorado</option>
                                            <option value="CT">
                                              Connecticut
                                            </option>
                                            <option value="DE">Delaware</option>
                                            <option value="DC">
                                              District of Columbia
                                            </option>
                                            <option value="FL">Florida</option>
                                            <option value="GA" selected>
                                              Georgia
                                            </option>
                                            <option value="ID">Idaho</option>
                                            <option value="IL">Illinois</option>
                                            <option value="IN">Indiana</option>
                                            <option value="IA">Iowa</option>
                                            <option value="KS">Kansas</option>
                                            <option value="KY">Kentucky</option>
                                            <option value="LA">
                                              Louisiana
                                            </option>
                                            <option value="ME">Maine</option>
                                            <option value="MD">Maryland</option>
                                            <option value="MA">
                                              Massachusetts
                                            </option>
                                            <option value="MI">Michigan</option>
                                            <option value="MN">
                                              Minnesota
                                            </option>
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
                                            <option value="NJ">
                                              New Jersey
                                            </option>
                                            <option value="NM">
                                              New Mexico
                                            </option>
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
                                            <option value="TN">
                                              Tennessee
                                            </option>
                                            <option value="TX">Texas</option>
                                            <option value="UT">Utah</option>
                                            <option value="VT">Vermont</option>
                                            <option value="VI">
                                              Virgin Islands
                                            </option>
                                            <option value="VA">Virginia</option>
                                            <option value="WA">
                                              Washington
                                            </option>
                                            <option value="WV">
                                              West Virginia
                                            </option>
                                            <option value="WI">
                                              Wisconsin
                                            </option>
                                            <option value="WY">Wyoming</option>
                                          </select>
                                          <input
                                            x-autocompletetype="state"
                                            type="text"
                                            id="elm_25_d"
                                            name="user_data[s_state]"
                                            size="{32}"
                                            maxlength="{64}"
                                            defaultValue="GA"
                                            disabled
                                            className="cm-state cm-location-shipping ty-input-text hidden disabled cm-skip-avail-switch"
                                          />
                                        </div>
                                        <div className="ty-control-group ty-profile-field__item ty-shipping-zip-code">
                                          <label
                                            htmlFor="elm_29"
                                            className="ty-control-group__title cm-profile-field cm-required cm-zipcode cm-location-shipping"
                                          >
                                            Zip/postal code
                                          </label>
                                          <input
                                            x-autocompletetype="postal-code"
                                            type="text"
                                            id="elm_29"
                                            name="user_data[s_zipcode]"
                                            size="{32}"
                                            defaultValue="{30260}"
                                            className="ty-input-text disabled "
                                            disabled="disabled"
                                          />
                                        </div>
                                        <div className="ty-control-group ty-profile-field__item ty-shipping-country">
                                          <label
                                            htmlFor="elm_27"
                                            className="ty-control-group__title cm-profile-field cm-required "
                                          >
                                            Country
                                          </label>
                                          <select
                                            x-autocompletetype="country"
                                            id="elm_27"
                                            className="ty-profile-field__select-country cm-country cm-location-shipping disabled"
                                            name="user_data[s_country]"
                                            disabled="disabled"
                                          >
                                            <option value>
                                              - Select country -
                                            </option>
                                            <option
                                              selected="selected"
                                              value="US"
                                            >
                                              United States
                                            </option>
                                          </select>
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
                        <div className="span5">
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
                                        type="radio"
                                        className="ty-valign ty-shipping-options__checkbox"
                                        id="sh_0_6"
                                        name="shipping_ids[0]"
                                        defaultValue="{6}"
                                        onclick="fn_calculate_total_shipping_cost();"
                                        defaultChecked='"checked"'
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
                                        type="radio"
                                        className="ty-valign ty-shipping-options__checkbox"
                                        id="sh_0_8"
                                        name="shipping_ids[0]"
                                        defaultValue="{8}"
                                        onclick="fn_calculate_total_shipping_cost();"
                                      />
                                      <div className="ty-shipping-options__group">
                                        <label
                                          htmlFor="sh_0_8"
                                          className="ty-valign ty-shipping-options__title"
                                        >
                                          <bdi>
                                            {' '}
                                            Pick Up At Store (Will Call) -{' '}
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
                            className="ty-step__container-active ty-step-four"
                            data-ct-checkout="billing_options"
                            id="step_four"
                          >
                            <h3 className="ty-step__title-active clearfix">
                              <span className="ty-step__title-left">3</span>
                              <i className="ty-step__title-arrow ty-icon-down-micro" />
                              <span className="ty-step__title-txt">
                                Payment Options
                              </span>
                            </h3>
                            <div
                              id="step_four_body"
                              className="ty-step__body-active"
                            >
                              <div className="clearfix ty-checkout__billing-tabs">
                                <div className="clearfix">
                                  {/* Inline script moved to the bottom of the page */}
                                  <div className="ty-tabs cm-j-tabs cm-track cm-j-tabs-disable-convertation clearfix">
                                    <ul
                                      className="ty-tabs__list"
                                      id="payment_tabs"
                                    >
                                      <li
                                        id="payments_tab1"
                                        className="ty-tabs__item active"
                                      >
                                        <a
                                          className="ty-tabs__a cm-ajax cm-ajax-full-render"
                                          data-ca-target-id="checkout*,step_four,step_five"
                                          href="https://www.happynailsupply.com/index.php?dispatch=onestepcheckout.checkout&active_tab=tab1&payment_id=1"
                                        >
                                          Credit card
                                        </a>
                                      </li>
                                      <li
                                        id="payments_tab3"
                                        className="ty-tabs__item"
                                      >
                                        <a
                                          className="ty-tabs__a cm-ajax cm-ajax-full-render"
                                          data-ca-target-id="checkout*,step_four,step_five"
                                          href="https://www.happynailsupply.com/index.php?dispatch=onestepcheckout.checkout&active_tab=tab3&payment_id=12"
                                        >
                                          PayPal
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="cm-tabs-content tabs-content clearfix">
                                    <div className id="content_payments_tab1">
                                      <div className="ty-checkout__billing-options ">
                                        <div className="clearfix">
                                          <div className="ty-payments-list__instruction other-text" />
                                          <div className="ty-payments-list__description">
                                            We Accept Visa, Mastercard &amp;
                                            Discover
                                          </div>

                                          <div className="litecheckout__item">
                                            <div className="clearfix">
                                              <div className="ty-credit-card cm-cc_form_1">
                                                <div className="ty-credit-card__control-group ty-control-group">
                                                  <label
                                                    htmlFor="credit_card_number_1"
                                                    className="ty-control-group__title cm-cc-number cc-number_1 cm-required"
                                                  >
                                                    Card number
                                                  </label>

                                                  <input
                                                    type="text"
                                                    name="name"
                                                    size="{42}"
                                                    placeholder="Your Full name"
                                                    className="ty-input-text cm-skip-avail-switch "
                                                  />

                                                  <ul className="ty-cc-icons cm-cc-icons cc-icons_1">
                                                    <li className="ty-cc-icons__item cc-default cm-cc-default">
                                                      <span className="ty-cc-icons__icon default">
                                                        &nbsp;
                                                      </span>
                                                    </li>
                                                    <li className="ty-cc-icons__item cm-cc-visa">
                                                      <span className="ty-cc-icons__icon visa">
                                                        &nbsp;
                                                      </span>
                                                    </li>
                                                    <li className="ty-cc-icons__item cm-cc-visa_electron">
                                                      <span className="ty-cc-icons__icon visa-electron">
                                                        &nbsp;
                                                      </span>
                                                    </li>
                                                    <li className="ty-cc-icons__item cm-cc-mastercard">
                                                      <span className="ty-cc-icons__icon mastercard">
                                                        &nbsp;
                                                      </span>
                                                    </li>
                                                    <li className="ty-cc-icons__item cm-cc-maestro">
                                                      <span className="ty-cc-icons__icon maestro">
                                                        &nbsp;
                                                      </span>
                                                    </li>
                                                    <li className="ty-cc-icons__item cm-cc-amex">
                                                      <span className="ty-cc-icons__icon american-express">
                                                        &nbsp;
                                                      </span>
                                                    </li>
                                                    <li className="ty-cc-icons__item cm-cc-discover">
                                                      <span className="ty-cc-icons__icon discover">
                                                        &nbsp;
                                                      </span>
                                                    </li>
                                                  </ul>
                                                </div>
                                                <div className="ty-credit-card__control-group ty-control-group">
                                                  <label className="ty-control-group__title cm-regexp cm-cc-date cc-date_1 cm-cc-exp-month cm-required">
                                                    Valid thru (mm/yy)
                                                  </label>
                                                  <label className="cm-required cm-regexp cm-cc-date cm-cc-exp-year cc-year_1 hidden" />
                                                  <input
                                                    type="number"
                                                    id="credit_card_month_1"
                                                    min="{0}"
                                                    name="payment_info[expiry_month]"
                                                    defaultValue
                                                    size="{2}"
                                                    maxlength="{2}"
                                                    className="ty-credit-card__input-short ty-inputmask-bdi"
                                                  />
                                                  &nbsp;&nbsp;/&nbsp;&nbsp;
                                                  <input
                                                    type="number"
                                                    min="{0}"
                                                    id="credit_card_year_1"
                                                    name="payment_info[expiry_year]"
                                                    defaultValue
                                                    size="{2}"
                                                    maxlength="{2}"
                                                    className="ty-credit-card__input-short ty-inputmask-bdi"
                                                  />
                                                  &nbsp;
                                                </div>
                                                <div className="ty-credit-card__control-group ty-control-group">
                                                  <label
                                                    htmlFor="credit_card_name_1"
                                                    className="ty-control-group__title cm-required"
                                                  >
                                                    Cardholder's name
                                                  </label>
                                                  <input
                                                    placeholder="Cardholder's name"
                                                    type="text"
                                                    name="cardholder_name"
                                                    size="{35}"
                                                    className="ty-input-text  "
                                                  />
                                                </div>
                                              </div>
                                              <div className="ty-control-group ty-credit-card__cvv-field cvv-field">
                                                <label
                                                  htmlFor="credit_card_cvv2_1"
                                                  className="ty-control-group__title cm-required cm-regexp cm-cc-cvv2  cc-cvv2_1 cm-autocomplete-off"
                                                  data-ca-regexp-allow-empty="true"
                                                  data-ca-regexp="^\d{3,4}$"
                                                  data-ca-message="CVV/CVC is too short."
                                                >
                                                  CVV/CVC
                                                </label>
                                                <input
                                                  type="number"
                                                  id="credit_card_cvv2_1"
                                                  name="payment_info[cvv2]"
                                                  min="{0}"
                                                  defaultValue
                                                  size="{4}"
                                                  maxlength="{4}"
                                                  className="ty-credit-card__cvv-field-input ty-inputmask-bdi"
                                                />
                                                <div className="ty-cvv2-about">
                                                  <span className="ty-cvv2-about__title">
                                                    What is CVV/CVC
                                                  </span>
                                                  <div className="ty-cvv2-about__note">
                                                    <div className="ty-cvv2-about__info mb30 clearfix">
                                                      <div className="ty-cvv2-about__image">
                                                        <img
                                                          src="./Checkout_files/visa_cvv.png"
                                                          alt=""
                                                        />
                                                      </div>
                                                      <div className="ty-cvv2-about__description">
                                                        <h5 className="ty-cvv2-about__description-title">
                                                          Visa, MasterCard,
                                                          Discover
                                                        </h5>
                                                        <p>
                                                          This number is printed
                                                          in the signature area
                                                          on the back of the
                                                          card. It is the 3
                                                          digits AFTER the
                                                          credit card number.
                                                        </p>
                                                      </div>
                                                    </div>
                                                    <div className="ty-cvv2-about__info clearfix">
                                                      <div className="ty-cvv2-about__image">
                                                        <img
                                                          src="./Checkout_files/express_cvv.png"
                                                          alt=""
                                                        />
                                                      </div>
                                                      <div className="ty-cvv2-about__description">
                                                        <h5 className="ty-cvv2-about__description-title">
                                                          American Express
                                                        </h5>
                                                        <p>
                                                          CVV is on the front of
                                                          the card above the
                                                          credit card number
                                                          (either on the right
                                                          or on the left side of
                                                          the credit card).
                                                        </p>
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
                                      {/*content_payments_tab1*/}
                                    </div>
                                    <div
                                      className="hidden"
                                      id="content_payments_tab3"
                                    >
                                      {/*content_payments_tab3*/}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*step_four*/}
                          </div>
                        </div>
                        <div className="span6">
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
                                          class="btn btn-primary btn-xs"
                                          onClick={emptyCart}
                                        >
                                          <i class="fa fa-bitbucket" /> Empty
                                          Cart
                                        </button>
                                      </li>
                                      <li
                                        id="payments_tab3"
                                        className="ty-tabs__item"
                                      >
                                        <button
                                          type="button"
                                          class="btn btn-default btn-xs"
                                          onClick={handleEditCard}
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
                                        <th className="center">Qty</th>
                                        <th className="right">Subtotal</th>
                                      </tr>
                                    </thead>
                                    <tbody className="tbody">
                                      {products.map((p, i) => (
                                        <tr key={p._id}>
                                          <td width="18%">
                                            <Link to="#">
                                              <Image
                                                className="ty-pict lazyOwl cm-image abt-ut2-lazy-loaded"
                                                src={p.product.image[1].url}
                                                alt={p.product.name}
                                                style={{ opacity: '1' }}
                                              />
                                            </Link>
                                          </td>
                                          <td width="42%">
                                            <Link
                                              to="#"
                                              className="product-name"
                                            >
                                              {p.product.name}
                                            </Link>
                                            <a className="ty-order-products__item-delete delete">
                                              <i
                                                title="Remove"
                                                class="fa fa-remove"
                                              />
                                            </a>
                                          </td>
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
                                        <td colspan="{3}" className="right">
                                          Subtotal
                                        </td>
                                        <td
                                          className="right"
                                          data-ct-checkout-summary="items"
                                        >
                                          <span>
                                            <bdi>
                                              $<span>6.50</span>
                                            </bdi>
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td colspan="{3}" className="right">
                                          Shipping
                                        </td>
                                        <td
                                          className="right"
                                          data-ct-checkout-summary="shipping"
                                        >
                                          <span>
                                            <bdi>
                                              $<span>8.00</span>
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
                                              $<span>0.52</span>
                                            </bdi>
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          colspan="{3}"
                                          className="right last"
                                        >
                                          <h4>Order Total</h4>
                                        </td>
                                        <td className="right last">
                                          <span>
                                            <h4>
                                              <bdi>
                                                $<span>15.02</span>
                                              </bdi>
                                            </h4>
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <p>Cart Total:</p>

                                        {totalAfterDiscount > 0 && (
                                          <p className="bg-success p-2">
                                            Discount Applied: Total Payable: $
                                            {totalAfterDiscount}
                                          </p>
                                        )}
                                      </tr>
                                    </tfoot>
                                  </table>

                                  {/*checkout_info_summary_687*/}
                                </div>

                                <div>
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
                                      <p className="bg-danger p-2">
                                        {discountError}
                                      </p>
                                    )}
                                  </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="ty-customer-notes"></div>
                                {/* Inline script moved to the bottom of the page */}
                                <div className="checkout-buttons">
                                  <center>
                                    <button
                                      id="place_order_tab1"
                                      className="ty-btn__big ty-btn__primary cm-checkout-place-order ty-btn"
                                      type="submit"
                                      name="dispatch[onestepcheckout.place_order]"
                                    >
                                      <span>Place your order</span>
                                    </button>
                                  </center>
                                </div>
                                <div className="processor-buttons hidden" />
                              </div>
                            </div>
                          </div>
                          {/*step_five*/}
                        </div>
                      </form>
                    </div>
                    <input
                      type="hidden"
                      name="security_hash"
                      className="cm-no-hide-input"
                      defaultValue="c2b522e73c660178a57674e055b61005"
                    />
                    {/*onestepcheckout*/}
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
