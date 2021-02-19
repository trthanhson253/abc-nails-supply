import React, { useState, useEffect } from "react";
import UserMenu from "../../components/user/UserMenu";
import { getUserOrderDetail } from "../../functions/user";
import { useSelector } from "react-redux";
import "./style.css";
import { Helmet } from "react-helmet";
import { Steps } from "antd";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Invoice from "../../components/order/Invoice";
import { getUserOrderUpdate } from "../../functions/user";
import { useHistory } from "react-router-dom";

var moment = require("moment");

const UserOrderDetail = (props) => {
  const { Step } = Steps;
  const [order, setOrder] = useState({});
  const [orderUpdates, setOrderUpdates] = useState([]);
  const [address, setAddress] = useState({});
  const [products, setProducts] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));
  const token = user.token;
  const history = useHistory();
  // const [error, setError] = useState(false);
  const loadUserOrderDetail = () =>
    getUserOrderDetail(props.match.params.trackId, token).then((res) => {
      if (res.data.success === false) {
        // setError(true);
        // console.log("error1", error);
        history.push("/");
      } else {
        // setError(false);
        setOrder(res.data);
        setAddress(res.data.address);
        setProducts(res.data.products);
        // console.log("res.data", res.data.success);
        // console.log("error2", error);
      }
    });
  const loadUserOrderUpdate = () =>
    getUserOrderUpdate(props.match.params.trackId, token).then((res) => {
      setOrderUpdates(res.data);
      // console.log("setOrderUpdate", res.data);
    });
  const showDownloadLink = (order) => (
    <>
      <i className="fa fa-download" />
      &nbsp; Download Invoice
    </>
  );
  const convertToReason = (nameOfType) => {
    if (nameOfType == 0) {
      return "We have received your order and will prepare it soon";
    } else if (nameOfType == 1) {
      return "We are processing your order";
    } else if (nameOfType == 2) {
      return "Your order has been shipped";
    } else if (nameOfType == 3) {
      return "Your order has been delivered";
    } else if (nameOfType == 4) {
      return "Your order are ready to pickup at our store";
    } else if (nameOfType == 5) {
      return "Your order has been requested for cancellation and is waiting for approval";
    } else if (nameOfType == 6) {
      return "Your order has been approved for cancellation ";
    } else if (nameOfType == 7) {
      return "Your order has been requested for return and is waiting for approval";
    } else if (nameOfType == 6) {
      return "Your order has been approved for return ";
    }
  };
  const currentStatus = (status) => {
    if (status == 0) {
      return "Order Received";
    } else if (status == 1) {
      return "Processing";
    } else if (status == 2) {
      return "Shipped";
    } else if (status == 3) {
      return "Completed";
    } else if (status == 4) {
      return "Ready for pickup at store";
    } else if (status == 5) {
      return "Request for cancel order";
    } else if (status == 6) {
      return "Cancelled completed";
    } else if (status == 7) {
      return "Request for refund";
    } else if (status == 6) {
      return "Refund Completedn ";
    }
  };

  useEffect(() => {
    loadUserOrderDetail();
    loadUserOrderUpdate();
  }, []);
  return (
    <>
      <Helmet>
        <title>Order Details | ABC Nails Supply</title>
      </Helmet>{" "}
      <div className="Container-itwfbd-0 jFkAwY">
        <div className="Account__StyledAccountLayout-sc-1d5h8iz-0 iMmpfc">
          <div className="Account__StyledBreadCrumb-sc-1d5h8iz-1 jPBSaK">
            <div className="background" />
            <div className="item">
              <a href="/">Home</a>
            </div>
            <div className="item active">Order Details</div>
          </div>
          <UserMenu />
          <div className="Account__StyledAccountLayoutInner-sc-1d5h8iz-2 edAZXd">
            <div className="styles__StyledAccountOrderDetail-ri73gr-2 bqOhOA">
              <div className="heading">
                <span>
                  Order Details For #<b>{order.trackId}</b>
                </span>
                <span className="split">-</span>
                <span className="status" style={{ color: "blue" }}>
                  {currentStatus(order.orderStatus)}
                </span>
              </div>

              <div className="created-date">
                Order Placed Date:{" "}
                {moment(order.createdAt).format("MM-DD-YYYY")} at{" "}
                {moment(order.createdAt).format("hh:mm A")}
              </div>
              <div className="view-invoices">{showDownloadLink(order)}</div>
              <div className="styles__StyledOrderStatus-sc-15shxrw-1 kMZEDT">
                <div className="status-block">
                  <span className="status-text">
                    Current Status: <b>{currentStatus(order.orderStatus)} </b>
                  </span>
                  <div className="progress-bar">
                    <Steps size="small" progressDot current={order.orderStatus}>
                      <Step title="Order Received" />
                      <Step title="Processing" />

                      <Step title="Shipped" />
                      <Step title="Completed" />
                    </Steps>
                  </div>
                </div>
              </div>
              <div className="styles__StyledOrderStatusDetail-sc-15shxrw-3 WppqE">
                <div className="view-tracking-detail">Order's Updates</div>
                <div className="detail">
                  <div className="border">
                    {orderUpdates.map((orderUpdate) => (
                      <>
                        {" "}
                        <div className="styles__StyledOrderStatusDetailItem-sc-15shxrw-4 kfBvxg">
                          {" "}
                          <i class="fa fa-calendar"></i>&nbsp;&nbsp;
                          {moment(orderUpdate.createdAt).format(
                            "MM-DD-YYYY"
                          )}{" "}
                        </div>
                        <div className="styles__StyledOrderStatusDetailItem-sc-15shxrw-4 bAlGcY">
                          <span className="left">
                            <i class="fa fa-clock-o"></i>&nbsp;&nbsp;
                            {moment(orderUpdate.createdAt).format("hh:mm A")}
                          </span>
                          <span className="right">
                            {convertToReason(orderUpdate.name)}
                          </span>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>

              <div className="styles__StyledGroupSection-ri73gr-0 kHWfJY">
                <div className="styles__StyledSection-ri73gr-1 ipnhKS">
                  <div className="view-tracking-detail">Shipping Address</div>
                  <div className="content">
                    <p className="name">{address.ship_name}</p>
                    <p className="address">
                      🏠 {address.ship_address}, {address.ship_city},{" "}
                      {address.ship_state}
                      {address.ship_zip}, United States
                    </p>
                    <p className="phone">
                      <span>☎️ Phone: </span>
                      {address.ship_phone}
                    </p>
                  </div>
                </div>
                <div className="styles__StyledSection-ri73gr-1 ipnhKS">
                  <div className="view-tracking-detail">Billing Address</div>
                  <div className="content">
                    <p className="name">{address.bill_name}</p>
                    <p className="address">
                      🏠 {address.bill_address}, {address.bill_city},{" "}
                      {address.bill_state}
                      {address.bill_zip}, United States
                    </p>
                    <p className="phone">
                      <span>☎️ Phone: </span>
                      {address.ship_phone}
                    </p>
                  </div>
                </div>
                <div className="styles__StyledSection-ri73gr-1 ipnhKS">
                  <div className="view-tracking-detail">Payment</div>
                  <div className="content">
                    <p className>Credit Card</p>
                  </div>
                </div>
              </div>
              <div className="view-tracking-detail">Order's Items</div>
              <table className="styles__StyledProductList-ri73gr-3 iQLHjv">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Qty</th>

                    <th>Sub-total</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p, i) => (
                    <tr>
                      <td>
                        <div className="product-item">
                          <img src={p.product.image[0].url} />
                          <div className="product-info">
                            <a className="product-name" href="#">
                              {p.product.name}
                            </a>
                            <p className="product-seller">
                              Sold by <a href="#">ABC Nails Supply</a>
                            </p>
                            <p className="product-sku">Sku: {p.product.item}</p>
                          </div>
                        </div>
                      </td>
                      <td className="price">{p.product.price} USD</td>
                      <td className="quantity">{p.count}</td>

                      <td className="raw-total">
                        {p.product.price * p.count} USD
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={4}>
                      <span>Tạm tính</span>
                    </td>
                    <td>24.000 ₫</td>
                  </tr>
                  <tr>
                    <td colSpan={4}>
                      <span>Phí vận chuyển</span>
                    </td>
                    <td>0 ₫</td>
                  </tr>
                  <tr>
                    <td colSpan={4}>
                      <span>Tổng cộng</span>
                    </td>
                    <td>
                      <span className="sum">24.000 ₫</span>
                    </td>
                  </tr>
                </tfoot>
              </table>
              <a className="view-list-order" href="/sales/order/history">
                &lt;&lt; Back to Order List
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserOrderDetail;
