import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

import ReactStars from "react-rating-stars-component";

import TimeAgo from "javascript-time-ago";

// English.
import en from "javascript-time-ago/locale/en";
import { useState } from "react";

TimeAgo.addDefaultLocale(en);

// Create formatter (English).
const timeAgo = new TimeAgo("en-US");

export default function OldReviewSec({ oldReview, loggingUserInfo }) {
  console.log("this is review oldReviewSec data : ", oldReview);

  const Uname = loggingUserInfo.displayName;

  const [showImage, setShowImage] = useState(true);

  return (
    <OldReviewback>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="w-100 ">
            <div className="mainDiv p-2">
              <div className="w-100 d-flex justify-content-between align-items-center">
                <div>
                  <span>
                    <b>
                      {" "}
                      {Uname.length > 12
                        ? Uname.substring(0, 13) + "..."
                        : Uname}
                    </b>{" "}
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: "13px", color: "gray" }}>
                    {oldReview &&
                      timeAgo.format(new Date(oldReview[0].rating.time))}
                  </span>
                </div>
              </div>
              <div className="mt-2 d-flex  align-items-center">
                {oldReview && (
                  <div>
                    <ReactStars
                      count={5}
                      size={30}
                      value={oldReview[0].rating.rating}
                      isHalf={true}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                )}
                <div className="px-2">
                  <span style={{ fontSize: "14px" }}>
                    (Rating {oldReview && oldReview[0].rating.rating} out of 5)
                  </span>
                </div>
              </div>

              {oldReview && oldReview[0].rating.reviewImage !== false && (
                <div className="w-100 p-2 mainImage">
                  {oldReview && (
                    <div>
                      <div
                        className={`mt-2 ${
                          showImage === true && "detailsImageHide"
                        }`}
                      >
                        <img
                          className={`${showImage ? "hideImage" : "showImage"}`}
                          style={{
                            width: "100%",
                            borderRadius: "5px",
                          }}
                          src={oldReview[0].rating.reviewImage}
                          alt="saf"
                        />
                      </div>

                      <div
                        class="d-flex justify-content-center "
                        style={{ marginTop: "-10px" }}
                      >
                        {showImage ? (
                          <Button
                            style={{
                              backgroundColor: " #fec400",

                              boxShadow: "none",
                              color: "black",
                            }}
                            variant="contained"
                            onClick={() => setShowImage(!showImage)}
                            size="small"
                          >
                            {" "}
                            Show Image
                          </Button>
                        ) : (
                          <Button
                            style={{
                              border: "1px solid #fec400",
                              color: "#fec400",
                            }}
                            variant="outlined"
                            size="small"
                            onClick={() => setShowImage(!showImage)}
                          >
                            {" "}
                            Show less
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div
                className="p-2"
                style={{ backgroundColor: "#ffd7003b", borderRadius: "5px" }}
              >
                {oldReview && (
                  <span style={{ fontSize: "14px", color: "#0F1111" }}>
                    {oldReview[0].rating.msg}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </OldReviewback>
  );
}

const OldReviewback = styled.div`
  .mainDiv {
    border: 1px solid #fec400;
    border-radius: 5px;
  }

  .mainImage {
    position: relative;
  }
  .removeImage {
    position: absolute;
    top: 5px;
    right: 5px;
    color: #ff3737;
  }

  .hideImage {
    height: 100px;
    object-fit: none;
  }
  .detailsImageHide {
    -webkit-mask-image: -webkit-gradient(
      linear,
      center bottom,
      center top,

      color-stop(6, rgba(0, 0, 0, 9)),
      color-stop(0, rgba(0, 0, 0, 0))
    );
  }
`;
