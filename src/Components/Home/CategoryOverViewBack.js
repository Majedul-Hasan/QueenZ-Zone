import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductPorster from "./CategoryOverView";

export default function CategoryOverViewBack({ id, productPoster }) {
  const [onePoster, setOnePoster] = useState([]);

  useEffect(() => {
    const filterPoster = productPoster.filter(
      (dt) => dt.componentsSection.id === id
    );

    setOnePoster(filterPoster);
  }, [productPoster]);

  // poster title
  const [posterDisplay, setPosterDisplay] = useState(false);

  useEffect(() => {
    if (!onePoster.length === false) {
      if (
        onePoster[0].componentsSection.titleImageDesktopLink === "" ||
        onePoster[0].componentsSection.titleImageMobileLink === ""
      ) {
        setPosterDisplay(false);
      } else {
        setPosterDisplay(true);
      }
    }
  }, [onePoster]);

  return (
    <ProductPosterBack>
      {!onePoster.length === false && (
        <div>
          <div
            className={`container mb-${onePoster[0].componentsSection.boxMb} mt-${onePoster[0].componentsSection.boxMt} pb-${onePoster[0].componentsSection.boxPb} pt-${onePoster[0].componentsSection.boxPt} `}
            style={{
              borderRadius: `${onePoster[0].componentsSection.boxBorderRadios}px`,
              backgroundColor: `${onePoster[0].componentsSection.boxBg}`,
            }}
          >
            {onePoster[0].componentsSection.title !== "" && (
              <a
                style={{ textDecoration: "none" }}
                href={onePoster[0].componentsSection.titleAndImageTarget}
              >
                <div
                  className={` titleFontSize px-${
                    onePoster[0].componentsSection.titlePx
                  } pt-${onePoster[0].componentsSection.titlePt} pb-${
                    onePoster[0].componentsSection.titlePb
                  } p-${onePoster[0].componentsSection.titleP}  ${
                    onePoster[0].componentsSection.titleAlign === "left" &&
                    "d-flex justify-content-start"
                  } ${
                    onePoster[0].componentsSection.titleAlign === "center" &&
                    " d-flex justify-content-center"
                  } ${
                    onePoster[0].componentsSection.titleAlign === "right" &&
                    " d-flex justify-content-end"
                  }   `}
                  style={{
                    color: `${onePoster[0].componentsSection.titleClr}`,
                  }}
                >
                  <span>
                    {" "}
                    <b>{onePoster[0].componentsSection.title}</b>{" "}
                  </span>
                </div>
              </a>
            )}

            {posterDisplay === true && (
              <div>
                <a href={onePoster[0].componentsSection.titleAndImageTarget}>
                  {" "}
                  <div className="mobileStyle">
                    <img
                      className={` mx-${onePoster[0].componentsSection.titleImageMx}  mt-${onePoster[0].componentsSection.titleImageMt} mb-${onePoster[0].componentsSection.titleImageMb} m-${onePoster[0].componentsSection.titleImageM} `}
                      style={{ width: "100%" }}
                      src={
                        onePoster[0].componentsSection.titleImageMobileLink ===
                        ""
                          ? onePoster[0].componentsSection.titleImageDesktopLink
                          : onePoster[0].componentsSection.titleImageMobileLink
                      }
                      class="img-fluid "
                      alt="..."
                    ></img>
                  </div>
                  <div className="desktopStyle">
                    <img
                      className={` mx-${onePoster[0].componentsSection.titleImageMx}  mt-${onePoster[0].componentsSection.titleImageMt} mb-${onePoster[0].componentsSection.titleImageMb} m-${onePoster[0].componentsSection.titleImageM} `}
                      style={{ width: "100%" }}
                      src={
                        onePoster[0].componentsSection.titleImageDesktopLink ===
                        ""
                          ? onePoster[0].componentsSection.titleImageMobileLink
                          : onePoster[0].componentsSection.titleImageDesktopLink
                      }
                      class="img-fluid "
                      alt="..."
                    ></img>
                  </div>{" "}
                </a>
              </div>
            )}

            <div className="d-flex" style={{ flexWrap: "wrap" }}>
              {onePoster[0].componentsSection.link.map((img) => (
                <div className="col-6 col-lg-2">
                  {" "}
                  <ProductPorster img={img}></ProductPorster>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </ProductPosterBack>
  );
}

const ProductPosterBack = styled.div`
  @media screen and (max-width: 750px) {
    .mobileStyle {
      display: block;
    }
    .desktopStyle {
      display: none;
    }
    .titleFontSize {
      font-size: 20px;
    }
  }
  @media screen and (min-width: 750px) {
    .desktopStyle {
      display: block;
    }
    .mobileStyle {
      display: none;
    }
    .titleFontSize {
      font-size: 25px;
    }
  }
`;
