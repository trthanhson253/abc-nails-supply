import React, { useState,useEffect } from "react";
import AdminMenu from "../../../components/admin/AdminMenu";
import BrandCreateModal from "../../../components/admin/BrandCreateModal";
import { getBrands } from "../../../functions/brand";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Steps  } from 'antd';

const BrandList = () => {

const [open, setOpen] = useState(false);
const [brands, setBrands] = useState([]);
const { Step } = Steps;
const { user } = useSelector((state) => ({ ...state }));
const token = user.token;

 const handleClickOpen = () => {
    setOpen(true);
};
const handleClose = () => {
    setOpen(false);
  };

  const loadBrands= () => {
    getBrands().then((data) => {
      if (data.error) {
        toast.error(data.error);
      } else {
        setBrands(data.data);
      }
    });
  };
  useEffect(() => {
    loadBrands();
  }, []);

  return (
   <>
   <div id="wrapper">
   
   <AdminMenu />
   <div id="page-wrapper">
   <BrandCreateModal open={open} handleClose={handleClose} loadBrands={loadBrands} token={token}/>
   <div className="container-fluid">
       <div className="row">
       <div className="col-lg-12">
       <Steps size="small" current={3}>
                        <Step title="Category" />
                        <Step title="Sub-Category" />
                        <Step title="Sub-Sub Category" />
                        <Step title="Brand" />
                        <Step title="Color"  />
                        <Step title="Size"  />
                    </Steps>
       </div>
           <div className="col-lg-12">
               <h1 className="page-header">Brand</h1>
           </div>
          
       </div>
       
       <div className="row">
       <div className="col-lg-12">
           <div className="panel panel-default">
               <div className="panel-heading">
               <i className="fa fa-align-justify fa-fw" /> List of Brand
               &nbsp;&nbsp;&nbsp;<button type="button" class="btn btn-primary" onClick={handleClickOpen} ><i className="fa fa-plus fa-fw" /> New</button>                
               </div>                 
               {/* /.panel-heading */}
               <div className="panel-body">
                   <div className="table-responsive">
                       <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                           <thead>
                               <tr>
                                   <th></th>
                                   <th>Name</th>
                                   <th>Action</th>
                                  
                               </tr>
                           </thead>
                           <tbody>
                           {brands.map((b) => (
                            <tr className="odd gradeX" key={b._id}>
                                <td>1</td>
                                <td>{b.name}</td>                                     
                                <td className="center">
                                <div className="text-center"> 
                                <button type="button" class="btn btn-primary btn-circle"><i class="fa fa-edit"></i></button>&nbsp;
                                <button type="button" class="btn btn-danger btn-circle"><i class="fa fa-trash-o"></i></button></div>                            
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

export default BrandList;
