import React, { useState, useEffect } from "react";
import UserMenu from "../../components/user/UserMenu";

import { getUserOrders } from "../../functions/user";
import { useSelector } from "react-redux";
import UserOrderCard from "../../components/user/UserOrderCard";
import "./style.css";
import { Helmet } from "react-helmet";
var moment = require("moment");

const UserOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));
  const token = user.token;

  const loadUserOrders = () =>
    getUserOrders(user.token).then((res) => {
      // console.log(res.data);
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
      <Helmet>
        <title>My Orders | ABC Nails Supply</title>
      </Helmet>{" "}
      <div className="Container-itwfbd-0 jFkAwY">
        <div className="Account__StyledAccountLayout-sc-1d5h8iz-0 iMmpfc">
          <div className="Account__StyledBreadCrumb-sc-1d5h8iz-1 jPBSaK">
            <div className="background" />
            <div className="item">
              <a href="/">Home</a>
            </div>
            <div className="item active">My Orders</div>
          </div>
          <UserMenu />
          <div className="Account__StyledAccountLayoutInner-sc-1d5h8iz-2 edAZXd">
            <div className="styles__StyledAccountListOrder-sc-6t66uv-0 glOjBk">
              <div className="heading">🚑 My Orders</div>
              <div className="inner">
                <table>
                  <thead>
                    <tr>
                      <th>Tracking ID</th>
                      <th>Order Date</th>
                      <th>Products</th>
                      <th>Total</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr>
                        <td>
                          <a href="/sales/order/view/594369504-1">
                            {order.trackId}
                          </a>
                        </td>
                        <td>21/07/2019</td>
                        <td>
                          Combo 5 quần sịp nam siêu thoáng thoát khí xuất Nhật
                          -size XXL
                        </td>
                        <td>130.000 ₫</td>
                        <td>Đã hủy</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserOrders;
