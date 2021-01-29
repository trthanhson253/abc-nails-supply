import React, { useState } from "react";
import { Modal, Button, Spin } from "antd";
// import { LoadingOutlined } from '@ant-design/icons';
import { toast } from "react-toastify";
import { createCategory } from "../../functions/category";
import FileUpload from "./FileUpload";
import { Editor } from "@tinymce/tinymce-react";

const CategoryCreateModal = ({
  open,
  handleClose,
  loadCategories,
  token,
  removeImage,
  setRemoveImage,
}) => {
  const initialState = {
    images: [
      {
        public_id: "",
        url: "",
      },
    ],
    name: "",
    description: "",
  };
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const { name, images, description } = values;

  const handleChange = (name) => (e) => {
    const value =
      name === "description" ? e.target.getContent() : e.target.value;
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    createCategory(values, token)
      .then((data) => {
        setValues({
          ...values,
          name: "",
          description: "",
          images: [
            {
              public_id: "",
              url: "",
            },
          ],
        });
        toast.success("Created Successfully!");
        handleClose();
        loadCategories();
        setRemoveImage(false);
      })
      .catch((err) => {
        // console.log(err);
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
            </Button>
            ,
            <Button key="submit" type="primary" onClick={clickSubmit}>
              Submit
            </Button>
          </>,
        ]}
      >
        <div className="ty-control-group">
          <label
            htmlFor="login_popup685"
            className="ty-login__filed-label ty-control-group__label cm-required cm-trim cm-email"
          >
            Name
          </label>
          <input
            type="text"
            name="user_login"
            onChange={handleChange("name")}
            value={name}
            size={30}
            placeHolder="Name"
            className="ty-login__input cm-focus"
          />
        </div>
        {loading ? (
          <Spin size="large" tip="Loading...">
            <FileUpload
              values={values}
              setValues={setValues}
              setLoading={setLoading}
              token={token}
            />
          </Spin>
        ) : (
          <FileUpload
            values={values}
            setValues={setValues}
            setLoading={setLoading}
            token={token}
            removeImage={removeImage}
            setRemoveImage={setRemoveImage}
          />
        )}
        <div className="ty-control-group">
          <label className="ty-control-group__title">Description</label>
          <Editor
            apiKey="vk5dzbhlfowdjlegve39540n21d7ems2k9hklan44u32j302"
            value={description}
            onChange={handleChange("description")}
            init={{
              height: 400,
              menubar: true,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help",
            }}
          />
        </div>
      </Modal>
    </>
  );
};

export default CategoryCreateModal;
