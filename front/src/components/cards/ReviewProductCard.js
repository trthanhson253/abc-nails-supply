import React, { useState, useEffect } from "react";
import renderHTML from "react-render-html";
import {
  like,
  dislike,
  remove,
  getDateOfPurchase,
} from "../../functions/review";
import { useSelector } from "react-redux";

var moment = require("moment");

//cha của nó là thẻ ProductDetailHome
const ReviewProductCard = ({
  review,
  product,
  loadReviewsPercent,
  loadDetailProduct,
  loadReviewsBasedOnProduct,
  verifiedPurchase,
  pslug1,
}) => {
  const [dateOfPurchase, setDateOfPurchase] = useState("");
  const { user } = useSelector((state) => ({ ...state }));

  const handleLike = () => {
    like(review._id, user.token)
      .then((data) => {
        loadReviewsBasedOnProduct();
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  const handleDisLike = () => {
    dislike(review._id, user.token)
      .then((data) => {
        loadReviewsBasedOnProduct();
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  const removeReview = () => {
    remove(review._id, product._id, user.token)
      .then((data) => {
        loadReviewsBasedOnProduct();
        loadReviewsPercent();
        loadDetailProduct();
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  const getVerifiedPurchaseCustomer = () => {
    if (verifiedPurchase && verifiedPurchase.indexOf(review.user._id) != -1) {
      return (
        <span className="review-comment__avatar-bought review-comment__font">
          <b>✅ Verified Purchase</b>
        </span>
      );
    } else {
      return <b className="review-comment__font">❤️ Potential Customer</b>;
    }
  };

  const getInitialAvatar = (fullName) => {
    var parts = fullName.split(" ");
    var initials = "";
    for (var i = 0; i < parts.length; i++) {
      if (parts[i].length > 0 && parts[i] !== "") {
        initials += parts[i][0];
      }
    }
    return initials.toUpperCase();
  };

  const loadDateOfPurchase = () => {
    getDateOfPurchase(pslug1, review.user._id).then((res) => {
      // console.log("res.data.dateOfPurchase", res.data[0]);
      setDateOfPurchase(res.data[0]);
      // loadDetailProduct();
    });
  };
  useEffect(() => {
    loadDateOfPurchase();
    loadDetailProduct();
  }, []);
  return (
    <>
      <div className="comments-cell has-side-left is-active">
        <div className="comments-cell-side">
          <div className="review-comment__avatar">
            {review.user.images && review.user.images.length > 0 ? (
              <img
                className="review-comment__avatar-thumb"
                src={review.user.images[0].url}
              ></img>
            ) : (
              <div
                className="review-comment__avatar-thumb"
                style={{
                  backgroundImage: 'url("//tiki.vn/assets/img/avatar.png")',
                }}
              >
                <span>{getInitialAvatar(review.user.name)}</span>
              </div>
            )}

            <div className="review-comment__avatar-info">
              <div className="comments-name">
                <b>{review.user.name} </b>
              </div>
            </div>
          </div>

          <div className="comments-text comments-verified-owner">
            {getVerifiedPurchaseCustomer()}
          </div>
          <div className="comments-text">
            {" "}
            {dateOfPurchase && (
              <div className="review-comment__avatar-options">
                <span>
                  🕖 Purchased this product on{" "}
                  {moment(dateOfPurchase.createdAt).format("MM/DD/YYYY")}
                </span>
              </div>
            )}{" "}
          </div>
        </div>
        <div className="comments-cell-body">
          <div className="comments-cell-body-inner">
            <div className="style__StyledComment-sc-103p4dk-5 dDtAUu review-comment">
              <div className="review-comment__avatar">
                <div
                  className="review-comment__avatar-thumb"
                  style={{
                    width: "100px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="Stars__StyledStars-sc-15olgyg-0 jucQbJ">
                    <span>
                      <i
                        className={
                          review.rating > 0
                            ? "fa fa-star star-review "
                            : "fa fa-star-o star-review "
                        }
                      ></i>
                    </span>
                    <span>
                      <i
                        className={
                          review.rating > 1
                            ? "fa fa-star star-review "
                            : "fa fa-star-o star-review "
                        }
                      ></i>
                    </span>
                    <span>
                      <i
                        className={
                          review.rating > 2
                            ? "fa fa-star star-review "
                            : "fa fa-star-o star-review "
                        }
                      ></i>
                    </span>
                    <span>
                      <i
                        className={
                          review.rating > 3
                            ? "fa fa-star star-review "
                            : "fa fa-star-o star-review "
                        }
                      ></i>
                    </span>
                    <span>
                      <i
                        className={
                          review.rating > 4
                            ? "fa fa-star star-review "
                            : "fa fa-star-o star-review "
                        }
                      ></i>
                    </span>
                  </div>
                </div>

                <div className="review-comment__avatar-info">
                  <div className="review-comment__avatar-wrap">
                    <span
                      className="review-comment__avatar-name"
                      style={{ color: "#4eafff" }}
                    >
                      <b>{review.title} </b>
                    </span>
                  </div>
                  <div className="review-comment__avatar-date-options">
                    <div className="review-comment__avatar-date">
                      Posted on {moment(review.createdAt).format("hh:mm:ss A")}{" "}
                      {moment(review.createdAt).format("MM/DD/YYYY")}
                    </div>
                  </div>
                </div>
              </div>
              <div className="review-comment__content">
                {renderHTML(review.content)}
              </div>
              <div className="review-comment__labels" />
              {review.likes.length > 0 && user ? (
                <>
                  {review.likes.map((x) => (
                    <>
                      {x.userLike == user._id ? (
                        <span
                          onClick={handleDisLike}
                          className="review-comment__thank"
                          style={{ borderColor: "#FF5417", color: "#FF5417" }}
                        >
                          <i class="fa fa-thumbs-down"></i> &nbsp;
                          <span>
                            Not Helpful{" "}
                            {review.likes.length > 0 ? (
                              <>({review.likes.length})</>
                            ) : (
                              <></>
                            )}
                          </span>
                        </span>
                      ) : (
                        <span
                          className="review-comment__thank"
                          onClick={handleLike}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                          >
                            <g fill="none" fillRule="evenodd">
                              <path d="M0 0H20V20H0z" />
                              <path
                                fill="#0d5cb6"
                                fillRule="nonzero"
                                d="M14.252 17.063c.465 0 .863-.056 1.195-.167.443-.143.8-.387 1.071-.73.271-.343.429-.747.473-1.212.022-.254.006-.503-.05-.747.277-.443.404-.908.382-1.395-.01-.132-.038-.265-.083-.398.266-.398.393-.819.382-1.262 0-.166-.028-.332-.083-.498.155-.232.266-.481.332-.747l.067-.083v-.73l-.034-.083v-.05c-.022-.033-.033-.055-.033-.066-.166-.642-.531-1.069-1.096-1.279-.265-.088-.542-.133-.83-.133h-2.888c.044-.298.083-.525.116-.68.144-.742.116-1.4-.083-1.976-.078-.221-.21-.586-.399-1.096l-.149-.398c-.177-.443-.476-.753-.896-.93-.321-.144-.648-.216-.98-.216-.376 0-.742.095-1.096.283-.564.287-.84.747-.83 1.378.011.254.017.453.017.597.01.454.022.797.033 1.03 0 .055-.011.105-.033.149-.033.066-.091.172-.174.315l-.191.332c-.388.676-.681 1.174-.88 1.495-.133.199-.313.365-.54.498-.227.132-.423.215-.59.249l-.248.05H4.258c-.332 0-.614.116-.847.348-.232.233-.349.515-.349.847v6.11c0 .331.117.613.35.846.232.232.514.349.846.349h9.994zm0-1.196h-6.94l.017-6.441c.51-.244.908-.587 1.195-1.03V8.38c.21-.332.504-.836.88-1.51l.017-.017c.022-.034.1-.166.232-.399.011-.011.034-.044.067-.1.033-.055.055-.094.066-.116.155-.265.221-.548.2-.846-.012-.244-.023-.56-.034-.947v-.63c-.01-.067 0-.122.033-.167.022-.044.072-.088.15-.132.177-.089.354-.133.531-.133.166 0 .338.039.515.116.11.044.193.127.249.249.077.232.127.365.15.398.165.454.292.808.38 1.063.134.387.145.841.034 1.361-.033.188-.072.426-.116.714l-.232 1.395h4.3c.143 0 .287.022.431.066.166.067.277.216.332.448.011 0 .02.011.025.034.005.022.008.038.008.05v.232l-.033.133c-.033.121-.083.238-.15.348l-.315.465.15.531c.022.067.033.139.033.216.01.188-.05.37-.183.548l-.299.465.15.531c.01.055.022.105.033.15.011.22-.055.442-.2.664l-.265.415.1.415v.05c.033.143.044.282.033.414v.017c-.022.221-.094.404-.216.548-.122.155-.288.271-.498.349-.21.066-.487.1-.83.1zm-8.135 0h-1.86v-6.11h1.86v6.11z"
                              />
                            </g>
                          </svg>
                          <span>
                            Helpful{" "}
                            {review.likes.length > 0 ? (
                              <>({review.likes.length})</>
                            ) : (
                              <></>
                            )}
                          </span>
                        </span>
                      )}
                    </>
                  ))}
                </>
              ) : (
                <>
                  <span className="review-comment__thank" onClick={handleLike}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path d="M0 0H20V20H0z" />
                        <path
                          fill="#0d5cb6"
                          fillRule="nonzero"
                          d="M14.252 17.063c.465 0 .863-.056 1.195-.167.443-.143.8-.387 1.071-.73.271-.343.429-.747.473-1.212.022-.254.006-.503-.05-.747.277-.443.404-.908.382-1.395-.01-.132-.038-.265-.083-.398.266-.398.393-.819.382-1.262 0-.166-.028-.332-.083-.498.155-.232.266-.481.332-.747l.067-.083v-.73l-.034-.083v-.05c-.022-.033-.033-.055-.033-.066-.166-.642-.531-1.069-1.096-1.279-.265-.088-.542-.133-.83-.133h-2.888c.044-.298.083-.525.116-.68.144-.742.116-1.4-.083-1.976-.078-.221-.21-.586-.399-1.096l-.149-.398c-.177-.443-.476-.753-.896-.93-.321-.144-.648-.216-.98-.216-.376 0-.742.095-1.096.283-.564.287-.84.747-.83 1.378.011.254.017.453.017.597.01.454.022.797.033 1.03 0 .055-.011.105-.033.149-.033.066-.091.172-.174.315l-.191.332c-.388.676-.681 1.174-.88 1.495-.133.199-.313.365-.54.498-.227.132-.423.215-.59.249l-.248.05H4.258c-.332 0-.614.116-.847.348-.232.233-.349.515-.349.847v6.11c0 .331.117.613.35.846.232.232.514.349.846.349h9.994zm0-1.196h-6.94l.017-6.441c.51-.244.908-.587 1.195-1.03V8.38c.21-.332.504-.836.88-1.51l.017-.017c.022-.034.1-.166.232-.399.011-.011.034-.044.067-.1.033-.055.055-.094.066-.116.155-.265.221-.548.2-.846-.012-.244-.023-.56-.034-.947v-.63c-.01-.067 0-.122.033-.167.022-.044.072-.088.15-.132.177-.089.354-.133.531-.133.166 0 .338.039.515.116.11.044.193.127.249.249.077.232.127.365.15.398.165.454.292.808.38 1.063.134.387.145.841.034 1.361-.033.188-.072.426-.116.714l-.232 1.395h4.3c.143 0 .287.022.431.066.166.067.277.216.332.448.011 0 .02.011.025.034.005.022.008.038.008.05v.232l-.033.133c-.033.121-.083.238-.15.348l-.315.465.15.531c.022.067.033.139.033.216.01.188-.05.37-.183.548l-.299.465.15.531c.01.055.022.105.033.15.011.22-.055.442-.2.664l-.265.415.1.415v.05c.033.143.044.282.033.414v.017c-.022.221-.094.404-.216.548-.122.155-.288.271-.498.349-.21.066-.487.1-.83.1zm-8.135 0h-1.86v-6.11h1.86v6.11z"
                        />
                      </g>
                    </svg>
                    <span>
                      Helpful{" "}
                      {review.likes.length > 0 ? (
                        <>({review.likes.length})</>
                      ) : (
                        <></>
                      )}
                    </span>
                  </span>
                </>
              )}
              <span className="review-comment__reply">
                <i class="fa fa-reply"></i>&nbsp;Reply
              </span>
              {user && review.user._id == user._id ? (
                <>
                  |{" "}
                  <span
                    className="review-comment__reply"
                    style={{ color: "red" }}
                    onClick={removeReview}
                  >
                    <i class="fa fa-trash"></i>&nbsp;Delete
                  </span>
                </>
              ) : (
                <></>
              )}
              |
              <span
                className="review-comment__reply"
                style={{ color: "black" }}
              >
                <i class="fa fa-flag-o"></i>&nbsp;Report Spam
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewProductCard;
