import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";
import { currentAdmin,getCookie } from "../../functions/auth";
import { toast } from "react-toastify";

const AdminRoute = ({ children, ...rest }) => {
  const { user } = useSelector((state) => ({ ...state }));
  const [ok, setOk] = useState(false);

  useEffect(() => {
    var role=getCookie("role");
    var token=getCookie("token");

    if (role && token) {
      currentAdmin(token)
        .then((res) => {
          console.log("CURRENT ADMIN RES", res);
          setOk(true);
        })
        .catch((err) => {
          // toast.error(err.response.data.error);
          console.log("ADMIN ROUTE ERR", err);
          setOk(false);
        });
    }else{
      toast.error("Access to this page is prohibited");
    }
  }, [user]);

  return ok ? <Route {...rest} /> : <LoadingToRedirect />;
};

export default AdminRoute;
