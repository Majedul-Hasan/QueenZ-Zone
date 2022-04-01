import React from "react";
import starPic from "../../Asset/starPic.png";

export default function MapSingleProduct({ dt }) {
  console.log(dt);
  return (
    <div
      className="col-6 mb-3 pb-3"
      style={{
        margin: "0px",
        padding: "0px",
      }}
    >
      <div className="">
        <div>
          <div
            className="p-1"
            style={{
              height: "315px",
              margin: "0 auto",
              display: "flex",
            }}
          >
            <div
              className=""
              style={{
                backgroundColor: "white",
              }}
            >
              <img
                style={{
                  width: "100%",

                  borderRadius: "5px 5px 0px 0px ",
                }}
                src={dt.img}
                class=""
                alt="..."
              />
              <div
                className=""
                style={{
                  backgroundColor: "#FFF7BF",
                  borderRadius: "0px 0px 5px 5px",
                  fontSize: "10px",
                  fontFamily: "Poppins",
                  width: "100%",
                  height: "140px",
                  boxShadow: "rgb(213 205 149)  0 3px 7px",
                }}
              >
                <div
                  className="p-1"
                  style={{
                    fontSize: "16px",
                    fontFamily: "Poppins",
                    width: "100%",
                    height: "90px",
                    // backgroundColor: "#FFF7BF",
                  }}
                >
                  <span>{dt.Product_name}</span>
                </div>
                <div
                  className="p-1"
                  style={{ fontSize: "13px", fontFamily: "Poppins" }}
                >
                  <span>SAR </span>
                  <span className="">
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
                    <strong>{dt.prise}</strong>
                  </span>
                </div>
                <div
                  className=""
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <div className="d-flex flex-row-reverse bd-highlight ">
                    <div className="d-flex ">
                      <div
                        className="d-flex justify-content-evenly"
                        style={{
                          marginRight: "4px",
                        }}
                      >
                        {dt.reviewStar.length >= 1 ? (
                          dt.reviewStar.map((starNum) => (
                            <div>
                              <img
                                style={{ width: "14px" }}
                                src={starPic}
                                alt=""
                              />
                            </div>
                          ))
                        ) : (
                          <span></span>
                        )}
                      </div>
                    </div>
                    <div
                      className=""
                      style={{
                        fontSize: "10px",
                        display: "flex",
                        alignItems: "center",
                        marginTop: "2px",
                        marginRight: "3px",
                      }}
                    >
                      ({dt.reviewRate})
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
