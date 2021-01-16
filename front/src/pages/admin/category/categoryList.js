import React, { useState, useEffect } from "react";
import AdminMenu from "../../../components/admin/AdminMenu";
import CategoryCreateModal from "../../../components/admin/CategoryCreateModal";
import { getCategories, removeCategory } from "../../../functions/category";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Avatar } from "antd";
import { Steps } from "antd";

const CategoryList = () => {
  const [open, setOpen] = useState(false);
  const [removeImage, setRemoveImage] = useState(false);
  const [categories, setCategories] = useState([]);
  const { Step } = Steps;
  const { user } = useSelector((state) => ({ ...state }));
  const token = user.token;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setRemoveImage(true);
  };

  const loadCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        toast.error(data.error);
      } else {
        console.log(data.data);
        setCategories(data.data);
      }
    });
  };

  const handleRemove = async (slug, cateId, images) => {
    // let answer = window.confirm("Delete?");
    // console.log(answer, slug);
    if (
      window.confirm(
        "ATTENTION! When this category is deleted, all of its sub-categories and products will be deleted also. The data will be deleted permanently and cannot be recovered .Are you sure you want to continue this process ?"
      )
    ) {
      //   setLoading(true);
      removeCategory(slug, cateId, token, images)
        .then((res) => {
          //   setLoading(false); ${res.data.name}
          toast.error(`This Category is deleted`);
          loadCategories();
        })
        .catch((err) => {
          if (err.response.status === 400) {
            // setLoading(false);
            toast.error(err.response.data);
          }
        });
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <>
      <div id="wrapper">
        <AdminMenu />
        <div id="page-wrapper">
          <CategoryCreateModal
            open={open}
            handleClose={handleClose}
            loadCategories={loadCategories}
            removeImage={removeImage}
            token={token}
            setRemoveImage={setRemoveImage}
          />
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <Steps size="small" current={0}>
                  <Step title="Category" />
                  <Step title="Sub-Category" />
                  <Step title="Sub-Sub Category" />
                  <Step title="Brand" />
                  <Step title="Color" />
                  <Step title="Size" />
                </Steps>
              </div>
              <div className="col-lg-12">
                <h1 className="page-header">Category</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <i className="fa fa-align-justify fa-fw" /> List of Category
                    &nbsp;&nbsp;&nbsp;
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={handleClickOpen}
                    >
                      <i className="fa fa-plus fa-fw" /> New
                    </button>
                  </div>
                  {/* /.panel-heading */}
                  <div className="panel-body">
                    <div className="table-responsive">
                      <table
                        className="table table-striped table-bordered table-hover"
                        id="dataTables-example"
                      >
                        <thead>
                          <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {categories.map((c) => (
                            <tr className="odd gradeX" key={c._id}>
                              <td>1</td>
                              <td>{c.name}</td>
                              <td>
                                {c.images[1] && (
                                  <Avatar
                                    src={c.images[1].url}
                                    size={100}
                                    shape="square"
                                  />
                                )}
                              </td>
                              <td className="center">
                                <div className="text-center">
                                  <button
                                    type="button"
                                    class="btn btn-primary btn-circle"
                                  >
                                    <i class="fa fa-edit"></i>
                                  </button>
                                  &nbsp;
                                  <button
                                    type="button"
                                    class="btn btn-danger btn-circle"
                                    onClick={() =>
                                      handleRemove(c.slug, c._id, c.images)
                                    }
                                  >
                                    <i class="fa fa-trash-o"></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {/* /.table-responsive */}
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

export default CategoryList;
