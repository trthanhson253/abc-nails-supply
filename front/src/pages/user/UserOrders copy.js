import React, { useState, useEffect } from "react";
import UserMenu from "../../components/user/UserMenu";

import { getUserOrders } from "../../functions/user";
import { useSelector } from "react-redux";
import UserOrderCard from "../../components/user/UserOrderCard";
var moment = require("moment");

const UserOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));
  const token = user.token;

  const loadUserOrders = () =>
    getUserOrders(user.token).then((res) => {
      console.log(res.data);
      setOrders(res.data);
    });

  // const loadOrderUpdate = () => {
  //   getAdminOrderUpdate(props.match.params.orderId, token).then((res) => {
  //     setOrderUpdate(res.data);
  //     // console.log("ADMIN DETAIL ORDER", JSON.stringify(res.data, null, 4));
  //   });
  // };

  useEffect(() => {
    loadUserOrders();
    // loadUserOrderUpdate();
  }, []);
  return (
    <>
      <div id="wrapper">
        <UserMenu />

        <div id="page-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="page-header">Orders</h1>
              </div>
              {/* /.col-lg-12 */}
            </div>
            {/* /.row */}
            {orders.map((order) => (
              <UserOrderCard
                order={order}
                loadUserOrders={loadUserOrders}
                token={token}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserOrders;
