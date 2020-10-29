import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Badge,Image,Upload,Button,Avatar   } from "antd";
import { useSelector } from "react-redux";
import Resizer from "react-image-file-resizer";
import axios from "axios";
import { toast } from "react-toastify";
import { UploadOutlined } from '@ant-design/icons';

const FileMultipleUpload = ({values, setValues,setLoading,loading,token}) => {
  const { user } = useSelector((state) => ({ ...state }));
  let token1= user ? token :"";
  const fileUploadAndResize = (e) => {
    // console.log(e.target.files);
    // resize
    let files = e.target.files; // 3
    let allUploadedFiles = values.images;

    if (files) {
      setLoading(true);
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          720,
          720,
          "JPEG",
          100,
          0,
          (uri) => {
            // console.log(uri);
            axios
              .post(
                `${process.env.REACT_APP_API}/uploadimages`,
                { image: uri },
                {
                  headers: {
                    Authorization: `Bearer ${token}`
                  },
                }
              )
              .then((res) => {
                console.log("IMAGE UPLOAD RES DATA", res);
                setLoading(false);
                allUploadedFiles.push(res.data);
                setValues({ ...values, images: allUploadedFiles });
              })
              .catch((err) => {
                setLoading(false);
                
                console.log("CLOUDINARY UPLOAD ERR", err);
              });
          },
          "base64"
        );
      }
    }
    // send back to server to upload to cloudinary
    // set url to images[] in the parent component state - ProductCreate
  };

  const handleImageRemove = (public_id) => {
    // setLoading(true);
    // console.log("remove image", public_id);
    axios
      .post(
        `${process.env.REACT_APP_API}/removeimage`,
        { public_id },
        {
          headers: {
            Authorization: `Bearer ${token}`
          },
        }
      )
      .then((res) => {
        // setLoading(false);
        const { images } = values;
        let filteredImages = images.filter((item) => {
          return item.public_id !== public_id;
        });
        setValues({ ...values, images: filteredImages });
      })
      .catch((err) => {
        console.log(err);
        // setLoading(false);
      });
  };


  return (
   <>
   <div className="ty-control-group">
   <label htmlFor="login_popup685" className="ty-login__filed-label ty-control-group__label cm-trim cm-email">Upload Multiple Images</label>
   
 </div>    
   <div className="ty-control-group">
  
   {values.images &&
    values.images.map((image) => (
      <Badge
        count="X"
        key={image.public_id}
        onClick={() => handleImageRemove(image.public_id)}
        style={{ cursor: "pointer" }}
      >
      <Image
        src={image.url}
        width={200}
        style={{paddingLeft:"30px"}}
    />
      </Badge>
    ))}
   </div>
   <div className="ty-control-group">
   <input type="file" accept="images/*" multiple className="ty-login__input cm-focus" onChange={fileUploadAndResize} disabled={values.images[1]} />
     
   </div>            
   </>
  );
};

export default FileMultipleUpload;
