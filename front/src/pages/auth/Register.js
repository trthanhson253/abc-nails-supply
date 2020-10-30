import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { getCookie, register,removeCookie,setCookie } from "../../functions/auth";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Result, Button } from 'antd';

const Register = ({ history }) => {
    const [state, setState] = useState({
        email: '',
        name: '',
        password:'',
        confirmPassword:'',
        show:false,   
        success:'',
        buttonText: 'Register Now',
      });
    
    const { email,name, password, confirmPassword, buttonText,success,show } = state;
    const handleChange = (name) => (e) => {
        setState({
          ...state,
          [name]: e.target.value        
        });
      };
    const { user } = useSelector((state) => ({ ...state }));

    useEffect(() => {
        let intended = history.location.state;
        if (intended) {
          return;
        } else {
          if (user && user.token) history.push("/");
        }
      }, [user, history]);  

      const handleSubmit = async e => {
        e.preventDefault();
        setState({ ...state, buttonText: 'LOADING ...' });
        register(name,email,password,confirmPassword)
            .then((res) => {             
            //   toast.success(res.data.message);
              setState({
                ...state,
               success:res.data.message,
               show:true
              }); 
            //   window.localStorage.setItem("emailForRegistration", email);
            if(getCookie("emailForRegistration")){
                removeCookie("emailForRegistration");
            }
              setCookie("emailForRegistration", email);
            })
            .catch((error) => {
                setState({
                    ...state,
                    password:'',
                    confirmPassword:''
                  });   
                  
                toast.error(error.response.data.error);
            });
    };
    const goHome = () => (
        history.push("/")
    ); 
    const showSuccessMessage = (success) => (
        <Result
            status="success"
            title="Thank you for registering with us! But we still have one more step ...!"
            subTitle={success}
            extra={[
            <Button type="primary" key="console"  onClick={goHome}>
            Back Home
            </Button>,
            ]}
        />
      );
  return (
   <>
   <div className="container-fluid  content-grid">
   <div className="container-fluid-row">
       <div className="row-fluid ">
           <div className="span16 breadcrumbs-grid ">
               <div id="breadcrumbs_10">
                   <div className="ty-breadcrumbs clearfix">
                       <Link to="/" className="ty-breadcrumbs__a"><bdi>Home</bdi></Link><span className="ty-breadcrumbs__slash">/</span><span className="ty-breadcrumbs__current"><bdi>Registration</bdi></span>
                   </div>
                   {/* Inline script moved to the bottom of the page */} {/*breadcrumbs_10*/}
               </div>
           </div>
       </div>
   </div>
   <div className="container-fluid-row">
   {!show && (<div className="row-fluid ">
   <div className="span8 main-content-grid ">
       <div className="ty-mainbox-container clearfix">
           <h1 className="ty-mainbox-title">
               My Account
           </h1>
   
    <div className="ty-mainbox-body">
    
    <div className="ty-profile-field ty-account form-wrap" id="content_general">
        <form name="profile_form" enctype="multipart/form-data" onSubmit={handleSubmit} className="cm-processed-form">
            <input id="selected_section" type="hidden" defaultValue="general" name="selected_section" />
            <input id="default_card_id" type="hidden" defaultValue name="default_cc" />
            <input type="hidden" name="profile_id" defaultValue />
            <div className="ty-subheader">
                User account information
            </div>
            <div className="ty-control-group">
                <label htmlFor="email" className="ty-control-group__title cm-required cm-email cm-trim">Full Name</label>
                <input type="text" id="name" name="name"  value={name}
                onChange={handleChange('name')}
                placeholder="Your Full Name" size={32} maxLength={128} className="ty-input-text cm-focus" data-emoji_font="true" style={{fontFamily: 'Arial, Helvetica, sans-serif, Segoe UI Emoji, Segoe UI Symbol, Symbola, EmojiSymbols !important'}} />
            </div>
            <div className="ty-control-group">
                <label htmlFor="email" className="ty-control-group__title cm-required cm-email cm-trim">Email</label>
                <input type="text" id="email" name="email"  value={email}
                onChange={handleChange('email')}
                placeholder="Your email" size={32} maxLength={128} className="ty-input-text cm-focus" data-emoji_font="true" style={{fontFamily: 'Arial, Helvetica, sans-serif, Segoe UI Emoji, Segoe UI Symbol, Symbola, EmojiSymbols !important'}} />
            </div>
            <div className="ty-control-group">
                <label htmlFor="password1" className="ty-control-group__title cm-required cm-password">Password</label>
                <input type="password" id="password1" name="password1"  value={password}
                onChange={handleChange('password')}
                placeholder="Your password" size="{32}" maxlength="{32}" className="ty-input-text cm-autocomplete-off" autocomplete="off" />
            </div>
            <div className="ty-control-group">
                <label htmlFor="password2" className="ty-control-group__title cm-required cm-password">Confirm password</label>
                <input type="password" id="password2" name="password2"  value={confirmPassword}
                onChange={handleChange('confirmPassword')}
                placeholder="Confirm Password"size="{32}" maxlength="{32}" className="ty-input-text cm-autocomplete-off" autocomplete="off" />
            </div>
                         
            <div className="ty-profile-field__buttons buttons-container">
                <button id="save_profile_but" className="ty-btn__secondary ty-btn" type="submit" name="dispatch[profiles.update]">
                    <span><span>{buttonText}</span></span>
                </button>
            </div>
            <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="13dcad025577c22dce57208e523e517a" />
        </form>
    </div>
</div>
   
       </div>
   </div>
   <div className="span8 profile-information-grid ">
       <div className="ty-account-benefits">
           <h4>Benefits of becoming a registered member</h4>
           <ul>
               <li>Log in at any time to check order statuses</li>
               <li>Personalize your shopping</li>
               <li>Speed up future purchases</li>
           </ul>
       </div>
   </div>
   
</div>
   )}

   {show && showSuccessMessage(success)}
   </div>
</div>

   </>
  );
};

export default Register;
