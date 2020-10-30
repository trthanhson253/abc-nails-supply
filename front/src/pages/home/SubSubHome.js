import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/cards/ProductCard";
import ProductCardRelate from "../../components/cards/ProductCardRelate";
import { getProductBySubSub } from "../../functions/product";
import { useSelector } from "react-redux";
import SubSubHomeMenu from "../../components/home/SubSubHomeMenu";


const SubSubHome = (props) => {
  const [ products, setProducts] = useState([]);
  const [ subSub, setSubSub] = useState({});
  const [ cate, setCate] = useState({});
  const [ sub, setSub] = useState({});
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));

  // const loadProductBySubSub = () => {
  //   getProductBySubSub(match.params.ssslug).then(res => {
  //     console.log(res)
  //     // setProduct(res.data.products);
  //   });
  // };
  const loadProductBySubSub= (slug) => {
    setLoading(true);
    getProductBySubSub(slug).then((data) => { 
        // console.log("products",data.products)
        // console.log("subsub",data.subSub[0])
        setProducts(data.products);
        setSubSub(data.subSub[0]); 
        setCate(data.subSub[0].category);
        setSub(data.subSub[0].sub);
        setLoading(false);      
    });
  };
  
  useEffect(() => {
    const ssslug1 = props.match.params.ssslug;
    loadProductBySubSub(ssslug1);
  }, [props]);

  return (
   <>
  
   <div className="tygh-content clearfix">
   <div className="container-fluid  cat-content-grid">
     <div className="container-fluid-row container-fluid-row-full-width ut2__subcategories">
       <div className="row-fluid ">        <div className="span16 ut2-top">
           <div className="ut2-extra-block-title">
             <h1 className="ty-mainbox-title">
               <span>{subSub.name}</span>
             </h1>
             <div id="breadcrumbs_167">
               <div className="ty-breadcrumbs clearfix">
                 <Link to="/" className="ty-breadcrumbs__a"><bdi>Home</bdi></Link>
                 <span className="ty-breadcrumbs__slash">/</span>
                 <Link to={`/${cate.slug}/product`} className="ty-breadcrumbs__a"><bdi>{cate.name}</bdi></Link>
                 <span className="ty-breadcrumbs__slash">/</span>
                 <Link to={`/${cate.slug}/${sub.slug}/product`} className="ty-breadcrumbs__a"><bdi>{sub.name}</bdi></Link>
                 <span className="ty-breadcrumbs__slash">/</span><span className="ty-breadcrumbs__current"><bdi>{subSub.name}</bdi></span>
               </div>
               {/* Inline script moved to the bottom of the page */}
               {/*breadcrumbs_167*/}</div>
           </div>
         </div>
       </div>
     </div>
     <div className="container-fluid-row">
       <div className="row-fluid ">        <div className="span9 main-content-grid  ">
           <div className="ut2-cat-container">
             <div className="cat-view-grid" id="category_products_11">
               {/* Inline script moved to the bottom of the page */}
               <div className="ty-pagination-container cm-pagination-container" id="pagination_contents">
                 <div><a data-ca-scroll=".cm-pagination-container" href="https://www.happynailsupply.com/" data-ca-page data-ca-target-id="pagination_contents" className="hidden" /></div>
                 <div className="ty-sort-container">
                   <div className="ut2-selected-product-filters cm-product-filters" id="selected_filters_170">{/*selected_filters_170*/}</div>
                   <div className="ut2-sorting-wrap">
                     <div className="ty-sort-dropdown">
                       <div className="ut2-sort-label"> Sort by:</div>
                       <a id="sw_elm_sort_fields" className="ty-sort-dropdown__wrapper cm-combination"><span>Sort by Newest</span><i className="ut2-icon-outline-expand_more" /></a>
                       <ul id="elm_sort_fields" className="ty-sort-dropdown__content cm-popup-box hidden">
                         <li className="sort-by-timestamp-asc ty-sort-dropdown__content-item">
                           <a className="cm-ajax cm-ajax-full-render ty-sort-dropdown__content-item-a" data-ca-target-id="pagination_contents" href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/?sort_by=timestamp&sort_order=asc" rel="nofollow">Sort by Oldest</a>
                         </li>
                         <li className="sort-by-code-asc ty-sort-dropdown__content-item">
                           <a className="cm-ajax cm-ajax-full-render ty-sort-dropdown__content-item-a" data-ca-target-id="pagination_contents" href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/?sort_by=code&sort_order=asc" rel="nofollow">Sort by Item # 0 to 9</a>
                         </li>
                         <li className="sort-by-code-desc ty-sort-dropdown__content-item">
                           <a className="cm-ajax cm-ajax-full-render ty-sort-dropdown__content-item-a" data-ca-target-id="pagination_contents" href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/?sort_by=code&sort_order=desc" rel="nofollow">Sort by Item # 9 to 0</a>
                         </li>
                         <li className="sort-by-product-asc ty-sort-dropdown__content-item">
                           <a className="cm-ajax cm-ajax-full-render ty-sort-dropdown__content-item-a" data-ca-target-id="pagination_contents" href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/?sort_by=product&sort_order=asc" rel="nofollow">Sort by A to Z</a>
                         </li>
                         <li className="sort-by-product-desc ty-sort-dropdown__content-item">
                           <a className="cm-ajax cm-ajax-full-render ty-sort-dropdown__content-item-a" data-ca-target-id="pagination_contents" href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/?sort_by=product&sort_order=desc" rel="nofollow">Sort by Z to A</a>
                         </li>
                         <li className="sort-by-price-asc ty-sort-dropdown__content-item">
                           <a className="cm-ajax cm-ajax-full-render ty-sort-dropdown__content-item-a" data-ca-target-id="pagination_contents" href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/?sort_by=price&sort_order=asc" rel="nofollow">Sort by Price Lowest</a>
                         </li>
                         <li className="sort-by-price-desc ty-sort-dropdown__content-item">
                           <a className="cm-ajax cm-ajax-full-render ty-sort-dropdown__content-item-a" data-ca-target-id="pagination_contents" href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/?sort_by=price&sort_order=desc" rel="nofollow">Sort by Price Highest</a>
                         </li>
                         <li className="sort-by-popularity-desc ty-sort-dropdown__content-item">
                           <a className="cm-ajax cm-ajax-full-render ty-sort-dropdown__content-item-a" data-ca-target-id="pagination_contents" href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/?sort_by=popularity&sort_order=desc" rel="nofollow">Sort by Popular</a>
                         </li>
                       </ul>
                     </div>
                     <div className="ty-sort-dropdown" style={{marginRight: '10px'}}>
                       <a id="sw_elm_pagination_steps" className="ty-sort-dropdown__wrapper cm-combination cm-tooltip" title="24 Per Page"><span>24</span><i className="ut2-icon-outline-expand_more" /></a>
                       <ul id="elm_pagination_steps" className="ty-sort-dropdown__content cm-popup-box hidden">
                         <li className="ty-sort-dropdown__content-item">
                           <a className="cm-ajax cm-ajax-full-render ty-sort-dropdown__content-item-a" href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/?items_per_page=12" data-ca-target-id="pagination_contents" rel="nofollow">12 Per Page</a>
                         </li>
                         <li className="ty-sort-dropdown__content-item">
                           <a className="cm-ajax cm-ajax-full-render ty-sort-dropdown__content-item-a" href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/?items_per_page=48" data-ca-target-id="pagination_contents" rel="nofollow">48 Per Page</a>
                         </li>
                         <li className="ty-sort-dropdown__content-item">
                           <a className="cm-ajax cm-ajax-full-render ty-sort-dropdown__content-item-a" href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/?items_per_page=96" data-ca-target-id="pagination_contents" rel="nofollow">96 Per Page</a>
                         </li>
                       </ul>
                     </div>
                     
                   </div>
                 </div>
                 {/* Inline script moved to the bottom of the page */}
                 <div className="grid-list">
                   <div id="categories_view_pagination_contents">

                   
                    {products.map((product) => (
                      <ProductCard product={product} loading={loading} />                  
                     ))}
                   
                 
                  
                             
                       
                     {/*categories_view_pagination_contents*/}</div>
                   <div className="ut2-load-more-container" id="load_more_categories_view_pagination_contents">
                     <span className="ut2-load-more" data-ut2-load-more-url="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/page-2/" data-ut2-load-more-result-ids="categories_view_pagination_contents,load_more_categories_view_pagination_contents,pagination_block,pagination_block_bottom"><i className="loader" />Show another 24 products</span>
                     {/*load_more_categories_view_pagination_contents*/}</div>
                 </div>
                 <div className="ty-pagination__bottom">
                   <div className="ty-pagination" id="pagination_block_bottom">
                     <a data-ca-scroll=".cm-pagination-container" className="ty-pagination__item ty-pagination__btn "><i className="ty-pagination__text-arrow" />&nbsp;<span className="ty-pagination__text">Prev</span></a>
                     <div className="ty-pagination__items">
                       <span className="ty-pagination__selected">1</span>
                       <a data-ca-scroll=".cm-pagination-container" href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/page-2/" data-ca-page={2} className="cm-history ty-pagination__item cm-ajax" data-ca-target-id="pagination_contents">2</a>
                       <a data-ca-scroll=".cm-pagination-container" href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/page-3/" data-ca-page={3} className="cm-history ty-pagination__item cm-ajax" data-ca-target-id="pagination_contents">3</a>
                       <a data-ca-scroll=".cm-pagination-container" href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/page-4/" data-ca-page={4} className="cm-history ty-pagination__item cm-ajax" data-ca-target-id="pagination_contents">4</a>
                     </div>
                     <a data-ca-scroll=".cm-pagination-container" className="ty-pagination__item ty-pagination__btn ty-pagination__next cm-history cm-ajax ty-pagination__right-arrow" href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/page-2/" data-ca-page={2} data-ca-target-id="pagination_contents"><span className="ty-pagination__text">Next</span>&nbsp;<i className="ty-pagination__text-arrow" /></a>
                     {/*pagination_block_bottom*/}</div>
                 </div>
                 {/*pagination_contents*/}</div>
               {/*category_products_11*/}</div>
           </div>
         </div>


         <SubSubHomeMenu />


       </div>
     </div>
    


   </div>
 </div>

   </>
  );
};

export default SubSubHome;
