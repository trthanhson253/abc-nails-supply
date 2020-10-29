import React, { useState } from "react";
import { Modal,Button} from "antd";
import { toast } from "react-toastify";
import { createSize } from "../../functions/size";


const SizeCreateModal = ({ open,handleClose,loadSizes,token }) => {
  const initialState = {name: ""};
  const [values, setValues] = useState(initialState);

  const { name } = values;

  const handleChange = (name) => (e) => {
    setValues({
      ...values,
      [name]: e.target.value,
    });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    createSize(values,token).then((data) => {
      setValues({ ...values,name:''});
      toast.success("Created Successfully!");
      handleClose();
      loadSizes();          
      }).catch((err)=>{
        console.log(err)
        toast.error(err.response.data.error);
      });
  };

  return (
   <>
        <Modal
        title="Create New Size"
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
        </Modal>
   </>
  );
};

export default SizeCreateModal;
