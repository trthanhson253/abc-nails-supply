import React, { useState, useEffect } from "react";
import UserMenu from "../../components/user/UserMenu";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Invoice from "../../components/order/Invoice";
import { getUserOrders } from "../../functions/user";
import { useSelector } from "react-redux";
import { Steps, Avatar } from "antd";
import CancelOrderModal from "../../components/user/CancelOrderModal";
var moment = require("moment");

const UserOrders = () => {
  const [open, setOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));
  const token = user.token;
  const { Step } = Steps;
  const handleClickOpenCancel = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const loadUserOrders = () =>
    getUserOrders(user.token).then((res) => {
      console.log(JSON.stringify(res.data, null, 4));
      setOrders(res.data);
    });

  const showDownloadLink = (order) => (
    <PDFDownloadLink
      document={<Invoice order={order} />}
      fileName="invoice.pdf"
    >
      <button
        type="button"
        class="btn btn-outline btn-default btn-sm"
        style={{ border: "none" }}
      >
        <i className="fa fa-download" />
        &nbsp; Download Invoice
      </button>
    </PDFDownloadLink>
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
      return "Your order has been requested for cancellation";
    } else if (nameOfType == 6) {
      return "Your order has been cancelled ";
    } else if (nameOfType == 7) {
      return "Your order has been requested for return ";
    } else if (nameOfType == 6) {
      return "Your order has been returned ";
    }
  };
  useEffect(() => {
    loadUserOrders();
  }, []);
  return (
    <>
      <div id="wrapper">
        <UserMenu />

        <div id="page-wrapper">
          {orders.map((order, i) => (
            <div className="container-fluid">
              <CancelOrderModal
                open={open}
                handleClose={handleClose}
                token={token}
                order={order}
                loadUserOrders={loadUserOrders}
              />
              <div className="row">
                <div className="col-lg-12">
                  <h1 className="page-header">Orders</h1>
                </div>
                {/* /.col-lg-12 */}
              </div>
              {/* /.row */}
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <div className="row">
                        <div className="col-xs-10">
                          <i className="fa fa-shopping-cart" />
                          &nbsp; Order ID #:<b> {order.trackId}</b> &nbsp;|
                          {showDownloadLink(order)}
                          &nbsp; |&nbsp;{" "}
                          <i className="fa fa-calendar-check-o" />
                          &nbsp; Order Placed Date:{" "}
                          <b>
                            {" "}
                            {new Date(
                              order.paymentIntent.created * 1000
                            ).toLocaleString()}{" "}
                            (EST)
                          </b>
                          &nbsp; |&nbsp; <i className="fa fa-money" />
                          &nbsp; &nbsp;Amount:{" "}
                          {(order.paymentIntent.amount /= 100).toLocaleString(
                            "en-US",
                            {
                              style: "currency",
                              currency: "USD",
                            }
                          )}{" "}
                        </div>

                        <div className="col-xs-2 text-right">
                          <div>
                            {(order.orderStatus == 0 ||
                              order.orderStatus == 1) && (
                              <button
                                type="button"
                                class="btn btn-outline btn-danger btn-sm"
                                onClick={handleClickOpenCancel}
                              >
                                <i className="fa fa-remove" />
                                &nbsp; Request Cancel
                              </button>
                            )}
                            {(order.orderStatus == 2 ||
                              order.orderStatus == 3) && (
                              <button
                                type="button"
                                class="btn  btn-primary btn-sm"
                              >
                                &nbsp; Request Return
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="panel-body">
                      <div className="col-xs-12">
                        <Steps
                          size="small"
                          progressDot
                          current={order.orderStatus}
                        >
                          <Step title="Order Received" />
                          <Step title="Processing" />
                          <Step title="Shipped" />
                          <Step title="Completed" />
                        </Steps>
                      </div>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <div className="col-xs-6">
                        <table className="table">
                          <thead className="thead-light">
                            <tr>
                              <th scope="col"></th>
                              <th scope="col">Product</th>
                              <th scope="col">Price</th>

                              <th scope="col">Quantity</th>
                            </tr>
                          </thead>

                          <tbody>
                            {order.products.map((p, i) => (
                              <tr key={i}>
                                <td>
                                  <>
                                    <Avatar
                                      src={p.product.image[1].url}
                                      size={50}
                                      shape="square"
                                    />
                                  </>
                                </td>
                                <td>
                                  <b>{p.product.name}</b>
                                </td>
                                <td>${p.product.price}</td>

                                <td>{p.count}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="col-xs-6">
                        <b>ORDER UPDATES:</b>
                        {order.reason.map((p, i) => (
                          <p>
                            <b>
                              {moment(p.date).format("MM-DD-YYYY")} at{" "}
                              {moment(p.date).format("hh:mm A")}:
                            </b>{" "}
                            {convertToReason(p.name)}
                            {p.name == "2" && (
                              <>
                                {" "}
                                <br></br>
                                <span>
                                  Tracking Delivery ID: {order.deliveryId}
                                </span>
                              </>
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserOrders;
