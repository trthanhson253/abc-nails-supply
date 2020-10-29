import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Spin,Skeleton } from 'antd';
import {Spinner} from "../../components/Spinner";
import { LoadingOutlined } from '@ant-design/icons';

const ProductCard = ({product,loading}) => {
 
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

  return (
   <>
  
    <div className="ty-column3" data-ut2-load-more="first-item">
    <div className="ut2-gl__item " style={{height: '418px'}}>
    
    <form name="product_form_7797" encType="multipart/form-data" className="cm-disable-empty-files cm-ajax cm-ajax-full-render cm-ajax-status-middle cm-processed-form">
        <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
        <input type="hidden" name="redirect_url" defaultValue="index.php?dispatch=categories.view&category_id=15" />
        <input type="hidden" name="product_data[7797][product_id]" defaultValue={7797} />
        
        {loading ? <Spin indicator={antIcon} />:(
        <div className="ut2-gl__body" style={{height: '418px'}}><div className="ut2-gl__image" style={{height: '250px'}}>
            <Link to={`/${product.category.slug}/${product.sub.slug}/${product.subSub.slug}/${product.slug}/product`}>
            <img className="ty-pict lazyOwl cm-image abt-ut2-lazy-loaded" id="det_img_7797desktop" src={product.image[1].url} alt={product.name} title style={{opacity: 1}} />
            </Link>
            <div className="ut2-gl__buttons">
              <a className="ut2-quick-view-button cm-dialog-opener cm-tooltip cm-dialog-auto-size" title="Quick view" data-ca-view-id={7797} data-ca-target-id="product_quick_view" href="https://www.happynailsupply.com/index.php?dispatch=products.quick_view&product_id=7797&prev_url=index.php%3Fdispatch%3Dcategories.view%26category_id%3D15&n_items=7797%2C7796%2C7795%2C7793%2C7792%2C7764%2C7763%2C7762%2C7761%2C7760%2C7759%2C7758%2C7757%2C7756%2C7755%2C7754%2C7753%2C7752%2C7751%2C7750%2C7749%2C7748%2C7747%2C7746" data-ca-dialog-title="Quick product viewer" rel="nofollow"><i className="ut2-icon ut2-icon-baseline-visibility" /></a>
              <a className="
 ut2-add-to-wish 		 cm-submit	 cm-tooltip" title="Add to wishlist" id="button_wishlist_7797" data-ca-dispatch="dispatch[wishlist.add..7797]">
                <i className="ut2-icon-baseline-favorite" />  </a>
              <a className="
 ut2-add-to-compare cm-ajax cm-ajax-full-render         cm-tooltip" title="Add to comparison list" data-ca-target-id="comparison_list,account_info*,abt__ut2_compared_products" rel="nofollow" href="https://www.happynailsupply.com/index.php?dispatch=product_features.add_product&product_id=7797&redirect_url=index.php%3Fdispatch%3Dcategories.view%26category_id%3D15">
                <i className="ut2-icon-baseline-equalizer" />      </a>
            </div></div><div className="ut2-gl__rating no-rating">
            <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span></div>
          <div className="ty-control-group ty-sku-item cm-hidden-wrapper" id="sku_update_7797">
            <input type="hidden" name="appearance[show_sku]" defaultValue={1} />
            <label className="ty-control-group__label" id="sku_7797">Item #:</label>
            <span className="ty-control-group__item cm-reload-7797" id="product_code_7797">84149{/*product_code_7797*/}</span>
          </div>
          <div className="ut2-gl__name">
            <a href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/china-glaze-pilates-please-0.5oz/" className="product-title" title="China Glaze - Pilates Please 0.5oz">{product.name}</a>    
          </div><div className="ut2-gl__price 	pr-col" style={{minHeight: '39px'}}><div>            <span className="cm-reload-7797" id="old_price_update_7797">
                {/*old_price_update_7797*/}</span>
              <span className="cm-reload-7797 ty-price-update" id="price_update_7797">
                <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                <span className="ty-price" id="line_discounted_price_7797"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_7797" className="ty-price-num">3.25</span></bdi></span>
                {/*price_update_7797*/}</span>
            </div><div>      </div></div>
            <div className="ut2-gl__control bt-2x ut2-view-qty view">
            <div className="ut2-gl__qty">    
              <div className="cm-reload-7797" id="qty_update_7797">
                
                <div className="ty-qty clearfix changer" id="qty_7797">
                  <div className="ty-center ty-value-changer cm-value-changer">
                    <a className="cm-increase ty-value-changer__increase">+</a>
                    <input type="text" size={5} className="ty-value-changer__input cm-amount" id="qty_count_7797" name="product_data[7797][amount]" defaultValue={1} data-ca-min-qty={1} />
                    <a className="cm-decrease ty-value-changer__decrease">−</a>
                  </div>
                </div>
                {/*qty_update_7797*/}
               </div>
            </div>
            <div className="button-container"><div className="cm-reload-7797 " id="add_to_cart_update_7797">
                
                <button id="button_cart_7797" className="ty-btn__primary ty-btn__add-to-cart cm-form-dialog-closer ty-btn" type="submit" name="dispatch[checkout.add..7797]"><span><i className="ut2-icon-outline-cart" /><span>Add to cart</span></span></button>
                {/*add_to_cart_update_7797*/}</div>
            </div>
          </div>
          <div className="ut2-gl__bottom">
          </div>
          </div>
          )}

        <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="8b1e8f3d253383415d827a346d99f042" />
        
        </form> 
    </div>
 </div>
 
  
  

   </>
  );
};

export default ProductCard;
