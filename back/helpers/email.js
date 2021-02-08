exports.registerEmailParams = (name, email, token) => {
  return {
    Source: process.env.EMAIL_FROM,
    Destination: {
      ToAddresses: [email],
    },
    ReplyToAddresses: [process.env.EMAIL_FROM],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `
                      <html>
                        
                          <p>Hello, <b>${name}</b>. Thank you for registering with us!</p>
                          
                          <p>Before shopping with us, you should complete one more step.To activate your account, please click on the link below to complete your registration:</p>
                          
                          <h3><a href = '${process.env.CLIENT_URL}/auth/activate/${token}'>ACTIVATE MY ACCOUNT</a></h3>
                         
                          <p>Attention! This link above will only last within 3 days. After that time, you have to register again. Please visit https://abcnailsupply.com/register</p>
                          
                          
                          <p>Thanks,</p>
                          <p>The IT Team</p>
                          
                          <p>
                          © ABC Nails Supply</p>
                      </html>
                  `,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "[AbcNailSupply] Complete your registration",
      },
    },
  };
};

exports.activateSuccessEmailParams = (name, email) => {
  return {
    Source: process.env.EMAIL_FROM,
    Destination: {
      ToAddresses: [email],
    },
    ReplyToAddresses: [process.env.EMAIL_FROM],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `
                        <html>
                            <h1>NOW YOU BECOME A PART OF OUR FAMILY</h1>
                            <br>
                            <p>Hello, ${name}. Thank you for registering with us.</p>
                            <br>
                            <a href="http://localhost:3000/">Let's shopping with us now </a>
                            <br>
                                                      
                            <br>
                            <p>
                            © ABC Nails Supply</p>
                        </html>
                    `,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Congratulation! You registered successfully",
      },
    },
  };
};

exports.forgotPasswordEmailParams = (email, token) => {
  return {
    Source: process.env.EMAIL_FROM,
    Destination: {
      ToAddresses: [email],
    },
    ReplyToAddresses: [process.env.EMAIL_FROM],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `
                      <html>
                          <h1>Reset Password Link</h1>
                          <p>Please use the following link to reset your password:</p>
                          <a href='${process.env.CLIENT_URL}/auth/password/reset/${token}'>RESET YOUR PASSWORD</a>
                      </html>
                  `,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Password reset link",
      },
    },
  };
};

exports.linkPublishedParams = (email, data) => {
  return {
    Source: process.env.EMAIL_FROM,
    Destination: {
      ToAddresses: [email],
    },
    ReplyToAddresses: [process.env.EMAIL_FROM],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `
                      <html>
                          <h1>New link published | reactnodeaws.com</h1>
                          <p>A new link titled <b>${
                            data.title
                          }</b> has been just publihsed in the following categories.</p>
                          
                          ${data.categories
                            .map((c) => {
                              return `
                                  <div>
                                      <h2>${c.name}</h2>
                                      <img src="${c.image.url}" alt="${c.name}" style="height:50px;" />
                                      <h3><a href="${process.env.CLIENT_URL}/links/${c.slug}">Check it out!</a></h3>
                                  </div>
                              `;
                            })
                            .join("-----------------------")}

                          <br />

                          <p>Do not wish to receive notifications?</p>
                          <p>Turn off notification by going to your <b>dashboard</b> > <b>update profile</b> and <b>uncheck the categories</b></p>
                          <p>${process.env.CLIENT_URL}/user/profile/update</p>

                      </html>
                  `,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "New link published",
      },
    },
  };
};

exports.orderPlaceEmail = (name, email, order) => {
  return {
    Source: process.env.EMAIL_FROM,
    Destination: {
      ToAddresses: [email],
    },
    ReplyToAddresses: [process.env.EMAIL_FROM],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `
                        <html>
                          
                        <table class="yiv2728002363main-wrapper" cellpadding="0" cellspacing="0" width="100%" bgcolor="#eeeeee" style="border-collapse:collapse;background-color:#eeeeee;" dir="ltr">
                        <tbody>
                           <tr>
                              <td style="border-collapse:collapse;padding:40px 10px 40px 10px;">
                                 <table class="yiv2728002363content-wrapper" cellpadding="0" cellspacing="0" align="center" width="600" style="border-collapse:collapse;background-color:#ffffff;border:1px solid #eeeeee;">
                                    <tbody>
                                       <tr class="yiv2728002363message-header">
                                          <td style="border-collapse:collapse;padding:10px 30px 20px 30px;color:#333333;font-family:Arial, Helvetica, sans-serif, Helvetica, Arial, sans-serif;font-size:13px;">
                                             <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
                                                <tbody>
                                                   <tr>
                                                      <td style="border-collapse:collapse;color:#333333;font-family:Arial, Helvetica, sans-serif, Helvetica, Arial, sans-serif;font-size:13px;">
                                                         <a rel="nofollow noopener noreferrer" style="outline:none;color:#bf3060;">
                                                            <div class="img-preview-wrapper">
                                                               <img src="https://res.cloudinary.com/dtopnho1y/image/upload/v1612590792/abc-nails-supply/logo_dohbv0.png" alt="ABC Nail Supply" width="374" height="160" style="outline:none;text-decoration:none;border:none;" class="preview">
                                                              
                                                            </div>
                                                         </a>
                                                      </td>
                                                   </tr>
                                                </tbody>
                                             </table>
                                          </td>
                                       </tr>
                                       <tr class="yiv2728002363message-header__title" style="background-color:#bf3060;">
                                          <td style="border-collapse:collapse;padding:20px 30px;">
                                             <h1 style="color:#Fff;font-size:20px;font-weight:400;text-transform:uppercase;">Your Order #${
                                               order.trackId
                                             } has been placed</h1>
                                          </td>
                                       </tr>
                                       <tr class="yiv2728002363message-body">
                                          <td style="border-collapse:collapse;padding:30px;color:#333333;font-family:Arial, Helvetica, sans-serif, Helvetica, Arial, sans-serif;font-size:13px;">
                                             Hello <b>${name}</b>, <br>
                                             We have received your order and will prepare it soon.
                                             <br><br>
                                             <table width="600" style="border-collapse:separate;font-family:Helvetica, Arial, sans-serif;" cellspacing="0" cellpadding="0" border="0">
                                                <tbody>
                                                   <tr style="vertical-align:top;">
                                                      <td style="border-collapse:collapse;color:#333333;font-family:Arial, Helvetica, sans-serif, Helvetica, Arial, sans-serif;font-size:13px;padding:5px;">
                                                         <table cellspacing="0" border="0" style="border-collapse:separate;font-family:Helvetica, Arial, sans-serif;">
                                                            <tbody>
                                                               <tr>
                                                                  <td width="50%" style="border-collapse:collapse;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;padding:0px;padding-bottom:10px;padding-right:40px;vertical-align:top;">
                                                                     <h2 style="color:#444444;margin:0px;font-size:22px;font-family:Helvetica, Arial, sans-serif;text-transform:uppercase;margin-bottom:15px;line-height:1.5em;">Ship to</h2>
                                                                     <p style="margin:0px;font-size:14px;font-family:Helvetica, Arial, sans-serif;padding-bottom:5px;">
                                                                        <strong>${name}</strong>
                                                                     </p>
                                                                     <p style="margin:0px;font-size:14px;font-family:Helvetica, Arial, sans-serif;padding-bottom:5px;">
                                                                        123 Abc Dr <br>
                                                                     </p>
                                                                     <p style="margin:0px;font-size:14px;font-family:Helvetica, Arial, sans-serif;padding-bottom:5px;">
                                                                        Morrow,&nbsp;Georgia&nbsp;30260
                                                                     </p>
                                                                     <p style="margin:0px;font-size:14px;font-family:Helvetica, Arial, sans-serif;padding-bottom:5px;">
                                                                        United States
                                                                     </p>
                                                                     <p style="margin:0px;font-size:14px;font-family:Helvetica, Arial, sans-serif;padding-bottom:5px;">
                                                                        4049881923
                                                                     </p>
                                                                  </td>
                                                                  <td width="50%" style="border-collapse:collapse;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;padding:0px;padding-bottom:10px;padding-left:40px;vertical-align:top;">
                                                                     <p style="margin:0px;color:#787878;font-size:14px;font-family:Helvetica, Arial, sans-serif;padding-bottom:5px;">
                                                                        <span style="color:#444444;font-weight:600;font-family:Helvetica, Arial, sans-serif;text-transform:uppercase;">Order date: </span>01/19/2021, 11:45 PM
                                                                     </p>
                                                                     <p style="margin:0px;color:#787878;font-size:14px;font-family:Helvetica, Arial, sans-serif;padding-bottom:5px;">
                                                                        <span style="color:#444444;font-weight:600;font-family:Helvetica, Arial, sans-serif;text-transform:uppercase;">Payment: </span>Credit Card
                                                                     </p>
                                                                     <p style="margin:0px;color:#787878;font-size:14px;font-family:Helvetica, Arial, sans-serif;padding-bottom:5px;">
                                                                        <span style="color:#444444;font-weight:600;font-family:Helvetica, Arial, sans-serif;text-transform:uppercase;">Shipping: </span>Flat Rate Shipping
                                                                     </p>
                                                                  </td>
                                                               </tr>
                                                            </tbody>
                                                         </table>
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td style="border-collapse:collapse;color:#333333;font-family:Arial, Helvetica, sans-serif, Helvetica, Arial, sans-serif;font-size:13px;padding:0px;">
                                                         <table width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:separate;border-top:3px solid #444;color:#444;font-family:Helvetica, Arial, sans-serif;">
                                                            <tbody>
                                                               <tr style="font-size:12px;font-family:Helvetica, Arial, sans-serif;font-weight:600;text-transform:uppercase;text-align:center;">
                                                                  <td style="border-collapse:collapse;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;padding:10px;">Item description</td>
                                                                  <td style="border-collapse:collapse;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;padding:10px;">Qty</td>
                                                                  <td style="border-collapse:collapse;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;padding:10px;">Price</td>
                                                                  <td style="border-collapse:collapse;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;padding:10px;">Item total</td>
                                                               </tr>
                                                               ${order.products.map(
                                                                 (p) => {
                                                                   return `<>
                                                                   <tr style="font-size:14px;font-family:Helvetica, Arial, sans-serif;font-weight:400;text-transform:uppercase;text-align:center;">
                                                                   <td style="border-collapse:collapse;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;padding:10px 0px;border-bottom:1px solid #ebebeb;">
                                                                      <table style="border-collapse:collapse;">
                                                                         <tbody>
                                                                            <tr>
                                                                               <td rowspan="2" style="border-collapse:collapse;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;padding:5px;padding-right:20px;"><img src="https://dl-mail.ymail.com/ws/download/mailboxes/@.id==VjN-0WAHTcv_T0x7XCNhjmbEF2O4DBHwww7JOeNjQYcnEWwUNcsn-87WShafxOe2UPQv_tmbZU_QP6bd5QzJLzvu9w/messages/@.id==ACRA200Wxdw0YAnnoQLK2Bn6ciw/content/parts/@.id==3/raw?appid=YMailNorrin&amp;ymreqid=5d1ce3f7-ed04-4821-1c6b-ca0001017100&amp;token=zitEzqOML3j84e6ealFTT5U7-km5qEQF52lp7AcCuBaN7McERv71DMPpuxuDSZohNOn2pF6fCdRJbNJGnJxHnAKppkRtFIovnDAUJbCjvzY6y0cZDZK87O4GU8LnZAz6" width="50" height="50" alt="" title="" style="outline:none;text-decoration:none;"></td>
                                                                               <td style="border-collapse:collapse;color:#333333;font-family:Arial, Helvetica, sans-serif, Helvetica, Arial, sans-serif;font-size:13px;padding:5px;vertical-align:middle;text-align:left;"><span style="font-family:Helvetica, Arial, sans-serif;"><strong style="font-weight:600;"><a rel="nofollow noopener noreferrer" target="_blank" href="https://www.happynailsupply.com/nail-polishes/colors/china-glaze/china-glaze-i-truly-azure-you-0.5oz-1521/" style="outline:none;color:#bf3060;">China Glaze - I Truly Azure You 0.5oz #1521</a></strong></span>
                                                                               </td>
                                                                            </tr>
                                                                            <tr>
                                                                               <td style="border-collapse:collapse;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;padding:5px;vertical-align:top;text-align:left;"><span style="font-size:11px;font-weight:400;font-family:Helvetica, Arial, sans-serif;color:#a8a8a8;">${p._id}<br></span>
                                                                               </td>
                                                                            </tr>
                                                                         </tbody>
                                                                      </table>
                                                                   </td>
                                                                   <td style="border-collapse:collapse;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;padding:10px 0px;border-bottom:1px solid #ebebeb;">
                                                                      <p style="margin:1em 0;text-align:center;font-family:Helvetica, Arial, sans-serif;"><strong style="font-weight:600;">1</strong></p>
                                                                   </td>
                                                                   <td style="border-collapse:collapse;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;padding:10px 0px;border-bottom:1px solid #ebebeb;">
                                                                      <p style="margin:1em 0;text-align:center;font-family:Helvetica, Arial, sans-serif;"><strong style="font-weight:600;">$3.25</strong></p>
                                                                   </td>
                                                                   <td style="border-collapse:collapse;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;padding:10px 0px;border-bottom:1px solid #ebebeb;">
                                                                      <p style="margin:1em 0;text-align:center;font-family:Helvetica, Arial, sans-serif;"><strong style="font-weight:600;">$3.25</strong></p>
                                                                   </td>
                                                                </tr>
                                                                   </>
                                                               `;
                                                                 }
                                                               )}
                                                               
                                                              
                                                              
                                                              
                                                            </tbody>
                                                         </table>
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td style="border-collapse:collapse;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;padding:0px;border-top:2px solid #f5f5f5;padding-top:10px;">
                                                         <table width="100%" style="border-collapse:separate;font-family:Helvetica, Arial, sans-serif;">
                                                            <tbody>

                                                               <tr>
                                                                  <td width="66%" style="border-collapse:collapse;color:#444444;font-family:Helvetica, Arial, sans-serif;font-size:14px;padding:5px;line-height:21px;padding-right:30px;vertical-align:top;">
                                                                  </td>
                                                                  <td width="34%" style="border-collapse:collapse;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;padding:5px;vertical-align:top;">
                                                                     <table style="border-collapse:collapse;font-size:14px;font-family:Helvetica, Arial, sans-serif;color:#444;">
                                                                        <tbody>
                                                                           <tr style="vertical-align:top;font-family:Helvetica, Arial, sans-serif;">
                                                                              <td align="left" style="border-collapse:collapse;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;padding:5px;padding-bottom:20px;">Subtotal
                                                                              </td>
                                                                              <td align="right" style="border-collapse:collapse;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;padding:5px;">$17.44
                                                                              </td>
                                                                           </tr>
                                                                           <tr style="vertical-align:top;">
                                                                              <td align="left" style="border-collapse:collapse;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;padding:5px;padding-bottom:20px;text-transform:uppercase;">Georgia (GA)&nbsp;8%
                                                                              </td>
                                                                              <td align="right" style="border-collapse:collapse;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;padding:5px;">$1.40
                                                                              </td>
                                                                           </tr>
                                                                           <tr style="vertical-align:top;">
                                                                              <td align="left" style="border-collapse:collapse;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;padding:5px;padding-bottom:20px;">Shipping
                                                                              </td>
                                                                              <td align="right" style="border-collapse:collapse;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;padding:5px;">$8.00
                                                                              </td>
                                                                           </tr>
                                                                           <tr style="vertical-align:top;">
                                                                              <td style="border-collapse:collapse;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;padding:5px;padding-bottom:20px;" align="left">Payment surcharge
                                                                              </td>
                                                                              <td style="border-collapse:collapse;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;padding:5px;" align="right">$0.00
                                                                              </td>
                                                                           </tr>
                                                                           <tr style="vertical-align:top;font-family:Helvetica, Arial, sans-serif;">
                                                                              <td align="left" style="border-collapse:collapse;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;padding:5px;">                        </td>
                                                                              <td align="right" style="border-collapse:collapse;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;padding:5px;">                        </td>
                                                                           </tr>
                                                                           <tr style="vertical-align:top;font-family:Helvetica, Arial, sans-serif;">
                                                                              <td align="left" style="border-collapse:collapse;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;padding:5px;">                        </td>
                                                                              <td align="right" style="border-collapse:collapse;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;padding:5px;">                        </td>
                                                                           </tr>
                                                                           <tr style="vertical-align:top;font-family:Helvetica, Arial, sans-serif;">
                                                                              <td align="left" style="border-collapse:collapse;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;padding:5px;">                        </td>
                                                                              <td align="right" style="border-collapse:collapse;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:13px;padding:5px;">                        </td>
                                                                           </tr>
                                                                           <tr style="vertical-align:top;font-size:22px;font-weight:600;font-family:Helvetica, Arial, sans-serif;">
                                                                              <td align="left" style="border-collapse:collapse;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:22px;padding:5px;padding-top:20px;border-top:1px solid #e8e8e8;">Total
                                                                              </td>
                                                                              <td align="right" style="border-collapse:collapse;color:#333333;font-family:Helvetica, Arial, sans-serif;font-size:22px;padding:5px;padding-top:20px;border-top:1px solid #e8e8e8;">$26.84
                                                                              </td>
                                                                           </tr>
                                                                        </tbody>
                                                                     </table>
                                                                  </td>
                                                               </tr>
                                                            </tbody>
                                                         </table>
                                                      </td>
                                                   </tr>
                                                </tbody>
                                             </table>
                                          </td>
                                       </tr>
                                       <tr class="yiv2728002363message-footer" style="border-top:1px solid #eeeeee;">
                                          <td style="border-collapse:collapse;background-color:#757f83;padding:20px 30px;color:#fff;font-family:Arial, Helvetica, sans-serif, Helvetica, Arial, sans-serif;font-size:13px;">
                                             <table class="yiv2728002363info yiv2728002363ty-email-footer-left-part" width="250" align="left" style="border-collapse:collapse;">
                                                <tbody>
                                                   <tr>
                                                      <th class="yiv2728002363footer-contact__title yiv2728002363ty-email-footer" style="border-collapse:collapse;color:#fff !important;font-size:16px !important;font-weight:600;margin:0px;text-transform:uppercase;font-family:Arial, Helvetica, sans-serif, Helvetica, Arial, sans-serif;border-bottom:1px solid #eeeeee;text-align:center;border:none;"> 
                                                         Contact information
                                                      </th>
                                                   </tr>
                                                   <tr>
                                                      <td class="yiv2728002363ty-email-footer" style="border-collapse:collapse;color:#fff;font-family:Arial, Helvetica, sans-serif, Helvetica, Arial, sans-serif;font-size:13px;padding:5px;text-align:center;">
                                                         <address style="margin:0px;">1178 Skylark Dr<br>Morrow,&nbsp;GA&nbsp;30260</address>
                                                      </td>
                                                   </tr>
                                                </tbody>
                                             </table>
                                            
                                          </td>
                                       </tr>
                                       <tr class="yiv2728002363message-copyright">
                                          <td style="border-collapse:collapse;padding:0px 30px 10px;color:#333333;font-family:Arial, Helvetica, sans-serif, Helvetica, Arial, sans-serif;font-size:13px;">
                                             <table class="yiv2728002363copyright" width="100%" style="border-collapse:collapse;">
                                                <tbody>
                                                   <tr>
                                                      <td style="border-collapse:collapse;color:#333333;font-family:Arial, Helvetica, sans-serif, Helvetica, Arial, sans-serif;font-size:13px;padding:10px 0 0 0;padding-bottom:0 !important;">
                                                         ©&nbsp;Abc Nail Supply
                                                      </td>
                                                      <td align="right" style="border-collapse:collapse;color:#333333;font-family:Arial, Helvetica, sans-serif, Helvetica, Arial, sans-serif;font-size:13px;padding:10px 0 0 0;padding-bottom:0 !important;">
                                                         Thank you for shopping with us!
                                                      </td>
                                                   </tr>
                                                </tbody>
                                             </table>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                        </html>
                    `,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Abc Nail Supply: Thank you! Your Order has been placed",
      },
    },
  };
};
