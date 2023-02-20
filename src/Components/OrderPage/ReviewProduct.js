import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import ImageIcon from "@mui/icons-material/Image";
import { Button } from "@mui/material";
import React, { useState } from "react";
import InputFiles from "react-input-files";
import ReactStars from "react-rating-stars-component";
import styled from "styled-components";

export default function ReviewProduct({
  loggingUserInfo,
  or,
  setIsReview,
  order,
}) {
  // for ration
  const [rating, setRation] = useState(false);
  // for msg
  const [reviewMsg, setReviewMsg] = useState("");

  // loading
  const [loading, setLoading] = useState(false);

  const ratingChanged = (newRating) => {
    setRation(newRating);
  };

  const [img, setImg] = useState(false);

  // ^ submit image state
  const [dataBaseImageState, setDatabaseImageState] = useState();

  const onImageChange = (e) => {
    setImg(e.createObjectURL);
  };

  // ^ upload image in database
  // upload image function
  const uploadImage = (e) => {
    const files = e[0];

    // database image state
    setDatabaseImageState(files);

    // local state image
    onImageChange({
      createObjectURL: URL.createObjectURL(files),
    });
  };

  // ^ submit review
  const submtReview = () => {
    setLoading(true);

    if (img === false) {
      const finalRating = {
        productId: or._id,
        rating: rating,
        orderNumber: order,
        msg: reviewMsg,
        time: new Date(),
        name: loggingUserInfo.displayName,
        email: loggingUserInfo.email,
        reviewImage: false,
      };

      fetch(
        "https://queenzzoneserver-production.up.railway.app/queenZoneUserRating",
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(finalRating),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          setIsReview(true);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    if (img !== false) {
      // ^ upload image in database
      const data = new FormData();
      data.append("file", dataBaseImageState);
      data.append("upload_preset", "QueenzZone");

      fetch("https://api.cloudinary.com/v1_1/ddcppphbi/image/upload", {
        method: "POST", // or 'PUT'

        body: data,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          uploadReviewImageMongodb(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const uploadReviewImageMongodb = (props) => {
    const finalRating = {
      productId: or._id,
      orderNumber: order,
      rating: rating,
      msg: reviewMsg,
      time: new Date(),
      name: loggingUserInfo.displayName,
      email: loggingUserInfo.email,
      reviewImage: props.url,
    };

    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneUserRating",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalRating),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setIsReview(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <ReviewBack className="row">
      <div className="col-sm-12 col-md-12 col-lg-12">
        <div className="w-100 ">
          <div className="mainDiv p-2">
            <div className="w-100 ">
              <span>
                <b>Write A Review</b>{" "}
              </span>
            </div>
            <div className="mt-2 d-flex justify-content-between align-items-center">
              <div>
                <div>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={30}
                    isHalf={true}
                    value={0}
                    edit={true}
                    activeColor="#ffd700"
                  />
                </div>

                <span style={{ fontSize: "13px", color: "gray" }}>
                  Rating {rating === false ? 0 : rating} out of 5
                </span>
              </div>
              {img === false && (
                <div>
                  <div>
                    <InputFiles
                      style={{
                        backgroundColor: "#f6be00",
                        boxShadow: "none",
                        padding: "5px",
                        borderRadius: "5px",
                        color: "white",
                      }}
                      onChange={uploadImage}
                    >
                      <div className=" d-flex align-items-center">
                        <div className="">
                          <ImageIcon></ImageIcon>
                        </div>
                        <div>Upload Image</div>
                      </div>
                    </InputFiles>

                    {console.log("this is image :", img)}
                  </div>
                </div>
              )}
            </div>

            {img !== false && (
              <div className="w-100 p-2 mainImage">
                <img
                  style={{ width: "100%", borderRadius: "5px" }}
                  src={img}
                  alt={img}
                />
                <div className="removeImage" onClick={() => setImg(false)}>
                  <DisabledByDefaultIcon
                    style={{ fontSize: "30px" }}
                  ></DisabledByDefaultIcon>
                </div>
              </div>
            )}
            <div className="mt-2">
              <div>
                <span>
                  <b>Add a written review</b>
                </span>
              </div>
              <div style={{ color: "gray", fontSize: "14px" }}>
                You could mention value for money, charging power or cord length
              </div>
              <textarea
                onChange={(e) => setReviewMsg(e.target.value)}
                value={reviewMsg}
                class="form-control mt-2"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="What did you like or dislike? What did you use this product for?"
              ></textarea>
            </div>
            {rating === false ? (
              <div className="mt-2 d-flex justify-content-between align-items-center">
                <div>
                  <span style={{ color: "red" }}>Please rate it first</span>
                </div>
                <div>
                  <Button
                    disabled
                    className="px-5"
                    variant="contained"
                    size="small"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            ) : (
              <div className="mt-2 d-flex justify-content-end">
                {loading === true ? (
                  <Button
                    className="px-5"
                    style={{ backgroundColor: "#f6be00" }}
                    variant="contained"
                    size="small"
                  >
                    <div class="  spinner-border text-secondary" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </Button>
                ) : (
                  <Button
                    onClick={() => submtReview()}
                    className="px-5"
                    style={{ backgroundColor: "#f6be00" }}
                    variant="contained"
                    size="small"
                  >
                    Submit
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </ReviewBack>
  );
}

const ReviewBack = styled.div`
  .mainDiv {
    border: 2px solid #fec400;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 25%) 0px 5px 45px -10px;
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
`;
