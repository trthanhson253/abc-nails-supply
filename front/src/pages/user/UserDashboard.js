import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserMenu from "../../components/user/UserMenu";
import "./style.css";
import FileUpload from "../../components/admin/FileUpload";
import { Spin, Badge } from "antd";
import { getBillingAndShippingAddress } from "../../functions/user";
import { updateUser } from "../../functions/auth";
import { toast } from "react-toastify";
import { currentUser } from "../../functions/auth";
import axios from "axios";
const UserDashboard = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const initialState = {
    images: [],
    name: user.name,
    phone: "",
    ship_address: "",
    ship_city: "",
    ship_state: "",
    ship_zip: "",
  };
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const {
    name,
    images,
    phone,
    ship_address,
    ship_city,
    ship_state,
    ship_zip,
  } = values;
  const dispatch = useDispatch();
  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };
  const loadBillingAndShippingAddress = () => {
    getBillingAndShippingAddress(user.token).then((res) => {
      // console.log("res.data", res.data.shippingAndBillingAddress.ship_name);
      setValues({
        ...values,
        phone: res.data.shippingAndBillingAddress.ship_phone,
        ship_address: res.data.shippingAndBillingAddress.ship_address,
        ship_city: res.data.shippingAndBillingAddress.ship_city,
        ship_state: res.data.shippingAndBillingAddress.ship_state,
        ship_zip: res.data.shippingAndBillingAddress.ship_zip,
      });
    });
  };
  const loadCurrentUser = () => {
    currentUser(user._id, user.token)
      .then((res) => {
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            name: res.data.name,
            email: res.data.email,
            token: user.token,
            role: res.data.role,
            _id: res.data._id,
            wishlist: res.data.wishlist,
            images: res.data.images,
          },
        });
      })
      .catch((err) => console.log(err));
  };
  const handleImageRemove = (public_id) => {
    // setLoading(true);

    axios
      .post(
        `${process.env.REACT_APP_API}/removeimage`,
        { public_id },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((res) => {
        // console.log("res", res);
        loadCurrentUser();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const clickSubmit = (event) => {
    event.preventDefault();
    updateUser(values, user.token)
      .then((data) => {
        toast.success("Update Successfully!");
        loadBillingAndShippingAddress();
        loadCurrentUser();
      })
      .catch((err) => {
        // console.log(err);
        // toast.error(err.response.data.error);
      });
  };
  useEffect(() => {
    loadBillingAndShippingAddress();
    loadCurrentUser();
  }, []);
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
              My Account Information
            </h3>
            <div className="styles__StyledAccountInfo-sc-1lrcko9-1 irgDVD">
              <form>
                <div className="form-control-account">
                  <label className="input-label">Full Name</label>
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      maxLength={128}
                      className="Input-sc-17i9bto-0 bYlDgr"
                      onChange={handleChange("name")}
                      value={name}
                    />
                  </div>
                </div>

                <div className="form-control-account">
                  <label className="input-label">Phone Number</label>
                  <div>
                    <input
                      type="text"
                      name="OTPCode"
                      onChange={handleChange("phone")}
                      value={phone}
                      className="Input-sc-17i9bto-0 bYlDgr"
                    />
                  </div>
                </div>
                <div className="form-control-account">
                  <label className="input-label">Email</label>
                  {user.email}
                </div>
                <div className="form-control-account">
                  <label className="input-label">Shipping Address</label>
                  <input
                    type="text"
                    className="Input-sc-17i9bto-0 bYlDgr"
                    onChange={handleChange("ship_address")}
                    value={ship_address}
                  />
                </div>
                <div className="form-control-account">
                  <label className="input-label">City</label>
                  <input
                    type="text"
                    className="Input-sc-17i9bto-0 bYlDgr"
                    onChange={handleChange("ship_city")}
                    value={ship_city}
                  />
                </div>
                <div className="form-control-account">
                  <label className="input-label">State</label>
                  <input
                    type="text"
                    className="Input-sc-17i9bto-0 bYlDgr"
                    onChange={handleChange("ship_state")}
                    value={ship_state}
                  />
                </div>
                <div className="form-control-account">
                  <label className="input-label">Zip Code</label>
                  <input
                    type="text"
                    className="Input-sc-17i9bto-0 bYlDgr"
                    onChange={handleChange("ship_zip")}
                    value={ship_zip}
                  />
                </div>

                <div className="form-control-account">
                  <label className="input-label">Picture Profile:</label>
                  {user.images && user.images.length > 0 ? (
                    <>
                      {" "}
                      <img
                        alt="Customer image"
                        src={user.images[0].url}
                        width="22.5%"
                      />
                      <p
                        style={{ paddingLeft: "20px", cursor: "pointer" }}
                        key={user.images[0].public_id}
                        onClick={() =>
                          handleImageRemove(user.images[0].public_id)
                        }
                      >
                        Delete this avatar
                      </p>
                    </>
                  ) : (
                    <h4>No Avatar Profile </h4>
                  )}
                </div>
                {loading ? (
                  <Spin size="large" tip="Loading...">
                    <FileUpload
                      values={values}
                      setValues={setValues}
                      setLoading={setLoading}
                      token={user.token}
                    />
                  </Spin>
                ) : (
                  <FileUpload
                    values={values}
                    setValues={setValues}
                    setLoading={setLoading}
                    token={user.token}
                  />
                )}
                <div className="form-control-account">
                  <label className="input-label">&nbsp;</label>
                  <button
                    type="submit"
                    className="btn-submit"
                    onClick={clickSubmit}
                  >
                    Update
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
