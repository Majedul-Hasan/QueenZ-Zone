import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "nuka-carousel";
import React, { useState } from "react";

export default function ProductAllList({ dt }) {
  console.log("this is fetch product : ", dt);
  // useState for image

  const [imgs, setImgs] = useState(dt.ProductImage);

  // setState for First image
  const [firstImgs, setFristImgs] = useState(dt.ProductImage[0][0].image);
  return (
    <div className="col-6">
      <div
        className="p-2"
        style={{ backgroundColor: "#FFF7BF ", borderRadius: "10px" }}
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
                      style={{
                        width: "22px",
                        height: "7px",
                        backgroundColor: `${img[0].color}`,
                      }}
                    ></div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="mt-2" style={{ fontSize: "12px" }}>
            {dt.ProductName}
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
        </div>
      </div>
    </div>
  );
}
