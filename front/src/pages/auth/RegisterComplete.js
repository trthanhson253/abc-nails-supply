
import { Link } from "react-router-dom";
import React, { useState,useEffect } from "react";
import { Result, Button } from 'antd';
import { useHistory } from "react-router-dom";
import Spinner from "../../components/Spinner"
import { registerActivate } from "../../functions/auth";

const RegisterComplete = (props) => {

const [loading, setLoading] = useState(false);
const [state, setState] = useState({
    success: '',
    error: ''
  });
  const { success, error } = state;
const [count, setCount] = useState(15);
let history = useHistory();

const loadPage= (token) => {
    setLoading(true);
    registerActivate(token).then((res) => { 
        setLoading(false); 
        setState({
            ...state,
            success: res.data.message,
          });     
    }).catch((error) => {
        // console.log("Son",error.response);
          setLoading(false); 
          setState({
            ...state,
            error: error.response.data.error,
          });     
         
      });
    };

const loginNow = () => (
    history.push("/login")
); 
const goHome = () => (
    history.push("/")
); 

const showSuccessMessage = (success) => (
    <Result
    status="success"
    title={success}
    subTitle="Now you can sign in to start shopping with us."
    extra={[
      <Button type="primary" key="console" onClick={loginNow}>
        Login Now
      </Button>,
      <Button key="buy" onClick={goHome}>Back Home</Button>,
    ]}
  />
); 

const showErrorMessage = (error) => (
    <Result
    status="warning"
    title={error}
    extra={
      <Button type="primary" key="console" onClick={goHome}>
        Back Home
      </Button>
    }
  />
);
  

useEffect(() => {
    const token = props.match.params.token;
       loadPage(token);
    }, [props]);

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
   {loading ? (<Spinner />):(
       
       <div className="container p-5 text-center" style={{paddingTop:'30px'}}>
       <h4>Redirecting you to Login Page in {count} seconds...</h4>
       <br></br>
       {success && showSuccessMessage(success)}
       {error && showErrorMessage(error)}
   </div>
    
   )}
   

   </>
  );
};

export default RegisterComplete;
