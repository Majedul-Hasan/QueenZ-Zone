import React, { useState } from "react";
import styled from "styled-components";

import DealsImage from "./DealsImage";

export default function Deals() {
  const [loadingAnimation, setLoadingAnimation] = useState([
    "1",
    "1",
    "1",
    "1",

    "1",
    "1",
  ]);

  return (
    <DealsBack
      className="container mt-2"
      style={{ backgroundColor: "#F3E008", borderRadius: "10px" }}
    >
      <div className="p-2">
        {/* <h6 className="Title">
          Mega Deal Only On <b>QueenZone</b>
        </h6> */}

        <img
          src="https://f.nooncdn.com/mpcms/EN0001/assets/ab9b8399-6a70-4b6d-b76e-a5d2e773080d.png"
          alt=""
          srcset=""
          className="titleImage"
          style={{ width: "100%" }}
        />

        <div className="d-flex mt-2" style={{ flexWrap: "wrap" }}>
          {loadingAnimation.map((dt) => (
            <div className="col-6 col-lg-2">
              <DealsImage></DealsImage>
            </div>
          ))}
        </div>
      </div>
    </DealsBack>
  );
}

const DealsBack = styled.div`
  padding: 10px 10px;
  @media screen and (min-width: 550px) {
    .Title {
      font-size: 25px;
    }
  }
  @media screen and (max-width: 550px) {
    .titleImage {
      width: 200px;
    }
  }
`;
