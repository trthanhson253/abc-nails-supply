import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { requestCancelOrder } from "../../functions/user";
import { Modal, Button } from "antd";
const CancelOrderModal = ({
  open,
  handleClose,
  token,
  order,
  loadUserOrders,
}) => {
  const clickSubmit = (event) => {
    event.preventDefault();
    requestCancelOrder(order.trackId, token)
      .then((data) => {
        toast.success("Request Cancel Sent Successfully!");
        handleClose();
        loadUserOrders();
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });
  };
  return (
    <>
      <Modal
        title="Request Cancel Order"
        centered
        visible={open}
        onOk={clickSubmit}
        onCancel={handleClose}
        footer={[
          <>
            <Button key="back" onClick={handleClose}>
              Cancel
            </Button>
            ,
            <Button key="submit" type="primary" onClick={clickSubmit}>
              Request
            </Button>
          </>,
        ]}
      >
        <div className="ty-control-group">
          <label
            htmlFor="login_popup685"
            className="ty-login__filed-label ty-control-group__label cm-required cm-trim cm-email"
          >
            Reason For This Cancellation
          </label>
          <select name="reasonCancel" className="form-control">
            <option disabled>Please select reason</option>
            <option value="The product is too expensive">
              The product is expensive
            </option>
            <option value="I don't want this product anymore">
              I don't want this product anymore
            </option>
            <option value="I found cheaper products at other sites">
              I found cheaper products at other sites
            </option>
            <option value="This product is not what I expect">
              This product is not what I expect
            </option>

            <option value="Other reasons">Other reasons</option>
          </select>
        </div>
      </Modal>
    </>
  );
};

export default CancelOrderModal;
