import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
const UserMenu = () => {
  const { user } = useSelector((state) => ({ ...state }));
  return (
    <>
      <div className="navbar-default sidebar" role="navigation">
        <div className="sidebar-nav navbar-collapse">
          <ul className="nav" id="side-menu">
            <li className="sidebar-search">
              Hello, {user.name}
              {/* /input-group */}
            </li>
            <li>
              <Link to="/user/history">
                <i className="fa fa-dashboard fa-fw" /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/user/account">
                <i className="fa fa-male fa-fw" /> Account
              </Link>
            </li>
            <li>
              <Link to="/user/payment">
                <i className="fa fa-credit-card fa-fw" /> Payment
              </Link>
            </li>

            <li>
              <Link to="/user/orders">
                <i className="fa fa-shopping-cart fa-fw" /> Orders
              </Link>
            </li>

            <li>
              <Link to="/user/address">
                <i className="fa fa-home fa-fw" /> Address
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
