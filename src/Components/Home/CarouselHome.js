import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function CarouselHome() {
  return (
    <div>
      <Carousel
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
      >
        <div>
          <img
            src="https://f.nooncdn.com/mpcms/EN0002/assets/67388360-ae7b-4403-86a7-104b96bf5635.png"
            alt="product"
          />
        </div>
        <div>
          <img
            src={
              "https://f.nooncdn.com/mpcms/EN0002/assets/67388360-ae7b-4403-86a7-104b96bf5635.png"
            }
            alt="product"
          />
        </div>
        <div>
          <img
            src={
              "https://f.nooncdn.com/mpcms/EN0002/assets/67388360-ae7b-4403-86a7-104b96bf5635.png"
            }
            alt="product"
          />
        </div>
      </Carousel>

      {/* <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={banner} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={banner} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={banner} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> */}
    </div>
  );
}
