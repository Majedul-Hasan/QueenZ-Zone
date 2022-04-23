import PageviewOutlinedIcon from "@mui/icons-material/PageviewOutlined";
import { Button } from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function OrderImage({ dt }) {
  console.log("this is data : ", dt);
  return (
    <div class="d-flex justify-content-between mt-2">
      <div className="w-50">
        <div style={{ width: "90%" }}>
          <Carousel>
            {dt[1].map((img) => (
              <div>
                <img src={img[0]} />
              </div>
            ))}
          </Carousel>
        </div>
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
            <span style={{ color: "#686868", fontSize: "14px" }}>Qty :</span>
            <span> {dt[0].qty === undefined ? 1 : dt[0].qty}</span>
          </div>
          <div>
            <span style={{ color: "#686868", fontSize: "14px" }}>Size :</span>
            <span> {dt[0].pSize}</span>
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
                    SAR{" "}
                    {dt[0].ProductOffer === "null"
                      ? dt[0].ProductPrice
                      : dt[0].ProductOffer}
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
                      SAR {dt[0].ProductPrice}
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
          <div className="mt-2">
            <Button
              style={{ backgroundColor: "#fec400" }}
              variant="contained"
              endIcon={<PageviewOutlinedIcon />}
            >
              View
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
