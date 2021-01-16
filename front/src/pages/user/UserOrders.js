import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import UserMenu from '../../components/user/UserMenu';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Invoice from '../../components/order/Invoice';
import { getUserOrders } from '../../functions/user';
import { useSelector, useDispatch } from 'react-redux';
import { Steps, Card, Avatar } from 'antd';

const UserOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));
  const { Step } = Steps;
  const loadUserOrders = () =>
    getUserOrders(user.token).then((res) => {
      console.log(JSON.stringify(res.data, null, 4));
      setOrders(res.data);
    });

  const showDownloadLink = (order) => (
    <PDFDownloadLink
      document={<Invoice order={order} />}
      fileName="invoice.pdf"
    >
      <button type="button" class="btn btn-outline btn-default btn-sm">
        <i className="fa fa-download" />
        &nbsp; Download Invoice
      </button>
    </PDFDownloadLink>
  );
  useEffect(() => {
    loadUserOrders();
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
            <div className="row">
              {orders.map((order, i) => (
                <div className="col-lg-12 col-md-12">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <div className="row">
                        <div className="col-xs-10">
                          <i className="fa fa-shopping-cart" />
                          &nbsp; Order ID #:<b> {order.trackId}</b>{' '}
                          &nbsp;|&nbsp;
                          <i className="fa fa-file-o" />
                          &nbsp;
                          {showDownloadLink(order)}
                          &nbsp; |&nbsp;{' '}
                          <i className="fa fa-calendar-check-o" />
                          &nbsp; Order Placed Date:{' '}
                          <b>
                            {' '}
                            {new Date(
                              order.paymentIntent.created * 1000
                            ).toLocaleString()}
                          </b>
                          &nbsp; |&nbsp; <i className="fa fa-money" />
                          &nbsp; &nbsp;Amount:{' '}
                          {(order.paymentIntent.amount /= 100).toLocaleString(
                            'en-US',
                            {
                              style: 'currency',
                              currency: 'USD',
                            }
                          )}{' '}
                        </div>

                        <div className="col-xs-2 text-right">
                          <div>
                            <button
                              type="button"
                              class="btn btn-outline btn-danger btn-sm"
                            >
                              <i className="fa fa-remove" />
                              &nbsp; Cancel Order
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="panel-body">
                      <div className="col-xs-12">
                        <Steps
                          size="small"
                          progressDot
                          current={order.orderStatus}
                        >
                          <Step title="Order Received" />
                          <Step title="Processing" />
                          <Step title="Shipped" />
                          <Step title="Completed" />
                          <Step title="Cancelled" />
                        </Steps>
                      </div>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
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
                                      src={p.product.image[1].url}
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
                        <b>ORDER UPDATE:</b>

                        <p>
                          <b>11/10/20:</b> We have received your order and will
                          prepare it soon.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* /.container-fluid */}
        </div>
      </div>
    </>
  );
};

export default UserOrders;
