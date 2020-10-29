
import React, { useState,useEffect } from "react";
import { getCategories } from "../functions/category";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Home = () => {

  const [categories, setCategories] = useState([]);

  const loadCategories= () => {
    getCategories().then((data) => {
      if (data.error) {
        toast.error(data.error);
      } else {
        // console.log("data",data)
        setCategories(data.data);
      }
    });
  };
  useEffect(() => {
   loadCategories();
  }, []);

  return (
    <>
     
    <div className="ty-tygh bp-tygh-container" id="tygh_container">
    <div id="ajax_overlay" className="ty-ajax-overlay" />
    <div id="ajax_loading_box" className="ty-ajax-loading-box" />
    <div className="cm-notification-container notification-container">
    </div>
    <div className="ty-helper-container " id="tygh_main_container">
      <div className="tygh-top-panel clearfix">
      </div>
     
      <div className="tygh-content clearfix">
        <div className="container-fluid  content-grid">
          <div className="container-fluid-row container-fluid-row-full-width hp-grid-banners">
            <div className="row-fluid ">        <div className="span16 ut2-bottom">
                <div className="row-fluid ">        <div className="span10  ">
                    <div id="banner_slider_1147" className="banners owl-carousel">
                      <div className="ty-banner__image-item">
                        <a className="banner__link" href="/accessories/other/face-masks-and-shields/">                        <img className="ty-pict  ty-banner__image lazyOwl cm-image" id="det_img_1056897728" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/promo/16/face-shields-masks.jpg" alt="" title />
                        </a>                          </div>
                      <div className="ty-banner__image-item">
                        <a className="banner__link" href="/gel-soak-off/colors/dnd/">                        <img className="ty-pict  ty-banner__image lazyOwl cm-image" id="det_img_690306356" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/promo/15/1400X870-dnd-new-colors-start-from-711.jpg" alt="" title />
                        </a>                          </div>
                      <div className="ty-banner__image-item">
                        <a className="banner__link" href="/collections/opi-mexico-city-collection-2019/">                        <img className="ty-pict  ty-banner__image lazyOwl cm-image" id="det_img_442447159" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/promo/15/opi-mexico-city-collection-2019.jpg" alt="" title />
                        </a>                          </div>
                      <div className="ty-banner__image-item">
                        <a className="banner__link" href="/collections/kiara-sky-glow-dip-powers-2019/">                        <img className="ty-pict  ty-banner__image lazyOwl cm-image" id="det_img_1721371103" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/promo/14/kiara-sky-glow-dip-powder-nov-22-2019.jpg" alt="" title />
                        </a>                          </div>
                      <div className="ty-banner__image-item">
                        <a className="banner__link" href="/dip-powders/color-powders/sns/sns-air-ombre/">                        <img className="ty-pict  ty-banner__image lazyOwl cm-image" id="det_img_791382703" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/promo/14/sns_air_ombre_dip_spray.jpg" alt="" title />
                        </a>                          </div>
                      <div className="ty-banner__image-item">
                        <a className="banner__link" href="/collections/sns-birds-of-paradise-collection-2019/">                        <img className="ty-pict  ty-banner__image lazyOwl cm-image" id="det_img_971027647" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/promo/13/sns-bp-bird-of-paradise-colection-2019.jpg" alt="" title />
                        </a>                          </div>
                      <div className="ty-banner__image-item">
                        <a className="banner__link" href="/gel-soak-off/colors/kiara-sky/">                        <img className="ty-pict  ty-banner__image lazyOwl cm-image" id="det_img_1063297111" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/promo/13/1400x870-kiara-sky-soak-off-polishes-buy-3-or-more.jpg" alt="" title />
                        </a>                          </div>
                      <div className="ty-banner__image-item">
                        <a className="banner__link" href="/dip-powders/liquids/sns/">                        <img className="ty-pict  ty-banner__image lazyOwl cm-image" id="det_img_2035157599" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/promo/13/1400x870-sns-liquid-2oz-sale.jpg" alt="" title />
                        </a>                          </div>
                      <div className="ty-banner__image-item">
                        <a className="banner__link" href="/dip-powders/liquids/">                        <img className="ty-pict  ty-banner__image lazyOwl cm-image" id="det_img_62461531" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/promo/13/1400x870-shop-all-dipping-liquids3.jpg" alt="" title />
                        </a>                          </div>
                    </div>
                    {/* Inline script moved to the bottom of the page */}
                  </div>
                  <div className="span6  ">
                    <div id="banner_slider_1148" className="banners owl-carousel">
                      <div className="ty-banner__image-item">
                        <a className="banner__link" href="/gel-soak-off/colors/dnd/">                        <img className="ty-pict  ty-banner__image lazyOwl cm-image" id="det_img_1456147090" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/promo/13/800x400-dnd-soak-off-gel-colors.jpg" alt="" title />
                        </a>                          </div>
                      <div className="ty-banner__image-item">
                        <a className="banner__link" href="/gel-soak-off/base-and-top-coats/?features_hash=1-49-277">                        <img className="ty-pict  ty-banner__image lazyOwl cm-image" id="det_img_2096778426" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/promo/13/800x400-dnd-soak-off-gel-colors-base-top-coats.jpg" alt="" title />
                        </a>                          </div>
                    </div>
                    {/* Inline script moved to the bottom of the page */}<div id="banner_slider_1149" className="banners owl-carousel">
                      <div className="ty-banner__image-item">
                        <a className="banner__link" href="/dip-powders/color-powders/sns/">                        <img className="ty-pict  ty-banner__image lazyOwl cm-image" id="det_img_1127016348" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/promo/13/800x400-sns-gelous-colors2.jpg" alt="" title />
                        </a>                          </div>
                    </div>
                    {/* Inline script moved to the bottom of the page */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid-row">
            <div className="row-fluid ">        <div className="span16 hp-newproducts ut2-top-bottom">
                <div className="ty-mainbox-simple-container clearfix">
                  <h2 className="ty-mainbox-simple-title">
                    Shop By Category
                  </h2>
                  <div className="ty-mainbox-simple-body">{/* Inline script moved to the bottom of the page */}
                  <div className="ab-fn-parent ab-fn-block-700_145  clearfix">
                    <div id="ab__fn-first-level-700_145" className="ab-fn-first-level ab-fn-clipped ab__fn_scroller one_level active">
                    {categories.map((c) => (
                      <div data-item-id={210} data-item-index={0} className="ab-fn-first-level-item scroller-item ty-column6  ab-fn-dont-allow-link1 active">
                      <Link to="/{c.slug}" className="ab-fn-fl-content">
                        <div className="ab-fn-image-wrap" style={{width: '100px'}}>
                          <img className="ty-pict   lazyOwl cm-image" id="det_img_1034410194" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src={c.images[1].url} alt={c.name} title />
                            <span className="ab-loading-spinner" />
                          </div>
                          <span className="ab-fn-item-header">
                            <span>{c.name}</span>
                            </span>
                          </Link>
                    </div>
                    ))}
                     

                       </div><div className="ab-fn-common-link"><a href="/categories/" className="ty-btn ty-btn__primary ty-btn__big "><span>VIEW ALL CATEGORIES</span></a></div></div>{/* Inline script moved to the bottom of the page */}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid-row">
            <div className="row-fluid ">        <div className="span16 new-popular-special ut2-top-bottom">
                <div className="row-fluid ">        <div className="span16 hp-hometabsss ">
                    <div className="ty-mainbox-simple-container clearfix hp-nps-block hp-nps-title-new">
                      <h2 className="ty-mainbox-simple-title">
                        New
                      </h2>
                      <div className="ty-mainbox-simple-body">
                        <div id="scroll_list_148" className="owl-carousel ty-scroller-list" style={{height: '320px'}}>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/nail-arts-and-brushes/decorations/nail-stickers/nail-art-sticker-glow-in-the-dark-d019yg/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/17/nail-art-sticker-glow-in-the-dark-d019yg.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_148000scr_1480008810" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[8810][product_id]" defaultValue={8810} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/nail-arts-and-brushes/decorations/nail-stickers/nail-art-sticker-glow-in-the-dark-d019yg/" className="product-title" title="Nail Art Sticker - Glow In The Dark D019YG">Nail Art Sticker - Glow In The Dark D019YG</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-148000scr_1480008810" id="old_price_update_148000scr_1480008810">
                                        {/*old_price_update_148000scr_1480008810*/}</span>
                                      <span className="cm-reload-148000scr_1480008810 ty-price-update" id="price_update_148000scr_1480008810">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_148000scr_1480008810"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_148000scr_1480008810" className="ty-price-num">2.00</span></bdi></span>
                                        {/*price_update_148000scr_1480008810*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/accessories/other/face-masks-and-shields/washable-cloth-face-mask-style-128/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/17/washable-cloth-face-mask-style-128.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_148000scr_1480008809" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[8809][product_id]" defaultValue={8809} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/accessories/other/face-masks-and-shields/washable-cloth-face-mask-style-128/" className="product-title" title="Washable Cloth Face Mask - Style 128">Washable Cloth Face Mask - Style 128</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-148000scr_1480008809" id="old_price_update_148000scr_1480008809">
                                        {/*old_price_update_148000scr_1480008809*/}</span>
                                      <span className="cm-reload-148000scr_1480008809 ty-price-update" id="price_update_148000scr_1480008809">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_148000scr_1480008809"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_148000scr_1480008809" className="ty-price-num">4.00</span></bdi></span>
                                        {/*price_update_148000scr_1480008809*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/accessories/other/face-masks-and-shields/washable-cloth-face-mask-style-127/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/17/washable-cloth-face-mask-style-127.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_148000scr_1480008808" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[8808][product_id]" defaultValue={8808} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/accessories/other/face-masks-and-shields/washable-cloth-face-mask-style-127/" className="product-title" title="Washable Cloth Face Mask - Style 127">Washable Cloth Face Mask - Style 127</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-148000scr_1480008808" id="old_price_update_148000scr_1480008808">
                                        {/*old_price_update_148000scr_1480008808*/}</span>
                                      <span className="cm-reload-148000scr_1480008808 ty-price-update" id="price_update_148000scr_1480008808">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_148000scr_1480008808"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_148000scr_1480008808" className="ty-price-num">4.00</span></bdi></span>
                                        {/*price_update_148000scr_1480008808*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/accessories/other/face-masks-and-shields/washable-cloth-face-mask-style-126/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/17/washable-cloth-face-mask-style-126.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_148000scr_1480008807" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[8807][product_id]" defaultValue={8807} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/accessories/other/face-masks-and-shields/washable-cloth-face-mask-style-126/" className="product-title" title="Washable Cloth Face Mask - Style 126">Washable Cloth Face Mask - Style 126</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-148000scr_1480008807" id="old_price_update_148000scr_1480008807">
                                        {/*old_price_update_148000scr_1480008807*/}</span>
                                      <span className="cm-reload-148000scr_1480008807 ty-price-update" id="price_update_148000scr_1480008807">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_148000scr_1480008807"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_148000scr_1480008807" className="ty-price-num">4.00</span></bdi></span>
                                        {/*price_update_148000scr_1480008807*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/accessories/other/nail-tips/pnd-01-clear-coffin-nail-tips-500pcs/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/17/15156-pnd-nail-tips-clear-coffin-500pcs.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_148000scr_1480008806" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[8806][product_id]" defaultValue={8806} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/accessories/other/nail-tips/pnd-01-clear-coffin-nail-tips-500pcs/" className="product-title" title="PND - #01 Clear Coffin Nail Tips 500PCS">PND - #01 Clear Coffin Nail Tips 500PCS</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-148000scr_1480008806" id="old_price_update_148000scr_1480008806">
                                        {/*old_price_update_148000scr_1480008806*/}</span>
                                      <span className="cm-reload-148000scr_1480008806 ty-price-update" id="price_update_148000scr_1480008806">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_148000scr_1480008806"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_148000scr_1480008806" className="ty-price-num">12.00</span></bdi></span>
                                        {/*price_update_148000scr_1480008806*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/accessories/other/nail-tips/pnd-02-clear-stilleto-nail-tips-600pcs/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/17/15158-pnd-nail-tips-clear-stilleto-600pcs_cbia-wj.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_148000scr_1480008805" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[8805][product_id]" defaultValue={8805} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/accessories/other/nail-tips/pnd-02-clear-stilleto-nail-tips-600pcs/" className="product-title" title="PND - #02 Clear Stilleto Nail Tips 600PCS">PND - #02 Clear Stilleto Nail Tips 600PCS</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-148000scr_1480008805" id="old_price_update_148000scr_1480008805">
                                        {/*old_price_update_148000scr_1480008805*/}</span>
                                      <span className="cm-reload-148000scr_1480008805 ty-price-update" id="price_update_148000scr_1480008805">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_148000scr_1480008805"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_148000scr_1480008805" className="ty-price-num">12.00</span></bdi></span>
                                        {/*price_update_148000scr_1480008805*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/nail-arts-and-brushes/decorations/nail-stickers/nail-art-sticker-hearts-kisses-xf3035/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/17/nail-art-sticker-xf3035.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_148000scr_1480008804" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[8804][product_id]" defaultValue={8804} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/nail-arts-and-brushes/decorations/nail-stickers/nail-art-sticker-hearts-kisses-xf3035/" className="product-title" title="Nail Art Sticker - Hearts, Kisses XF3035">Nail Art Sticker - Hearts, Kisses XF3035</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-148000scr_1480008804" id="old_price_update_148000scr_1480008804">
                                        {/*old_price_update_148000scr_1480008804*/}</span>
                                      <span className="cm-reload-148000scr_1480008804 ty-price-update" id="price_update_148000scr_1480008804">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_148000scr_1480008804"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_148000scr_1480008804" className="ty-price-num">2.00</span></bdi></span>
                                        {/*price_update_148000scr_1480008804*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/nail-arts-and-brushes/decorations/nail-stickers/nail-art-sticker-hearts-xf3032/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/17/nail-art-sticker-xf3032.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_148000scr_1480008803" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[8803][product_id]" defaultValue={8803} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/nail-arts-and-brushes/decorations/nail-stickers/nail-art-sticker-hearts-xf3032/" className="product-title" title="Nail Art Sticker - Hearts XF3032">Nail Art Sticker - Hearts XF3032</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-148000scr_1480008803" id="old_price_update_148000scr_1480008803">
                                        {/*old_price_update_148000scr_1480008803*/}</span>
                                      <span className="cm-reload-148000scr_1480008803 ty-price-update" id="price_update_148000scr_1480008803">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_148000scr_1480008803"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_148000scr_1480008803" className="ty-price-num">2.00</span></bdi></span>
                                        {/*price_update_148000scr_1480008803*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/tools-and-equipments/drills-and-bits/drill-bits/dnd-carbide-bit-medium-smooth-top-3-32-shank-gold/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/17/dnd-drill-bit-large-smooth-top-medium-gold.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_148000scr_1480008802" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[8802][product_id]" defaultValue={8802} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/tools-and-equipments/drills-and-bits/drill-bits/dnd-carbide-bit-medium-smooth-top-3-32-shank-gold/" className="product-title" title="DND Carbide Bit - Medium Smooth Top 3/32&quot; Shank Gold">DND Carbide Bit - Medium Smooth Top 3/32" Shank Gold</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-148000scr_1480008802" id="old_price_update_148000scr_1480008802">
                                        {/*old_price_update_148000scr_1480008802*/}</span>
                                      <span className="cm-reload-148000scr_1480008802 ty-price-update" id="price_update_148000scr_1480008802">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_148000scr_1480008802"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_148000scr_1480008802" className="ty-price-num">9.00</span></bdi></span>
                                        {/*price_update_148000scr_1480008802*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/tools-and-equipments/drills-and-bits/drill-bits/dnd-carbide-bit-fine-smooth-top-3-32-shank-silver/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/17/dnd-carbide-bit-fine-smooth-top.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_148000scr_1480008801" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[8801][product_id]" defaultValue={8801} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/tools-and-equipments/drills-and-bits/drill-bits/dnd-carbide-bit-fine-smooth-top-3-32-shank-silver/" className="product-title" title="DND Carbide Bit - Fine Smooth Top 3/32&quot; Shank Silver">DND Carbide Bit - Fine Smooth Top 3/32" Shank Silver</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-148000scr_1480008801" id="old_price_update_148000scr_1480008801">
                                        {/*old_price_update_148000scr_1480008801*/}</span>
                                      <span className="cm-reload-148000scr_1480008801 ty-price-update" id="price_update_148000scr_1480008801">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_148000scr_1480008801"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_148000scr_1480008801" className="ty-price-num">9.00</span></bdi></span>
                                        {/*price_update_148000scr_1480008801*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/tools-and-equipments/drills-and-bits/drill-bits/dnd-carbide-bit-medium-3-32-shank-silver/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/17/dnd-carbide-bit-medium.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_148000scr_1480008800" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[8800][product_id]" defaultValue={8800} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/tools-and-equipments/drills-and-bits/drill-bits/dnd-carbide-bit-medium-3-32-shank-silver/" className="product-title" title="DND Carbide Bit - Medium 3/32&quot; Shank Silver">DND Carbide Bit - Medium 3/32" Shank Silver</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-148000scr_1480008800" id="old_price_update_148000scr_1480008800">
                                        {/*old_price_update_148000scr_1480008800*/}</span>
                                      <span className="cm-reload-148000scr_1480008800 ty-price-update" id="price_update_148000scr_1480008800">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_148000scr_1480008800"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_148000scr_1480008800" className="ty-price-num">9.00</span></bdi></span>
                                        {/*price_update_148000scr_1480008800*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/dip-powders/liquids/anc/ans-4-top-dipping-0.5oz/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/17/ans-4-top-dipping-15ml.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_148000scr_1480008799" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[8799][product_id]" defaultValue={8799} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/dip-powders/liquids/anc/ans-4-top-dipping-0.5oz/" className="product-title" title="ANS - #4 Top Dipping 0.5oz">ANS - #4 Top Dipping 0.5oz</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-148000scr_1480008799" id="old_price_update_148000scr_1480008799">
                                        {/*old_price_update_148000scr_1480008799*/}</span>
                                      <span className="cm-reload-148000scr_1480008799 ty-price-update" id="price_update_148000scr_1480008799">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_148000scr_1480008799"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_148000scr_1480008799" className="ty-price-num">5.00</span></bdi></span>
                                        {/*price_update_148000scr_1480008799*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/dip-powders/liquids/anc/ans-3-activator-0.5oz/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/17/ans-3-activator-15ml.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_148000scr_1480008798" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[8798][product_id]" defaultValue={8798} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/dip-powders/liquids/anc/ans-3-activator-0.5oz/" className="product-title" title="ANS - #3 Activator 0.5oz">ANS - #3 Activator 0.5oz</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-148000scr_1480008798" id="old_price_update_148000scr_1480008798">
                                        {/*old_price_update_148000scr_1480008798*/}</span>
                                      <span className="cm-reload-148000scr_1480008798 ty-price-update" id="price_update_148000scr_1480008798">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_148000scr_1480008798"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_148000scr_1480008798" className="ty-price-num">5.00</span></bdi></span>
                                        {/*price_update_148000scr_1480008798*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/dip-powders/liquids/anc/ans-2-base-dipping-0.5oz/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/17/ans-2-base-dipping-15ml.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_148000scr_1480008797" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[8797][product_id]" defaultValue={8797} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/dip-powders/liquids/anc/ans-2-base-dipping-0.5oz/" className="product-title" title="ANS - #2 Base Dipping 0.5oz">ANS - #2 Base Dipping 0.5oz</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-148000scr_1480008797" id="old_price_update_148000scr_1480008797">
                                        {/*old_price_update_148000scr_1480008797*/}</span>
                                      <span className="cm-reload-148000scr_1480008797 ty-price-update" id="price_update_148000scr_1480008797">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_148000scr_1480008797"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_148000scr_1480008797" className="ty-price-num">5.00</span></bdi></span>
                                        {/*price_update_148000scr_1480008797*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/nail-arts-and-brushes/decorations/nail-stickers/nail-art-sticker-chanel-gold/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/17/nail-art-sticker-gchanel.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_148000scr_1480008796" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[8796][product_id]" defaultValue={8796} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/nail-arts-and-brushes/decorations/nail-stickers/nail-art-sticker-chanel-gold/" className="product-title" title="Nail Art Sticker - Chanel Gold">Nail Art Sticker - Chanel Gold</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-148000scr_1480008796" id="old_price_update_148000scr_1480008796">
                                        {/*old_price_update_148000scr_1480008796*/}</span>
                                      <span className="cm-reload-148000scr_1480008796 ty-price-update" id="price_update_148000scr_1480008796">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_148000scr_1480008796"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_148000scr_1480008796" className="ty-price-num">2.00</span></bdi></span>
                                        {/*price_update_148000scr_1480008796*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/nail-arts-and-brushes/decorations/nail-stickers/nail-art-sticker-x-mas-f617/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/17/nail-art-sticker-f617psd.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_148000scr_1480008795" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[8795][product_id]" defaultValue={8795} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/nail-arts-and-brushes/decorations/nail-stickers/nail-art-sticker-x-mas-f617/" className="product-title" title="Nail Art Sticker - X-Mas F617">Nail Art Sticker - X-Mas F617</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-148000scr_1480008795" id="old_price_update_148000scr_1480008795">
                                        {/*old_price_update_148000scr_1480008795*/}</span>
                                      <span className="cm-reload-148000scr_1480008795 ty-price-update" id="price_update_148000scr_1480008795">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_148000scr_1480008795"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_148000scr_1480008795" className="ty-price-num">2.00</span></bdi></span>
                                        {/*price_update_148000scr_1480008795*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/nail-arts-and-brushes/decorations/confetti-and-flakes/nail-art-flake-fall-leaves-2/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/17/nail-art-decoration-fall-leaves.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_148000scr_1480008794" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[8794][product_id]" defaultValue={8794} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/nail-arts-and-brushes/decorations/confetti-and-flakes/nail-art-flake-fall-leaves-2/" className="product-title" title="Nail Art Flake - Fall Leaves 2">Nail Art Flake - Fall Leaves 2</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-148000scr_1480008794" id="old_price_update_148000scr_1480008794">
                                        {/*old_price_update_148000scr_1480008794*/}</span>
                                      <span className="cm-reload-148000scr_1480008794 ty-price-update" id="price_update_148000scr_1480008794">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_148000scr_1480008794"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_148000scr_1480008794" className="ty-price-num">10.00</span></bdi></span>
                                        {/*price_update_148000scr_1480008794*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/gel-soak-off/base-and-top-coats/base-coats/kupa-gelfinity-gel-base-8oz/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/17/kupa-gelfinity-gel-base-soak-off-gel-8oz.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_148000scr_1480008793" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[8793][product_id]" defaultValue={8793} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/gel-soak-off/base-and-top-coats/base-coats/kupa-gelfinity-gel-base-8oz/" className="product-title" title="Kupa GelFinity - Gel Base 8oz">Kupa GelFinity - Gel Base 8oz</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-148000scr_1480008793" id="old_price_update_148000scr_1480008793">
                                        {/*old_price_update_148000scr_1480008793*/}</span>
                                      <span className="cm-reload-148000scr_1480008793 ty-price-update" id="price_update_148000scr_1480008793">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_148000scr_1480008793"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_148000scr_1480008793" className="ty-price-num">42.50</span></bdi></span>
                                        {/*price_update_148000scr_1480008793*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/nail-arts-and-brushes/decorations/foils/foil-design-nail-arts-22/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/17/foil-design-nail-art-22.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_148000scr_1480008792" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[8792][product_id]" defaultValue={8792} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/nail-arts-and-brushes/decorations/foils/foil-design-nail-arts-22/" className="product-title" title="Foil Design Nail Arts #22">Foil Design Nail Arts #22</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-148000scr_1480008792" id="old_price_update_148000scr_1480008792">
                                        {/*old_price_update_148000scr_1480008792*/}</span>
                                      <span className="cm-reload-148000scr_1480008792 ty-price-update" id="price_update_148000scr_1480008792">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_148000scr_1480008792"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_148000scr_1480008792" className="ty-price-num">10.00</span></bdi></span>
                                        {/*price_update_148000scr_1480008792*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/nail-arts-and-brushes/decorations/foils/foil-design-nail-arts-21/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/17/foil-design-nail-art-21-2.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_148000scr_1480008791" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[8791][product_id]" defaultValue={8791} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/nail-arts-and-brushes/decorations/foils/foil-design-nail-arts-21/" className="product-title" title="Foil Design Nail Arts #21">Foil Design Nail Arts #21</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-148000scr_1480008791" id="old_price_update_148000scr_1480008791">
                                        {/*old_price_update_148000scr_1480008791*/}</span>
                                      <span className="cm-reload-148000scr_1480008791 ty-price-update" id="price_update_148000scr_1480008791">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_148000scr_1480008791"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_148000scr_1480008791" className="ty-price-num">10.00</span></bdi></span>
                                        {/*price_update_148000scr_1480008791*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Inline script moved to the bottom of the page */}
                        {/* Inline script moved to the bottom of the page */}
                      </div>
                    </div><div className="ty-mainbox-simple-container clearfix hp-nps-block hp-nps-title-popular">
                      <h2 className="ty-mainbox-simple-title">
                        Popular
                      </h2>
                      <div className="ty-mainbox-simple-body">
                        <div id="scroll_list_149" className="owl-carousel ty-scroller-list" style={{height: '320px'}}>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/tools-and-equipments/drills-and-bits/replacement-parts/medicool-propower-20k-control-box-replacement-battery/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/17/medicool-propower-20k-replacement-battery-only-green.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_149000scr_1490005373" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[5373][product_id]" defaultValue={5373} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/tools-and-equipments/drills-and-bits/replacement-parts/medicool-propower-20k-control-box-replacement-battery/" className="product-title" title="Medicool ProPower 20K Control Box Replacement Battery">Medicool ProPower 20K Control Box Replacement Battery</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-149000scr_1490005373" id="old_price_update_149000scr_1490005373">
                                        {/*old_price_update_149000scr_1490005373*/}</span>
                                      <span className="cm-reload-149000scr_1490005373 ty-price-update" id="price_update_149000scr_1490005373">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_149000scr_1490005373"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_149000scr_1490005373" className="ty-price-num">65.00</span></bdi></span>
                                        {/*price_update_149000scr_1490005373*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/tools-and-equipments/drills-and-bits/replacement-parts/kupa-manipro-passport-control-box-replacement-battery/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/17/kupa-manipro-passport-control-box-battery-only-blue.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_149000scr_1490005372" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[5372][product_id]" defaultValue={5372} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/tools-and-equipments/drills-and-bits/replacement-parts/kupa-manipro-passport-control-box-replacement-battery/" className="product-title" title="Kupa MANIPro Passport Control Box Replacement Battery">Kupa MANIPro Passport Control Box Replacement Battery</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-149000scr_1490005372" id="old_price_update_149000scr_1490005372">
                                        {/*old_price_update_149000scr_1490005372*/}</span>
                                      <span className="cm-reload-149000scr_1490005372 ty-price-update" id="price_update_149000scr_1490005372">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_149000scr_1490005372"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_149000scr_1490005372" className="ty-price-num">60.00</span></bdi></span>
                                        {/*price_update_149000scr_1490005372*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/gel-soak-off/other/color-charts/dnd-dc-soak-off-gel-color-charts-144-colored-tips/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/12/dnd-dc-color-charts.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_149000scr_1490006514" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[6514][product_id]" defaultValue={6514} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/gel-soak-off/other/color-charts/dnd-dc-soak-off-gel-color-charts-144-colored-tips/" className="product-title" title="DND DC - Soak-off Gel Color Charts 144 Colored Tips">DND DC - Soak-off Gel Color Charts 144 Colored Tips</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-149000scr_1490006514" id="old_price_update_149000scr_1490006514">
                                        {/*old_price_update_149000scr_1490006514*/}</span>
                                      <span className="cm-reload-149000scr_1490006514 ty-price-update" id="price_update_149000scr_1490006514">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_149000scr_1490006514"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_149000scr_1490006514" className="ty-price-num">5.00</span></bdi></span>
                                        {/*price_update_149000scr_1490006514*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/dip-powders/liquids/chisel/chisel-nail-art-black-diamond-matte-gel-0.5oz/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/12/chisel-nail-art-black-diamond-matte-gel-15ml_d5zl-07.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_149000scr_1490005992" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[5992][product_id]" defaultValue={5992} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/dip-powders/liquids/chisel/chisel-nail-art-black-diamond-matte-gel-0.5oz/" className="product-title" title="Chisel Nail Art - Black Diamond Matte Gel 0.5oz">Chisel Nail Art - Black Diamond Matte Gel 0.5oz</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-149000scr_1490005992" id="old_price_update_149000scr_1490005992">
                                        {/*old_price_update_149000scr_1490005992*/}</span>
                                      <span className="cm-reload-149000scr_1490005992 ty-price-update" id="price_update_149000scr_1490005992">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_149000scr_1490005992"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_149000scr_1490005992" className="ty-price-num">8.00</span></bdi></span>
                                        {/*price_update_149000scr_1490005992*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/gel-soak-off/base-and-top-coats/top-coats/cre8tion-glow-in-the-dark-top-gel-0.5oz/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/13/cre8tion-top-gel-glow-in-the-dark-no-wipe-15ml.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_149000scr_1490004320" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[4320][product_id]" defaultValue={4320} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/gel-soak-off/base-and-top-coats/top-coats/cre8tion-glow-in-the-dark-top-gel-0.5oz/" className="product-title" title="Cre8tion - Glow in the Dark Top Gel 0.5oz">Cre8tion - Glow in the Dark Top Gel 0.5oz</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-149000scr_1490004320" id="old_price_update_149000scr_1490004320">
                                        {/*old_price_update_149000scr_1490004320*/}</span>
                                      <span className="cm-reload-149000scr_1490004320 ty-price-update" id="price_update_149000scr_1490004320">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_149000scr_1490004320"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_149000scr_1490004320" className="ty-price-num">9.50</span></bdi></span>
                                        {/*price_update_149000scr_1490004320*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/dip-powders/liquids/chisel/chisel-nail-art-black-diamond-top-gel-0.5oz/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/13/chisel-nail-art-black-diamond-top-gel-15ml_0s97-ik.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_149000scr_1490005131" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[5131][product_id]" defaultValue={5131} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/dip-powders/liquids/chisel/chisel-nail-art-black-diamond-top-gel-0.5oz/" className="product-title" title="Chisel Nail Art - Black Diamond Top Gel 0.5oz">Chisel Nail Art - Black Diamond Top Gel 0.5oz</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-149000scr_1490005131" id="old_price_update_149000scr_1490005131">
                                        {/*old_price_update_149000scr_1490005131*/}</span>
                                      <span className="cm-reload-149000scr_1490005131 ty-price-update" id="price_update_149000scr_1490005131">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_149000scr_1490005131"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_149000scr_1490005131" className="ty-price-num">8.00</span></bdi></span>
                                        {/*price_update_149000scr_1490005131*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/dip-powders/color-powders/anc/anc-dip-powder-just-chillin/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/3/175-anc-just-chillin-1oz.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_149000scr_1490001034" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[1034][product_id]" defaultValue={1034} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/dip-powders/color-powders/anc/anc-dip-powder-just-chillin/" className="product-title" title="ANC Dip Powder - Just Chillin">ANC Dip Powder - Just Chillin</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-149000scr_1490001034" id="old_price_update_149000scr_1490001034">
                                        {/*old_price_update_149000scr_1490001034*/}</span>
                                      <span className="cm-reload-149000scr_1490001034 ty-price-update" id="price_update_149000scr_1490001034">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_149000scr_1490001034"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_149000scr_1490001034" className="ty-price-num">10.95</span></bdi></span>
                                        {/*price_update_149000scr_1490001034*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/accessories/manicures/gloves/pureshield-powder-free-latex-disposable-gloves/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/3/pureshield-powder-free-latex-disposable-gloves.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_149000scr_149000744" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[744][product_id]" defaultValue={744} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/accessories/manicures/gloves/pureshield-powder-free-latex-disposable-gloves/" className="product-title" title="Pureshield - Powder Free Latex Disposable Gloves">Pureshield - Powder Free Latex Disposable Gloves</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-149000scr_149000744" id="old_price_update_149000scr_149000744">
                                        {/*old_price_update_149000scr_149000744*/}</span>
                                      <span className="cm-reload-149000scr_149000744 ty-price-update" id="price_update_149000scr_149000744">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_149000scr_149000744"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_149000scr_149000744" className="ty-price-num">9.00</span></bdi></span>
                                        {/*price_update_149000scr_149000744*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/gel-soak-off/other/color-charts/dnd-dc-mermaid-collection-color-chart-36-colored-tips/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/12/dnd-dc-mermaid-collection-color-chart.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_149000scr_1490006517" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[6517][product_id]" defaultValue={6517} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/gel-soak-off/other/color-charts/dnd-dc-mermaid-collection-color-chart-36-colored-tips/" className="product-title" title="DND DC - Mermaid Collection Color Chart 36 Colored Tips">DND DC - Mermaid Collection Color Chart 36 Colored Tips</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-149000scr_1490006517" id="old_price_update_149000scr_1490006517">
                                        {/*old_price_update_149000scr_1490006517*/}</span>
                                      <span className="cm-reload-149000scr_1490006517 ty-price-update" id="price_update_149000scr_1490006517">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_149000scr_1490006517"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_149000scr_1490006517" className="ty-price-num">5.00</span></bdi></span>
                                        {/*price_update_149000scr_1490006517*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/gel-soak-off/other/color-charts/dnd-dc-mood-change-color-chart-36-colored-tips/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/12/dnd-dc-mood-change-color-chart1.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_149000scr_1490006511" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[6511][product_id]" defaultValue={6511} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/gel-soak-off/other/color-charts/dnd-dc-mood-change-color-chart-36-colored-tips/" className="product-title" title="DND DC - Mood Change Color Chart 36 Colored Tips">DND DC - Mood Change Color Chart 36 Colored Tips</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-149000scr_1490006511" id="old_price_update_149000scr_1490006511">
                                        {/*old_price_update_149000scr_1490006511*/}</span>
                                      <span className="cm-reload-149000scr_1490006511 ty-price-update" id="price_update_149000scr_1490006511">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_149000scr_1490006511"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_149000scr_1490006511" className="ty-price-num">5.00</span></bdi></span>
                                        {/*price_update_149000scr_1490006511*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/gel-soak-off/colors/dnd/dnd-duo-lemon-juice-gel-and-matching-nail-polish-424/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/5/dnd424.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_149000scr_1490001664" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[1664][product_id]" defaultValue={1664} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/gel-soak-off/colors/dnd/dnd-duo-lemon-juice-gel-and-matching-nail-polish-424/" className="product-title" title="DND Duo - Lemon Juice - Gel & Matching Nail Polish # 424">DND Duo - Lemon Juice - Gel &amp; Matching Nail Polish # 424</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-149000scr_1490001664" id="old_price_update_149000scr_1490001664">
                                        {/*old_price_update_149000scr_1490001664*/}</span>
                                      <span className="cm-reload-149000scr_1490001664 ty-price-update" id="price_update_149000scr_1490001664">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_149000scr_1490001664"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_149000scr_1490001664" className="ty-price-num">5.95</span></bdi></span>
                                        {/*price_update_149000scr_1490001664*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/gel-soak-off/other/color-charts/dnd-dc-platinum-collection-color-chart-36-colored-tips/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/12/dnd-dc-platinum-collection-color-chart.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_149000scr_1490006516" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[6516][product_id]" defaultValue={6516} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/gel-soak-off/other/color-charts/dnd-dc-platinum-collection-color-chart-36-colored-tips/" className="product-title" title="DND DC - Platinum Collection Color Chart 36 Colored Tips">DND DC - Platinum Collection Color Chart 36 Colored Tips</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-149000scr_1490006516" id="old_price_update_149000scr_1490006516">
                                        {/*old_price_update_149000scr_1490006516*/}</span>
                                      <span className="cm-reload-149000scr_1490006516 ty-price-update" id="price_update_149000scr_1490006516">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_149000scr_1490006516"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_149000scr_1490006516" className="ty-price-num">5.00</span></bdi></span>
                                        {/*price_update_149000scr_1490006516*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/nail-arts-and-brushes/decorations/foils/cre8tion-soak-off-gel-foil-transfer-0.5oz/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/13/cre8tion-soak-off-gel-foil-transfer-15ml1.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_149000scr_1490006772" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[6772][product_id]" defaultValue={6772} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/nail-arts-and-brushes/decorations/foils/cre8tion-soak-off-gel-foil-transfer-0.5oz/" className="product-title" title="Cre8tion Soak Off Gel - Foil Transfer 0.5oz">Cre8tion Soak Off Gel - Foil Transfer 0.5oz</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-149000scr_1490006772" id="old_price_update_149000scr_1490006772">
                                        {/*old_price_update_149000scr_1490006772*/}</span>
                                      <span className="cm-reload-149000scr_1490006772 ty-price-update" id="price_update_149000scr_1490006772">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_149000scr_1490006772"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_149000scr_1490006772" className="ty-price-num">8.95</span></bdi></span>
                                        {/*price_update_149000scr_1490006772*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/accessories/other/glues-and-resins/kds-nail-glue/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/5/kds-nail-glue.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_149000scr_1490001946" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[1946][product_id]" defaultValue={1946} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/accessories/other/glues-and-resins/kds-nail-glue/" className="product-title" title="KDS - Nail Glue">KDS - Nail Glue</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-149000scr_1490001946" id="old_price_update_149000scr_1490001946">
                                        {/*old_price_update_149000scr_1490001946*/}</span>
                                      <span className="cm-reload-149000scr_1490001946 ty-price-update" id="price_update_149000scr_1490001946">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_149000scr_1490001946"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_149000scr_1490001946" className="ty-price-num">1.00</span></bdi></span>
                                        {/*price_update_149000scr_1490001946*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/collections/sns-lv-collection-2018/sns-gelous-color-lv-30-les-mis-1oz/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/9/sns-lv30.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_149000scr_1490005347" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[5347][product_id]" defaultValue={5347} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/collections/sns-lv-collection-2018/sns-gelous-color-lv-30-les-mis-1oz/" className="product-title" title="SNS Gelous Color - LV 30 Les Mis 1oz">SNS Gelous Color - LV 30 Les Mis 1oz</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-149000scr_1490005347" id="old_price_update_149000scr_1490005347">
                                        {/*old_price_update_149000scr_1490005347*/}</span>
                                      <span className="cm-reload-149000scr_1490005347 ty-price-update" id="price_update_149000scr_1490005347">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_149000scr_1490005347"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_149000scr_1490005347" className="ty-price-num">12.50</span></bdi></span>
                                        {/*price_update_149000scr_1490005347*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/tools-and-equipments/drills-and-bits/replacement-parts/kupa-manipro-passport-kp-60-handpiece-motor-cord/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/10/kupa-manipro-passport-kp60-motor-cord.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_149000scr_1490005366" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[5366][product_id]" defaultValue={5366} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/tools-and-equipments/drills-and-bits/replacement-parts/kupa-manipro-passport-kp-60-handpiece-motor-cord/" className="product-title" title="Kupa MANIPro Passport KP-60 Handpiece Motor Cord">Kupa MANIPro Passport KP-60 Handpiece Motor Cord</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-149000scr_1490005366" id="old_price_update_149000scr_1490005366">
                                        {/*old_price_update_149000scr_1490005366*/}</span>
                                      <span className="cm-reload-149000scr_1490005366 ty-price-update" id="price_update_149000scr_1490005366">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_149000scr_1490005366"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_149000scr_1490005366" className="ty-price-num">30.00</span></bdi></span>
                                        {/*price_update_149000scr_1490005366*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/gel-soak-off/colors/dnd-dc/dnd-dc-duo-caribbean-island-gel-and-matching-nail-polish-032/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/7/032-dnd-dc-caribbean-island-2-pack.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_149000scr_1490003553" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[3553][product_id]" defaultValue={3553} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/gel-soak-off/colors/dnd-dc/dnd-dc-duo-caribbean-island-gel-and-matching-nail-polish-032/" className="product-title" title="DND DC Duo - Caribbean Island - Gel & Matching Nail Polish # 032">DND DC Duo - Caribbean Island - Gel &amp; Matching Nail Polish # 032</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-149000scr_1490003553" id="old_price_update_149000scr_1490003553">
                                        {/*old_price_update_149000scr_1490003553*/}</span>
                                      <span className="cm-reload-149000scr_1490003553 ty-price-update" id="price_update_149000scr_1490003553">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_149000scr_1490003553"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_149000scr_1490003553" className="ty-price-num">7.00</span></bdi></span>
                                        {/*price_update_149000scr_1490003553*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/nail-arts-and-brushes/brushes/acrylic-brushes/dnd-kolinsky-japan-acrylic-brush/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/15/dnd-kolinsky-japan-acrylic-brush.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_149000scr_1490007912" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[7912][product_id]" defaultValue={7912} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/nail-arts-and-brushes/brushes/acrylic-brushes/dnd-kolinsky-japan-acrylic-brush/" className="product-title" title="DND Kolinsky Japan Acrylic Brush">DND Kolinsky Japan Acrylic Brush</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-149000scr_1490007912" id="old_price_update_149000scr_1490007912">
                                        {/*old_price_update_149000scr_1490007912*/}</span>
                                      <span className="cm-reload-149000scr_1490007912 ty-price-update" id="price_update_149000scr_1490007912">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_149000scr_1490007912"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_149000scr_1490007912" className="ty-price-num">26.00</span></bdi></span>
                                        {/*price_update_149000scr_1490007912*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/gel-soak-off/other/color-charts/dnd-soak-off-gel-color-charts-288-colored-tips/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/12/dnd-soak-off-gels-color-charts.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_149000scr_1490006515" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[6515][product_id]" defaultValue={6515} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/gel-soak-off/other/color-charts/dnd-soak-off-gel-color-charts-288-colored-tips/" className="product-title" title="DND - Soak-off Gel Color Charts 288 Colored Tips">DND - Soak-off Gel Color Charts 288 Colored Tips</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-149000scr_1490006515" id="old_price_update_149000scr_1490006515">
                                        {/*old_price_update_149000scr_1490006515*/}</span>
                                      <span className="cm-reload-149000scr_1490006515 ty-price-update" id="price_update_149000scr_1490006515">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_149000scr_1490006515"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_149000scr_1490006515" className="ty-price-num">5.00</span></bdi></span>
                                        {/*price_update_149000scr_1490006515*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/gel-soak-off/colors/dnd-dc/dnd-dc-duo-white-bunny-gel-and-matching-nail-polish-057/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/7/057-dnd-dc-white-bunny-2-pack.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_149000scr_1490003579" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[3579][product_id]" defaultValue={3579} />
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/gel-soak-off/colors/dnd-dc/dnd-dc-duo-white-bunny-gel-and-matching-nail-polish-057/" className="product-title" title="DND DC Duo - White Bunny - Gel & Matching Nail Polish # 057">DND DC Duo - White Bunny - Gel &amp; Matching Nail Polish # 057</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col">
                                    <div>
                                      <span className="cm-reload-149000scr_1490003579" id="old_price_update_149000scr_1490003579">
                                        {/*old_price_update_149000scr_1490003579*/}</span>
                                      <span className="cm-reload-149000scr_1490003579 ty-price-update" id="price_update_149000scr_1490003579">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_149000scr_1490003579"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_149000scr_1490003579" className="ty-price-num">7.00</span></bdi></span>
                                        {/*price_update_149000scr_1490003579*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Inline script moved to the bottom of the page */}
                      </div>
                    </div><div className="ty-mainbox-simple-container clearfix hp-nps-block hp-nps-title-special">
                      <h2 className="ty-mainbox-simple-title">
                        Special
                      </h2>
                      <div className="ty-mainbox-simple-body">
                        <div id="scroll_list_147" className="owl-carousel ty-scroller-list" style={{height: '320px'}}>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/nail-polishes/base-and-top-coats/base-coats/china-glaze-strong-adhesion-base-coat-0.5oz/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/3/81001-china-glaze-strong-adhesion-base-coat-0.5oz.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_147000scr_147000722" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[722][product_id]" defaultValue={722} />
                                  <div className="ty-product-labels ty-product-labels--top-right   cm-reload-147000scr_147000722" id="product_labels_update_147000scr_147000722">
                                    <div className="ty-product-labels__item   ty-product-labels__item--discount">
                                      <div className="ty-product-labels__content">Save <em>73%</em></div>
                                    </div>
                                    {/*product_labels_update_147000scr_147000722*/}</div>
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/nail-polishes/base-and-top-coats/base-coats/china-glaze-strong-adhesion-base-coat-0.5oz/" className="product-title" title="China Glaze - Strong Adhesion Base Coat 0.5oz">China Glaze - Strong Adhesion Base Coat 0.5oz</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col pr-color">
                                    <div>
                                      <span className="cm-reload-147000scr_147000722" id="old_price_update_147000scr_147000722">
                                        <span className="ty-list-price ty-nowrap" id="line_list_price_147000scr_147000722"><span className="ty-strike"><bdi><span className="ty-list-price ty-nowrap">$</span><span id="sec_list_price_147000scr_147000722" className="ty-list-price ty-nowrap">6.50</span></bdi></span></span>
                                        {/*old_price_update_147000scr_147000722*/}</span>
                                      <span className="cm-reload-147000scr_147000722 ty-price-update" id="price_update_147000scr_147000722">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_147000scr_147000722"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_147000scr_147000722" className="ty-price-num">1.75</span></bdi></span>
                                        {/*price_update_147000scr_147000722*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/treatments/weak-nails/opi-nail-envy-original-formula-maximum-strength-nail-strengthener-0.5oz/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/13/opi-nail-envy-nail-strengthener-15ml.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_147000scr_1470006988" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[6988][product_id]" defaultValue={6988} />
                                  <div className="ty-product-labels ty-product-labels--top-right   cm-reload-147000scr_1470006988" id="product_labels_update_147000scr_1470006988">
                                    <div className="ty-product-labels__item   ty-product-labels__item--discount">
                                      <div className="ty-product-labels__content">Save <em>47%</em></div>
                                    </div>
                                    {/*product_labels_update_147000scr_1470006988*/}</div>
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/treatments/weak-nails/opi-nail-envy-original-formula-maximum-strength-nail-strengthener-0.5oz/" className="product-title" title="OPI Nail Envy Original Formula Maximum Strength Nail Strengthener 0.5oz">OPI Nail Envy Original Formula Maximum Strength Nail Strengthener 0.5oz</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col pr-color">
                                    <div>
                                      <span className="cm-reload-147000scr_1470006988" id="old_price_update_147000scr_1470006988">
                                        <span className="ty-list-price ty-nowrap" id="line_list_price_147000scr_1470006988"><span className="ty-strike"><bdi><span className="ty-list-price ty-nowrap">$</span><span id="sec_list_price_147000scr_1470006988" className="ty-list-price ty-nowrap">17.95</span></bdi></span></span>
                                        {/*old_price_update_147000scr_1470006988*/}</span>
                                      <span className="cm-reload-147000scr_1470006988 ty-price-update" id="price_update_147000scr_1470006988">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_147000scr_1470006988"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_147000scr_1470006988" className="ty-price-num">9.50</span></bdi></span>
                                        {/*price_update_147000scr_1470006988*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/nail-arts-and-brushes/colors-and-powders/lechat/lechat-cm-nail-art-gold-0.33oz/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/6/na09-lechat-cm-nail-art-gold4.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_147000scr_1470002498" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[2498][product_id]" defaultValue={2498} />
                                  <div className="ty-product-labels ty-product-labels--top-right   cm-reload-147000scr_1470002498" id="product_labels_update_147000scr_1470002498">
                                    <div className="ty-product-labels__item   ty-product-labels__item--discount">
                                      <div className="ty-product-labels__content">Save <em>45%</em></div>
                                    </div>
                                    {/*product_labels_update_147000scr_1470002498*/}</div>
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/nail-arts-and-brushes/colors-and-powders/lechat/lechat-cm-nail-art-gold-0.33oz/" className="product-title" title="LeChat CM Nail Art - Gold 0.33oz">LeChat CM Nail Art - Gold 0.33oz</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col pr-color">
                                    <div>
                                      <span className="cm-reload-147000scr_1470002498" id="old_price_update_147000scr_1470002498">
                                        <span className="ty-list-price ty-nowrap" id="line_list_price_147000scr_1470002498"><span className="ty-strike"><bdi><span className="ty-list-price ty-nowrap">$</span><span id="sec_list_price_147000scr_1470002498" className="ty-list-price ty-nowrap">5.00</span></bdi></span></span>
                                        {/*old_price_update_147000scr_1470002498*/}</span>
                                      <span className="cm-reload-147000scr_1470002498 ty-price-update" id="price_update_147000scr_1470002498">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_147000scr_1470002498"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_147000scr_1470002498" className="ty-price-num">2.75</span></bdi></span>
                                        {/*price_update_147000scr_1470002498*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/gel-soak-off/base-and-top-coats/base-coats/gelish-foundation-base-gel-0.5oz/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/16/gelish-soak-off-foundation.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_147000scr_147000696" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[696][product_id]" defaultValue={696} />
                                  <div className="ty-product-labels ty-product-labels--top-right   cm-reload-147000scr_147000696" id="product_labels_update_147000scr_147000696">
                                    <div className="ty-product-labels__item   ty-product-labels__item--discount">
                                      <div className="ty-product-labels__content">Save <em>38%</em></div>
                                    </div>
                                    {/*product_labels_update_147000scr_147000696*/}</div>
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/gel-soak-off/base-and-top-coats/base-coats/gelish-foundation-base-gel-0.5oz/" className="product-title" title="Gelish - Foundation Base Gel 0.5oz">Gelish - Foundation Base Gel 0.5oz</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col pr-color">
                                    <div>
                                      <span className="cm-reload-147000scr_147000696" id="old_price_update_147000scr_147000696">
                                        <span className="ty-list-price ty-nowrap" id="line_list_price_147000scr_147000696"><span className="ty-strike"><bdi><span className="ty-list-price ty-nowrap">$</span><span id="sec_list_price_147000scr_147000696" className="ty-list-price ty-nowrap">24.95</span></bdi></span></span>
                                        {/*old_price_update_147000scr_147000696*/}</span>
                                      <span className="cm-reload-147000scr_147000696 ty-price-update" id="price_update_147000scr_147000696">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_147000scr_147000696"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_147000scr_147000696" className="ty-price-num">15.50</span></bdi></span>
                                        {/*price_update_147000scr_147000696*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/nail-arts-and-brushes/colors-and-powders/aora/aora-base-gel-0.47oz/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/6/aora-base-gel.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_147000scr_1470002206" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[2206][product_id]" defaultValue={2206} />
                                  <div className="ty-product-labels ty-product-labels--top-right   cm-reload-147000scr_1470002206" id="product_labels_update_147000scr_1470002206">
                                    <div className="ty-product-labels__item   ty-product-labels__item--discount">
                                      <div className="ty-product-labels__content">Save <em>37%</em></div>
                                    </div>
                                    {/*product_labels_update_147000scr_1470002206*/}</div>
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/nail-arts-and-brushes/colors-and-powders/aora/aora-base-gel-0.47oz/" className="product-title" title="Aora - Base Gel 0.47oz">Aora - Base Gel 0.47oz</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col pr-color">
                                    <div>
                                      <span className="cm-reload-147000scr_1470002206" id="old_price_update_147000scr_1470002206">
                                        <span className="ty-list-price ty-nowrap" id="line_list_price_147000scr_1470002206"><span className="ty-strike"><bdi><span className="ty-list-price ty-nowrap">$</span><span id="sec_list_price_147000scr_1470002206" className="ty-list-price ty-nowrap">18.95</span></bdi></span></span>
                                        {/*old_price_update_147000scr_1470002206*/}</span>
                                      <span className="cm-reload-147000scr_1470002206 ty-price-update" id="price_update_147000scr_1470002206">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_147000scr_1470002206"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_147000scr_1470002206" className="ty-price-num">11.95</span></bdi></span>
                                        {/*price_update_147000scr_1470002206*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-ruby-1oz-ca300/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/11/glam-and-glits-ca300-ruby-1oz_2lrv-16.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_147000scr_1470002546" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[2546][product_id]" defaultValue={2546} />
                                  <div className="ty-product-labels ty-product-labels--top-right   cm-reload-147000scr_1470002546" id="product_labels_update_147000scr_1470002546">
                                    <div className="ty-product-labels__item   ty-product-labels__item--discount">
                                      <div className="ty-product-labels__content">Save <em>35%</em></div>
                                    </div>
                                    {/*product_labels_update_147000scr_1470002546*/}</div>
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-ruby-1oz-ca300/" className="product-title" title="Glam and Glits - Color Acrylic Powder - Ruby 1oz CA300">Glam and Glits - Color Acrylic Powder - Ruby 1oz CA300</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col pr-color">
                                    <div>
                                      <span className="cm-reload-147000scr_1470002546" id="old_price_update_147000scr_1470002546">
                                        <span className="ty-list-price ty-nowrap" id="line_list_price_147000scr_1470002546"><span className="ty-strike"><bdi><span className="ty-list-price ty-nowrap">$</span><span id="sec_list_price_147000scr_1470002546" className="ty-list-price ty-nowrap">9.99</span></bdi></span></span>
                                        {/*old_price_update_147000scr_1470002546*/}</span>
                                      <span className="cm-reload-147000scr_1470002546 ty-price-update" id="price_update_147000scr_1470002546">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_147000scr_1470002546"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_147000scr_1470002546" className="ty-price-num">6.50</span></bdi></span>
                                        {/*price_update_147000scr_1470002546*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-leticia-1oz-ca301/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/11/glam-and-glits-ca301-leticia-1oz_mjg9-xa.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_147000scr_1470002547" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[2547][product_id]" defaultValue={2547} />
                                  <div className="ty-product-labels ty-product-labels--top-right   cm-reload-147000scr_1470002547" id="product_labels_update_147000scr_1470002547">
                                    <div className="ty-product-labels__item   ty-product-labels__item--discount">
                                      <div className="ty-product-labels__content">Save <em>35%</em></div>
                                    </div>
                                    {/*product_labels_update_147000scr_1470002547*/}</div>
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-leticia-1oz-ca301/" className="product-title" title="Glam and Glits - Color Acrylic Powder - Leticia 1oz CA301">Glam and Glits - Color Acrylic Powder - Leticia 1oz CA301</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col pr-color">
                                    <div>
                                      <span className="cm-reload-147000scr_1470002547" id="old_price_update_147000scr_1470002547">
                                        <span className="ty-list-price ty-nowrap" id="line_list_price_147000scr_1470002547"><span className="ty-strike"><bdi><span className="ty-list-price ty-nowrap">$</span><span id="sec_list_price_147000scr_1470002547" className="ty-list-price ty-nowrap">9.99</span></bdi></span></span>
                                        {/*old_price_update_147000scr_1470002547*/}</span>
                                      <span className="cm-reload-147000scr_1470002547 ty-price-update" id="price_update_147000scr_1470002547">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_147000scr_1470002547"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_147000scr_1470002547" className="ty-price-num">6.50</span></bdi></span>
                                        {/*price_update_147000scr_1470002547*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-kimberly-1oz-ca302/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/11/glam-and-glits-ca302-kimberly-1oz_ndyg-ml.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_147000scr_1470002548" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[2548][product_id]" defaultValue={2548} />
                                  <div className="ty-product-labels ty-product-labels--top-right   cm-reload-147000scr_1470002548" id="product_labels_update_147000scr_1470002548">
                                    <div className="ty-product-labels__item   ty-product-labels__item--discount">
                                      <div className="ty-product-labels__content">Save <em>35%</em></div>
                                    </div>
                                    {/*product_labels_update_147000scr_1470002548*/}</div>
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-kimberly-1oz-ca302/" className="product-title" title="Glam and Glits - Color Acrylic Powder - Kimberly 1oz CA302">Glam and Glits - Color Acrylic Powder - Kimberly 1oz CA302</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col pr-color">
                                    <div>
                                      <span className="cm-reload-147000scr_1470002548" id="old_price_update_147000scr_1470002548">
                                        <span className="ty-list-price ty-nowrap" id="line_list_price_147000scr_1470002548"><span className="ty-strike"><bdi><span className="ty-list-price ty-nowrap">$</span><span id="sec_list_price_147000scr_1470002548" className="ty-list-price ty-nowrap">9.99</span></bdi></span></span>
                                        {/*old_price_update_147000scr_1470002548*/}</span>
                                      <span className="cm-reload-147000scr_1470002548 ty-price-update" id="price_update_147000scr_1470002548">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_147000scr_1470002548"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_147000scr_1470002548" className="ty-price-num">6.50</span></bdi></span>
                                        {/*price_update_147000scr_1470002548*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-melissa-1oz-ca303/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/11/glam-and-glits-ca303-melissa-1oz_u67b-xz.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_147000scr_1470002549" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[2549][product_id]" defaultValue={2549} />
                                  <div className="ty-product-labels ty-product-labels--top-right   cm-reload-147000scr_1470002549" id="product_labels_update_147000scr_1470002549">
                                    <div className="ty-product-labels__item   ty-product-labels__item--discount">
                                      <div className="ty-product-labels__content">Save <em>35%</em></div>
                                    </div>
                                    {/*product_labels_update_147000scr_1470002549*/}</div>
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-melissa-1oz-ca303/" className="product-title" title="Glam and Glits - Color Acrylic Powder - Melissa 1oz CA303">Glam and Glits - Color Acrylic Powder - Melissa 1oz CA303</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col pr-color">
                                    <div>
                                      <span className="cm-reload-147000scr_1470002549" id="old_price_update_147000scr_1470002549">
                                        <span className="ty-list-price ty-nowrap" id="line_list_price_147000scr_1470002549"><span className="ty-strike"><bdi><span className="ty-list-price ty-nowrap">$</span><span id="sec_list_price_147000scr_1470002549" className="ty-list-price ty-nowrap">9.99</span></bdi></span></span>
                                        {/*old_price_update_147000scr_1470002549*/}</span>
                                      <span className="cm-reload-147000scr_1470002549 ty-price-update" id="price_update_147000scr_1470002549">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_147000scr_1470002549"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_147000scr_1470002549" className="ty-price-num">6.50</span></bdi></span>
                                        {/*price_update_147000scr_1470002549*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-gabrielle-1oz-ca304/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/11/glam-and-glits-ca304-gabrielle-1oz.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_147000scr_1470002550" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[2550][product_id]" defaultValue={2550} />
                                  <div className="ty-product-labels ty-product-labels--top-right   cm-reload-147000scr_1470002550" id="product_labels_update_147000scr_1470002550">
                                    <div className="ty-product-labels__item   ty-product-labels__item--discount">
                                      <div className="ty-product-labels__content">Save <em>35%</em></div>
                                    </div>
                                    {/*product_labels_update_147000scr_1470002550*/}</div>
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-gabrielle-1oz-ca304/" className="product-title" title="Glam and Glits - Color Acrylic Powder - Gabrielle 1oz CA304">Glam and Glits - Color Acrylic Powder - Gabrielle 1oz CA304</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col pr-color">
                                    <div>
                                      <span className="cm-reload-147000scr_1470002550" id="old_price_update_147000scr_1470002550">
                                        <span className="ty-list-price ty-nowrap" id="line_list_price_147000scr_1470002550"><span className="ty-strike"><bdi><span className="ty-list-price ty-nowrap">$</span><span id="sec_list_price_147000scr_1470002550" className="ty-list-price ty-nowrap">9.99</span></bdi></span></span>
                                        {/*old_price_update_147000scr_1470002550*/}</span>
                                      <span className="cm-reload-147000scr_1470002550 ty-price-update" id="price_update_147000scr_1470002550">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_147000scr_1470002550"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_147000scr_1470002550" className="ty-price-num">6.50</span></bdi></span>
                                        {/*price_update_147000scr_1470002550*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-teresa-1oz-ca305/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/11/glam-and-glits-ca305-teresa-1oz.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_147000scr_1470002551" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[2551][product_id]" defaultValue={2551} />
                                  <div className="ty-product-labels ty-product-labels--top-right   cm-reload-147000scr_1470002551" id="product_labels_update_147000scr_1470002551">
                                    <div className="ty-product-labels__item   ty-product-labels__item--discount">
                                      <div className="ty-product-labels__content">Save <em>35%</em></div>
                                    </div>
                                    {/*product_labels_update_147000scr_1470002551*/}</div>
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-teresa-1oz-ca305/" className="product-title" title="Glam and Glits - Color Acrylic Powder - Teresa 1oz CA305">Glam and Glits - Color Acrylic Powder - Teresa 1oz CA305</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col pr-color">
                                    <div>
                                      <span className="cm-reload-147000scr_1470002551" id="old_price_update_147000scr_1470002551">
                                        <span className="ty-list-price ty-nowrap" id="line_list_price_147000scr_1470002551"><span className="ty-strike"><bdi><span className="ty-list-price ty-nowrap">$</span><span id="sec_list_price_147000scr_1470002551" className="ty-list-price ty-nowrap">9.99</span></bdi></span></span>
                                        {/*old_price_update_147000scr_1470002551*/}</span>
                                      <span className="cm-reload-147000scr_1470002551 ty-price-update" id="price_update_147000scr_1470002551">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_147000scr_1470002551"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_147000scr_1470002551" className="ty-price-num">6.50</span></bdi></span>
                                        {/*price_update_147000scr_1470002551*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-angel-1oz-ca306/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/11/glam-and-glits-ca306-angel-1oz.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_147000scr_1470002552" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[2552][product_id]" defaultValue={2552} />
                                  <div className="ty-product-labels ty-product-labels--top-right   cm-reload-147000scr_1470002552" id="product_labels_update_147000scr_1470002552">
                                    <div className="ty-product-labels__item   ty-product-labels__item--discount">
                                      <div className="ty-product-labels__content">Save <em>35%</em></div>
                                    </div>
                                    {/*product_labels_update_147000scr_1470002552*/}</div>
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-angel-1oz-ca306/" className="product-title" title="Glam and Glits - Color Acrylic Powder - Angel 1oz CA306">Glam and Glits - Color Acrylic Powder - Angel 1oz CA306</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col pr-color">
                                    <div>
                                      <span className="cm-reload-147000scr_1470002552" id="old_price_update_147000scr_1470002552">
                                        <span className="ty-list-price ty-nowrap" id="line_list_price_147000scr_1470002552"><span className="ty-strike"><bdi><span className="ty-list-price ty-nowrap">$</span><span id="sec_list_price_147000scr_1470002552" className="ty-list-price ty-nowrap">9.99</span></bdi></span></span>
                                        {/*old_price_update_147000scr_1470002552*/}</span>
                                      <span className="cm-reload-147000scr_1470002552 ty-price-update" id="price_update_147000scr_1470002552">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_147000scr_1470002552"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_147000scr_1470002552" className="ty-price-num">6.50</span></bdi></span>
                                        {/*price_update_147000scr_1470002552*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-jennifer-1oz-ca307/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/11/glam-and-glits-ca307-jennifer-1oz.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_147000scr_1470002553" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[2553][product_id]" defaultValue={2553} />
                                  <div className="ty-product-labels ty-product-labels--top-right   cm-reload-147000scr_1470002553" id="product_labels_update_147000scr_1470002553">
                                    <div className="ty-product-labels__item   ty-product-labels__item--discount">
                                      <div className="ty-product-labels__content">Save <em>35%</em></div>
                                    </div>
                                    {/*product_labels_update_147000scr_1470002553*/}</div>
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars">
                                      <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-jennifer-1oz-ca307/?selected_section=discussion#discussion">
                                        <i className="ty-stars__icon ty-icon-star" />
                                        <i className="ty-stars__icon ty-icon-star" />
                                        <i className="ty-stars__icon ty-icon-star" />
                                        <i className="ty-stars__icon ty-icon-star" />
                                        <i className="ty-stars__icon ty-icon-star" />
                                        <span className="cn-comments">(1)</span>
                                      </a>
                                    </span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-jennifer-1oz-ca307/" className="product-title" title="Glam and Glits - Color Acrylic Powder - Jennifer 1oz CA307">Glam and Glits - Color Acrylic Powder - Jennifer 1oz CA307</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col pr-color">
                                    <div>
                                      <span className="cm-reload-147000scr_1470002553" id="old_price_update_147000scr_1470002553">
                                        <span className="ty-list-price ty-nowrap" id="line_list_price_147000scr_1470002553"><span className="ty-strike"><bdi><span className="ty-list-price ty-nowrap">$</span><span id="sec_list_price_147000scr_1470002553" className="ty-list-price ty-nowrap">9.99</span></bdi></span></span>
                                        {/*old_price_update_147000scr_1470002553*/}</span>
                                      <span className="cm-reload-147000scr_1470002553 ty-price-update" id="price_update_147000scr_1470002553">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_147000scr_1470002553"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_147000scr_1470002553" className="ty-price-num">6.50</span></bdi></span>
                                        {/*price_update_147000scr_1470002553*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-michelle-1oz-ca308/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/11/glam-and-glits-ca308-michelle-1oz.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_147000scr_1470002554" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[2554][product_id]" defaultValue={2554} />
                                  <div className="ty-product-labels ty-product-labels--top-right   cm-reload-147000scr_1470002554" id="product_labels_update_147000scr_1470002554">
                                    <div className="ty-product-labels__item   ty-product-labels__item--discount">
                                      <div className="ty-product-labels__content">Save <em>35%</em></div>
                                    </div>
                                    {/*product_labels_update_147000scr_1470002554*/}</div>
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-michelle-1oz-ca308/" className="product-title" title="Glam and Glits - Color Acrylic Powder - Michelle 1oz CA308">Glam and Glits - Color Acrylic Powder - Michelle 1oz CA308</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col pr-color">
                                    <div>
                                      <span className="cm-reload-147000scr_1470002554" id="old_price_update_147000scr_1470002554">
                                        <span className="ty-list-price ty-nowrap" id="line_list_price_147000scr_1470002554"><span className="ty-strike"><bdi><span className="ty-list-price ty-nowrap">$</span><span id="sec_list_price_147000scr_1470002554" className="ty-list-price ty-nowrap">9.99</span></bdi></span></span>
                                        {/*old_price_update_147000scr_1470002554*/}</span>
                                      <span className="cm-reload-147000scr_1470002554 ty-price-update" id="price_update_147000scr_1470002554">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_147000scr_1470002554"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_147000scr_1470002554" className="ty-price-num">6.50</span></bdi></span>
                                        {/*price_update_147000scr_1470002554*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-vanessa-1oz-ca309/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/11/glam-and-glits-ca309-vanessa-1oz.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_147000scr_1470002555" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[2555][product_id]" defaultValue={2555} />
                                  <div className="ty-product-labels ty-product-labels--top-right   cm-reload-147000scr_1470002555" id="product_labels_update_147000scr_1470002555">
                                    <div className="ty-product-labels__item   ty-product-labels__item--discount">
                                      <div className="ty-product-labels__content">Save <em>35%</em></div>
                                    </div>
                                    {/*product_labels_update_147000scr_1470002555*/}</div>
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-vanessa-1oz-ca309/" className="product-title" title="Glam and Glits - Color Acrylic Powder - Vanessa 1oz CA309">Glam and Glits - Color Acrylic Powder - Vanessa 1oz CA309</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col pr-color">
                                    <div>
                                      <span className="cm-reload-147000scr_1470002555" id="old_price_update_147000scr_1470002555">
                                        <span className="ty-list-price ty-nowrap" id="line_list_price_147000scr_1470002555"><span className="ty-strike"><bdi><span className="ty-list-price ty-nowrap">$</span><span id="sec_list_price_147000scr_1470002555" className="ty-list-price ty-nowrap">9.99</span></bdi></span></span>
                                        {/*old_price_update_147000scr_1470002555*/}</span>
                                      <span className="cm-reload-147000scr_1470002555 ty-price-update" id="price_update_147000scr_1470002555">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_147000scr_1470002555"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_147000scr_1470002555" className="ty-price-num">6.50</span></bdi></span>
                                        {/*price_update_147000scr_1470002555*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-veronique-1oz-ca310/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/11/glam-and-glits-ca310-veronique-1oz.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_147000scr_1470002556" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[2556][product_id]" defaultValue={2556} />
                                  <div className="ty-product-labels ty-product-labels--top-right   cm-reload-147000scr_1470002556" id="product_labels_update_147000scr_1470002556">
                                    <div className="ty-product-labels__item   ty-product-labels__item--discount">
                                      <div className="ty-product-labels__content">Save <em>35%</em></div>
                                    </div>
                                    {/*product_labels_update_147000scr_1470002556*/}</div>
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-veronique-1oz-ca310/" className="product-title" title="Glam and Glits - Color Acrylic Powder - Veronique 1oz CA310">Glam and Glits - Color Acrylic Powder - Veronique 1oz CA310</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col pr-color">
                                    <div>
                                      <span className="cm-reload-147000scr_1470002556" id="old_price_update_147000scr_1470002556">
                                        <span className="ty-list-price ty-nowrap" id="line_list_price_147000scr_1470002556"><span className="ty-strike"><bdi><span className="ty-list-price ty-nowrap">$</span><span id="sec_list_price_147000scr_1470002556" className="ty-list-price ty-nowrap">9.99</span></bdi></span></span>
                                        {/*old_price_update_147000scr_1470002556*/}</span>
                                      <span className="cm-reload-147000scr_1470002556 ty-price-update" id="price_update_147000scr_1470002556">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_147000scr_1470002556"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_147000scr_1470002556" className="ty-price-num">6.50</span></bdi></span>
                                        {/*price_update_147000scr_1470002556*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-karen-1oz-ca311/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/11/glam-and-glits-ca311-karen-1oz.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_147000scr_1470002557" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[2557][product_id]" defaultValue={2557} />
                                  <div className="ty-product-labels ty-product-labels--top-right   cm-reload-147000scr_1470002557" id="product_labels_update_147000scr_1470002557">
                                    <div className="ty-product-labels__item   ty-product-labels__item--discount">
                                      <div className="ty-product-labels__content">Save <em>35%</em></div>
                                    </div>
                                    {/*product_labels_update_147000scr_1470002557*/}</div>
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars">
                                      <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-karen-1oz-ca311/?selected_section=discussion#discussion">
                                        <i className="ty-stars__icon ty-icon-star" />
                                        <i className="ty-stars__icon ty-icon-star" />
                                        <i className="ty-stars__icon ty-icon-star" />
                                        <i className="ty-stars__icon ty-icon-star" />
                                        <i className="ty-stars__icon ty-icon-star" />
                                        <span className="cn-comments">(1)</span>
                                      </a>
                                    </span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-karen-1oz-ca311/" className="product-title" title="Glam and Glits - Color Acrylic Powder - Karen 1oz CA311">Glam and Glits - Color Acrylic Powder - Karen 1oz CA311</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col pr-color">
                                    <div>
                                      <span className="cm-reload-147000scr_1470002557" id="old_price_update_147000scr_1470002557">
                                        <span className="ty-list-price ty-nowrap" id="line_list_price_147000scr_1470002557"><span className="ty-strike"><bdi><span className="ty-list-price ty-nowrap">$</span><span id="sec_list_price_147000scr_1470002557" className="ty-list-price ty-nowrap">9.99</span></bdi></span></span>
                                        {/*old_price_update_147000scr_1470002557*/}</span>
                                      <span className="cm-reload-147000scr_1470002557 ty-price-update" id="price_update_147000scr_1470002557">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_147000scr_1470002557"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_147000scr_1470002557" className="ty-price-num">6.50</span></bdi></span>
                                        {/*price_update_147000scr_1470002557*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-kaylah-1oz-ca312/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/11/glam-and-glits-ca312-kaylah-1oz.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_147000scr_1470002558" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[2558][product_id]" defaultValue={2558} />
                                  <div className="ty-product-labels ty-product-labels--top-right   cm-reload-147000scr_1470002558" id="product_labels_update_147000scr_1470002558">
                                    <div className="ty-product-labels__item   ty-product-labels__item--discount">
                                      <div className="ty-product-labels__content">Save <em>35%</em></div>
                                    </div>
                                    {/*product_labels_update_147000scr_1470002558*/}</div>
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-kaylah-1oz-ca312/" className="product-title" title="Glam and Glits - Color Acrylic Powder - Kaylah 1oz CA312">Glam and Glits - Color Acrylic Powder - Kaylah 1oz CA312</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col pr-color">
                                    <div>
                                      <span className="cm-reload-147000scr_1470002558" id="old_price_update_147000scr_1470002558">
                                        <span className="ty-list-price ty-nowrap" id="line_list_price_147000scr_1470002558"><span className="ty-strike"><bdi><span className="ty-list-price ty-nowrap">$</span><span id="sec_list_price_147000scr_1470002558" className="ty-list-price ty-nowrap">9.99</span></bdi></span></span>
                                        {/*old_price_update_147000scr_1470002558*/}</span>
                                      <span className="cm-reload-147000scr_1470002558 ty-price-update" id="price_update_147000scr_1470002558">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_147000scr_1470002558"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_147000scr_1470002558" className="ty-price-num">6.50</span></bdi></span>
                                        {/*price_update_147000scr_1470002558*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-joyce-1oz-ca313/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/11/glam-and-glits-ca313-joyce-1oz.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_147000scr_1470002559" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[2559][product_id]" defaultValue={2559} />
                                  <div className="ty-product-labels ty-product-labels--top-right   cm-reload-147000scr_1470002559" id="product_labels_update_147000scr_1470002559">
                                    <div className="ty-product-labels__item   ty-product-labels__item--discount">
                                      <div className="ty-product-labels__content">Save <em>35%</em></div>
                                    </div>
                                    {/*product_labels_update_147000scr_1470002559*/}</div>
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-joyce-1oz-ca313/" className="product-title" title="Glam and Glits - Color Acrylic Powder - Joyce 1oz CA313">Glam and Glits - Color Acrylic Powder - Joyce 1oz CA313</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col pr-color">
                                    <div>
                                      <span className="cm-reload-147000scr_1470002559" id="old_price_update_147000scr_1470002559">
                                        <span className="ty-list-price ty-nowrap" id="line_list_price_147000scr_1470002559"><span className="ty-strike"><bdi><span className="ty-list-price ty-nowrap">$</span><span id="sec_list_price_147000scr_1470002559" className="ty-list-price ty-nowrap">9.99</span></bdi></span></span>
                                        {/*old_price_update_147000scr_1470002559*/}</span>
                                      <span className="cm-reload-147000scr_1470002559 ty-price-update" id="price_update_147000scr_1470002559">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_147000scr_1470002559"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_147000scr_1470002559" className="ty-price-num">6.50</span></bdi></span>
                                        {/*price_update_147000scr_1470002559*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                          <div className="ty-scroller-list__item">
                            <div className="ty-scroller-list__img-block">
                              <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-ashley-1oz-ca314/"><img className="ty-pict   lazyOwl cm-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/thumbnails/200/200/detailed/11/glam-and-glits-ca314-ashley-1oz.jpg" alt="" title />
                              </a>
                            </div>
                            <div className="ty-scroller-list__description">
                              <div className="ty-simple-list clearfix">
                                <form action="https://www.happynailsupply.com/" method="post" name="product_form_147000scr_1470002560" encType="multipart/form-data" className="cm-disable-empty-files  cm-ajax cm-ajax-full-render cm-ajax-status-middle ">
                                  <input type="hidden" name="result_ids" defaultValue="cart_status*,wish_list*,checkout*,account_info*,abt__ut2_wishlist_count" />
                                  <input type="hidden" name="redirect_url" defaultValue="index.php" />
                                  <input type="hidden" name="product_data[2560][product_id]" defaultValue={2560} />
                                  <div className="ty-product-labels ty-product-labels--top-right   cm-reload-147000scr_1470002560" id="product_labels_update_147000scr_1470002560">
                                    <div className="ty-product-labels__item   ty-product-labels__item--discount">
                                      <div className="ty-product-labels__content">Save <em>35%</em></div>
                                    </div>
                                    {/*product_labels_update_147000scr_1470002560*/}</div>
                                  <div className="ty-simple-list__rating no-rating">
                                    <span className="ty-nowrap ty-stars"><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /><i className="ty-icon-star-empty" /></span>
                                  </div>
                                  <bdi>
                                    <a href="https://www.happynailsupply.com/acrylics/powders/glam-and-glits/color-acrylic/glam-and-glits-color-acrylic-powder-ashley-1oz-ca314/" className="product-title" title="Glam and Glits - Color Acrylic Powder - Ashley 1oz CA314">Glam and Glits - Color Acrylic Powder - Ashley 1oz CA314</a>    
                                  </bdi>
                                  <div className="ty-simple-list__price pr-col pr-color">
                                    <div>
                                      <span className="cm-reload-147000scr_1470002560" id="old_price_update_147000scr_1470002560">
                                        <span className="ty-list-price ty-nowrap" id="line_list_price_147000scr_1470002560"><span className="ty-strike"><bdi><span className="ty-list-price ty-nowrap">$</span><span id="sec_list_price_147000scr_1470002560" className="ty-list-price ty-nowrap">9.99</span></bdi></span></span>
                                        {/*old_price_update_147000scr_1470002560*/}</span>
                                      <span className="cm-reload-147000scr_1470002560 ty-price-update" id="price_update_147000scr_1470002560">
                                        <input type="hidden" name="appearance[show_price_values]" defaultValue={1} />
                                        <input type="hidden" name="appearance[show_price]" defaultValue={1} />
                                        <span className="ty-price" id="line_discounted_price_147000scr_1470002560"><bdi><span className="ty-price-num">$</span><span id="sec_discounted_price_147000scr_1470002560" className="ty-price-num">6.50</span></bdi></span>
                                        {/*price_update_147000scr_1470002560*/}</span>
                                    </div>
                                  </div>
                                  <input type="hidden" name="security_hash" className="cm-no-hide-input" defaultValue="9015f7214ad6c5db7036646ea0b626ad" /></form>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Inline script moved to the bottom of the page */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid-row">
            <div className="row-fluid ">        <div className="span16 hp-shopby ut2-bottom">
                <div className="row-fluid ">        <div className="span8  ">
                    <div className="ty-banner__image-wrapper">
                      <a href="/nail-polishes/">        <img className="ty-pict   lazyOwl cm-image" id="det_img_359700145" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/promo/15/shop_nail_polishes_860x480.jpg" alt="" title />
                      </a>  </div>
                  </div>
                  <div className="span8  ">
                    <div className="ty-banner__image-wrapper">
                      <a href="/gel-soak-off/">        <img className="ty-pict   lazyOwl cm-image" id="det_img_1357298002" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.happynailsupply.com/images/promo/15/shop_gel_polishes.jpg" alt="" title />
                      </a>  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      {/*tygh_main_container*/}</div>
    {/*tygh_container*/}</div>

    </>
  );
};

export default Home;
