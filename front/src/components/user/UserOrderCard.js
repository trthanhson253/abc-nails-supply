import React, { useState, useEffect } from "react";
import CancelOrderModal from "./CancelOrderModal";
import UserOrderUpdate from "../../pages/user/UserOrderUpdate";
import { Steps, Avatar } from "antd";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Invoice from "../../components/order/Invoice";
import { getUserOrderUpdate } from "../../functions/user";
import { useSelector } from "react-redux";
const UserOrderCard = ({ order, loadUserOrders, token }) => {
  const [open, setOpen] = useState(false);
  const [orderUpdates, setOrderUpdates] = useState([]);
  const { Step } = Steps;
  const handleClickOpenCancel = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const loadUserOrderUpdate = () =>
    getUserOrderUpdate(order.trackId, token).then((res) => {
      setOrderUpdates(res.data);
      //   console.log("setOrderUpdate", res.data);
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
  useEffect(() => {
    loadUserOrderUpdate();
  }, []);
  return (
    <>
      <div className="row">
        <CancelOrderModal
          open={open}
          handleClose={handleClose}
          token={token}
          order={order}
          loadUserOrders={loadUserOrders}
          loadUserOrderUpdate={loadUserOrderUpdate}
        />
        <div className="col-lg-12 col-md-12">
          <div className="panel panel-default" style={{ marginBottom: "80px" }}>
            <div className="panel-heading">
              <div className="row">
                <div className="col-xs-10">
                  <i className="fa fa-shopping-cart" />
                  &nbsp; Order ID #:<b> {order.trackId}</b> &nbsp;|
                  {showDownloadLink(order)}
                  &nbsp; |&nbsp; <i className="fa fa-calendar-check-o" />
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
                  {(order.paymentIntent.amount /= 100).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}{" "}
                </div>

                <div className="col-xs-2 text-right">
                  <div>
                    {(order.orderStatus === 0 || order.orderStatus === 1) && (
                      <button
                        type="button"
                        class="btn btn-outline btn-danger btn-sm"
                        onClick={handleClickOpenCancel}
                      >
                        <i className="fa fa-remove" />
                        &nbsp; Request Cancel
                      </button>
                    )}
                    {order.orderStatus === 5 && (
                      <button type="button" class="btn btn-outline btn-sm">
                        &nbsp;{" "}
                        <b style={{ color: "red" }}>CANCEL REQUEST PENDING</b>
                      </button>
                    )}
                    {(order.orderStatus === 2 || order.orderStatus === 3) && (
                      <button type="button" class="btn  btn-primary btn-sm">
                        &nbsp; Request Return
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="panel-body">
              <div className="col-xs-12" style={{ paddingBottom: "60px" }}>
                <Steps size="small" progressDot current={order.orderStatus}>
                  <Step title="Order Received" />
                  <Step title="Processing" />

                  <Step title="Shipped" />
                  <Step title="Completed" />
                </Steps>
              </div>

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
                              src={p.product.image[0].url}
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
                {orderUpdates.map((orderUpdate) => (
                  <UserOrderUpdate orderUpdate={orderUpdate} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserOrderCard;
