import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

export default function StaticBanner({ id, staticBanner }) {
  const [oneStaticBanner, setOneStaticBanner] = useState([]);

  useEffect(() => {
    const filterPoster = staticBanner.filter(
      (dt) => dt.componentsSection.id === id
    );

    setOneStaticBanner(filterPoster);
  }, [staticBanner]);

  return (
    <StaticBannerBack className="container px-0">
      {!oneStaticBanner.length === false && (
        <a href={oneStaticBanner[0].componentsSection.target}>
          <div className="mobileStyle">
            <img
              style={{ width: "100%" }}
              src={
                oneStaticBanner[0].componentsSection.mobilePosterLink === ""
                  ? oneStaticBanner[0].componentsSection.desktopPosterLink
                  : oneStaticBanner[0].componentsSection.mobilePosterLink
              }
              class="img-fluid"
              alt="..."
            ></img>
          </div>
          <div className="desktopStyle">
            <img
              style={{ width: "100%" }}
              src={
                oneStaticBanner[0].componentsSection.desktopPosterLink === ""
                  ? oneStaticBanner[0].componentsSection.mobilePosterLink
                  : oneStaticBanner[0].componentsSection.desktopPosterLink
              }
              class="img-fluid"
              alt="..."
            ></img>
          </div>
        </a>
      )}
    </StaticBannerBack>
  );
}

const StaticBannerBack = styled.div`
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
