import {
  faAngleLeft,
  faAngleRight,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "nuka-carousel";
import React, { useEffect, useState } from "react";

export default function ProductAllList({ setOldSecdata, oldSecData, dt }) {
  console.log("this is fetch product : ", dt);
  // useState for image

  const [imgs, setImgs] = useState(dt.ProductImage);

  // setState for First image
  const [firstImgs, setFristImgs] = useState(dt.ProductImage[0][0].image);

  useEffect(() => {
    setOldSecdata(JSON.parse(sessionStorage.getItem("addToShoppingCard")));
  }, []);
  console.log("this is fetch product : ", oldSecData);
  // add to shopping card
  const addToShoppingCard = (props) => {
    setOldSecdata([...oldSecData, [dt, firstImgs]]);

    // const dataOld = JSON.parse(sessionStorage.getItem("addToShoppingCard"));

    //  setSelectedProductImage([...selectedProductImage, firstImgs]);
  };

  // add to love
  const addToLove = () => {
    console.log(JSON.parse(sessionStorage.getItem("addToShoppingCard")));
  };

  return (
    <div className="col-6">
      <div
        className="p-2 mt-3"
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
            className="pt-1"
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
              <strong>{dt.ProductPrice}</strong>
            </span>
          </div>

          <div
            style={{
              fontSize: "10px",
              fontFamily: "Poppins",
              display: `${dt.ProductOffer != "null" ? "block" : "none"}`,
            }}
          >
            <strong>
              <s>SAR</s>
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
              <strong>
                <s>65</s>
              </strong>
            </span>
          </div>
        </div>
        <div
          className="pt-2 d-flex justify-content-around"
          style={{
            fontSize: "21px",
          }}
        >
          <div onClick={() => addToLove(dt)}>
            <FontAwesomeIcon
              icon={faHeart}
              className=""
              style={{
                backgroundColor: "",
                borderRadius: "50%",
                border: "1px solid white",
              }}
            />
          </div>
          <div onClick={() => addToShoppingCard(dt)}>
            <FontAwesomeIcon
              icon={faCartShopping}
              className=""
              style={{
                backgroundColor: "",
                borderRadius: "50%",
                border: "1px solid white",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
