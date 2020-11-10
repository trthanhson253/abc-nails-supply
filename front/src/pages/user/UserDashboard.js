import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import UserMenu from '../../components/user/UserMenu';

const UserDashboard = () => {
  const { user } = useSelector((state) => ({ ...state }));
  return (
    <>
      <div id="wrapper">
        <UserMenu />

        <div id="page-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="page-header">Dashboard</h1>
              </div>
              {/* /.col-lg-12 */}
            </div>
            {/* /.row */}
            <div className="row">
              <div className="col-lg-3 col-md-6">
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
              <div className="col-lg-3 col-md-6">
                <div className="panel panel-green">
                  <div className="panel-heading">
                    <div className="row">
                      <div className="col-xs-3">
                        <i className="fa fa-tasks fa-5x" />
                      </div>
                      <div className="col-xs-9 text-right">
                        <div className="huge">12</div>
                        <div>New Tasks!</div>
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
              <div className="col-lg-3 col-md-6">
                <div className="panel panel-yellow">
                  <div className="panel-heading">
                    <div className="row">
                      <div className="col-xs-3">
                        <i className="fa fa-shopping-cart fa-5x" />
                      </div>
                      <div className="col-xs-9 text-right">
                        <div className="huge">124</div>
                        <div>New Orders!</div>
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
              <div className="col-lg-3 col-md-6">
                <div className="panel panel-red">
                  <div className="panel-heading">
                    <div className="row">
                      <div className="col-xs-3">
                        <i className="fa fa-support fa-5x" />
                      </div>
                      <div className="col-xs-9 text-right">
                        <div className="huge">13</div>
                        <div>Support Tickets!</div>
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

export default UserDashboard;
