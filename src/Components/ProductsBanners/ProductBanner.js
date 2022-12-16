import React from "react";
import styled from "styled-components";

export default function ProductBanner() {
  return (
    <ProductBannerBack className="container mt-2 px-0">
      <div
        className="main p-2"
        style={{ backgroundColor: "#ebebeb", borderRadius: "10px" }}
      >
        <div className="row px-0 mx-0">
          <div className="col-sm-12 col-md-6 mb-2">
            <img
              src="https://f.nooncdn.com/ads/banner-732x732/en_mb_ksa-spot-01%20(12)%20(1).1668744146.53533.png"
              class="img-fluid"
              style={{ width: "100%", borderRadius: "10px" }}
              alt="..."
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="row">
              <div className="col-6">
                <img
                  src="https://f.nooncdn.com/ads/banner-355x355/en_mb_ksa-spot-02%20(2).1668744355.8736277.png"
                  class="img-fluid"
                  style={{ width: "100%", borderRadius: "10px" }}
                  alt="..."
                />
              </div>
              <div className="col-6">
                <img
                  src="https://f.nooncdn.com/ads/banner-355x355/en_mb_uae-spot-01%20(49).1668559879.5112576.png"
                  class="img-fluid"
                  style={{ width: "100%", borderRadius: "10px" }}
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProductBannerBack>
  );
}

const ProductBannerBack = styled.div``;
