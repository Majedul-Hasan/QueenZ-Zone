import PageviewOutlinedIcon from "@mui/icons-material/PageviewOutlined";
import { Button } from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useHistory } from "react-router-dom";
import OldPlusNewReview from "./OldPlusNewReview";

export default function OrderImage({ dt, loggingUserInfo, or }) {
  let history = useHistory();
  const PnameDemo =
    "Skyland Fitness 2 in 1 Treadmill Machine Walking Pad & Running Pad with Remote Control and Bluetooth Speaker -Motor =2.25 HP-4 HP peak-EM-1282(Gray,Blue,Black)";

  console.log("this is data : ", or);
  console.log("this is filter :::__>>  ", or.orderStatus === "Complete");
  return (
    <div class="d-flex justify-content-between mt-2">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-6">
              <div className="">
                <div>
                  <Carousel
                    showThumbs={false}
                    showArrows={false}
                    showStatus={false}
                  >
                    {dt[1].map((img) => (
                      <div>
                        <img src={img[0]} alt="or" />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div
                className=""
                style={{ cursor: "pointer" }}
                onClick={() => {
                  history.push(
                    `/Category/${dt[0].ProductCategory}/${dt[0].ProductName}/${dt[0]._id}`
                  );
                }}
              >
                <div>
                  <span>{PnameDemo.substring(0, 50) + "..."}</span>

                  <div className="d-flex" style={{ alignItems: "center" }}>
                    {dt[0].ProductImage[0][0].color !== null && (
                      <div className="d-flex" style={{ alignItems: "center" }}>
                        <span style={{ color: "#686868", fontSize: "14px" }}>
                          Color :
                        </span>
                        <div
                          className="mx-2"
                          style={{
                            backgroundColor: dt[0].ProductImage[0][0].color,
                            height: "15px",
                            width: "15px",
                            borderRadius: "50%",
                          }}
                        ></div>
                      </div>
                    )}

                    <div>
                      <span style={{ color: "#686868", fontSize: "14px" }}>
                        Qty :
                      </span>
                      <span> {dt[0].qty === undefined ? 1 : dt[0].qty}</span>
                    </div>
                  </div>

                  <div style={{ display: `${dt[0].pSize ? "block" : "none"}` }}>
                    <span style={{ color: "#686868", fontSize: "14px" }}>
                      Size :
                    </span>
                    <span> {dt[0].pSize}</span>
                  </div>

                  <div>
                    <div className="" style={{ margintop: "-13px" }}>
                      <div>
                        {/* <div>
                  <span style={{ color: "#686868", fontSize: "14px" }}>
                    Price :{" "}
                  </span>
                </div> */}

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
                            {dt[0].ProductOffer != null
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
                                  dt[0].ProductOffer === "null"
                                    ? "none"
                                    : "block"
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
                  <div className="mt-2" style={{ display: "none" }}>
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
          </div>
        </div>

        {or.orderStatus === "Complete" && (
          <div className="col-12 mt-3">
            <OldPlusNewReview
              or={dt[0]}
              order={or._id}
              loggingUserInfo={loggingUserInfo}
            ></OldPlusNewReview>
          </div>
        )}
      </div>
    </div>
  );
}
