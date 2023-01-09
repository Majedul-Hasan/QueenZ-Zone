import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styled from "styled-components";

export default function CarouselHome({ carousel, id }) {
  const [oneCaro, setOneCaro] = useState([]);

  useEffect(() => {
    console.log("carouselcarousel ", carousel);

    setOneCaro(carousel.filter((c) => c.componentsSection.id === id));
  }, [carousel]);

  return (
    <CaroselBack>
      {!oneCaro.length === false && (
        <div
          className={` mt-${oneCaro[0].componentsSection.mt} mb-${oneCaro[0].componentsSection.mb} `}
        >
          <div className="mobileStyle">
            <Carousel
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={
                oneCaro[0].componentsSection.Interval === ""
                  ? 2000
                  : oneCaro[0].componentsSection.Interval
              }
            >
              {oneCaro[0].componentsSection.link.map((img) => (
                <div>
                  <img
                    href={img.target}
                    src={
                      img.mobileLink === "" ? img.desktopLink : img.mobileLink
                    }
                    alt="product"
                  />
                </div>
              ))}
            </Carousel>
          </div>

          <div className="desktopStyle">
            <Carousel
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={
                oneCaro[0].componentsSection.Interval === ""
                  ? 2000
                  : oneCaro[0].componentsSection.Interval
              }
            >
              {oneCaro[0].componentsSection.link.map((img) => (
                <div>
                  <img
                    href={img.target}
                    src={
                      img.desktopLink === "" ? img.mobileLink : img.desktopLink
                    }
                    alt="product"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}

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
    </CaroselBack>
  );
}

const CaroselBack = styled.div`
  @media screen and (max-width: 750px) {
    .mobileStyle {
      display: block;
    }
    .desktopStyle {
      display: none;
    }
  }
  @media screen and (min-width: 750px) {
    .desktopStyle {
      display: block;
    }
    .mobileStyle {
      display: none;
    }
  }
`;
