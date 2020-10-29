import React, { useState,useEffect } from "react";
import { Modal,Button} from "antd";

import { toast } from "react-toastify";
import { createSub } from "../../functions/sub";
import { getCategories } from "../../functions/category";


const SubCreateModal = ({ open,handleClose,loadSubs,token }) => {
  const initialState = {
    name: "",
    category:""
  };
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const { name,category } = values;

  const handleChange = (name) => (e) => {
    setValues({
      ...values,
      [name]: e.target.value,
    });
  };

  const loadCategories= () => {
    getCategories().then((data) => {
      if (data.error) {
        toast.error(data.error);
      } else {
        setCategories(data.data);
      }
    });
  };
  
  const clickSubmit = (event) => {
    event.preventDefault();
    createSub(values,token).then((data) => {
      setValues({ ...values,name:'', category:'' });
      toast.success("Created Successfully!");
      handleClose();
      loadSubs();          
      }).catch((err)=>{
        console.log(err)
        toast.error(err.response.data.error);
      });
  };

  useEffect(() => {
    loadCategories();
   }, []);

  return (
   <>
        <Modal
        title="Create New Sub-Category"
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
        <div className="form-group">
                <label>Category</label>
                <select
                name="category"
                className="form-control"
                onChange={handleChange('category')} value={category}
                >
                <option>Please select</option>
                {categories.length > 0 &&
                    categories.map((c) => (
                    <option key={c._id} value={c._id}>
                        {c.name}
                    </option>
                    ))}
                </select>
            </div>
        </div>    
              <div className="ty-control-group">
                <label htmlFor="login_popup685" className="ty-login__filed-label ty-control-group__label cm-required cm-trim cm-email">Name</label>
                <input type="text"  name="user_login" onChange={handleChange('name')}
                value={name} size={30} placeHolder="Name Sub-category" className="ty-login__input cm-focus" />
              </div>       
        </Modal>

   </>
  );
};

export default SubCreateModal;
