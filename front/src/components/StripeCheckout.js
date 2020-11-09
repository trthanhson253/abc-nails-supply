import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { DollarOutlined, CheckOutlined, SwapOutlined } from '@ant-design/icons';
import { Card } from 'antd';

const StripeCheckout = () => {
  return (
    <>
      <form className="stripe-form">
        <div className="clearfix">
          thêm vào đây
          {/* Inline script moved to the bottom of the page */}
        </div>
      </form>
    </>
  );
};

export default StripeCheckout;
