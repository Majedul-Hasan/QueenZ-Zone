import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "nuka-carousel";
import React, { useState } from "react";

export default function MapSingleProduct({ dt }) {
  // love btn
  const [love, setLove] = useState(false);

  // useState for image

  const [imgs, setImgs] = useState(dt.ProductImage);

  // setState for First image
  const [firstImgs, setFristImgs] = useState(dt.ProductImage[0][0].image);

  console.log("this is fetch product : ", dt);

  return (
    <div
      className="col-6 "
      style={{
        margin: "0px",
        padding: "0px",
      }}
    >
      <div className="">
        <div>
          <div
            className="p-1"
            style={{
              height: "345px",
              margin: "0 auto",
              display: "flex",
            }}
          >
            <div
              className=""
              style={{
                backgroundColor: "white",
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
                    style={{
                      width: "100%",

                      borderRadius: "5px 5px 0px 0px ",
                    }}
                    src={img}
                  />
                ))}
              </Carousel>

              {/* 
              <img
                style={{
                  width: "100%",

                  borderRadius: "5px 5px 0px 0px ",
                }}
                src={
                  "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg"
                }
                class=""
                alt="..."
              /> */}
              <div
                className=""
                style={{
                  backgroundColor: "white",
                  border: "2px solid #FFF7BF",
                  borderRadius: "0px 0px 5px 5px",
                  fontSize: "10px",
                  fontFamily: "Poppins",
                  width: "100%",
                  height: "122px",
                  boxShadow: "rgb(213 205 149)  0 3px 7px",
                }}
              >
                {imgs.length > 1 && (
                  <div
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    <span>Color : </span>{" "}
                    {imgs.map((img) => (
                      <button
                        className="btn"
                        style={{
                          display: "inline-block",
                        }}
                      >
                        <img
                          onClick={() => setFristImgs(img[0].image)}
                          style={{
                            width: "20px",

                            borderRadius: "5px 5px 0px 0px ",
                          }}
                          src={img[0].image[0][0]}
                          class=""
                          alt="..."
                        />
                        <div
                          style={{
                            width: "10px",
                            height: "10px",
                            backgroundColor: `${img[0].color}`,
                          }}
                        ></div>
                      </button>
                    ))}
                  </div>
                )}

                <div
                  className="p-1"
                  style={{
                    fontSize: "16px",
                    fontFamily: "Poppins",
                    width: "100%",
                    height: "50px",
                    // backgroundColor: "#FFF7BF",
                  }}
                >
                  <span>bag</span>
                </div>
                <div
                  className="p-1"
                  style={{ fontSize: "13px", fontFamily: "Poppins" }}
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
                    {/* {dt.discount ? (
                  <strong>
                    <s>{dt.discount}</s>
                  </strong>
                ) : (
                  <strong>
                    <s>{dt.prise}</s>
                  </strong>
                )} */}
                    <strong>35</strong>
                  </span>
                </div>
                {/* <div
                  class="d-flex justify-content-between"
                  style={{ alignItems: "center" }}
                >
                  <div style={{ fontSize: "20px" }}>
                    <FontAwesomeIcon
                      className="p-1 m-1"
                      icon={faHeart}
                      onClick={() => setLove(!love)}
                      style={{
                        color: `${love === true ? "red" : "black"}`,
                        backgroundColor: "",
                        borderRadius: "50%",
                        border: "1px solid white",
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className="p-1 m-1"
                      style={{
                        backgroundColor: "",
                        borderRadius: "50%",
                        border: "1px solid white",
                      }}
                    />
                  </div>

                  <div
                    className=""
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <div className="d-flex flex-row-reverse bd-highlight ">
                      <div className="d-flex ">
                        <div
                          className="d-flex justify-content-evenly"
                          style={{
                            marginRight: "4px",
                          }}
                        >
                          {dt.reviewStar.length >= 1 ? (
                            dt.reviewStar.map((starNum) => (
                              <div>
                                <img
                                  style={{ width: "14px" }}
                                  src={starPic}
                                  alt=""
                                />
                              </div>
                            ))
                          ) : (
                            <span></span>
                          )}
                        </div>
                      </div>
                      <div
                        className=""
                        style={{
                          fontSize: "10px",
                          display: "flex",
                          marginTop: "3px",
                          alignItems: "flex-start",
                          marginRight: "3px",
                        }}
                      >
                        ({dt.reviewRate})
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
