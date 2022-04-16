import React from "react";
import AllProductCatagaryShow from "./AllProductCatagaryShow";
import CarouselHome from "./CarouselHome";
import ShowGroupPicFirst from "./ShowGroupPicFirst";

export default function Layout({ setAniImg }) {
  return (
    <div className="mb-5 pb-3">
      <CarouselHome></CarouselHome>
      <ShowGroupPicFirst></ShowGroupPicFirst>
      <AllProductCatagaryShow setAniImg={setAniImg}></AllProductCatagaryShow>
    </div>
  );
}
