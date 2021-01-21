import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeCheckout from "../../components/StripeCheckout";
import "../../stripe.css";
import { Steps, Card } from "antd";
import {
  CreditCardOutlined,
  SmileOutlined,
  FileOutlined,
} from "@ant-design/icons";
import { getBillingAndShippingAddress } from "../../functions/user";
import { Helmet } from "react-helmet";
const promise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const CheckoutPayment = () => {
  const { Step } = Steps;
  const { user } = useSelector((state) => ({ ...state }));
  const [billingAndShippingAddress, setBillingAndShippingAddress] = useState(
    {}
  );
  const loadBillingAndShippingAddress = (token) => {
    getBillingAndShippingAddress(token).then((res) => {
      // console.log('res', res.data.shippingAndBillingAddress);
      setBillingAndShippingAddress(res.data.shippingAndBillingAddress);
    });
  };
  useEffect(() => {
    loadBillingAndShippingAddress(user.token);
  }, []);
  return (
    <>
      <Helmet>
        <title>Payment | ABC Nails Supply</title>
      </Helmet>
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
                      status="finish"
                      title="Step 1: Shipping & Order"
                      icon={<CreditCardOutlined twoToneColor="#eb2f96" />}
                    />
                    <Step
                      status="process"
                      title="Step 2: Payment"
                      icon={<FileOutlined twoToneColor="#52c41a" />}
                    />

                    <Step
                      status="wait"
                      title="Step 3: Done"
                      icon={<SmileOutlined />}
                    />
                  </Steps>
                  <h1 className="ty-mainbox-title">
                    <span className="ty-checkout__title">
                      Secure checkout <i class="fa fa-lock" />
                    </span>
                  </h1>
                  <div className="ty-mainbox-body">
                    <a name="checkout_top" />

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
                            <span className="ty-step__title-left">4</span>
                            <i className="ty-step__title-arrow ty-icon-down-micro" />
                            <span className="ty-step__title-txt">
                              Shipping & Billing Information
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
                                <div className="span16">
                                  <Card
                                    title="SHIPPING ADDRESS"
                                    type="inner"
                                    style={{
                                      borderRadius: "5px",
                                    }}
                                    extra={<Link to="/checkout">Edit</Link>}
                                  >
                                    {billingAndShippingAddress ? (
                                      <>
                                        <b>
                                          {billingAndShippingAddress.ship_name}
                                        </b>
                                        <span style={{ display: "block" }}>
                                          {" "}
                                          {
                                            billingAndShippingAddress.ship_address
                                          }
                                          ,{billingAndShippingAddress.ship_city}
                                          ,
                                          {billingAndShippingAddress.ship_state}
                                          &nbsp;
                                          {billingAndShippingAddress.ship_zip}
                                          ,United States
                                        </span>
                                        <span style={{ display: "block" }}>
                                          {" "}
                                          Phone:{" "}
                                          {billingAndShippingAddress.ship_phone}
                                        </span>
                                      </>
                                    ) : (
                                      <>No information found</>
                                    )}
                                  </Card>
                                </div>
                              </div>
                            </div>
                            <br></br>
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
                                <div className="span16">
                                  <Card
                                    title="BILLING ADDRESS"
                                    type="inner"
                                    style={{
                                      borderRadius: "5px",
                                    }}
                                    extra={<Link to="/checkout">Edit</Link>}
                                  >
                                    {billingAndShippingAddress ? (
                                      <>
                                        <b>
                                          {billingAndShippingAddress.bill_name}
                                        </b>
                                        <span style={{ display: "block" }}>
                                          {" "}
                                          {
                                            billingAndShippingAddress.bill_address
                                          }
                                          ,{billingAndShippingAddress.bill_city}
                                          ,
                                          {billingAndShippingAddress.bill_state}
                                          &nbsp;
                                          {billingAndShippingAddress.bill_zip}
                                          ,United States
                                        </span>
                                      </>
                                    ) : (
                                      <>No information found</>
                                    )}
                                  </Card>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*step_two*/}
                        </div>
                      </div>

                      <div className="span8">
                        <div
                          className="ty-step__container-active ty-step-five"
                          data-ct-checkout="billing_options"
                          id="step_five"
                        >
                          <h3 className="ty-step__title-active clearfix">
                            <span className="ty-step__title-left">5</span>
                            <i className="ty-step__title-arrow ty-icon-down-micro" />
                            <span className="ty-step__title-txt">Payment</span>
                          </h3>
                          <div
                            id="step_four_body"
                            className="ty-step__body-active"
                          >
                            <div className="clearfix">
                              <Elements stripe={promise}>
                                <StripeCheckout />
                              </Elements>
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

export default CheckoutPayment;
