import React from "react";
import ShowProductCategory from "./ShowProductCategory";

export default function AllProductCatagaryShow({
  allRating,
  ca,
  setAniImg,
  seasonStroageProductFunction,
  productData,
}) {
  console.log("this is category layout  : ", ca);

  return (
    <div>
      <ShowProductCategory
        productDataRoot={productData}
        allRating={allRating}
        ca={ca}
        seasonStroageProductFunction={seasonStroageProductFunction}
        setAniImg={setAniImg}
      ></ShowProductCategory>
    </div>
  );
}
