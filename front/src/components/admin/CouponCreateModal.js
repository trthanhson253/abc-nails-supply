import React, { useState } from "react";
import { Modal,Button} from "antd";
import { toast } from "react-toastify";
import { createCoupon } from "../../functions/coupon";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CouponCreateModal = ({ open,handleClose,loadCoupons,token }) => {
  const initialState = {name: "",expiry:""};
  const [values, setValues] = useState(initialState);

  const { name,expiry } = values;

  const handleChange = (name) => (e) => {
    setValues({
      ...values,
      [name]: e.target.value,
    });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    createCoupon(values,token).then((data) => {
      setValues({ ...values,name:'',expiry:''});
      toast.success("Created Successfully!");
      handleClose();
      loadCoupons();          
      }).catch((err)=>{
        console.log(err)
        toast.error(err.response.data.error);
      });
  };

  return (
   <>
        <Modal
        title="Create New Coupon"
        centered
        visible={open}
        onOk={clickSubmit}
        onCancel={handleClose}
        footer={[
          <>
          <Button key="back" onClick={handleClose}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={clickSubmit}>
              Submit
            </Button>
          
          </>
         
        ]}
        >
              <div className="ty-control-group">
                <label htmlFor="login_popup685" className="ty-login__filed-label ty-control-group__label cm-required cm-trim cm-email">Name</label>
                <input type="text"  name="user_login" onChange={handleChange('name')}
                value={name} size={30} placeHolder="Name" className="ty-login__input cm-focus" />
              </div> 
              <div className="ty-control-group">
              <label htmlFor="login_popup685" className="ty-login__filed-label ty-control-group__label cm-required cm-trim cm-email">Expiry</label>
              <DatePicker
              className="form-control"
              selected={new Date()}
              value={expiry}
              onChange={handleChange('expiry')}
              required
            />
            </div>                               
        </Modal>
   </>
  );
};

export default CouponCreateModal;
