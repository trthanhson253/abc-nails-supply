import React, { useState, useEffect } from "react";
import { getAdminDetailOrder } from "../../../functions/adminOrders";
import { useSelector } from "react-redux";
import AdminMenu from "../../../components/admin/AdminMenu";
import { Steps, Avatar } from "antd";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Invoice from "../../../components/order/Invoice";

const AdminDetailOrder = (props) => {
  const { user } = useSelector((state) => ({ ...state }));
  const token = user.token;
  const { Step } = Steps;
  const [orders, setOrders] = useState([]);
  const loadAdminDetailOrder = (orderId) => {
    getAdminDetailOrder(orderId, token).then((res) => {
      setOrders(res.data);

      console.log("ADMIN DETAIL ORDER", JSON.stringify(res.data, null, 4));
    });
  };
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
  useEffect(() => {
    loadAdminDetailOrder(props.match.params.orderId);
  }, [props]);
  return (
    <>
      <div id="wrapper">
        <AdminMenu />
        <div id="page-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="page-header">Orders Detail</h1>
              </div>
              {/* /.col-lg-12 */}
            </div>
            {/* /.row */}
            <div className="row">
              {orders.map((order, i) => (
                <div className="col-lg-12 col-md-12">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <div className="row">
                        <div className="col-xs-10">
                          <i className="fa fa-shopping-cart" />
                          &nbsp; Order Tracking ID #:<b>
                            {" "}
                            {order.trackId}
                          </b>{" "}
                          &nbsp;|
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
                          <Step title="Cancelled" />
                        </Steps>
                      </div>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <div className="col-xs-8">
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
                      <div className="col-xs-4">
                        <b>ORDER PROCESS MANAGEMENT:</b>

                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* /.container-fluid */}
        </div>
      </div>
    </>
  );
};

export default AdminDetailOrder;
