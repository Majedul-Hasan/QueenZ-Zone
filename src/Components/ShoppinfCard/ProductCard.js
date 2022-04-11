import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function ProductCard({ dt }) {
  console.log(dt);
  return (
    <div>
      <div
        className=" mt-2 p-1 d-flex justify-content-between"
        style={{ border: "1px solid green", borderRadius: "10px" }}
      >
        <div>
          <div className="" style={{ width: "200px" }}>
            <Carousel>
              {dt[1].map((dt) => (
                <div>
                  <img src={dt} />
                </div>
              ))}
            </Carousel>
            <div>{dt[0].ProductName}</div>
          </div>
        </div>
        <div className="">
          <div
            className="pt-1"
            style={{ fontSize: "13px", fontFamily: "Poppins" }}
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
              <strong>{dt[0].ProductPrice}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
