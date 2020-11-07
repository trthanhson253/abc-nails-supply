import React, { useState, useEffect } from 'react';
import AdminMenu from '../../../components/admin/AdminMenu';
import CouponCreateModal from '../../../components/admin/CouponCreateModal';
import {
  getCoupons,
  loadCoupons,
  removeCoupon,
} from '../../../functions/coupon';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const CouponList = () => {
  const [open, setOpen] = useState(false);
  const [coupons, setCoupons] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));
  const token = user.token;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const loadCoupons = () => {
    getCoupons().then((data) => {
      if (data.error) {
        toast.error(data.error);
      } else {
        setCoupons(data.data);
      }
    });
  };

  const handleRemove = (couponId) => {
    if (window.confirm('Are you sure you want to delete this coupon?')) {
      // setLoading(true);
      removeCoupon(couponId, token)
        .then((res) => {
          loadCoupons(); // load all coupons
          // setLoading(false);
          toast.error(`Coupon "${res.data.name}" deleted`);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    loadCoupons();
  }, []);

  return (
    <>
      <div id="wrapper">
        <AdminMenu />
        <div id="page-wrapper">
          <CouponCreateModal
            open={open}
            handleClose={handleClose}
            loadCoupons={loadCoupons}
            token={token}
          />
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="page-header">Coupon</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <i className="fa fa-align-justify fa-fw" /> List of Coupon
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
                            <th>Expire Date</th>
                            <th>Discount</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {coupons.map((c) => (
                            <tr className="odd gradeX" key={c._id}>
                              <td>1</td>
                              <td>{c.name}</td>
                              <td>{new Date(c.expiry).toLocaleDateString()}</td>
                              <td>{c.discount} %</td>
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
                                    onClick={() => handleRemove(c._id)}
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

export default CouponList;
