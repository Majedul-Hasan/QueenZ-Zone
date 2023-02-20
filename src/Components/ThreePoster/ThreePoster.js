import React from "react";

export default function ThreePoster() {
  return (
    <div
      className="container mt-2"
      style={{ backgroundColor: "#ebebeb", borderRadius: "10px" }}
    >
      <div className="p-2">
        <div className="row ">
          <div className="col-4 ">
            <img
              src="https://f.nooncdn.com/ads/banner-232x232/en_mb_uae-sfb-01 (87).1668744968.9847252.png"
              class="img-fluid"
              style={{ width: "100%" }}
              alt="..."
            />{" "}
          </div>
          <div className="col-4 ">
            {" "}
            <img
              src="https://f.nooncdn.com/ads/banner-232x232/en_mb_uae-sfb-01%20(74).1668675526.1889088.png"
              class="img-fluid"
              style={{ width: "100%" }}
              alt="..."
            ></img>
          </div>
          <div className="col-4 ">
            <a href="http://localhost:3000/QueenZ-Zone/Category/newCat/Necklace%20Set%20(%20Solid%2010k%20)/633ed6802b1040395d5607a6">
              <img
                src="https://f.nooncdn.com/ads/banner-232x232/en_mb_ksa-sfb-01%20(31).1668675868.3992739.png"
                class="img-fluid"
                style={{ width: "100%" }}
                alt="..."
              ></img>
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
