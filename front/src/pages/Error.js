
import { Link } from "react-router-dom";
import React, { useState,useEffect } from "react";

const Error = () => {

  return (
   <>
    <center style={{padding: '20px'}}>
    <h3>This link does not exist.</h3>
    <img src={require('../assets/img/error.png')} alt="error" />
    
    </center>
   </>
  );
};

export default Error;
