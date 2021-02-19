import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./components/nav/Footer";
import Header from "./components/nav/Header";
import AdminDashboard from "./pages/admin/AdminDashboard";
import categoryList from "./pages/admin/category/categoryList";
import SubList from "./pages/admin/sub/SubList";
import SubSubList from "./pages/admin/subSub/SubSubList";
import BrandList from "./pages/admin/brand/BrandList";
import ColorList from "./pages/admin/color/ColorList";
import SizeList from "./pages/admin/size/SizeList";
import CouponList from "./pages/admin/coupon/CouponList";
import ProductList from "./pages/admin/product/ProductList";
import ProductCreate from "./pages/admin/product/ProductCreate";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import RegisterComplete from "./pages/auth/RegisterComplete";
import UserRoute from "./components/routes/UserRoute";
import AdminRoute from "./components/routes/AdminRoute";
import Home from "./pages/Home";
import Error from "./pages/Error";
import SubSubHome from "./pages/home/SubSubHome";
import ProductDetailHome from "./pages/home/ProductDetailHome";
import Checkout from "./pages/home/Checkout";
import Search from "./pages/Search";
import Cart from "./pages/Cart";

// import { useSelector } from "react-redux";
import { currentUser } from "./functions/auth";
import { useSelector, useDispatch } from "react-redux";

import { getCookie } from "./functions/auth";
import WishList from "./pages/WishList";
import SideDrawer from "./components/drawer/SideDrawer";
import CategoryHome from "./pages/home/CategoryHome";

// import Nhap from "./pages/Nhap";

import CheckoutPayment from "./pages/home/CheckoutPayment";
import UserDashboard from "./pages/user/UserDashboard";
import UserOrders from "./pages/user/UserOrders";
import CheckoutFinish from "./pages/home/CheckoutFinish";
import AdminOrders from "./pages/admin/order/AdminOrders";
import Spinner from "./components/Spinner";
import SubHome from "./pages/home/SubHome";
import AdminDetailOrder from "./pages/admin/order/AdminDetailOrder";
import TrackOrder from "./pages/TrackOrder";
import UserOrderDetail from "./pages/user/UserOrderDetail";

// code tạo animation cho trang chậm để loading
// $("body").load(function() {
//   $("#loading").fadeOut(3000);
//   });

function App() {
  const dispatch = useDispatch();
  const { load } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    var userToken = getCookie("token");
    var userId = getCookie("_id");
    if (userToken) {
      currentUser(userId, userToken)
        .then((res) => {
          dispatch({
            type: "LOGGED_IN_USER",
            payload: {
              name: res.data.name,
              email: res.data.email,
              token: userToken,
              role: res.data.role,
              _id: res.data._id,
              wishlist: res.data.wishlist,
              images: res.data.images,
            },
          });
        })
        .catch((err) => console.log(err));
    }
  }, [dispatch]);

  // useEffect(() => {
  //     const unsubscribe = async () => {
  //       const userId = await getCookie("user_id");
  //       console.log(userId);
  //       if (userId) {
  //         currentUser(userId)
  //           .then((res) => {
  //             dispatch({
  //               type: "LOGGED_IN_USER",
  //               payload: {
  //                 name: res.data.user.name,
  //                 email: res.data.user.email,
  //                 token: res.data.token,
  //                 role: res.data.user.role,
  //                 _id:res.data.user._id
  //               },
  //             });
  //           })
  //           .catch((err) => console.log(err));
  //       }
  //     };
  //     return () => unsubscribe();
  // }, [dispatch]);

  return (
    <>
      <div className="ty-tygh bp-tygh-container" id="tygh_container">
        <div className="ty-helper-container " id="tygh_main_container">
          {load ? <div id="semiTransparenDiv"></div> : <></>}

          <Header />
          <ToastContainer />
          <SideDrawer />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/auth/activate/:token"
              component={RegisterComplete}
            />

            <Route exact path="/:cslug/product" component={CategoryHome} />
            <Route
              exact
              path="/:cslug/:sslug/:ssslug/product"
              component={SubSubHome}
            />
            <Route exact path="/:cslug/:sslug/product" component={SubHome} />
            <Route
              exact
              path="/:cslug/:sslug/:ssslug/:pslug/product"
              component={ProductDetailHome}
            />

            <Route exact path="/detail" component={ProductDetailHome} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/track-order/:trackId" component={TrackOrder} />

            <AdminRoute exact path="/admin" component={AdminDashboard} />
            <AdminRoute
              exact
              path="/admin/category/list"
              component={categoryList}
            />
            <AdminRoute exact path="/admin/sub/list" component={SubList} />
            <AdminRoute
              exact
              path="/admin/sub-sub/list"
              component={SubSubList}
            />
            <AdminRoute exact path="/admin/brand/list" component={BrandList} />
            <AdminRoute exact path="/admin/color/list" component={ColorList} />
            <AdminRoute exact path="/admin/size/list" component={SizeList} />
            <AdminRoute
              exact
              path="/admin/coupon/list"
              component={CouponList}
            />
            <AdminRoute
              exact
              path="/admin/product/list"
              component={ProductList}
            />
            <AdminRoute
              exact
              path="/admin/product/create"
              component={ProductCreate}
            />
            <AdminRoute
              exact
              path="/admin/orders/list"
              component={AdminOrders}
            />
            <AdminRoute
              exact
              path="/admin/order/:orderId"
              component={AdminDetailOrder}
            />
            <UserRoute exact path="/checkout" component={Checkout} />
            <UserRoute
              exact
              path="/checkout-payment"
              component={CheckoutPayment}
            />
            <UserRoute
              exact
              path="/checkout-finish"
              component={CheckoutFinish}
            />

            <UserRoute exact path="/user/wishlist" component={WishList} />
            <UserRoute exact path="/user/account" component={UserDashboard} />
            <UserRoute exact path="/user/orders" component={UserOrders} />
            <UserRoute
              exact
              path="/user/order/detail/:trackId"
              component={UserOrderDetail}
            />

            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
