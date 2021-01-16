import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getOrders, changeStatus } from '../../../functions/adminOrders';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import AdminMenu from '../../../components/admin/AdminMenu';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () =>
    getOrders(user.token).then((res) => {
      console.log(JSON.stringify(res.data, null, 4));
      setOrders(res.data);
    });

  const handleStatusChange = (orderId, orderStatus) => {
    changeStatus(orderId, orderStatus, user.token).then((res) => {
      toast.success('Status updated');
      loadOrders();
    });
  };
  //   const renderStatus = (status) => (
  //     {}
  //     if (status) {
  //       loginButton = <LogoutButton />;
  //     } else {
  //       loginButton = <LoginButton />;
  //     }
  //   );
  return (
    <>
      <div id="wrapper">
        <AdminMenu />
        <div id="page-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="page-header">Orders</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <i className="fa fa-align-justify fa-fw" /> List of Orders
                  </div>
                  {/* /.panel-heading */}
                  <div className="panel-body">
                    <div className="table-responsive">
                      <table
                        className="table table-striped table-bordered table-hover"
                        id="dataTables-example"
                      >
                        <thead>
                          <tr>
                            <th>Order ID</th>
                            <th>Order Placed Date</th>
                            <th>Total Charge</th>
                            <th>Number of Items</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.map((order) => (
                            <tr className="odd gradeX" key={order._id}>
                              <td>{order.trackId}</td>
                              <td>
                                {new Date(
                                  order.paymentIntent.created * 1000
                                ).toLocaleString()}
                              </td>
                              <td>
                                {(order.paymentIntent.amount /= 100).toLocaleString(
                                  'en-US',
                                  {
                                    style: 'currency',
                                    currency: 'USD',
                                  }
                                )}
                              </td>
                              <td>{order.products.length}</td>
                              <td>
                                {order.orderStatus == 0 && (
                                  <span class="label label-default">
                                    {' '}
                                    Order Received
                                  </span>
                                )}
                                {order.orderStatus == 1 && (
                                  <>Order Processing</>
                                )}
                                {order.orderStatus == 2 && (
                                  <>
                                    <span class="label label-primary">
                                      Shipped
                                    </span>
                                  </>
                                )}
                                {order.orderStatus == 3 && (
                                  <>
                                    <span class="label label-success">
                                      Completed
                                    </span>
                                  </>
                                )}
                                {order.orderStatus == 4 && (
                                  <span class="label label-info">
                                    Ready for pickup
                                  </span>
                                )}
                                {order.orderStatus == 5 && (
                                  <>
                                    <span class="label label-danger">
                                      Cancelled
                                    </span>
                                  </>
                                )}
                              </td>
                              <td className="center">
                                <div className="text-center">
                                  <button
                                    type="button"
                                    class="btn btn-primary btn-circle"
                                  >
                                    <i class="fa fa-edit"></i>
                                  </button>
                                  &nbsp;
                                  <button
                                    type="button"
                                    class="btn btn-danger btn-circle"
                                  >
                                    <i class="fa fa-trash-o"></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {/* /.table-responsive */}
                  </div>
                  {/* /.panel-body */}
                </div>
                {/* /.panel */}
              </div>
              {/* /.col-lg-12 */}
            </div>
            {/* /.row */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminOrders;
