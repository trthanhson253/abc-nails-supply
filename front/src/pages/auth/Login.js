import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { login, setCookie, getCookie } from "../../functions/auth";
import Spinner from "../../components/Spinner";
import { message, Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import SimpleReactValidator from "simple-react-validator";

const Login = ({ history }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    error: "",
    success: "",
    buttonText: "Log in",
  });
  const [loading, setLoading] = useState(false);
  const { email, password, error, success, buttonText } = state;
  const [errors, setErrors] = useState([]);
  const simpleValidator = useRef(new SimpleReactValidator());

  const handleChange = (name) => (e) => {
    setState({
      ...state,
      [name]: e.target.value,
      error: "",
      success: "",
    });
  };

  const { user, load } = useSelector((state) => ({ ...state }));

  // dùng để chuyển hướng tới trang chủ nếu ng dùng đã login rồi
  useEffect(() => {
    let intended = history.location.state;
    if (intended) {
      return;
    } else {
      if (user && user.token) history.push("/");
    }
  }, [user, history]);

  let dispatch = useDispatch();

  const roleBasedRedirect = (res) => {
    // check if intended
    let intended = history.location.state;
    if (intended) {
      history.push(intended.from);
    } else {
      if (res.data.user.role == 0) {
        history.push("/admin");
      } else {
        history.push("/user/history");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    if (email === getCookie("emailForRegistration")) {
      // toast.error("Your account has not been activated yet. Please check your email.");
      message.warning(
        "Your account has not been activated yet. Please check your email.",
        15
      );
    }
    login(email, password)
      .then((res) => {
        // console.log("RES",res)
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            name: res.data.user.name,
            email: res.data.user.email,
            token: res.data.token,
            role: res.data.user.role,
            _id: res.data.user._id,
          },
        });
        setLoading(false);
        setTimeout(() => {
          dispatch({
            type: "SET_LOADING",
            payload: false,
          });
        }, 1000);
        setCookie("token", res.data.token);
        setCookie("_id", res.data.user._id);
        setCookie("role", res.data.user.role);
        toast.success(`Login Success`);
        roleBasedRedirect(res);
      })
      .catch((error) => {
        // console.log('Son', error.response);
        setLoading(false);
        dispatch({
          type: "SET_LOADING",
          payload: false,
        });
        setState({
          ...state,
          password: "",
        });
        toast.error(error.response.data.error);
      });
  };

  const loginForm = () => (
    <form
      name="main_login_form"
      onSubmit={handleSubmit}
      className="cm-processed-form"
    >
      <div className="ty-control-group">
        <label
          htmlFor="login_main_login"
          className="ty-login__filed-label ty-control-group__label cm-required cm-trim cm-email"
        >
          Email
        </label>
        <input
          type="text"
          name="email"
          size={30}
          className="ty-login__input cm-focus"
          value={email}
          onChange={handleChange("email")}
          placeholder="Your email"
          style={{
            fontFamily:
              'Arial, Helvetica, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", Symbola, EmojiSymbols !important',
          }}
          onBlur={simpleValidator.current.showMessageFor("email")}
        />
      </div>
      {simpleValidator.current.message("email", email, "required|email")}
      <div className="ty-control-group ty-password-forgot">
        <label
          htmlFor="psw_main_login"
          className="ty-login__filed-label ty-control-group__label ty-password-forgot__label cm-required"
        >
          Password
        </label>
        <Link
          to="/forgot-password"
          className="ty-password-forgot__a"
          tabindex="{5}"
        >
          Forgot your password?
        </Link>
        <input
          type="password"
          id="psw_main_login"
          name="password"
          size="{30}"
          value={password}
          onChange={handleChange("password")}
          className="ty-login__input"
          onBlur={simpleValidator.current.showMessageFor("password")}
          placeholder="Your password"
        />
        {simpleValidator.current.message(
          "password",
          password,
          "required|min:6"
        )}
      </div>
      <div className="buttons-container clearfix">
        <div className="ty-float-right">
          <button
            className="ty-btn__login ty-btn__secondary ty-btn"
            type="submit"
          >
            <span>
              <span>
                <i className="fa fa-lock" style={{ color: "white" }} />
                &nbsp;&nbsp;{buttonText}
              </span>
            </span>
          </button>
        </div>
        <div className="ty-login__remember-me">
          <label
            htmlFor="remember_me_main_login"
            className="ty-login__remember-me-label"
          >
            <input
              className="checkbox"
              type="checkbox"
              name="remember_me"
              id="remember_me_main_login"
              defaultValue="Y"
            />
            Remember me
          </label>
        </div>
      </div>
    </form>
  );
  return (
    <>
      <div className="container-fluid  content-grid">
        <div className="container-fluid-row">
          <div className="row-fluid ">
            <div className="span16 breadcrumbs-grid ">
              <div id="breadcrumbs_10">
                <div className="ty-breadcrumbs clearfix">
                  <Link to="/" className="ty-breadcrumbs__a">
                    <bdi>Home</bdi>
                  </Link>
                  <span className="ty-breadcrumbs__slash">/</span>
                  <span className="ty-breadcrumbs__current">
                    <bdi>Sign in</bdi>
                  </span>
                </div>
                {/* Inline script moved to the bottom of the page */}{" "}
                {/*breadcrumbs_10*/}
              </div>
            </div>
          </div>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <div className="container-fluid-row">
            <div className="row-fluid ">
              <div className="span8 main-content-grid ">
                <div className="ty-mainbox-container clearfix">
                  <h1 className="ty-mainbox-title">Sign in</h1>
                  <div className="ty-mainbox-body">
                    <div className="ty-login">{loginForm()}</div>
                  </div>
                </div>
              </div>
              <div className="span8 auth-information-grid ">
                <div className="ty-login-info">
                  <div className="ty-login-info__txt">
                    <h4>Not a registered member?</h4>
                    <p>
                      Creating a new account is easy and takes less than a
                      minute.
                    </p>
                    <Link to="/register">Register for a new account</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
