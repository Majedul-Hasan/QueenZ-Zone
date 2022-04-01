import React from "react";
import starPic from "../../Asset/starPic.png";

export default function SingleProductHomePage({ dt }) {
  return (
    <div>
      <div>
        <div
          className="p-1"
          style={{ backgroundColor: "#FFF7BF", height: "300px" }}
        >
          <div
            className="m-1"
            style={{
              backgroundColor: "white",
              height: "270px",
            }}
          >
            <img
              style={{
                width: "145px",
                height: "145px",
                borderRadius: "5px 5px 0px 0px ",
              }}
              src={dt.img}
              class=""
              alt="..."
            />
            <div
              className="p-1"
              style={{
                fontSize: "15px",
                fontFamily: "Poppins",
                width: "145px",
                height: "70px",
              }}
            >
              <span>{dt.Product_name}</span>
            </div>
            <div
              className="p-1"
              style={{ fontSize: "14px", fontFamily: "Poppins" }}
            >
              <span>SAR </span>
              <span className="">
                {" "}
                {dt.discount ? (
                  <strong>
                    <s>{dt.discount}</s>
                  </strong>
                ) : (
                  <strong>
                    <s>{dt.prise}</s>
                  </strong>
                )}
              </span>
            </div>
            <div
              className=""
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <div className="d-flex flex-row-reverse bd-highlight ">
                <div className="d-flex ">
                  <div className="d-flex justify-content-evenly">
                    {dt.reviewStar.length >= 1 ? (
                      dt.reviewStar.map((starNum) => (
                        <div>
                          <img src={starPic} alt="" />
                        </div>
                      ))
                    ) : (
                      <span></span>
                    )}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
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
  );
}
