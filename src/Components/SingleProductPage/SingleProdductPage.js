import {
  faBagShopping,
  faCartPlus,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { QuantityPicker } from "react-qty-picker";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useParams } from "react-router-dom";
import "./AnimationSingleproductPage.css";

export default function SingleProdductPage({ setAniImg }) {
  let { Category, PNAME, PID } = useParams();

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
      fetch("https://glacial-shore-36532.herokuapp.com/visitorInfo", {
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
      product: props,
    };

    setVisitorInfo(vData);
    setCallUseEffectForVisitorInfo(2);
  };

  // useEffect for fetch data
  useEffect(() => {
    // Update the document title using the browser API
    fetch(
      `https://glacial-shore-36532.herokuapp.com/queenZoneSingleProduct/${PID}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setProduct(json);
        setDt(json);
        getData(json);
        setFristImage(json[0].ProductImage[0][0].image);
      });
  }, []);

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

  console.log("this is product : ", !product.length);
  // console.log("this is frist image : ", );

  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  };

  return (
    <div>
      <div className="mb-5 pb-5">
        {product.length === true ? (
          <div>
            <div class="spinner-border text-warning" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div>
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
            <div
              style={{
                marginTop: "-30px",
              }}
            >
              <div
                class="m-2 d-flex justify-content-start"
                style={{
                  marginTop: "-30px",

                  borderRadius: "5px",
                  alignItems: "center",
                  border: "2px solid #fec400",
                  overflow: "scroll",
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
                              style={{ width: "50px", borderRadius: "5px" }}
                              src={img[0].image[0]}
                              class="img-fluid "
                              alt="..."
                            ></img>{" "}
                          </Button>
                        </div>
                      ))
                    ) : (
                      <div class="spinner-border text-warning" role="status">
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
                      <div class="spinner-border text-warning" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="m-2"
              style={{ margintop: "-13px", fontSize: "25px" }}
            >
              <div>
                <div>
                  <span style={{ color: "#686868", fontSize: "22px" }}>
                    Name :{" "}
                  </span>
                  <span style={{ color: "black", fontSize: "22px" }}>
                    <b>
                      {" "}
                      {!product.length === false && product[0].ProductName}
                    </b>
                  </span>
                </div>
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
                        color: "red",
                      }}
                    >
                      SAR{" "}
                      {!product.length === false ? product[0].ProductPrice : 0}
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
                  }}
                >
                  All prices include VAT.
                </span>
              </div>
            </div>
            <div className="m-2">
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
            </div>
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

            <div class="m-2 d-flex justify-content-between">
              <div className="w-100 p-2">
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
              <div className="w-100 p-2" style={{ display: "none" }}>
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
              </div>
            </div>
            <div>
              {!product.length === false && (
                <div
                  className="m-2"
                  style={{
                    display: `${
                      product[0].ProductDescription === "null"
                        ? "none"
                        : "block"
                    }`,
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
