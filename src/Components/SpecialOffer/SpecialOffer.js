import Carousel from "nuka-carousel";
import React from "react";
import styled from "styled-components";

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SpecialOffer() {
  return (
    <SpecialOfferBack className="container mt-2 px-0">
      <div
        className="p-4"
        style={{ backgroundColor: "#ebebeb", borderRadius: "10px" }}
      >
        <h6 className="Title">
          Super Offer for <b>you!!!</b>
        </h6>
        <div className="row">
          <div className="col-5">
            <Carousel
              style={{ boxShadow: "8px 11px 12px #b1b1b1" }}
              renderCenterLeftControls={({ previousSlide }) => (
                <button
                  style={{
                    color: "black",
                    background: "none",
                    fontSize: "23px",
                    border: "none",
                  }}
                  onClick={previousSlide}
                >
                  <FontAwesomeIcon icon={faAngleLeft} />
                </button>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <button
                  style={{
                    color: "black",
                    background: "none",
                    fontSize: "23px",
                    border: "none",
                  }}
                  onClick={nextSlide}
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
              )}
            >
              <img
                style={{
                  borderRadius: "10px",
                  width: "100%",
                }}
                src="https://i.ibb.co/37KZH7r/41-Mc0ec-Li-PL-AC-SX679.png"
                class="img-fluid"
                alt="..."
              />
              <img
                style={{
                  borderRadius: "10px",
                  width: "100%",
                }}
                src="https://i.ibb.co/37KZH7r/41-Mc0ec-Li-PL-AC-SX679.png"
                class="img-fluid"
                alt="..."
              />
              <img
                style={{
                  borderRadius: "10px",
                  width: "100%",
                }}
                src="https://i.ibb.co/37KZH7r/41-Mc0ec-Li-PL-AC-SX679.png"
                class="img-fluid"
                alt="..."
              />
              <img
                style={{
                  borderRadius: "10px",
                  width: "100%",
                }}
                src="https://i.ibb.co/37KZH7r/41-Mc0ec-Li-PL-AC-SX679.png"
                class="img-fluid"
                alt="..."
              />
            </Carousel>
          </div>
          <div className="col-7">
            Lorem ipsum dolor sit amet consectetuque temporibus nihil
            exercitationem iste pariatur hic.
          </div>
        </div>
      </div>
    </SpecialOfferBack>
  );
}

const SpecialOfferBack = styled.div`
  @media screen and (min-width: 550px) {
    .Title {
      font-size: 20px;
    }
  }
`;
