import React, { useState } from "react";
import { Link } from "react-router-dom";

import "antd/dist/antd.css";
import AdminMenu from "../../components/admin/AdminMenu";

const AdminDashboard = () => {
 

  return (
   <>
   <div id="wrapper">
   
   <AdminMenu />

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
                            <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
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
                            <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
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
                            <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
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
                            <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                            <div className="clearfix" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
        {/* /.row */}
        <div className="row">
            <div className="col-lg-8">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <i className="fa fa-bar-chart-o fa-fw" /> Area Chart Example
                        <div className="pull-right">
                            <div className="btn-group">
                                <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                    Actions
                                    <span className="caret" />
                                </button>
                                <ul className="dropdown-menu pull-right" role="menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li className="divider" />
                                    <li><a href="#">Separated link</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* /.panel-heading */}
                    <div className="panel-body">
                        <div id="morris-area-chart" />
                    </div>
                    {/* /.panel-body */}
                </div>
                {/* /.panel */}
               
               
            </div>
            {/* /.col-lg-8 */}
            <div className="col-lg-4">
                <div className="panel panel-default">
                    <div className="panel-heading"><i className="fa fa-bell fa-fw" /> Notifications Panel</div>
                    {/* /.panel-heading */}
                    <div className="panel-body">
                        <div className="list-group">
                            <a href="#" className="list-group-item">
                                <i className="fa fa-comment fa-fw" /> New Comment
                                <span className="pull-right text-muted small"><em>4 minutes ago</em> </span>
                            </a>
                            <a href="#" className="list-group-item">
                                <i className="fa fa-twitter fa-fw" /> 3 New Followers
                                <span className="pull-right text-muted small"><em>12 minutes ago</em> </span>
                            </a>
                            <a href="#" className="list-group-item">
                                <i className="fa fa-envelope fa-fw" /> Message Sent
                                <span className="pull-right text-muted small"><em>27 minutes ago</em> </span>
                            </a>
                            <a href="#" className="list-group-item">
                                <i className="fa fa-tasks fa-fw" /> New Task
                                <span className="pull-right text-muted small"><em>43 minutes ago</em> </span>
                            </a>
                            <a href="#" className="list-group-item">
                                <i className="fa fa-upload fa-fw" /> Server Rebooted
                                <span className="pull-right text-muted small"><em>11:32 AM</em> </span>
                            </a>
                            <a href="#" className="list-group-item">
                                <i className="fa fa-bolt fa-fw" /> Server Crashed!
                                <span className="pull-right text-muted small"><em>11:13 AM</em> </span>
                            </a>
                            <a href="#" className="list-group-item">
                                <i className="fa fa-warning fa-fw" /> Server Not Responding
                                <span className="pull-right text-muted small"><em>10:57 AM</em> </span>
                            </a>
                            <a href="#" className="list-group-item">
                                <i className="fa fa-shopping-cart fa-fw" /> New Order Placed
                                <span className="pull-right text-muted small"><em>9:49 AM</em> </span>
                            </a>
                            <a href="#" className="list-group-item">
                                <i className="fa fa-money fa-fw" /> Payment Received
                                <span className="pull-right text-muted small"><em>Yesterday</em> </span>
                            </a>
                        </div>
                        {/* /.list-group */}
                        <a href="#" className="btn btn-default btn-block">View All Alerts</a>
                    </div>
                    {/* /.panel-body */}
                </div>
                {/* /.panel */}
                <div className="panel panel-default">
                    <div className="panel-heading"><i className="fa fa-bar-chart-o fa-fw" /> Donut Chart Example</div>
                    <div className="panel-body">
                        <div id="morris-donut-chart" />
                        <a href="#" className="btn btn-default btn-block">View Details</a>
                    </div>
                    {/* /.panel-body */}
                </div>
                {/* /.panel */}
                <div className="chat-panel panel panel-default">
                    <div className="panel-heading">
                        <i className="fa fa-comments fa-fw" />
                        Chat
                        <div className="btn-group pull-right">
                            <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-chevron-down" />
                            </button>
                            <ul className="dropdown-menu slidedown">
                                <li>
                                    <a href="#"> <i className="fa fa-refresh fa-fw" /> Refresh </a>
                                </li>
                                <li>
                                    <a href="#"> <i className="fa fa-check-circle fa-fw" /> Available </a>
                                </li>
                                <li>
                                    <a href="#"> <i className="fa fa-times fa-fw" /> Busy </a>
                                </li>
                                <li>
                                    <a href="#"> <i className="fa fa-clock-o fa-fw" /> Away </a>
                                </li>
                                <li className="divider" />
                                <li>
                                    <a href="#"> <i className="fa fa-sign-out fa-fw" /> Sign Out </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                   
                    <div className="panel-footer">
                        <div className="input-group">
                            <input id="btn-input" type="text" className="form-control input-sm" placeholder="Type your message here..." />
                            <span className="input-group-btn">
                                <button className="btn btn-warning btn-sm" id="btn-chat">
                                    Send
                                </button>
                            </span>
                        </div>
                    </div>
                    {/* /.panel-footer */}
                </div>
                {/* /.panel .chat-panel */}
            </div>
            {/* /.col-lg-4 */}
        </div>
        {/* /.row */}
    </div>
    {/* /.container-fluid */}
</div>

   </div>
  
   </>
  );
};

export default AdminDashboard;
