exports.registerEmailParams = (name, email, token) => {
  return {
      Source: process.env.EMAIL_FROM,
      Destination: {
          ToAddresses: [email]
      },
      ReplyToAddresses: [process.env.EMAIL_FROM],
      Message: {
          Body: {
              Html: {
                  Charset: 'UTF-8',
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
                  `
              }
          },
          Subject: {
              Charset: 'UTF-8',
              Data: '[AbcNailSupply] Complete your registration'
          }
      }
  };
};

exports.activateSuccessEmailParams = (name, email) => {
    return {
        Source: process.env.EMAIL_FROM,
        Destination: {
            ToAddresses: [email]
        },
        ReplyToAddresses: [process.env.EMAIL_FROM],
        Message: {
            Body: {
                Html: {
                    Charset: 'UTF-8',
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
                    `
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: 'Congratulation! You registered successfully'
            }
        }
    };
  };

exports.forgotPasswordEmailParams = (email, token) => {
  return {
      Source: process.env.EMAIL_FROM,
      Destination: {
          ToAddresses: [email]
      },
      ReplyToAddresses: [process.env.EMAIL_FROM],
      Message: {
          Body: {
              Html: {
                  Charset: 'UTF-8',
                  Data: `
                      <html>
                          <h1>Reset Password Link</h1>
                          <p>Please use the following link to reset your password:</p>
                          <a href='${process.env.CLIENT_URL}/auth/password/reset/${token}'>RESET YOUR PASSWORD</a>
                      </html>
                  `
              }
          },
          Subject: {
              Charset: 'UTF-8',
              Data: 'Password reset link'
          }
      }
  };
};

exports.linkPublishedParams = (email, data) => {
  return {
      Source: process.env.EMAIL_FROM,
      Destination: {
          ToAddresses: [email]
      },
      ReplyToAddresses: [process.env.EMAIL_FROM],
      Message: {
          Body: {
              Html: {
                  Charset: 'UTF-8',
                  Data: `
                      <html>
                          <h1>New link published | reactnodeaws.com</h1>
                          <p>A new link titled <b>${
                              data.title
                          }</b> has been just publihsed in the following categories.</p>
                          
                          ${data.categories
                              .map(c => {
                                  return `
                                  <div>
                                      <h2>${c.name}</h2>
                                      <img src="${c.image.url}" alt="${c.name}" style="height:50px;" />
                                      <h3><a href="${process.env.CLIENT_URL}/links/${c.slug}">Check it out!</a></h3>
                                  </div>
                              `;
                              })
                              .join('-----------------------')}

                          <br />

                          <p>Do not wish to receive notifications?</p>
                          <p>Turn off notification by going to your <b>dashboard</b> > <b>update profile</b> and <b>uncheck the categories</b></p>
                          <p>${process.env.CLIENT_URL}/user/profile/update</p>

                      </html>
                  `
              }
          },
          Subject: {
              Charset: 'UTF-8',
              Data: 'New link published'
          }
      }
  };
};
