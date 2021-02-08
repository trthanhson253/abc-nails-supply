import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Steps, Result, Card, Avatar } from "antd";
import {
  CreditCardOutlined,
  SmileOutlined,
  FileOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
// import { getLatestOrder } from "../../functions/user";
import { Helmet } from "react-helmet";
import { getCookie, removeCookie } from "../../functions/auth";

const CheckoutFinish = ({ history }) => {
  const { Step } = Steps;
  const { user, checkout } = useSelector((state) => ({ ...state }));
  const [trackId, setTrackId] = useState("");
  if (!checkout.finish) {
    history.push("/");
  }

  useEffect(() => {
    // getLatestOrder(user.token).then((res) => {
    //   console.log("create payment intent", res.data);
    //   setOrder(res.data);
    // });
    if (getCookie("trackId")) {
      setTrackId(getCookie("trackId"));
      removeCookie("trackId");
    }
  }, [getCookie("trackId")]);
  return (
    <>
      <Helmet>
        <title>
          Congratulations! Your order has been placed | ABC Nails Supply
        </title>
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
                      status="finish"
                      title="Step 2: Payment"
                      icon={<FileOutlined twoToneColor="#52c41a" />}
                    />

                    <Step
                      status="process"
                      title="Step 3: Done"
                      icon={<SmileOutlined />}
                    />
                  </Steps>

                  <div className="ty-mainbox-body">
                    <a name="checkout_top" />

                    <div
                      className="cm-save-fields row-fluid clearfix"
                      id="onestepcheckout"
                    >
                      <div className="span16">
                        <div
                          className="ty-step__container-active ty-step-one"
                          data-ct-checkout="user_info"
                          id="step_one"
                        >
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
                                <Result
                                  status="success"
                                  title="Congratulations! Your order has been placed"
                                  subTitle="Expected delivery from 7-10 working days."
                                >
                                  <h3>
                                    Tracking Order Number: <b>{trackId}</b>
                                    <br></br>
                                  </h3>
                                </Result>
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
      </div>
    </>
  );
};

export default CheckoutFinish;
