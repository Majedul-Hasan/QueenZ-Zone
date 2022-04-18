import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { QuantityPicker } from "react-qty-picker";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useParams } from "react-router-dom";

export default function SingleProdductPage() {
  let { Category, PNAME, PID } = useParams();

  console.log(Category, PNAME, PID);

  // useState for product
  const [product, setProduct] = useState([]);

  // this is first image when page was load
  const [fristImage, setFristImage] = useState([]);

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
        setFristImage(json[0].ProductImage[0][0].image);
      });
  }, []);

  // setTimeout(console.log(product[0].ProductPrice), 10000);

  console.log("this is product : ", !product.length);

  return (
    <div>
      <div className="mb-5 pb-5">
        {product.length === true ? (
          <div>
            <h3>loading</h3>
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
                  <h4>hello</h4>
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
                  backgroundColor: "#F4ECB6",
                  borderRadius: "5px",
                  alignItems: "center",
                  boxShadow: "rgb(213 205 149) 0px 3px 7px",
                }}
              >
                <div>
                  <h5
                    style={{
                      marginTop: "-20px",
                      margin: "0px",
                      padding: "0px",
                      marginLeft: "10px",
                      color: "#686868",
                      fontSize: "20px",
                    }}
                  >
                    Color :{" "}
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
                      <h4>hello</h4>
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
                            }}
                          ></div>
                        </Button>
                      ))
                    ) : (
                      <h4>hello</h4>
                    )}
                  </div>
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
                    <FontAwesomeIcon icon={faTruck} />
                  </span>

                  <span style={{ marginLeft: "20px" }}>Cash On Delivery</span>
                </div>
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
          </div>
        )}
      </div>
    </div>
  );
}
