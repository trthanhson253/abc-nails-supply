import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { toast } from 'react-toastify';
import { createCoupon } from '../../functions/coupon';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CouponCreateModal = ({ open, handleClose, loadCoupons, token }) => {
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [discount, setDiscount] = useState('');

  const clickSubmit = (event) => {
    event.preventDefault();
    createCoupon(name, expiry, discount, token)
      .then((data) => {
        setName('');
        setDiscount('');
        setExpiry('');
        toast.success('Created Successfully!');
        handleClose();
        loadCoupons();
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.error);
      });
  };

  return (
    <>
      <Modal
        title="Create New Coupon"
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
        <div className="ty-control-group">
          <label
            htmlFor="login_popup685"
            className="ty-login__filed-label ty-control-group__label cm-required cm-trim cm-email"
          >
            Name
          </label>
          <input
            type="text"
            name="user_login"
            onChange={(e) => setName(e.target.value)}
            value={name}
            size={30}
            placeHolder="Name"
            className="ty-login__input cm-focus"
          />
        </div>
        <div className="ty-control-group">
          <label
            htmlFor="login_popup685"
            className="ty-login__filed-label ty-control-group__label cm-required cm-trim cm-email"
          >
            Discount %
          </label>
          <input
            type="text"
            name="user_login"
            onChange={(e) => setDiscount(e.target.value)}
            value={discount}
            size={30}
            placeHolder="Discount"
            className="ty-login__input cm-focus"
          />
        </div>
        <div className="ty-control-group">
          <label
            htmlFor="login_popup685"
            className="ty-login__filed-label ty-control-group__label cm-required cm-trim cm-email"
          >
            Expiry
          </label>
          <DatePicker
            className="ty-login__input cm-focus"
            selected={new Date()}
            value={expiry}
            onChange={(date) => setExpiry(date)}
          />
        </div>
      </Modal>
    </>
  );
};

export default CouponCreateModal;
