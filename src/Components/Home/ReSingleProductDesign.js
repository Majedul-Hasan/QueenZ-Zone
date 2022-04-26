import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShoppingCartOutlined } from "@mui/icons-material";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Carousel from "nuka-carousel";
import React, { useState } from "react";

export default function ReSingleProductDesign({
  setOldSecdata,
  oldSecData,
  dt,
  ProductAdded,
  setAniImg,
  PushSingleProductpage,
  seasonStroageProductFunction,
}) {
  const [imgs, setImgs] = useState(dt.ProductImage);

  // metarial ui icon click color
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  // setState for First image
  const [firstImgs, setFristImgs] = useState(dt.ProductImage[0][0].image);

  // love btn
  const [love, setLove] = useState(false);

  /// comment
  // useEffect(() => {
  //   setOldSecdata(JSON.parse(sessionStorage.getItem("addToShoppingCard")));
  // }, []);

  // add to shopping card
  const addToShoppingCard = (props) => {
    ////// setOldSecdata([...oldSecData, [dt, firstImgs]]);
    ProductAdded("success");

    let localData = {
      firstImgs: firstImgs[0],
      dt: [dt, firstImgs],
    };

    setAniImg(localData);

    // const dataOld = JSON.parse(sessionStorage.getItem("addToShoppingCard"));

    //  setSelectedProductImage([...selectedProductImage, firstImgs]);
  };

  // // add to shopping card
  // const addToShoppingCard = (props) => {
  //   seasonStroageProductFunction(props);
  // };

  return (
    <div>
      <div>
        <div className="">
          <div
            className="p-2 mt-3"
            style={{
              backgroundColor: "#FFF7BF ",
              borderRadius: "10px",
              width: "166px",
              margin: "0px 7px",
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
                            borderRadius: "5px ",
                          }}
                        ></div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div onClick={() => PushSingleProductpage(dt)}>
                <div className="mt-2" style={{ fontSize: "12px" }}>
                  {dt.ProductName}
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
                <s>
                  <div
                    style={{
                      fontSize: "10px",
                      fontFamily: "Poppins",
                      paddingLeft: "5px",
                      display: `${
                        dt.ProductOffer != "null" ? "inline-block" : "none"
                      }`,
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
                        <s>{dt.ProductOffer}</s>
                      </strong>
                    </span>
                  </div>
                </s>
              </div>
            </div>

            <div
              className="pt-2 d-flex justify-content-around"
              style={{
                fontSize: "21px",
                alignItems: "center",
              }}
            >
              <div>
                <Checkbox
                  {...label}
                  color="error"
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                />
              </div>

              <div onClick={() => addToShoppingCard(dt)}>
                {/* <FontAwesomeIcon
              icon={faCartShopping}
              className=""
              style={{
                backgroundColor: "",
                borderRadius: "50%",
                border: "1px solid white",
              }}
            /> */}

                <Stack spacing={2} direction="row">
                  <Button variant="text">
                    <ShoppingCartOutlined />
                  </Button>
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
