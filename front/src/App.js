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
import UserRoute from "./components/routes/UserRoute";
import AdminRoute from "./components/routes/AdminRoute";

import Home from "./pages/Home";

import SubSubHome from "./pages/home/SubSubHome";
import ProductDetailHome from "./pages/home/ProductDetailHome";
import Checkout from "./pages/home/Checkout";


// import { useSelector } from "react-redux";
import { currentUser } from "./functions/auth";
import { useDispatch } from "react-redux";

import { getCookie } from "./functions/auth";


// import Nhap from "./pages/Nhap";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    var userToken=getCookie("token");
    var userId=getCookie("_id");
    if(userToken){
      currentUser(userId,userToken)
      .then((res) => {         
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            name: res.data.name,
            email: res.data.email,
            token: userToken,
            role: res.data.role,
            _id: res.data._id
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
    <div className="ty-tygh   bp-tygh-container" id="tygh_container">
    <div id="ajax_overlay" className="ty-ajax-overlay" />
    <div id="ajax_loading_box" className="ty-ajax-loading-box" />
    <div className="cm-notification-container notification-container">
    </div>
    <div className="ty-helper-container " id="tygh_main_container">
          <Header />
          <ToastContainer />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          

            <Route exact path="/:cslug/:sslug/:ssslug/product" component={SubSubHome} />
            <Route exact path="/:cslug/:sslug/:ssslug/:pslug/product" component={ProductDetailHome} />

            <Route exact path="/detail" component={ProductDetailHome} />
            <Route exact path="/checkout" component={Checkout} />
            
            <AdminRoute exact path="/admin" component={AdminDashboard} />
            <AdminRoute exact path="/admin/category/list" component={categoryList} />
            <AdminRoute exact path="/admin/sub/list" component={SubList} />
            <AdminRoute exact path="/admin/sub-sub/list" component={SubSubList} />
            <AdminRoute exact path="/admin/brand/list" component={BrandList} />
            <AdminRoute exact path="/admin/color/list" component={ColorList} />
            <AdminRoute exact path="/admin/size/list" component={SizeList} />
            <AdminRoute exact path="/admin/coupon/list" component={CouponList} />
            <AdminRoute exact path="/admin/product/list" component={ProductList} />
            <AdminRoute exact path="/admin/product/create" component={ProductCreate} />

          </Switch>
          <Footer />
        </div>
     </div>
  </>
  );
}

export default App;
