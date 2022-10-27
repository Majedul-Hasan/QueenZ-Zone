import React from "react";
import ShowProductCategory from "./ShowProductCategory";

export default function AllProductCatagaryShow({
  allRating,
  ca,
  setAniImg,
  seasonStroageProductFunction,
}) {
  console.log("this is category layout  : ", ca);

  return (
    <div>
      <ShowProductCategory
        allRating={allRating}
        ca={ca}
        seasonStroageProductFunction={seasonStroageProductFunction}
        setAniImg={setAniImg}
      ></ShowProductCategory>
    </div>
  );
}
