import { Carousel } from "@trendyol-js/react-carousel";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function SwipeableCarousel({ id, SwipeableCarouselAll }) {
  const [oneSwipeableCarousel, setOneSwipeableCarousel] = useState([]);

  const [titleImageShow, setTitleImageShow] = useState(false);

  useEffect(() => {
    const filterPoster = SwipeableCarouselAll.filter(
      (dt) => dt.componentsSection.id === id
    );

    setOneSwipeableCarousel(filterPoster);
  }, [SwipeableCarouselAll]);

  useEffect(() => {
    if (!oneSwipeableCarousel.length === false) {
      if (
        oneSwipeableCarousel[0].componentsSection.boxMobileView === "" ||
        oneSwipeableCarousel[0].componentsSection.boxDesktopView === ""
      ) {
        setTitleImageShow(false);
      } else {
        setTitleImageShow(true);
      }
    }
  }, [oneSwipeableCarousel]);

  return (
    <div>
      {!oneSwipeableCarousel.length === false && (
        <SwipeableCarouselBack
          className={`container px-0 mb-${oneSwipeableCarousel[0].componentsSection.boxMb} mt-${oneSwipeableCarousel[0].componentsSection.boxMt}  pb-${oneSwipeableCarousel[0].componentsSection.boxPb} pt-${oneSwipeableCarousel[0].componentsSection.boxPt}   `}
          style={{
            borderRadius: `${oneSwipeableCarousel[0].componentsSection.boxBorRa}px`,
            backgroundColor: `${oneSwipeableCarousel[0].componentsSection.boxBgClr}`,
          }}
        >
          {!oneSwipeableCarousel.length === false && (
            <div>
              <div
                class={` mb-${oneSwipeableCarousel[0].componentsSection.boxTitleMb} mt-${oneSwipeableCarousel[0].componentsSection.boxTitleMt} pb-${oneSwipeableCarousel[0].componentsSection.boxTitlePb} pt-${oneSwipeableCarousel[0].componentsSection.boxTitlePt}  d-flex justify-content-between `}
              >
                <div className="mb-2 px-2">
                  <h5 className="title" style={{ fontSize: "25px" }}>
                    <a
                      style={{ textDecoration: "none", color: "black" }}
                      href={
                        oneSwipeableCarousel[0].componentsSection
                          .titleImageBtnTarget
                      }
                    >
                      <b>
                        {" "}
                        {oneSwipeableCarousel[0].componentsSection.boxTitle}
                      </b>
                    </a>
                  </h5>
                </div>
                {oneSwipeableCarousel[0].componentsSection.boxTitleBtnTxt !==
                  "" && (
                  <div className="px-2">
                    <button
                      style={{
                        display: "block",
                        backgroundColor: `${oneSwipeableCarousel[0].componentsSection.boxTitleBtnClr}`,
                        border: "none",
                        color: "white",
                        fontSize: "15px",
                      }}
                    >
                      {oneSwipeableCarousel[0].componentsSection.boxTitleBtnTxt}
                    </button>
                  </div>
                )}
              </div>

              <div className="mobileStyle">
                {titleImageShow === true && (
                  <div
                    className={`img-fluid pt-${oneSwipeableCarousel[0].componentsSection.boxTitleImagePt}  pb-${oneSwipeableCarousel[0].componentsSection.boxTitleImagePb}  mt-${oneSwipeableCarousel[0].componentsSection.boxTitleImageMt}  mb-${oneSwipeableCarousel[0].componentsSection.boxTitleImageMb}   `}
                  >
                    {" "}
                    <a
                      href={
                        oneSwipeableCarousel[0].componentsSection
                          .titleImageBtnTarget
                      }
                    >
                      {" "}
                      <img
                        style={{ width: "100%" }}
                        src={
                          oneSwipeableCarousel[0].componentsSection
                            .boxMobileView === ""
                            ? oneSwipeableCarousel[0].componentsSection
                                .boxDesktopView
                            : oneSwipeableCarousel[0].componentsSection
                                .boxMobileView
                        }
                        className="img-fluid "
                        alt="..."
                      ></img>{" "}
                    </a>
                  </div>
                )}

                {!oneSwipeableCarousel.length === false && (
                  <Carousel
                    // show={window.innerWidth < 990 ? 3.5 : 9.5}
                    show={
                      oneSwipeableCarousel[0].componentsSection
                        .boxShowMobileDevice
                    }
                    slide={3}
                    swiping={true}
                    rightArrow={false}
                    leftArrow={false}
                    responsive={true}
                  >
                    {oneSwipeableCarousel[0].componentsSection.link.map(
                      (img) => (
                        <div>
                          <a href={img.target}>
                            {" "}
                            <img
                              class="img-fluid px-1"
                              src={img.link}
                              alt="..."
                            />
                          </a>
                        </div>
                      )
                    )}
                  </Carousel>
                )}
              </div>
              <div></div>
              <div className="desktopStyle">
                {titleImageShow === true && (
                  <div
                    className={`img-fluid pt-${oneSwipeableCarousel[0].componentsSection.boxTitleImagePt}  pb-${oneSwipeableCarousel[0].componentsSection.boxTitleImagePb}  mt-${oneSwipeableCarousel[0].componentsSection.boxTitleImageMt}  mb-${oneSwipeableCarousel[0].componentsSection.boxTitleImageMb}   `}
                  >
                    <a
                      href={
                        oneSwipeableCarousel[0].componentsSection
                          .titleImageBtnTarget
                      }
                    >
                      <img
                        style={{ width: "100%" }}
                        src={
                          oneSwipeableCarousel[0].componentsSection
                            .boxDesktopView === ""
                            ? oneSwipeableCarousel[0].componentsSection
                                .boxMobileView
                            : oneSwipeableCarousel[0].componentsSection
                                .boxDesktopView
                        }
                        class="img-fluid px-1"
                        alt="..."
                      ></img>
                    </a>
                  </div>
                )}

                {!oneSwipeableCarousel.length === false && (
                  <Carousel
                    show={
                      oneSwipeableCarousel[0].componentsSection
                        .boxShowDesktopDevice
                    }
                    slide={3}
                    swiping={true}
                    rightArrow={false}
                    leftArrow={false}
                    responsive={true}
                  >
                    {oneSwipeableCarousel[0].componentsSection.link.map(
                      (img) => (
                        <div>
                          <a href={img.target}>
                            {" "}
                            <img class="img-fluid" src={img.link} alt="..." />
                          </a>
                        </div>
                      )
                    )}
                  </Carousel>
                )}
              </div>
            </div>
          )}
        </SwipeableCarouselBack>
      )}
    </div>
  );
}

const SwipeableCarouselBack = styled.div`
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
