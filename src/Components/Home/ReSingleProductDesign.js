import {
  faAngleLeft,
  faAngleRight,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { default as FavoriteIcon } from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Carousel from "nuka-carousel";
import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import styled from "styled-components";

export default function ReSingleProductDesign({
  favoProduct,
  setOldSecdata,
  oldSecData,
  dt,
  ProductAdded,
  setAniImg,
  PushSingleProductpage,
  allRating,
  seasonStroageProductFunction,
}) {
  const [imgs, setImgs] = useState(dt.ProductImage);

  // metarial ui icon click color
  let label = { inputProps: { "aria-label": "Checkbox demo" } };

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

  // addToFavoriteSection
  const addToFavoriteSection = (dt) => {
    // const localData = localStorage.getItem("favoriteList");

    // // const filterData = localData.find((fdata) => fdata === dt);

    // //    localData.map((dts) => console.log(dts));

    // if (localStorage.getItem("favoriteList") === null) {
    //   localStorage.setItem("favoriteList", JSON.stringify(dt));
    // } else {
    //   localStorage.setItem("favoriteList", [
    //     localStorage.getItem("favoriteList"),
    //     JSON.stringify(dt),
    //   ]);
    // }

    const localData = JSON.parse(localStorage.getItem("favoriteList"));

    const findData =
      localData === null
        ? false
        : localData.filter((mainData) => mainData === dt);

    console.log(findData, " this is local storage  data => ", localData, dt);

    if (!findData.length !== false) {
      if (localData === null) {
        localStorage.setItem("favoriteList", JSON.stringify([dt]));
      } else {
        localStorage.setItem(
          "favoriteList",
          JSON.stringify([...localData, dt])
        );
      }
    } else {
      // remove data

      const removeIteam = localData.filter((rIteam) => rIteam !== dt);

      localStorage.setItem("favoriteList", JSON.stringify(removeIteam));
    }
  };

  // filter for root local data
  useEffect(() => {
    if (favoProduct === null) {
      setLove(false);
    } else if (!favoProduct.length === true) {
      setLove(false);
    } else {
      let findData = favoProduct.filter((fData) => fData === dt._id);

      console.log(
        findData,
        " this is root local strobe product => ",
        favoProduct
      );
      !findData.length === false ? setLove(true) : setLove(false);
    }
  }, [favoProduct]);

  return (
    <ReSingleProback>
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
              {!thisProductReview.length === false && (
                <div
                  className="d-flex flex-row-reverse align-items-center"
                  onClick={() => PushSingleProductpage(dt)}
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

            <div
              className="pt-2 d-flex justify-content-around"
              style={{
                fontSize: "21px",
                alignItems: "center",
              }}
            >
              <div>
                {/* <Checkbox
                  {...label}
                  color="error"
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                /> */}

                {love === true ? (
                  <IconButton aria-label="cart">
                    <FavoriteIcon
                      style={{ color: "red" }}
                      onClick={() => {
                        addToFavoriteSection(dt._id);
                        setLove(!love);
                      }}
                    />
                  </IconButton>
                ) : (
                  <IconButton aria-label="cart">
                    <FavoriteIcon
                      onClick={() => {
                        addToFavoriteSection(dt._id);
                        setLove(!love);
                      }}
                    />
                  </IconButton>
                )}
              </div>

              <div onClick={() => PushSingleProductpage(dt)}>
                <FontAwesomeIcon icon={faEye} />
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

                <Stack
                  spacing={2}
                  direction="row"
                  style={{ padding: "0px", margin: "0px", minWidth: "0px" }}
                >
                  <Button variant="text">
                    <ShoppingCartOutlined />
                  </Button>
                </Stack>
              </div>
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
