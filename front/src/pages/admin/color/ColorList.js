import React, { useState,useEffect } from "react";
import AdminMenu from "../../../components/admin/AdminMenu";
import ColorCreateModal from "../../../components/admin/ColorCreateModal";
import { getColors } from "../../../functions/color";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Steps  } from 'antd';

const ColorList = () => {

const [open, setOpen] = useState(false);
const [colors, setColors] = useState([]);
const { Step } = Steps;
const { user } = useSelector((state) => ({ ...state }));
const token = user.token;

 const handleClickOpen = () => {
    setOpen(true);
};
const handleClose = () => {
    setOpen(false);
  };

  const loadColors= () => {
    getColors().then((data) => {
      if (data.error) {
        toast.error(data.error);
      } else {
        setColors(data.data);
      }
    });
  };
  useEffect(() => {
    loadColors();
  }, []);

  return (
   <>
   <div id="wrapper">
   
   <AdminMenu />
   <div id="page-wrapper">
   <ColorCreateModal open={open} handleClose={handleClose} loadColors={loadColors} token={token}/>
   <div className="container-fluid">
       <div className="row">
       <div className="col-lg-12">
       <Steps size="small" current={4}>
          <Step title="Category" />
          <Step title="Sub-Category" />
          <Step title="Sub-Sub Category" />
          <Step title="Brand" />
          <Step title="Color"  />
          <Step title="Size"  />
      </Steps>
     
       </div>
           <div className="col-lg-12">
               <h1 className="page-header">Color</h1>
           </div>
          
       </div>
       
       <div className="row">
       <div className="col-lg-12">
           <div className="panel panel-default">
               <div className="panel-heading">
               <i className="fa fa-align-justify fa-fw" /> List of Color
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
                           {colors.map((c) => (
                            <tr className="odd gradeX" key={c._id}>
                                <td>1</td>
                                <td>{c.name}</td>                                     
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

export default ColorList;
