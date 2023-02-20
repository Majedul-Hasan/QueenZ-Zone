import { faCartPlus, faTruck } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PaymentsIcon from "@mui/icons-material/Payments";
import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { QuantityPicker } from "react-qty-picker";
import ReactStars from "react-rating-stars-component";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useParams } from "react-router-dom";
import { Link } from "react-scroll";
import { ShareSocial } from "react-share-social";
import ShowMoreText from "react-show-more-text";
import { useStickyBox } from "react-sticky-box";
import styled from "styled-components";
import unknownPeople from "../../Asset/unKneowOPeople.jpg";
import "./AnimationSingleproductPage.css";

const style = {};

export default function SingleProdductPage({ setAniImg, curentUserInfo }) {
  let { Category, PNAME, PID } = useParams();

  const stickyRef = useStickyBox({ offsetTop: 20, offsetBottom: 20 });

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  console.log(Category, PNAME, PID);

  // useState for product
  const [product, setProduct] = useState([]);

  console.log(product);

  const [dt, setDt] = useState();

  // this is first image when page was load
  const [fristImage, setFristImage] = useState([]);

  // visitor info
  const [visitorInfo, setVisitorInfo] = useState(false);

  // call useEffect
  const [callUseEffectForVisitorInfo, setCallUseEffectForVisitorInfo] =
    useState(0);

  useEffect(() => {
    if (visitorInfo !== false) {
      fetch("https://queenzzoneserver-production.up.railway.app/visitorInfo", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ visitorInfo }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [callUseEffectForVisitorInfo === 2]);

  const [productOne, setProductOne] = useState();

  /// post user info
  //creating function to load ip address from the API
  const getData = async (props) => {
    const res = await axios.get("https://geolocation-db.com/json/");
    //import axios from "axios";
    const vData = {
      IPv4: res.data.IPv4 ? res.data.IPv4 : "null",
      city: res.data.city ? res.data.city : "null",
      country_code: res.data.country_code ? res.data.country_code : "null",
      country_name: res.data.country_name ? res.data.country_name : "null",
      latitude: res.data.latitude ? res.data.latitude : "null",
      longitude: res.data.longitude ? res.data.longitude : "null",
      postal: res.data.postal ? res.data.postal : "null",
      state: res.data.state ? res.data.state : "null",
      time: new Date(),
      product: props.product,
      localVisitorNumber: JSON.parse(
        localStorage.getItem("localVisitorNumber")
      ),
      deviceType: props.DeviceType ? "Mobile" : "PC",
      deviceOsType: props.DeviceOs,
      iOS: props.iOS,
      curentUserInfo: {
        activeUserInfo:
          JSON.parse(localStorage.getItem("UserInfo")) === null ? "new" : "old",
        activeUserNumber: localStorage.getItem("localVisitorNumber"),
        oldUserInfo: JSON.parse(localStorage.getItem("UserInfo")),
      },
    };

    // console.log(
    //   "this is user info for single product page : ",
    //   JSON.parse(localStorage.getItem("localVisitorNumber"))
    // );

    setVisitorInfo(vData);
    setCallUseEffectForVisitorInfo(2);
  };

  // useEffect for fetch data
  useEffect(() => {
    // Update the document title using the browser API
    fetch(
      `https://queenzzoneserver-production.up.railway.app/queenZoneSingleProduct/${PID}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setProduct(json);
        setDt(json);
        isMobiles(json);
        setProductOne(json);
        setFristImage(json[0].ProductImage[0][0].image);

        ratingFetch(json);
      });
  }, []);

  const isMobiles = (props) => {
    var match = window.matchMedia || window.msMatchMedia;
    if (match) {
      var mq = match("(pointer:coarse)");
      return GFG_Fun({
        DeviceType: mq.matches === true ? true : false,
        product: props,
      });
    }
    return GFG_Fun({ DeviceType: false, product: props });
  };

  function GFG_Fun(props) {
    var res = "Device is not Android Phone";
    var Android = /(android)/i.test(navigator.userAgent);

    if (Android) {
      res = "Device is Android Phone";
    }

    return gfg_Run55({
      DeviceType: props.DeviceType,
      DeviceOs: res,
      product: props.product,
    });
  }

  function gfg_Run55(props) {
    var iOS =
      !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    return getData({
      DeviceType: props.DeviceType,
      DeviceOs: props.DeviceOs,
      iOS: iOS,
      product: props.product,
    });
  }

  // useEffect for season Stroage old product
  useEffect(() => {
    // Update the document title using the browser API
    console.log("is old product : ", !window.sessionStorage.addToShoppingCard);

    if (!window.sessionStorage.addToShoppingCard === true) {
      // inderect product link

      sessionStorage.setItem("addToShoppingCard", JSON.stringify([]));
    }
  }, []);

  const setSeasonProduct = (props) => {
    console.log("this is ", props);

    if (!window.sessionStorage.addToShoppingCard === false) {
      // inderect product link

      const oldSeasonProduct = JSON.parse(
        sessionStorage.getItem("addToShoppingCard")
      );

      const newProduct = [...oldSeasonProduct, [product[0], fristImage]];

      sessionStorage.setItem("addToShoppingCard", JSON.stringify(newProduct));

      console.log("this is inderect");
    } else {
      // derict
      console.log("this is derict");
      // const oldSeasonProduct = JSON.parse(
      //   sessionStorage.getItem("addToShoppingCard")
      // );
      // const oldData = JSON.parse(sessionStorage.getItem("addToShoppingCard"));

      // if (oldData === null) {
      //   sessionStorage.setItem("addToShoppingCard", JSON.stringify([]));
      // }

      const newProduct = [[product[0], fristImage]];

      sessionStorage.setItem("addToShoppingCard", JSON.stringify(newProduct));
    }
  };

  // setTimeout(console.log(product[0].ProductPrice), 10000);

  console.log("this is product : ", product);
  // console.log("this is frist image : ", );

  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  };

  const [notes, setNotes] = useState(false);

  // ^ product des
  useEffect(() => {
    fetch(
      `https://queenzzoneserver-production.up.railway.app/queenZoneInboxNotesFind?roomName=rony13647@gmail.com`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log("this is notes :: ", json[0].notes);
        setNotes(json[0].notes);
      });
  }, []);

  // {
  //   toolbar: ['bold', 'italic', 'bulletedList', '|', 'numberedList', 'alignment'],
  //   removePlugins: ['Heading', 'Link'],
  //   isReadOnly: true,
  // }

  // ^^ review section

  // product review count
  const [productReviewCount, setProductReviewCount] = useState(false);

  const [allRating, setAllRating] = useState([]);

  const ratingFetch = (props) => {
    fetch(
      `https://queenzzoneserver-production.up.railway.app/queenZoneUserRatingFindOneProduct?productKey=${props[0]._id}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log("this is all rating single product page : ", json);

        setAllRating(json);

        let count = 0;

        const reviewCount = json.map(
          (re) => (count = re.rating.rating + count)
        );

        console.log("this is count : ", json);

        // console.log(
        //   count / thisProductRev22.length,
        //   " : this is product Rating for reSingleProduct : ",
        //   thisProductRev22
        // );

        !json.length === false && setProductReviewCount(count / json.length);
      });
  };

  // filter this rating

  const [showImage, setShowImage] = useState(true);
  const [showReviewImage, setShowReviewImage] = useState({
    state: false,
    id: "",
  });

  return (
    <SingleProductback className="container mt-2">
      <div className="mb-5 pb-5">
        {product.length === true ? (
          <div>
            <div class="spinner-border text-warning" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div class="w-100">
                <Carousel>
                  {!fristImage.length <= 0 ? (
                    fristImage.map((img) => (
                      <div>
                        <img src={img[0]} />
                      </div>
                    ))
                  ) : (
                    <div class="spinner-border text-warning" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  )}
                </Carousel>
              </div>
              {!product.length === false && (
                <div>
                  {product[0].IsProductColor === true && (
                    <div>
                      <div
                        class="m-2 d-flex justify-content-start productColorV"
                        style={{
                          marginTop: "-30px",

                          borderRadius: "5px",
                          alignItems: "center",
                          border: "2px solid #fec400",
                          overflowX: "scroll",
                        }}
                      >
                        <div>
                          <h5
                            style={{
                              marginTop: "-20px",
                              margin: "0px",
                              padding: "2px",
                              marginLeft: "10px",
                              color: "#686868",
                              fontSize: "20px",
                            }}
                          >
                            Color:{" "}
                          </h5>
                        </div>
                        <div>
                          <div class="d-flex justify-content-center">
                            {!product.length <= 0 ? (
                              product[0].ProductImage.map((img) => (
                                <div>
                                  <Button
                                    variant="text"
                                    className=""
                                    onClick={() => setFristImage(img[0].image)}
                                  >
                                    <img
                                      style={{
                                        width: "50px",
                                        borderRadius: "5px",
                                      }}
                                      src={img[0].image[0]}
                                      class="img-fluid "
                                      alt="..."
                                    ></img>{" "}
                                  </Button>
                                </div>
                              ))
                            ) : (
                              <div
                                class="spinner-border text-warning"
                                role="status"
                              >
                                <span class="visually-hidden">Loading...</span>
                              </div>
                            )}
                          </div>
                          <div class="d-flex justify-content-center">
                            {!product.length === false ? (
                              product[0].ProductImage.map((img) => (
                                <Button
                                  variant="text"
                                  className="pb-2"
                                  style={{ margin: "0px", padding: "0px" }}
                                  onClick={() => setFristImage(img[0].image)}
                                >
                                  <div
                                    style={{
                                      backgroundColor: img[0].color,
                                      width: "50px",
                                      height: "15px",
                                      borderRadius: "5px",
                                    }}
                                  ></div>
                                </Button>
                              ))
                            ) : (
                              <div
                                class="spinner-border text-warning"
                                role="status"
                              >
                                <span class="visually-hidden">Loading...</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div>
                <ShareSocial
                  style={style}
                  url={window.location.href}
                  socialTypes={["facebook", "twitter", "reddit", "linkedin"]}
                />
              </div>
              <div>
                {window.innerWidth >= 766 && (
                  <div className="mt-3">
                    <div className="">
                      <h5 style={{ margin: "0px", padding: "0px" }}>
                        Review this product
                      </h5>
                    </div>
                  </div>
                )}

                <Link to="ratingMobile" spy={true} smooth={true}>
                  <div
                    className="d-flex align-items-center left-side-rating "
                    style={{
                      fontSize: "14px",
                      color: "#007185",
                      cursor: "pointer",
                    }}
                  >
                    <div>
                      {productReviewCount !== false && (
                        <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={24}
                          isHalf={true}
                          value={productReviewCount}
                          edit={false}
                          activeColor="#ffd700"
                        />
                      )}
                    </div>

                    <div className="mx-2">
                      {productReviewCount !== false && (
                        <span>
                          {parseFloat(productReviewCount).toFixed(1)} ratings |{" "}
                          {allRating.length}{" "}
                          {allRating.length > 1 ? "reviews" : "review"}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
              {window.innerWidth >= 766 && (
                <div id="rating">
                  <div className="mt-3">
                    <h5>Customer reviews</h5>
                  </div>
                  {!allRating.length === false &&
                    allRating.map((re) => (
                      <div className="mt-3">
                        <div>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <div>
                                <img
                                  style={{
                                    borderRadius: "50%",
                                    height: "28px",
                                  }}
                                  src={unknownPeople}
                                  alt=""
                                />
                              </div>
                              <div>
                                <span
                                  className="px-2"
                                  style={{ fontSize: "13px" }}
                                >
                                  <b>{re.rating.name}</b>
                                </span>
                              </div>
                            </div>
                            <div
                              className="px-1"
                              style={{ color: "gray", fontSize: "11px" }}
                            >
                              <span>
                                {new Date(re.rating.time).getDate()}/
                                {new Date(re.rating.time).getMonth()}/
                                {new Date(re.rating.time).getFullYear()}
                              </span>
                            </div>
                          </div>

                          <div className="d-flex align-items-center">
                            <div>
                              <ReactStars
                                count={5}
                                isHalf={true}
                                size={15}
                                value={re.rating.rating}
                                edit={false}
                                activeColor="#ffd700"
                              />
                            </div>
                            <div
                              className="px-1"
                              style={{ color: "gray", fontSize: "11px" }}
                            >
                              <span>
                                {" "}
                                (Rating {re.rating.rating} out of 5){" "}
                              </span>
                            </div>
                          </div>

                          {re.rating.reviewImage !== false && (
                            <div className="mb-2">
                              <img
                                src={re.rating.reviewImage}
                                alt=""
                                style={{ width: "100%", borderRadius: "10px" }}
                              />
                            </div>
                          )}

                          {re.rating.msg !== "" && (
                            <div
                              className="p-2"
                              style={{
                                color: "#424242",
                                backgroundColor: "rgba(255, 215, 0, 0.23)",
                                fontSize: "13px",
                                borderRadius: "5px",
                              }}
                            >
                              <span>{re.rating.msg}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6">
              <div
                className="m-2"
                style={{ margintop: "-13px", fontSize: "25px" }}
              >
                <div>
                  <div>
                    {/* <span style={{ color: "#686868", fontSize: "22px" }}>
                      Name :{" "}
                    </span> */}
                    <span style={{ color: "black", fontSize: "22px" }}>
                      <b>
                        {" "}
                        {!product.length === false && product[0].ProductName}
                      </b>
                    </span>
                  </div>
                </div>
              </div>
              {!product.length === false && (
                <div>
                  {product[0].ProductBrandName !== "" && (
                    <div className="mx-2">
                      <a
                        href={product[0].ProductBrandOptionLink}
                        className="brandStyle"
                      >
                        {product[0].ProductBrandOptionName}:{" "}
                        {product[0].ProductBrandName}
                      </a>
                    </div>
                  )}
                </div>
              )}

              <div className="m-2">
                <span style={{ color: "gray" }}>Stock : </span>
                <span style={{ color: "green", fontSize: "18px" }}>
                  In Stock.
                </span>{" "}
              </div>

              <div>
                <div
                  class="c"
                  style={{
                    display: `${window.innerWidth >= 990 ? "block" : "none"}`,
                  }}
                >
                  <Link to="rating" spy={true} smooth={true}>
                    <div
                      className="d-flex align-items-center left-side-rating "
                      style={{
                        fontSize: "14px",
                        color: "#007185",
                        cursor: "pointer",
                      }}
                    >
                      {" "}
                      <div className="px-1">
                        {productReviewCount !== false && (
                          <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            value={productReviewCount}
                            edit={false}
                            activeColor="#ffd700"
                          />
                        )}
                      </div>
                      {productReviewCount !== false && (
                        <div className="px-2">
                          <span>
                            {parseFloat(productReviewCount).toFixed(1)} ratings
                            | {allRating.length}{" "}
                            {allRating.length > 1 ? "reviews" : "review"}
                          </span>{" "}
                        </div>
                      )}
                    </div>
                  </Link>
                </div>
              </div>

              <div className="m-2" style={{ margintop: "-13px" }}>
                <div>
                  <div>
                    <span style={{ color: "#686868", fontSize: "18px" }}>
                      Price :{" "}
                    </span>
                  </div>
                  {!product.length === false && (
                    <div
                      class=""
                      style={{ display: "flex", alignItems: "baseline" }}
                    >
                      {" "}
                      <span
                        style={{
                          marginLeft: "43px",
                          fontSize: "30px",
                          fontWeight: "bold",
                          color: "#fec400",
                        }}
                      >
                        SAR{" "}
                        {!product.length === false
                          ? product[0].ProductPrice
                          : 0}
                      </span>{" "}
                      <del>
                        <span
                          style={{
                            fontSize: "18px",
                            color: "#686868",
                            marginLeft: "5px",
                            display: `${
                              product[0].ProductOffer === "null"
                                ? "none"
                                : "block"
                            }`,
                          }}
                        >
                          SAR {product[0].ProductOffer}
                        </span>
                      </del>
                    </div>
                  )}
                </div>
                <div>
                  <span
                    style={{
                      marginLeft: "43px",
                      fontSize: "15px",
                      margintop: "-8px,",
                      color: "gray",
                    }}
                  >
                    All prices include VAT.
                  </span>
                </div>
              </div>
              {/* <div className="m-2 p-2">
                <div
                  className="p-2"
                  style={{
                    backgroundColor: "#F4ECB6",
                    borderRadius: "5px",
                    alignItems: "center",
                    boxShadow: "rgb(213 205 149) 0px 3px 7px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      fontSize: "20px",
                      color: "#686868",
                    }}
                  >
                    <span>
                      {" "}
                      <FontAwesomeIcon className="carAni" icon={faTruck} />
                    </span>

                    <span style={{ marginLeft: "20px" }}>Cash On Delivery</span>
                  </div>
                </div>
              </div> */}
              {/* <div className="mt-2">
              <DeliveryFee></DeliveryFee>
            </div> */}
              <div
                className="m-2 mt-2"
                style={{
                  display: `${
                    product[0] && product[0].isSizeShow === false
                      ? "none"
                      : "none"
                  }`,
                }}
              >
                <div
                  className="pt-2"
                  style={{
                    borderRadius: "5px",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      fontSize: "20px",
                      color: "#686868",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span>Size :</span>

                    <span style={{ marginLeft: "20px" }}>
                      {" "}
                      <select
                        // value={dt[0].pSize != undefined && dt[0].pSize}
                        // onChange={(e) => ProductSize(e.target.value)}
                        class="form-select w-80"
                        aria-label="Default select example"
                        style={{
                          backgroundColor: "#fff",
                          color: "#362121",
                          boxShadow: "0 5px 45px -10px rgb(0 0 0 / 25%)",
                          border: "none",
                          boxSizing: "border-box",
                          width: "280px",
                        }}
                      >
                        <option selected>Select Size</option>

                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                      </select>
                    </span>
                  </div>
                </div>
              </div>

              <div className="m-2" style={{ display: "none" }}>
                <div
                  className="p-2"
                  style={{
                    backgroundColor: "#F4ECB6",
                    borderRadius: "5px",
                    alignItems: "center",
                    boxShadow: "rgb(213 205 149) 0px 3px 7px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      fontSize: "20px",
                      color: "#686868",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span>Qty : </span>
                    <span style={{ marginLeft: "80px" }}>
                      <QuantityPicker min={1} max={15} smooth value={1} />
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="p-2 mt-3 rightSideCashOnDe"
                style={
                  {
                    // backgroundColor: "#F4ECB6",
                    // borderRadius: "5px",
                    // alignItems: "center",
                    // boxShadow: "rgb(213 205 149) 0px 3px 7px",
                  }
                }
              >
                <div
                  style={{
                    display: "flex",

                    color: "#FEC400",
                  }}
                >
                  <span>
                    {" "}
                    <FontAwesomeIcon className="carAni" icon={faTruck} />
                  </span>

                  <span
                    style={{
                      marginLeft: "13px",
                      fontSize: "15px",
                      color: "black",
                    }}
                  >
                    Cash On Delivery
                  </span>
                </div>
              </div>

              <div className="mt-3">
                <span>
                  {" "}
                  <PaymentsIcon
                    style={{ fontSize: "18px", color: "#FEC400" }}
                  ></PaymentsIcon>
                </span>

                <span
                  style={{
                    marginLeft: "13px",
                    fontSize: "14px",
                    color: "gray",
                  }}
                >
                  Delivery fee{" "}
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#FEC400",
                    }}
                  >
                    20
                  </span>{" "}
                  SAR
                </span>
              </div>
              <div className="mt-3" style={{ display: "none" }}>
                <span>
                  {" "}
                  <PaymentsIcon
                    style={{ fontSize: "18px", color: "#FEC400" }}
                  ></PaymentsIcon>
                </span>

                <span
                  style={{
                    marginLeft: "13px",
                    fontSize: "14px",
                    color: "gray",
                  }}
                >
                  Delivery fee will be determined by negotiation
                </span>
              </div>

              <div class="m-2 ">
                <div className="row  p-2 ">
                  <div className="col-8">
                    <button
                      onClick={() => {
                        setAniImg({
                          firstImgs: fristImage[0],
                          dt: [dt[0], [fristImage[0]]],
                        });
                        // setSeasonProduct(fristImage);
                      }}
                      style={{
                        backgroundColor: "#fec400",

                        fontWeight: "500",
                        fontSize: "17px",
                      }}
                      variant="warning"
                      type="button"
                      class="btn btn-warning btn-lg w-100"
                    >
                      <FontAwesomeIcon
                        icon={faCartPlus}
                        style={{ marginRight: "5px" }}
                      />
                      <span>Add To Card</span>
                    </button>
                  </div>
                  <div className="col-4">
                    <button
                      style={{
                        border: "1px solid #fec400",

                        fontWeight: "500",
                        fontSize: "17px",
                        width: "100%",
                        borderRadius: "5px",
                        padding: "9px",
                        backgroundColor: "white",
                      }}
                    >
                      <FavoriteBorderIcon></FavoriteBorderIcon>
                    </button>
                  </div>
                </div>
                {/* <div className="w-100 p-2" style={{ display: "none" }}>
                  <button
                    style={{
                      backgroundColor: "#fec400",
                      fontWeight: "500",
                      fontSize: "17px",
                    }}
                    variant="warning"
                    class="btn btn-warning btn-lg w-100"
                  >
                    <FontAwesomeIcon
                      icon={faBagShopping}
                      style={{ marginRight: "5px" }}
                    />
                    <span>Buy Now</span>
                  </button>
                </div> */}
              </div>
              <div>
                {!product.length === false && (
                  <div
                    className="m-2"
                    // style={{
                    //   display: `${
                    //     product[0].ProductDescription === "null"
                    //       ? "none"
                    //       : "block"
                    //   }`,
                    // }}
                    style={{
                      display: "none",
                    }}
                  >
                    <span
                      style={{
                        color: "#686868",
                        fontSize: "20px",
                      }}
                    >
                      Details
                    </span>

                    {/* 
                  <ShowMoreText */}

                    {/* // lines={3}
                    // more="Show more"
                    // less="Show less"
                    // className="content-css"
                    // anchorClass="my-anchor-css-class"
                    // onClick={executeOnClick}
                    // expanded={false}
                    // width={100}
                    // truncatedEndingComponent={"... "} */}
                    {/* > */}
                    {/* <span> </span> */}
                    {/* </ShowMoreText> */}

                    <div>
                      <div class="c" style={{ width: " 90%", padding: "5px" }}>
                        {product[0].ProductDescription}
                      </div>
                    </div>
                  </div>
                )}
                {!product.length === false && (
                  <div>
                    {product[0].isProductDescription === true && (
                      <div>
                        {" "}
                        <div
                          className="noteImage "
                          style={{ fontSize: "14px" }}
                        >
                          <div>
                            <span
                              style={{
                                color: "#686868",
                                fontSize: "18px",
                              }}
                            >
                              <b>
                                {!product.length === false &&
                                  product[0].productDescriptionName}{" "}
                                :
                              </b>
                            </span>
                          </div>
                          <ShowMoreText
                            /* Default options */
                            lines={3}
                            more="Show more"
                            less="^ Show less"
                            className="content-css"
                            anchorClass="my-anchor-css-class"
                            expanded={false}
                            width={280}
                            height={100}
                            truncatedEndingComponent={"... "}
                          >
                            <div
                              dangerouslySetInnerHTML={{
                                __html: product[0].FinalProductDescription,
                              }}
                            ></div>
                          </ShowMoreText>
                        </div>
                        {!product.length === false && (
                          <div>
                            {product[0].productMoreDetailsMainImageUrl !==
                              "" && (
                              <div className="mt-2">
                                <div>
                                  <span
                                    style={{
                                      color: "#686868",
                                      fontSize: "18px",
                                    }}
                                  >
                                    {product[0].productMoreDetailsImageName} :
                                  </span>
                                </div>
                                <div
                                  className={`mt-2 ${
                                    showImage === true && "detailsImageHide"
                                  }`}
                                >
                                  <img
                                    className={`${
                                      showImage ? "hideImage" : "showImage"
                                    }`}
                                    style={{
                                      width: "100%",
                                      borderRadius: "10px",
                                    }}
                                    src={
                                      product[0].productMoreDetailsMainImageUrl
                                    }
                                    alt=""
                                  />
                                </div>
                                <div
                                  class="d-flex justify-content-center "
                                  style={{ marginTop: "-10px" }}
                                >
                                  {showImage ? (
                                    <Button
                                      style={{
                                        backgroundColor: " #fec400",

                                        boxShadow: "none",
                                        color: "black",
                                      }}
                                      variant="contained"
                                      onClick={() => setShowImage(!showImage)}
                                      size="small"
                                    >
                                      {" "}
                                      Show Image
                                    </Button>
                                  ) : (
                                    <Button
                                      style={{
                                        border: "1px solid #fec400",
                                        color: "#fec400",
                                      }}
                                      variant="outlined"
                                      size="small"
                                      onClick={() => setShowImage(!showImage)}
                                    >
                                      {" "}
                                      Show less
                                    </Button>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
                {!product.length === false && (
                  <div>
                    {product[0].ProductImportantInfoText !== "" && (
                      <div className="mt-2">
                        <div>
                          <span
                            style={{
                              color: "#686868",
                              fontSize: "18px",
                            }}
                          >
                            <b
                              style={{
                                color: `${product[0].ProductImportantInfoTitleColor}`,
                              }}
                            >
                              {product[0].ProductImportantInfoName} :
                            </b>
                          </span>
                        </div>
                        <div
                          className="p-1"
                          style={{
                            borderRadius: "5px",
                            paddingLeft: "10px",
                            backgroundColor: `${product[0].ProductImportantInfoBackgroundColor}`,
                            color: `${product[0].ProductImportantInfoContentColor}`,
                          }}
                        >
                          {product[0].ProductImportantInfoText}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div
              className="col-sm-12 col-md-6 col-lg-2  border pt-3"
              style={{
                display: ` ${window.innerWidth >= 991 ? "block" : "none"} `,
              }}
            >
              <aside ref={stickyRef}>
                <div className=" ">
                  <div>
                    <div style={{ fontSize: "13px", color: "gray" }}>
                      Product's name :
                    </div>
                    <div style={{ fontSize: "15px", width: "100px" }}>
                      <span>
                        {!product.length === false && product[0].ProductName}
                      </span>
                    </div>
                  </div>
                  {productReviewCount !== false && (
                    <div>
                      <Link to="rating" spy={true} smooth={true}>
                        <div style={{ fontSize: "13px", color: "gray" }}>
                          Rating :
                        </div>
                        <div
                          style={{
                            marginLeft: "20px",
                            fontSize: "15px",
                            width: "100px",
                          }}
                        >
                          <div
                            className="d-flex justify-content-between align-items-center left-side-rating "
                            style={{
                              fontSize: "14px",
                              color: "#007185",
                              cursor: "pointer",
                            }}
                          >
                            <div>
                              <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                isHalf={true}
                                value={productReviewCount}
                                edit={false}
                                activeColor="#ffd700"
                              />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )}

                  <div>
                    <div style={{ fontSize: "13px", color: "gray" }}>
                      Category :
                    </div>
                    <div
                      style={{
                        marginLeft: "20px",
                        fontSize: "15px",
                        width: "100px",
                      }}
                    >
                      <span>
                        {!product.length === false &&
                          product[0].ProductCategory}
                      </span>
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: "13px", color: "gray" }}>
                      Brand :
                    </div>
                    <div
                      style={{
                        marginLeft: "20px",
                        fontSize: "15px",
                        width: "100px",
                      }}
                    >
                      <span>
                        <a href="#" className="brandStyle">
                          SKY LAND
                        </a>
                      </span>
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: "13px", color: "gray" }}>
                      Product's id :
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        width: "100px",
                        color: "gray",
                      }}
                    >
                      <span>{!product.length === false && product[0]._id}</span>
                    </div>
                  </div>

                  <div className=""></div>
                  <div class="" style={{ display: "flex" }}>
                    {" "}
                    <div>
                      <span style={{ fontSize: "13px" }}>SAR {` `}</span>
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: "28px",
                          fontWeight: "bold",
                          color: "#FEC400",
                        }}
                        className="px-1"
                      >
                        {!product.length === false
                          ? product[0].ProductPrice
                          : 0}
                      </span>
                    </div>
                    <del
                      className="d-flex
                "
                      style={{ alignItems: "flex-end" }}
                    >
                      <span
                        style={{
                          fontSize: "18px",
                          color: "#686868",
                          marginLeft: "5px",
                          display: `${
                            !product.length === false &&
                            product[0].ProductOffer === "null"
                              ? "none"
                              : "block"
                          }`,
                        }}
                      >
                        SAR{" "}
                        {!product.length === false && product[0].ProductOffer}
                      </span>
                    </del>
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: "12px",
                        margintop: "-8px,",
                        color: "gray",
                      }}
                    >
                      All prices include{" "}
                      <span style={{ color: "red" }}>VAT</span>.
                    </span>
                  </div>
                  <div className="mt-2">
                    <span style={{ color: "gray" }}>Stock : </span>
                    <span style={{ color: "green", fontSize: "18px" }}>
                      In Stock.
                    </span>{" "}
                  </div>

                  <div
                    className="p-2 mt-3 rightSideCashOnDe"
                    style={
                      {
                        // backgroundColor: "#F4ECB6",
                        // borderRadius: "5px",
                        // alignItems: "center",
                        // boxShadow: "rgb(213 205 149) 0px 3px 7px",
                      }
                    }
                  >
                    <div
                      style={{
                        display: "flex",

                        color: "#FEC400",
                      }}
                    >
                      <span>
                        {" "}
                        <FontAwesomeIcon className="carAni" icon={faTruck} />
                      </span>

                      <span
                        style={{
                          marginLeft: "13px",
                          fontSize: "15px",
                          color: "black",
                        }}
                      >
                        Cash On Delivery
                      </span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <span>
                      {" "}
                      <PaymentsIcon
                        style={{ fontSize: "18px", color: "#FEC400" }}
                      ></PaymentsIcon>
                    </span>

                    <span
                      style={{
                        marginLeft: "13px",
                        fontSize: "14px",
                        color: "gray",
                      }}
                    >
                      Delivery fee{" "}
                      <span
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          color: "#FEC400",
                        }}
                      >
                        20
                      </span>{" "}
                      SAR
                    </span>
                  </div>
                  <div className="mt-3" style={{ display: "none" }}>
                    <span>
                      {" "}
                      <PaymentsIcon
                        style={{ fontSize: "18px", color: "#FEC400" }}
                      ></PaymentsIcon>
                    </span>

                    <span
                      style={{
                        marginLeft: "13px",
                        fontSize: "14px",
                        color: "gray",
                      }}
                    >
                      Delivery fee will be determined by negotiation
                    </span>
                  </div>
                  <div className=" mt-3 " style={{ fontSize: "13px" }}>
                    <div className="">
                      <button
                        onClick={() => {
                          setAniImg({
                            firstImgs: fristImage[0],
                            dt: [dt[0], [fristImage[0]]],
                          });
                          // setSeasonProduct(fristImage);
                        }}
                        style={{
                          backgroundColor: "#fec400",
                          borderRadius: "50px",
                          fontWeight: "500",

                          fontSize: "13px",
                        }}
                        variant="warning"
                        type="button"
                        class="btn btn-warning btn-lg w-100"
                      >
                        <FontAwesomeIcon
                          icon={faCartPlus}
                          style={{ marginRight: "5px" }}
                        />
                        <span>Add To Card</span>
                      </button>
                    </div>
                    <div className="mt-2 pb-2">
                      <button
                        style={{
                          border: "1px solid #fec400",
                          borderRadius: "50px",
                          fontWeight: "500",
                          fontSize: "13px",
                          width: "100%",

                          padding: "9px",
                          backgroundColor: "white",
                        }}
                      >
                        <FavoriteBorderIcon></FavoriteBorderIcon>
                      </button>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        )}
        {!product.length === false && (
          <div className="mt-5">
            {window.innerWidth <= 766 && (
              <div id="ratingMobile">
                <div>
                  <div className="mt-3">
                    <h5 style={{ margin: "0px", padding: "0px" }}>
                      Customer reviews
                    </h5>
                  </div>
                  <div
                    className="d-flex align-items-center left-side-rating "
                    style={{
                      fontSize: "14px",
                      color: "#007185",
                      cursor: "pointer",
                    }}
                  >
                    <div>
                      {productReviewCount !== false && (
                        <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={24}
                          isHalf={true}
                          value={productReviewCount}
                          edit={false}
                          activeColor="#ffd700"
                        />
                      )}
                    </div>

                    <div className="mx-2">
                      {productReviewCount !== false && (
                        <span>
                          {parseFloat(productReviewCount).toFixed(1)} ratings |{" "}
                          {allRating.length} reviews
                        </span>
                      )}
                    </div>
                  </div>
                  {window.innerWidth >= 766 && (
                    <div id="rating">this is rating</div>
                  )}
                  {!allRating.length === false &&
                    allRating.map((re, index) => (
                      <div className="mt-3">
                        <div>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <div>
                                <img
                                  style={{
                                    borderRadius: "50%",
                                    height: "28px",
                                  }}
                                  src={unknownPeople}
                                  alt=""
                                />
                              </div>
                              <div>
                                <span
                                  className="px-2"
                                  style={{ fontSize: "13px" }}
                                >
                                  <b>{re.rating.name}</b>
                                </span>
                              </div>
                            </div>
                            <div
                              className="px-1"
                              style={{ color: "gray", fontSize: "11px" }}
                            >
                              <span>
                                {new Date(re.rating.time).getDate()}/
                                {new Date(re.rating.time).getMonth()}/
                                {new Date(re.rating.time).getFullYear()}
                              </span>
                            </div>
                          </div>

                          <div className="d-flex align-items-center">
                            <div>
                              <ReactStars
                                count={5}
                                isHalf={true}
                                size={15}
                                value={re.rating.rating}
                                edit={false}
                                activeColor="#ffd700"
                              />
                            </div>
                            <div
                              className="px-1"
                              style={{ color: "gray", fontSize: "11px" }}
                            >
                              <span>
                                {" "}
                                (Rating{" "}
                                {parseFloat(re.rating.rating).toFixed(1)} out of
                                5){" "}
                              </span>
                            </div>
                          </div>

                          {re.rating.reviewImage !== false && (
                            <div className="mb-2">
                              <div class=" " style={{}}>
                                <div
                                  className={`mt-2 ${
                                    showReviewImage.id === index &&
                                    showReviewImage.state === true &&
                                    "detailsImageHide"
                                  }`}
                                >
                                  <img
                                    className={`${
                                      showReviewImage.id === index &&
                                      showReviewImage.state === true
                                        ? "showImage"
                                        : "hideImage"
                                    }`}
                                    style={{
                                      width: "100%",
                                      borderRadius: "10px",
                                    }}
                                    src={re.rating.reviewImage}
                                    alt=""
                                  />
                                </div>

                                <div
                                  className="d-flex justify-content-center"
                                  style={{ marginTop: "-10px" }}
                                >
                                  {showReviewImage.id === index &&
                                  showReviewImage.state === true ? (
                                    <Button
                                      style={{
                                        backgroundColor: " #fec400",

                                        boxShadow: "none",
                                        color: "black",
                                      }}
                                      variant="contained"
                                      onClick={() =>
                                        setShowReviewImage({
                                          state: !showReviewImage.state,
                                          id: index,
                                        })
                                      }
                                      size="small"
                                    >
                                      {" "}
                                      Show Image
                                    </Button>
                                  ) : (
                                    <Button
                                      style={{
                                        border: "1px solid #fec400",
                                        color: "#fec400",
                                      }}
                                      variant="outlined"
                                      size="small"
                                      onClick={() =>
                                        setShowReviewImage({
                                          state: !showReviewImage.state,
                                          id: index,
                                        })
                                      }
                                    >
                                      {" "}
                                      Show less
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}

                          {re.rating.msg !== "" && (
                            <div
                              className="p-2"
                              style={{
                                color: "#424242",
                                backgroundColor: "rgba(255, 215, 0, 0.23)",
                                fontSize: "13px",
                                borderRadius: "5px",
                              }}
                            >
                              <span>{re.rating.msg}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </SingleProductback>
  );
}

const SingleProductback = styled.div`
  .carousel .thumb {
    width: 80px !important;
    border: 0.5px solid #fec400 !important;
    border-radius: 5px;
  }

  .carousel .thumbs-wrapper {
    margin: 10px !important;
    overflow: hidden;
  }
  .brandStyle {
    text-decoration: none;
    color: #007185;
  }
  .brandStyle:hover {
    text-decoration: underline;
    color: #007185;
  }
  .rightSideDisplay {
    border-radius: 5px;
  }
  .rightSideCashOnDe {
    border-radius: 10px;
    border: 0;
    background-color: #fff;

    box-shadow: 0 5px 45px -10px rgb(0 0 0 / 25%);
    box-sizing: border-box;
  }
  .noteImage {
    width: 100%;
  }
  .noteImage img {
    width: 100%;
    display: inline-block;
  }
  .detailsImageHide {
    -webkit-mask-image: -webkit-gradient(
      linear,
      center bottom,
      center top,

      color-stop(6, rgba(0, 0, 0, 9)),
      color-stop(0, rgba(0, 0, 0, 0))
    );
  }
  .hideImage {
    height: 100px;
    object-fit: none;
  }
  .showImage {
  }
  .productColorV {
  }
  .productColorV::-webkit-scrollbar {
    width: 20px;
    height: 5px;
    cursor: pointer;
  }

  /* Track */
  .productColorV::-webkit-scrollbar-track {
    box-shadow: none;
    border-radius: 10px;
  }

  /* Handle */
  .productColorV::-webkit-scrollbar-thumb {
    background: #fec400;
    border-radius: 10px;
  }

  /* Handle on hover */
  .productColorV::-webkit-scrollbar-thumb:hover {
    background: #c39600;
  }
  .makeStyles-copyContainer-5 {
    display: none;
  }
  .makeStyles-iconContainer-3 {
    padding: 0px;
  }
  .makeStyles-container-1 {
    padding: 0px;
  }
  .left-side-rating:hover {
    text-decoration: underline;
  }
`;
