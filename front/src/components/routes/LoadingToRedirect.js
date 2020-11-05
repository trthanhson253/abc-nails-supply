import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Spinner from "../Spinner"
import { useSelector } from "react-redux";

const LoadingToRedirect = () => {
  const [count, setCount] = useState(2);
  let history = useHistory();
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    // redirect once count is equal to 0
    count === 0 && history.push("/login");
    // cleanup
    return () => clearInterval(interval);
  }, [count,history]);

  return (
    <>
      <Spinner />
    </>
  );
};

export default LoadingToRedirect;
