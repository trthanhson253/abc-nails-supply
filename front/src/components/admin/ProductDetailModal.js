import React, { useState,useEffect } from "react";
import { Modal,Button,Avatar} from "antd";
// import { LoadingOutlined } from '@ant-design/icons';
import { toast } from "react-toastify";
import { createCategory } from "../../functions/category";
import FileUpload from "./FileUpload";
import { getDetailProduct } from "../../functions/product";
import renderHTML from 'react-render-html';

const ProductDetailModal = ({ open,handleClose,product,content }) => {
 
  
  // const [loading, setLoading] = useState(false);
  // const [ content, setContent] = useState("");

  // console.log("slug SON TRAN",slug);

  // const loadDetailProduct= (slug) => {
  //   getDetailProduct(slug).then(data => { 
  //     // setValue(data.product);
  //     console.log("STEP100",data);
  //   });
  // };

  // useEffect(() => {
  //   setContent(product.description);
  // }, [open]);


  return (
   <>
        <Modal
        title="Product Detail"
        centered
        visible={open}
        onCancel={handleClose}
        footer={[
          <>
            <Button type="primary" onClick={handleClose}>
              Done
            </Button>, 
          </>
         
        ]}
        >
             
              <label className="ty-login__filed-label ty-control-group__label cm-trim cm-email">SKU Number:</label>
              <p>{product.item}</p>
    
              <label className="ty-login__filed-label ty-control-group__label cm-trim cm-email">Name:</label>
              <p>{product.name}</p>

              <label className="ty-login__filed-label ty-control-group__label cm-trim cm-email">Category:</label>
              <p>{product.name}</p>

              <label className="ty-login__filed-label ty-control-group__label cm-trim cm-email">Sub-Category:</label>
              <p>{product.name}</p>

              <label className="ty-login__filed-label ty-control-group__label cm-trim cm-email">Sub-Sub Category:</label>
              <p>{product.name}</p>
                            
              <label className="ty-login__filed-label ty-control-group__label cm-trim cm-email">Quantity:</label>
              <p>{product.quantity}</p>
                            
              <label className="ty-login__filed-label ty-control-group__label cm-trim cm-email">Sold:</label>
              <p>{product.sold}</p>
                            
              <label className="ty-login__filed-label ty-control-group__label cm-trim cm-email">Status:</label>
              <p>{product.status}</p>               
              
              <label className="ty-login__filed-label ty-control-group__label cm-trim cm-email">Views:</label>
              <p>{product.clicks}</p>
             
              <label className="ty-login__filed-label ty-control-group__label cm-trim cm-email">Price:</label>
              <p>{product.price}</p>
                          
            <label className="ty-login__filed-label ty-control-group__label cm-trim cm-email">Discount Price:</label>
            <p>{product.discountPrice}</p>
                        
            <p><label className="ty-login__filed-label ty-control-group__label cm-trim cm-email">Image:</label></p>
            <p>{product.image &&
               ( 
                  <Avatar
                  src={product.image[1].url}
                  size={200}
                  
              />                 
               )}</p>
           
         
         
          <label className="ty-login__filed-label ty-control-group__label cm-trim cm-email">Description:</label>
          <p> {renderHTML(content)}</p>
         
           
             
        </Modal>

   </>
  );
};

export default ProductDetailModal;
