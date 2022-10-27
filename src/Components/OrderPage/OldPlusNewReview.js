import React, { useEffect, useState } from "react";

import OldReviewSec from "./OldReviewSec";
import ReviewProduct from "./ReviewProduct";

export default function OldPlusNewReview({ or, loggingUserInfo, order }) {
  // is review ?
  const [isReview, setIsReview] = useState("loading");

  const [oldReview, setOldReview] = useState(false);

  console.log("this is order product is : ", or);

  useEffect(() => {
    fetch(
      `https://glacial-shore-36532.herokuapp.com/queenZoneUserRatingFind?email=${loggingUserInfo.email}&productKey=${or._id}&orderKey=${order}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(
          "this is data fetch review data : ",
          json,
          loggingUserInfo.email,
          or._id,
          order
        );

        if (!json.length === true) {
          setIsReview(false);
        } else {
          setOldReview(json);

          setIsReview(true);
        }
      });
  }, [isReview]);

  return (
    <div>
      {isReview === "loading" && (
        <div className="p-3 d-flex justify-content-center">
          <div class="spinner-border text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {isReview === false ? (
        <ReviewProduct
          setIsReview={setIsReview}
          or={or}
          order={order}
          loggingUserInfo={loggingUserInfo}
        ></ReviewProduct>
      ) : (
        <OldReviewSec
          loggingUserInfo={loggingUserInfo}
          oldReview={oldReview}
          order={order}
        ></OldReviewSec>
      )}
    </div>
  );
}
