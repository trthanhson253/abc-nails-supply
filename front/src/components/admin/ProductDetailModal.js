import React, { useState,useEffect } from "react";
import { Modal,Button,Spin} from "antd";
// import { LoadingOutlined } from '@ant-design/icons';
import { toast } from "react-toastify";
import { createCategory } from "../../functions/category";
import FileUpload from "./FileUpload";
import { getDetailProduct } from "../../functions/product";

const ProductDetailModal = ({ open,handleClose,slug }) => {
 
  const [value, setValue] = useState({});
  const [loading, setLoading] = useState(false);


  const loadDetailProduct= (slug) => {
    getDetailProduct(slug).then(data => { 
        console.log(data)
    });
  };

  useEffect(() => {
    loadDetailProduct(slug);
    console.log("slug SON TRAN",slug)
  }, []);
  return (
   <>
        <Modal
        title="Product Detail"
        centered
        visible={open}
        onCancel={handleClose}
        footer={[
          <>
            <Button key="back" onClick={handleClose}>
              Done
            </Button>, 
          </>
         
        ]}
        >
              <div className="ty-control-group">
                <label htmlFor="login_popup685" className="ty-login__filed-label ty-control-group__label cm-required cm-trim cm-email">Name</label>
               
              </div>    
             
        </Modal>

   </>
  );
};

export default ProductDetailModal;
