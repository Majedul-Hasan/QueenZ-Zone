import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "nuka-carousel";
import React, { useEffect, useState } from "react";

import ReactStars from "react-rating-stars-component";
import styled from "styled-components";

export default function Product({ dt, allRating, PushSingleProductpage }) {
  const [imgs, setImgs] = useState(dt.ProductImage);

  // metarial ui icon click color
  let label = { inputProps: { "aria-label": "Checkbox demo" } };

  // setState for First image
  const [firstImgs, setFristImgs] = useState(dt.ProductImage[0][0].image);

  // ^^ product review

  // product review
  const [thisProductReview, setThisProductReview] = useState([]);

  // product review count
  const [productReviewCount, setProductReviewCount] = useState();

  useEffect(() => {
    const thisProductRev22 = allRating.filter(
      (allRev) => allRev.rating.productId === dt._id
    );

    let count = 0;

    const reviewCount = thisProductRev22.map(
      (re) => (count = re.rating.rating + count)
    );

    // console.log(
    //   count / thisProductRev22.length,
    //   " : this is product Rating for reSingleProduct : ",
    //   thisProductRev22
    // );

    !thisProductRev22.length === false &&
      setProductReviewCount(count / thisProductRev22.length);

    setThisProductReview(thisProductRev22);
  }, [allRating]);

  return (
    <ReSingleProback>
      <div>
        <div className="">
          <div
            className="mx-2"
            style={{
              borderRadius: "10px",
            }}
          >
            <Carousel
              renderCenterLeftControls={({ previousSlide }) => (
                <button
                  style={{
                    color: "black",
                    background: "none",
                    fontSize: "23px",
                    border: "none",
                  }}
                  onClick={previousSlide}
                >
                  <FontAwesomeIcon icon={faAngleLeft} />
                </button>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <button
                  style={{
                    color: "black",
                    background: "none",
                    fontSize: "23px",
                    border: "none",
                  }}
                  onClick={nextSlide}
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
              )}
            >
              {/* <img
                style={{
                  width: "100%",

                  borderRadius: "5px 5px 0px 0px ",
                }}
                src="https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg"
              /> */}

              {firstImgs.map((img) => (
                <img
                  onClick={() => PushSingleProductpage(dt)}
                  style={{
                    width: "100%",

                    borderRadius: "5px 5px 0px 0px ",
                  }}
                  src={img}
                  alt="product"
                />
              ))}
            </Carousel>
            <div
              className="p-1 "
              style={{
                backgroundColor: "white ",
                borderRadius: " 0px 0px 5px 5px",
              }}
            >
              <div>
                {imgs.length > 1 && (
                  <div
                    style={{
                      fontSize: "10px",
                    }}
                  >
                    <span>color : </span>{" "}
                    {imgs.map((img) => (
                      <button
                        className="btn"
                        style={{
                          display: "inline-block",
                          margin: "0px",
                          padding: "0px 2px",
                        }}
                      >
                        <img
                          className="pb-1"
                          onClick={() => setFristImgs(img[0].image)}
                          style={{
                            width: "22px",

                            borderRadius: "5px 5px 0px 0px ",
                          }}
                          src={img[0].image[0][0]}
                          class=""
                          alt="..."
                        />
                        <div
                          className="mt-1"
                          style={{
                            width: "22px",
                            height: "7px",
                            backgroundColor: `${img[0].color}`,
                            borderRadius: "5px ",
                          }}
                        ></div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div onClick={() => PushSingleProductpage(dt)}>
                <div className="mt-2 pb-2" style={{ fontSize: "12px" }}>
                  {dt.ProductName.length > 50
                    ? dt.ProductName.substring(0, 60) + "..."
                    : dt.ProductName}
                </div>
                <div
                  className="pt-1"
                  style={{
                    fontSize: "13px",
                    fontFamily: "Poppins",
                    display: "inline-block",
                  }}
                >
                  <span>SAR </span>
                  <span
                    className=""
                    style={{
                      fontSize: "18px",
                      fontFamily: "Poppins",
                      color: "red",
                    }}
                  >
                    {" "}
                    <strong>{dt.ProductPrice}</strong>
                  </span>
                </div>
                <span className="text-decoration-line-through">
                  <span
                    style={{
                      fontSize: "10px",
                      fontFamily: "Poppins",
                      paddingLeft: "5px",
                      display: `${
                        dt.ProductOffer != "null" ? "inline-block" : "none"
                      }`,
                    }}
                  >
                    <strong className="text-decoration-line-through">
                      SAR
                    </strong>
                    <span
                      className=""
                      style={{
                        fontSize: "10px",
                        fontFamily: "Poppins",
                        color: "red",
                      }}
                    >
                      {" "}
                      <strong className="text-decoration-line-through">
                        {dt.ProductOffer}
                      </strong>
                    </span>
                  </span>
                </span>
              </div>
              <div className="p-2"></div>
              {!thisProductReview.length === false && (
                <div
                  onClick={() => PushSingleProductpage(dt)}
                  className="pt-2 d-flex flex-row-reverse align-items-center"
                >
                  <div>
                    <ReactStars
                      count={5}
                      isHalf={true}
                      size={15}
                      value={productReviewCount}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div
                    className="px-1"
                    style={{ color: "gray", fontSize: "11px" }}
                  >
                    <span>
                      ({thisProductReview ? thisProductReview.length : 0})
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ReSingleProback>
  );
}

const ReSingleProback = styled.div`
  .css-1e6y48t-MuiButtonBase-root-MuiButton-root {
    padding: 0px;
    min-width: 0px;
  }
  .css-1peyhh5-MuiButtonBase-root-MuiCheckbox-root {
    padding: 0px;
  }
  .css-78trlr-MuiButtonBase-root-MuiIconButton-root {
    padding: 0px !important;
  }
  .css-78trlr-MuiButtonBase-root-MuiIconButton-root {
    padding: 0px !important;
  }
`;
