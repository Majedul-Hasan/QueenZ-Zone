import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import React from "react";
import styled from "styled-components";

export default function ProductGalleryCarousel() {
  return (
    <ProductGalleryCarouselBack className="container mt-3">
      <div class="d-flex justify-content-between">
        <div className="mb-2">
          <h5 className="title">
            <b>Min 50% Off women's fashion</b>
          </h5>
        </div>
        <div>
          <button
            style={{
              display: "block",
              backgroundColor: "black",
              border: "none",
              color: "white",
              fontSize: "15px",
            }}
          >
            Shop Now
          </button>
        </div>
      </div>
      <ScrollingCarousel rightArrow={true} leftArrow={false}>
        <div className="mx-1">
          <img
            className=""
            src="https://f.nooncdn.com/ads/banner-232x232/en_mb_uae-sfb-01 (87).1668744968.9847252.png"
            class="img-fluid"
            style={{ width: "130px" }}
            alt="..."
          />{" "}
        </div>
        <div className="mx-1">
          <img
            className=""
            src="https://f.nooncdn.com/ads/banner-232x232/en_mb_uae-sfb-01 (87).1668744968.9847252.png"
            class="img-fluid"
            style={{ width: "130px" }}
            alt="..."
          />{" "}
        </div>
        <div className="mx-1">
          <img
            className=""
            src="https://f.nooncdn.com/ads/banner-232x232/en_mb_uae-sfb-01 (87).1668744968.9847252.png"
            class="img-fluid"
            style={{ width: "130px" }}
            alt="..."
          />{" "}
        </div>
        <div className="mx-1">
          <img
            className=""
            src="https://f.nooncdn.com/ads/banner-232x232/en_mb_uae-sfb-01 (87).1668744968.9847252.png"
            class="img-fluid"
            style={{ width: "130px" }}
            alt="..."
          />{" "}
        </div>
        <div className="mx-1">
          <img
            className=""
            src="https://f.nooncdn.com/ads/banner-232x232/en_mb_uae-sfb-01 (87).1668744968.9847252.png"
            class="img-fluid"
            style={{ width: "130px" }}
            alt="..."
          />{" "}
        </div>
        <div className="mx-1">
          <img
            className=""
            src="https://f.nooncdn.com/ads/banner-232x232/en_mb_uae-sfb-01 (87).1668744968.9847252.png"
            class="img-fluid"
            style={{ width: "130px" }}
            alt="..."
          />{" "}
        </div>
        <div className="mx-1">
          <img
            className=""
            src="https://f.nooncdn.com/ads/banner-232x232/en_mb_uae-sfb-01 (87).1668744968.9847252.png"
            class="img-fluid"
            style={{ width: "130px" }}
            alt="..."
          />{" "}
        </div>
        <div className="mx-1">
          <img
            className=""
            src="https://f.nooncdn.com/ads/banner-232x232/en_mb_uae-sfb-01 (87).1668744968.9847252.png"
            class="img-fluid"
            style={{ width: "130px" }}
            alt="..."
          />{" "}
        </div>
        <div className="mx-1">
          <img
            className=""
            src="https://f.nooncdn.com/ads/banner-232x232/en_mb_uae-sfb-01 (87).1668744968.9847252.png"
            class="img-fluid"
            style={{ width: "130px" }}
            alt="..."
          />{" "}
        </div>
        <div className="mx-1">
          <img
            className=""
            src="https://f.nooncdn.com/ads/banner-232x232/en_mb_uae-sfb-01 (87).1668744968.9847252.png"
            class="img-fluid"
            style={{ width: "130px" }}
            alt="..."
          />{" "}
        </div>
        <div className="mx-1">
          <img
            className=""
            src="https://f.nooncdn.com/ads/banner-232x232/en_mb_uae-sfb-01 (87).1668744968.9847252.png"
            class="img-fluid"
            style={{ width: "130px" }}
            alt="..."
          />{" "}
        </div>
        <div className="mx-1">
          <img
            className=""
            src="https://f.nooncdn.com/ads/banner-232x232/en_mb_uae-sfb-01 (87).1668744968.9847252.png"
            class="img-fluid"
            style={{ width: "130px" }}
            alt="..."
          />{" "}
        </div>
      </ScrollingCarousel>
    </ProductGalleryCarouselBack>
  );
}

const ProductGalleryCarouselBack = styled.div`
  button {
    display: none;
  }
  background-color: #fffede;
  padding: 10px 10px;

  @media screen and (max-width: 550px) {
    .title {
      font-size: 15px;
    }
  }
`;
