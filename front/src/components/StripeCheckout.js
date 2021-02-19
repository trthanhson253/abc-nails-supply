import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { DollarOutlined, CheckOutlined, SwapOutlined } from "@ant-design/icons";
import { Card, Alert } from "antd";
import { createPaymentIntent } from "../functions/stripe";
import { useSelector, useDispatch } from "react-redux";
import { createOrder, emptyUserCart } from "../functions/user";
import { useHistory } from "react-router-dom";
import { setCookie } from "../functions/auth";
const StripeCheckout = () => {
  const dispatch = useDispatch();
  const { user, coupon } = useSelector((state) => ({ ...state }));

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const [cartTotalBeforeTax, setCartTotalBeforeTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [totalAfterDiscount, setTotalAfterDiscount] = useState(0);
  const [payable, setPayable] = useState(0);

  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  useEffect(() => {
    createPaymentIntent(coupon, user.token).then((res) => {
      // console.log("create payment intent", res.data);
      setClientSecret(res.data.clientSecret);
      // additional response received on successful payment
      setCartTotal(res.data.cartTotal);
      setCartTotalBeforeTax(res.data.cartTotalBeforeTax);
      setTotalAfterDiscount(res.data.totalAfterDiscount);
      setPayable(res.data.payable);
    });
  }, []);

  const handleChange = async (e) => {
    // console.log(e);
    setDisabled(e.empty); // disable pay button if errors
    setError(e.error ? e.error.message : ""); // show error message
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    setProcessing(true);
    // console.log("e.target.name.value", e.target.name.value);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        // billing_details: {
        //   name: e.target.name.value,
        // },
      },
    });
    // console.log("payload", payload);
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      // here you get result after successful payment
      // create order and save in database for admin to process
      createOrder(payload, user.token).then((res) => {
        if (res.data.order) {
          // empty cart from local storage
          if (typeof window !== "undefined") localStorage.removeItem("cart");
          // empty cart from redux
          dispatch({
            type: "ADD_TO_CART",
            payload: [],
          });
          // reset coupon to false
          dispatch({
            type: "COUPON_APPLIED",
            payload: false,
          });
          // empty cart from database
          setCookie("trackId", res.data.order.trackId);
          emptyUserCart(user.token);
        }
      });
      // empty user cart from redux store and local storage
      // console.log(JSON.stringify(payload, null, 4));
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      const delayed = setTimeout(() => {
        dispatch({
          type: "SET_LOADING",
          payload: false,
        });
      }, 3000);
      dispatch({
        type: "CHECKOUT_APPLIED",
        payload: {
          address: true,
          payment: false,
          finish: true,
        },
      });
      history.push("/checkout-finish");
    }
  };

  const cartStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "14px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };
  return (
    <>
      <div className="text-center pb-5">
        <Card
          actions={[
            <>
              <DollarOutlined className="text-info" /> <br /> Total: $
              {(payable / 100).toFixed(2)}
            </>,
          ]}
        />
      </div>
      <br></br>
      <form id="payment-form" className="stripe-form" onSubmit={handleSubmit}>
        <div className="ty-control-group">
          <CardElement
            id="card-element"
            options={cartStyle}
            onChange={handleChange}
          />
        </div>

        <button
          className="stripe-button"
          disabled={processing || disabled || succeeded}
        >
          <span id="button-text">
            {processing ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Place My Order"
            )}
          </span>
        </button>
        <br />
        {error && <Alert message={error} type="error" showIcon />}
        <br />
        <p className={succeeded ? "result-message" : "result-message hidden"}>
          Payment Successful.{" "}
          <Link to="/user/history">See it in your purchase history.</Link>
        </p>
      </form>
    </>
  );
};

export default StripeCheckout;
