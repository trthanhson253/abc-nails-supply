import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Steps, Result, Card, Avatar } from 'antd';
import {
  CreditCardOutlined,
  SmileOutlined,
  FileOutlined,
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { getLatestOrder } from '../../functions/user';

const CheckoutFinish = () => {
  const { Step } = Steps;
  const { user } = useSelector((state) => ({ ...state }));
  const [order, setOrder] = useState({});

  useEffect(() => {
    getLatestOrder(user.token).then((res) => {
      console.log('create payment intent', res.data);
      setOrder(res.data[0]);
    });
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
                      status="finish"
                      title="Shipping & Order"
                      icon={<CreditCardOutlined twoToneColor="#eb2f96" />}
                    />
                    <Step
                      status="finish"
                      title="Payment"
                      icon={<FileOutlined twoToneColor="#52c41a" />}
                    />

                    <Step
                      status="process"
                      title="Done"
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
                      <div className="span16">
                        <div
                          className="ty-step__container-active ty-step-one"
                          data-ct-checkout="user_info"
                          id="step_one"
                        >
                          <h3 className="ty-step__title-active clearfix">
                            <span className="ty-step__title-left">
                              <i className="ty-icon-ok" />
                            </span>
                            <i className="ty-step__title-arrow ty-icon-down-micro" />
                            <span className="ty-step__title-txt">
                              You're done with your order
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
                                <Result
                                  status="success"
                                  title="Congratulations! Your order has been placed"
                                  subTitle="Expected delivery from 7-10 working days."
                                >
                                  <h3>
                                    Tracking Order Number:{' '}
                                    <b>{order.trackId}</b> - Here is summary of
                                    what you have ordered:
                                  </h3>

                                  <div className="table-responsive">
                                    <table className="table table-striped table-bordered table-hover">
                                      <thead>
                                        <tr>
                                          <th>Image</th>
                                          <th>Product Item</th>
                                          <th>Product Name</th>
                                          <th>Quantity</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tbody>
                                          {JSON.stringify(order.products)}
                                        </tbody>
                                      </tbody>
                                    </table>
                                  </div>
                                </Result>
                              </div>
                            </div>
                          </div>
                          {/*step_two*/}
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
