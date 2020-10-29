import React, { useState } from "react";
import { Modal,Button,Spin} from "antd";
// import { LoadingOutlined } from '@ant-design/icons';
import { toast } from "react-toastify";
import { createCategory } from "../../functions/category";
import FileUpload from "./FileUpload";


const CategoryCreateModal = ({ open,handleClose,loadCategories,token }) => {
  const initialState = {
    images: [
      {
        public_id: "",
        url: "",       
      },
    ],
    name: "",
  };
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const { name,images } = values;

  const handleChange = (name) => (e) => {
    setValues({
      ...values,
      [name]: e.target.value,
    });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    createCategory(values,token).then((data) => {
      setValues({ ...values,name:'',images:[{
        public_id: "",
        url: "",       
      },] });
      toast.success("Created Successfully!");
      handleClose();
      loadCategories();          
      }).catch((err)=>{
        console.log(err)
        toast.error(err.response.data.error);
      });
  };

  return (
   <>
        <Modal
        title="Create New Category"
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
              {loading ? (<Spin size="large" tip="Loading..."><FileUpload values={values}
              setValues={setValues}
              setLoading={setLoading} 
              token={token}
              /></Spin>):(<FileUpload values={values}
                setValues={setValues}
                setLoading={setLoading} 
                token={token}
                />   )}
              
        </Modal>

   </>
  );
};

export default CategoryCreateModal;
