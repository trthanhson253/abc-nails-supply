
import { Link } from "react-router-dom";
import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ModalImage from "react-modal-image";

const Cart = ({ history }) => {

  const { cart, user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const getTotal = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };
  const saveOrderToDb = () => {
    // console.log("cart", JSON.stringify(cart, null, 4));
    // userCart(cart, user.token)
    //   .then((res) => {
    //     console.log("CART POST RES", res);
    //     if (res.data.ok) history.push("/checkout");
    //   })
    //   .catch((err) => console.log("cart save err", err));
  };
  return (
   <>
  
   <div className="tygh-content clearfix">
   <div className="container-fluid  content-grid">
   <div className="container-fluid-row">
     <div className="row-fluid ">        
      <div className="span16 breadcrumbs-grid ">
         <div id="breadcrumbs_10">
           <div className="ty-breadcrumbs clearfix">
             <Link to="/" className="ty-breadcrumbs__a"><bdi>Home</bdi></Link><span className="ty-breadcrumbs__slash">/</span><span className="ty-breadcrumbs__current"><bdi>Cart contents</bdi></span>
           </div>
           </div>
       </div>
     </div>
   </div>
   <div className="container-fluid-row">
     <div className="row-fluid ">        
       <div className="span16 main-content-grid ">
         <div className="ty-mainbox-container clearfix">
           <div className="ty-mainbox-body">
           {cart.length ? (<>
            <form name="checkout_form" className="cm-check-changes cm-ajax cm-ajax-full-render cm-processed-form" id="checkout_form">
           
            <h1 className="ty-mainbox-title">Cart contents</h1>
            <div className="buttons-container ty-cart-content__top-buttons clearfix">
              <div className="ty-float-left ty-cart-content__left-buttons">
                <a href="https://www.happynailsupply.com/gel-soak-off/base-and-top-coats/top-coats/" className="ty-btn ty-btn__secondary "><span>Continue shopping</span></a>
              </div>
              <div className="ty-float-right ty-cart-content__right-buttons">
              {user ? (<Link className=" cm-dialog-auto-size ty-btn ty-btn__primary" to="/checkout">
                  Proceed to checkout
                </Link>):( <Link className=" cm-dialog-auto-size ty-btn ty-btn__primary" to="/login" >
                Signin to checkout
                </Link>)}
              </div>
            </div>
            <div>
              <div className="ty-mainbox-cart__body">
                <div id="cart_items">
                  <table className="ty-cart-content ty-table">
                    <thead>
                      <tr>
                        <th className="ty-cart-content__title ty-left">Product</th>
                        <th className="ty-cart-content__title ty-left">&nbsp;</th>
                        <th className="ty-cart-content__title ty-right">Unit price</th>
                        <th className="ty-cart-content__title quantity-cell">Quantity</th>
                        <th className="ty-cart-content__title ty-right">Total price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((c)=>(
                        <tr>
                        <td className="ty-cart-content__product-elem ty-cart-content__image-block">
                          <div className="ty-cart-content__image cm-reload-2107916490" style={{ width: "100px", height: "100px" }}>
                            
                              
                              <ModalImage small={c.image[1].url} large={c.image[1].url} />
                             
                          </div>
                        </td>
                        <td className="ty-cart-content__product-elem ty-cart-content__description" style={{width: '50%'}}>
                          <a href="https://www.happynailsupply.com/gel-soak-off/base-and-top-coats/top-coats/dnd-dc-matte-top-gel-0.6oz/" className="ty-cart-content__product-title">{c.name}</a><a className=" ty-cart-content__product-delete ty-delete-big" href="https://www.happynailsupply.com/index.php?dispatch=checkout.delete&cart_id=2107916490&redirect_mode=cart" data-ca-target-id="cart_items,checkout_totals,cart_status*,checkout_steps,checkout_cart" title="Remove">&nbsp;<i className="ty-delete-big__icon ty-icon-cancel-circle" /></a>                            
                          <div className="ty-cart-content__sku ty-sku cm-hidden-wrapper" id="sku_2107916490">
                            Item #: <span className="cm-reload-2107916490" id="product_code_update_2107916490">{c.item}{/*product_code_update_2107916490*/}</span>
                          </div>
                        </td>
                        <td className="ty-cart-content__product-elem ty-cart-content__price cm-reload-2107916490" id="price_display_update_2107916490">
                          <bdi><span className="ty-sub-price">$</span><span id="sec_product_price_2107916490" className="ty-sub-price">{c.price}</span></bdi>
                          </td>
                        <td className="ty-cart-content__product-elem ty-cart-content__qty ">
                          <div className="quantity cm-reload-2107916490 changer">
                            
                            <label htmlFor="amount_2107916490" />
                            <div className="ty-center ty-value-changer cm-value-changer">
                              <a className="cm-increase ty-value-changer__increase">+</a>
                              <input type="text" size={3} id="amount_2107916490" name="cart_products[2107916490][amount]" value={c.count} className="ty-value-changer__input cm-amount" data-ca-min-qty={1} />
                              <a className="cm-decrease ty-value-changer__decrease">−</a>
                            </div>
                            </div>
                        </td>
                        <td className="ty-cart-content__product-elem ty-cart-content__price cm-reload-2107916490" id="price_subtotal_update_2107916490">
                          <bdi><span className="price">$</span><span id="sec_product_subtotal_2107916490" className="price">7.00</span></bdi>
                          </td>
                      </tr>
                      ))}            
                    </tbody>
                  </table>
                  {/*cart_items*/}</div>
              </div>
            </div>
            {/*checkout_form*/}
            
            </form>

          
           
             <div className="ty-cart-total">
               <div className="ty-cart-total__wrapper clearfix" id="checkout_totals">
                 <div className="ty-coupons__container">
                   <div>
                     <form className="cm-ajax cm-ajax-force cm-ajax-full-render cm-processed-form" name="coupon_code_form" action="https://www.happynailsupply.com/" method="post">
                       
                       <div className="ty-discount-coupon__control-group ty-input-append">
                         <label htmlFor="coupon_field" className="hidden cm-required">Promo code</label>
                         <input type="text" className="ty-input-text cm-hint" id="coupon_field" name="hint_coupon_code" size={40} defaultValue="Promo code" />
                         <button title="Apply" className="ty-btn-go" type="submit"><i className="ty-btn-go__icon ty-icon-right-dir" /></button>
                         
                       </div>
                       </form>
                   </div>
                 </div>
                 <ul className="ty-cart-statistic ty-statistic-list">
                   <li className="ty-cart-statistic__item ty-statistic-list-subtotal">
                     <span className="ty-cart-statistic__title">Subtotal</span>
                     <span className="ty-cart-statistic__value"><bdi>$<span>{getTotal()}</span></bdi></span>
                   </li>
                   <li className="ty-cart-statistic__item ty-statistic-list-shipping-method">
                     <span className="ty-cart-statistic__title">Shipping cost</span>
                     <span className="ty-cart-statistic__value">        <i className="ty-cart-total__icon-estimation ty-icon-flight" /><a id="opener_shipping_estimation_block" className="cm-dialog-opener cm-dialog-auto-size ty-cart-total__a-estimation" data-ca-target-id="shipping_estimation_block" title="Calculate shipping cost" href="https://www.happynailsupply.com/cart/" rel="nofollow">Calculate</a>
                     </span>
                   </li>
                 </ul>
                 <div className="clearfix" />
                 <ul className="ty-cart-statistic__total-list">
                   <li className="ty-cart-statistic__item ty-cart-statistic__total">
                     <span className="ty-cart-statistic__total-title">Total cost</span>
                     <span className="ty-cart-statistic__total-value">
                       <bdi><span className="ty-price">$</span><span id="sec_cart_total" className="ty-price">11.50</span></bdi>
                     </span>
                   </li>
                 </ul>
                 {/*checkout_totals*/}</div>
             </div>
            </>):(<p class="ty-no-items">Your cart is empty</p>)}

             <div className="buttons-container ty-cart-content__bottom-buttons clearfix">
               <div className="ty-float-left ty-cart-content__left-buttons">
                 <a href="https://www.happynailsupply.com/gel-soak-off/base-and-top-coats/top-coats/" className="ty-btn ty-btn__secondary "><span>Continue shopping</span></a>
                 {cart.length ? (<a className="ty-btn ty-btn__tertiary text-button " href="https://www.happynailsupply.com/index.php?dispatch=checkout.clear">Clear cart</a>):(<></>)}
               </div>
               <div className="ty-float-right ty-cart-content__right-buttons">
               { user && cart.length ? (<Link onClick={saveOrderToDb} className="cm-dialog-auto-size ty-btn ty-btn__primary" to="/checkout">
               Proceed to checkout
               </Link>
        
               ):( <Link className="cm-dialog-auto-size ty-btn ty-btn__primary" to={{
                  pathname: "/login",
                  state: { from: "cart" },
                }} >
                Signin to checkout
                </Link>)}
                
                 
               </div>
             </div>
            
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

export default Cart;
