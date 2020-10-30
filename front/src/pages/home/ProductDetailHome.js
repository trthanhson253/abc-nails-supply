import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Image,Tabs  } from 'antd';
import { getDetailProduct,getRecentlyView } from "../../functions/product";
import { setCookie,getCookie } from "../../functions/auth";
import renderHTML from 'react-render-html';
import ProductCardRelate from "../../components/cards/ProductCardRelate";
import moment from 'moment';

const ProductDetailHome = props => {
  
  const [ product, setProduct] = useState({});
  const [ content, setContent] = useState("");
  const [ recentProducts, setRecentProducts] = useState([]);
  const { TabPane } = Tabs;

  // const render = require('react-render-html');
  
  const loadDetailProduct= (pslug) => {
    getDetailProduct(pslug).then((data) => { 
        
        setProduct(data.product);
        setContent(data.product.description);
        // var date = new Date();

        var currentProductId = data.product._id;
        var howManyItems = 5;
        // currentValues=[];
        if(currentProductId  && !getCookie("lastVisited")){
          setCookie("lastVisited",data.product._id)
        }else{
          var currentValues = getCookie("lastVisited");
          
          if(!currentValues.includes(currentProductId)){
              currentValues+="-"+currentProductId;
          }
                     
            setCookie("lastVisited",currentValues);                   
        }      
    });
  };

   const loadRecentlyView= (recentlyProduct,pslug1) => {
    getRecentlyView(recentlyProduct,pslug1).then((res) => { 
        setRecentProducts(res.data)
    });
  };

  // console.log("SPLIT",getCookie("lastVisited").split("-").slice(-2));

  useEffect(() => {
    const pslug1 = props.match.params.pslug;
    if(getCookie("lastVisited")){
      const recentlyProduct= getCookie("lastVisited").split("-").slice(-5);
      loadRecentlyView(recentlyProduct,pslug1)
    } 
    // console.log("SPLIT",recently);
    loadDetailProduct(pslug1);
  }, [props]);

  return (
   <>
   <div className="tygh-content clearfix">
   <div className="container-fluid  content-grid">
     <div className="container-fluid-row">
       <div className="row-fluid ">        <div className="span16 main-content-grid ut2-bottom">
           {/* Inline script moved to the bottom of the page */}
           <div className="ut2-pb ty-product-block ty-product-detail">
             <h1 className="ut2-pb__title"><bdi>{product.name}</bdi></h1>
             <div className="ut2-breadcrumbs__wrapper">
               <div id="breadcrumbs_11">
                 <div className="ty-breadcrumbs clearfix">
                   <a href="https://www.happynailsupply.com/" className="ty-breadcrumbs__a"><bdi>Home</bdi></a><span className="ty-breadcrumbs__slash">/</span><a href="https://www.happynailsupply.com/nail-polishes/" className="ty-breadcrumbs__a"><bdi>Nail Polishes</bdi></a><span className="ty-breadcrumbs__slash">/</span><a href="https://www.happynailsupply.com/nail-polishes/colors/" className="ty-breadcrumbs__a"><bdi>Colors</bdi></a><span className="ty-breadcrumbs__slash">/</span><a href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/" className="ty-breadcrumbs__a"><bdi>China Glaze</bdi></a><span className="ty-breadcrumbs__slash">/</span><span className="ty-breadcrumbs__current"><bdi>China Glaze - Pilates Please 0.5oz</bdi></span>
                   
                 </div>
                 {/* Inline script moved to the bottom of the page */}
                 {/*breadcrumbs_11*/}</div>
             </div>
             <div className="ut2-pb__wrapper clearfix">
               <div className="ut2-pb__img-wrapper ty-product-block__img-wrapper">
                 <div className="ut2-pb__img cm-reload-7797" data-ca-previewer="true" id="product_images_7797_update">
                   <div className="ab_vg-images-wrapper clearfix" data-ca-previewer="true">
                     <div style={{position: 'relative', maxHeight: '420px'}}>
                       <div id="product_images_77975f98847a60ca8" className="ty-product-img cm-preview-wrapper ab-vertical owl-carousel owl-theme" style={{opacity: 1, display: 'block'}}>
                         <div className="owl-wrapper-outer"><div className="owl-wrapper" style={{width: '1150px', left: '0px', display: 'block'}}><div className="owl-item active" style={{width: '575px'}}>
                     
                           {product.image && (<Image src={product.image[1].url}  alt={product.name} title style={{opacity: 1}} />)}
                         
                         
                         <svg className="ty-pict__container" aria-hidden="true" width={400} height={400} viewBox="0 0 400 400" style={{maxHeight: '100%', maxWidth: '100%', position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: -1}}><rect fill="transparent" width={400} height={400} /></svg>
                                 <span className="ty-previewer__icon hidden-phone" /></div></div></div>
                       </div>
                     </div>
                   </div>
                  </div>
                 
               </div>
               <div className="ut2-pb__right">
                 <form  name="product_form_7797" className="cm-disable-empty-files cm-ajax cm-ajax-full-render cm-ajax-status-middle cm-processed-form">
                   
                   <div className="top-product-layer">
                     <div className="ut2-pb__rating">
                       <div className="ty-discussion__rating-wrapper">
                         <span className="ty-nowrap no-rating"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                         <a id="opener_new_post_main_info_title_7797" className="ty-discussion__review-write cm-dialog-opener cm-dialog-auto-size" data-ca-target-id="new_post_dialog_main_info_title_7797" rel="nofollow" href="#" title="Quick Rating">Quick Rating</a>
                       </div>
                     </div>
                     <div className="ut2-pb__sku">
                       <div className="ty-control-group ty-sku-item cm-hidden-wrapper" id="sku_update_7797">
                         <input type="hidden" name="appearance[show_sku]" defaultValue={1} />
                         <label className="ty-control-group__label" id="sku_7797">Item #:</label>
                         <span className="ty-control-group__item cm-reload-7797" id="product_code_7797">{product.item}</span>
                       </div>
                     </div>
                   </div>
                   <div className="cols-wrap">
                     <div className="col-left">
                       <div className="prices-container price-wrap">
                         <div className="ty-product-prices">
                           <span className="cm-reload-7797" id="old_price_update_7797">
                             </span>
                           <div className="ut2-pb__price-actual">
                             <span className="cm-reload-7797 ty-price-update" id="price_update_7797">
                               <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                               <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                               <span className="ty-price" id="line_discounted_price_7797"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_7797" className="ty-price-num">{product.price}</span></bdi></span>
                               </span>
                           </div>
                           <span className="cm-reload-7797" id="line_discount_update_7797">
                             <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                             <input type="hidden" name="appearance[show_list_discount]" defaultValue={1} />
                             </span>
                         </div>
                       </div>
                       <div className="cm-reload-7797 stock-wrap" id="product_amount_update_7797">
                         <input type="hidden" name="appearance[show_product_amount]" defaultValue={1} />
                         <div className="ty-control-group product-list-field">
                           <span className="ty-qty-in-stock ty-control-group__item" id="in_stock_info_7797">
                             {product.quantity > 0 ? (<><i className="ty-icon-ok" />In stock</>):(<><i className="ty-icon-ok" />Out of stock</>)}
                            
                           </span>
                         </div>
                         </div>
                      
                       <div className="ut2-pb__advanced-option clearfix">
                         <div className="cm-reload-7797" id="advanced_options_update_7797">
                          </div>
                       </div>
                       <div className="ut2-qty__wrap  ut2-pb__field-group">
                         <div className="cm-reload-7797" id="qty_update_7797">
                           <input type="hidden" name="appearance[show_qty]" defaultValue={1} />
                           <input type="hidden" name="appearance[capture_options_vs_qty]" defaultValue />
                           <div className="ty-qty clearfix changer" id="qty_7797">
                             <label className="ty-control-group__label" htmlFor="qty_count_7797">Quantity:</label>                                <div className="ty-center ty-value-changer cm-value-changer">
                               <a className="cm-increase ty-value-changer__increase">+</a>
                               <input type="text" size={5} className="ty-value-changer__input cm-amount" id="qty_count_7797" name="product_data[7797][amount]" defaultValue={1} data-ca-min-qty={1} />
                               <a className="cm-decrease ty-value-changer__decrease">−</a>
                             </div>
                           </div>
                        </div>
                       </div>
                       <div className="ut2-pb__button ty-product-block__button">
                         <div className="cm-reload-7797 " id="add_to_cart_update_7797">
                           
                           <button id="button_cart_7797" className="ty-btn__primary ty-btn__add-to-cart cm-form-dialog-closer ty-btn" type="submit" name="dispatch[checkout.add..7797]"><span><i className="ut2-icon-outline-cart" /><span>Add to cart</span></span></button>
                           <a className="
ut2-add-to-wish label	cm-submit	cm-tooltip" title="Add to wishlist" id="button_wishlist_7797" data-ca-dispatch="dispatch[wishlist.add..7797]">
                             <i className="ut2-icon-baseline-favorite" />    Add to wish list</a>
                           <a className="
ut2-add-to-compare cm-ajax cm-ajax-full-render label cm-tooltip" title="Add to comparison list" data-ca-target-id="comparison_list,account_info*,abt__ut2_compared_products" rel="nofollow" href="#">
                             <i className="ut2-icon-baseline-equalizer" />    Compare  </a>
                           {/*add_to_cart_update_7797*/}</div>
                       </div>
                     </div>
                     <div className="col-right">
                       <div className="brand ut2-pb__product-brand">
                         <div className="ty-features-list">    <a href="#" /></div>
                       </div>
                       <div>
                       </div>
                     </div>
                   </div>
                   <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="c2b522e73c660178a57674e055b61005" /></form>
               </div>
             </div>
             {/* Inline script moved to the bottom of the page */}
             

             <Tabs type="card" defaultActiveKey="1">
              <TabPane tab={<span><i className="fa fa-files-o fa-fw" /> Description</span>} key="1">                          
                <div style={{borderStyle:'solid',padding:'15px',borderRadius: '10px',borderColor:'#F0F0F0'}}>{renderHTML(content)}</div>
              
              </TabPane>
              <TabPane tab={<span><i className="fa fa-star-o fa-fw" /> Specification</span>} key="2">
              <div id="content_description" className="ty-wysiwyg-content content-description"></div>
              <div id="content_features" className="ty-wysiwyg-content content-features" data-ab-smc-tab-hide="N|N|Y" data-ab-smc-more="More" data-ab-smc-less="Less" data-ab-smc-height="{250}" data-ab-smc-tab-override-h="N">
                  <div className="ty-product-feature">
                      <span className="ty-product-feature__label">Brand:</span>
                      <div className="ty-product-feature__value">{product.quantity}</div>
                  </div>
                  <div className="ty-product-feature">
                      <span className="ty-product-feature__label">Color:</span>
                      <div className="ty-product-feature__value">
                          <ul className="ty-product-feature__multiple">
                              <li className="ty-product-feature__multiple-item">
                                  <span className="ty-compare-checkbox"><i className="ty-compare-checkbox__icon ty-icon-ok" /></span><span className="ty-product-feature__prefix" />Orange<span className="ty-product-feature__suffix" />
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="ty-product-feature">
                      <span className="ty-product-feature__label">Shade:</span>
                      <div className="ty-product-feature__value">
                          <ul className="ty-product-feature__multiple">
                              <li className="ty-product-feature__multiple-item">
                                  <span className="ty-compare-checkbox"><i className="ty-compare-checkbox__icon ty-icon-ok" /></span><span className="ty-product-feature__prefix" />Cream<span className="ty-product-feature__suffix" />
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="ty-product-feature">
                      <span className="ty-product-feature__label">Size:</span>
                      <div className="ty-product-feature__value">
                          <ul className="ty-product-feature__multiple">
                              <li className="ty-product-feature__multiple-item">
                                  <span className="ty-compare-checkbox"><i className="ty-compare-checkbox__icon ty-icon-ok" /></span><span className="ty-product-feature__prefix" />0.5oz<span className="ty-product-feature__suffix" />
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              </TabPane>
              <TabPane tab={<span><i className="fa fa-comments fa-fw" /> Reviews</span>} key="3">
                Write A Review
                <img src="../../assets/img/comment.png" />
              </TabPane>
            </Tabs>



           </div>
           <div className="product-details">
           </div>
         </div>
       </div>
     </div>




     <div className="container-fluid-row container-fluid-row-full-width new-popular-special">
       <div className="row-fluid ">        
      
      
       <div className="panel-body">
           {/* Nav tabs */}
           <ul className="nav nav-pills">
               <li className="active"><a href="#home-pills" data-toggle="tab" aria-expanded="true">Recently Products You Viewed</a></li>
               <li className><a href="#profile-pills" data-toggle="tab" aria-expanded="false">Related Products</a></li>
               
           </ul>
           {/* Tab panes */}
           <div className="tab-content">
               <div className="tab-pane fade active in" id="home-pills">
               {recentProducts.map((c)=>(
                    <ProductCardRelate sanpham={c}/>
               ))}
               
               
              
               </div>
               <div className="tab-pane fade" id="profile-pills">
              
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

export default ProductDetailHome;
