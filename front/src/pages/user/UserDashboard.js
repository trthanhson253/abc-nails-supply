import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import UserMenu from "../../components/user/UserMenu";
import "./style.css";

const UserDashboard = () => {
  const { user } = useSelector((state) => ({ ...state }));
  return (
    <>
      <div className="Container-itwfbd-0 jFkAwY">
        <div className="Account__StyledAccountLayout-sc-1d5h8iz-0 iMmpfc">
          <div className="Account__StyledBreadCrumb-sc-1d5h8iz-1 jPBSaK">
            <div className="background" />
            <div className="item">
              <a href="/">Home</a>
            </div>
            <div className="item active">My Account</div>
          </div>
          <UserMenu />
          <div className="Account__StyledAccountLayoutInner-sc-1d5h8iz-2 edAZXd">
            <h3 className="styles__StyledHeading-sc-1lrcko9-0 jZJmua">
              Thông tin tài khoản
            </h3>
            <div className="styles__StyledAccountInfo-sc-1lrcko9-1 irgDVD">
              <form>
                <div className="form-control-account">
                  <label className="input-label">Họ tên</label>
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      maxLength={128}
                      className="Input-sc-17i9bto-0 bYlDgr"
                      defaultValue="Son Tran"
                    />
                  </div>
                </div>
                <div className="form-control-account">
                  <label className="input-label">Số điện thoại</label>
                  <div>
                    <div className="styles__StyledInputGroup-sc-1lrcko9-3 bHKvLE">
                      <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Hãy nhập SĐT để trải nghiệm tốt hơn"
                        className="Input-sc-17i9bto-0 bYlDgr"
                      />
                      <button type="button">Gửi mã xác thực</button>
                    </div>
                  </div>
                </div>
                <div className="form-control-account">
                  <label className="input-label">Mã xác thực</label>
                  <div>
                    <input
                      type="text"
                      name="OTPCode"
                      placeholder="Nhập mã xác thực gửi tới số điện thoại trên"
                      className="Input-sc-17i9bto-0 bYlDgr"
                      defaultValue
                    />
                  </div>
                </div>
                <div className="form-control-account">
                  <label className="input-label">Email</label>
                  <input
                    type="text"
                    className="Input-sc-17i9bto-0 bYlDgr"
                    defaultValue="2670187043007723-facebook@tiki.com.vn"
                  />
                </div>

                <div className="form-control-account">
                  <label className="input-label">&nbsp;</label>
                  <button type="submit" className="btn-submit">
                    Cập nhật
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
