import React, { useState,useEffect } from "react";
import AdminMenu from "../../../components/admin/AdminMenu";
import { getProducts,getDetailProduct } from "../../../functions/product";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Steps,Avatar  } from 'antd';
import renderHTML from "react-render-html";
import ProductDetailModal from "../../../components/admin/ProductDetailModal";

const ProductList = ({ history }) => {

const [products, setProducts] = useState([]);
const [product, setProduct] = useState({});
// const { Step } = Steps;
const { user } = useSelector((state) => ({ ...state }));
const token = user.token;
const [open, setOpen] = useState(false);
// const [slug, setSlug] = useState("");
const [ content, setContent] = useState("");

const handleClickOpen = () => {
    history.push("/admin/product/create");
};

function handleClickDetailOpen(slg) {
    setOpen(true);
    // setSlug(slg);
    loadDetailProduct(slg);
    // console.log("slug SON TRAN",slg)
};

const loadDetailProduct= (slug) => {
    getDetailProduct(slug).then(data => { 
      // setValue(data.product);
      console.log("STEP100",data.product);
      setProduct(data.product);
      setContent(data.product.description);
    });
  };
const handleClose = () => {
    setOpen(false);
  };

const loadProducts= () => {
    getProducts().then((data) => {
      if (data.error) {
        toast.error(data.error);
      } else {
        //   console.log(data.data)
        setProducts(data.data);
      }
    });
  };
  useEffect(() => {
    loadProducts();
  }, []);

  return (
   <>
   <div id="wrapper">
   
   <AdminMenu />
   <div id="page-wrapper">
   <ProductDetailModal open={open} handleClose={handleClose} product={product} content={content} />
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
               <i className="fa fa-align-justify fa-fw" /> List of Product
               &nbsp;&nbsp;&nbsp;<button type="button" class="btn btn-primary" onClick={handleClickOpen} ><i className="fa fa-plus fa-fw" /> New</button>                
               </div>                 
               {/* /.panel-heading */}
               <div className="panel-body">
                   <div className="table-responsive">
                       <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                           <thead>
                               <tr>
                                   <th></th>
                                   <th>Item</th>
                                   <th>Name</th>                                
                                   <th>Price</th>
                                   <th>Discount Price</th>
                                   <th>Color</th>
                                   <th>Size</th>
                                   <th>Brand</th>
                                   <th>Quantity</th>

                                   <th>Shipping</th>   
                                   <th>Status</th>                                
                                   <th>Category</th>
                                   <th>Sub Category</th>
                                   <th>Sub-Sub Category</th>                                  
                                   <th>Image</th>      
                                   <th>Action</th>
                                  
                               </tr>
                           </thead>
                           <tbody>
                           {products.map((p) => (
                            <tr className="odd gradeX" key={p._id}>
                                <td>1</td>
                                <td>{p.item}</td> 
                                <td>{p.name}</td> 
                                <td>{p.price}</td> 
                                <td>{p.discountPrice}</td> 
                                <td>{p.color.name}</td> 
                                <td>{p.size.name}</td> 
                                <td>{p.brand.name}</td> 
                                <td>{p.quantity}</td>       
                                <td>{p.shipping}</td> 
                                <td>{p.status}</td>       
                                <td>{p.category.name}</td>       
                                <td>{p.sub.name}</td>       
                                <td>{p.subSub.name}</td>  
                                <td>{p.image &&
                                    p.image.map((img) => ( 
                                        <><Avatar
                                        src={img.url}
                                        size={100}
                                        shape="square"
                                    /></>
                                        
                                     ))}</td>
                                
                                     
                                
                                <td className="center">
                                <div className="text-center"> <button type="button" class="btn btn-default btn-circle" onClick={()=>handleClickDetailOpen(p.slug)}><i class="fa fa-eye"></i></button>&nbsp;
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

export default ProductList;
