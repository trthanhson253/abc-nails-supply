import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import UserMenu from '../../components/user/UserMenu';
// import { PDFDownloadLink } from '@react-pdf/renderer';
import { getUserOrders } from '../../functions/user';
import { useSelector, useDispatch } from 'react-redux';

const UserOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  const loadUserOrders = () =>
    getUserOrders(user.token).then((res) => {
      console.log(JSON.stringify(res.data, null, 4));
      setOrders(res.data);
    });

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
              <div className="col-lg-12 col-md-6">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <div className="row">
                      <div className="col-xs-3">
                        <i className="fa fa-comments fa-5x" />
                      </div>
                      <div className="col-xs-9 text-right">
                        <div className="huge">26</div>
                        <div>New Comments!</div>
                      </div>
                    </div>
                  </div>
                  <a href="#">
                    <div className="panel-footer">
                      <span className="pull-left">View Details</span>
                      <span className="pull-right">
                        <i className="fa fa-arrow-circle-right" />
                      </span>
                      <div className="clearfix" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </div>
      </div>
    </>
  );
};

export default UserOrders;
