import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { getDetailOrderBaseOnTrackId } from "../functions/user";
var moment = require("moment");

const TrackOrder = (props) => {
  const [order, setOrder] = useState({});
  const [error, setError] = useState(false);
  const loadDetailOrderBaseOnTrackId = () => {
    getDetailOrderBaseOnTrackId(props.match.params.trackId)
      .then((res) => {
        setOrder(res.data);
        setError(false);
      })
      .catch((err) => {
        setError(true);
      });
  };

  const titleStatus = (orderStatus) => {
    if (orderStatus == 0) {
      return "Your Order Has Been Received";
    } else if (orderStatus == 1) {
      return "Your Order Is Processing";
    } else if (orderStatus == 2) {
      return "Your Order Has Been Shipped";
    } else if (orderStatus == 3) {
      return "Your Order Has Been Delivered";
    } else if (orderStatus == 4) {
      return "Your Order Are Ready To Pickup At Our Store";
    } else if (orderStatus == 5) {
      return "Your Request For Cancel Order Has Been Placed And Is Being Processing";
    } else if (orderStatus == 6) {
      return "Your Order Has Been Cancelled";
    } else if (orderStatus == 7) {
      return "Your Request For Return Order Has Been Placed And Is Being Processing";
    } else if (orderStatus == 8) {
      return "Your Order Has Been Returned To Our Store";
    }
  };

  useEffect(() => {
    loadDetailOrderBaseOnTrackId();
  }, []);

  return (
    <>
      <Helmet>
        <title>Track My Order | ABC Nails Supply</title>
      </Helmet>
      <div className="container">
        <div className="main-row bg-white mt30">
          <div className="box3 uscis-seal">
            <div className="col-lg-12 appointment-sec center">
              <div className="rows text-center">
                <h1>
                  {error ? (
                    <>We Cannot Find The Information You Requested</>
                  ) : (
                    <>{titleStatus(order.orderStatus)}</>
                  )}
                </h1>
                <p>
                  {order.orderStatus == 0 && (
                    <>
                      On{" "}
                      <b>
                        {moment(order.reason[0].date).format("hh:mm A")},{" "}
                        {moment(order.reason[0].date).format("MM-DD-YYYY")}
                      </b>
                      , we received your order, Tracking Number Id{" "}
                      <b>{order.trackId}</b>. Please allow us 7-10 business days
                      to proccess. We will update the status of your order when
                      the order is shipped.
                    </>
                  )}
                  {order.orderStatus == 1 && (
                    <>
                      On{" "}
                      <b>
                        {moment(order.reason[1].date).format("hh:mm A")},{" "}
                        {moment(order.reason[1].date).format("MM-DD-YYYY")}
                      </b>
                      , we are packing your order, Tracking Number Id{" "}
                      <b>{order.trackId}</b>. We will update soon when your is
                      shipped.
                    </>
                  )}
                  {order.orderStatus == 2 && (
                    <>
                      On{" "}
                      <b>
                        {moment(order.reason[2].date).format("hh:mm A")},{" "}
                        {moment(order.reason[2].date).format("MM-DD-YYYY")}
                      </b>
                      , your order, Tracking Number Id <b>{order.trackId}</b>{" "}
                      has been ship. Tracking Delivery Number Id is:{" "}
                      {order.deliveryId}. Or you can click here.
                    </>
                  )}
                  {order.orderStatus == 3 && (
                    <>
                      On{" "}
                      <b>
                        {moment(order.reason[3].date).format("hh:mm A")},{" "}
                        {moment(order.reason[3].date).format("MM-DD-YYYY")}
                      </b>
                      , your order, Tracking Number Id <b>{order.trackId}</b>{" "}
                      has been delivered to the address we have on record. You
                      have 30 days from the date the order is delivered to
                      request a return. Thank you so much for shopping with us.
                    </>
                  )}
                  {order.orderStatus == 4 && (
                    <>
                      Your order, Tracking Number Id <b>{order.trackId}</b> is
                      ready for pick up at our store. You have 7 days to pick up
                      your order. Thank you so much for shopping with us.
                    </>
                  )}
                  If you have any questions, you can call us at 470 437 6253,
                  visit our store,or sign in to your account at &nbsp;
                  <Link to="/login" target="_blank">
                    www.abcnailsupply.com/login
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackOrder;
