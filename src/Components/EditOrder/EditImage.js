import React, { useState } from "react";
import { QuantityPicker } from "react-qty-picker";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
export default function EditImage({ dt }) {
  console.log("this is edit image : ", dt);

  const [qty, setQty] = useState();

  return (
    <div>
      <div class="d-flex justify-content-between">
        <div className="w-50">
          <Carousel>
            {dt[1].map((img) => (
              <div>
                <img src={img[0]} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="w-50">
          <div>
            <span>{dt[0].ProductName}</span>
            <div>
              <span style={{ color: "#686868", fontSize: "14px" }}>
                Category :
              </span>
              <span> {dt[0].ProductCategory}</span>
            </div>
            <div>
              <span style={{ color: "#686868", fontSize: "14px" }}>Size :</span>
              <div className="">
                <select
                  value={dt[0].pSize}
                  //   onChange={(e) => ProductSize(e.target.value)}
                  class="form-select"
                  aria-label="Default select example"
                  style={{
                    backgroundColor: "#fff",

                    boxShadow: "0 5px 45px -10px rgb(0 0 0 / 25%)",
                    border: "none",
                    boxSizing: "border-box",
                    fontWeight: "lighter",
                  }}
                >
                  <option selected>Select Size</option>
                  {dt.productSize.map((sz) => (
                    <option value={sz}>{sz}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <span style={{ color: "#686868", fontSize: "14px" }}>Qty :</span>
              <div className="">
                <div class="d-flex justify-content-center">
                  <QuantityPicker
                    onChange={(value) => {
                      // here value is the final update value of the component
                      // changeQty(value);
                      console.log(value);
                      setQty(value);
                    }}
                    value={dt[0].qty === undefined ? 1 : dt[0].qty}
                    min={1}
                    max={15}
                    smooth
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="" style={{ margintop: "-13px" }}>
                <div>
                  <div>
                    <span style={{ color: "#686868", fontSize: "14px" }}>
                      Price :{" "}
                    </span>
                  </div>

                  <div
                    class=""
                    style={{ display: "flex", alignItems: "baseline" }}
                  >
                    {" "}
                    <span
                      style={{
                        fontSize: "20px",
                        color: "red",
                      }}
                    >
                      SAR {dt[0].ProductOffer}
                    </span>{" "}
                    <del>
                      <span
                        style={{
                          fontSize: "15px",
                          color: "#686868",
                          marginLeft: "5px",
                          display: `${
                            dt[0].ProductOffer === "null" ? "none" : "block"
                          }`,
                        }}
                      >
                        SAR {dt[0].ProductOffer}
                      </span>
                    </del>
                  </div>
                </div>
              </div>
              <div>
                <span
                  style={{
                    fontSize: "15px",
                    margintop: "-8px,",
                    color: "#686868",
                  }}
                >
                  All prices include VAT.
                </span>
              </div>
            </div>
            {/* <div className="mt-5">
              <Button
                style={{ backgroundColor: "#fec400" }}
                variant="contained"
                endIcon={<PageviewOutlinedIcon />}
              >
                View
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
