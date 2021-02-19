import React, { useState } from "react";
import { Modal, Button } from "antd";
// import { LoadingOutlined } from '@ant-design/icons';
import { toast } from "react-toastify";
import { createBrand } from "../../functions/brand";

const BrandCreateModal = ({ open, handleClose, loadBrands, token }) => {
  const initialState = { name: "" };
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
    createBrand(values, token)
      .then((data) => {
        setValues({ ...values, name: "" });
        toast.success("Created Successfully!");
        handleClose();
        loadBrands();
      })
      .catch((err) => {
        // console.log(err);
        toast.error(err.response.data.error);
      });
  };

  return (
    <>
      <Modal
        title="Create New Brand"
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
            name="name"
            onChange={handleChange("name")}
            value={name}
            size={30}
            placeHolder="Name"
            className="ty-login__input cm-focus"
          />
        </div>
      </Modal>
    </>
  );
};

export default BrandCreateModal;
