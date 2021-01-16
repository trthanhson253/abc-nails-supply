import React, { useState,useEffect } from "react";
import { Modal,Button,Select} from "antd";
import { toast } from "react-toastify";
import { createSubSub } from "../../functions/subSub";
import { getCategories,getCategorySubs } from "../../functions/category";


const SubSubCreateModal = ({ open,handleClose,loadSubSubs,token }) => {
  const initialState = {
    name: "",
    category:"",
    sub:""
  };
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [showSub, setShowSub] = useState(false);
  const [subOptions, setSubOptions] = useState([]);

  const { name,category,sub } = values;

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
    createSubSub(values,token).then((data) => {
      setValues({ ...values,name:'', category:'',sub:'' });
      toast.success("Created Successfully!");
      handleClose();
      loadSubSubs();          
      }).catch((err)=>{
        console.log(err)
        toast.error(err.response.data.error);
      });
  };

  const handleCatagoryChange = (e) => {
    // console.log(e.target.value)
    setValues({ ...values, category: e.target.value });
    getCategorySubs(e.target.value).then((res) => {
      setSubOptions(res.data);
    //   console.log("RES",res.data);
    
    });
    setShowSub(true);
  };

  useEffect(() => {
    loadCategories();
   }, []);

  return (
   <>
        <Modal
        title="Create New Sub-Sub Category"
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
                    onChange={handleCatagoryChange}
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
        {showSub && (
            <div className="ty-control-group">
            <div className="form-group">
                    <label>Sub-Category</label>
                    <select
                        mode="multiple"
                        style={{ width: "100%" }}
                        placeholder="Please select"
                        value={sub}
                        onChange={handleChange('sub')}
                    >
                    <option>Please select</option>
                        {subOptions.length > 0 &&
                        subOptions.map((s) => (
                            <option key={s._id} value={s._id}>
                            {s.name}
                            </option>
                        ))}
                            
                        
                    </select>
                </div>
        </div>    
        )}

              <div className="ty-control-group">
                <label htmlFor="login_popup685" className="ty-login__filed-label ty-control-group__label cm-required cm-trim cm-email">Name</label>
                <input type="text"  name="user_login" onChange={handleChange('name')}
                value={name} size={30} placeHolder="Name Sub-Sub Category" className="ty-login__input cm-focus" />
              </div>    
    
        </Modal>

   </>
  );
};

export default SubSubCreateModal;
