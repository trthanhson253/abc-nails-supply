import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminMenu = () => {
  return (
   <>
     {/* /.navbar-top-links */}
     <div className="navbar-default sidebar" role="navigation">
     <div className="sidebar-nav navbar-collapse">
         <ul className="nav" id="side-menu">
             <li className="sidebar-search">
                ADMIN PAGE
                 {/* /input-group */}
             </li>
             <li>
                 <Link to="/admin"><i className="fa fa-dashboard fa-fw" /> Dashboard</Link>
             </li>
             <li>
                 <Link to="/admin/category/list"><i className="fa fa-reorder fa-fw" /> Category</Link>
               
             </li>
             <li>
             <Link to="/admin/sub/list"><i className="fa fa-table fa-fw" /> Sub-Category</Link>
             
         </li>
         <li>
         <Link to="/admin/sub-sub/list"><i className="fa fa-th fa-fw" /> Sub-sub-Category</Link>
        
     </li>
     <li>
     <Link to="/admin/brand/list"><i className="fa fa-cubes fa-fw" /> Brands</Link>
    
     
 </li>
 <li>
     <Link to="/admin/color/list"><i className="fa fa-cog fa-fw" /> Color</Link>
    
 </li>
    <li>
        <Link to="/admin/size/list"><i className="fa fa-skyatlas fa-fw" /> Size</Link>    
    </li>

    <li>
    <a><i className="fa fa-star fa-fw" /> Products<span></span></a>
        <ul className="nav nav-second-level">
            <li>
            <Link to="/admin/product/list">List</Link>
            </li>
            <li>
            <Link to="/admin/product/create">Create</Link>
            </li>
        </ul>
    
    </li>  
        <li>
             <Link to="/admin/orders/list"><i className="fa fa-shopping-cart fa-fw" /> Orders</Link>
         </li>
         <li>
         <Link to="/admin/customer/list"><i className="fa fa-male fa-fw" /> Customer</Link>    
     </li>
     <li>
         <Link to="/admin/coupon/list"><i className="fa fa-files-o fa-fw" /> Coupon</Link>
     </li>
         </ul>
     </div>
     
 </div>
 
   </>
  );
};

export default AdminMenu;
