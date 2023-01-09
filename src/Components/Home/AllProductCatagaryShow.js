import React from "react";
import ShowProductCategory from "./ShowProductCategory";

export default function AllProductCatagaryShow({
  allRating,
  ca,
  setAniImg,
  seasonStroageProductFunction,
  productData,
  categorys,
  id,
  top20,
}) {
  console.log(categorys, ` this is category layout  : `, ca);
  console.log(` this is category layout  : `, top20);

  return (
    <div>
      <ShowProductCategory
        productDataRoot={productData}
        allRating={allRating}
        ca={ca}
        top20={top20}
        categorys={categorys}
        seasonStroageProductFunction={seasonStroageProductFunction}
        setAniImg={setAniImg}
      ></ShowProductCategory>
    </div>
  );
}
