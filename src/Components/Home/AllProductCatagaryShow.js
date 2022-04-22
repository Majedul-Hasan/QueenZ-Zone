import React from "react";
import ShowProductCategory from "./ShowProductCategory";

export default function AllProductCatagaryShow({ ca, setAniImg }) {
  console.log("this is category layout  : ", ca);

  return (
    <div>
      <ShowProductCategory ca={ca} setAniImg={setAniImg}></ShowProductCategory>
    </div>
  );
}
