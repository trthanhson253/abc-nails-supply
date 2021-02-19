import React, { useState } from "react";
import { Modal, Button } from "antd";
import { toast } from "react-toastify";
import { updateOrderProgress } from "../../functions/adminOrders";

const AdminUpdateOrderDetailModal = ({
  open,
  handleClose,
  order,
  token,
  loadAdminDetailOrder,
  loadOrderUpdate,
}) => {
  //   const status = [
  //     "We have received your order and will prepare it soon.",
  //     "We are packing your order.",
  //     "Your order has been shipped.",
  //     "Your order has been delivered",
  //     "Your order are ready to pickup at our store",
  //     "Your order has been cancelled",
  //   ];
  const [values, setValues] = useState({
    orderStatus: order.orderStatus,
    reasonNumber: "",
    deliveryId: "",
  });
  const { orderStatus, reasonNumber, deliveryId } = values;
  const handleChange = (name) => (e) => {
    setValues({
      ...values,
      [name]: e.target.value,
    });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    updateOrderProgress(values, order.trackId, token)
      .then((data) => {
        toast.success("Update Progress Successfully!");
        handleClose();
        loadAdminDetailOrder();
        loadOrderUpdate();
      })
      .catch((err) => {
        // console.log(err);
        toast.error(err.response.data.error);
      });
  };

  return (
    <>
      <Modal
        title="Update Status"
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
              Submit
            </Button>
          </>,
        ]}
      >
        {" "}
        <div className="ty-control-group">
          <div className="form-group">
            <label>Current Status: {order.orderStatus}</label>
          </div>
        </div>
        <div className="ty-control-group">
          <div className="form-group">
            <label>Progress</label>
            <select
              name="orderStatus"
              className="form-control"
              onChange={handleChange("orderStatus")}
              value={orderStatus}
            >
              <option disabled>Please select</option>
              <option value="0">Step 0: Order Received</option>
              <option value="1">Step 1: Processing</option>
              <option value="2">Step 2: Shipped</option>
              <option value="3">Step 3: Delivered</option>
              <option disabled>--------------------------</option>
              <option value="4">
                PICK-UP AT STORE: Ready for pickup at store
              </option>
              <option value="5">CANCEL: Cancelled</option>
              <option value="6">
                OUT-OF-STOCK: This product is out of stock
              </option>
            </select>
          </div>
        </div>
        <div className="ty-control-group">
          <label
            htmlFor="login_popup685"
            className="ty-login__filed-label ty-control-group__label cm-required cm-trim cm-email"
          >
            Reason:
          </label>
          <select
            name="reasonNumber"
            className="form-control"
            onChange={handleChange("reasonNumber")}
            value={reasonNumber}
          >
            <option disabled>Please select</option>
            <option value="0">
              Step 0: We have received your order and will prepare it soon
            </option>
            <option value="1">Step 1: We are packing your order</option>
            <option value="2">Step 2: Your order has been shipped</option>
            <option value="3">Step 3: Your order has been delivered</option>
            <option value="4">
              PICK-UP AT STORE: Your order are ready to pickup at our store
            </option>
            <option value="5">CANCEL: Your order has been cancelled</option>
            <option value="6">
              OUT-OF-STOCK: Your order cannot completed due to some reasons
            </option>
          </select>
        </div>
        <div className="ty-control-group">
          <label
            htmlFor="login_popup685"
            className="ty-login__filed-label ty-control-group__label  cm-trim cm-email"
          >
            Delivery Tracking Number:
          </label>
          <input
            type="text"
            name="deliveryId"
            onChange={handleChange("deliveryId")}
            value={deliveryId}
            size={30}
            placeHolder="Delivery Tracking Number"
            className="ty-login__input cm-focus"
          />
        </div>
      </Modal>
    </>
  );
};

export default AdminUpdateOrderDetailModal;
