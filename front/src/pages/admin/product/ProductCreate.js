import React, { useState, useEffect } from "react";
import { message, Radio, Spin, Steps } from "antd";
import { toast } from "react-toastify";
import { createProduct } from "../../../functions/product";
import { useSelector } from "react-redux";
import {
  getCategories,
  getCategorySubs,
  getCategorySubSubs,
} from "../../../functions/category";
import { getBrands } from "../../../functions/brand";
import { getColors } from "../../../functions/color";
import { getSizes } from "../../../functions/size";
import AdminMenu from "../../../components/admin/AdminMenu";
import FileMultipleUpload from "../../../components/admin/FileMultipleUpload";
import { LoadingOutlined } from "@ant-design/icons";
// import CKEditor from "ckeditor4-react";
import { Editor } from "@tinymce/tinymce-react";
const ProductCreate = ({ history }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const initialState = {
    item: "",
    name: "",
    price: "",
    discountPrice: "",
    category: "",
    sub: "",
    subSub: "",
    quantity: 50,
    images: [],
    status: 0,
    shipping: 0,
    color: "",
    size: "",
    brand: "",
    // formData:"",
    description: "",
  };
  const [values, setValues] = useState(initialState);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [subOptions, setSubOptions] = useState([]);
  const [showSub, setShowSub] = useState(false);
  // const [description, setDescription] = useState("");

  const [subSubOptions, setSubSubOptions] = useState([]);
  const [showSubSub, setShowSubSub] = useState(false);

  const { Step } = Steps;
  const { user } = useSelector((state) => ({ ...state }));
  const token = user.token;

  // const { formData,item,name, price, discountPrice, category, sub, subSub, quantity, images, shipping, color, size, brand } = values;
  const {
    description,
    item,
    name,
    price,
    status,
    discountPrice,
    category,
    sub,
    subSub,
    quantity,
    images,
    shipping,
    color,
    size,
    brand,
  } = values;
  const handleClickOpen = () => {
    history.push("/admin/product/list");
  };
  const handleChange = (name) => (e) => {
    const value =
      name === "description" ? e.target.getContent() : e.target.value;
    // formData.set(name, e.target.value);
    // setValues({...values,[name]: e.target.value,formData });
    setValues({ ...values, [name]: value });
  };

  const loadCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        toast.error(data.error);
      } else {
        setCategories(data.data);
      }
    });
  };

  const loadBrands = () => {
    getBrands().then((data) => {
      if (data.error) {
        toast.error(data.error);
      } else {
        setBrands(data.data);
      }
    });
  };

  const loadColors = () => {
    getColors().then((data) => {
      if (data.error) {
        toast.error(data.error);
      } else {
        setColors(data.data);
      }
    });
  };

  const loadSizes = () => {
    getSizes().then((data) => {
      if (data.error) {
        toast.error(data.error);
      } else {
        setSizes(data.data);
      }
    });
  };

  const handleCatagoryChange = (e) => {
    setValues({ ...values, category: e.target.value });
    getCategorySubs(e.target.value)
      .then((res) => {
        if (res.data == 0) {
          setShowSub(false);
          message.error("No Sub-Category Found");
        } else {
          setSubOptions(res.data);
          message.success("Sub-Category Found");
          setShowSub(true);
        }
      })
      .catch((err) => {
        setShowSub(false);
      });
  };

  const handleSubCatagoryChange = (e) => {
    setValues({ ...values, sub: e.target.value });
    getCategorySubSubs(e.target.value)
      .then((res) => {
        if (res.data == 0) {
          setShowSubSub(false);
          message.error("No Sub-Sub Category Found");
        } else {
          setSubSubOptions(res.data);
          message.success("Sub-Sub Category Found");
          setShowSubSub(true);
        }
      })
      .catch((err) => {
        setShowSubSub(false);
      });
  };
  // const handleDescription = e => {
  //   setDescription(e.editor.getData());
  //   formData.set("description", e.editor.getData());
  // };
  const clickSubmit = (event) => {
    event.preventDefault();
    createProduct(values, token)
      .then((data) => {
        setValues({
          ...values,
          item: "",
          name: "",
          price: "",
          discountPrice: "",
          category: "",
          sub: "",
          subSub: "",
          quantity: "",
          image: "",
          shipping: "",
          color: "",
          size: "",
          brand: "",
          description: "",
          status: 0,
        });
        // setDescription("");
        toast.success("Created Successfully!");
        history.push("/admin/product/list");
      })
      .catch((err) => {
        // console.log(err);
        toast.error(err.response.data.error);
      });
  };

  useEffect(() => {
    // setValues({ ...values, formData: new FormData() });
    loadCategories();
    loadBrands();
    loadColors();
    loadSizes();
  }, []);

  return (
    <>
      <div id="wrapper">
        <AdminMenu />
        <div id="page-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="page-header">Product</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <i className="fa fa-align-justify fa-fw" /> Create New
                    Product &nbsp;&nbsp;&nbsp;
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={handleClickOpen}
                    >
                      Back to List
                    </button>
                  </div>
                  {/* /.panel-heading */}
                  <div className="panel-body">
                    <div
                      className="ty-profile-field ty-account form-wrap"
                      id="content_general"
                    >
                      <form
                        name="profile_form"
                        enctype="multipart/form-data"
                        onSubmit={clickSubmit}
                        className="cm-processed-form"
                      >
                        <Steps direction="vertical" size="small" current={12}>
                          <Step
                            title="Step 1"
                            description="Choose Category (Require)"
                          />
                          <div className="ty-control-group">
                            <select
                              name="category"
                              className="form-control"
                              onChange={handleChange("category")}
                              value={category}
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

                          <Step
                            title="Step 2"
                            description="Choose Sub Category (Require)"
                          />
                          {showSub && (
                            <div className="ty-control-group">
                              <select
                                mode="multiple"
                                className="form-control"
                                placeholder="Please select"
                                onChange={handleChange("sub")}
                                value={sub}
                                onChange={handleSubCatagoryChange}
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
                          )}

                          <Step
                            title="Step 3"
                            description="Choose Sub-Sub Category (Require)"
                          />
                          {showSubSub && (
                            <div className="ty-control-group">
                              <select
                                name="subSub"
                                className="form-control"
                                onChange={handleChange("subSub")}
                                value={subSub}
                              >
                                <option>Please select</option>
                                {subSubOptions.length > 0 &&
                                  subSubOptions.map((c) => (
                                    <option key={c._id} value={c._id}>
                                      {c.name}
                                    </option>
                                  ))}
                              </select>
                            </div>
                          )}

                          <Step
                            title="Step 4"
                            description="Choose Brand (Require)"
                          />
                          <div className="ty-control-group">
                            <select
                              name="brand"
                              className="form-control"
                              onChange={handleChange("brand")}
                              value={brand}
                            >
                              <option>Please select</option>
                              {brands.map((c) => (
                                <option key={c._id} value={c.name}>
                                  {c.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <Step
                            title="Step 5"
                            description="Choose Color (Require)"
                          />
                          <div className="ty-control-group">
                            <select
                              name="color"
                              className="form-control"
                              onChange={handleChange("color")}
                              value={color}
                            >
                              <option>Please select</option>
                              {colors.map((c) => (
                                <option key={c._id} value={c.name}>
                                  {c.name}
                                </option>
                              ))}
                            </select>
                          </div>

                          <Step
                            title="Step 6"
                            description="Choose Size (Require)"
                          />
                          <div className="ty-control-group">
                            <select
                              name="size"
                              className="form-control"
                              onChange={handleChange("size")}
                              value={size}
                            >
                              <option>Please select</option>
                              {sizes.map((c) => (
                                <option key={c._id} value={c.name}>
                                  {c.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="row">
                            <div className="ty-control-group col-lg-6">
                              <label
                                htmlFor="email"
                                className="ty-control-group__title cm-required cm-email cm-trim"
                              >
                                Item SKU-
                              </label>
                              <input
                                type="text"
                                id="item"
                                name="item"
                                value={item}
                                onChange={handleChange("item")}
                                placeholder="Item SKU"
                                size={32}
                                maxLength={128}
                                className="ty-input-text cm-focus"
                                data-emoji_font="true"
                                style={{
                                  fontFamily:
                                    "Arial, Helvetica, sans-serif, Segoe UI Emoji, Segoe UI Symbol, Symbola, EmojiSymbols !important",
                                }}
                              />
                            </div>

                            <div className="ty-control-group col-lg-6">
                              <label
                                htmlFor="email"
                                className="ty-control-group__title cm-required cm-email cm-trim"
                              >
                                Product's Name
                              </label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={handleChange("name")}
                                placeholder="Product's Name"
                                size={32}
                                maxLength={128}
                                className="ty-input-text cm-focus"
                                data-emoji_font="true"
                                style={{
                                  fontFamily:
                                    "Arial, Helvetica, sans-serif, Segoe UI Emoji, Segoe UI Symbol, Symbola, EmojiSymbols !important",
                                }}
                              />
                            </div>

                            <div className="ty-control-group col-lg-6">
                              <label
                                htmlFor="email"
                                className="ty-control-group__title cm-trim"
                              >
                                Price
                              </label>
                              <input
                                type="number"
                                id="price"
                                name="price"
                                value={price}
                                onChange={handleChange("price")}
                                placeholder="Price"
                                size={32}
                                maxLength={128}
                                className="ty-input-text cm-focus"
                                data-emoji_font="true"
                                style={{
                                  fontFamily:
                                    "Arial, Helvetica, sans-serif, Segoe UI Emoji, Segoe UI Symbol, Symbola, EmojiSymbols !important",
                                }}
                              />
                            </div>
                            <div className="ty-control-group col-lg-6">
                              <label
                                htmlFor="email"
                                className="ty-control-group__title cm-trim"
                              >
                                Discount Price
                              </label>
                              <input
                                type="number"
                                id="discountPrice"
                                name="discountPrice"
                                value={discountPrice}
                                onChange={handleChange("discountPrice")}
                                placeholder="Discount Price"
                                size={32}
                                maxLength={128}
                                className="ty-input-text cm-focus"
                                data-emoji_font="true"
                                style={{
                                  fontFamily:
                                    "Arial, Helvetica, sans-serif, Segoe UI Emoji, Segoe UI Symbol, Symbola, EmojiSymbols !important",
                                }}
                              />
                            </div>
                            <div className="ty-control-group col-lg-6">
                              <label
                                htmlFor="password1"
                                className="ty-control-group__title"
                              >
                                Quantity
                              </label>
                              <input
                                type="text"
                                id="quantity"
                                name="quantity"
                                value={quantity}
                                onChange={handleChange("quantity")}
                                placeholder="Quantity"
                                size="{32}"
                                maxlength="{32}"
                                className="ty-input-text cm-autocomplete-off"
                                autocomplete="off"
                              />
                            </div>

                            <div className="ty-control-group col-lg-6">
                              <label
                                htmlFor="password2"
                                className="ty-control-group__title cm-required"
                              >
                                Shipping
                              </label>
                              <Radio.Group
                                name="radiogroup"
                                value={shipping}
                                onChange={handleChange("shipping")}
                              >
                                <Radio value={0}>Yes</Radio>
                                <Radio value={1}>No</Radio>
                              </Radio.Group>
                            </div>
                            <div className="ty-control-group col-lg-6">
                              <label
                                htmlFor="password2"
                                className="ty-control-group__title cm-required"
                              >
                                Status
                              </label>
                              <Radio.Group
                                name="radiogroup"
                                value={status}
                                onChange={handleChange("status")}
                              >
                                <Radio value={0}>Show</Radio>
                                <Radio value={1}>Hide</Radio>
                              </Radio.Group>
                            </div>
                          </div>

                          <div className="ty-control-group">
                            {loading ? (
                              <Spin indicator={antIcon}>
                                <FileMultipleUpload
                                  values={values}
                                  setValues={setValues}
                                  setLoading={setLoading}
                                  token={token}
                                />
                              </Spin>
                            ) : (
                              <FileMultipleUpload
                                values={values}
                                setValues={setValues}
                                setLoading={setLoading}
                                token={token}
                              />
                            )}
                          </div>

                          <div className="ty-control-group">
                            <label className="ty-control-group__title">
                              Description
                            </label>
                            <Editor
                              apiKey="vk5dzbhlfowdjlegve39540n21d7ems2k9hklan44u32j302"
                              value={description}
                              onChange={handleChange("description")}
                              init={{
                                height: 1000,
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
                          <div className="ty-profile-field__buttons buttons-container">
                            <button
                              id="save_profile_but"
                              className="ty-btn__secondary ty-btn"
                              type="submit"
                              name="dispatch[profiles.update]"
                            >
                              <span>
                                <span>Create</span>
                              </span>
                            </button>
                          </div>
                        </Steps>
                      </form>
                    </div>
                  </div>
                  {/* /.panel-body */}
                </div>
                {/* /.panel */}
              </div>
              {/* /.col-lg-12 */}
            </div>
            {/* /.row */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCreate;
