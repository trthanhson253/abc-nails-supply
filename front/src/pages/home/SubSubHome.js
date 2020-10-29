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
     <div className="container-fluid-row">
       <div className="row-fluid ">        <div className="span16 hp-hometabs new-popular-special ">
           {/* Inline script moved to the bottom of the page */}
           <div className="ty-tabs cm-j-tabs cm-j-tabs-disable-convertation clearfix"><ul className="ty-tabs__list"><li id="abt__ut2_grid_tab_729_129" data-block className="abt__ut2_grid_tabs ty-tabs__item cm-js active"><span className="ty-tabs__span">Best Sellers</span></li><li id="abt__ut2_grid_tab_729_165" data-block className="abt__ut2_grid_tabs ty-tabs__item cm-js"><span className="ty-tabs__span">Recently Viewed</span></li></ul></div>
           <div className="cm-tabs-content ty-tabs__content clearfix">
             <div id="content_abt__ut2_grid_tab_729_129" className>        
               <div id="scroll_list_129" className="owl-carousel ty-scroller-list grid-list ut2-scroller-advanced owl-theme ut2-mid-narrow" style={{opacity: 1, display: 'block'}}>
                 <div className="owl-wrapper-outer">
                 <div className="owl-wrapper" style={{width: '9600px', left: '0px', display: 'block', transition: 'all 800ms ease 0s', transform: 'translate3d(-2160px, 0px, 0px)'}}><div className="owl-item" style={{width: '240px'}}><div className="ut2-gl__item ">
                         <form action="https://www.happynailsupply.com/" method="post" name="product_form_1290007757" encType="multipart/form-data" className="cm-disable-empty-files cm-ajax cm-ajax-full-render cm-ajax-status-middle cm-processed-form">
                           <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                           <input type="hidden" name="redirect_url" defaultValue="index.php?dispatch=categories.view&category_id=15" />
                           <input type="hidden" name="product_data[7757][product_id]" defaultValue={7757} />
                           <div className="ut2-gl__body" style={{minHeight: '440px'}}><div className="ut2-gl__image" style={{height: '250px'}}><a href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/china-glaze-stop-beachfrontin-0.5oz/"><img className="ty-pict lazyOwl cm-image abt-ut2-lazy-loaded" id="det_img_7757" src="./Nail Polishes __ Colors __ China Glaze_files/84200_china_glaze_stop_beachfrontin(1).jpg" alt="" title style={{opacity: 1}} />
                               </a>                                
                               <div className="ut2-gl__buttons">
                                 <a className="ut2-quick-view-button cm-dialog-opener cm-tooltip cm-dialog-auto-size" title="Quick view" data-ca-view-id={7757} data-ca-target-id="product_quick_view" href="https://www.happynailsupply.com/index.php?dispatch=products.quick_view&product_id=7757&prev_url=index.php%3Fdispatch%3Dcategories.view%26category_id%3D15&n_plain=Y&n_items=7757%2C7760%2C393%2C424%2C427%2C445%2C505%2C511%2C7743%2C7747%2C7748%2C7754%2C395%2C425%2C481%2C483%2C506%2C529%2C540%2C543" data-ca-dialog-title="Quick product viewer" rel="nofollow"><i className="ut2-icon ut2-icon-baseline-visibility" /></a>
                                 <a className="
ut2-add-to-wish 		 cm-submit	 cm-tooltip" title="Add to wishlist" id="button_wishlist_1290007757" data-ca-dispatch="dispatch[wishlist.add..7757]">
                                   <i className="ut2-icon-baseline-favorite" />  </a>
                                 <a className="
ut2-add-to-compare cm-ajax cm-ajax-full-render         cm-tooltip" title="Add to comparison list" data-ca-target-id="comparison_list,account_info*,abt__ut2_compared_products" rel="nofollow" href="https://www.happynailsupply.com/index.php?dispatch=product_features.add_product&product_id=7757&redirect_url=index.php%3Fdispatch%3Dcategories.view%26category_id%3D15">
                                   <i className="ut2-icon-baseline-equalizer" />      </a>
                               </div></div><div className="ut2-gl__rating no-rating">
                               <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span></div>
                             <div className="ty-control-group ty-sku-item cm-hidden-wrapper" id="sku_update_1290007757">
                               <input type="hidden" name="appearance[show_sku]" defaultValue={1} />
                               <label className="ty-control-group__label" id="sku_1290007757">Item #:</label>
                               <span className="ty-control-group__item cm-reload-1290007757" id="product_code_1290007757">84200{/*product_code_1290007757*/}</span>
                             </div>
                             <div className="ut2-gl__name">
                               <a href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/china-glaze-stop-beachfrontin-0.5oz/" className="product-title" title="China Glaze - Stop Beachfrontin' 0.5oz">China Glaze - Stop Beachfrontin' 0.5oz</a>    
                             </div><div className="ut2-gl__price 	pr-col" style={{minHeight: '41px'}}><div>            <span className="cm-reload-1290007757" id="old_price_update_1290007757">
                                   {/*old_price_update_1290007757*/}</span>
                                 <span className="cm-reload-1290007757 ty-price-update" id="price_update_1290007757">
                                   <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                   <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                   <span className="ty-price" id="line_discounted_price_1290007757"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_1290007757" className="ty-price-num">3.25</span></bdi></span>
                                   {/*price_update_1290007757*/}</span>
                               </div><div>      </div></div><div className="ut2-gl__control bt-2x ut2-view-qty view"><div className="ut2-gl__qty">    
                                 <div className="cm-reload-1290007757" id="qty_update_1290007757">
                                   <input type="hidden" name="appearance[show_qty]" defaultValue={1} />
                                   <input type="hidden" name="appearance[capture_options_vs_qty]" defaultValue />
                                   <div className="ty-qty clearfix changer" id="qty_1290007757">
                                     <div className="ty-center ty-value-changer cm-value-changer">
                                       <a className="cm-increase ty-value-changer__increase">+</a>
                                       <input type="text" size={5} className="ty-value-changer__input cm-amount" id="qty_count_1290007757" name="product_data[7757][amount]" defaultValue={1} data-ca-min-qty={1} />
                                       <a className="cm-decrease ty-value-changer__decrease">−</a>
                                     </div>
                                   </div>
                                   {/*qty_update_1290007757*/}</div>
                               </div><div className="button-container"><div className="cm-reload-1290007757 " id="add_to_cart_update_1290007757">
                                   <input type="hidden" name="appearance[show_add_to_cart]" defaultValue={1} />
                                   <input type="hidden" name="appearance[show_list_buttons]" defaultValue />
                                   <input type="hidden" name="appearance[but_role]" defaultValue="action" />
                                   <input type="hidden" name="appearance[quick_view]" defaultValue />
                                   <button id="button_cart_1290007757" className="ty-btn__primary ty-btn__add-to-cart cm-form-dialog-closer ty-btn" type="submit" name="dispatch[checkout.add..7757]"><span><i className="ut2-icon-outline-cart" /><span>Add to cart</span></span></button>
                                   {/*add_to_cart_update_1290007757*/}</div>
                               </div></div></div>
                           <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="8b1e8f3d253383415d827a346d99f042" /></form>
                       </div></div>
                       
            
                       <ProductCardRelate />
                       <ProductCardRelate />
                       <ProductCardRelate />
                       <ProductCardRelate />
                      
                
                       </div>
                    </div>
                 <div className="owl-controls clickable"><div className="owl-buttons"><div className="owl-prev"><i className="ty-icon-left-open-thin" /></div><div className="owl-next"><i className="ty-icon-right-open-thin" /></div></div></div></div>
               {/* Inline script moved to the bottom of the page */}
               {/* Inline script moved to the bottom of the page */}
             </div><div id="content_abt__ut2_grid_tab_729_165" className="hidden">        
               <div id="scroll_list_165" className="owl-carousel ty-scroller-list grid-list ut2-scroller-advanced ut2-min-narrow owl-theme" style={{opacity: 0, display: 'block'}}>
                 <div className="owl-wrapper-outer"><div className="owl-wrapper" style={{width: '0px', left: '0px', display: 'block'}}><div className="owl-item" style={{width: '0px'}}><div className="ut2-gl__item ">
                         <form action="https://www.happynailsupply.com/" method="post" name="product_form_1650008764" encType="multipart/form-data" className="cm-disable-empty-files cm-ajax cm-ajax-full-render cm-ajax-status-middle cm-processed-form">
                           <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                           <input type="hidden" name="redirect_url" defaultValue="index.php?dispatch=categories.view&category_id=15" />
                           <input type="hidden" name="product_data[8764][product_id]" defaultValue={8764} />
                           <div className="ut2-gl__body" style={{minHeight: '440px'}}><div className="ut2-gl__image" style={{height: '250px'}}><a href="https://www.happynailsupply.com/nail-polishes/colors/opi/opi-nail-lacquer-heart-and-coal-0.5oz/"><img className="ty-pict lazyOwl cm-image abt-ut2-lazy-loaded" id="det_img_8764" src="./Nail Polishes __ Colors __ China Glaze_files/hrm12-opi-nail-polish-heart-and-coal.jpg" alt="" title style={{opacity: 1}} />
                               </a>                                
                               <div className="ut2-gl__buttons">
                                 <a className="ut2-quick-view-button cm-dialog-opener cm-tooltip cm-dialog-auto-size" title="Quick view" data-ca-view-id={8764} data-ca-target-id="product_quick_view" href="https://www.happynailsupply.com/index.php?dispatch=products.quick_view&product_id=8764&prev_url=index.php%3Fdispatch%3Dcategories.view%26category_id%3D15&n_plain=Y&n_items=8764%2C7793" data-ca-dialog-title="Quick product viewer" rel="nofollow"><i className="ut2-icon ut2-icon-baseline-visibility" /></a>
                                 <a className="
ut2-add-to-wish 		 cm-submit	 cm-tooltip" title="Add to wishlist" id="button_wishlist_1650008764" data-ca-dispatch="dispatch[wishlist.add..8764]">
                                   <i className="ut2-icon-baseline-favorite" />  </a>
                                 <a className="
ut2-add-to-compare cm-ajax cm-ajax-full-render         cm-tooltip" title="Add to comparison list" data-ca-target-id="comparison_list,account_info*,abt__ut2_compared_products" rel="nofollow" href="https://www.happynailsupply.com/index.php?dispatch=product_features.add_product&product_id=8764&redirect_url=index.php%3Fdispatch%3Dcategories.view%26category_id%3D15">
                                   <i className="ut2-icon-baseline-equalizer" />      </a>
                               </div></div><div className="ut2-gl__rating no-rating">
                               <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span></div>
                             <div className="ty-control-group ty-sku-item cm-hidden-wrapper" id="sku_update_1650008764">
                               <input type="hidden" name="appearance[show_sku]" defaultValue={1} />
                               <label className="ty-control-group__label" id="sku_1650008764">Item #:</label>
                               <span className="ty-control-group__item cm-reload-1650008764" id="product_code_1650008764">OPI-NL-HR-M12{/*product_code_1650008764*/}</span>
                             </div>
                             <div className="ut2-gl__name">
                               <a href="https://www.happynailsupply.com/nail-polishes/colors/opi/opi-nail-lacquer-heart-and-coal-0.5oz/" className="product-title" title="OPI Nail Lacquer - Heart and Coal 0.5oz">OPI Nail Lacquer - Heart and Coal 0.5oz</a>    
                             </div><div className="ut2-gl__price 	pr-col" style={{minHeight: '41px'}}><div>            <span className="cm-reload-1650008764" id="old_price_update_1650008764">
                                   {/*old_price_update_1650008764*/}</span>
                                 <span className="cm-reload-1650008764 ty-price-update" id="price_update_1650008764">
                                   <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                   <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                   <span className="ty-price" id="line_discounted_price_1650008764"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_1650008764" className="ty-price-num">4.99</span></bdi></span>
                                   {/*price_update_1650008764*/}</span>
                               </div><div>      </div></div><div className="ut2-gl__control bt-2x ut2-view-qty view"><div className="ut2-gl__qty">    
                                 <div className="cm-reload-1650008764" id="qty_update_1650008764">
                                   <input type="hidden" name="appearance[show_qty]" defaultValue={1} />
                                   <input type="hidden" name="appearance[capture_options_vs_qty]" defaultValue />
                                   <div className="ty-qty clearfix changer" id="qty_1650008764">
                                     <div className="ty-center ty-value-changer cm-value-changer">
                                       <a className="cm-increase ty-value-changer__increase">+</a>
                                       <input type="text" size={5} className="ty-value-changer__input cm-amount" id="qty_count_1650008764" name="product_data[8764][amount]" defaultValue={1} data-ca-min-qty={1} />
                                       <a className="cm-decrease ty-value-changer__decrease">−</a>
                                     </div>
                                   </div>
                                   {/*qty_update_1650008764*/}</div>
                               </div><div className="button-container"><div className="cm-reload-1650008764 " id="add_to_cart_update_1650008764">
                                   <input type="hidden" name="appearance[show_add_to_cart]" defaultValue={1} />
                                   <input type="hidden" name="appearance[show_list_buttons]" defaultValue />
                                   <input type="hidden" name="appearance[but_role]" defaultValue="action" />
                                   <input type="hidden" name="appearance[quick_view]" defaultValue />
                                   <button id="button_cart_1650008764" className="ty-btn__primary ty-btn__add-to-cart cm-form-dialog-closer ty-btn" type="submit" name="dispatch[checkout.add..8764]"><span><i className="ut2-icon-outline-cart" /><span>Add to cart</span></span></button>
                                   {/*add_to_cart_update_1650008764*/}</div>
                               </div></div></div>
                           <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="8b1e8f3d253383415d827a346d99f042" /></form>
                       </div></div><div className="owl-item" style={{width: '0px'}}><div className="ut2-gl__item ">
                         <form action="https://www.happynailsupply.com/" method="post" name="product_form_1650007793" encType="multipart/form-data" className="cm-disable-empty-files cm-ajax cm-ajax-full-render cm-ajax-status-middle cm-processed-form">
                           <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                           <input type="hidden" name="redirect_url" defaultValue="index.php?dispatch=categories.view&category_id=15" />
                           <input type="hidden" name="product_data[7793][product_id]" defaultValue={7793} />
                           <div className="ut2-gl__body" style={{minHeight: '440px'}}><div className="ut2-gl__image" style={{height: '250px'}}><a href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/china-glaze-strike-a-rose-0.5oz/"><img className="ty-pict lazyOwl cm-image abt-ut2-lazy-loaded" id="det_img_7793" src="./Nail Polishes __ Colors __ China Glaze_files/1294_china_glaze_strike_a_rose_81760(1).jpg" alt="" title style={{opacity: 1}} />
                               </a>                                
                               <div className="ut2-gl__buttons">
                                 <a className="ut2-quick-view-button cm-dialog-opener cm-tooltip cm-dialog-auto-size" title="Quick view" data-ca-view-id={7793} data-ca-target-id="product_quick_view" href="https://www.happynailsupply.com/index.php?dispatch=products.quick_view&product_id=7793&prev_url=index.php%3Fdispatch%3Dcategories.view%26category_id%3D15&n_plain=Y&n_items=8764%2C7793" data-ca-dialog-title="Quick product viewer" rel="nofollow"><i className="ut2-icon ut2-icon-baseline-visibility" /></a>
                                 <a className="
ut2-add-to-wish 		 cm-submit	 cm-tooltip" title="Add to wishlist" id="button_wishlist_1650007793" data-ca-dispatch="dispatch[wishlist.add..7793]">
                                   <i className="ut2-icon-baseline-favorite" />  </a>
                                 <a className="
ut2-add-to-compare cm-ajax cm-ajax-full-render         cm-tooltip" title="Add to comparison list" data-ca-target-id="comparison_list,account_info*,abt__ut2_compared_products" rel="nofollow" href="https://www.happynailsupply.com/index.php?dispatch=product_features.add_product&product_id=7793&redirect_url=index.php%3Fdispatch%3Dcategories.view%26category_id%3D15">
                                   <i className="ut2-icon-baseline-equalizer" />      </a>
                               </div></div><div className="ut2-gl__rating no-rating">
                               <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span></div>
                             <div className="ty-control-group ty-sku-item cm-hidden-wrapper" id="sku_update_1650007793">
                               <input type="hidden" name="appearance[show_sku]" defaultValue={1} />
                               <label className="ty-control-group__label" id="sku_1650007793">Item #:</label>
                               <span className="ty-control-group__item cm-reload-1650007793" id="product_code_1650007793">81760{/*product_code_1650007793*/}</span>
                             </div>
                             <div className="ut2-gl__name">
                               <a href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/china-glaze-strike-a-rose-0.5oz/" className="product-title" title="China Glaze - Strike A Rose 0.5oz">China Glaze - Strike A Rose 0.5oz</a>    
                             </div><div className="ut2-gl__price 	pr-col" style={{minHeight: '41px'}}><div>            <span className="cm-reload-1650007793" id="old_price_update_1650007793">
                                   {/*old_price_update_1650007793*/}</span>
                                 <span className="cm-reload-1650007793 ty-price-update" id="price_update_1650007793">
                                   <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                   <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                   <span className="ty-price" id="line_discounted_price_1650007793"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_1650007793" className="ty-price-num">3.25</span></bdi></span>
                                   {/*price_update_1650007793*/}</span>
                               </div><div>      </div></div><div className="ut2-gl__control bt-2x ut2-view-qty view"><div className="ut2-gl__qty">    
                                 <div className="cm-reload-1650007793" id="qty_update_1650007793">
                                   <input type="hidden" name="appearance[show_qty]" defaultValue={1} />
                                   <input type="hidden" name="appearance[capture_options_vs_qty]" defaultValue />
                                   <div className="ty-qty clearfix changer" id="qty_1650007793">
                                     <div className="ty-center ty-value-changer cm-value-changer">
                                       <a className="cm-increase ty-value-changer__increase">+</a>
                                       <input type="text" size={5} className="ty-value-changer__input cm-amount" id="qty_count_1650007793" name="product_data[7793][amount]" defaultValue={1} data-ca-min-qty={1} />
                                       <a className="cm-decrease ty-value-changer__decrease">−</a>
                                     </div>
                                   </div>
                                   {/*qty_update_1650007793*/}</div>
                               </div><div className="button-container"><div className="cm-reload-1650007793 " id="add_to_cart_update_1650007793">
                                   <input type="hidden" name="appearance[show_add_to_cart]" defaultValue={1} />
                                   <input type="hidden" name="appearance[show_list_buttons]" defaultValue />
                                   <input type="hidden" name="appearance[but_role]" defaultValue="action" />
                                   <input type="hidden" name="appearance[quick_view]" defaultValue />
                                   <button id="button_cart_1650007793" className="ty-btn__primary ty-btn__add-to-cart cm-form-dialog-closer ty-btn" type="submit" name="dispatch[checkout.add..7793]"><span><i className="ut2-icon-outline-cart" /><span>Add to cart</span></span></button>
                                   {/*add_to_cart_update_1650007793*/}</div>
                               </div></div></div>
                           <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="8b1e8f3d253383415d827a346d99f042" /></form>
                       </div></div></div></div>
                 <div className="owl-controls clickable" style={{display: 'none'}}><div className="owl-buttons"><div className="owl-prev"><i className="ty-icon-left-open-thin" /></div><div className="owl-next"><i className="ty-icon-right-open-thin" /></div></div></div></div>
               {/* Inline script moved to the bottom of the page */}
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>

   </>
  );
};

export default SubSubHome;
