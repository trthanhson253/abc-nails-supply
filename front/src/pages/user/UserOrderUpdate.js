import React from "react";

var moment = require("moment");

const UserOrderUpdate = ({ orderUpdate }) => {
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

  return (
    <>
      <p>
        <b>
          <i class="fa fa-clock-o"></i>&nbsp;
          {moment(orderUpdate.createdAt).format("MM-DD-YYYY")} at{" "}
          {moment(orderUpdate.createdAt).format("hh:mm A")}:
        </b>{" "}
        {convertToReason(orderUpdate.name)}
        {orderUpdate.name == "2" && (
          <>
            {" "}
            <br></br>
            <span>Tracking Delivery ID: {orderUpdate.deliveryId}</span>
          </>
        )}
      </p>
    </>
  );
};

export default UserOrderUpdate;
